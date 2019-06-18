//  eslint-disable

<template>
  <div class="container">
    <h1>Store</h1>

    <ul class="col-sm-12 col-md-12 list-unstyled">
      <li
        v-bind:key="product._id"
        v-for="product in products"
        class="col-sm-6 col-md-4 product-wrapper"
      >
        <div class="thumbnail">
          <img v-bind:src="product.image" alt>
          <div class="caption">
            <h3>{{product.name}}</h3>
            <p>{{product.description}}</p>
            <p>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'products', params: { id: product._id }}"
              >More Details</router-link>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Categories from "./Categories.vue";
import { products } from "../data";
export default {
  name: "App",
  data: function() {
    return {
      products: []
    };
  },
  created() {
    this.products = products;
  },
  components: {
    "app-categories": Categories
  }
};
</script>

<style scoped>
</style>
