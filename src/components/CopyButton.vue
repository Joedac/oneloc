<template>
  <span
      class="tag is-outlined is-rounded tag-copy"
      @click="pushButton"
  >
    {{ copyText === false ? 'copy' : 'copied !' }}
  </span>
</template>

<script>
export default {
  name: "CopyButton",
  props: {
    copyText: Boolean
  },
  methods: {
    pushButton() {
      this.$emit("copyPush");
    },
  },
}
</script>

<style scoped>
.tag {
  cursor: pointer;
}
.tag-copy {
  background-color: #cfd8dc !important;
  color: white;
}
</style>
