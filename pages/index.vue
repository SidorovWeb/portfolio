<template>
  <div class="main">
    <!-- v-loading-screen -->
    <v-loading-screen v-if="screen" />
    <!-- home-page -->
    <div v-if="!screen" class="home-page">
      <!-- home-page__center -->
      <div class="home-page__center">
        <!-- v-scroller -->
        <v-scroller />
        <!-- HeroNavigation -->
        <v-hero-navigation />
      </div>
    </div>
    <!-- resize -->
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { TimelineMax, TweenMax, Power2, Circ, Power0 } from "gsap";
import vScroller from "@/components/Scroller/v-scroller.vue";
import vHeroNavigation from "@/components/v-hero-navigation.vue";
import vLoadingScreen from "@/components/v-loading-screen.vue";
import "vue-resize/dist/vue-resize.css";

export default {
  name: "index",
  layout: "default",
  components: { vScroller, vHeroNavigation, vLoadingScreen },
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
        { hid: "og:type", name: "og:type", content: type },
        {
          hid: "og:image",
          name: "og:image",
          content: "@/static/img/home/myphoto.png"
        }
      ]
    };
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      const body = document.querySelector("body");
      body.classList.add("main-page");
    });
  },
  mounted() {
    this.setScreen(true);

    // this.setScreen(false); // Выключить первый экран
  },
  computed: {
    ...mapState(["screen"]),
    ...mapGetters(["getMobile", "getDesktop"])
  },
  methods: {
    ...mapActions(["setScreen"]),

    handleResize() {
      if (window.innerWidth > 992) {
        const body = document.querySelector("body");
        body.style.overflow = "initial";
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    const body = document.querySelector("body");
    body.classList.remove("main-page");

    next();
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