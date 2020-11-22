<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <textarea
        class="textarea"
        v-model="inputTextArea"
        :placeholder="placeholder"
        :id="id"
      ></textarea>
    </div>
  </div>
</template>

<style scoped>
textarea:focus {
  border-color: #616161 !important;
  box-shadow: 0 0 5px #616161;
  outline: none !important;
}
</style>

    <script>
export default {
  props: {
    text: String,
    label: String,
    placeholder: String,
    id: String,
  },

  computed: {
    inputTextArea: {
      get() {
        return this.text;
      },
      set(val) {
        this.$emit("receivingTextArea", val);
      },
    },
  },
};
</script>