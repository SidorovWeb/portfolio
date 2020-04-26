<template>
  <div class="header">
    <!-- SVGhome -->
    <div class="to-home header__to-home">
      <nuxt-link class="header__link" to="/">
        <SVGhome class="svg-home" />
        <!-- <span>На главную</span> -->
      </nuxt-link>
    </div>
    <!-- AppHamburger -->
    <AppHamburger />
    <div class="header__developer">
      <a
        href="https://vk.com/sidorovalexandern"
        target="_blank"
        class="header__link animColor"
      >
        {{ this.$t("dev") }}
      </a>
    </div>
    <!-- SVGadmin -->
    <div class="header__admin">
      <nuxt-link to="/auth">
        <SVGadmin />
      </nuxt-link>
    </div>
    <no-ssr>
      <div class="flags header__flags">
        <!-- SVGflagUS -->
        <span
          v-if="lang"
          class="flag"
          href="#"
          @click="classMonitoring(), changeLanguage('us')"
        >
          <SVGflagUS />
        </span>
        <!-- SVGflagRU -->
        <span
          v-if="!lang"
          class="flag"
          href="#"
          @click="classMonitoring(), changeLanguage('ru')"
        >
          <SVGflagRU />
        </span>
      </div>
    </no-ssr>
    <!-- toggleSwitchMode -->
    <toggleSwitchMode />
  </div>
</template>

<script>
import toggleSwitchMode from "@/components/UI/Controls/ToggleSwitchMode.vue";
import SVGhome from "@/static/img/svg/home.svg";
import SVGflagRU from "@/static/img/svg/russia.svg";
import SVGflagUS from "@/static/img/svg/united-states.svg";
import SVGadmin from "@/static/img/svg/admin.svg";
export default {
  components: { toggleSwitchMode, SVGflagRU, SVGflagUS, SVGadmin, SVGhome },
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
  methods: {
    changeLanguage(lang) {
      this.lang = !this.lang;
      this.$i18n.locale = lang;
      if (process.browser) {
        localStorage.setItem("lang", lang);
      }
      this.addClass();
    },
    classMonitoring() {
      let mainPage = document.querySelector(".main-page ");
      if (mainPage) {
        let elementСlasses = document.querySelector(".active-scroller-section")
          .classList;
        this.class = elementСlasses[0];
      }
      return false;
    },
    addClass() {
      let mainPage = document.querySelector(".main-page ");
      if (mainPage) {
        let el = document.querySelector(`.${this.class}`);
        setTimeout(() => {
          el.classList.add("active-scroller-section");
        }, 0);
      }
      return false;
    }
  }
};
</script>

<style lang="scss">
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
  z-index: 1;
  @include xlg {
    background-color: var(--bg-color-rgba);
    box-shadow: 0px 1px 4px 0px var(--bg-color);
    padding: 1.25rem 1rem;
  }
  @include md {
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
    @include md {
      display: none;
    }
  }
  &__flags {
    svg {
      width: 27px;
      transform: translateY(3px);
    }
    span {
      cursor: pointer;
    }
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
