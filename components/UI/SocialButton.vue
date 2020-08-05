<template>
  <div class="social" :class="newClass">
    <div class="social__line">
      <!-- SVGvk -->
      <a
        href="https://vk.com/sidorovalexandern"
        target="_blank"
        class="social__link v-cursor-btn"
        :class="newClass"
      >
        <SVGvk />
      </a>
      <!-- SVGtelegram -->
      <a
        href="tg://resolve?domain=SidorovAlexander"
        target="_blank"
        class="social__link v-cursor-btn"
        :class="newClass"
      >
        <SVGtelegram />
      </a>
      <!-- SVGgithub -->
      <a
        href="https://github.com/SidorovWeb"
        class="social__link v-cursor-btn"
        target="_blank"
        :class="newClass"
      >
        <SVGgithub />
      </a>
      <a
        href="https://kwork.ru/user/sidorovalexander"
        target="_blink"
        class="social__link social__link--fb v-cursor-btn"
      >Kwork</a>
    </div>
  </div>
</template>

<script>
import SVGvk from "@/static/img/svg/vk.svg";
import SVGtelegram from "@/static/img/svg/telegram.svg";
import SVGgithub from "@/static/img/svg/github-logo.svg";
export default {
  components: { SVGvk, SVGtelegram, SVGgithub },
  props: {
    newClass: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
.social {
  &__line {
    display: flex;
    align-items: center;
    & > * {
      margin-right: 1rem;
      display: inline-block;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__link {
    & svg {
      position: relative;
      display: inline-block;
      fill: var(--main-red);
      width: 2rem;
      height: 2rem;
      z-index: -1;
    }
  }
  &__link--fb {
    color: var(--main-red);
    text-transform: uppercase;
    font-size: 1.4rem;
  }
}
</style>
