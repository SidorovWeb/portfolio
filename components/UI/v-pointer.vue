<template>
  <div class="pointer v-pointer"></div>
</template>

<script>
export default {
  name: "v-pointer"
};
</script>

<style lang="scss">
.pointer {
  width: 2px;
  background-color: var(--main-red);
  position: absolute;
  right: -10px;
  left: initial;
  z-index: 999;
  will-change: transform;
  backface-visibility: hidden;
}
</style>
