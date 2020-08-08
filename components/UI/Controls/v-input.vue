<template>
  <div class="control v-input">
    <input
      :id="id"
      :type="type"
      class="control__input"
      :class="newClass"
      :value="value"
      v-bind="$attrs"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
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
  name: "v-input",
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
    placeholder: {
      type: String,
      default: ""
    },
    labelClass: {
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
