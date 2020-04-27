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
        <SVGprogrApp />
        <!-- <picture>
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
        </picture> -->
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
import { TimelineMax, TweenMax, Power2 } from "gsap";
import SVGarrow from "@/static/img/svg/arrow.svg";
import SVGprogrApp from "@/static/img/svg/code-development.svg";

export default {
  components: { SVGarrow, SVGprogrApp },
  computed: {
    playSVG() {
      return this.$store.state.start;
    }
  },
  watch: {
    playSVG: function(play) {
      if (play) {
        this.playAnimeSVG();
      }
    }
  },
  methods: {
    playAnimeSVG() {
      TweenMax.fromTo(
        [".svg-portfolio-hair", ".svg-portfolio-face"],
        1,
        {
          rotation: 0,
          transformOrigin: "50% center"
        },
        {
          rotation: 5,

          x: 0.1,
          y: -0.1,
          yoyo: true,
          repeat: -1
        }
      );

      TweenMax.to(".svg-portfolio-bg-mobile", 1, {
        fill: "#231f20",
        ease: "none",
        yoyo: true,
        repeat: -1,
        repeatDelay: 5
      });

      TweenMax.fromTo(
        ".svg-portfolio-line",
        0.5,
        {
          fill: "#FF6666"
        },
        {
          fill: "#08fdd8",
          ease: "none",
          yoyo: true,
          repeat: -1,
          repeatDelay: 5
        }
      );

      TweenMax.staggerFromTo(
        ".svg-portfolio-line",
        0.5,
        {
          opacity: 0
        },
        {
          opacity: 1,
          ease: "none",
          yoyo: true,
          repeat: -1,
          repeatDelay: 5,
          stagger: 0.5
        }
      );

      TweenMax.fromTo(
        [".svg-portfolio-body", ".svg-portfolio-left-hand"],
        1,
        { scale: 1, transformOrigin: "center" },
        { scale: 1.03, ease: "none", yoyo: true, repeat: -1 },
        "left-leg"
      );

      let tl = new TimelineMax({ yoyo: true, repeat: -1 })
        .to(
          ".svg-portfolio-right-leg",
          2,
          {
            rotation: 20,
            transformOrigin: "50% center",
            ease: "none"
          },
          "left-leg"
        )
        .to(
          ".svg-portfolio-right-foot",
          2,
          {
            rotation: 20,
            y: -5,
            x: -5,
            ease: "none",
            transformOrigin: "50% center"
          },
          "left-leg"
        );
    }
  }
};
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
    display: flex;
    flex-direction: column;
    align-items: center;

    @include md {
      width: 100%;
    }
  }
  &__img-wrapper {
    display: inline-block;
    height: inherit;
    max-width: 800px;
    width: 100%;

    svg {
      width: 100%;
    }
  }
  &__img {
    object-fit: cover;
  }
  &__btn-wrapper {
    will-change: transform;
    backface-visibility: hidden;

    @include xlg {
      left: 0;
      bottom: 0;
      transform: translateY(1px);
    }
  }
  &__btn {
    padding: 7px 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & svg {
      display: inline-block;
      height: 18px;
      width: 18px;
      fill: var(--white);
      margin-left: 0.5rem;
      animation: arrowAnime 1.5s infinite;
    }
  }

  &__link {
    display: inline-block;
    text-align: right;
    color: var(--white);
    border-bottom: 2px solid var(--white);
  }
  &__svg-wrapper {
    background-color: var(--bg-color);
    position: absolute;
    left: -42px;
  }
}

@keyframes arrowAnime {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  100% {
    transform: translateX(15px);
    opacity: 1;
  }
}
</style>
