<template>
  <div class="recipes-container">
    <h1 class="title">My Recipes</h1>
    <div class="recipes-grid">
      <RecipePreview v-for="r in recipes" :key="r.id" :recipe="r" />
    </div>
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview";
import { mockGetUserRecipes } from "../services/user";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await mockGetUserRecipes();
        this.recipes = response.data.recipes;
      } catch (error) {
        console.error("Error fetching user recipes:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.recipes-container {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  max-width: 1200px;
  margin: auto;
}

.title {
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #343a40;
  text-align: center;
  font-weight: 700;
}

.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
}

.recipe-preview {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 300px;
}

.recipe-preview img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
}

.recipe-preview:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.recipe-preview .recipe-info {
  padding: 15px;
}

.recipe-preview .recipe-info h3 {
  font-size: 1.5em;
  margin: 0;
  color: #343a40;
}

.recipe-preview .recipe-info .details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.recipe-preview .recipe-info .details span {
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #777;
}

.recipe-preview .recipe-info .details span i {
  margin-right: 5px;
}

@media (max-width: 768px) {
  .title {
    font-size: 2em;
  }

  .recipe-preview {
    margin: 10px;
  }
}
</style>
