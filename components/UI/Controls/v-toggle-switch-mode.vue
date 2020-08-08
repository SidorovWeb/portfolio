<template>
  <div class="theme-switch-wrapper v-toggle-switch-mode">
    <input id="checkbox" class="tgl tgl-light" type="checkbox" checked @change="switchTheme" />
    <label class="v-cursor-btn tgl-btn" for="checkbox"></label>
  </div>
</template>

<script>
export default {
  name: "v-toggle-switch-mode",
  mounted() {
    this.toggleSwitch();
  },
  methods: {
    toggleSwitch() {
      const toggleSwitch = document.querySelector('.tgl[type="checkbox"]');
      const currentTheme = localStorage.getItem("theme");

      if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {
          toggleSwitch.checked = true;
        }
        if (currentTheme === "light") {
          toggleSwitch.checked = false;
        }
      }
    },
    switchTheme(e) {
      document.documentElement.classList.add("theme-transition");

      setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
      }, 500);

      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      }
    }
  }
};
</script>

<style lang="scss">
.theme-switch-wrapper {
  display: flex;
  align-items: center;
}
.theme-switch {
  position: relative;
  display: inline-block;
  height: 21px;
  width: 40px;
}

.tgl {
  display: none;
  visibility: hidden;
  opacity: 0;
  width: 0;
  height: 0;

  + .tgl-btn {
    margin-bottom: 0;
    outline: 0;
    display: block;
    width: 40px;
    height: 21px;
    position: relative;
    cursor: pointer;
    user-select: none;
    &:after,
    &:before {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }

    &:after {
      left: 0;
    }

    &:before {
      display: none;
    }
  }

  &:checked + .tgl-btn:after {
    left: 50%;
  }
}
// them
.tgl-light {
  + .tgl-btn {
    background: #636363;
    border-radius: 2em;
    padding: 2px;
    transition: all 0.4s ease;
    &:after {
      border-radius: 50%;
      background: #fff;
      transition: all 0.2s ease;
    }
  }

  &:checked + .tgl-btn {
    background: #a6a6a6;
  }
}
</style>
