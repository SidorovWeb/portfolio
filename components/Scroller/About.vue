<template>
  <div class="about active-scroller-section">
    <div class="about__text-zone">
      <!-- headline -->
      <Headline title="about__title" word1="h2About1" word2="h2About2" />
      <div class="about__text-container">
        <!-- Badges -->
        <Badges new-class="tag tag-text--top" tag="p" />
        <!-- text  -->
        <p class="about__text text-zone__text">
          {{ this.$t("aboutText") }}
        </p>
        <!-- Badges -->
        <Badges new-class="tag tag-text--bottom" tag="/p" />
      </div>
    </div>
    <div class="about__photo-wrapper">
      <div class="about__photo">
        <picture>
          <source srcset="@/static/img/home/myphoto.webp" type="image/webp" />
          <img
            class="about__img"
            src="@/static/img/home/myphoto.png"
            alt="Моя морда"
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.strToArray()
  },
  methods: {
    strToArray() {
      const getArratStrs = function(str) {
        return str.trim().split(" ")
      }
      let strToArray = document.querySelectorAll(".strToArray")

      function elemParse(el) {
        let sentence = []
        sentence = getArratStrs(el.textContent)
        let textWrapperContent = ""

        for (let i = 0; i < sentence.length; i++) {
          let content =
            `<span class="word-container" >
          <span class="word">` +
            sentence[i] +
            "&nbsp</span></span>"
          textWrapperContent += content
        }

        el.innerHTML = textWrapperContent
      }

      ;[].forEach.call(strToArray, function(el, i) {
        elemParse(el, i)
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins.scss";
.word-container {
  display: block;
  overflow: hidden;
}
.word {
  display: inline-block;
}

.about {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @include xlg {
    justify-content: space-between;
  }
  @include md {
    flex-direction: column;
  }
  &__text-zone {
    display: flex;
    flex-direction: column;
    width: calc(50% - 15px);
    @include xxl {
      width: calc(60% - 15px);
    }
    @include md {
      width: 100%;
      margin-bottom: 3rem;
    }
  }
  &__title {
    margin-bottom: 4rem;
    @include md {
      margin-bottom: 2rem;
    }
  }

  &__text-container {
    position: relative;
    width: 90%;

    @include xlg {
      width: 100%;
    }
  }
  &__text {
    width: 100%;
    line-height: 33px;
  }
  &__photo-wrapper {
    position: relative;
    user-select: none;
    width: calc(50% - 15px);
    max-width: 404px;
    margin: auto;
    @include xxl {
      width: calc(35% - 15px);
    }
    @include xlg {
      width: calc(50% - 15px);
    }
    @include md {
      width: 50%;
      margin: auto;
    }
    @include sm {
      width: 70%;
    }
  }
  &__photo {
    will-change: opacity, visibility;
  }
  &__img {
    pointer-events: none;
    width: 100%;
    object-fit: cover;
    object-position: 50% 25%;
    height: 100%;
  }
}
</style>
