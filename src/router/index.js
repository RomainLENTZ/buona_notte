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

router.beforeEach((to, from, next) => {
    switch (to.path) {
        case '/':
            document.body.style.backgroundColor = "#08086e";
            break;
        case '/taxe':
            document.body.style.backgroundColor = "#FFF";
            break;
        default:
            document.body.style.backgroundColor = "#FFF"; // Couleur par défaut
    }
    next();
});



export default router;
