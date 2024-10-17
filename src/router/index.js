import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sobre",
      name: "Sobre",
      component: () => import("../views/SobreView.vue"),
    },
    {
      path: "/contato",
      name: "Contato",
      component: () => import("../views/ContatoView.vue"),
    },
    {
      path: "/orcamento",
      name: "Orcamento",
      component: () => import("../views/OrcamentoView.vue"),
    },
    {
      path: "/politicas",
      name: "Politicas",
      component: () => import("../views/PoliticasView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Sempre rolar para o topo ao navegar para uma nova rota
    return { top: 0 };
  },
});

export default router;
