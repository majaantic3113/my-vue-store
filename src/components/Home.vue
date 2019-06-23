//  eslint-disable

<template>
  <div class="container">
    <h1>Store</h1>

    <div>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-right">
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="categories">
              <router-link
                v-bind:key="category.name"
                v-for="category in categories"
                type="button"
                class="btn btn-primary"
                role="button"
                :to="{ path: '/', query: { category: category.name }}"
                v-on:click.native="filter"
              >{{category.name}}</router-link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
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
import axios from "axios";

export default {
  name: "App",
  data: function() {
    return {
      products: [],
      categories: []
    };
  },
  created() {
    axios.get("http://localhost:8000/store/products").then(data => {
      this.products = data.data;
    });

    axios.get("http://localhost:8000/store/categories").then(data => {
      this.categories = data.data;
    });

    let token = localStorage.getItem("token");

    if (token) {
      this.$store.dispatch("setIfUserIsLoggedIn", true);
    }
  },
  methods: {
    filter() {
      axios
        .get("http://localhost:8000/store/products", {
          params: {
            category: this.$route.query.category
          }
        })
        .then(results => {
          this.products = results.data;
        });
    }
  }
};
</script>

<style scoped>
img {
  width: 300px;
  height: 400px;
}

.categories {
  display: flex;
  margin-left: auto;
  margin-right: 30px;
}

a {
  margin-right: 5px;
}
</style>
