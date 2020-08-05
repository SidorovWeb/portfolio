<template>
  <div class="main-scroller" v-if="!screen">
    <!-- ScrollerItem -->
    <scrollerItem />
    <div v-if="getDesktop" class="parallax" id="scene">
      <div
        class="parallax__element"
        v-for="(post, index) in postsLoaded"
        :key="post.id"
        :class="'parallax__element--' + index"
      >
        <picture>
          <source :srcset="post.webp" type="image/webp" />
          <img :src="post.img" :alt="post.title" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Parallax from "parallax-js";
import { TimelineMax } from "gsap";
import scrollerItem from "@/components/Scroller/ScrollerItem.vue";

export default {
  components: { scrollerItem },
  data() {
    return {
      done: false
    };
  },
  mounted() {
    this.animElems();
  },
  computed: {
    ...mapState(["screen"]),
    ...mapGetters(["getPostsLoaded", "getMobile", "getDesktop"]),

    postsLoaded() {
      const posts = this.getPostsLoaded;
      const sortingPosts = [...posts].sort(() => Math.random() - 0.5);
      const newArray = [];

      for (let i = 0; i < 10; i++) {
        newArray.push(sortingPosts[i]);
      }

      return newArray;
    }
  },
  watch: {
    getDesktop: function(boolean) {
      if (boolean) {
        this.animElems();
      }
    }
  },
  methods: {
    animElems() {
      const self = this;
      let tl = new TimelineMax({ onComplete: self.setDataattrForElems });
      const elems = document.querySelectorAll(".parallax__element");

      TweenMax.set(elems, {
        autoAlpha: 0,
        yPercent: 2,
        scale: 0.95
      });

      tl.staggerTo(
        elems,
        1,
        {
          yPercent: 0,
          autoAlpha: 1,
          scale: 1,
          ease: Power1.easeNone
        },
        0.3
      );
    },

    setDataattrForElems() {
      const array = [
        "-0.4",
        "0.1",
        "-0.1",
        "0.2",
        "0.1",
        "0.2",
        "0.1",
        "-0.4",
        "-0.1",
        "0.1"
      ];
      const elems = document.querySelectorAll(".parallax__element");
      elems.forEach((e, i) => {
        e.setAttribute("data-depth", array[i]);
      });

      const scene = document.getElementById("scene");
      const parallaxInstance = new Parallax(scene);
    }
  }
};
</script>

<style lang="scss">
.parallax {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  filter: blur(5px);

  pointer-events: none;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: var(--bg-color-rgba);
    z-index: 2;
  }

  &__element {
    position: absolute !important;
    pointer-events: none;

    &--0 {
      top: 8% !important;
      left: 2% !important;
      width: 36vw;
      z-index: 1;
    }
    &--1 {
      top: 30% !important;
      left: 48% !important;
      width: 20vw;
    }
    &--2 {
      top: 70% !important;
      left: 4% !important;
      width: 28vw;
      z-index: 1;
    }
    &--3 {
      top: 80% !important;
      left: 35% !important;
      width: 20vw;
    }
    &--4 {
      top: 60% !important;
      left: 55% !important;
      width: 20vw;
    }
    &--5 {
      top: 10% !important;
      left: 40% !important;
      width: 20vw;
      z-index: 1;
    }
    &--6 {
      top: 44% !important;
      left: 25% !important;
      width: 20vw;
    }
    &--7 {
      top: 70% !important;
      left: 60% !important;
      width: 32vw;
      z-index: 1;
    }
    &--8 {
      top: 35% !important;
      left: 58% !important;
      width: 28vw;
      z-index: 1;
    }
    &--9 {
      top: 10% !important;
      left: 85% !important;
      width: 25vw;
    }
  }
}
</style>
