<template>
  <div class="main-container">
    <!-- Title with animated gradient text -->
    <div class="wrapper">
      <h1>Main Page</h1>
    </div>

    <!-- Recipe Lists and Login Button -->
    <div class="recipes-section">
      <RecipePreviewList title="Random Recipes" class="recipe-card" />
      <router-link v-if="!$root.store.username" to="/login" tag="button" class="login-button">
        You need to Login to view this
      </router-link>
      <!-- {{ !$root.store.username }} -->
      <RecipePreviewList
        title="Last Viewed Recipes"
        :class="{
          'recipe-card': true,
          blur: !$root.store.username
        }"
        disabled
      />
    </div>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');

$avatar-size: 32px;
$body-background: #f0f4f8;

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
  // background: #e0f7fa; /* Light blue background for freshness */
}

.wrapper {
  text-align: center;
}

.wrapper h1 {
  font-size: 92px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(to right, #095fab 10%, #25abe8 50%, #57d75b 60%);
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 1.5s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.recipes-section {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.recipe-card {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

// .recipe-card:hover {
//   transform: translateY(-5px);
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
// }

.login-button {
  background-color: #00796b;
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 20px;
  transition: background-color 0.3s, transform 0.3s;
}

.login-button:hover {
  background-color: #004d40;
  transform: translateY(-3px);
}

.blur {
  filter: blur(5px);
  pointer-events: none;
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

  .login-button {
    font-size: 0.9rem;
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

  .login-button {
    font-size: 0.8rem;
  }
}
</style>
