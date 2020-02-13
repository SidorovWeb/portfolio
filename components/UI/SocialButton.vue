<template>
  <div class="social" :class="newClass">
    <div class="social__line">
      <!-- SVGvk -->
      <a
        href="https://vk.com/sidorovalexandern"
        target="_blank"
        class="social__link"
        :class="newClass"
      >
        <SVGvk />
      </a>
      <!-- SVGtelegram -->
      <a
        href="tg://resolve?domain=SidorovAlexander"
        target="_blank"
        class="social__link"
        :class="newClass"
      >
        <SVGtelegram />
      </a>
      <!-- SVGgithub -->
      <a
        href="https://github.com/SidorovWeb"
        class="social__link"
        target="_blank"
        :class="newClass"
      >
        <SVGgithub />
      </a>
    </div>
  </div>
</template>

<script>
import SVGvk from "@/static/img/svg/vk.svg"
import SVGtelegram from "@/static/img/svg/telegram.svg"
import SVGgithub from "@/static/img/svg/github-logo.svg"
export default {
  components: { SVGvk, SVGtelegram, SVGgithub },
  props: {
    newClass: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
.social {
  &__line {
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
      display: inline-block;
      fill: var(--main-red);
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
