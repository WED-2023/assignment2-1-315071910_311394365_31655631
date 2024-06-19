// src/services/user.js
// import { all } from "core-js/fn/promise";
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json"; 
let favorite_recipes = {};
let user_recipes_preview = {};
let user_full_recipes_view = {};
let recipe_preperation_progress = {};
let user_meal_recipes = {};



  // export function mockAddFavorite(recipeId) {
  //   return { status: 200, response: { data: { message: "The Recipe successfully saved as favorite", success: true}} };
  // }

  export function mockAddFavorite(recipeId) {
    if(recipe_preview[recipeId]){
      favorite_recipes[recipeId] = recipe_preview[recipeId];
    }
    else{
      favorite_recipes[recipeId] = user_recipes_preview[recipeId];
    }
    // if (!favorite_recipes[recipeId]) {
    //   favorite_recipes[recipeId] = recipe_preview[recipeId];
    //   return { status: 200, response: { data: { message: "The Recipe successfully saved as favorite", success: true}} };
    // } else {
    //   return { status: 400, response: { data: { message: "The Recipe is already saved as favorite", success: false}} };
    // }
  }

  export function mockRemoveFavorite(recipeId) {
    delete favorite_recipes[recipeId];
    // if (favorite_recipes[recipeId]) {
    //   delete favorite_recipes[recipeId];
    //   return { status: 200, response: { data: { message: "The Recipe successfully removed from favorites", success: true}} };
    // } else {
    //   return { status: 400, response: { data: { message: "The Recipe is not saved as favorite", success: false}} };
    // }
  }

  export function mockIsRecipeMarkAsFavorite(recipeId) {
    return { data: { favorite: recipeId in favorite_recipes}}
  }
  
  // export function mockGetFavoriteRecipes() {
  //   const favoriteRecipeIds = Object.keys(favorite_recipes);
  //   const favoriteRecipes = favoriteRecipeIds.map(recipeId => {
  //     // Assuming you have a list of all recipes somewhere and you can find them by ID
  //     const foundRecipe = allRecipes.find(recipe => recipe.id === recipeId);
  //     return foundRecipe;
  //   });
  
  //   return { status: 200, response: { data: favoriteRecipes } };
  // }

  export function mockGetFavoriteRecipes() {
    const favoriteRecipeIds = Object.values(favorite_recipes);
    return { data: { recipes: favoriteRecipeIds } };
  }
  
  // export function mockGetFavoriteRecipes() {
  //   let recipes = [];
  //   for (let key in favorite_recipes) {
  //     recipes.push(favorite_recipes[key]);
  //   }
  
  //   return { data: { recipes: recipes } };
  // }
  
  export function mockAddUserRecipe(recipeDetails) {
    return { status: 200, response: { data: { message: "The Recipe successfully added to My Recipes", success: true}} };

  }

  export function mockCheckIfIdNumberExist(recipeId) {
    return recipe_preview.hasOwnProperty(recipeId);
  }

  export function mockAddRecipeViewToUserList(recipe) {
    user_recipes_preview[recipe.id] = recipe;
    return { status: 200, message: "Recipe view successfully added" };
  }
  
  export function mockAddRecipeFullViewToUserList(recipeId, fullRecipe) {
    user_full_recipes_view[recipeId] = fullRecipe;
    return { status: 200, message: "Full recipe successfully added" };
  }

  export function mockGetUserRecipes() {
    const userRecipeIds = Object.values(user_recipes_preview);
    return { data: { recipes: userRecipeIds } };
  }

export function mockGetAllRecipies() {
  let all_recipes = { ...recipe_preview, ...user_recipes_preview };
  return { data: { recipes: all_recipes } };
}

  // export function mockPrintUserFullRecipesView() {
  //   console.log(user_recipes_preview);
  // }

  export function mockAddRecipeToMealList(recipeId) {
    user_meal_recipes[recipeId] = recipe_preview[recipeId];
    return { status: 200, message: "Recipe view successfully added" };
  }

  export function mockGetMealRecipes() {
    const mealRecipeIds = Object.values(user_meal_recipes);
    return { data: { meals: mealRecipeIds } };
  }
  
  export function mockRemoveRecipeFromMeal(recipeId) {
    delete user_meal_recipes[recipeId];
  }

  export function mockIsRecipeInMyMeal(recipeId) {
    return { data: { meal: recipeId in user_meal_recipes}}
  }
  