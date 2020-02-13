<template>
  <section class="section main-scroller__item">
    <!-- Badges -->
    <Badges new-class="tag tag-body--top" tag="body" />
    <!-- main-scroller__wrapp -->
    <div class="main-scroller__wrapp">
      <!-- About -->
      <about v-if="item.about" />
      <!-- portfolio -->
      <portfolio v-if="item.Portfolio" />
      <!-- Skills -->
      <skills v-if="item.skills" />
      <!-- Contacts -->
      <contacts v-if="item.contacts" />
    </div>
    <!-- Badges -->
    <Badges new-class="tag tag-body--bottom" tag="/body" />
  </section>
</template>

<script>
import about from "@/components/Scroller/About.vue"
import portfolio from "@/components/Scroller/Portfolio.vue"
import skills from "@/components/Scroller/Skills.vue"
import contacts from "@/components/Scroller/Contacts.vue"

export default {
  components: { about, portfolio, contacts, skills },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
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
    @include md {
      padding: 3rem 2.5rem;
    }
    @include sm {
      padding: 3rem 1.2rem;
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
