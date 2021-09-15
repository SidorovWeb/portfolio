<template>
  <div class="wrapper">
    <div class="auth-header">
      <!-- SVGhome -->
      <nuxt-link class="auth-header__link auth-header__to-home__link" to="/">
        <SVGhome class="svg-home" />
      </nuxt-link>
    </div>
    <!-- nuxt -->
    <nuxt />
    <!-- message -->
    <Message v-if="message" :message="message" mes-class="error" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SVGhome from "@/static/img/svg/home.svg";
export default {
  name: "Auth",
  components: { SVGhome },
  computed: {
    ...mapState(["message"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.wrapper {
  background-color: var(--bg-color);
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.auth-header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 1.25rem 2.5rem;
  z-index: 1;
  @include lg {
    padding: 1.2rem;
  }
  & > * {
    margin-right: 2rem;
    &:last-child {
      margin-right: 0;
    }
  }
  &__link {
    display: flex;
    color: var(--white);
  }
  &__to-home__link {
    & > * {
      margin-right: 6px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
