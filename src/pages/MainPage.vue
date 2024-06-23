<template>
  <div class="main-container">
    <!-- Title with solid color text -->
    <div class="wrapper">
      <h1>Main Page</h1>
    </div>

    <!-- Recipe Lists and Auth Section -->
    <div class="recipes-section">
      <!-- RecipePreviewList with refresh button shown -->
      <RecipePreviewList title="Explore this Recipes" class="recipe-card" source="explore" />
      
      <!-- Blurred Section with Login and Register buttons for unauthenticated users -->
      <div class="blur-container">
        <RecipePreviewList
          title="Last watched recipes"
          :class="{ 'recipe-card': true, blur: !isAuthenticated }"
          :refreshButton="false"
          source="watched"
        />
        <div v-if="!isAuthenticated" class="auth-message">
          <p>You need to Login to view this:</p>
          <div class="auth-buttons">
            <router-link to="/login" tag="button" class="login-button">
              Login
            </router-link>
            <router-link to="/register" tag="button" class="register-button">
              Register
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";

export default {
  components: {
    RecipePreviewList
  },
  computed: {
    isAuthenticated() {
      return !!this.$root.store.username;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');

$avatar-size: 32px;
$body-background: #f0f4f8;
$primary-color: #007bff; // Blue color for Login button
$secondary-color: #28a745; // Green color for Register button

body {
  height: 100vh;
  margin: 0;
  background-color: $body-background;
  font-family: 'Open Sans', Arial, sans-serif;
  overflow-x: hidden;
  display: grid;
  place-items: center;
}

a {
  text-decoration: none;
  color: #9ca0b1;
}

.main-container {
  font-family: 'Open Sans', sans-serif;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.wrapper {
  text-align: center;
}

.wrapper h1 {
  font-size: 72px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  color: #2c3e50; /* Dark blue */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 128, 255, 0.7); /* Shadow and glow */
}

.recipes-section {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
}

.recipe-card {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.auth-section {
  position: relative;
  width: 100%;
}

.blur-container {
  position: relative;
  width: 100%;
}

.blur {
  filter: blur(7px);
  pointer-events: none;
}

.auth-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #333;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.auth-message p {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
}

.auth-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.login-button,
.register-button {
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  font-weight: bold;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}

.login-button {
  background: rgba(0, 123, 255, 0.4); /* Blue color with transparency */
}

.login-button:hover {
  background: rgba(0, 123, 255, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 8px 12px rgba(0, 123, 255, 0.1);
}

.register-button {
  background: rgba(40, 167, 69, 0.4); /* Green color with transparency */
}

.register-button:hover {
  background: rgba(40, 167, 69, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 8px 12px rgba(40, 167, 69, 0.1);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

@media (max-width: 768px) {
  .wrapper h1 {
    font-size: 70px;
  }

  .recipes-section {
    gap: 20px;
  }

  .recipe-card {
    width: 95%;
  }

  .login-button,
  .register-button {
    font-size: 0.9rem;
  }

  .auth-message {
    padding: 15px;
  }

  .auth-message p {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .wrapper h1 {
    font-size: 50px;
  }

  .recipes-section {
    gap: 20px;
  }

  .recipe-card {
    width: 100%;
  }

  .login-button,
  .register-button {
    font-size: 0.8rem;
  }

  .auth-message {
    padding: 10px;
  }

  .auth-message p {
    font-size: 1rem;
  }
}
</style>
