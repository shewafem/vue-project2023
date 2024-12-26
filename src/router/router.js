import EventPage from "@/components/EventPage";
import About from "@/pages/About";
import EventDetailedPage from '@/components/EventDetailedPage';
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/events',
        component:  EventPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/events/:id',
        component: EventDetailedPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;