<template>
  <no-ssr>
    <section class="auth">
      <form class="auth__form" @submit.prevent="onSubmit">
        <!-- form.name -->
        <div class="form__item" :class="{ errorInput: $v.user.email.$error }">
          <p v-if="!$v.user.email.required" class="errorText">
            {{ this.$t("required") }}
          </p>
          <p v-if="!$v.user.email.email" class="errorText">
            {{ this.$t("errorTextEmail") }}
          </p>
          <AppInput
            v-model="user.email"
            new-class="form__input"
            class="auth__input"
            :class="{ error: $v.user.email.$error }"
            :placeholder="this.$t('plhEmail')"
            @change="$v.user.email.$touch()"
          />
        </div>
        <!-- form.password -->
        <div
          class="form__item"
          :class="{ errorInput: $v.user.password.$error }"
        >
          <p v-if="!$v.user.password.required" class="errorText">
            {{ this.$t("required") }}
          </p>
          <p v-if="!$v.user.password.minLength" class="errorText">
            {{ this.$t("errorTextName") }}
            {{ $v.user.password.$params.minLength.min }} !
          </p>
          <AppInput
            v-model="user.password"
            new-class="form__input"
            class="auth__input"
            type="password"
            :class="{ error: $v.user.password.$error }"
            :placeholder="this.$t('Password')"
            @change="$v.user.password.$touch()"
          />
        </div>
        <div class="controls">
          <AppButton class="form__btn">
            Login
          </AppButton>
        </div>
      </form>
    </section>
  </no-ssr>
</template>

<script>
import { TweenMax, Power2 } from "gsap"
import { mapState } from "vuex"
import { required, minLength, email } from "vuelidate/lib/validators"
import cursor from "@/plugins/cursor.js"
export default {
  layout: "auth",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  computed: {
    ...mapState(["continueRoute"])
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      TweenMax.set(".overlay-route", { y: "0%" })
      TweenMax.to(".overlay-route", 0.8, {
        delay: 0.4,
        overwrite: 5,
        y: "-115%",
        ease: Power2.easeOut
      })
    })
  },
  mounted() {
    if (document.querySelector(".cursor")) {
      cursor()
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store
          .dispatch("authUser", this.user)
          .then(() => {
            this.$router.push("/admin")
          })
          .catch(() => {
            // reset
            this.reset()
          })
      }
    },
    reset() {
      this.user.email = ""
      this.user.password = ""
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.continueRoute) {
      TweenMax.set(".overlay-route", { y: "115%" })
      TweenMax.to(".overlay-route", 0.8, {
        delay: 0.4,
        y: "0%",
        overwrite: 5,
        ease: Power2.easeOut,
        onComplete: function() {
          next()
        }
      })
    } else {
      this.$store.dispatch("setMessage", this.$t("invalid"))
      // reset
      this.$store.dispatch("setContinueRoute", true)
      next(false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.controls {
  margin-top: 2rem;
}
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: var(--white);
  padding: 1.2rem;
  & .control {
    display: flex;
    align-items: flex-start;
  }
  &__form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
    max-width: 450px;
    width: 100%;
    margin: 0 auto;
  }
  &__input {
    max-width: 450px;
    width: 100%;
  }
}
</style>
