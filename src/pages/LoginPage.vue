<template>
  <div class="container">
    <div class="login-card card shadow-sm p-4">
      <h1 class="title mb-4">Login</h1>
      <b-form @submit.prevent="onLogin">
        <b-form-group
          id="input-group-Username"
          label="Username:"
          label-for="Username"
        >
          <b-form-input
            id="Username"
            v-model="$v.form.username.$model"
            type="text"
            :state="validateState('username')"
            placeholder="Enter your username"
            required
          ></b-form-input>
          <b-form-invalid-feedback>
            Username is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-Password"
          label="Password:"
          label-for="Password"
        >
          <b-form-input
            id="Password"
            type="password"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
            placeholder="Enter your password"
            required
          ></b-form-input>
          <b-form-invalid-feedback>
            Password is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-button
          type="submit"
          variant="primary"
          class="btn-block"
          >Login</b-button
        >
        <div class="mt-2 text-center">
          Don't have an account yet?
          <router-link to="register">Register here</router-link>
        </div>
      </b-form>
      <b-alert
        class="mt-2"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Login failed: {{ form.submitError }}
      </b-alert>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mockLogin } from "../services/auth.js";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: { required },
      password: { required }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        const success = true;
        const response = mockLogin(this.form.username, this.form.password, success);
        this.$root.store.login(this.form.username);
        this.$router.push("/");
      } catch (err) {
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Login();
    }
  }
};
</script>

<style lang="scss" scoped>
html, body {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.login-card {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #343a40;
  text-align: center;
}

.btn-block {
  width: 100%;
  margin-top: 10px;
}

.text-center {
  text-align: center;
}

b-form-group {
  margin-bottom: 1.5rem;
}

b-form-input {
  border-radius: 5px;
  border: 1px solid #ced4da;
  padding: 0.75rem;
}

b-form-invalid-feedback {
  font-size: 0.875rem;
  color: #e3342f;
}

b-alert {
  text-align: center;
}
</style>
