import Vue from 'vue'
import VueRouter from 'vue-router'

import Page1 from "@/views/Page-1.vue";
import Page2 from "@/views/Page-2.vue";
import Page3 from "@/views/Page-3.vue";
import Page4 from "@/views/Page-4.vue";

Vue.use(VueRouter)

const routes = [
  { path: "/", component: Page1 },
  { path: "/page-1", component: Page1 },
  { path: "/page-2", component: Page2 },
  { path: "/page-3", component: Page3 },
  { path: "/page-4", component: Page4 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
