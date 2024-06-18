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
                <i class="fas fa-seedling gluten-free-icon"></i>
                <span>Gluten-Free</span>
              </div>
              <div v-if="vegetarian" class="dietary-item">
                <i class="fas fa-carrot vegetarian-icon"></i>
                <span>Vegetarian</span>
              </div>
              <div v-if="vegan" class="dietary-item">
                <i class="fas fa-leaf vegan-icon"></i>
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
            </div>
            <button @click.stop.prevent="toggleFavorite" class="favorite-btn" aria-label="Toggle favorite">
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
        <button class="add-to-meal" @click="addToMeal">
          <i class="fas fa-plus-circle"></i> Add to Meal Plan
        </button>
        <router-link :to="{ name: 'RecipePreparation', params: { recipeId: recipe.id } }" class="start-preparation">
          <i class="fas fa-play-circle"></i> Start Preparation
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mockIsRecipeMarkAsFavorite,
  mockAddFavorite,
  mockRemoveFavorite
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
      vegan: false
    };
  },
  async created() {
    try {
      const response = await mockGetRecipeFullDetails(this.$route.params.recipeId);

      const {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
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
        image,
        title,
        id
      };

      this.recipe = _recipe;
      await this.loadDietaryInfo();
      await this.isRecipeMarkAsFavorite();
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
    toggleFavorite() {
      this.favorite = !this.favorite;
      if (this.favorite) {
        mockAddFavorite(this.recipe.id);
      } else {
        mockRemoveFavorite(this.recipe.id);
      }
    },
    addToMeal() {
      // Add recipe to meal plan logic
      console.log(`Recipe ${this.recipe.title} added to meal plan`);
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
  width: 48%;
  height: auto;
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
  margin-right: 8px; /* Add margin to create space between the icon and text */
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



.gluten-free-icon {
  color: #76c7c0;
}

.vegetarian-icon {
  color: #f39c12;
}

.vegan-icon {
  color: #27ae60;
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

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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

.add-to-meal,
.start-preparation {
  padding: 12px 20px;
  background-color: #76c7c0;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-meal:hover,
.start-preparation:hover {
  background-color: #5ca3a0;
}

.add-to-meal i,
.start-preparation i {
  margin-right: 8px;
}
</style>
