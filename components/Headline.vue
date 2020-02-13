<template>
  <h2 :class="title" class="h2">
    <!-- Badges -->
    <Badges new-class="tag tag--top" tag="h2" />
    <span class="word-container">
      <span class="word">{{ this.$t(word1) }} </span>
    </span>
    <span class="word-container">
      <span class="word">{{ this.$t(word2) }} </span>
    </span>
    <!-- Badges -->
    <Badges new-class="tag tag--bottom" tag="/h2" />
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    word1: {
      type: String,
      required: true
    },
    word2: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins.scss";
@import "@/assets/scss/utils/vars.scss";
.h2 {
  position: relative;
  color: var(--main-red);
  font-weight: 700;
  line-height: 4.5rem;
  text-transform: uppercase;
  font-family: "PlayfairDisplayBold";
  @include fluidFontSize(28px, 70px, 576px, 1600px, 38px);

  @include xxl {
    line-height: 3.5rem;
  }
  @include xlg {
    @include fluidFontSize(28px, 60px, 576px, 1024px, 38px);
  }
  @include md {
    line-height: 2.5rem;
  }

  & > * {
    white-space: nowrap;

    &:last-child {
      width: 100%;
    }
  }
}

.word {
  will-change: transform;
  backface-visibility: hidden;
}
</style>
