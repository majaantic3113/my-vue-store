<template>
  <div class="container">
    <h3>Your purchases</h3>

    <div v-bind:key="item.id" v-for="item in purchases">
      <div v-bind:key="product._id" v-for="product in item.purchase">
        <span>{{product.name}}</span>
        <img v-bind:src="product.image" alt>
      </div>
    </div>
  </div>
</template>

            <script>
import axios from "axios";

export default {
  name: "Purchases",
  data: function() {
    return {
      purchases: []
    };
  },
  created() {
    axios.interceptors.request.use(request => {
      const token = localStorage.getItem("token");
      request.headers["x-auth"] = token ? token : "";
      return request;
    });
    axios.get("http://localhost:8000/store/purchases").then(data => {
      console.log(data.data.data);
      this.purchases = data.data.data;
    });
  }
};
</script>

<style scoped>
</style>
