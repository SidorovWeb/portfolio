<template>
  <div class="pointer"></div>
</template>

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
