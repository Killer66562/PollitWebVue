import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw, RouterOptions } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: "/", 
        component: () => import('../pages/HomePage.vue')
    }, 
    {
        path: "/login", 
        component: () => import('../pages/LoginPage.vue')
    },
    {
        path: "/register", 
        component: () => import('../pages/RegisterPage.vue')
    },
    {
        path: "/create-poll", 
        component: () => import('../pages/PollCreatePage.vue')
    }, 
    {
        path: "/polls/:pollId", 
        component: () => import('../pages/PollDetailPage.vue')
    }, 
    {
        path: "/user", 
        children: [
            {
                path: "polls", 
                component: () => import('../pages/UserPollsPage.vue')
            }
        ]
    }
]

const options: RouterOptions = {
    history: createWebHistory(import.meta.env.VITE_APP_BASE),
    routes: routes
}

export const router = createRouter(options);