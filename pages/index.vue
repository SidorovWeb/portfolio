<template>
  <div class="main">
    <!-- Loading screen -->
    <loadingScreen v-if="screen" />
    <!-- home-page -->
    <div v-show="!screen" class="home-page">
      <!-- home-page__center -->
      <div class="home-page__center">
        <!-- Scroller component -->
        <scroller />
        <!-- HeroNavigation -->
        <heroNavigation />
      </div>
    </div>
    <!-- resize -->
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
import cursor from "@/plugins/cursor.js";
import { mapState } from "vuex";
import { TimelineMax, TweenMax, Power2, Circ, Power0 } from "gsap";
import loadingScreen from "@/components/LoadingScreen.vue";
import scroller from "@/components/Scroller/Scroller.vue";
import heroNavigation from "@/components/HeroNavigation.vue";
import scrollo from "@/plugins/scrollo.js";
import "vue-resize/dist/vue-resize.css";

export default {
  components: { scroller, heroNavigation, loadingScreen },
  head() {
    const type = "site";
    return {
      title: this.$t("dev"),
      meta: [
        { hid: "og:title", name: "og:title", content: this.$t("dev") },
        {
          hid: "description",
          name: "description",
          content: this.$t("portfolio")
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("portfolio")
        },
        { hid: "og:type", name: "og:type", content: type }
        // { hid: 'og:image', name: 'og:image', content: '@/static/img/home/myphoto.png' },
      ]
    };
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      TweenMax.set(".overlay-route", { y: "0%" });
      TweenMax.to(".overlay-route", 0.8, {
        delay: 0.4,
        y: "-115%",
        overwrite: 5,
        ease: Power2.easeOut,
        onComplete: function() {
          const body = document.querySelector("body");
          body.classList.add("main-page");
        }
      });
    });
  },
  computed: {
    ...mapState(["screen"])
  },
  watch: {
    screen(newValue) {
      if (!newValue) {
        this.animTextOnHome();
      }
    }
  },
  mounted() {
    cursor();
    this.$store.dispatch("setScreen", true);

    // this.$store.dispatch("setScreen", false); // Выключить
  },
  methods: {
    animTextOnHome() {
      const header = document.querySelector(".header");
      const aboutImg = document.querySelector(".about__photo");
      const aboutText = document.querySelector(".about__text");
      const nav = document.querySelector(".nav");
      const firstElemNav = document.querySelectorAll(".nav__item-text--2")[0];
      const tags = document.querySelectorAll(".tag");
      const tagsNav = document.querySelectorAll(".tag-nav");
      let duration = !window.matchMedia("screen and (max-width: 1024px)")
        .matches
        ? 0.7
        : 0;
      let durPointer = duration == 0.7 ? 0.5 : 0;

      TweenMax.set([aboutImg, aboutText, header], { autoAlpha: 0 });
      TweenMax.set(header, { visibility: "hidden" });
      TweenMax.set(".about__title .word", { yPercent: 115 });
      TweenMax.set([tags, tagsNav], { autoAlpha: 0 });

      let tl = new TimelineMax();

      tl.set(".pointer", { bottom: -5 })
        .set(nav, { visibility: "visible" })
        .set(".nav__item-text--2", {
          color: "white",
          clip: "rect(0px 0px 0px 0px)"
        })
        .staggerFromTo(
          ".about__title .word",
          0.8,
          { yPercent: 115 },
          { delay: 0.2, yPercent: 0, ease: Expo.inOut },
          0.5
        )
        .fromTo(
          ".pointer",
          duration,
          { height: 0 },
          { height: 188, ease: Power2.inOut },
          "first"
        )
        .staggerFromTo(
          ".nav__item",
          duration,
          { autoAlpha: 0, xPercent: 100 },
          { autoAlpha: 1, xPercent: 0, stagger: 0.2, ease: Expo.inOut },
          "first-=1"
        )
        .to(
          [aboutImg, aboutText, header],
          0.7,
          { autoAlpha: 1, ease: Power2.inOut },
          "first"
        )
        .to(".pointer", durPointer, {
          top: 10,
          height: 26,
          ease: Power2.inOut
        })
        .set(".pointer", { bottom: "initial" })
        .to(
          [tags, tagsNav],
          duration,
          { autoAlpha: 1, ease: Power2.inOut },
          "sec"
        )
        .fromTo(
          firstElemNav,
          duration,
          { zIndex: 2, clip: "rect(0px 0px 46px 0px)" },
          {
            opacity: 1,
            color: "#FF6666",
            clip: "rect(0px 130px 46px 0px)",
            ease: Power2.inOut
          },
          "sec"
        )
        .set(".main-scroller", {
          overflow: "visible",
          onComplete: function() {
            scrollo();
          }
        });

      this.$store.dispatch("playSVG", true);
    },
    handleResize() {
      if (window.matchMedia("screen and (max-width: 1024px)").matches) {
        const body = document.querySelector("body");
        body.style.overflow = "initial";
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("playSVG", false);

    TweenMax.set(".overlay-route", { y: "115%" });

    TweenMax.to(".overlay-route", 0.8, {
      delay: 0.4,
      y: "0%",
      overwrite: 5,
      ease: Power2.easeOut,
      onComplete: function() {
        const body = document.querySelector("body");
        body.classList.remove("main-page");

        next();
      }
    });
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
body {
  overflow: hidden;
}
.main-page {
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include xlg {
    overflow: initial;
    position: relative;
    top: initial;
    left: initial;
    right: initial;
    bottom: initial;
  }
}
.home-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: var(--white);
  overflow: hidden;
  font-family: $mainFont;
  z-index: 1;
  @include xlg {
    height: auto;
    overflow: initial;
  }
  @include xlg {
    overflow: hidden;
  }
  &__center {
    display: flex;
    flex-direction: column;
  }
}
</style>
