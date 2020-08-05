<template>
  <div class="div">
    <div class="loading-screen">
      <div class="loading-screen__wrapp">
        <div class="loading-screen__title h4">
          <span class="mask-text mask-text--1 js-splitme">
            {{
            this.$t("dev")
            }}
          </span>
        </div>
      </div>
    </div>
    <!-- resize -->
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
import { TimelineMax, TweenMax, Power0, Power1 } from "gsap";
import { mapState, mapActions } from "vuex";
import Splitter from "split-html-to-chars";

export default {
  computed: {
    ...mapState(["firstScreen"])
  },
  mounted() {
    if (this.firstScreen) {
      this.animLoadScreen();
    } else {
      this.screenFirst();
    }
  },
  methods: {
    ...mapActions(["setScreen", "setFirstScreen"]),
    animLoadScreen() {
      const self = this;
      const splits = document.querySelectorAll(".js-splitme");

      [].forEach.call(splits, function(el) {
        el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
      });

      TweenMax.set([".mask-text", ".loading-screen__subtitle"], {
        visibility: "visible"
      });

      const tl = new TimelineMax({ onComplete: self.screenFirst });
      tl.staggerFromTo(
        ".mask-text .letter",
        0.8,
        {
          scaleW: 0.1,
          webKitFilter: "blur(5px)",
          filter: "blur(5px)",
          x: 50
        },
        {
          scaleW: 0.1,
          autoAlpha: 1,
          webKitFilter: "blur(0px)",
          filter: "blur(0px)",
          x: 0,
          ease: Power1.easeOut
        },
        0.2,
        0
      ).fromTo(
        ".loading-screen__wrapp",
        0.5,
        { autoAlpha: 1 },
        { autoAlpha: 0, y: -20, ease: Power0.easeNone }
      );
    },
    screenFirst() {
      this.setScreen(false);
      this.setFirstScreen(false);
    },
    handleResize() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins";
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color-rgba);

  @include lg {
    background-color: transparent;
  }

  &__title {
    font-size: 1.5rem;
    color: var(--white);
    will-change: transform;
    backface-visibility: hidden;
  }
}
.js-splitme {
  visibility: hidden;
  & > * {
    margin-right: 1px;
  }

  &:last-child {
    margin-right: 0;
  }
  & .letter {
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    visibility: hidden;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--main-red);
  transform: translateY(115%);
  will-change: transform;
  backface-visibility: hidden;
  z-index: 999;
}
</style>
