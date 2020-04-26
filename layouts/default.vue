<template>
  <div>
    <!-- AppHeader -->
    <AppHeader />
    <!-- nuxt -->
    <nuxt />
    <!-- mobileMenu -->
    <mobileMenu />
    <!-- Overlay -->
    <Overlay />
    <!-- cursor -->
    <div class="cursor"></div>
    <!-- message -->
    <Message v-if="message" :message="message" />
  </div>
</template>
<script>
import { mapState } from "vuex"
import AppHeader from "@/components/system/Header.vue"
import mobileMenu from "@/components/MobileMenu.vue"
export default {
  components: { AppHeader, mobileMenu },
  computed: {
    ...mapState(["message"])
  }
}
</script>
