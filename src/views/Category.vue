<template>
  <div>
    <div style="margin-top: 50px" class="container is-fluid">
      <div class="column is-one-quarter">
        <router-link :to="'/'" class="button is-success is-fullwidth">Retour à la liste</router-link>
      </div>

      <Search @receivingSelfSearch="autoSearch" v-bind:Search="search" />

      <h2 class="title is-2 has-text-weight-medium has-text-centered">Catégorie : {{checkCat}}</h2>
      <div class="column" v-bind:key="i" v-for="(func, i) in functionsList">
        <div v-if="checkCat === func.category">
          <p>{{func.name}}</p>
          <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
            <a class="show" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
              <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
              {{ !props.open ? 'Show me the code !' : 'Hide' }}
            </a>
            <vue-simple-markdown :source="func.function"></vue-simple-markdown>Catégorie :
            <span class="tag is-success">{{func.category}}</span>
          </b-collapse>
          <hr />
        </div>
        <div v-else>
          <section>
            <article class="media" v-for="i in media" :key="i">
              <figure class="media-left">
                <p class="image is-64x64">
                  <b-skeleton circle width="64px" height="64px"></b-skeleton>
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <b-skeleton active></b-skeleton>
                    <b-skeleton height="80px"></b-skeleton>
                  </p>
                </div>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small">
                        <b-skeleton></b-skeleton>
                      </span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small">
                        <b-skeleton></b-skeleton>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-top: 20px;
}
.show {
  color: #00d1b2;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import Search from "../components/Search";

export default {
  components: {
    Search
  },
  data() {
    return {
      /**
       * Initialize search keyword for filter functions
       */
      media: 3,
      search: "",
      checkCat: this.$route.params.slug
    };
  },
  mounted: function() {
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
    }
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
  }
};
</script>