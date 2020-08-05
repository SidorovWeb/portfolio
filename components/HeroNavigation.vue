<template>
  <nav class="nav">
    <!-- nav__list -->
    <ul class="nav__list">
      <li v-for="(item, name, index) in this.$t('nav')" :key="item.key" class="nav__item">
        <span class="nav__item-text v-cursor-btn" @click="clickToElement(index, name)">{{ item }}</span>
      </li>
    </ul>
    <!-- Pointer -->
    <pointer />
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { TweenMax } from "gsap";
import pointer from "@/components/UI/Pointer.vue";

export default {
  components: { pointer },
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
            ease: Power1.easeOut,
            onComplete: () => {
              this.setClickNavMenu(false);
              this.once = true;
            }
          });
        }, 1000);
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
          { delay: 0.5, height: 188, ease: Power2.inOut },
          "first"
        )
        .staggerFromTo(
          navItem,
          duration,
          { autoAlpha: 0, xPercent: 150 },
          {
            autoAlpha: 1,
            xPercent: 0,
            stagger: 0.2,
            ease: Expo.inOut
          },
          "first-=1"
        )
        .to(pointer, durPointer, {
          top: 8.5,
          height: 26,
          ease: Power2.inOut
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
    transition: opacity 0.3s ease-in;
    &:hover {
      opacity: 0.8;
    }
  }

  &__item-text {
    color: var(--white);
  }
}
</style>
