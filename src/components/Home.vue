//  eslint-disable

<template>
  <div class="row is-flex">
    <div class="row is-flex">
      <app-categories/>

      <!-- <ul class="col-sm-12 col-md-12 list-unstyled"></ul> -->
    </div>
  </div>
</template>

<script>
import Categories from "./Categories.vue";
import products from "../data";
export default {
  name: "App",
  data: function() {
    return {
      products: []
    };
  },
  created() {
    this.products = products;
    console.log("lala", this.data.products);
  },
  components: {
    "app-categories": Categories
  }
};
</script>

<style scoped>
</style>
