const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("../components/Home/components/HomeComponent.vue"),
      },
      {
        path: "/vendas",
        component: () =>
          import("../components/Vendas/components/VendasComponent.vue"),
      },
      {
        path: "/estoque",
        component: () =>
          import("../components/Estoque/components/EstoqueComponent.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
