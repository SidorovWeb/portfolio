<template>
  <div class="overlay-route"></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
.overlay-route {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--main-red);
  will-change: transform;
  backface-visibility: hidden;
  z-index: 9999;
}
</style>
