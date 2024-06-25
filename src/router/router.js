import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/settings",
        component: () => import("../views/Settings.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;