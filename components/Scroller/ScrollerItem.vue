<template>
  <section class="section main-scroller__item">
    <!-- main-scroller__wrapp -->
    <div class="main-scroller__wrapp">
      <!-- About -->
      <about v-if="getNameNavLink === 'about' || getMobile" />
      <!-- portfolio -->
      <portfolio v-if="getNameNavLink === 'portfolio' || getMobile" />
      <!-- Skills -->
      <skills v-if="getNameNavLink === 'skills' || getMobile" />
      <!-- Contacts -->
      <contacts v-if="getNameNavLink === 'contacts' || getMobile" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import about from "@/components/Scroller/About.vue";
import portfolio from "@/components/Scroller/Portfolio.vue";
import skills from "@/components/Scroller/Skills.vue";
import contacts from "@/components/Scroller/Contacts.vue";

export default {
  components: { about, portfolio, contacts, skills },
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
