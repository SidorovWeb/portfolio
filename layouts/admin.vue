<template>
  <client-only>
    <div class="wrapper admin">
      <div class="admin-header">
        <nuxt-link to="/admin" class="link linkWhite ">
          Admin
        </nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite">
          New Post
        </nuxt-link>
        <span class="link linkWhite" @click="logoutUser">Logout</span>
      </div>
      <div class="container">
        <h1>Admin Page</h1>
        <div class="content">
          <nuxt />
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  middleware: ["auth-check", "auth"],
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/auth")
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/vars";
.wrapper {
  background-color: $light-color;
  padding-top: 2rem;
}

h1 {
  margin-top: 2rem;
  text-align: center;
}
.admin-header {
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    margin-right: 12px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
