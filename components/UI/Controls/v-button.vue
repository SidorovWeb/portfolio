<template>
  <button class="btn v-cursor-btn v-button" :class="btnClass" v-bind="$attrs" v-on="$listeners">
    <!-- slot -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "v-button",
  props: {
    btnClass: {
      type: String,
      default: "btnDefaul"
    }
  }
};
</script>

<style></style>
