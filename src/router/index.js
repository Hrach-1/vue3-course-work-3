import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import('../views/Task')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../views/New')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active'
})

export default router
