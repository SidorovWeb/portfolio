<template>
  <div class="post-col" :class="{list: !grid}">
    <div class="post-preview">
      <div class="post-preview__img-container">
        <picture>
          <source :srcset="post.webp" type="image/webp" />
          <img class="post-preview__img" :src="post.img" :alt="post.title" />
        </picture>
      </div>
      <div class="post-preview__wrapper">
        <div class="post-preview__header">
          <h3 class="post-preview__title">
            {{ post.title }}
          </h3>
        </div>
        <div class="post-preview__body">
          <div class="post-preview__tags">
            <div v-for="(tag, i) in post.tags" :key="i" class="post-preview__tag">
              {{ tag }}
            </div>
          </div>
        </div>
        <div class="post-preview__footer">
          <div class="post-preview__links">
            <!-- SVGgithub -->
            <a v-if="post.git" class="post-preview__link" :href="post.git" target="_blank">
              <SVGgithub class="post-preview__svg" />
              <span>GitHub</span>
            </a>
            <!-- SVGweb -->
            <a v-if="post.web" class="post-preview__link" :href="post.web" target="_blank">
              <SVGweb class="post-preview__svg" />
              <span>Web</span>
            </a>
            <!-- сертификат -->
            <a v-if="post.certificate" class="post-preview__link" :href="post.certificate" target="_blank">
              <span>{{ this.$t("certificate") }}</span>
            </a>
            <!-- post.edit -->
            <nuxt-link class="post-preview__link post-preview--id" :to="getLink">
              <SVGweb class="post-preview__svg" />
              <span>Редактировать</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SVGgithub from "@/static/img/svg/github-logo.svg"
import SVGweb from "@/static/img/svg/web.svg"
export default {
  components: { SVGgithub, SVGweb },
  props: {
    post: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    },
    grid: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getLink () {
      return this.admin ? `/admin/${this.post.id}` : `/works/${this.post.id}`
    }
  },
  methods: {
    handleResize () {
      const pst = document.querySelectorAll(".post-col")
      if (window.innerWidth <= 768) {
        pst.forEach(p => {
          p.classList.remove('list')
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins";
.post-col {
  max-width: calc(100% / 3);
  padding: 0 1rem;
  display: flex;
  width: 100%;
  margin-bottom: 3rem;
  @include xlg {
    max-width: calc(100% / 2);
  }
  @include md {
    max-width: 100%;
    margin-bottom: 2rem;
  }
  &.list {
    max-width: 100%;
    max-height: 350px;
    & .post-preview {
      flex-direction: row;
    }
    & .post-preview__img-container {
      margin-bottom: 0;
      width: 100%;
    }
    & .post-preview__wrapper {
      padding: 1rem 10rem 1rem 2rem;
      width: 100%;

      @include xlg {
        padding: 1rem 2rem;
      }
    }
  }
}
.post-preview {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  text-align: left;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 5px var(--color-pseudo-element);
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 10px 10px #f66;
    transform: translateY(-4px) !important;
  }
  & > * {
    padding: 0 1rem;
    &:first-child {
      padding: 0;
    }
  }

  &__img-container {
    margin-bottom: 1rem;
    max-width: 750px;
  }
  &__img {
    max-height: 350px;
    min-height: 270px;
    width: 100%;
    object-fit: cover;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  &__body {
    margin-bottom: 1rem;
    flex: 1 0 auto;
  }

  &__title {
    text-align: center;
    color: var(--white);
    margin-bottom: 2rem;
    text-align: left;
  }
  &__tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    & > * {
      margin-right: 0.5rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__tag {
    font-size: 0.9rem;
    padding: 0.2em 0.8em;
    color: white;
    background-color: var(--main-red);
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }
  &__links {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    & > * {
      margin-right: 2rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__link {
    display: flex;
    align-items: center;
    color: var(--white);
  }
  &__svg {
    height: 18px;
    width: 18px;
    margin-right: 8px;
    fill: var(--white);
  }
}
.post-preview--id {
  display: none;
}
.admin .post-preview--id {
  display: block;
}
</style>
