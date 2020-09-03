<template>
  <nav class="nav v-hero-navigation">
    <!-- nav__list -->
    <ul class="nav__list">
      <li v-for="(item, name, index) in this.$t('nav')" :key="item.key" class="nav__item">
        <span class="nav__item-text v-cursor-btn" @click="clickToElement(index, name)">{{ item }}</span>
      </li>
    </ul>
    <!-- v-pointer -->
    <v-pointer />
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { TweenMax } from "gsap";
import vPointer from "@/components/UI/v-pointer.vue";

export default {
  name: "v-hero-navigation",
  components: { vPointer },
  mounted() {
    this.animNav();
  },
  data() {
    return {
      once: true
    };
  },
  computed: {
    ...mapGetters(["getNameNavLink", "getMobile", "getDesktop"])
  },
  methods: {
    ...mapActions(["setNameNavLink", "setClickNavMenu"]),

    clickToElement(index, name) {
      if (this.getNameNavLink === name) {
        return false;
      }

      this.setClickNavMenu(true);

      if (this.once) {
        this.once = false;

        setTimeout(() => {
          let pointer = document.querySelector(".pointer");
          let liheight = 47;

          this.setNameNavLink(name);

          TweenMax.to(pointer, 0.7, {
            y: liheight * index,
            onComplete: () => {
              this.setClickNavMenu(false);
              this.once = true;
            }
          });
        }, 500);
      }
    },

    animNav() {
      const nav = document.querySelector(".nav");
      const navItem = document.querySelectorAll(".nav__item");
      const pointer = document.querySelector(".pointer");

      let duration = !window.matchMedia("screen and (max-width: 1024px)")
        .matches
        ? 1
        : 0;
      let durPointer = duration == 1 ? 1 : 0;

      let tl = new TimelineMax();

      tl.set(pointer, { bottom: -5 })
        .set(nav, { visibility: "visible" })
        .fromTo(
          pointer,
          duration,
          { height: 0 },
          { delay: 0.5, height: 188 },
          "first"
        )
        .staggerFromTo(
          navItem,
          duration,
          { autoAlpha: 0, xPercent: 250 },
          {
            autoAlpha: 1,
            xPercent: 0,
            stagger: 0.2,
          },
          "first-=1"
        )
        .to(pointer, durPointer, {
          top: 8.5,
          height: 26
        })
        .set(pointer, { bottom: "initial" });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.nav {
  position: fixed;
  visibility: hidden;
  display: block;
  width: 120px;
  bottom: 40px;
  right: 40px;
  text-transform: uppercase;
  transform-origin: left;
  z-index: 100;
  @include xlg {
    display: none;
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
  }
  &__item {
    height: 46px;
    width: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    cursor: pointer;
  }

  &__item-text {
    color: var(--white);
  }
}
</style>
