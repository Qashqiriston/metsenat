import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem('access')
//     if (to.meta.isAuth && token) {
//       next({ name: 'Home' })
//     //   router.push('/home')
//     } else if (to.meta.requireAuth  && !token) {
//       next({ name: 'Login' })
//     } else next()
//   })

export default router;
