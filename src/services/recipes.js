// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import recipe_information from "../assets/mocks/GetRecipeInformation.json";


// export function mockGetRecipesPreview(amount = 1) {
//   let recipes = [];
//   for(let i = 0; i < amount; i++){
//     recipes.push(recipe_preview);
//   }

//   return { data: { recipes: recipes } };
// }


// export function mockGetRecipesPreview(amount = 1) {
//   const recipeIds = Object.keys(recipe_preview);
//   const totalRecipes = recipeIds.length;

//   // Shuffle the array of recipe IDs
//   for (let i = recipeIds.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [recipeIds[i], recipeIds[j]] = [recipeIds[j], recipeIds[i]];
//   }

//   // If the requested amount is greater than the total number of recipes, repeat recipes
//   const selectedRecipes = [];
//   while (selectedRecipes.length < amount) {
//     const remaining = amount - selectedRecipes.length;
//     const toAdd = Math.min(remaining, totalRecipes);
//     selectedRecipes.push(
//       ...recipeIds.slice(0, toAdd).map((id) => recipe_preview[id])
//     );
//   }

//   return { data: { recipes: selectedRecipes } };
// }

export function mockGetRecipesPreview(amount = 1) {
  const recipeIds = Object.keys(recipe_preview);
  const totalRecipes = recipeIds.length;

  // Shuffle the array of recipe IDs
  const shuffledRecipeIds = recipeIds.sort(() => 0.5 - Math.random());

  // Generate the requested amount of recipes, repeating if necessary
  const selectedRecipes = Array.from({ length: amount }, (_, i) =>
    recipe_preview[shuffledRecipeIds[i % totalRecipes]]
  );

  return { data: { recipes: selectedRecipes } };
}


export function mockGetRecipeFullDetails(recipeId) {
    return { data: { recipe: recipe_full_view[recipeId] } } ;
  }
  
// Function to check if a recipe is vegan
export function mockIsRecipeVegan(recipeId) {
  if (recipe_preview[recipeId]) {
    return { data: { vegan: recipe_preview[recipeId].vegan } };
  }
  return { data: { vegan: false } }; // Default to false if recipe not found
}

// Function to check if a recipe is gluten-free
export function mockIsRecipeGlutenFree(recipeId) {
  if (recipe_preview[recipeId]) {
    return { data: { glutenFree: recipe_preview[recipeId].glutenFree } };
  }
  return { data: { glutenFree: false } }; // Default to false if recipe not found
}

// Function to check if a recipe is vegetarian
export function mockIsRecipeVegetarian(recipeId) {
  if (recipe_preview[recipeId]) {
    return { data: { vegetarian: recipe_preview[recipeId].vegetarian } };
  }
  return { data: { vegetarian: false } }; // Default to false if recipe not found
}

export function mockGetFamilyRecipes() {
  return mockGetRecipesPreview(3);
}

export function mockGetRecipeInformation(recipeId) {
  return { data: { recipe: recipe_information[recipeId] } };
}
