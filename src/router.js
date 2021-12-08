import { createRouter,  createWebHistory } from 'vue-router';
import Ticket from './views/Ticket.vue';

export const routerHistory = createWebHistory();
export const router = createRouter({
    history: routerHistory,
    strict: true,
    routes: [
        {
            path: '',
            component: Ticket
        }
    ]
});

const dirLog = {
    '': '? ',
    back: '⏪',
    forward: '⏩'
}

routerHistory.listen((to, from, info) => {
    console.log(`${ dirLog[info.direction] } as a ${ info.type }`);
});