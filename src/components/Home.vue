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

export default {
  name: "App",
  components: {
    "app-categories": Categories
  }
};
</script>

<style scoped>
</style>
