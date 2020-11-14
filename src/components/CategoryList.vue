<template>
  <div class="container is-fluid category">
    <div class="column is-6">
      Par catégorie :
      <br />
      <router-link
        class="category"
        :to="'/category/' + cat.name"
        v-bind:key="index + 10"
        v-for="(cat, index) in categoriesList"
      >
        <span class="tag is-rounded is-success">{{ cat.name }}</span>
      </router-link>
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
export default {
  props: {
    categoriesList: Array,
    cat: String
  },
};
</script>