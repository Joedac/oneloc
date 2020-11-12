<template>
  <div>
    <div style="margin-top: 50px" class="container is-fluid">
      <div class="column is-one-quarter">
        <router-link :to="'/'" class="button is-success is-outlined is-rounded is-fullwidth"
          >Retour à la liste</router-link
        >
      </div>
      <h2 class="title is-2 has-text-weight-medium has-text-centered">
        Catégorie : {{ checkCat }}
      </h2>
      <div class="center">
        <Search @receivingSelfSearch="autoSearch" v-bind:Search="search" />
      </div>
      <FunctionslistByCategory
        :media="media"
        :functionsList="functionsList"
        :checkCat="checkCat"
      />
    </div>
    <div class="spacer"></div>
    <Footer />
  </div>
</template>

<style scoped>
.title {
  margin-top: 20px;
}
.show {
  color: #00d1b2;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.spacer {
  min-height: 60px;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import Search from "../components/Search";
import Footer from "@/components/Footer";
import FunctionslistByCategory from "../components/FunctionsListByCategory";

export default {
  components: {
    Footer,
    Search,
    FunctionslistByCategory,
  },
  data() {
    return {
      /**
       * Initialize search keyword for filter functions
       */
      media: 3,
      search: "",
      checkCat: this.$route.params.slug,
    };
  },
  mounted: function () {
    /**
     * Let's get state of functions by category !
     */
    this.getFunctionByCategoryStore(this.$route.params.slug);
  },

  methods: {
    ...mapGetters(["FUNCTIONS_BY_CATEGORY"]),
    ...mapActions(["getFunctionByCategoryStore"]),
    autoSearch(text) {
      this.search = text;
    },
  },
  computed: {
    /**
     * Get functions by category from our store
     * Add the filter function
     */
    functionsList() {
      return this.FUNCTIONS_BY_CATEGORY().filter((func) => {
        return func.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
