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
        <Form class="contacts__form" />
        <!-- social -->
        <SocialButton class="contacts__social" />
        <SVGchat class="contacts__chat" />
      </div>
    </div>
  </div>
</template>

<script>
import SVGchat from "@/static/img/svg/chat.svg";
import { TimelineMax, TweenMax, Power2 } from "gsap";

export default {
  components: { SVGchat },
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
      TweenMax.to(".svg-contact-right-finger", 1.5, {
        rotation: -8,
        transformOrigin: "50% center",
        ease: "none",
        yoyo: true,
        repeat: -1,
        repeatDelay: 2
      });

      TweenMax.to(".svg-contact-right-hand", 4, {
        y: -30,
        ease: "none",
        yoyo: true,
        repeat: -1,
        repeatDelay: 5
      });

      TweenMax.staggerTo(".svg-contact-chat", 0.7, {
        opacity: 0,
        ease: "none",
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.2,
        stagger: 1
      });

      TweenMax.staggerTo(".svg-contact-chat2", 0.7, {
        opacity: 0,
        ease: "none",
        yoyo: true,
        repeat: -1,
        delay: 0.4,
        repeatDelay: 0.4,
        stagger: 1
      });
    }
  }
};
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
    position: relative;

    @include md {
      max-width: 100%;
    }
  }
  &__chat {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }
  &__form {
    z-index: 2;
    position: relative;
  }
  &__social {
    z-index: 2;
    position: relative;
  }
}
</style>
