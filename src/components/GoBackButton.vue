<template>
  <div class="column">
    <router-link :to="'/'"
    ><i class="fas fa-arrow-circle-left fa-2x"></i></router-link
    >
  </div>
</template>

<script>
export default {
name: "GoBackButton"
}
</script>

<style scoped>
.fa-arrow-circle-left {
  color: #616161 !important;
}
</style>
