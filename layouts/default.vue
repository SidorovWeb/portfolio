<template>
  <div>
    <!-- AppHeader -->
    <AppHeader v-if="!screen" />
    <!-- nuxt -->
    <nuxt />
    <!-- mobileMenu -->
    <mobileMenu />
    <!-- message -->
    <Message v-if="message" :message="message" />
    <!-- cursor -->
    <v-cursor-custom v-if="getDesktop" />
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import AppHeader from "@/components/system/Header.vue";
import mobileMenu from "@/components/MobileMenu.vue";
import vCursorCustom from "@/components/UI/Controls/v-cursor-custom.vue";
export default {
  components: { AppHeader, mobileMenu, vCursorCustom },
  computed: {
    ...mapState(["message", "screen"]),
    ...mapGetters(["getMobile", "getDesktop"])
  }
};
</script>
