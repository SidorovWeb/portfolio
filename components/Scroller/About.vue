<template>
  <div class="about active-scroller-section">
    <div class="about__text-zone">
      <!-- <h1 v-if="!start">cdsfsKLKLKLKLKe</h1> -->
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
        <SVGSmileyFace class="about__svg" />

        <div id="rain-container"></div>
      </div>
    </div>
    <!-- resize -->
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
import SVGSmileyFace from "@/static/img/svg/focused-working.svg";
import { TimelineMax, TweenMax, Power2 } from "gsap";

export default {
  components: { SVGSmileyFace },
  computed: {
    playSVG() {
      return this.$store.state.start;
    }
  },
  watch: {
    playSVG: function(play) {
      if (play) {
        this.animeAboutePhoto();
      }
    }
  },
  methods: {
    animeAboutePhoto() {
      this.animeRain();

      this.posContainerRain();

      let tl = new TimelineMax()
        .fromTo(
          ".svg-body",
          2,
          { scaleX: 1, x: 0, transformOrigin: "50% center" },
          { scaleX: 1.06, x: -2, ease: "none", yoyo: true, repeat: -1 },
          "step1"
        )
        .fromTo(
          ".svg-left-leg",
          2,
          { rotation: "0", x: 0, y: 0, transformOrigin: "50% center" },
          {
            rotation: "-15deg",
            x: 2,
            y: -4,
            ease: "none",
            yoyo: true,
            repeat: -1
          },
          "step1"
        )
        .fromTo(
          ".svg-right-hand",
          0.3,
          { y: "0" },
          { y: ".5px", ease: "none", yoyo: true, repeat: -1 },
          "step1"
        )
        .fromTo(
          ".svg-left-hand",
          0.3,
          { y: "0" },
          { y: ".5px", ease: "none", yoyo: true, repeat: -1 }
        )
        .fromTo(
          ".svg-hair",
          4,
          { rotation: "0", transformOrigin: "50% center" },
          { rotation: "-7deg", ease: "none", yoyo: true, repeat: -1 },
          "face"
        )
        .fromTo(
          ".svg-ear",
          4,
          { x: "0", transformOrigin: "50% center" },
          { x: "-1px", ease: "none", yoyo: true, repeat: -1 },
          "face"
        )
        .fromTo(
          ".svg-eye",
          4,
          { rotation: "0", x: "0", y: "0", transformOrigin: "50% center" },
          {
            rotation: "-55deg",
            x: "0",
            y: "0",
            ease: "none",
            yoyo: true,
            repeat: -1
          },
          "face"
        )
        .to(".svg-monitor", 0.5, {
          fill: "#FF6666",
          ease: "none",
          yoyo: true,
          repeat: -1
        })
        .to(".svg-monitor", 0.5, {
          fill: "#08fdd8",
          ease: "none",
          yoyo: true,
          repeat: -1
        });
    },
    animeRain() {
      TweenMax.set(".svg-rain", { autoAlpha: 0 });

      const dropletQuantity = 20;

      for (var i = dropletQuantity - 1; i >= 0; i--) {
        const pos = Math.floor(Math.random() * 100 + 1);
        const delay = Math.random();
        const speed = Math.random() * 0.5 + 2;

        let droplet = document.createElement("div");
        droplet.className = "droplet";
        droplet.style.left = pos + "%";

        TweenMax.to(droplet, speed, {
          y: 420,
          delay: delay,
          repeat: -1,
          ease: Linear.easeNone
        });

        document.getElementById("rain-container").appendChild(droplet);
      }
    },
    posContainerRain() {
      const window = document
          .querySelector(".svg-window")
          .getBoundingClientRect(),
        svgContainer = document
          .querySelector(".svg-container")
          .getBoundingClientRect(),
        containerRain = document.querySelector("#rain-container"),
        svg = document.querySelector(".about__svg").getBoundingClientRect();

      containerRain.style.height = `${window.height}px`;
      containerRain.style.width = `${svgContainer.width}px`;
      containerRain.style.top = `${(svg.height - svgContainer.height) / 2}px`;
    },
    handleResize() {
      this.posContainerRain();
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins.scss";
#rain-container {
  position: absolute;
  top: 43px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 280px;
  overflow: hidden;
  z-index: -1;
}
.droplet {
  position: absolute;
  top: -6%;
  height: 25px;
  width: 1px;
  background-color: #d1d3d4;

  @include md {
    height: 10px;
  }
}
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
    margin: auto;

    @include xlg {
      width: calc(50% - 15px);
    }
    @include md {
      width: 100%;
      margin: auto;
    }
  }
  &__photo {
    will-change: opacity, visibility;
  }
}
</style>
