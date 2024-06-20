<template>
  <div>
    <br>
    <h1 class="title">My Recipes</h1>
    <div class="recipes-container">
      <!-- If there are recipes, display them in a grid -->
      <div v-if="recipes.length" class="recipes-grid">
        <RecipePreview v-for="r in recipes" :key="r.id" :recipe="r" />
      </div>
      <!-- If there are no recipes, display a message -->
      <div v-else class="no-recipes">You have no recipes yet.</div>
    </div>
  </div>
</template>
<script>
import RecipePreview from "../components/RecipePreview"; // Import the RecipePreview component
import { mockGetUserRecipes } from "../services/user"; // Import the mock service to get user recipes

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview, // Register the RecipePreview component
  },
  data() {
    return {
      recipes: [], // Initialize an empty array for storing user recipes
    };
  },
  mounted() {
    this.updateRecipes(); // Call updateRecipes when the component is mounted
  },
  methods: {
    // Method to fetch user recipes and update the recipes array
    async updateRecipes() {
      try {
        const response = await mockGetUserRecipes(); // Fetch the user recipes
        this.recipes = response.data.recipes; // Update the recipes array with the fetched data
      } catch (error) {
        console.error("Error fetching user recipes:", error); // Log any errors to the console
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');

/* Container for the user recipes section */
.recipes-container {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  max-width: 1200px;
  margin: auto;
}

/* Title styling */
.title {
  font-size: 72px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  color: #54472e; /* Stone-like grey with light orange */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(224, 149, 9, 0.7); /* Shadow and orange glow */
  margin-bottom: 30px;
  text-align: center;
}

/* Grid styling for the user recipes */
.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
}

/* Styling for individual recipe previews */
.recipe-preview {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 300px;
}

/* Image styling within recipe previews */
.recipe-preview img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
}

/* Hover effect for recipe previews */
.recipe-preview:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Information section within recipe previews */
.recipe-preview .recipe-info {
  padding: 15px;
}

/* Title styling within recipe previews */
.recipe-preview .recipe-info h3 {
  font-size: 1.5em;
  margin: 0;
  color: #343a40;
}

/* Details section within recipe previews */
.recipe-preview .recipe-info .details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

/* Detail items styling */
.recipe-preview .recipe-info .details span {
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #777;
}

/* Icon styling within detail items */
.recipe-preview .recipe-info .details span i {
  margin-right: 5px;
}

/* Message displayed when there are no user recipes */
.no-recipes {
  font-size: 1.2em;
  color: #888;
  text-align: center;
  margin-top: 20px;
}

/* Responsive styling for smaller screens */
@media (max-width: 768px) {
  .title {
    font-size: 2em;
  }

  .recipe-preview {
    margin: 10px;
  }
}
</style>
