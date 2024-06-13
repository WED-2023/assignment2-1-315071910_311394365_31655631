<template>
  <div class="container">
    <h1 class="title">Search Recipes</h1>
    <input 
      type="text" 
      v-model="searchQuery" 
      @input="handleSearch" 
      placeholder="Search for recipes..."
      class="search-input"
    />
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
</template>

<script>
import RecipePreview from "@/components/RecipePreview.vue"; 
import recipe_preview from "@/assets/mocks/recipe_preview.json";

export default {
  components: {
    RecipePreview,
  },
  data() {
    return {
      searchQuery: '',
      recipes: Object.values(recipe_preview),
      filteredRecipes: [],
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery) {
        this.filteredRecipes = this.recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredRecipes = [];
      }
    },
  },
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

.search-input {
  padding: 15px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 30px;
  font-size: 1.2em;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: block;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.search-input:focus {
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
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
  height: auto; /* Make sure the preview takes the full height of the container */
}

.recipe-preview:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.recipe-preview img {
  width: 100%;
  height: 250px; /* Adjust the height to ensure images fill the preview window */
  object-fit: cover; /* Ensures the image covers the specified height while maintaining aspect ratio */
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
</style>
