import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home';
import Remote from '../components/Remote';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'Remote',
      component: Remote,
    },
  ],
});

// const router = new VueRouter({
//   mode: 'history',
//   routes,
// });

export default router;
