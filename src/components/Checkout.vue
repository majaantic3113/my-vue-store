<template>
  <div class="container">
    <div class="row is-flex">
      <h1>Your order</h1>
      <div class="row is-flex">
        <div v-bind:key="product._id" v-for="product in cartProducts">
          <strong>{{product.name}}</strong>
          <span>${{product.price * product.quantity}}</span>
          <hr>
        </div>

        <h3>Total price: ${{totalPrice}}</h3>
        <button class="btn btn-success" type="submit" @click="onSubmit" role="button">Order</button>

        <div v-show="success" class="alert alert-success">Successfully saved order</div>

        <div v-show="error" class="alert alert-danger">{{error}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Product",
  data: function() {
    return {
      totalPrice: 0,
      error: false,
      success: false
    };
  },

  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    username() {
      return this.$store.getters.username;
    }
  },
  created() {
    this.cartProducts.map(item => {
      this.totalPrice += item.price * item.quantity;
    });
  },
  methods: {
    onSubmit() {
      if (!this.loggedIn) {
        this.error = "You have to login to make an order!";
      } else {
        let requestBody = {
          username: this.username,
          purchase: this.cartProducts
        };

        axios.interceptors.request.use(request => {
          const token = localStorage.getItem("token");
          request.headers["x-auth"] = token ? token : "";
          return request;
        });

        axios
          .post("http://localhost:8000/store/purchases", requestBody)
          .then(response => {
            this.success = "Success! Purchase saved!";
          })
          .catch(() => {
            this.error = "Purchase failed!";
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>