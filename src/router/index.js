import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import OrListView from '../views/OrListView.vue'

const routes = [
  {
    path: '/',
    name: 'EventListView',
    component: EventListView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/Ex',
    name: 'OrListView',
    component: OrListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
