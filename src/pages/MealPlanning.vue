<template>
    <div class="meal-planning-container">
      <h1 class="title">Meal Planning</h1>
      <div v-for="recipe in mealRecipes" :key="recipe.id" class="meal-recipe">
        <span>{{ recipe.title }}</span>
        <button @click="removeRecipeFromMeal(recipe.id)">Remove</button>
        <div class="progress-bar-container">
          <progress-bar :progress="recipe.progress" />
        </div>
      </div>
      <button @click="clearMeal">Clear Meal</button>
    </div>
  </template>
  
  <script>
  import ProgressBar from "../components/ProgressBar";
  
  export default {
    name: "MealPlanning",
    components: {
      ProgressBar,
    },
    data() {
      return {
        mealRecipes: [],
      };
    },
    methods: {
      removeRecipeFromMeal(recipeId) {
        this.mealRecipes = this.mealRecipes.filter(recipe => recipe.id !== recipeId);
      },
      clearMeal() {
        this.mealRecipes = [];
      },
    },
  };
  </script>
  
  <style scoped>
  .meal-planning-container {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: auto;
  }
  
  .title {
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .meal-recipe {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .meal-recipe span {
    font-size: 1.2em;
  }
  
  .progress-bar-container {
    width: 50%;
    margin-left: 20px;
  }
  </style>
  