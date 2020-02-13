<template>
  <div class="contacts">
    <div class="text-zone contacts__text-zone">
      <!-- headline -->
      <Headline
        title="contacts__title"
        word1="h2Contacts1"
        word2="h2Contacts2"
      />
      <div class="text-zone__text-container">
        <!-- Badges -->
        <Badges new-class="tag tag-text--top" tag="p" />
        <!-- text -->
        <p class="contacts__text text-zone__text">
          {{ this.$t("contactsText") }}
        </p>
        <!-- Badges -->
        <Badges new-class="tag tag-text--bottom" tag="/p" />
      </div>
    </div>
    <div class="contacts__wrapper mauto ml100">
      <div class="contacts__form-wrapper">
        <!-- form -->
        <Form />
        <!-- social -->
        <SocialButton />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.contacts {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @include md {
    flex-direction: column;
  }
  &__wrapper {
    width: 47%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    @include xlg {
      width: calc(50% - 15px);
    }
    @include md {
      width: 100%;
    }
  }
  &__text-zone {
    @include xlg {
      width: calc(50% - 15px);
    }
    @include md {
      width: 100%;
      margin-bottom: 3rem;
    }
  }
  &__form-wrapper {
    max-width: 450px;
    width: 100%;
    @include md {
      max-width: 100%;
    }
  }
}
</style>
