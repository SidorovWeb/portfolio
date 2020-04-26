<template>
  <newPostFrom :post-edit="post" @submit="onSubmit" />
</template>

<script>
import newPostFrom from "@/components/Admin/NewPostFrom.vue"
import axios from "axios"
export default {
  components: { newPostFrom },
  layout: "admin",
  asyncData(contex) {
    return axios
      .get(
        `https://my-portfolio-50ba0.firebaseio.com/posts/${contex.params.postId}.json`
      )
      .then(res => {
        return {
          post: { ...res.data, id: contex.params.postId }
        }
      })
      .catch(e => contex.error(e))
  },
  methods: {
    onSubmit(post) {
      console.log(post)

      console.log("Post Editing!")
      this.$store.dispatch("editPost", post).then(() => {
        this.$router.push("/admin")
      })
    }
  }
}
</script>
