<template>
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
            >{{category.name}}</router-link>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data: function() {
    return {
      categories: [{ name: "Male" }, { name: "Female" }]
    };
  }
};
</script>

<style scoped>
#navbarResponsive {
  display: flex;
  width: 100%;
}
.categories {
  display: flex;
  margin-left: auto;
  margin-right: 30px;
}

a {
  display: flex;
  margin-right: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: #337ab7;
  color: white;
  cursor: pointer;
  text-decoration: none;
}
</style>
