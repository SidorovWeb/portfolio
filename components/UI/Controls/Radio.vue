<template>
  <div class="control">
    <input
      :id="id"
      :type="type"
      class="control__input"
      :class="newClass"
      :name="name"
      :value="value"
      v-bind="$attrs"
      :checked="checked"
      @input="updateValue"
      v-on="listeners"
    />
    <label :class="labelClass" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      default: null
    },
    value: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    newClass: {
      type: String,
      default: ""
    },
    labelClass: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "radio"
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value)
    }
  }
}
</script>

<style></style>
