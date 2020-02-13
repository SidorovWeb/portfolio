<template>
  <div class="mmenu">
    <!-- AppHamburger -->
    <AppHamburger />
    <div class="mmenu__wrapper">
      <ul class="mmenu__list">
        <li
          v-for="(item, i) in this.$t('nav')"
          :key="item.i"
          class="mmenu__item"
        >
          <a class="mmenu__link" href="#" @click.prevent="scrollTo(i)">{{
            item
          }}</a>
        </li>
      </ul>
      <!-- social -->
      <SocialButton new-class="mmenu__social" />
    </div>
  </div>
</template>

<script>
import { TimelineMax, TweenMax, Power0 } from "gsap"
import ScrollToPlugin from "gsap/umd/ScrollToPlugin.js"

export default {
  data() {
    return {
      done: null
    }
  },
  computed: {
    open() {
      return this.$store.state.toggleSidebar
    }
  },
  watch: {
    open: function(open) {
      const self = this
      const x = open ? 0 : -115
      const y = open ? 0 : 115
      const delay = open ? 0.1 : 0
      const stagger = open ? 0.1 : 0
      const tl = new TimelineMax({ onComplete: self.toggleClass })
      tl.add("mmenu")
        // .set('.header', {
        //   backgroundColor: "transparent",
        //   boxShadow: 'transparent'
        // })
        .to(
          ".mmenu",
          0.5,
          {
            xPercent: x,
            ease: Power0.easeNone
          },
          "mmenu"
        )
        .staggerTo(
          ".mmenu__link",
          0.3,
          {
            delay: delay,
            xPercent: x,
            ease: Power0.easeNone
          },
          stagger,
          "mmenu"
        )
        .to(
          ".mmenu__social .social__link",
          0.3,
          {
            delay: delay,
            yPercent: y,
            ease: Power0.easeNone
          },
          stagger,
          "mmenu"
        )
    }
  },
  mounted() {
    TweenMax.set(".mmenu", {
      visibility: "visible"
    })
    TweenMax.set([".mmenu", ".mmenu__link"], {
      xPercent: -115
    })
    TweenMax.set(".mmenu__social .social__link", {
      yPercent: 50
    })
  },
  methods: {
    scrollTo(i) {
      const f = ScrollToPlugin
      console.log(f)

      this.$store.dispatch("toggleSidebar")
      TweenMax.to(window, 1, {
        scrollTo: { y: `.${i}`, offsetY: 70, autoKill: true },
        overwrite: 5,
        delay: 0.51,
        ease: Power0.easeNone
      })
    },
    toggleClass() {
      const body = document.querySelector("body")
      body.classList.toggle("mmenu-open")
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.mmenu .hamburger {
  position: fixed;
  top: 1.5rem;
  left: 1.4rem;
}
.mmenu {
  display: none;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  min-height: 500px;
  background-color: var(--main-red);
  will-change: transform;
  backface-visibility: hidden;
  z-index: 1;
  @include xlg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (min-device-width: 576px) and (orientation: landscape) {
    display: block;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 120px);
    margin: 60px 0px;

    @media only screen and (min-device-width: 576px) and (orientation: landscape) {
      flex-direction: row;
      height: auto;
      justify-content: space-between;
      padding: 0 2.5rem;
    }
  }
  &__list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: auto;
    margin-bottom: 3rem;
    @media only screen and (min-device-width: 576px) and (orientation: landscape) {
      margin-bottom: 0;
      width: auto;
    }
  }
  &__item {
    padding: 1vh 0;
    width: 100%;
    text-align: center;
    @media only screen and (min-device-width: 576px) and (orientation: landscape) {
      text-align: left;
    }
  }
  &__link {
    display: inline-block;
    width: 100%;
    color: var(--white);
    font-weight: 700;
    text-transform: uppercase;
    @include fluidFontSize(24px, 60px, 576px, 1024px, 24px);
    will-change: transform;
    backface-visibility: hidden;
    cursor: pointer;
    @media only screen and (min-device-width: 576px) and (orientation: landscape) {
      @include fluidFontSize(20px, 60px, 576px, 1024px, 20px);
    }
  }
  &__social {
    margin-top: auto;
    margin-bottom: 2rem;
    @media only screen and (min-device-width: 576px) and (orientation: landscape) {
      margin-bottom: 0;
    }
    & .social__link svg {
      fill: var(--white);
    }
  }
}
.mmenu-open {
  overflow: hidden !important;
}
</style>
