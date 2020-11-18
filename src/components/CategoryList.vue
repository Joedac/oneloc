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
      <span class="tag is-rounded is-success">{{ cat.name }}</span>
    </router-link>
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
