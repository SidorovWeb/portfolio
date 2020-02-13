<template>
  <div class="error-404">
    <h1>This page doesn’t exist</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
    <nuxt-link to="/" class="btn btnAccent">
      Вернуться на главную
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "NuxtError",
  layout: "default"
}
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.error-404 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  color: var(--white);
  h1 {
    font-size: 42px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 32px;
  }
  a {
    border-radius: 0;
  }
}
.error-404 ~ .overlay-route {
  transform: translateY(115%) !important;
}
</style>
