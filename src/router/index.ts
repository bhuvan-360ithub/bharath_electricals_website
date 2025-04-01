import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../Views/Home.vue';
import About from '../Views/About.vue';
import Contact from '../Views/Contact.vue';
import Categories from '../Views/Categories.vue';
import Products from '../Views/Products.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/categories', component: Categories },
  { path: '/products', component: Products },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
