<template>
  <nav class="navbar navbar-default">
    <div class="wrapper">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">
          <img
            src="https://www.earnieland.be/system/App/Models/Shop/logos/000/001/651/original/happy-socks_logo.jpg"
            alt="Log"
          >
        </router-link>
      </div>
      <div class="nav navbar-nav navbar-right">
        <router-link to="/cart" class="shopping-cart" role="button">
          Cart
          <span class="badge">{{ cartProducts.length }}</span>
        </router-link>
        <div class="links">
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      loggedIn: false
    };
  },
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100px;
  height: auto;
}

.navbar-right {
  display: flex;
  margin-left: auto;
}

.navbar-right a {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}

.navbar-header {
  display: inline-flex;
}

.links {
  display: inline-flex;
}

.wrapper {
  display: flex;
  align-items: center;
}
</style>
