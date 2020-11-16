<template>
  <button
      class="button is-small is-outlined is-rounded is-info"
      @click="pushButton"
  >
    {{ copyText === false ? 'copy' : 'copied !'}}
  </button>
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

</style>
