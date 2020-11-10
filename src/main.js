import Vue from 'vue'
import App from './App.vue'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import BackToTop from 'vue-backtotop'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import PageLoader from 'bulma-pageloader'

Vue.use(Buefy)
Vue.use(VueSimpleMarkdown)
Vue.config.productionTip = false
Vue.use(BackToTop)
Vue.use(PageLoader)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')