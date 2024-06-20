<template>
  <div>
    <br />
    <div class="preparation-container" v-if="recipe.title">
      <h1>{{ recipe.title }}</h1>
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
          <div class="ingredients" v-if="currentStep.ingredients.length">
            <h3>Ingredients:</h3>
            <ul>
              <li v-for="ingredient in currentStep.ingredients" :key="ingredient.id">
                <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`" alt="Ingredient Image" class="item-image" />
                <span>{{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}</span>
              </li>
            </ul>
          </div>
          <div class="equipment" v-if="currentStep.equipment.length">
            <h3>Equipment:</h3>
            <ul>
              <li v-for="equipment in currentStep.equipment" :key="equipment.id">
                <img :src="`https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`" alt="Equipment Image" class="item-image" />
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
  </div>
</template>

<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";
import { mockSetStepInRecipe, mockRecipePreparationComplete, mockGetCurrentStep } from "../services/user.js";

export default {
  data() {
    return {
      recipe: {
        title: "",
        image: "",
        summary: "",
        analyzedInstructions: [{ steps: [] }],
        extendedIngredients: [],
      },
      servings: 1,
      currentStepIndex: 0,
      currentStepCompleted: false,
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
        const response = await mockGetRecipeFullDetails(recipeId);
        this.recipe = response.data.recipe;
        this.servings = this.recipe.servings;
        this.updateIngredients();
        // Retrieve the current step index when loading the recipe
        this.currentStepIndex = mockGetCurrentStep(recipeId);
        this.updateProgress();
      } catch (error) {
        console.log(error);
      }
    },
    nextStep() {
      if (this.currentStepIndex < this.steps.length - 1) {
        this.currentStepIndex += 1;
        this.currentStepCompleted = false;
        this.updateProgress();
      }
    },
    prevStep() {
      if (this.currentStepIndex > 0) {
        this.currentStepIndex -= 1;
        this.currentStepCompleted = false;
        this.updateProgress();
      }
    },
    goToStep(index) {
      this.currentStepIndex = index;
      this.currentStepCompleted = false;
      this.updateProgress();
    },
    updateIngredients() {
      this.recipe.extendedIngredients = this.adjustedIngredients.map(
        (ingredient) => {
          const adjustedAmount =
            (ingredient.amount / this.recipe.servings) * this.servings;
          return {
            ...ingredient,
            amount: adjustedAmount.toFixed(2),
          };
        }
      );
    },
    completePreparation() {
      mockRecipePreparationComplete(this.recipe.id);
      this.currentStepIndex += 1;
      this.currentStepCompleted = true;
      this.updateProgress();
      alert("Preparation complete!");
      this.$router.push({ name: 'meal-plan' }); // Navigate to the meal plan page
    },
    updateProgress() {
      mockSetStepInRecipe(this.recipe.id, this.currentStepIndex, this.steps.length);
    },
  },
  computed: {
    steps() {
      return this.recipe.analyzedInstructions[0]?.steps || [];
    },
    currentStep() {
      return this.steps[this.currentStepIndex] || {};
    },
    progress() {
      return ((this.currentStepIndex + 1) / this.steps.length) * 100;
    },
    adjustedIngredients() {
      return this.recipe.extendedIngredients.map((ingredient) => {
        const adjustedAmount =
          (ingredient.amount / this.recipe.servings) * this.servings;
        return {
          ...ingredient,
          amount: adjustedAmount.toFixed(2),
        };
      });
    },
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

.recipe-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
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
