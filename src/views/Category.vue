<template>
<div>
  <div style="margin-top: 50px" class="column is-one-quarter">
    <router-link :to="'/'" class="button is-primary is-fullwidth">Retour à la liste</router-link>
      </div>
  <div v-if="functions.length > 0">
    <div class="column" v-bind:key="i" v-for="(func, i) in functions">
      <p>{{func.name}}</p>
      <vue-simple-markdown :source="func.function"></vue-simple-markdown>Catégorie :
      <span class="tag is-primary">{{func.category}}</span>
       <hr />
    </div>
  </div>
</div>
</template>

<script>
import FunctionsService from "@/services/FunctionsService";

export default {
  data() {
    return {
      airtableResp: []
    };
  },
  mounted: function() {
    let self = this;
    /**
     * get images from airtable
     */
    async function getFunctionByCategory() {
      try {
        const response = await FunctionsService.getFunctionByCategory(
          self.$route.params.slug
        );
        self.airtableResp = response.data.records;
      } catch (err) {
        self.err = true;
      }
    }
    getFunctionByCategory();
  },
  computed: {
    /**
     * Let's build an array of images !
     */
    functions() {
      let self = this;
      const functionsList = self.airtableResp.map(item => {
        let functions = {};
        functions.name = item.fields.Name;
        functions.category = item.fields["Category (from Table 4)"][0];
        functions.function = item.fields.function;
        return functions;
      });
      return functionsList;
    }
  }
};
</script>