import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
const routes=[
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/invitacion',
        name:'Invitacion',
        // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
        component: () => import('../views/Invitacion.vue')
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
  });
  
  export default router;