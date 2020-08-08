<template>
  <v-new-post-from @submit="onSubmit" />
</template>

<script>
import vNewPostFrom from "@/components/Admin/v-new-post-from.vue";
export default {
  layout: "admin",
  components: { vNewPostFrom },
  methods: {
    onSubmit(post) {
      this.$store.dispatch("addPost", post).then(() => {
        this.$router.push("/admin/");
      });
    }
  }
};
</script>
