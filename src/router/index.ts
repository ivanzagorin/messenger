import { createRouter, createWebHistory } from 'vue-router';
import Chat from '@/components/Pages/Chat';
import NotFoundPage from '@/components/Pages/NotFound';

const routes = [
  {
    path: '/',
    component: Chat
  },
  {
    path: '/:id(\\d+)',
    component: Chat
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
