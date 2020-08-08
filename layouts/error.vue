<template>
  <div class="error-404">
    <h1>Что-то пошло не так....</h1>
    <p>Ссылка, по которой вы нажали, может быть повреждена или больше не существует.</p>
    <nuxt-link to="/" class="btn btnAccent error-404__btn">Вернуться на главную страницу</nuxt-link>
    <SVGerror />
  </div>
</template>

<script>
import SVGerror from "@/static/img/svg/404.svg";

export default {
  name: "NuxtError",
  layout: "default",
  components: { SVGerror }
};
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
  padding: 0 20px;
  text-align: center;
  h1 {
    font-size: 42px;
    margin-bottom: 26px;
    margin-top: 7%;
    line-height: 40px;

    @include md {
      font-size: 28px;
      margin-top: 10%;
      line-height: 28px;
    }
  }
  p {
    margin-bottom: 32px;
  }
  a {
    border-radius: 0;
  }
}

.error-404 a {
  line-height: 22px;
}
</style>
