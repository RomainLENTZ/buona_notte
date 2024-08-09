import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Taxe from '../components/Taxe.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/taxe',
        name: 'Taxe',
        component: Taxe
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
