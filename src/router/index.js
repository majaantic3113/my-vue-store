// eslint-disable
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Product from '@/components/ProductDetails';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/products/:id',
    component: Product
  }
];

export default new Router({
  mode: 'history',
  routes
});
