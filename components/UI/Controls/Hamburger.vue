<template>
  <div :class="['hamburger', { 'hamburger--open': open }]" @click="toggleNav">
    <span class="hamburger__span"></span>
  </div>
</template>

<script>
export default {
  computed: {
    open() {
      return this.$store.state.toggleSidebar
    }
  },
  methods: {
    toggleNav: function() {
      this.$store.dispatch("toggleSidebar")
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/mixins/mixins";
.hamburger {
  display: none;
  width: 24px;
  height: 21px;
  margin-right: auto;
  cursor: pointer;
  @include xlg {
    display: block;
  }

  &__span {
    position: absolute;
    height: 2px;
    width: inherit;
    background-color: var(--white);
    transition: all 0.3s;
    margin-top: 10px;
    &:before {
      content: "";
      position: absolute;
      height: 2px;
      width: inherit;
      background-color: var(--white);
      transition: all 0.3s;
      top: -7px;
    }
    &:after {
      content: "";
      top: 7px;
      position: absolute;
      height: 2px;
      width: inherit;
      background-color: var(--white);
      transition: all 0.3s;
    }
  }
  &--open {
    & .hamburger__span {
      background-color: transparent;
      &:before,
      &:after {
        background-color: var(--white);
        transform-origin: 0 50%;
      }
      &:before {
        transform: translateX(0) translateY(0) rotate(45deg);
      }
      &:after {
        transform: translateX(0) translateY(3px) rotate(-45deg);
      }
    }
  }
}
</style>
