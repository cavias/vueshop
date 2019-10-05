import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: () => import(/* webpackChunkName: "catalog" */ './views/ViewCatalog.vue')
        },
        {
            path: '/product/:id',
            name: 'product',
            component: () => import(/* webpackChunkName: "product" */ './views/ViewProduct.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
