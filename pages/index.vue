<template>
  <div class="main">
    <!-- Loading screen -->
    <loadingScreen v-if="screen" />
    <!-- home-page -->
    <div v-if="!screen" class="home-page">
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
import { mapState, mapActions, mapGetters } from "vuex";
import { TimelineMax, TweenMax, Power2, Circ, Power0 } from "gsap";
import loadingScreen from "@/components/LoadingScreen.vue";
import scroller from "@/components/Scroller/Scroller.vue";
import heroNavigation from "@/components/HeroNavigation.vue";
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
  computed: {
    ...mapState(["screen"]),
    ...mapGetters(["getMobile", "getDesktop"])
  },
  mounted() {
    this.setScreen(true);
    // this.setScreen(false); // Выключить первый экран

    if (window.innerWidth > 992) {
      this.setDescktop();
    } else {
      this.setMobile();
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        this.setDescktop();
      } else {
        this.setMobile();
      }
    });
  },
  methods: {
    ...mapActions(["setScreen", "setMobile", "setDescktop"]),

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