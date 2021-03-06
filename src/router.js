import Vue from "vue"
import Router from "vue-router"
import Functions from "./views/Functions.vue"
import Category from "./views/Category.vue"
import Form from "./views/Form.vue"

Vue.use(Router);

export default new Router({
  // mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "functions",
      component: Functions,
      meta: {
        title: 'Functions'
      }
    },
    {
      path: "/formulaire",
      name: "formulaire",
      component: Form,
      meta: {
        title: 'formulaire'
      }
    },
    {
      path: "/category",
      name: "category",
      component: Category,
      meta: {
        title: 'Category'
      }
    },
    {
      path: "/category/:slug",
      name: "categorySlug",
      component: Category
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})