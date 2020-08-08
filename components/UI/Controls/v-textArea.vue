<template>
  <div class="control v-textArea">
    <label>
      <slot></slot>
    </label>
    <textarea
      class="control__textarea"
      :class="newClass"
      v-bind="$attrs"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      @input="updateValue"
      v-on="listeners"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "v-textArea",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    newClass: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: ""
    },
    autocomplete: {
      type: String,
      default: "off"
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style></style>
