import Vue from 'vue'
import App from './App.vue'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import BackToTop from 'vue-backtotop'
import router from './router'

Vue.use(VueSimpleMarkdown)
Vue.config.productionTip = false
Vue.use(BackToTop)

new Vue({
  el: '#app',
  router,
 render: h => h(App),
}).$mount('#app')