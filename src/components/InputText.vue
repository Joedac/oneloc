<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        v-model="inputText"
        class="input"
        type="text"
        :placeholder="placeholder"
        :id="id"
      />
    </div>
  </div>
</template>

<style scoped>
input:focus {
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
    inputText: {
      get() {
        return this.text;
      },
      set(val) {
        this.$emit("receivingText", val);
      },
    },
  },
};
</script>