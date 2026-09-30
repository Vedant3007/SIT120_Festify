import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../components/HomeView.vue'
import PackagesView from '../components/PackagesView.vue'
import AboutView from '../components/AboutView.vue'
import PlannerView from '../components/PlannerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/packages',
    name: 'packages',
    component: PackagesView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/planner',
    name: 'planner',
    component: PlannerView
  }
]

const router = createRouter({
  history: createWebHashHistory(),

  routes,

  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router