<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <back-to-top bottom="30px" right="30px">
      <span class="back-to-top is-rounded tag is-success">
        <i class="fa fa-chevron-up"></i>
      </span>
    </back-to-top>
  </div>
</template>

<style scoped>
.back-to-top {
  width: 40px;
  height: 40px;
}
* { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
</style>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
