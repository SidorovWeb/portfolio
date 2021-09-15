<template>
  <div class="contacts v-contacts">
    <div class="text-zone contacts__text-zone">
      <!-- v-headline -->
      <v-headline
        title="contacts__title"
        word1="h2Contacts1"
        word2="h2Contacts2"
      />
      <div class="text-zone__text-container">
        <!-- text -->
        <p class="contacts__text text-zone__text">
          {{ this.$t("contactsText") }}
        </p>
        <p class="contacts__text text-zone__text">
          {{ this.$t("contactsFB") }}
          <a
            href="https://kwork.ru/user/sidorovalexander"
            target="_blink"
            class="contacts__fb v-cursor-btn"
            >Kwork</a
          >
        </p>
      </div>
    </div>
    <div class="contacts__wrapper mauto ml100">
      <div class="contacts__form-wrapper">
        <!-- v-form -->
        <v-form class="contacts__form" />
        <!-- social -->
        <v-social-button class="contacts__social" />
        <!-- svg -->
        <!-- <SVGchat class="contacts__chat" /> -->
      </div>
    </div>
    <!-- v-notification -->
    <v-notification :messages="getMessages" :timeOut="5000" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import SVGchat from "@/static/img/svg/chat.svg";
import { TweenMax } from "gsap";

export default {
  name: "v-contacts",
  // components: { SVGchat },
  mounted() {
    this.animElems();
  },
  computed: {
    ...mapGetters(["getMessages"]),

    clickNav() {
      return this.$store.getters.getClickNavMenu;
    },
  },
  watch: {
    clickNav: function (clickMenuNav) {
      if (clickMenuNav) {
        this.leave();
      }
    },
  },
  methods: {
    animElems() {
      let tl = new TimelineMax({});
      const title = document.querySelectorAll(".title-section .word");
      const text = document.querySelectorAll(".contacts__text");
      const form = document.querySelectorAll(".contacts__form");
      const social = document.querySelectorAll(".contacts__social");
      // const svg = document.querySelectorAll(".contacts__chat");

      TweenMax.set([text, form, social], {
        autoAlpha: 0,
        scale: 0.95,
        yPercent: 2,
      });

      tl.staggerFromTo(
        title,
        1,
        { yPercent: 115, autoAlpha: 1 },
        { delay: 0.4, yPercent: 0 },
        0.3
      );
      tl.staggerTo(
        [text, form, social],
        0.8,
        {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1,
        },
        0.3,
        1
      );
      // tl.to(
      //   svg,
      //   0.8,
      //   {
      //     autoAlpha: 0.1,
      //     yPercent: 0,
      //     scale: 1
      //   },
      //   1.5
      // );
    },
    leave() {
      let tl = new TimelineMax();
      const title = document.querySelectorAll(".title-section .word");
      const text = document.querySelectorAll(".contacts__text");
      const form = document.querySelectorAll(".contacts__form");
      const social = document.querySelectorAll(".contacts__social");
      // const svg = document.querySelectorAll(".contacts__chat");

      tl.to([title, text, form, social], 0.5, {
        autoAlpha: 0,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.contacts {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: $mainFontBold;
  @include lg {
    flex-direction: column;
  }
  &__wrapper {
    width: 47%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include xlg {
      width: calc(50% - 15px);
    }
    @include lg {
      width: 100%;
    }
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
  &__form-wrapper {
    max-width: 450px;
    width: 100%;
    position: relative;

    @include lg {
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
  &__fb {
    color: var(--main-red);
    text-transform: uppercase;
    font-size: 18px;
  }
}
</style>
