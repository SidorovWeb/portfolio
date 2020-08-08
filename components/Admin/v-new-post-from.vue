<template>
  <section class="new-post v-new-post-from">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <v-input v-model="post.title" class="new-post__line">Title</v-input>
        <v-input v-model="post.webp" class="new-post__line">Img webp</v-input>
        <v-input v-model="post.img" class="new-post__line">Img jpg</v-input>
        <v-input v-model="post.git" class="new-post__line">gitHub</v-input>
        <v-input v-model="post.web" class="new-post__line">Web</v-input>
        <v-input v-model="post.tags" class="new-post__line">Tags(html,css)</v-input>
        <v-input v-model="post.certificate" class="new-post__line">Сertificate</v-input>
        <!-- buttons -->
        <div class="controls">
          <div class="btn btnDanger" @click="cancel">Cancel</div>
          <v-button>Save</v-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "v-new-post-from",
  props: {
    postEdit: {
      type: Object,
      required: false,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      post: this.postEdit
        ? { ...this.postEdit }
        : {
            title: "",
            webp: "",
            img: "",
            git: "",
            web: "",
            certificate: "",
            tags: ""
          }
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.post);
    },
    cancel() {
      this.$router.push("/admin/");
    }
  }
};
</script>

<style lang="scss" scoped>
.control {
  width: 50%;
  text-align: center;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
}
</style>
