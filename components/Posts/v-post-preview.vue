<template>
  <div class="post-col v-post-preview" :class="{ list: !grid }">
    <div class="post-preview">
      <a :href="post.web" class="post-preview__img-container" target="_blank">
        <picture>
          <source :srcset="post.webp" type="image/webp" />
          <img class="post-preview__img v-cursor-btn" :src="post.img" :alt="post.title" />
        </picture>
      </a>
      <div class="post-preview__wrapper">
        <div class="post-preview__header">
          <a
            :href="post.web"
            class="post-preview__title v-cursor-btn"
            target="_blank"
          >{{ post.title }}</a>
        </div>
        <div class="post-preview__body">
          <div class="post-preview__tags">
            <div v-for="(tag, i) in post.tags" :key="i" class="post-preview__tag">{{ tag }}</div>
          </div>
        </div>
        <div class="post-preview__footer">
          <div class="post-preview__links">
            <!-- SVGgithub -->
            <a
              v-if="post.git"
              class="post-preview__link v-cursor-btn"
              :href="post.git"
              target="_blank"
            >
              <SVGgithub class="post-preview__svg" />
              <span>GitHub</span>
            </a>
            <!-- SVGweb -->
            <a
              v-if="post.web"
              class="post-preview__link v-cursor-btn"
              :href="post.web"
              target="_blank"
            >
              <SVGweb class="post-preview__svg" />
              <span>Web</span>
            </a>
            <!-- сертификат -->
            <a
              v-if="post.certificate"
              class="post-preview__link"
              :href="post.certificate"
              target="_blank"
            >
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
import SVGgithub from "@/static/img/svg/github-logo.svg";
import SVGweb from "@/static/img/svg/web.svg";
export default {
  name: "v-post-preview",
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
    getLink() {
      return this.admin ? `/admin/${this.post.id}` : `/works/${this.post.id}`;
    }
  },
  methods: {
    handleResize() {
      const pst = document.querySelectorAll(".post-col");
      if (window.innerWidth <= 768) {
        pst.forEach(p => {
          p.classList.remove("list");
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins";
.post-col {
  max-width: calc(100% / 3);
  padding: 0 1rem;
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  @include mxl {
    max-width: calc(100% / 2);
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  @include lg {
    margin-bottom: 1rem;
  }

  @include md {
    max-width: 100%;
  }

  &.list {
    max-width: 100%;
    max-height: 350px;

    & .post-preview__img {
      height: 100%;
    }
    & .post-preview {
      flex-direction: row;
      box-shadow: 0 3px 5px 2px var(--color-pseudo-element);

      &:hover {
        box-shadow: 0 10px 10px var(--color-pseudo-element);
        transform: translateY(-4px) !important;
      }
    }
    & .post-preview__img-container {
      margin-bottom: 0;
      width: 50%;
    }

    & .post-preview__header {
      padding-top: 1rem;
    }
    & .post-preview__footer {
      padding-bottom: 1rem;
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
  background-color: var(--bg-color);

  &:hover {
    box-shadow: 0 10px 10px var(--color-pseudo-element);
    transform: translateY(-4px) !important;

    .post-preview__img {
      transform: scale(1.03);
    }
  }
  & > * {
    padding: 0 1rem;
    &:first-child {
      padding: 0;
    }
  }

  &__img-container {
    margin-bottom: 1rem;
    overflow: hidden;
    flex-shrink: 0;
    background-color: var(--color-pseudo-element);
  }

  &__img {
    height: 170px;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.7s ease-in;

    @media screen and (min-width: 2400px) {
      height: 250px;
    }

    @include mxl {
      height: 150px;
    }
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
    display: inline-block;

    @include md {
      margin-bottom: 1rem;
    }
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
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    z-index: 1;
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

    svg,
    span {
      position: relative;
      z-index: -1;
    }

    span {
      color: var(--white);
    }
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

.opacity {
  animation-name: opacityCol;
  animation-duration: 1s;
}

@keyframes opacityCol {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
