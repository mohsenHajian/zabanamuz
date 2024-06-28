import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/movies',
                    children: [
                        {
                            path: '',
                            component: () => import('@/views/Movies/index.vue')
                        },
                        {
                            path: 'scene/:id?',
                            component: () => import('@/views/Movies/Scene.vue')
                        }
                    ]
                }
            ]
        }
    ]
});

export default router;
