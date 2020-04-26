<template>
  <div class="main-scroller">
    <!-- ScrollerItem -->
    <scrollerItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import scrollerItem from "@/components/Scroller/ScrollerItem.vue";

export default {
  components: { scrollerItem },
  data() {
    return {
      items: [
        { id: 1, about: true },
        { id: 2, Portfolio: true },
        { id: 3, skills: true },
        { id: 4, contacts: true }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins";
.main-scroller {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  overflow: hidden;
  will-change: transform;
  backface-visibility: hidden;
  @include xlg {
    height: auto;
    position: relative;
    top: initial;
    overflow: initial;
    transform: initial !important;
  }
}
</style>
