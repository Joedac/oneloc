<template>
  <div class="container is-fluid" style="margin-top: 50px" v-if="total > 0">
    <h2
      class="title has-text-success is-3 has-text-weight-medium has-text-centered"
    >
      {{ welcome }}
      <i class="fas fa-code"></i>
    </h2>
    <h3 class="has-text-centered has-text-success">{{ subtitle }}</h3>
    <br />
    <p class="has-text-centered">
      Oneloc c'est toutes ces fonctions que l'on utilise régulièrement et qu'on
      ne retient jamais. Plus la peine de chercher, Oneloc est là et en une
      seule ligne de code ! 🚀
    </p>
    <br />
    <p class="contribute has-text-centered">
      <router-link :to="'/formulaire'"
        >Tu veux contribuer ? Envoie nous ta fonction et nous la publierons
        ! 📮</router-link
      >
    </p>
    <h2 class="title is-5 has-text-weight-medium has-text-centered">
      {{ total }} fonctions Javascript actuellement
    </h2>

    <div class="center">
      <Search @receivingSelfSearch="autoSearch" v-bind:Search="search" />
    </div>
    <CategoryList :categoriesList="categoriesList" />
    <FunctionsList :functionsList="functionsList" />
    <div class="spacer"></div>
    <Footer />
  </div>
  <div v-else>
    <div class="pageloader is-active">
      <span class="title">1-loc is loading, please wait...</span>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #00d1b2;
}

.title {
  margin-bottom: 5px !important;
}

.contribute {
  margin-bottom: 10px !important;
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
import Footer from "../components/Footer";
import FunctionsList from "../components/FunctionsList";
import CategoryList from "../components/CategoryList";

export default {
  components: {
    Search,
    Footer,
    FunctionsList,
    CategoryList,
  },

  data() {
    return {
      welcome: "Bienvenue sur 1-loc",
      subtitle: "(one line of code)",
      search: "",
    };
  },

  mounted() {
    let self = this;

    self.getFunctionsStore();
    self.getCategoriesStore();
  },

  methods: {
    ...mapGetters(["FUNCTIONS", "CATEGORIES"]),
    ...mapActions(["getFunctionsStore", "getCategoriesStore"]),
    autoSearch(text) {
      this.search = text;
    },
  },
  computed: {
    /**
     * Get functions from our store
     * Add the filter function
     */
    functionsList() {
      return this.FUNCTIONS().filter((func) => {
        return func.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    categoriesList() {
      return this.CATEGORIES();
    },
    /**
     * Calculate total of functions
     */
    total() {
      const total = this.FUNCTIONS().length;
      return total;
    },
  },
};
</script>
