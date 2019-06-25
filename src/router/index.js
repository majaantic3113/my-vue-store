// eslint-disable
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Product from '@/components/ProductDetails';
import Cart from '@/components/Cart';
import Checkout from '@/components/Checkout';
import Purchases from '@/components/Purchases';

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
    path: '/cart',
    component: Cart
  },
  {
    path: '/checkout',
    component: Checkout
  },
  {
    path: '/purchases',
    component: Purchases
  },
  {
    path: '/products/:id',
    name: 'products',
    component: Product
  }
];

export default new Router({
  mode: 'history',
  routes
});
