<template>
  <div class="" v-if="functionsList.length > 0">
    <div class="column" v-bind:key="i" v-for="(func, i) in functionsList">
      <p>
        {{ func.name }} <br />
        <i class="fas fa-user-edit"></i>
        <span class="tag is-rounded is-warning">{{ func.author }}</span>
      </p>
      <b-collapse
        :open="false"
        position="is-bottom"
        aria-id="contentIdForA11y1"
      >
        <a
          class="show"
          slot="trigger"
          slot-scope="props"
          aria-controls="contentIdForA11y1"
        >
          <i
            :class="!props.open ? 'fas fa-chevron-down' : 'fas fa-chevron-up'"
          ></i>
          {{ !props.open ? "Show me the code !" : "Hide" }}
        </a>
        <vue-simple-markdown
          :value="func.function"
          :id="i"
          :source="func.function"
        ></vue-simple-markdown>
        <button
          class="button is-small is-outlined is-rounded is-info"
          @click.prevent="copy(i)"
        >
        {{ copyText === false ? 'copy' : 'copied !'}}
        </button>
        Catégorie :
        <router-link class="show" :to="'/category/' + func.category">
          <span class="tag is-rounded is-success">{{ func.category }}</span>
        </router-link>
      </b-collapse>
      <hr />
    </div>
  </div>
</template>

<style scoped>
.show {
  color: #00d1b2;
}
</style>

<script>
export default {
  props: {
    functionsList: Array,
    checkCat: String,
  },

  data() {
    return {
     copyText: false
    };
  },

  methods: {
    copy(i) {
      let copiedText = document.getElementById(i).innerText;
      navigator.permissions
        .query({ name: "clipboard-write" })
        .then((result) => {
          if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(copiedText).then(
              function () {
                /* clipboard successfully set */
              },
              function () {
                /* clipboard write failed */
              }
            );
          }
        });
        this.copyText = true
    },
  },
};
</script>