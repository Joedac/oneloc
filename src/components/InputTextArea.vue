<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <textarea
        class="textarea is-success"
        v-model="inputTextArea"
        :placeholder="placeholder"
        :id="id"
      ></textarea>
    </div>
  </div>
</template>

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