export default [
  {
    path: "/home",
    name: "Home",
    meta: {
      layout: "default",
      requireAuth: true,
    },
    component: () => import("@/pages/TheHome.vue"),
  },
  {
    path: "/",
    name: "Login",
    meta: {
      layout: "auth",
      isAuth: false,
    },
    component: () => import("@/pages/LoginPage.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      layout: "default",
    },
    component: () => import("@/components/layout/DashboardPage.vue"),
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    meta: {
      layout: "default",
    },
    component: () => import("@/components/layout/Sponsors.vue"),
  },
  {
    path: "/students",
    name: "Students",
    meta: {
      layout: "default",
    },
    component: () => import("@/components/layout/Students.vue"),
  },
  {
    path: "/sponsors/:id",
    name: "AboutSponsors",
    meta: {
      layout: "default"
    },
    component: () => import("@/components/layout/AboutSponsors.vue")
  }
];
