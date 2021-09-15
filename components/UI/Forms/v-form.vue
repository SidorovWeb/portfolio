<template>
  <div class="v-form">
    <form class="form" @submit.prevent="onSubmit">
      <!-- radio-line -->
      <div class="radio-line form__radio-line">
        <span class="radio-line__text">{{ this.$t("send") }}:</span>
        <v-radio
          id="form__check--email"
          type="radio"
          name="social"
          label-class="radio-line__label"
          new-class="radio-line__input"
          value="email"
          checked
          @click="onChange($event.target.value)"
          >Email</v-radio
        >
        <v-radio
          id="form__check--telegram"
          type="radio"
          name="social"
          label-class="radio-line__label"
          new-class="radio-line__input"
          value="telegram"
          @click="onChange($event.target.value)"
          >Telegram</v-radio
        >
      </div>
      <!-- form.name -->
      <div class="form__item" :class="{ errorInput: $v.form.name.$error }">
        <p v-if="!$v.form.name.required" class="errorText">
          {{ this.$t("required") }}
        </p>
        <p v-if="!$v.form.name.minLength" class="errorText">
          {{ this.$t("errorTextName") }}
          {{ $v.form.name.$params.minLength.min }} !
        </p>
        <v-input
          v-model="form.name"
          new-class="form__input"
          :class="{ error: $v.form.name.$error }"
          autocomplete="on"
          :placeholder="'*' + this.$t('plhName')"
          @change="$v.form.name.$touch()"
        />
      </div>
      <!-- form.userName -->
      <div
        v-if="!form.check"
        class="form__item"
        :class="{ errorInput: $v.form.userName.$error }"
      >
        <p v-if="!$v.form.userName.required" class="errorText">
          {{ this.$t("required") }}
        </p>
        <p v-if="!$v.form.userName.minLength" class="errorText">
          {{ this.$t("errorTextName") }}
          {{ $v.form.userName.$params.minLength.min }} !
        </p>
        <v-input
          v-model="form.userName"
          new-class="form__input"
          :class="{ error: $v.form.userName.$error }"
          autocomplete="on"
          :placeholder="'*' + this.$t('plhTelegram')"
          @change="$v.form.userName.$touch()"
        />
      </div>
      <!-- form.email -->
      <div
        v-if="form.check"
        class="form__item"
        :class="{ errorInput: $v.form.email.$error }"
      >
        <p v-if="!$v.form.email.required" class="errorText">
          {{ this.$t("required") }}
        </p>
        <p v-if="!$v.form.email.email" class="errorText">
          {{ this.$t("errorTextEmail") }}
        </p>
        <v-input
          v-model="form.email"
          new-class="form__input"
          :class="{ error: $v.form.email.$error }"
          autocomplete="on"
          :placeholder="'*' + this.$t('plhEmail')"
          @change="$v.form.email.$touch()"
        />
      </div>
      <!-- form.textarea -->
      <div class="form__item" :class="{ errorInput: $v.form.text.$error }">
        <p v-if="!$v.form.text.required" class="errorText">
          {{ this.$t("required") }}
        </p>
        <p v-if="!$v.form.text.minLength" class="errorText">
          {{ this.$t("errorTextText") }}
          {{ $v.form.text.$params.minLength.min }} !
        </p>
        <v-textArea
          :key="form.check"
          v-model="form.text"
          new-class="form__textarea"
          :class="{ error: $v.form.text.$error }"
          :placeholder="'*' + this.$t('plhText')"
          @change="$v.form.text.$touch()"
        />
      </div>
      <!-- v-button -->
      <v-button class="form__btn" btnClass="btnAccent">{{
        this.$t("send")
      }}</v-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "v-form",
  data() {
    return {
      form: {
        name: "",
        userName: "",
        email: "",
        text: "",
        check: true,
      },
      message: null,
    };
  },
  validations() {
    if (this.form.check) {
      return {
        form: {
          name: {
            required,
            minLength: minLength(4),
          },
          email: {
            required,
            email,
          },
          text: {
            required,
            minLength: minLength(4),
          },
        },
      };
    } else {
      return {
        form: {
          name: {
            required,
            minLength: minLength(4),
          },
          userName: {
            required,
            minLength: minLength(4),
          },
          text: {
            required,
            minLength: minLength(4),
          },
        },
      };
    }
  },
  methods: {
    ...mapActions(["setMessage"]),

    onChange(event) {
      if (this.form.check && event == "email") return false;
      if (!this.form.check && event == "telegram") return false;

      this.form.check = !this.form.check;
      this.reset();
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = this.form.check
          ? {
              name: this.form.name,
              email: this.form.email,
              text: this.form.text,
            }
          : {
              name: this.form.name,
              userName: this.form.userName,
              text: this.form.text,
            };
        if (this.form.check) {
          // mail
          axios
            .post("https://sidorovweb.ru/mail.php", user)
            .then((res) => {
              console.log(res);
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          // telegram
          axios
            .post("https://sidorovweb.ru/telegram.php", user)
            .then((res) => {
              console.log(res);
            })
            .catch((e) => {
              console.log(e);
            });
        }

        this.setMessage({
          name: this.$t("message"),
          icon: "check_circle",
        });
        // DONE
        this.form.check = null;
        this.reset();
        return;
      }
      this.setMessage({
        name: this.$t("messageError"),
        icon: "error",
      });
    },
    reset() {
      this.form.name = "";
      this.form.userName = "";
      this.form.email = "";
      this.form.text = "";
      this.$v.$reset();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.radio-line {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9rem;
  padding: 0.7rem 0 0.7rem 0.7rem;
  & > * {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  & .control {
    display: flex;
  }
  &__text {
    color: var(--white);
    font-weight: 700;

    @include sm {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
    }
  }
  &__input {
    position: absolute;
    opacity: 0;
    display: none;
    width: 0;
    height: 0;
    visibility: hidden;
    color: var(--white);

    & + label {
      position: relative;
      display: flex;
      align-items: center;
      color: var(--white);
      padding-left: 30px;
      font-size: 0.9rem;
      cursor: pointer;
      @include sm {
        padding-left: 25px;
      }
    }

    & + label:before {
      position: absolute;
      display: inline-block;
      content: "";
      height: 16px;
      width: 16px;
      background-color: #a6a6a6;
      border-radius: 50%;
      margin-left: -25px;
      transition: all 0.3s ease;
    }
    &:checked + label:before {
      position: absolute;
      background-color: var(--main-red);
      transition: all 0.3s ease;
    }
    &:focus + label:before {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
    }
  }
}
.form {
  position: relative;
  margin-bottom: 4rem;
  & .message {
    position: absolute;
    bottom: 0;
    transform: translateY(-50px);
    padding-left: 0.7rem;
  }
  & .control {
    display: flex;
    align-items: flex-start;
  }
  &__input {
    margin-bottom: 1.4rem;
  }
  &__textarea {
    margin-bottom: 2rem;
    min-height: 150px;
  }
  &__input,
  &__textarea {
    border: 0;
    border-radius: 5px;
    color: #fff;
    background-color: var(--color-pseudo-element);
    padding: 1.2rem;
    font-size: 1rem;
    &::placeholder {
      color: #e9e9e9;
      opacity: 1;
      letter-spacing: $mainLetterSpacing;
      font-size: 0.9rem;
      font-family: $mainFontBold;
    }
  }
  &__btn {
    border-radius: 5px;
    padding: 1em 2em;
    font-size: 1rem;
    border-color: var(--main-red);
    background-color: var(--main-red);
    font-weight: 700;
    color: #e9e9e9 !important;
  }
}

.form__item .errorText {
  display: none;
  margin-bottom: 8px;
  color: var(--main-red);
}

.errorInput .errorText {
  position: absolute;
  margin-left: 0.7rem;
  display: block;
  transform: translateY(-19px);
  font-size: 0.8rem;
  text-align: left;
}
input:focus::placeholder,
textarea:focus::placeholder {
  color: transparent;
}
input:focus::-webkit-input-placeholder,
textarea:focus::-webkit-input-placeholder {
  color: transparent;
}
input:focus::-ms-input-placeholder,
textarea:focus::-ms-input-placeholder {
  color: transparent;
}
</style>
