import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Taxe from '../components/Taxe.vue'
import Rice from '../components/Rice.vue'

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
    },
    {
        path: '/rice',
        name: 'Rice',
        component: Rice
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
        case '/rice':
            document.body.style.backgroundColor = "#e8e8e8";
            break;
        default:
            document.body.style.backgroundColor = "#FF0000"; 
            break;
    }
    next();
});



export default router;
