<template>
  <div class="column category">
    Par catégorie :
    <br/>
    <router-link
        v-for="(cat, index) in categoriesList"
        v-bind:key="index + 10"
        :to="'/category/' + cat.name"
        class="category"
    >
      <span class="tag tag-category is-rounded">{{ cat.name }}</span>
    </router-link>
  </div>
</template>

<style scoped>
.category {
  margin-right: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.tag-category {
  background-color: #616161 !important;
  color: white;
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
