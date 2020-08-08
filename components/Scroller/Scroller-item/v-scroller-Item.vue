<template>
  <section class="section main-scroller__item v-scroller-Item">
    <!-- main-scroller__wrapp -->
    <div class="main-scroller__wrapp">
      <!-- v-about -->
      <v-about v-if="getNameNavLink === 'about' || getMobile" />
      <!-- v-portfolio -->
      <v-portfolio v-if="getNameNavLink === 'portfolio' || getMobile" />
      <!-- v-skills -->
      <v-skills v-if="getNameNavLink === 'skills' || getMobile" />
      <!-- v-contacts -->
      <v-contacts v-if="getNameNavLink === 'contacts' || getMobile" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import vAbout from "@/components/Scroller/Scroller-item/v-about.vue";
import vPortfolio from "@/components/Scroller/Scroller-item/v-portfolio.vue";
import vSkills from "@/components/Scroller/Scroller-item/v-skills.vue";
import vContacts from "@/components/Scroller/Scroller-item/v-contacts.vue";

export default {
  name: "v-scroller-Item",
  components: { vAbout, vPortfolio, vContacts, vSkills },
  computed: {
    ...mapGetters(["getNameNavLink", "getMobile"])
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins.scss";
.main-scroller {
  position: relative;
  @include xlg {
    padding-top: 3rem;
  }
  &__wrapp {
    overflow: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 200px 0 5.5rem;
    @include xlg {
      height: initial;
      overflow: initial;
      padding: 8rem 2.5rem;
    }
    @include lg {
      padding: 4rem 1rem;
    }
  }

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding: 0;
    overflow: hidden;
    @include xlg {
      overflow: initial;
      height: inherit;
    }
  }
}
</style>
