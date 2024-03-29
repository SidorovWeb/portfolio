<template>
  <div class="v-select" :class="{ open: areOptionsVisible }">
    <div
      class="v-select__title v-cursor-btn"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ selected }}
    </div>
    <transition name="v-fade-options">
      <div class="options" v-if="areOptionsVisible">
        <p
          class="options__item v-cursor-btn"
          :class="{ active: option.name == selected }"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.name }}
        </p>
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
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.v-select {
  position: relative;
  display: flex;
  min-width: 11rem;
  line-height: 2.4rem;
  z-index: 1;
  cursor: pointer;
  font-family: $mainFontBold;

  &.open {
    & .v-select__title {
      &:after {
        color: var(--main-red);
      }
    }
  }

  &__title {
    position: relative;
    height: 2.4rem;
    padding: 0 0.5em;
    font-size: 1rem;
    flex: 1;
    color: #fff;
    background-color: var(--color-pseudo-element);
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
      height: 2.4rem;
      padding: 0 0.6em;
      color: #fff;
      background: rgba(#292929, 0.7);
      cursor: pointer;
      pointer-events: none;
      transition: all 0.3s ease;

      @include sm {
        background: #292929;
      }
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
    transform: translateY(2.9rem);
    width: 100%;
    font-size: 1rem;
    border-radius: 0.25em;
    border: solid 1px var(--color-pseudo-element);
    background-color: var(--bg-color);
    overflow: hidden;

    p {
      transition: all 0.3s ease;
    }
  }

  & .options__item {
    height: 3rem;
    line-height: 3rem;
    padding: 0 0.5em;
    transition: all 0.3s ease;

    &.active {
      background: var(--color-pseudo-element);
      color: var(--main-red);
    }
  }
  & .options p:hover {
    background: darken(#e7e7e7, 45%);
  }

  .v-fade-options {
    &-enter {
      transform: translateY(3.4rem);
      opacity: 0;
    }
    &-enter-active {
      transition: all 0.3s ease;
    }
    &-enter-to {
      opacity: 1;
    }
    &-leave {
      opacity: 1;
    }
    &-leave-active {
      transition: transform 0.3s ease, opacity 0.3s, 0.2s;
    }
    &-leave-to {
      transform: translateY(3rem);
      opacity: 0;
    }
  }
}
</style>
