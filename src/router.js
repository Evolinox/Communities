import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./views/Home.vue")
    },
    {
        path: "/explore",
        component: () => import("./views/Explore.vue")
    },
    {
        path: "/settings",
        component: () => import("./views/Settings.vue")
    },
    {
        path: "/server/:id",
        component: () => import("./views/Server.vue"),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;