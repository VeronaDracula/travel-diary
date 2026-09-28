import { createWebHistory, createRouter } from 'vue-router'

import DefaultLayout from '../layouts/default.vue';
import homePage from '../pages/home.vue'
import countryPage from '../pages/country.vue'
import notFound from '../pages/not-found.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: homePage,
            },
            {
                path: 'country/:id',
                name: 'country',
                component: countryPage
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: notFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
