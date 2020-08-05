<template>
  <div class="v-select" :class="{'open': areOptionsVisible}">
    <div
      class="v-select__title v-cursor-btn"
      @click="areOptionsVisible = !areOptionsVisible"
    >{{ selected }}</div>
    <transition name="fade-options">
      <div class="options" v-if="areOptionsVisible">
        <p
          class="options__item v-cursor-btn"
          :class="{'active': option.name == selected}"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
        >{{ option.name }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      areOptionsVisible: false
    };
  },
  methods: {
    selectOption(option) {
      this.areOptionsVisible = false;
      this.$emit("select", option);
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  }
};
</script>

<style lang="scss">
.v-select {
  position: relative;
  display: flex;
  min-width: 11rem;
  line-height: 2rem;
  z-index: 1;
  cursor: pointer;

  &.open {
    & .v-select__title {
      &:after {
        color: var(--main-red);
      }
    }
  }

  &__title {
    position: relative;
    height: 2rem;
    padding: 0 0.5em;
    font-size: 1rem;
    flex: 1;
    border: 1px solid var(--color-pseudo-element);
    color: var(--white);
    background-color: var(--bg-color);
    border-radius: 0.25em;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    overflow: hidden;
    cursor: pointer;
    &:after {
      content: "\25BC";
      position: absolute;
      top: 0;
      right: 0;
      height: 2rem;
      padding: 0 0.5em;
      color: var(--home-color-text);
      background: var(--color-pseudo-element);
      cursor: pointer;
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
    }

    &:hover {
      &:after {
        color: var(--main-red);
      }
    }
  }

  & .options {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(2.5rem);
    width: 100%;
    font-size: 1rem;
    border-radius: 0.25em;
    border: solid 1px var(--color-pseudo-element);
    background-color: var(--bg-color);
    overflow: hidden;
  }

  & .options__item {
    height: 3rem;
    line-height: 3rem;
    padding: 0 0.5em;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

    &.active {
      background: var(--color-pseudo-element);
      color: var(--bg-color);
    }
  }
  & .options p:hover {
    background: darken(#e7e7e7, 45%);
  }

  .fade-options-enter-active,
  .fade-options-leave-active {
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  }
  .fade-options-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(3rem);
  }
}
</style>
