<template>
  <button class="btn v-cursor-btn" :class="btnClass" v-bind="$attrs" v-on="$listeners">
    <!-- slot -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: "btnDefaul"
    }
  }
};
</script>

<style></style>
