<template>
  <div class="skills">
    <div class="text-zone skills__text-zone">
      <!-- headline -->
      <Headline title="skills__title" word1="h2Skills1" word2="h2Skills2" />
      <div class="text-zone__text-container">
        <!-- Badges -->
        <Badges new-class="tag tag-text--top" tag="p" />
        <!-- text -->
        <p class="skills__text text-zone__text">
          {{ this.$t("skillsText") }}
        </p>
        <!-- Badges -->
        <Badges new-class="tag tag-text--bottom" tag="/p" />
      </div>
    </div>
    <div class="skills__tags mauto ml100">
      <!-- Badges -->
      <Badges new-class="tag tag-text--top" tag="ul" />
      <!-- tags -->
      <div class="skills__tag">
        <p><span>HTML</span></p>
        <ul class="skills__list">
          <li class="skills__item">
            PUG
          </li>
        </ul>
      </div>
      <div class="skills__tag">
        <p><span>CSS</span></p>
        <ul class="skills__list">
          <li class="skills__item">
            SCSS
          </li>
          <li class="skills__item">
            less
          </li>
          <li class="skills__item">
            Bootstrap
          </li>
        </ul>
      </div>
      <div class="skills__tag">
        <p><span>Javascript</span></p>
        <ul class="skills__list">
          <li class="skills__item">
            jQuery
          </li>
          <li class="skills__item">
            Vue.js
          </li>
          <li class="skills__item">
            GSAP
          </li>
        </ul>
      </div>
      <div class="skills__tag">
        <p>
          <span>{{ this.$t("tools") }}</span>
        </p>
        <ul class="skills__list">
          <li class="skills__item">
            Gulp
          </li>
          <li class="skills__item">
            WebPack
          </li>
          <li class="skills__item">
            VSCode
          </li>
          <li class="skills__item">
            GIT
          </li>
        </ul>
        <ul class="skills__list">
          <li class="skills__item">
            GitHub
          </li>
          <li class="skills__item">
            Photoshop
          </li>
          <li class="skills__item">
            Avocode
          </li>
        </ul>
      </div>
      <div class="skills__tag">
        <p>
          <span>{{ this.$t("methodology") }}</span>
        </p>
        <ul class="skills__list">
          <li class="skills__item">
            {{ this.$t("bem") }}
          </li>
        </ul>
      </div>
      <div class="skills__tag">
        <p><span>HTML to WordPress</span></p>
      </div>
      <!-- Badges -->
      <Badges new-class="tag tag-text--bottom" tag="/ul" />
      <!-- <SVGMovingForward class="skills__img" /> -->
    </div>
  </div>
</template>

<script>
// import SVGMovingForward from "@/static/img/svg/moving-forward.svg";

export default {
  // components: { SVGMovingForward }
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars.scss";
@import "@/assets/scss/mixins/mixins";

.skills {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include md {
    flex-direction: column;
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
  &__line {
    position: relative;
    display: flex;
    flex-direction: column;
    & > * {
      margin: 1rem 0;
      font-weight: 700;
    }
  }
  &__tags {
    padding-top: 1rem;
    position: relative;
    z-index: 2;
    @include xlg {
      display: flex;
      width: calc(50% - 15px);
      flex-direction: column;
      padding-left: 10%;
    }
    @include md {
      padding-top: 0rem;
      width: 100%;
      padding-left: 0;
    }
    & > * {
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__tag {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    p {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      overflow: hidden;
      font-weight: 700;
    }
    span {
      display: inline-block;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
    padding-left: 1rem;
    overflow: hidden;

    & > * {
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__item {
    color: var(--main-red);
  }

  // &__img {
  //   opacity: 0.1;
  //   position: absolute;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 1;
  // }
}
</style>
