<template>
  <div>
    <div style="margin-top: 50px" class="container is-fluid">
      <div class="column is-one-quarter">
        <router-link :to="'/'" class="button is-primary is-fullwidth">Retour à la liste</router-link>
      </div>

      <Search @receivingSelfSearch='autoSearch' v-bind:Search="search"/>
      
      <h2 class="title is-2 has-text-weight-medium has-text-centered">Catégorie : {{checkCat}}</h2>
      <div class="column" v-bind:key="i" v-for="(func, i) in functionsList">
        <div v-if="checkCat === func.category">
          <p>{{func.name}}</p>
          <vue-simple-markdown :source="func.function"></vue-simple-markdown>Catégorie :
          <span class="tag is-primary">{{func.category}}</span>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-top: 20px;
}
</style>

<script>
import { mapGetters } from "vuex";
import Search from '../components/Search'

export default {

    components: {
    Search
  },
  data() {
    return {
      /**
       * Initialize search keyword for filter functions
       */
      search: "",
      checkCat: this.$route.params.slug
    };
  },
  mounted: function() {
    /**
     * Let's get state of functions by category !
     */
    this.$store.dispatch("getFunctionByCategoryStore", this.$route.params.slug);
  },

  methods: {
    ...mapGetters(["FUNCTIONS_BY_CATEGORY"]),
     autoSearch(text){
       this.search=text
    },
  },
  computed: {
    /**
     * Get functions by category from our store
     * Add the filter function
     */
    functionsList() {
      return this.FUNCTIONS_BY_CATEGORY().filter(func => {
        return func.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
    /**
     * Get category of functions
     */
    /*    category() {
        let category = this.$store ? this.FUNCTIONS_BY_CATEGORY()[0].category : null
         return category
    }, */
  }
};
</script>