<template>
  <div class="product">
    <div class="row">
      <div class="col-lg-3">
        <div class="list-group">
          <router-link to="/">Back To Home</router-link>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="card mt-4 product-details">
          <img class="card-img-top img-fluid" v-bind:src="product.image" alt>
          <div class="card-body">
            <h3 class="card-title">{{product.name}}</h3>
            <h4>${{product.price}}</h4>
            <p class="card-text">Description: {{product.description}}</p>
            <p class="card-title">
              Quantity:
              <strong>{{quantity}}</strong>
            </p>
            <button class="btn btn-primary add-to-cart" @click="addProductToCart">Add to Cart</button>
            <button
              class="btn btn-danger remove-from-cart"
              @click="removeProductFromCart"
            >Remove from Cart</button>
          </div>
        </div>
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
      product: null,
      quantity: 0
    };
  },
  created() {
    axios
      .get("http://localhost:8000/store/products/?id=" + this.$route.params.id)
      .then(result => {
        this.product = result.data[0];
      });
  },
  methods: {
    addProductToCart() {
      this.quantity++;

      const product = {
        ...this.product,
        quantity: this.quantity
      };
      this.$store.dispatch("addProductToCart", product);
    },
    removeProductFromCart() {
      this.quantity > 0 && this.quantity--;
      const product = {
        ...this.product,
        quantity: this.quantity
      };

      this.$store.dispatch("removeProductFromCart", product);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  width: 100%;
}
.product {
  padding: 5%;
  display: flex;
  align-items: center;
}

.product-details {
  margin: auto;
  width: 50%;
}

button {
  display: inline-flex;
  margin-right: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: #337ab7;
  color: white;
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: none;
}

.add-to-cart {
  background-color: green;
}

.remove-from-cart {
  background-color: red;
}
</style>
