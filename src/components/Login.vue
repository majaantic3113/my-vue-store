<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data: {
    username: "",
    password: "",
    error: null
  },
  methods: {
    onSubmit() {
      const formData = {
        username: this.username,
        password: this.password
      };

      axios
        .post("http://localhost:8000/store/auth/authenticateuser", formData)
        .then(response => {
          localStorage.setItem("token", response.data.data.token);

          this.$store.dispatch("setIfUserIsLoggedIn", true);
          this.$store.dispatch("setUsername", formData.username);

          this.$router.push("/");
        })
        .catch(() => {
          this.error = "This task can not be deleted!";
        });
    }
  }
};
</script>

<style scoped>
.signin-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid #337ab7;
  background-color: #eee;
}

.submit button {
  border: 1px solid #ccc;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #337ab7;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>