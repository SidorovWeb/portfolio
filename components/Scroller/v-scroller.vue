<template>
  <div class="main-scroller v-scroller" v-if="!screen">
    <!-- ScrollerItem -->
    <v-scroller-Item />
    <!-- <div v-if="getDesktop" class="parallax" id="scene">
      <div
        class="parallax__element"
        v-for="(post, index) in postsLoaded"
        :key="post.id"
        :class="'parallax__element--' + index"
      >
        <picture>
          <source :srcset="post.webp" type="image/webp" />
          <img :src="post.img" :alt="post.title" decoding="async" />
        </picture>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
// import { mapState, mapGetters } from "vuex";
// import Parallax from "parallax-js";
// import { TimelineMax } from "gsap";
import vScrollerItem from "@/components/Scroller/Scroller-item/v-scroller-Item.vue";

export default {
  name: "v-scroller",
  components: { vScrollerItem },
  data() {
    return {
      done: false
    };
  },
  // mounted() {
  //   this.animElems();
  // },
  computed: {
    ...mapState(["screen"])
    // ...mapGetters(["getPostsLoaded", "getMobile", "getDesktop"])

    // postsLoaded() {
    //   const posts = this.getPostsLoaded;
    //   const sortingPosts = [...posts].sort(() => Math.random() - 0.5);
    //   const newArray = [];

    //   for (let i = 0; i < 10; i++) {
    //     newArray.push(sortingPosts[i]);
    //   }

    //   return newArray;
    // }
  }
  // watch: {
  //   getDesktop: function(boolean) {
  //     if (boolean) {
  //       this.animElems();
  //     }
  //   }
  // },
  // methods: {
  // animElems() {
  //   const self = this;
  //   let tl = new TimelineMax({ onComplete: self.setDataattrForElems });
  //   const elems = document.querySelectorAll(".parallax__element");
  //   tl.set(elems, {
  //     autoAlpha: 0,
  //     y: 30,
  //     x: 10,
  //     scale: 0.9
  //   });
  //   tl.to(elems, 1.5, {
  //     y: 0,
  //     x: 0,
  //     autoAlpha: 1,
  //     scale: 1,
  //     delay: 1.5
  //   });
  // }
  // setDataattrForElems() {
  //   const array = [
  //     "-0.3",
  //     "0.1",
  //     "-0.1",
  //     "0.2",
  //     "0.1",
  //     "0.2",
  //     "0.05",
  //     "-0.3",
  //     "-0.1",
  //     "0.1"
  //   ];
  //   const elems = document.querySelectorAll(".parallax__element");
  //   elems.forEach((e, i) => {
  //     e.setAttribute("data-depth", array[i]);
  //   });
  //   if (this.getMobile) {
  //     return;
  //   }
  //   const scene = document.getElementById("scene");
  //   new Parallax(scene);
  // }
  // }
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
  filter: blur(4px);
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
    z-index: 3;
  }

  &__element {
    position: absolute !important;
    pointer-events: none;
    border-radius: 10px;
    overflow: hidden;

    &--0 {
      top: 8% !important;
      left: 2% !important;
      width: 36vw;
      z-index: 2;
    }
    &--1 {
      top: 36% !important;
      left: 50% !important;
      width: 22vw;
    }
    &--2 {
      top: 70% !important;
      left: 4% !important;
      width: 28vw;
      z-index: 1;
    }
    &--3 {
      top: 41% !important;
      left: 81% !important;
      width: 20vw;
    }
    &--4 {
      top: 66% !important;
      left: 39% !important;
      width: 17vw;
    }
    &--5 {
      top: 10% !important;
      left: 44% !important;
      width: 20vw;
      z-index: 1;
    }
    &--6 {
      top: 51% !important;
      left: 37% !important;
      width: 10vw;
    }
    &--7 {
      top: 70% !important;
      left: 60% !important;
      width: 32vw;
      z-index: 2;
    }
    &--8 {
      top: 36% !important;
      left: 22% !important;
      width: 20vw;
      z-index: 1;
    }
    &--9 {
      top: 10% !important;
      left: 74% !important;
      width: 25vw;
    }
  }
}
</style>
