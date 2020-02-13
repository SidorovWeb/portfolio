<template>
  <div class="div">
    <div class="loading-screen">
      <div class="loading-screen__wrapp">
        <div class="loading-screen__title h4">
          <span class="mask-text mask-text--1 js-splitme">{{
            this.$t("dev")
          }}</span>
        </div>
      </div>
    </div>
    <div class="ScreenSecond">
      <div id="pixi"></div>
      <div class="overlay"></div>
    </div>
    <!-- resize -->
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
import { TimelineMax, TweenMax, Power0, Power1, Power2 } from "gsap"
import { mapState } from "vuex"
import Splitter from "split-html-to-chars"

export default {
  computed: {
    ...mapState(["pixiScreen"])
  },
  mounted() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    this.pixiScreen ? this.animLoadScreen() : this.screenFirst()
  },
  methods: {
    animLoadScreen() {
      const self = this
      const splits = document.querySelectorAll(".js-splitme")

      ;[].forEach.call(splits, function(el) {
        el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>')
      })

      TweenMax.set([".mask-text", ".loading-screen__subtitle"], {
        visibility: "visible"
      })

      const tl = new TimelineMax({ onComplete: self.pixiRenderer })
      tl.staggerFromTo(
        ".mask-text .letter",
        0.8,
        {
          scaleW: 0.1,
          webKitFilter: "blur(5px)",
          filter: "blur(5px)",
          x: 50
        },
        {
          scaleW: 0.1,
          autoAlpha: 1,
          webKitFilter: "blur(0px)",
          filter: "blur(0px)",
          x: 0,
          delay: 1.5,
          ease: Power1.easeOut
        },
        0.2
      ).fromTo(
        ".loading-screen__wrapp",
        1,
        { autoAlpha: 1 },
        { autoAlpha: 0, ease: Power0.easeNone }
      )
    },
    pixiRenderer() {
      if (window.matchMedia("screen and (max-width: 768px)").matches) {
        this.screenFirst()
        return false
      }
      const self = this
      const tlPixi = new TimelineMax({ onComplete: self.screenFirst })
      if (process.browser) {
        let width = 1024
        let height = 1248
        if (window.matchMedia("screen and (max-width: 1024px)").matches) {
          width = 640
          height = 804
        }
        const PIXI = require("pixi.js")
        const renderer = new PIXI.Application({
          width,
          height,
          transparent: true
        })
        renderer.renderer.autoResize = true
        document.getElementById("pixi").appendChild(renderer.view)

        renderer.view.style.position = "absolute"
        renderer.view.style.left = "50%"
        renderer.view.style.top = "50%"
        renderer.view.style.transform = "translate3d( -50%, -50%, 0 )"

        let stage = new PIXI.Container()
        renderer.stage.addChild(stage)

        let littleRobot = PIXI.Sprite.from(
          require("../static/img/home/myphoto.png")
        )

        littleRobot.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
        littleRobot.anchor.set(0.5)

        littleRobot.width = renderer.screen.width / 2
        littleRobot.height = renderer.screen.height / 2
        littleRobot.interactive = true

        stage.x = renderer.screen.width / 2
        stage.y = renderer.screen.height / 2

        stage.pivot.x = stage.width / 2
        stage.pivot.y = stage.height / 2

        stage.addChild(littleRobot)

        // let colorMatrix = new PIXI.filters.ColorMatrixFilter();
        let blurFilter2 = new PIXI.filters.BlurFilter()

        // stage.filters = [colorMatrix, blurFilter2];
        stage.filters = [blurFilter2]

        // colorMatrix.greyscale(0.34);
        blurFilter2.blur = 200

        tlPixi
          .to(blurFilter2, 2, {
            blur: 0,
            ease: Power0.easeNone
          })
          .to(".overlay", 0.8, {
            y: 0,
            delay: 0.4,
            ease: Power2.easeOut
          })
          .to("#pixi", 0, {
            visibility: "hidden",
            onComplete: function() {
              renderer.stop()
              stage.destroy(true)
            }
          })
          .to(".overlay", 0.8, {
            yPercent: -115,
            delay: 0.4,
            ease: Power2.easeOut
          })
      }
    },
    screenFirst() {
      if (this.pixiScreen) {
        this.$store.dispatch("setScreen", false)
        this.$store.dispatch("setPixiScreen", false)
      }
      this.$store.dispatch("setScreen", false)
    },
    handleResize() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }
  }
}
</script>

<style lang="scss">
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    font-size: 1.5rem;
    color: var(--white);
    will-change: transform;
    backface-visibility: hidden;
  }
}
.js-splitme {
  visibility: hidden;
  & > * {
    margin-right: 1px;
  }

  &:last-child {
    margin-right: 0;
  }
  & .letter {
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    visibility: hidden;
  }
}
.ScreenSecond {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--main-red);
  transform: translateY(115%);
  will-change: transform;
  backface-visibility: hidden;
  z-index: 999;
}
#pixi {
  height: 100vh;
  width: 100%;
}
</style>
