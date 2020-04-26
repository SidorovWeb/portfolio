<template>
  <nav class="nav">
    <!-- Badges -->
    <Badges new-class="tag-nav  tag-nav--top" tag="nav" />
    <!-- nav__list -->
    <ul class="nav__list ">
      <li v-for="item in this.$t('nav')" :key="item.key" class="nav__item">
        <span class="nav__item-text--1">{{ item }}</span>
        <span class="nav__item-text--2">{{ item }}</span>
      </li>
    </ul>
    <!-- Badges -->
    <Badges new-class="tag-nav tag-nav--bottom" tag="/nav" />
    <!-- Pointer -->
    <pointer />
  </nav>
</template>

<script>
import pointer from "@/components/UI/Pointer.vue";

export default {
  components: { pointer }
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
    color: var(--white);
    overflow: hidden;
    &-text--1 {
      position: absolute;
      z-index: 1;
      transition: opacity 0.3s ease-in;
      cursor: pointer;
      will-change: transform;
      backface-visibility: hidden;

      &:hover {
        opacity: 0.8;
      }
    }
    &-text--2 {
      position: absolute;
      pointer-events: none;
      cursor: pointer;
      will-change: transform;
      backface-visibility: hidden;
    }
  }
}
</style>
