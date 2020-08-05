<template>
  <div class="message" :class="mesClass">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    mesClass: {
      type: String,
      default: "success"
    },
    message: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.message {
  position: absolute;
  top: 100px;
  right: 0;
  font-style: 1.3rem;
  border-radius: 4px;
  padding: 1rem;
  z-index: 999;
  font-size: 14px;
  @include xlg {
    position: fixed;
    top: 78px;
  }
  &.success {
    background-color: #4caf50;
    color: white;
  }
  &.error {
    background-color: #ff5252;
    color: white;
  }
}
</style>
