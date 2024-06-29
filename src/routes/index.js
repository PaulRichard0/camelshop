import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import products from "../components/Book.vue"
import Aboutus from "./../components/aboutus.vue"
import Contactus from "./../components/Contactus.vue"
import Cart from "../components/Yourbookings.vue"
import Servicesoffered from "./../components/Servicesoffered.vue"
import Book from '@/store/modules/Book'
import Yourbooking from '@/store/modules/Yourbooking'
const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/Book',
        name: 'Book',
        component: Book,
    },
    {
        path: '/Yourbooking',
        name: 'Yourbooking',
        component: Yourbooking,
    },
    
    {
        path: '/servicesoffered',
        name: 'servicesoffered',
        component: Servicesoffered,
    },
   
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router