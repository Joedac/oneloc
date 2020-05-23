<template>
  <div class="container is-fluid" style="margin-top: 50px" v-if="total > 0">
    <h2
      class="title is-3 has-text-weight-medium has-text-centered"
    >{{total}} fonctions Javascript en une ligne de code</h2>
    <div class="container is-fluid">
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <div class="field">
            <div class="control">
              <p class="control has-icons-left">
                <input
                  class="input is-rounded is-primary"
                  type="text"
                  v-model="search"
                  placeholder="Recherche"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container is-fluid category">
      <div class="columns is-centered">
        <div class="column is-6">
          Par catégorie :
          <router-link
            class="category"
            :to="'/category/'+cat.name"
            v-bind:key="index + 10"
            v-for="(cat, index) in categories"
          >
            <span class="tag is-primary">{{cat.name}}</span>
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="functions.length > 0">
      <div class="column" v-bind:key="i" v-for="(func, i) in functions">
        <p>{{func.name}} :</p>
        <vue-simple-markdown :source="func.function"></vue-simple-markdown>Catégorie :
        <router-link :to="'/category/'+func.category">
          <span class="tag is-primary">{{func.category}}</span>
        </router-link>
        <hr />
      </div>
    </div>
  </div>
</template>

<style scoped>
.category {
  margin-right: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

<script>
/**
 * Let's load images !
 */
import FunctionsService from "@/services/FunctionsService";
export default {
  data() {
    return {
      search: "",
      airtableResponse: [],
      airtableResp: []
    };
  },
  mounted: function() {
    let self = this;
    /**
     * get functions from airtable
     */
    async function getFunctions() {
      try {
        const response = await FunctionsService.getFunctions();
        self.airtableResponse = response.data.records;
      } catch (err) {
        console.log(err);
      }
    }
    getFunctions();

    async function getCategories() {
      try {
        const response = await FunctionsService.getCategories();
        self.airtableResp = response.data.records;
      } catch (err) {
        console.log(err);
      }
    }
    getCategories();
  },
  computed: {
    /**
     * Let's build an array of functions !
     */
    total() {
      let self = this;
      const total = self.airtableResponse.length;
      return total;
    },
    functions() {
      let self = this;
      const functionsList = self.airtableResponse.map(item => {
        let functions = {};
        functions.name = item.fields.Name;
        functions.category = item.fields["Category (from Table 4)"][0];
        functions.function = item.fields.function;
        return functions;
      });
      return functionsList.filter(func => {
        return func.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    categories() {
      let self = this;
      const categoriesList = self.airtableResp.map(item => {
        let categories = {};
        categories.name = item.fields.Category;
        return categories;
      });
      return categoriesList;
    }
  }
};
</script>