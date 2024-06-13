<template>
  <div class="container d-flex align-items-center justify-content-center">
    <b-card class="register-card shadow-sm p-4">
      <h1 class="title text-center mb-4">Register</h1>
      <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
        <b-form-group label="Username:" label-for="username" label-cols-sm="3">
          <b-form-input
            id="username"
            v-model="$v.form.username.$model"
            type="text"
            :state="validateState('username')"
            placeholder="Enter your username"
            class="rounded-pill"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.username.required">
            Username is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else-if="!$v.form.username.length">
            Username must be between 3-8 characters long
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else-if="!$v.form.username.alpha">
            Username must contain only letters
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Country:" label-for="country" label-cols-sm="3">
          <b-form-select
            id="country"
            v-model="$v.form.country.$model"
            :options="countries"
            :state="validateState('country')"
            class="rounded-pill"
          ></b-form-select>
          <b-form-invalid-feedback v-if="!$v.form.country.required">
            Country is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Password:" label-for="password" label-cols-sm="3">
          <b-form-input
            id="password"
            type="password"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
            placeholder="Enter your password"
            class="rounded-pill"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.password.required">
            Password is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else-if="!$v.form.password.length">
            Password must be between 5-10 characters long
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Confirm Password:" label-for="confirmedPassword" label-cols-sm="3">
          <b-form-input
            id="confirmedPassword"
            type="password"
            v-model="$v.form.confirmedPassword.$model"
            :state="validateState('confirmedPassword')"
            placeholder="Confirm your password"
            class="rounded-pill"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.confirmedPassword.required">
            Password confirmation is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else-if="!$v.form.confirmedPassword.sameAsPassword">
            Passwords do not match
          </b-form-invalid-feedback>
        </b-form-group>

        <div class="d-flex justify-content-between">
          <b-button type="reset" variant="outline-danger" class="rounded-pill px-4">Reset</b-button>
          <b-button type="submit" variant="primary" class="rounded-pill px-4">Register</b-button>
        </div>

        <div class="text-center mt-3">
          Already have an account?
          <router-link to="/login" class="text-primary font-weight-bold"> Log in here</router-link>
        </div>
      </b-form>
    </b-card>

    <b-alert v-if="form.submitError" variant="danger" dismissible class="mt-3">
      Registration failed: {{ form.submitError }}
    </b-alert>
  </div>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs
} from "vuelidate/lib/validators";
import { mockRegister } from "../services/auth.js";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        country: null,
        password: "",
        confirmedPassword: "",
        submitError: undefined
      },
      countries: [{ value: null, text: "Select your country", disabled: true }].concat(countries)
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      country: {
        required
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p)
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        const userDetails = {
          username: this.form.username,
          password: this.form.password
        };
        const response = await mockRegister(userDetails);
        this.$router.push("/login");
      } catch (err) {
        this.form.submitError = err.response ? err.response.data.message : "Unknown error";
      }
    },
    onRegister() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        country: null,
        password: "",
        confirmedPassword: "",
        submitError: undefined
      };
      this.$v.$reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-card {
  max-width: 500px;
  width: 100%;
  border-radius: 20px;
  border: none;
  background: #ffffff;
}

.title {
  font-size: 2rem;
  color: #333333;
}

.b-form-input, .b-form-select {
  border-radius: 50px;
  padding: 10px 15px;
}

.b-button {
  border-radius: 50px;
}

.text-primary {
  color: #007bff !important;
}

.font-weight-bold {
  font-weight: bold;
}

.shadow-sm {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
}
</style>
