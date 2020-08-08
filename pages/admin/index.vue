<template>
  <!-- v-posts-list -->
  <v-posts-list :admin="true" :posts="postsLoaded" />
</template>

<script>
export default {
  layout: "admin",
  beforeRouteEnter(to, from, next) {
    next(() => {
      const body = document.querySelector("body");
      body.classList.add("admin-page");
    });
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    }
  },
  mounted() {
    this.$store.dispatch("nuxtServerInit");
  }
};
</script>

<style lang="scss">
.admin-page {
  overflow: initial;
}
a {
  color: blue;
}
</style>
