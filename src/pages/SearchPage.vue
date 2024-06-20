<template>
  <div class="container">
    <h1 class="title">Search Recipes</h1>
    <div class="content">
      <div class="search-bar-container">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search for recipes..."
          class="search-input"
        />
        <button @click="handleSearch" class="search-button">Search</button>
        <button @click="resetSearch" class="reset-button">Reset</button>
      </div>
      
      <div class="filter-container">
        <!-- Number of Results Filter -->
        <div class="filter-group">
          <label>Number of Results</label>
          <div class="radio-group">
            <div class="radio-item">
              <input type="radio" id="limit5" value="5" v-model="resultLimit">
              <label for="limit5">5</label>
            </div>
            <div class="radio-item">
              <input type="radio" id="limit10" value="10" v-model="resultLimit">
              <label for="limit10">10</label>
            </div>
            <div class="radio-item">
              <input type="radio" id="limit15" value="15" v-model="resultLimit">
              <label for="limit15">15</label>
            </div>
          </div>
        </div>

        <!-- Diet Filter Dropdown -->
        <div class="filter-group">
          <label for="diet" class="filter-label">Diet</label>
          <select id="diet" v-model="selectedDiet" class="dropdown">
            <option value="">All Diets</option>
            <option v-for="diet in diets" :key="diet" :value="diet">{{ diet }}</option>
          </select>
        </div>

        <!-- Cuisine Filter Dropdown -->
        <div class="filter-group">
          <label for="cuisine" class="filter-label">Cuisine</label>
          <select id="cuisine" v-model="selectedCuisine" class="dropdown">
            <option value="">All Cuisines</option>
            <option v-for="cuisine in cuisines" :key="cuisine" :value="cuisine">{{ cuisine }}</option>
          </select>
        </div>

        <!-- Intolerance Filter Dropdown -->
        <div class="filter-group">
          <label for="intolerance" class="filter-label">Intolerance</label>
          <select id="intolerance" v-model="selectedIntolerance" class="dropdown">
            <option value="">All Intolerances</option>
            <option v-for="intolerance in intolerances" :key="intolerance" :value="intolerance">{{ intolerance }}</option>
          </select>
        </div>
      </div>

      <div class="sort-container" v-if="filteredRecipes.length">
        <!-- Sort By Dropdown -->
        <div class="filter-group">
          <label for="sortBy" class="filter-label">Sort By</label>
          <select id="sortBy" v-model="sortBy" @change="handleSort" class="dropdown sort-dropdown">
            <option value="">None</option>
            <option value="readyInMinutes">Ready In Minutes</option>
            <option value="aggregateLikes">Likes</option>
          </select>
        </div>
      </div>

      <div class="results">
        <div v-if="filteredRecipes.length" class="recipe-list">
          <RecipePreview 
            v-for="recipe in filteredRecipes" 
            :key="recipe.id" 
            :recipe="recipe"
            class="recipe-preview"
          />
        </div>
        <div v-else class="no-results">
          <p>No recipes found.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreview from "@/components/RecipePreview.vue"; 
import recipe_preview from "@/assets/mocks/recipe_preview.json"; // TODO: replace it with a mock function.

export default {
  components: {
    RecipePreview,
  },
  data() {
    return {
      searchQuery: '',
      recipes: Object.values(recipe_preview),
      filteredRecipes: [], // Initial state set to empty
      resultLimit: '5', // Default result limit
      diets: [
        "Ketogenic",
        "Vegetarian",
        "Lacto-Vegetarian",
        "Ovo-Vegetarian",
        "Vegan",
        "Pescetarian",
        "Paleo",
        "Primal",
        "Low FODMAP",
        "Whole30",
      ],
      cuisines: ["Mexican", "Italian", "Chinese", "Indian", "Greek", "Latine"],
      intolerances: [
        "Dairy", "Egg", "Gluten", "Grain", "Peanut", 
        "Seafood", "Sesame", "Shellfish", "Soy", 
        "Sulfite", "Tree Nut", "Wheat", "butter"
      ],
      selectedDiet: '',
      selectedCuisine: '',
      selectedIntolerance: '',
      sortBy: ''
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim() === '') {
        this.filteredRecipes = [];
        return;
      }
      
      this.filteredRecipes = this.recipes.filter(recipe => {
        const matchesQuery = recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesDiet = this.selectedDiet ? recipe.vegetarian === (this.selectedDiet === "Vegetarian") : true;
        const matchesCuisine = this.selectedCuisine ? recipe.cuisine === this.selectedCuisine : true;
        const matchesIntolerance = this.selectedIntolerance 
          ? !recipe.extendedIngredients.some(ingredient => ingredient.original.includes(this.selectedIntolerance))
          : true;
        
        return matchesQuery && matchesDiet && matchesCuisine && matchesIntolerance;
      });

      this.filteredRecipes = this.filteredRecipes.slice(0, Number(this.resultLimit));
      this.handleSort();
    },
    handleSort() {
      if (this.filteredRecipes.length && this.sortBy) {
        this.filteredRecipes.sort((a, b) => {
          if (this.sortBy === 'readyInMinutes') {
            return a.readyInMinutes - b.readyInMinutes;
          } else if (this.sortBy === 'aggregateLikes') {
            return b.aggregateLikes - a.aggregateLikes;
          }
          return 0;
        });
      }
    },
    resetSearch() {
      this.searchQuery = '';
      this.filteredRecipes = [];
      this.selectedDiet = '';
      this.selectedCuisine = '';
      this.selectedIntolerance = '';
      this.sortBy = '';
      this.resultLimit = '5';
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
}

.title {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  color: #333;
}

.content {
  display: flex;
  flex-direction: column;
}

.search-bar-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  padding: 15px;
  width: 100%;
  font-size: 1.2em;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: block;
  transition: border-color 0.3s, box-shadow 0.3s;
  margin-right: 10px;
}

.search-input:focus {
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

.search-button,
.reset-button {
  padding: 10px 15px; /* Shrink the button */
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 10px;
}

.search-button {
  background-color: #007BFF;
  color: white;
}

.search-button:hover {
  background-color: #0056b3;
}

.reset-button {
  background-color: #FF6B6B;
  color: white;
}

.reset-button:hover {
  background-color: #cc5a5a;
}

.filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: space-between;
}

.sort-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.filter-group {
  flex: 1;
  min-width: 150px;
}

.filter-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #f8f8ff; /* Light color for filter labels */
}

.dropdown {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.sort-dropdown {
  padding: 5px 10px; /* Shrink the padding to make it smaller */
  width: auto; /* Adjust the width to be smaller */
  max-width: 150px; /* Set a smaller max-width */
}

.dropdown:focus {
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

.radio-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.radio-item {
  flex: 1;
  margin-right: 10px;
}

.radio-item:last-child {
  margin-right: 0;
}

.radio-item input[type="radio"] {
  display: none;
}

.radio-item label {
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  text-align: center;
}

.radio-item input[type="radio"]:checked + label {
  background-color: #ccc;
}

.results {
  flex: 1;
}

.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 0 20px;
}

.recipe-preview {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%;
  height: auto;
}

.recipe-preview:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.recipe-preview img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.recipe-footer {
  padding: 15px;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  text-align: center;
}

.recipe-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 3rem;
}

.recipe-overview {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #777;
}

.recipe-overview li {
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
}

.recipe-overview li .icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.icon_like {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.no-results {
  margin-top: 20px;
  font-size: 1.2em;
  color: #888;
  text-align: center;
}

.title {
  font-size: 72px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  color: #374d37; /* Dark Grey-Green */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(50, 205, 50, 0.7); /* Shadow and green glow */
}
</style>
