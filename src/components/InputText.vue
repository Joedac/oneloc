<template>
      <div class="field">
            <label class="label">{{ label }}</label>
            <div class="control">
              <input
                v-model="inputText"
                class="input is-success"
                type="text"
                :placeholder="placeholder"
                :id="id"
              />
            </div>
          </div>
</template>

    <script>
export default {
  props: {
    text: String,
    label: String,
    placeholder: String,
    id:String
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