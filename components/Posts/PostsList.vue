<template>
  <div class="post-list">
    <div class="sorting-line">
      <v-select :selected="selected" :options="options" @select="sortByCategories" />
      <div class="grid">
        <div
          class="grid__svg grid__svg--grid grid__item grid__item--grid v-cursor-btn"
          :class="{ active: grid }"
          @click="grid = !grid"
        >
          <SVgrid />
        </div>
        <div
          class="grid__svg grid__list grid__item grid__item--Glist v-cursor-btn"
          :class="{ active: !grid }"
          @click="grid = !grid"
        >
          <SVGlist />
        </div>
      </div>
    </div>
    <simplebar class="custom-bar" data-simplebar-auto-hide="false">
      <div class="post-wrapper">
        <!-- PostPreview -->
        <postPreview
          v-for="post in sortedProducts"
          :key="post.id"
          :post="post"
          :admin="admin"
          :grid="grid"
        />
      </div>
    </simplebar>
    <!-- resize -->
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import postPreview from "@/components/Posts/PostPreview.vue";
import vSelect from "@/components/UI/Controls/v-select.vue";
import SVGlist from "@/static/img/svg/list.svg";
import SVgrid from "@/static/img/svg/grid.svg";
export default {
  components: { postPreview, vSelect, SVGlist, SVgrid },
  props: {
    admin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      grid: true,
      options: [
        { name: "Все", value: "all" },
        { name: "Верстка", value: "html" },
        { name: "Vue js", value: "vue js" },
        { name: "HTML to WP", value: "html to wp" }
      ],
      selected: "Все",
      sortedProducts: []
    };
  },
  created() {
    this.sortByCategories();
  },
  computed: {
    ...mapGetters(["getPostsLoaded"])
  },
  methods: {
    sortByCategories(option) {
      this.sortedProducts = [...this.getPostsLoaded];

      if (option && option.value !== "all") {
        this.sortedProducts = this.sortedProducts.filter(product => {
          this.selected = option.name;
          return product.tags.includes(option.value);
        });
      }
      if (option && option.value === "all") {
        this.selected = "Все";
      }

      return this.getPostsLoaded;
    },

    handleResize() {
      if (window.innerWidth <= 768) {
        this.grid = true;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins";

select::-ms-expand {
  display: none;
}
.sorting-line {
  padding-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @include lg {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0rem;
  }
}
.grid {
  display: flex;
  align-items: center;

  @include md {
    display: none;
  }
  & > *:not(:last-child) {
    margin-right: 15px;
  }

  &__item {
    width: 22px;
    height: 22px;
    cursor: pointer;

    &.active {
      opacity: 1;
    }
    &:hover {
      opacity: 0.7;
    }

    svg {
      position: relative;
      z-index: -1;
    }
  }
  &__svg {
    margin-right: 8px;
    fill: var(--white);
    opacity: 0.5;
  }
  &__svg--grid {
    width: 20px;
  }
  &__list {
    width: 24px;
  }
}
/* Transition */
.select:hover::after {
  color: var(--main-red);
}

.post-wrapper {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  padding-top: 10px;
}
.post-list {
  width: 100%;
}

.custom-bar {
  height: calc(100vh - 67px - 96px - 60px);

  @include lg {
    height: 700px;
  }

  @include md {
    height: 500px;
  }

  .simplebar-scrollbar:before {
    background: var(--color-pseudo-element);
  }
}
</style>
