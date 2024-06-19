<!-- <template>
    <div class="preparation-container">
      <h1 class="title">{{ recipe.title }} Preparation</h1>
      <div class="servings-selector">
        <label for="servings">Servings:</label>
        <input
          type="number"
          id="servings"
          v-model.number="servings"
          min="1"
          @change="updateIngredients"
        />
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar">
          <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
      <div class="preparation-content">
        <img :src="currentStepImage" alt="Step Image" class="step-image" />
        <h2>{{ currentStep.step }}</h2>
        <ul>
          <li v-for="ingredient in adjustedIngredients" :key="ingredient.id">
            {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
          </li>
        </ul>
      </div>
      <div class="navigation-buttons">
        <button @click="prevStep" :disabled="currentStepIndex === 0">Previous</button>
        <button @click="nextStep" :disabled="currentStepIndex === steps.length - 1">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mockGetRecipeFullDetails } from '../services/recipes.js';
  
  export default {
    data() {
      return {
        recipe: {
          title: '',
          analyzedInstructions: [{ steps: [] }],
          extendedIngredients: [],
        },
        servings: 1,
        currentStepIndex: 0,
      };
    },
    async created() {
      try {
        const response = await mockGetRecipeFullDetails(this.$route.params.recipeId);
        this.recipe = response.data.recipe;
        this.servings = this.recipe.servings;
      } catch (error) {
        console.log(error);
      }
    },
    computed: {
      steps() {
        return this.recipe.analyzedInstructions[0].steps;
      },
      currentStep() {
        return this.steps[this.currentStepIndex];
      },
      progress() {
        return ((this.currentStepIndex + 1) / this.steps.length) * 100;
      },
      currentStepImage() {
        // Assuming each step might have an image, otherwise use a placeholder
        return this.currentStep.image || 'https://via.placeholder.com/400';
      },
      adjustedIngredients() {
        return this.recipe.extendedIngredients.map((ingredient) => {
          const adjustedAmount = (ingredient.amount / this.recipe.servings) * this.servings;
          return {
            ...ingredient,
            amount: adjustedAmount.toFixed(2),
          };
        });
      },
    },
    methods: {
      nextStep() {
        if (this.currentStepIndex < this.steps.length - 1) {
          this.currentStepIndex += 1;
        }
      },
      prevStep() {
        if (this.currentStepIndex > 0) {
          this.currentStepIndex -= 1;
        }
      },
      updateIngredients() {
        this.recipe.extendedIngredients = this.adjustedIngredients;
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
  
  .servings-selector {
    text-align: center;
    margin-bottom: 20px;
  }
  
  input[type='number'] {
    width: 50px;
    padding: 5px;
    margin-left: 10px;
  }
  
  .progress-bar-container {
    margin-bottom: 20px;
  }
  
  .progress-bar {
    background: #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    height: 20px;
  }
  
  .progress {
    background: #76c7c0;
    height: 100%;
    transition: width 0.3s ease;
  }
  
  .step-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-bottom: 20px;
  }
  
  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #76c7c0;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
   -->