<template>
  <div class="v-cursor-custom"></div>
</template>

<script>
import { TimelineMax } from "gsap";

export default {
  name: "v-cursor-custom",
  mounted() {
    this.cursor();
  },
  methods: {
    cursor() {
      const cursor = document.querySelector(".v-cursor-custom");
      const cursorBtns = document.querySelector(".v-cursor-btn");
      const cursorStyle = getComputedStyle(cursor);

      document.addEventListener("mousemove", e => {
        cursor.setAttribute(
          "style",
          "top: " + (e.pageY - 12.5) + "px; left: " + (e.pageX - 12.5) + "px;"
        );
      });

      document.addEventListener("click", e => {
        let tlDiv = new TimelineMax();
        const div = document.createElement("div");

        cursor.classList.remove("cursor-trans");
        div.setAttribute(
          "style",
          "top: " + (e.pageY - 12.5) + "px; left: " + (e.pageX - 12.5) + "px;"
        );
        div.style.width = cursorStyle.width;
        div.style.height = cursorStyle.height;
        div.style.backgroundColor = cursorStyle.backgroundColor;
        div.style.borderRadius = cursorStyle.borderRadius;
        div.style.opacity = cursorStyle.opacity;
        div.style.zIndex = cursorStyle.zIndex;
        div.style.mixBlendMode = cursorStyle.mixBlendMode;
        div.style.position = "fixed";
        div.classList.add("border-50"); // fix firefox
        tlDiv.fromTo(
          div,
          0.5,
          {
            autoAlpha: cursorStyle.opacity,
            scale: 1,
            overwrite: 5
          },
          {
            autoAlpha: 0,
            scale: 3
          }
        );

        document.body.append(div);
        setTimeout(() => {
          div.remove();
          div.classList.remove("border-50"); // fix firefox
        }, 1000);
      });

      document.addEventListener("mouseover", e => {
        const target = e.target;
        if (target && target.classList.contains("v-cursor-btn")) {
          cursor.classList.add("cursor-hover");
          return;
        }
        cursor.classList.remove("cursor-hover");
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins/mixins";
.v-cursor-custom {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  background-color: var(--color-cursor);
  pointer-events: none;
  opacity: 0.5;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.3s ease-in-out;

  @include xlg {
    display: none;
  }
}

.cursor-hover {
  transform: scale(1.5);
}

body:not(.admin-page) {
  cursor: none;

  @media screen and (max-width: 1024px) {
    cursor: auto;
  }
}

.border-50 {
  border-radius: 50% !important;
}
</style>