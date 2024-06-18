<template>
    <div class="preparation-container">
      <h1 class="title">{{ recipe.title }} Preparation</h1>
      <div v-for="(step, index) in recipe.steps" :key="index" class="preparation-step">
        <input type="checkbox" v-model="step.completed" @change="saveProgress" />
        <span :class="{ completed: step.completed }">{{ step.description }}</span>
      </div>
    </div>
  </template>
  
  <script>
  import { mockGetRecipePreparationDetails } from "../services/recipes.js";
  
  export default {
    data() {
      return {
        recipe: null
      };
    },
    async created() {
      try {
        const response = await mockGetRecipePreparationDetails(this.$route.params.recipeId);
        this.recipe = response.data.recipe;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      saveProgress() {
        // Save progress to server or local storage
        console.log('Progress saved', this.recipe.steps);
      },
    },
  };
  </script>
  
  <style scoped>
  .preparation-container {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: auto;
  }
  
  .title {
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .preparation-step {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .preparation-step input[type="checkbox"] {
    margin-right: 10px;
  }
  
  .preparation-step span.completed {
    text-decoration: line-through;
    color: #777;
  }
  </style>
  