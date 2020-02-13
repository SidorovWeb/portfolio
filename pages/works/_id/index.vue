<template>
  <div class="wrapper">
    <section class="post">
      <div class="container">
        <!-- Header -->
        <img :src="post.img" :alt="post.title" />
        <h1 class="title">
          {{ post.title }}
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios"

export default {
  async asyncData(context) {
    let [post] = await Promise.all([
      axios.get(
        `https://my-portfolio-50ba0.firebaseio.com/posts/${context.params.id}.json`
      )
    ])

    return {
      post: post.data
    }
  }
}
</script>

<style lang="scss">
.post {
  color: white;
}
</style>
