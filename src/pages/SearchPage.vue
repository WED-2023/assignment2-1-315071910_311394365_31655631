<template>
  <div class="container">
    <h1 class="title">Search Recipes</h1>
    <div class="content">
      <div class="filters">
        <br>
        <input 
          type="text" 
          v-model="searchQuery" 
          @input="handleSearch" 
          placeholder="Search for recipes..."
          class="search-input"
        />

        <h3 class="filter-title">Number of Results</h3>
        <div id="number-of-results" class="radio-group">
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

        <h3 class="filter-title">Diet</h3>
        <div class="checkbox-group">
          <div v-for="type in types" :key="type" class="checkbox-item">
            <input 
              type="checkbox" 
              :id="type" 
              :value="type" 
              v-model="selectedTypes"
              @change="handleSearch"
            />
            <label :for="type">{{ type }}</label>
          </div>
        </div>

        <h3 class="filter-title">Intolerances</h3>
        <div class="checkbox-group">
          <div v-for="intolerance in intolerances" :key="intolerance" class="checkbox-item">
            <input 
              type="checkbox" 
              :id="intolerance" 
              :value="intolerance" 
              v-model="selectedIntolerances"
              @change="handleSearch"
            />
            <label :for="intolerance">{{ intolerance }}</label>
          </div>
        </div>
      </div>

      <div class="results">
        <div v-if="filteredRecipes.length" class="recipe-list">
          <RecipePreview 
            v-for="recipe in limitedRecipes" 
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
import recipe_preview from "@/assets/mocks/recipe_preview.json"; // TODO: replace it to mock func.

export default {
  components: {
    RecipePreview,
  },
  data() {
    return {
      searchQuery: '',
      recipes: Object.values(recipe_preview),
      filteredRecipes: [],
      resultLimit: '10', // Default result limit
      types: ['glutenFree', 'vegetarian', 'vegan'],
      selectedTypes: [], // Selected types
      intolerances: ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat'],
      selectedIntolerances: [], // Selected intolerances
    };
  },
  computed: {
    limitedRecipes() {
      return this.filteredRecipes.slice(0, Number(this.resultLimit));
    }
  },
  methods: {
    handleSearch() {
      this.filteredRecipes = this.recipes.filter(recipe => {
        const matchesQuery = recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesType = this.selectedTypes.length 
          ? this.selectedTypes.every(type => recipe[type])
          : true;
        const matchesIntolerances = this.selectedIntolerances.every(intolerance => 
          !recipe.extendedIngredients.some(ingredient => ingredient.original.includes(intolerance))
        );
        return matchesQuery && matchesType && matchesIntolerances;
      });
    },
  },
  mounted() {
    this.handleSearch();
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
}

.filters {
  width: 300px;
  margin-right: 20px;
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
  margin-bottom: 20px;
}

.search-input:focus {
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

.filter-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
  margin-top: 20px;
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

.checkbox-group {
  margin-bottom: 20px;
}

.checkbox-item {
  display: inline-block;
  width: 32%;
  margin-bottom: 10px;
}

.checkbox-item:nth-child(3n+2) {
  margin-left: 2%;
  margin-right: 2%;
}

.checkbox-item input[type="checkbox"] {
  display: none;
}

.checkbox-group label {
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  text-align: center;
}

.checkbox-group input[type="checkbox"]:checked + label {
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
