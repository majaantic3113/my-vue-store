<template>
  <div class="container">
    <div class="col-lg-9">
      <h1>Cart</h1>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Description</th>
            <!-- <th scope="col">Image</th> -->
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="product._id" v-for="product in cartProducts">
            <td>{{product.name}}</td>
            <td>{{product.description}}</td>
            <!-- <td>
              <img v-bind:src="product.image">
            </td>-->
            <td>{{product.quantity}}</td>

            <td>{{product.price}}$</td>
            <td>
              <button class="btn btn-danger remove-from-cart">Remove from Cart completely</button>
            </td>
          </tr>
        </tbody>
      </table>

      <router-link class="btn btn-success" role="button" to="/checkout">Checkout</router-link>
    </div>
  </div>
</template>

<style scoped>
td img {
  width: 100px;
  height: 120px;
}
</style>
<script>
export default {
  name: "Cart",
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    }
  }
};
</script>