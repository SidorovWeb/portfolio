<template>
  <section class="post-list">
    <div class="container">
      <div class="sorting-line">
        <div class="select">
          <select @change="onChange($event)">
            <option :value="this.$t('all')"> {{this.$t('all')}} </option>
            <option :value="this.$t('html')">{{this.$t('html')}}</option>
            <option value="wp">html to WP</option>
            <option value="vue js">Vue js</option>
          </select>
        </div>
        <div class="grid">
          <SVgrid class="grid__svg" :class="{active: grid}" @click="grid = !grid" />
          <SVGlist class="grid__svg grid__list" :class="{active: !grid}" @click="grid = !grid" />
        </div>
      </div>
      <div class="post-wrapper">
        <!-- PostPreview -->
        <postPreview v-for="post in posts" :key="post.id" :post="post" :admin="admin" :grid="grid" />
      </div>
    </div>
    <resize-observer @notify="handleResize" />
  </section>
</template>

<script>
import postPreview from "@/components/Posts/PostPreview.vue"
import SVGlist from "@/static/img/svg/list.svg"
import SVgrid from "@/static/img/svg/grid.svg"
export default {
  components: { postPreview, SVGlist, SVgrid },
  data () {
    return {
      grid: true
    }
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange () {
      let v = null
      const posts = this.posts
      const pst = document.querySelectorAll(".post-col")
      if (event.target.value.toLowerCase() == "все" || event.target.value.toLowerCase() == "all") {
        v = "all"
      }
      if (event.target.value.toLowerCase() == "верстка" || event.target.value.toLowerCase() == "html") {
        v = "html"
      }
      if (event.target.value.toLowerCase() == "wp") {
        v = "html to wp"
      }
      if (event.target.value.toLowerCase() == "vue js") {
        v = "vue js"
      }

      posts.forEach((e, i) => {
        const { tags } = e
        pst[i].style.display = "flex"
        pst[i].style.display = "none"
        if (v == "all") {
          pst[i].style.display = "flex"
        }
        tags.forEach(t => {
          if (v == t) {
            pst[i].style.display = "flex"
          }
        })
      })
    },
    handleResize () {
      if (window.innerWidth <= 768) {
        this.grid = true
      }
    }
  }
}
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
}

.select {
  position: relative;
  display: flex;
  height: 2rem;
  width: 10rem;
  line-height: 2rem;
  overflow: hidden;
  border-radius: 0.25em;
  padding: 0 0.5em;
  border: 1px solid var(--color-pseudo-element);
  background-color: transparent;
  cursor: pointer;
  & select {
    background-color: transparent;
    color: var(--white);
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    flex: 1;
    cursor: pointer;
  }
}
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 0.5rem;
  color: var(--home-color-text);
  background: var(--color-pseudo-element);
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
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
  &__svg {
    width: 18px;
    margin-right: 8px;
    fill: var(--white);
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
    &.active {
      opacity: 1;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  &__list {
    width: 22px;
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
  padding-top: 3rem;
  margin: 0 -1rem;
}
</style>
