<template>
  <div class="works wrapper-content">
    <!-- PostsList -->
    <PostsList :posts="postsLoaded" />
  </div>
</template>

<script>
import { TimelineMax, TweenMax, Power2 } from "gsap"
import cursor from "@/plugins/cursor.js"
export default {
  head () {
    const type = "site"
    return {
      title: this.$t("myWorks"),
      meta: [
        { hid: "og:title", name: "og:title", content: this.$t("myWorks") },
        {
          hid: "description",
          name: "description",
          content: this.$t("portfolio")
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("portfolio")
        },
        { hid: "og:type", name: "og:type", content: type }
        // { hid: 'og:image', name: 'og:image', content: '@/static/img/home/myphoto.png' },
      ]
    }
  },
  beforeRouteEnter (to, from, next) {
    next(() => {
      TweenMax.set(".overlay-route", { y: "0%" })
      TweenMax.to(".overlay-route", 0.8, {
        delay: 0.4,
        y: "-115%",
        overwrite: 5,
        ease: Power2.easeOut,
        onComplete: function () {
          const body = document.querySelector("body")
          body.classList.add("works-page")
        }
      })
    })
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  },
  mounted () {
    cursor()
    this.playAnim()
  },
  methods: {
    playAnim () {
      const header = document.querySelector(".header")
      TweenMax.set(header, { visibility: "hidden" })
      const tl = new TimelineMax()
      tl.to(
        header,
        2,
        { delay: 1, autoAlpha: 1, ease: Power2.easeOut },
        "works"
      )
        .fromTo(".post-col", 1,
          { autoAlpha: 0, y: 20 }, { delay: 1.5, autoAlpha: 1, y: 0, ease: Power2.easeOut }, "works")
        .fromTo([".select", ".grid"], .5,
          { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, '-=1')
    }
  },
  beforeRouteLeave (to, from, next) {
    TweenMax.set(".overlay-route", { y: "115%" })
    TweenMax.to(".overlay-route", 0.8, {
      delay: 0.4,
      y: "0%",
      overwrite: 5,
      ease: Power2.easeOut,
      onComplete: function () {
        TweenMax.set(".header", { autoAlpha: 0 })
        const body = document.querySelector("body")
        body.classList.remove("works-page")
        next()
      }
    })
  }
}
</script>

<style lang="scss">
.works-page {
  overflow: initial;
}
</style>
