<template>
  <div class="default">
    <!-- v-header -->
    <v-header v-if="!screen" />
    <!-- nuxt -->
    <nuxt />
    <!-- v-mobile-menu -->
    <v-mobile-menu />
    <!-- v-cursor-custom -->
    <v-cursor-custom v-if="getDesktop" />
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import vHeader from "@/components/system/v-header.vue";
import vMobileMenu from "@/components/v-mobile-menu.vue";
import vCursorCustom from "@/components/UI/Controls/v-cursor-custom.vue";

export default {
  name: "Default",
  components: { vHeader, vMobileMenu, vCursorCustom },
  computed: {
    ...mapState(["screen"]),
    ...mapGetters(["getMobile", "getDesktop"])
  },
  mounted() {
    if (window.innerWidth > 992) {
      this.setDescktop();
    } else {
      this.setMobile();
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        this.setDescktop();
      } else {
        this.setMobile();
      }
    });
  },
  methods: {
    ...mapActions(["setScreen", "setMobile", "setDescktop"])
  }
};
</script>
