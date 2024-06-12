
<template>
  <div class="container">
    <h1 class="title">My Favorite Recipes</h1>
    <div v-if="favoriteRecipes.length" class="favorites-list">
      <recipe-preview
        v-for="recipe in favoriteRecipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
    <div v-else>
      <p>No favorite recipes found.</p>
    </div>
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview.vue";

export default {
  components: {
    RecipePreview,
  },
  data() {
    return {
      favoriteRecipes: [],
    };
  },
  mounted() {
    this.fetchFavoriteRecipes();
  },
  methods: {
    fetchFavoriteRecipes() {
      const favoriteIds = this.$root.store.favorites;
      if (favoriteIds.length > 0) {
        this.axios
          .get(`${this.$root.store.server_domain}/recipes`, {
            params: { ids: favoriteIds.join(",") },
          })
          .then((response) => {
            this.favoriteRecipes = response.data;
          })
          .catch((error) => {
            console.error("Failed to fetch favorite recipes", error);
          });
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.favorites-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

p {
  font-size: 1.2rem;
  color: #777;
}
</style>
