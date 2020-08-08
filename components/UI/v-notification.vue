<template>
  <div class="v-notification">
    <transition-group name="v-transition-animate" class="messages-list">
      <div
        class="v-notification__content"
        v-for="message in messages"
        :key="message.id"
        :class="message.icon"
      >
        <div class="content__text">
          <span>{{message.name}}</span>
        </div>
        <div class="content-btns">
          <button v-if="rightButton.length">{{rightButton}}</button>
          <button v-if="leftButton.length">{{leftButton}}</button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "v-notification",
  props: {
    messages: {
      type: Array,
      default: () => {
        return {};
      }
    },
    rightButton: {
      type: String,
      default: ""
    },
    leftButton: {
      type: String,
      default: ""
    },
    timeOut: {
      type: Number,
      default: 3000
    }
  },

  methods: {
    ...mapActions(["setMessagesArraySplice"]),

    hideNotification() {
      if (this.messages.length) {
        setTimeout(() => {
          this.setMessagesArraySplice();
        }, this.timeOut);
      }
    }
  },
  watch: {
    messages() {
      if (this.messages.length) {
        this.hideNotification();
      }
    }
  },
  mounted() {
    this.hideNotification();
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars";
@import "@/assets/scss/mixins/mixins";
.v-notification {
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 10;
  &__messages-list {
    display: flex;
    flex-direction: column-reverse;
  }
  &__content {
    padding: 16px 24px;
    border-radius: 4px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 16px;
    background: green;
    &.warning {
      background: orange;
    }
    &.error {
      background-color: #ff5252;
      color: white;
    }
    &.check_circle {
      background-color: #4caf50;
      color: white;
    }
  }
  .content {
    &__text {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .material-icons {
    margin-left: 16px;
  }
}
.v-transition-animate {
  &-enter {
    transform: translateX(120px);
    opacity: 0;
  }
  &-enter-active {
    transition: all 0.6s ease;
  }
  &-enter-to {
    opacity: 1;
  }
  &-leave {
    height: 50px;
    opacity: 1;
  }
  &-leave-active {
    transition: transform 0.6s ease, opacity 0.6s, height 0.6s 0.2s;
  }
  &-leave-to {
    height: 0;
    transform: translateX(120px);
    opacity: 0;
  }
  &-move {
    transition: transform 0.6s ease;
  }
}
</style>
