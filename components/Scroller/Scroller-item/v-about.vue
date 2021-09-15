<template>
  <div class="about v-about">
    <div class="about__text-zone">
      <!-- v-headline -->
      <v-headline title="about__title" word1="h2About1" word2="h2About2" />
      <div class="about__text-container">
        <!-- text  -->
        <p class="about__text text-zone__text">{{ this.$t("aboutText") }}</p>
      </div>
    </div>
    <div class="about__photo-wrapper">
      <div class="about__photo">
        <SVGSmileyFace class="about__svg" />
      </div>
    </div>
  </div>
</template>

<script>
import SVGSmileyFace from "@/static/img/svg/focused-working.svg";
import { TweenMax, TimelineMax } from "gsap";

export default {
  name: "v-about",
  components: { SVGSmileyFace },
  mounted() {
    this.animeAboutePhoto();
    this.animElems();
  },
  computed: {
    clickNav() {
      return this.$store.getters.getClickNavMenu;
    },
  },
  watch: {
    clickNav: function (clickMenuNav) {
      if (clickMenuNav) {
        this.leave();
      }
    },
  },
  methods: {
    animeAboutePhoto() {
      let tl = new TimelineMax();
      tl.fromTo(
        ".svg-right-hand",
        0.15,
        { y: "0" },
        { y: ".5px", ease: "none", yoyo: true, repeat: -1 },
        "step1"
      ).fromTo(
        ".svg-left-hand",
        0.15,
        { y: "0" },
        { y: ".5px", ease: "none", yoyo: true, repeat: -1 }
      );
    },
    animElems() {
      let tl = new TimelineMax({});
      const aboutImg = document.querySelector(".about__photo");
      const text = document.querySelector(".about__text");
      const title = document.querySelectorAll(".title-section .word");

      TweenMax.set([aboutImg, text], {
        autoAlpha: 0,
        yPercent: 2,
        scale: 0.95,
      });

      tl.staggerFromTo(
        title,
        1,
        { yPercent: 115, autoAlpha: 1 },
        { delay: 0.4, yPercent: 0 },
        0.3
      ).to(
        [text, aboutImg],
        0.8,
        {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1,
        },
        1
      );
    },
    leave() {
      let tl = new TimelineMax();
      const aboutImg = document.querySelector(".about__photo");
      const aboutText = document.querySelector(".about__text");
      const title = document.querySelectorAll(".title-section .word");

      tl.to([title, aboutText, aboutImg], 0.5, {
        autoAlpha: 0,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins.scss";
#rain-container {
  position: absolute;
  top: 43px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 280px;
  overflow: hidden;
  z-index: -1;
}
.droplet {
  position: absolute;
  top: -6%;
  height: 25px;
  width: 1px;
  background-color: #d1d3d4;

  @include lg {
    height: 10px;
  }
}
.word-container {
  display: block;
  overflow: hidden;
}
.word {
  display: inline-block;
}

.about {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: $mainFontBold;
  @include xlg {
    justify-content: space-between;
  }
  @include lg {
    flex-direction: column;
    margin-bottom: 4rem;
  }
  &__text-zone {
    display: flex;
    flex-direction: column;
    width: calc(50% - 15px);
    @include xxl {
      width: calc(60% - 15px);
    }
    @include lg {
      width: 100%;
    }
  }
  &__title {
    margin-bottom: 4rem;
    @include lg {
      margin-bottom: 2rem;
    }
  }

  &__text-container {
    position: relative;
    width: 90%;

    @include xlg {
      width: 100%;
    }
  }
  &__text {
    width: 100%;
    line-height: 33px;

    @include lg {
      line-height: 28px;
    }
  }
  &__photo-wrapper {
    position: relative;
    user-select: none;
    width: calc(50% - 15px);
    margin: auto;

    @include xlg {
      width: calc(50% - 15px);
    }
    @include lg {
      width: 100%;
      margin: auto;
    }
  }
}
.svg-eye {
  opacity: 0;
}
</style>
