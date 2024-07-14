<template>
  <div>
    <br />
    <div class="preparation-container" v-if="recipe.title">
      <h1 class="recipe-title">{{ recipe.title }}</h1>
      <img :src="recipe.image || defaultImage" alt="Recipe Image" class="recipe-image" />
      <div v-html="recipe.summary" class="recipe-summary"></div>
      <br />
      <div class="progress-bar-container">
        <ul class="steps-progress">
          <li
            v-for="(step, index) in steps"
            :key="index"
            :class="{
              active: currentStepIndex === index,
              completed: currentStepIndex > index
            }"
            @click="goToStep(index)"
          >
            <span>
              <template v-if="currentStepIndex > index">✓</template>
              <template v-else>{{ index + 1 }}</template>
            </span>
            <p :class="{ 'current-step': currentStepIndex === index }">Step {{ index + 1 }}</p>
          </li>
        </ul>
      </div>
      <div class="servings-selector">
        <label for="servings">Serving:</label>
        <input type="number" id="servings" v-model.number="servings" min="1" @change="updateIngredients" />
      </div>
      <div class="content-container">
        <div class="ingredients-equipment">
          <div class="ingredients" v-if="currentStep.ingredients && currentStep.ingredients.length">
            <h3>Ingredients:</h3>
            <ul>
              <li v-for="ingredient in mappedIngredients" :key="ingredient.id">
                <img :src="ingredient.image || defaultImage" alt="Ingredient Image" class="item-image" />
                <span>{{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}</span>
              </li>
            </ul>
          </div>
          <div class="equipment" v-if="currentStep.equipment && currentStep.equipment.length">
            <h3>Equipment:</h3>
            <ul>
              <li v-for="equipment in currentStep.equipment" :key="equipment.id">
                <img :src="equipment.image || defaultImage" alt="Equipment Image" class="item-image" />
                <span>{{ equipment.name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="step-details">
          <h3>Step {{ currentStep.number }}:</h3>
          <p>{{ currentStep.step }}</p>
        </div>
        <div class="navigation-buttons">
          <button @click="prevStep" :disabled="currentStepIndex === 0">Prev</button>
          <button v-if="currentStepIndex < steps.length - 1" @click="nextStep">Next</button>
          <button v-else @click="completePreparation">Done</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <br>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recipe: {
        title: "",
        image: "",
        readyInMinutes: 0,
        popularity: 0,
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        ingredients: [],
        instructions: [{ steps: [] }],
        summary: ""
      },
      servings: 1,
      currentStepIndex: 0,
      currentStepCompleted: false,
      defaultImage: "https://cdn.icon-icons.com/icons2/2436/PNG/512/recipe_cutlery_spoon_fork_icon_147447.png",
    };
  },
  async created() {
    if (this.$route.params.recipeId) {
      await this.fetchRecipe(this.$route.params.recipeId);
    }
  },
  watch: {
    "$route.params.recipeId": "fetchRecipe",
  },
  methods: {
    async fetchRecipe(recipeId) {
      try {
        const response = await axios.get(`${this.$root.store.server_domain}/recipes/${recipeId}/formatted`);
        this.recipe = response.data;
        this.servings = this.recipe.servings;
        // Save the original amounts for adjustment
        this.recipe.ingredients.forEach(ingredient => {
          ingredient.originalAmount = ingredient.amount;
        });
        this.updateIngredients();
        // Retrieve the current step index when loading the recipe
        this.currentStepIndex = 0; // Assuming you start from the beginning, update if needed
      } catch (error) {
        console.log(error);
      }
    },
    nextStep() {
      if (this.currentStepIndex < this.steps.length - 1) {
        this.currentStepIndex += 1;
        this.currentStepCompleted = false;
      }
    },
    prevStep() {
      if (this.currentStepIndex > 0) {
        this.currentStepIndex -= 1;
        this.currentStepCompleted = false;
      }
    },
    goToStep(index) {
      this.currentStepIndex = index;
      this.currentStepCompleted = false;
    },
    updateIngredients() {
      const factor = this.servings / this.recipe.servings;
      this.recipe.ingredients = this.recipe.ingredients.map(
        (ingredient) => {
          const adjustedAmount = ingredient.originalAmount * factor;
          return {
            ...ingredient,
            amount: adjustedAmount.toFixed(2),
          };
        }
      );
    },
    completePreparation() {
      alert("Preparation complete!");
      this.$router.push({ name: 'meal-plan' }); // Navigate to the meal plan page
    }
  },
  computed: {
    steps() {
      return this.recipe.instructions[0]?.steps || [];
    },
    currentStep() {
      return this.steps[this.currentStepIndex] || {};
    },
    mappedIngredients() {
      if (!this.currentStep.ingredients) return [];

      return this.currentStep.ingredients.map(stepIngredient => {
        const ingredient = this.recipe.ingredients.find(ing => ing.name === stepIngredient.name);
        return {
          ...stepIngredient,
          amount: ingredient ? ingredient.amount : '',
          unit: ingredient ? ingredient.unit : ''
        };
      });
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #f4f4f4;
}

.preparation-container {
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
  font-family: "Roboto", sans-serif;
}

.recipe-title {
  font-size: 2.5em;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.recipe-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
}

.recipe-summary {
  font-size: 1em; /* Reduced font size */
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.progress-bar-container {
  margin-bottom: 20px;
}

.steps-progress {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}

.steps-progress li {
  flex: 1;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.steps-progress li:not(:last-child)::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: #ddd;
  top: 50%;
  left: 50%;
  transform: translateX(50%);
  z-index: -1;
  transition: background 0.3s ease;
}

.steps-progress li.completed:not(:last-child)::after {
  background: linear-gradient(to right, #3498db, #2ecc71);
}

.steps-progress li span {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  background: #ddd;
  color: #fff;
  border-radius: 50%;
  margin-bottom: 5px;
  font-size: 18px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.steps-progress li.completed span {
  background: #2ecc71;
  transform: scale(1.2);
}

.steps-progress li.active span {
  background: #3498db;
  transform: scale(1.2);
}

.steps-progress li p {
  margin: 0;
  font-size: 14px;
  color: #000;
  transition: color 0.3s ease;
}

.steps-progress li .current-step {
  font-weight: bold;
  color: #3498db;
}

.servings-selector {
  text-align: center;
  margin-bottom: 20px;
}

input[type="number"] {
  width: 60px;
  padding: 5px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ingredients-equipment {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.ingredients,
.equipment {
  flex: 1;
  background: #f7f7f7;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ingredients ul,
.equipment ul {
  list-style: none;
  padding: 0;
}

.ingredients li,
.equipment li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.ingredients img,
.equipment img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.step-details {
  background: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #2980b9;
  transform: scale(1.05);
}
</style>
