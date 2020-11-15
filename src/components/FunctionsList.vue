<template>
  <div class="" v-if="functionsList.length > 0">
    <div class="column" v-bind:key="i" v-for="(func, i) in functionsList">
      <p>{{ func.name }} <i class="fas fa-user-edit"></i> <span class="tag is-rounded is-warning">{{ func.author }}</span></p>
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
          :id="i"
          :source="func.function"
        ></vue-simple-markdown
        >Catégorie :
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
};
</script>