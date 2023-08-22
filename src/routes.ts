import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import NabvarVue from "./components/Nabvar.vue"; "./components/Nabvar.vue"

import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"
import Home from "./pages/Home.vue"

//definimos las rutas de las vistas
let routes: RouteRecordRaw[] = [
    {name: "About", path: "/About", component: About},
    {name: "Contact", path: "/Contact", component: Contact},
    {name: "Home", path: "/", component: Home}
]

let Router = createRouter({
    history: createWebHistory(),
    routes
});

export default Router