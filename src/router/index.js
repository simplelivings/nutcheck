import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import T215300630 from '../views/T155300360.vue'
import Home from '../views/Home.vue'
import WriteData from "../views/WriteData";
import CheckData from "@/views/CheckData";

const routes = [
  {
    path: '/checkData',
    name: CheckData,
    component: CheckData
  },

  {
    path: '/writeData',
    name: WriteData,
    component: WriteData
  },

  {
    path: '/login',
    name: Login,
    component: Login
  },

  {
    path: '/T155300360',
    name:T215300630,
    component: T215300630
  },

  {
    path: '/',
    name: 'Home',
    component: Home
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
