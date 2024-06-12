<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="info mb-3">
              <div class="time-likes">
                <div class="time">Ready in {{ recipe.readyInMinutes }} minutes</div>
                <div class="likes">Likes: {{ recipe.aggregateLikes }} likes</div>
              </div>
            </div>
            <h3>Ingredients:</h3>
            <ul class="ingredients-list">
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            <h3>Instructions:</h3>
            <ol class="instructions-list">
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      response = mockGetRecipeFullDetails(this.$route.params.recipeId);

      let {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      } = response.data.recipe;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.recipe-header {
  text-align: center;
  margin-bottom: 30px;
}

.recipe-header h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: #333;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

.center {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.recipe-body {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.wrapped {
  flex: 1;
  min-width: 48%;
  background: linear-gradient(135deg, #ffffff, #f9f9f9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.wrapped:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.info {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #555;
}

.time-likes {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.time, .likes {
  background-color: #f0f0f0;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  color: #444;
}

.ingredients-list, .instructions-list {
  padding-left: 20px;
}

.ingredients-list li, .instructions-list li {
  margin-bottom: 12px;
  font-size: 1.1em;
  line-height: 1.5;
  color: #666;
}

h3 {
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #444;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
}
</style>
