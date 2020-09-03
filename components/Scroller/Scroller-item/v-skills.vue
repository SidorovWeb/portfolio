<template>
  <div class="skills v-skills">
    <div class="text-zone skills__text-zone">
      <!-- v-headline -->
      <v-headline title="skills__title" word1="h2Skills1" word2="h2Skills2" />
      <!-- <div class="text-zone__text-container">
        <p class="skills__text text-zone__text">{{ this.$t("skillsText") }}</p>
      </div>-->
    </div>
    <div class="skills__tags mauto ml100">
      <!-- tags -->
      <div class="skills__tag">
        <p>
          <span>HTML</span>
        </p>
        <ul class="skills__list">
          <li class="skills__item">PUG</li>
        </ul>
      </div>
      <div class="skills__tag">
        <p>
          <span>CSS</span>
        </p>
        <ul class="skills__list">
          <li class="skills__item">SCSS</li>
          <li class="skills__item">less</li>
          <li class="skills__item">Bootstrap</li>
        </ul>
      </div>
      <div class="skills__tag">
        <p>
          <span>Javascript</span>
        </p>
        <ul class="skills__list">
          <li class="skills__item">jQuery</li>
          <li class="skills__item">Vue.js</li>
        </ul>
      </div>
      <div class="skills__tag">
        <p>
          <span>{{ this.$t("tools") }}</span>
        </p>
        <ul class="skills__list">
          <li class="skills__item">Gulp</li>
          <li class="skills__item">WebPack</li>
          <li class="skills__item">VSCode</li>
          <li class="skills__item">GIT</li>
        </ul>
        <ul class="skills__list">
          <li class="skills__item">GitHub</li>
          <li class="skills__item">Photoshop</li>
          <li class="skills__item">Avocode</li>
          <li class="skills__item">Figma</li>
        </ul>
      </div>
      <div class="skills__tag">
        <p>
          <span>{{ this.$t("methodology") }}</span>
        </p>
        <ul class="skills__list">
          <li class="skills__item">{{ this.$t("bem") }}</li>
        </ul>
      </div>
      <div class="skills__tag">
        <p>
          <span>HTML to WordPress</span>
        </p>
      </div>
      <!-- <SVGMCodeDevelopment class="skills__svg" /> -->
    </div>
  </div>
</template>

<script>
// import SVGMCodeDevelopment from "@/static/img/svg/code-development.svg";

export default {
  name: "v-skills",
  // components: { SVGMCodeDevelopment },
  mounted() {
    this.animElems();
  },
  computed: {
    clickNav() {
      return this.$store.getters.getClickNavMenu;
    }
  },
  watch: {
    clickNav: function(clickMenuNav) {
      if (clickMenuNav) {
        this.leave();
      }
    }
  },
  methods: {
    animElems() {
      let tl = new TimelineMax({});
      const title = document.querySelectorAll(".title-section .word");
      const skillsLine = document.querySelectorAll(".skills__tag");
      // const svg = document.querySelector(".skills__svg");

      TweenMax.set(skillsLine, {
        autoAlpha: 0,
        scale: 0.95,
        yPercent: 2
      });

      tl.staggerFromTo(
        title,
        1,
        { yPercent: 115, autoAlpha: 1 },
        { delay: 0.4, yPercent: 0 },
        0.3
      );
      tl.staggerTo(
        skillsLine,
        0.8,
        {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1
        },
        0.15,
        1
      );
      // .to(
      //   svg,
      //   0.8,
      //   {
      //     autoAlpha: 0.1,
      //     yPercent: 0,
      //     scale: 1
      //   },
      //   1.5
      // ).to(
      //   svg,
      //   0.01,
      //   {
      //     x: 0.000001,
      //   }
      // );
    },
    leave() {
      let tl = new TimelineMax();
      const title = document.querySelectorAll(".title-section .word");
      const skillsLine = document.querySelectorAll(".skills__tag");
      // const svg = document.querySelector(".skills__svg");

      tl.to([title, skillsLine], 0.5, {
        autoAlpha: 0
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars.scss";
@import "@/assets/scss/mixins/mixins";

.skills {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include lg {
    flex-direction: column;
    margin-bottom: 4rem;
  }

  &__text-zone {
    @include xlg {
      width: calc(50% - 15px);
    }
    @include lg {
      width: 100%;
      margin-bottom: 2rem;
      line-height: 28px;
    }
  }
  &__tags {
    position: relative;
    padding-top: 1rem;
    z-index: 2;
    @include xlg {
      display: flex;
      width: calc(50% - 15px);
      flex-direction: column;
      padding-left: 10%;
    }
    @include lg {
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

      @include md {
        font-size: 1rem;
      }
    }
    span {
      display: inline-block;
      color: var(--main-red);
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
    color: var(--white);
    @include md {
      font-size: 0.9rem;
    }
  }
  &__svg {
    position: absolute;
    top: 0;
    width: 500px;
    height: 500px;
    opacity: 0.1;
    @include md {
      width: 300px;
      height: 300px;
    }
  }
}
</style>
