<template>
  <div class="portfolio">
    <!-- headline -->
    <Headline
      title="portfolio__title"
      word1="h2Portfolio1"
      word2="h2Portfolio2"
    />
    <div class="portfolio__inner">
      <!-- img -->
      <nuxt-link class="portfolio__img-wrapper" to="/works">
        <picture>
          <source
            srcset="@/static/img/home/mob-envio.webp"
            media="(max-width: 768px)"
          />
          <source
            srcset="@/static/img/home/mob-envio.png"
            media="(max-width: 768px)"
          />
          <source srcset="@/static/img/home/envio.webp" type="image/webp" />
          <img
            class="portfolio__img"
            src="@/static/img/home/envio.png"
            alt="Портфолио"
          />
        </picture>
      </nuxt-link>
      <!-- bnt -->
      <div class="portfolio__btn-wrapper">
        <div class="portfolio__btn">
          <span class="portfolio__link-wrapper">
            <nuxt-link class="portfolio__link" to="/works">{{
              this.$t("portfolioBtn")
            }}</nuxt-link>
          </span>
          <span class="portfolio__svg-wrapper">
            <!-- SVGarrow -->
            <SVGarrow />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SVGarrow from "@/static/img/svg/arrow.svg"

export default {
  components: { SVGarrow },
  computed: {
    randomItem() {
      return this.$store.getters.getOneImg
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins.scss";

.portfolio {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @include xlg {
    position: relative;
  }
  @include md {
    flex-direction: column;
  }
  &__title {
    @include md {
      margin-bottom: 3rem;
    }
  }
  &__inner {
    position: relative;
    width: calc(50% - 15px);
    margin-right: 100px;

    @include md {
      width: 100%;
    }
  }
  &__img-wrapper {
    display: inline-block;
    height: inherit;
    // box-shadow: 0px 2px 10px 0px var(--color-pseudo-element);
    // transition: box-shadow 0.5s;

    // &:hover {
    //   box-shadow: 0px 2px 10px 0px #f66;
    // }
  }
  &__img {
    object-fit: cover;
  }
  &__btn-wrapper {
    // position: absolute;
    // bottom: 40px;
    // left: 72px;
    will-change: transform;
    backface-visibility: hidden;
    overflow: hidden;
    @include xlg {
      left: 0;
      bottom: 0;
      transform: translateY(1px);
    }
  }
  &__btn {
    padding: 7px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    // background-color: var(--bg-color);
    & svg {
      display: inline-block;
      height: 18px;
      width: 18px;
      fill: var(--main-red);
      margin-left: 0.5rem;
    }
  }
  &__link-wrapper {
    overflow: hidden;
  }
  &__link {
    display: inline-block;
    text-align: left;
    color: var(--main-red);
  }
  &__svg-wrapper {
    background-color: var(--bg-color);
  }
}
</style>
