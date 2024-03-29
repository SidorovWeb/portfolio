<template>
  <div class="header v-header">
    <!-- SVGhome -->
    <div class="to-home header__to-home">
      <nuxt-link class="v-cursor-btn header__link" to="/">
        <SVGhome class="svg-home" />
      </nuxt-link>
    </div>
    <!-- v-hamburger -->
    <v-hamburger class="header__hamburger" />
    <div class="header__developer">
      <a
        href="https://vk.com/sidorovalexandern"
        target="_blank"
        class="v-cursor-btn header__link animColor"
        >{{ this.$t("dev") }}</a
      >
    </div>
    <div class="flags header__flags">
      <!-- SVGflagUS -->
      <div v-if="lang" class="v-cursor-btn flag" @click="changeLanguage('us')">
        <SVGflagUS />
      </div>
      <!-- SVGflagRU -->
      <div v-if="!lang" class="v-cursor-btn flag" @click="changeLanguage('ru')">
        <SVGflagRU />
      </div>
    </div>
    <!-- v-toggle-switch-mode -->
    <v-toggle-switch-mode />
  </div>
</template>

<script>
import { TimelineMax, TweenMax } from "gsap";
import vToggleSwitchMode from "@/components/UI/Controls/v-toggle-switch-mode.vue";
import SVGhome from "@/static/img/svg/home.svg";
import SVGflagRU from "@/static/img/svg/russia.svg";
import SVGflagUS from "@/static/img/svg/united-states.svg";
export default {
  name: "v-header",
  components: { vToggleSwitchMode, SVGflagRU, SVGflagUS, SVGhome },
  data() {
    return {
      lang: true,
      class: ""
    };
  },
  created() {
    if (process.browser) {
      const currentLang = localStorage.getItem("lang");
      if (currentLang) {
        this.$i18n.locale = currentLang;
        if (currentLang === "us") {
          this.lang = false;
        }
      }
    }
  },
  mounted() {
    this.animHeader();
  },
  methods: {
    changeLanguage(lang) {
      this.lang = !this.lang;
      this.$i18n.locale = lang;
      if (process.browser) {
        localStorage.setItem("lang", lang);
      }
    },
    animHeader() {
      const header = document.querySelector(".header");

      let duration = !window.matchMedia("screen and (max-width: 1024px)")
        .matches
        ? 1
        : 0;

      TweenMax.set(header, { autoAlpha: 0, visibility: "hidden" });

      let tl = new TimelineMax();

      tl.to(header, duration, {
        delay: 1,
        autoAlpha: 1
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.works-page .hamburger {
  display: none;
}
.main-page .to-home {
  display: none;
}
.works .to-home {
  display: block;
}
.works-page .header {
  visibility: visible;
  background-color: var(--bg-color-rgba);
  box-shadow: 0px 1px 4px 0px var(--bg-color);
}
.header {
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  padding: 1.25rem 2rem;
  z-index: 10;
  font-weight: 700;
  font-family: $mainFontBold;
  @include xlg {
    background-color: var(--bg-color-rgba);
    box-shadow: 0px 1px 4px 0px var(--bg-color);
    padding: 1.25rem 1rem;
  }
  @include lg {
    padding: 1rem;
  }
  &__link {
    margin-right: auto;
    color: var(--white);
    a {
      cursor: pointer;
    }
    span {
      display: inline-block;
    }
  }
  & > * {
    margin-right: 1.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
  &__to-home {
    margin-right: auto;
  }
  &__developer {
    @include lg {
      display: none;
    }
  }
  &__flags {
    svg {
      position: relative;
      width: 27px;
      transform: translateY(3px);
      z-index: -1;
    }
  }
  & .flag {
    cursor: pointer;
  }
  &__link {
    color: var(--white);
    transform: translateY(2px);
    display: inline-block;
  }
  &__mmenu {
    color: var(--white);
    margin-right: auto;
  }
  &__admin {
    transform: translateY(-1px);
    svg {
      fill: var(--white);
      width: 21px;
    }
  }
  &__hamburger {
    margin-right: auto;
  }
}
.svg-home {
  fill: var(--white);
  width: 21px;
  height: 21px;
  display: inline-block;
  & g {
    fill: var(--white);
  }
}
</style>
