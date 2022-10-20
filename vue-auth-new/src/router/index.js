import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/Login.vue'
import RegisterPage from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
