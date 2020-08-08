<template>
  <div class="portfolio v-portfolio">
    <!-- v-headline -->
    <v-headline title="portfolio__title" word1="h2Portfolio1" word2="h2Portfolio2" />
    <div class="portfolio__inner">
      <v-posts-list />
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from "gsap";
export default {
  name: "v-portfolio",
  mounted() {
    this.animElems();
  },
  computed: {
    clickNav() {
      return this.$store.getters.getClickNavMenu;
    }
  },
  watch: {
    clickNav: function(clickMenuNav) {
      if (clickMenuNav) {
        this.leave();
      }
    }
  },
  methods: {
    animElems() {
      let tl = new TimelineMax({});
      const title = document.querySelectorAll(".title-section .word");
      const postItem = document.querySelectorAll(".post-col");
      const select = document.querySelector(".sorting-line .v-select");
      const grid = document.querySelector(".sorting-line .grid");
      const scrollbar = document.querySelector(
        ".simplebar-track.simplebar-vertical"
      );

      TweenMax.set([postItem, select, grid, scrollbar], {
        autoAlpha: 0,
        scale: 0.95,
        yPercent: 2
      });

      tl.staggerFromTo(
        title,
        1,
        { yPercent: 115, autoAlpha: 1 },
        { delay: 0.4, yPercent: 0 },
        0.15
      );
      tl.staggerTo(
        postItem,
        0.8,
        {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1
        },
        0.15,
        1
      );
      tl.to(
        [select, grid, scrollbar],
        0.8,
        {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1
        },
        2
      );
    },
    leave() {
      let tl = new TimelineMax();
      const title = document.querySelectorAll(".title-section .word");
      const postItem = document.querySelectorAll(".post-col");
      const select = document.querySelector(".sorting-line .v-select");
      const grid = document.querySelector(".sorting-line .grid");
      const scrollbar = document.querySelector(
        ".simplebar-track.simplebar-vertical"
      );

      tl.to([title, postItem, select, grid, scrollbar], 0.5, {
        autoAlpha: 0
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins.scss";

.portfolio {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding-top: 67px;
  @include xlg {
    position: relative;
  }
  @include lg {
    flex-direction: column;
    margin-bottom: 4rem;
    padding-top: 0;
  }
  &__title {
    margin-top: 5rem;
    @include lg {
      margin-top: 0;
      margin-bottom: 2rem;
    }
  }
  &__inner {
    position: relative;
    width: calc(70% - 15px);
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: 100%;

    @include lg {
      width: 100%;
    }
  }
  &__img-wrapper {
    display: inline-block;
    height: inherit;
    max-width: 800px;
    width: 100%;
  }
  &__img {
    object-fit: cover;
  }
}
</style>
