import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Products from '@/pages/Products.vue'
const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/products/:id',
        name: 'product',
        component: () => import ('@/pages/Product.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router