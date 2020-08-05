<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title" class="new-post__line">
          Title
        </AppInput>
        <AppInput v-model="post.webp" class="new-post__line">
          Img webp
        </AppInput>
        <AppInput v-model="post.img" class="new-post__line">
          Img jpg
        </AppInput>
        <AppInput v-model="post.git" class="new-post__line">
          gitHub
        </AppInput>
        <AppInput v-model="post.web" class="new-post__line">
          Web
        </AppInput>
        <AppInput v-model="post.tags" class="new-post__line">
          Tags(html,css)
        </AppInput>
        <AppInput v-model="post.certificate" class="new-post__line">
          Сertificate
        </AppInput>
        <!-- buttons -->
        <div class="controls">
          <div class="btn btnDanger" @click="cancel">
            Cancel
          </div>
          <AppButton>Save</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
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
