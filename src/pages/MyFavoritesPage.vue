<template>
  <div class="container">
    <h1 class="title">Favorites Page</h1>
    <div class="left-section">
      <b-row v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-row>
    </div>
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview";
import { mockGetFavoriteRecipes } from "../services/user";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },

  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {

          const response = mockGetFavoriteRecipes();

          console.log(response);
          const recipes = response.data.recipes;
          console.log(recipes);
          this.recipes = [];
          this.recipes.push(...recipes);
        } catch (error) {
          console.log(error);
        }
      }
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>

<!-- <style scoped>
.container {
  padding: 20px;
}

.title {
  font-size: 2em;
  margin-bottom: 20px;
}

.left-section {
  display: flex;
  flex-wrap: wrap;
}

.recipePreview {
  margin: 10px;
}
</style> -->
<style lang="scss" scoped>
/* Define color variables */
$primary-color: #3498db;
$secondary-color: #2ecc71;
$background-color: #f4f4f4;
$text-color: #333;
$shadow-color: rgba(0, 0, 0, 0.1);
$hover-shadow-color: rgba(0, 0, 0, 0.2);

/* Global styles */
body {
  font-family: 'Roboto', sans-serif;
  background-color: $background-color;
  color: $text-color;
}

.container {
  padding: 20px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px $shadow-color;
  transition: box-shadow 0.3s ease;
}

.container:hover {
  box-shadow: 0 6px 12px $hover-shadow-color;
}

.title {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: $primary-color;
}

.left-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
}

.recipePreview {
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px $shadow-color;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.recipePreview:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px $hover-shadow-color;
}

/* Button styles */
button {
  background-color: $primary-color;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: darken($primary-color, 10%);
  transform: translateY(-2px);
}

/* Responsive Typography */
@media (max-width: 768px) {
  .title {
    font-size: 2em;
  }

  .left-section {
    grid-template-columns: 1fr;
  }
}
</style>
