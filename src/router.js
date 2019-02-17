import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: `history`,
  base: process.env.BASE_URL,
  routes: [
    {
      path: `/`,
      name: `home`,
      component: () => import(`./pages/PageHome.vue`),
    },
    {
      path: `/products`,
      name: `products`,
      component: () => import(`./pages/PageProducts.vue`),
    },
    {
      path: `/articles`,
      name: `articles`,
      component: () => import(`./pages/PageArticles.vue`),
    },
  ],
});
