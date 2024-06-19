import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import products from "./../components/Products.vue"
import Aboutus from "./../components/aboutus.vue"
import Contactus from "./../components/Contactus.vue"
import Cart from "./../components/Cart.vue"
import Servicesoffered from "./../components/Servicesoffered.vue"
const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/products',
        name: 'products',
        component: products,
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
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