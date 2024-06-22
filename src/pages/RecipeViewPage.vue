<template>
  <div class="recipe-page">
    <div v-if="recipe" class="recipe-content">
      <div class="recipe-header">
        <img :src="recipe.image" class="recipe-image" />
        <div class="recipe-info-header">
          <h1 class="recipe-title">{{ recipe.title }}</h1>
          <hr class="title-divider" />
          <div class="recipe-meta">
            <div class="dietary-buttons">
              <div v-if="glutenFree" class="dietary-item">
                <img src="https://github.com/WED-2023/assignment2-1-315071910_311394365_31655631/blob/main/photos/gluten-free2.png?raw=true" alt="Gluten-Free" class="dietary-icon" />
                <span>Gluten-Free</span>
              </div>
              <div v-if="vegetarian" class="dietary-item">
                <img src="https://github.com/WED-2023/assignment2-1-315071910_311394365_31655631/blob/main/photos/vegetable.png?raw=true" alt="Vegetarian" class="dietary-icon" />
                <span>Vegetarian</span>
              </div>
              <div v-if="vegan" class="dietary-item">
                <img src="https://github.com/WED-2023/assignment2-1-315071910_311394365_31655631/blob/main/photos/vegan.png?raw=true" alt="Vegan" class="dietary-icon" />
                <span>Vegan</span>
              </div>
            </div>
            <div class="time-likes">
              <div class="item time">
                <i class="fas fa-clock"></i>
                {{ recipe.readyInMinutes }} minutes
              </div>
              <div class="item likes">
                <i class="fas fa-thumbs-up"></i>
                {{ recipe.aggregateLikes }} likes
              </div>
              <div class="item servings">
                <i class="fas fa-utensils"></i>
                {{ recipe.servings }} servings
              </div>
            </div>
            <button v-if="$root.store.username" @click.stop.prevent="toggleFavorite" class="favorite-btn" aria-label="Toggle favorite">
              <i :class="favorite ? 'fas fa-heart active' : 'far fa-heart'"></i>
              {{ favorite ? 'Remove from My Favorite' : 'Add to My Favorite' }}
            </button>
          </div>
        </div>
      </div>
      <div class="recipe-details">
        <div class="recipe-body">
          <div class="ingredients">
            <h3>Ingredients</h3>
            <hr class="title-divider" />
            <ul>
              <li v-for="(ingredient, index) in recipe.extendedIngredients" :key="index + '_' + ingredient.id">
                {{ ingredient.original }}
              </li>
            </ul>
          </div>
          <div class="instructions">
            <h3>Instructions</h3>
            <hr class="title-divider" />
            <ol>
              <li v-for="step in recipe._instructions" :key="step.number">
                {{ step.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="recipe-actions">
        <button v-if="$root.store.username" :class="['add-to-meal', { 'added': addedToMeal }]" @click="addToMeal">
          <i :class="[addedToMeal ? 'fas fa-check' : 'fas fa-plus-circle']"></i>
          {{ addedToMeal ? 'Added to Meal Plan' : 'Add to Meal Plan' }}
        </button>
        <button v-if="$root.store.username" @click="startPreparation" class="start-preparation">
          <i class="fas fa-play-circle"></i> Start Preparation
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mockIsRecipeMarkAsFavorite,
  mockAddFavorite,
  mockRemoveFavorite,
  mockAddRecipeToMealList,
  mockRemoveRecipeFromMeal,
  mockIsRecipeInMyMeal,
  mockGetUserFullRecipeView,
  mockAddWatchedRecipe
} from "../services/user.js";

import {
  mockGetRecipeFullDetails,
  mockIsRecipeGlutenFree,
  mockIsRecipeVegetarian,
  mockIsRecipeVegan,
} from "../services/recipes.js";

export default {
  data() {
    return {
      recipe: null,
      favorite: false,
      glutenFree: false,
      vegetarian: false,
      vegan: false,
      addedToMeal: false // New state variable
    };
  },
  async created() {
    try {
      const response = await mockGetUserFullRecipeView(this.$route.params.recipeId);

      const {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        servings,
        image,
        title,
        id
      } = response.data.recipe;

      const _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      const _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        servings,
        image,
        title,
        id
      };

      this.recipe = _recipe;
      await this.loadDietaryInfo();
      await this.isRecipeMarkAsFavorite();
      await this.checkIfRecipeInMeal();
      
      // Mark the recipe as watched
      mockAddWatchedRecipe(this.recipe.id);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async loadDietaryInfo() {
      const [glutenFreeResponse, vegetarianResponse, veganResponse] = await Promise.all([
        mockIsRecipeGlutenFree(this.recipe.id),
        mockIsRecipeVegetarian(this.recipe.id),
        mockIsRecipeVegan(this.recipe.id)
      ]);

      this.glutenFree = glutenFreeResponse.data.glutenFree;
      this.vegetarian = vegetarianResponse.data.vegetarian;
      this.vegan = veganResponse.data.vegan;
    },
    async isRecipeMarkAsFavorite() {
      const response = await mockIsRecipeMarkAsFavorite(this.recipe.id);
      this.favorite = response.data.favorite;
    },
    async checkIfRecipeInMeal() {
      const response = await mockIsRecipeInMyMeal(this.recipe.id);
      this.addedToMeal = response.data.meal;
    },
    toggleFavorite() {
      this.favorite = !this.favorite;
      if (this.favorite) {
        mockAddFavorite(this.recipe.id);
      } else {
        mockRemoveFavorite(this.recipe.id);
      }
    },
    addToMeal() {
      this.addedToMeal = !this.addedToMeal; // Toggle addedToMeal state
      if (this.addedToMeal) {
        mockAddRecipeToMealList(this.recipe.id);
      } else {
        mockRemoveRecipeFromMeal(this.recipe.id);
      }
    },
    startPreparation() {
      if (!this.addedToMeal) {
        this.addToMeal();
      }
      this.$router.push({ name: 'RecipePreparation', params: { recipeId: this.recipe.id } });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

body {
  font-family: "Roboto", sans-serif;
}

.recipe-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  padding: 40px;
  box-sizing: border-box;
}

.recipe-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.recipe-header {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background: rgba(0, 0, 0, 0.05);
}

.recipe-image {
  width: 100%;
  max-width: 558px; /* Adjust the max width as needed */
  height: 400px; /* Fixed height */
  object-fit: cover; /* Maintain aspect ratio, cover the area */
  border-radius: 8px;
  margin-right: 20px;
}

.recipe-info-header {
  flex: 1;
}

.recipe-title {
  font-family: 'Lora', serif;
  font-size: 2rem;
  margin-bottom: 20px;
}

.title-divider {
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 10px 0;
}

.recipe-meta {
  display: flex;
  flex-direction: column;
}

.dietary-buttons {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.dietary-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dietary-icon {
  width: 24px;
  height: 24px;
}

.favorite-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 50px;
  padding: 8px 16px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.favorite-btn:active i {
  animation: spin 0.5s ease;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.favorite-btn:hover {
  background-color: #c0392b;
}

.favorite-btn i {
  font-size: 1.2rem;
  margin-right: 8px;
}

.favorite-btn .active {
  color: #fff;
}

.dietary-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.dietary-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.time-likes {
  display: flex;
  gap: 20px;
  font-size: 1.1em;
  color: #333;
  margin-bottom: 20px;
}

.time-likes .item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.time-likes .item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.time-likes i {
  background-color: #f1f1f1;
  border-radius: 50%;
  padding: 0px;
  font-size: 1.5rem;
  color: #555;
  transition: transform 0.3s ease;
}

.time-likes .item:hover i {
  animation: spin 0.5s ease;
}

.recipe-details {
  padding: 20px;
}

.recipe-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.ingredients,
.instructions {
  background: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.ingredients h3,
.instructions h3 {
  margin-bottom: 20px;
  color: #555;
}

.ingredients ul,
.instructions ol {
  padding-left: 20px;
}

.ingredients li,
.instructions li {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.recipe-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: #f8f8f8;
  border-top: 1px solid #eee;
}

.add-to-meal {
  padding: 12px 24px;
  background-color: #76c7c0; /* Teal */
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
}

.add-to-meal i {
  margin-right: 8px;
}

.add-to-meal:hover {
  background-color: #5ca3a0;
  transform: translateY(-3px);
}

.add-to-meal:active {
  background-color: #4a9081;
  transform: translateY(0);
}

.add-to-meal.added {
  background-color: #4CAF50; /* Green */
}

.add-to-meal.added:hover {
  background-color: #45A049;
}

.start-preparation {
  padding: 12px 24px;
  background-color: #0e9a5b; /* Green */
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  text-decoration: none; /* Remove underline */
  display: flex;
  align-items: center;
}

.start-preparation i {
  margin-right: 8px;
}

.start-preparation:hover {
  background-color: #109b3c;
  transform: translateY(-3px);
}

.start-preparation:active {
  background-color: #0d7a3a;
  transform: translateY(0);
}
</style>
