<template>
    <b-modal id="create-recipe-modal" title-class="modal-title-custom" title="Create a New Recipe" hide-footer size="lg" class="wide-modal">
      <div>
        <!-- <h1 class="title">Create a New Recipe</h1> -->
        <div class="add-recipe">
          <form @submit.prevent.stop="submitRecipe">
            <div class="form-group">
              <label for="title">Recipe Title</label>
              <input type="text" v-model="recipe.title" id="title" required />
            </div>
  
            <div class="form-group">
              <label>Recipe Image</label>
              <div class="toggle-switch">
                <input type="radio" id="url" value="url" v-model="imageOption" class="toggle-input" />
                <label for="url" class="toggle-label url">URL</label>
                <input type="radio" id="upload" value="upload" v-model="imageOption" class="toggle-input" />
                <label for="upload" class="toggle-label upload">Upload</label>
                <span class="toggle-slider" :class="{'toggle-slider-right': imageOption === 'upload'}"></span>
              </div>
              <div v-if="imageOption === 'url'" class="image-input">
                <input type="url" v-model="recipe.image" placeholder="Image URL" required />
              </div>
              <div v-if="imageOption === 'upload'" class="image-input">
                <input type="file" @change="onImageUpload" accept="image/*" />
              </div>
            </div>
  
            <div class="form-group">
              <label for="readyInMinutes">Ready Time In Minutes</label>
              <input type="number" v-model="recipe.readyInMinutes" id="readyInMinutes" required />
            </div>
  
            <div class="form-group">
              <label for="aggregateLikes">Aggregate Likes</label>
              <input type="number" v-model="recipe.aggregateLikes" id="aggregateLikes" required />
            </div>
  
            <div class="form-group">
              <label>Dietary Options</label>
              <div class="checkbox-group">
                <label>
                  <input type="checkbox" v-model="recipe.vegetarian" /> Vegetarian
                </label>
                <label>
                  <input type="checkbox" v-model="recipe.vegan" /> Vegan
                </label>
                <label>
                  <input type="checkbox" v-model="recipe.glutenFree" /> Gluten Free
                </label>
              </div>
            </div>
  
            <div class="form-group">
              <label for="ingredients">Ingredients</label>
              <div v-for="(ingredient, index) in full_recipe.extendedIngredients" :key="index" class="ingredient">
                <input type="text" v-model="ingredient.name" placeholder="Ingredient Name" required />
                <button @click="removeIngredient(index)" type="button" class="remove-btn">X</button>
              </div>
              <button @click="addIngredient" type="button" class="add-btn">Add Ingredient</button>
            </div>
  
            <div class="form-group">
              <label for="instructions">Instructions</label>
              <textarea v-model="full_recipe.instructions" id="instructions" required></textarea>
            </div>
  
            <div class="form-group">
              <label for="summary">Summary</label>
              <textarea v-model="recipe.summary" id="summary" required></textarea>
            </div>
  
            <div v-if="submitted" class="success-message">
              <h2>Recipe Created Successfully!</h2>
              <p>Your recipe has been created and saved successfully.</p>
            </div>
  
            <div class="form-actions">
              <button type="submit" class="submit-btn">Create Recipe</button>
              <button @click="resetForm" type="button" class="reset-btn">Reset Form</button>
            </div>
          </form>
        </div>
      </div>
    </b-modal>
  </template>
  
  <script>
  import { mockCheckIfIdNumberExist, mockAddRecipeViewToUserList, mockAddRecipeFullViewToUserList } from "@/services/user";
  
  export default {
    name: 'CreateRecipeModal',
    data() {
      return {
        recipe: this.getInitialRecipe(),
        full_recipe: {
          instructions: '',
          extendedIngredients: [
            {
              name: ''
            }
          ]
        },
        imageOption: 'url',
        submitted: false
      }
    },
    methods: {
      getInitialRecipe() {
        return {
          id: null,
          image: '',
          title: '',
          readyInMinutes: 0,
          aggregateLikes: 0,
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          summary: ''
        };
      },
      addIngredient() {
        this.full_recipe.extendedIngredients.push({ name: '' });
      },
      removeIngredient(index) {
        this.full_recipe.extendedIngredients.splice(index, 1);
      },
      onImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = e => {
            this.recipe.image = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      getRandomId() {
        let random;
        random = Math.floor(10000 + Math.random() * 90000);
        while(mockCheckIfIdNumberExist(random)){
            random = Math.floor(10000 + Math.random() * 90000);
        }
        this.recipe.id = random;
      },
      async submitRecipe() {
        await this.getRandomId();
        const viewResponse = mockAddRecipeViewToUserList(this.recipe);
        const fullResponse = mockAddRecipeFullViewToUserList(this.recipe.id, this.full_recipe);
        this.submitted = true;
      },
      resetForm() {
        this.recipe = this.getInitialRecipe();
        this.full_recipe = {
          instructions: '',
          extendedIngredients: [
            {
              name: ''
            }
          ]
        };
        this.imageOption = 'url';
        this.submitted = false;
      }
    }
  }
  </script>
  
  <style scoped>
  .wide-modal .modal-dialog {
    max-width: 90% !important; /* Ensure the maximum width is large */
    width: 90%; /* Apply the width to make it wider */
  }
  
  .add-recipe {
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .add-recipe h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .form-group input[type="text"],
  .form-group input[type="url"],
  .form-group input[type="number"],
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
  }
  
  .form-group input[type="file"] {
    width: 100%;
  }
  
  .form-group textarea {
    height: 100px;
  }
  
  .toggle-switch {
    display: flex;
    position: relative;
    width: 140px;
    height: 34px;
    background: #e0e0e0;
    border-radius: 17px;
    margin-bottom: 10px;
  }
  
  .toggle-input {
    display: none;
  }
  
  .toggle-label {
    width: 50%;
    line-height: 34px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    position: relative;
    z-index: 2;
    color: #000;
  }
  
  .toggle-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(0, 123, 255, 0.8);
    border-radius: 17px;
    transition: left 0.3s;
    z-index: 1;
  }
  
  .toggle-slider-right {
    left: 50%;
  }
  
  .image-input {
    margin-top: 10px;
  }
  
  .checkbox-group label {
    display: inline-block;
    margin-right: 10px;
    font-weight: normal;
  }
  
  .ingredient {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .ingredient input {
    flex: 1;
    margin-right: 10px;
  }
  
  .remove-btn {
    background: #ff4b5c;
    border: none;
    color: #fff;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .remove-btn:hover {
    background: #ff1f3c;
  }
  
  .add-btn {
    background: #007bff;
    border: none;
    color: #fff;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 14px;
  }
  
  .add-btn:hover {
    background: #0056b3;
  }
  
  .form-actions {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .submit-btn {
    padding: 10px 40px;
    border: none;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    background: #28a745;
    margin-right: 10px;
  }
  
  .submit-btn:hover {
    background: #218838;
  }
  
  .reset-btn {
    padding: 10px 20px;
    border: none;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    background: #dc3545;
  }
  
  .reset-btn:hover {
    background: #c82333;
  }
  
  .success-message {
    text-align: center;
    background: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .success-message h2 {
    margin: 0 0 10px;
  }
  
  ::v-deep .modal-title-custom {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Josefin Sans', sans-serif;
    color: #462f4d; /* Stone-like grey with light purple */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(184, 78, 237, 0.7); /* Shadow and purple glow */
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Make sure the title takes the full width */
    margin: 0; /* Remove any default margins */
  }
  </style>
  
  