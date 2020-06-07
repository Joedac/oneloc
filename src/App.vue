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
  name: "App",
  data() {
    return {
      showNav: false
    };
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Oneloc";
    },
    immediate: true
  }
};
</script>

<style type="text/css">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

body {
  font-family: "Ubuntu", sans-serif !important;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 168px; /* height of your footer */
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.back-to-top {
  width: 50px;
  height: 50px !important;
  border-radius: 50% !important;
}
.fab {
  color: #41B883;
}
.hljs-keyword {
  color: #00d1b2;
}
pre {
  background: #282a36 !important;
}
.hljs {
  color: white;
}
.hljs-comment {
  color: #b6bde2 !important;
}
.hljs-function {
  color: rgb(212, 235, 13) !important;
}
</style>

<style lang="sass">
@import "~bulma/bulma.sass"
</style>