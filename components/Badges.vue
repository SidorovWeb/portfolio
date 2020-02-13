<template>
  <code :class="newClass"> &lt;{{ tag }}&gt; </code>
</template>

<script>
export default {
  props: {
    newClass: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: ""
    }
  }
}
</script>

<style></style>
