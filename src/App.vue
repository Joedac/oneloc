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
      <span class="back-to-top tag is-success">
        <i class="fa fa-chevron-up"></i>
      </span>
    </back-to-top>
    <footer class="footer">
      <div class="content has-text-centered">
        <p><i class="fab fa-vuejs fa-2x"></i>&nbsp;Built by Joe Dac with Vue.js, Vuex, Bulma, and Airtable.</p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
