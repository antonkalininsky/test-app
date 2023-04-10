import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('./../components/Main.vue'),
        children: [
            {
                path: '',
                redirect: { name: "warehouse" }
            },
            {
                path: 'favourite',
                name: 'favourite',
                component: () => import('./../components/FavouriteList.vue'),
            },
            {
                path: 'warehouse',
                name: 'warehouse',
                component: () => import('./../components/WarehouseList.vue'),
            },
            {
                path: 'deals',
                name: 'deals',
                component: () => import('./../components/DealsList.vue'),
            },
        ]
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})