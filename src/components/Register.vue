<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username">
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>

        <div v-if="success" class="alert alert-success">
          You are successfully registered!
          <div class="list-group">
            <router-link to="/login">Login page</router-link>
          </div>
        </div>
        <div v-if="error" class="alert alert-danger">You are unable to be registered!</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      success: false,
      error: false,
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        username: this.username,
        password: this.password,
        email: this.email
      };

      axios
        .post("http://localhost:8000/store/users", formData)
        .then(data => {
          this.success = true;
        })
        .catch(e => {
          this.error = true;
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