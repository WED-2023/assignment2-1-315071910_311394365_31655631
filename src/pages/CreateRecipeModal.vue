<template>
  <b-modal id="create-recipe-modal" title-class="modal-title-custom" title="Create a New Recipe" hide-footer size="lg" class="wide-modal">
    <div class="add-recipe">
      <form @submit.prevent.stop="submitRecipe">
        <div v-if="currentScreen === 1">
          <!-- Screen 1: Basic Information and Ingredients -->
          <!-- Recipe Title -->
          <div class="form-group">
            <label for="title">Recipe Title</label>
            <input type="text" v-model="recipe.title" id="title" required />
          </div>

          <!-- Recipe Image -->
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

          <!-- Ready Time, Servings, and Likes -->
          <div class="form-group">
            <label for="readyInMinutes">Ready Time In Minutes</label>
            <input type="number" v-model="recipe.readyInMinutes" id="readyInMinutes" required />
          </div>
          <div class="form-group">
            <label for="servings">Servings</label>
            <input type="number" v-model="recipe.servings" id="servings" required />
          </div>
          <div class="form-group">
            <label for="aggregateLikes">Aggregate Likes</label>
            <input type="number" v-model="recipe.aggregateLikes" id="aggregateLikes" required />
          </div>

          <!-- Dietary Options -->
          <div class="form-group">
            <label>Dietary Options</label>
            <div class="checkbox-group">
              <label><input type="checkbox" v-model="recipe.vegetarian" /> Vegetarian</label>
              <label><input type="checkbox" v-model="recipe.vegan" /> Vegan</label>
              <label><input type="checkbox" v-model="recipe.glutenFree" /> Gluten Free</label>
              <label><input type="checkbox" v-model="recipe.dairyFree" /> Dairy Free</label>
              <label><input type="checkbox" v-model="recipe.veryHealthy" /> Very Healthy</label>
              <label><input type="checkbox" v-model="recipe.cheap" /> Cheap</label>
              <label><input type="checkbox" v-model="recipe.veryPopular" /> Very Popular</label>
              <label><input type="checkbox" v-model="recipe.sustainable" /> Sustainable</label>
              <label><input type="checkbox" v-model="recipe.lowFodmap" /> Low Fodmap</label>
            </div>
          </div>

          <!-- Ingredients -->
          <div class="form-group">
            <label for="ingredients">Ingredients</label>
            <div v-for="(ingredient, index) in recipe.extendedIngredients" :key="index" class="ingredient">
              <div class="ingredient-details">
                <input type="text" v-model="ingredient.name" placeholder="Ingredient Name" required />
                <input type="number" v-model="ingredient.amount" placeholder="Amount" required />
                <input type="text" v-model="ingredient.unit" placeholder="Unit" required />
                <button @click="removeIngredient(index)" type="button" class="remove-btn">X</button>
              </div>

              <!-- Ingredient Image -->
              <div class="form-group">
                <label>Ingredient Image</label>
                <div class="toggle-switch">
                  <input type="radio" :id="'url-' + index" value="url" v-model="ingredient.imageOption" class="toggle-input" />
                  <label :for="'url-' + index" class="toggle-label url">URL</label>
                  <input type="radio" :id="'upload-' + index" value="upload" v-model="ingredient.imageOption" class="toggle-input" />
                  <label :for="'upload-' + index" class="toggle-label upload">Upload</label>
                  <input type="radio" :id="'none-' + index" value="none" v-model="ingredient.imageOption" class="toggle-input" />
                  <label :for="'none-' + index" class="toggle-label none">None</label>
                  <span class="toggle-slider" :class="{'toggle-slider-right': ingredient.imageOption === 'upload', 'toggle-slider-none': ingredient.imageOption === 'none'}"></span>
                </div>
                <div v-if="ingredient.imageOption === 'url'" class="image-input">
                  <input type="url" v-model="ingredient.image" placeholder="Image URL" />
                </div>
                <div v-if="ingredient.imageOption === 'upload'" class="image-input">
                  <input type="file" @change="onIngredientImageUpload($event, index)" accept="image/*" />
                </div>
              </div>
            </div>
            <button @click="addIngredient" type="button" class="add-btn">Add Ingredient</button>
          </div>

          <!-- Equipment -->
          <div class="form-group">
            <label for="equipment">Equipment</label>
            <div v-for="(equip, index) in recipe.equipment" :key="index" class="equipment">
              <div class="equipment-details">
                <input type="text" v-model="equip.name" placeholder="Equipment Name" required />
                <button @click="removeEquipment(index)" type="button" class="remove-btn">X</button>
              </div>

              <!-- Equipment Image -->
              <div class="form-group">
                <label>Equipment Image</label>
                <div class="toggle-switch">
                  <input type="radio" :id="'equip-url-' + index" value="url" v-model="equip.imageOption" class="toggle-input" />
                  <label :for="'equip-url-' + index" class="toggle-label url">URL</label>
                  <input type="radio" :id="'equip-upload-' + index" value="upload" v-model="equip.imageOption" class="toggle-input" />
                  <label :for="'equip-upload-' + index" class="toggle-label upload">Upload</label>
                  <input type="radio" :id="'equip-none-' + index" value="none" v-model="equip.imageOption" class="toggle-input" />
                  <label :for="'equip-none-' + index" class="toggle-label none">None</label>
                  <span class="toggle-slider" :class="{'toggle-slider-right': equip.imageOption === 'upload', 'toggle-slider-none': equip.imageOption === 'none'}"></span>
                </div>
                <div v-if="equip.imageOption === 'url'" class="image-input">
                  <input type="url" v-model="equip.image" placeholder="Image URL" />
                </div>
                <div v-if="equip.imageOption === 'upload'" class="image-input">
                  <input type="file" @change="onEquipmentImageUpload($event, index)" accept="image/*" />
                </div>
              </div>
            </div>
            <button @click="addEquipment" type="button" class="add-btn">Add Equipment</button>
          </div>

          <!-- Navigation Buttons -->
          <div class="form-actions">
            <button @click="nextScreen" type="button" class="next-btn">Next</button>
          </div>
        </div>

        <div v-if="currentScreen === 2">
          <!-- Screen 2: Steps and Instructions -->
          <!-- Steps -->
          <div class="form-group">
            <label for="steps">Steps</label>
            <div v-for="(step, index) in recipe.steps" :key="index" class="step">
              <div class="step-number">Step {{ index + 1 }}:</div>
              <textarea v-model="step.description" placeholder="Step Description" required></textarea>
              
              <!-- Select Ingredients for Step -->
              <div class="form-group">
                <label>Ingredients</label>
                <div class="selection-container">
                  <div class="selection-group">
                    <div 
                      v-for="ingredient in recipe.extendedIngredients" 
                      :key="ingredient.name" 
                      :class="{'selected': step.ingredients.includes(ingredient.name)}" 
                      class="selection-item"
                      @click="toggleSelection(step.ingredients, ingredient.name)"
                    >
                      {{ ingredient.name }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Select Equipment for Step -->
              <div class="form-group">
                <label>Equipment</label>
                <div class="selection-container">
                  <div class="selection-group">
                    <div 
                      v-for="equip in recipe.equipment" 
                      :key="equip.name" 
                      :class="{'selected': step.equipment.includes(equip.name)}" 
                      class="selection-item"
                      @click="toggleSelection(step.equipment, equip.name)"
                    >
                      {{ equip.name }}
                    </div>
                  </div>
                </div>
              </div>
              
              <button @click="removeStep(index)" type="button" class="remove-btn">X</button>
            </div>
            <button @click="addStep" type="button" class="add-btn">Add Step</button>
          </div>

          <!-- Instructions -->
          <div class="form-group">
            <label for="instructions">Instructions</label>
            <textarea v-model="recipe.instructions" id="instructions" required></textarea>
          </div>

          <!-- Navigation Buttons -->
          <div class="form-actions">
            <button @click="prevScreen" type="button" class="prev-btn">Previous</button>
            <button @click="nextScreen" type="button" class="next-btn">Next</button>
          </div>
        </div>

        <div v-if="currentScreen === 3">
          <!-- Screen 3: Summary and Submission -->
          <!-- Summary -->
          <div class="form-group">
            <label for="summary">Summary</label>
            <textarea v-model="recipe.summary" id="summary" required></textarea>
          </div>

          <!-- Submission Success Message -->
          <div v-if="submitted" class="success-message">
            <h2>Recipe Created Successfully!</h2>
            <p>Your recipe has been created and saved successfully.</p>
            <p>Now you can close this window.</p>
          </div>

          <!-- Navigation Buttons -->
          <div class="form-actions">
            <button @click="prevScreen" type="button" class="prev-btn">Previous</button>
            <button type="submit" class="submit-btn">Create Recipe</button>
          </div>
        </div>
      </form>
    </div>
  </b-modal>
</template>

<script>
import { mockCheckIfIdNumberExist, mockAddRecipeViewToUserList } from "@/services/user";

export default {
  name: 'CreateRecipeModal',
  data() {
    return {
      recipe: this.getInitialRecipe(),
      imageOption: 'url',
      submitted: false,
      currentScreen: 1
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
        servings: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        lowFodmap: false,
        extendedIngredients: [
          {
            name: '',
            amount: 0,
            unit: '',
            image: '',
            imageOption: 'none'
          }
        ],
        steps: [
          {
            description: '',
            ingredients: [],
            equipment: []
          }
        ],
        instructions: '',
        equipment: [
          {
            name: '',
            image: '',
            imageOption: 'none'
          }
        ],
        summary: ''
      };
    },
    addIngredient() {
      this.recipe.extendedIngredients.push({ name: '', amount: 0, unit: '', image: '', imageOption: 'none' });
    },
    removeIngredient(index) {
      this.recipe.extendedIngredients.splice(index, 1);
    },
    addStep() {
      this.recipe.steps.push({ description: '', ingredients: [], equipment: [] });
    },
    removeStep(index) {
      this.recipe.steps.splice(index, 1);
    },
    addEquipment() {
      this.recipe.equipment.push({ name: '', image: '', imageOption: 'none' });
    },
    removeEquipment(index) {
      this.recipe.equipment.splice(index, 1);
    },
    toggleSelection(list, item) {
      const index = list.indexOf(item);
      if (index > -1) {
        list.splice(index, 1);
      } else {
        list.push(item);
      }
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
    onIngredientImageUpload(event, index) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.recipe.extendedIngredients[index].image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    onEquipmentImageUpload(event, index) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.recipe.equipment[index].image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    getRandomId() {
      let random;
      random = Math.floor(10000 + Math.random() * 90000);
      while(mockCheckIfIdNumberExist(random)){
          random = Math.floor(10000 + Math.random * 90000);
      }
      this.recipe.id = random;
    },
    async submitRecipe() {
      await this.getRandomId();
      const newRecipe = {
        ...this.recipe,
        id: this.recipe.id,
        title: this.recipe.title,
        readyInMinutes: this.recipe.readyInMinutes,
        aggregateLikes: this.recipe.aggregateLikes,
        servings: this.recipe.servings,
        image: this.recipe.image,
        summary: this.recipe.summary,
        vegetarian: this.recipe.vegetarian || false,
        vegan: this.recipe.vegan || false,
        glutenFree: this.recipe.glutenFree || false,
        dairyFree: this.recipe.dairyFree || false,
        veryHealthy: this.recipe.veryHealthy || false,
        cheap: this.recipe.cheap || false,
        veryPopular: this.recipe.veryPopular || false,
        sustainable: this.recipe.sustainable || false,
        lowFodmap: this.recipe.lowFodmap || false,
        extendedIngredients: this.recipe.extendedIngredients.map(ingredient => ({
          id: ingredient.id || Math.floor(10000 + Math.random() * 90000),
          aisle: "",
          image: ingredient.image,
          consistency: "SOLID",
          name: ingredient.name,
          nameClean: ingredient.name.toLowerCase(),
          original: `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`,
          originalName: ingredient.name,
          amount: ingredient.amount,
          unit: ingredient.unit,
          meta: [],
          measures: {
            us: {
              amount: ingredient.amount,
              unitShort: ingredient.unit,
              unitLong: ingredient.unit
            },
            metric: {
              amount: ingredient.amount,
              unitShort: ingredient.unit,
              unitLong: ingredient.unit
            }
          }
        })),
        instructions: this.recipe.instructions || "",
        analyzedInstructions: [
          {
            name: "",
            steps: this.recipe.steps.map((step, index) => ({
              number: index + 1,
              step: step.description,
              ingredients: step.ingredients.map(name => {
                const ingredient = this.recipe.extendedIngredients.find(ing => ing.name === name);
                return ingredient ? { id: ingredient.id, name: ingredient.name, image: ingredient.image } : {};
              }),
              equipment: step.equipment.map(name => {
                const equip = this.recipe.equipment.find(e => e.name === name);
                return equip ? { id: equip.id, name: equip.name, image: equip.image } : {};
              })
            }))
          }
        ],
        cuisines: [],
        dishTypes: ["main course"],
        diets: this.getDiets(),
        occasions: [],
        winePairing: {
          pairedWines: [],
          pairingText: "",
          productMatches: []
        },
        originalId: null,
        spoonacularScore: 0.0,
        creditsText: "User Generated",
        license: "CC BY-SA 4.0",
        sourceName: "User",
        pricePerServing: 0 // Add logic to calculate price if needed
      };

      mockAddRecipeViewToUserList(newRecipe);
      this.resetForm(); // Reset the form after submission
      this.submitted = true;
    },
    getDiets() {
      const diets = [];
      if (this.recipe.vegetarian) diets.push("vegetarian");
      if (this.recipe.vegan) diets.push("vegan");
      if (this.recipe.glutenFree) diets.push("gluten free");
      if (this.recipe.dairyFree) diets.push("dairy free");
      return diets;
    },
    resetForm() {
      this.recipe = this.getInitialRecipe();
      this.imageOption = 'url';
      this.submitted = false;
      this.currentScreen = 1;
    },
    nextScreen() {
      if (this.currentScreen < 3) {
        this.currentScreen++;
      }
    },
    prevScreen() {
      if (this.currentScreen > 1) {
        this.currentScreen--;
      }
    }
  }
}
</script>

<style scoped>
.wide-modal .modal-dialog {
  max-width: 90% !important;
  width: 90%;
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
.form-group textarea,
.form-group select {
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
  width: 210px;
  height: 34px;
  background: #e0e0e0;
  border-radius: 17px;
  margin-bottom: 10px;
}

.toggle-input {
  display: none;
}

.toggle-label {
  width: 70px;
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
  width: 70px;
  height: 100%;
  background: rgba(0, 123, 255, 0.8);
  border-radius: 17px;
  transition: left 0.3s;
  z-index: 1;
}

.toggle-slider-right {
  left: 70px;
}

.toggle-slider-none {
  left: 140px;
}

.image-input {
  margin-top: 10px;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-weight: normal;
}

.checkbox-group label input {
  margin-right: 5px;
}

.selection-container {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

.selection-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.selection-item {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.selection-item.selected {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

.ingredient, .step, .equipment {
  margin-bottom: 15px;
}

.ingredient-details, .equipment-details {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.ingredient-details input, .equipment-details input {
  margin-right: 10px;
}

.step-number {
  font-weight: bold;
  margin-right: 10px;
}

.step textarea {
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

.reset-btn, .next-btn, .prev-btn {
  padding: 10px 20px;
  border: none;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background: #007bff;
  margin: 0 5px;
}

.reset-btn:hover, .next-btn:hover, .prev-btn:hover {
  background: #0056b3;
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
  color: #462f4d;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(184, 78, 237, 0.7);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
}
</style>
