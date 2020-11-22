<template>
  <div class="" v-if="functionsList.length > 0">
    <div class="column" v-bind:key="i" v-for="(func, i) in functionsList">
      <p>
        {{ func.name }} <br />
        <i class="fas fa-user-edit"></i>
        &nbsp;<span class="tag is-rounded tag-author">{{ func.author }}</span>
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
       <CopyButton :id="'button_'+i" @copyPush="copy(i)" />
        Catégorie :
        <router-link class="show" :to="'/category/' + func.category">
          <span class="tag tag-category is-rounded">{{ func.category }}</span>
        </router-link>
      </b-collapse>
      <hr />
    </div>
  </div>
</template>

<style scoped>
.show {
  color: #8e8e8e;
}
.tag-author {
  background-color: #8e8e8e !important;
  color: white;
}
.tag-category {
  background-color: #616161 !important;
  color: white;
}
.tag-copy {
  background-color: #cfd8dc !important;
  color: white;
}
</style>

<script>
import CopyButton from "@/components/CopyButton";

export default {
   components:{
    CopyButton
  },
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
      document.getElementById('button_'+i).innerText = 'copied !';
    },
  },
};
</script>