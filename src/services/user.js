// src/services/user.js
// import { all } from "core-js/fn/promise";
// import recipe_full_view from "../assets/mocks/recipe_full_view.json";
// import recipe_preview from "../assets/mocks/recipe_preview.json"; 
import recipe_information from "../assets/mocks/GetRecipeInformation.json";
import Vue from 'vue';
export const eventBus = new Vue();

let favorite_recipes = {};
let user_recipes_preview = {
  "713330": {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": true,
    "veryPopular": true,
    "sustainable": true,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 10,
    "gaps": "no",
    "preparationMinutes": 20,
    "cookingMinutes": 25,
    "aggregateLikes": 300,
    "healthScore": 90,
    "creditsText": "Healthy Meals Inc",
    "license": "CC BY-SA 3.0",
    "sourceName": "Healthy Meals Inc",
    "pricePerServing": 120.50,
    "extendedIngredients": [
        {
            "id": 1102047,
            "aisle": "Spices and Seasonings",
            "image": "salt-and-pepper.jpg",
            "consistency": "SOLID",
            "name": "salt",
            "nameClean": "table salt",
            "original": "1 tsp salt",
            "originalName": "salt",
            "amount": 1.0,
            "unit": "tsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                }
            }
        },
        {
            "id": 11215,
            "aisle": "Produce",
            "image": "garlic.png",
            "consistency": "SOLID",
            "name": "garlic",
            "nameClean": "garlic",
            "original": "3 cloves garlic, minced",
            "originalName": "garlic, minced",
            "amount": 3.0,
            "unit": "cloves",
            "meta": [
                "minced"
            ],
            "measures": {
                "us": {
                    "amount": 3.0,
                    "unitShort": "cloves",
                    "unitLong": "cloves"
                },
                "metric": {
                    "amount": 3.0,
                    "unitShort": "cloves",
                    "unitLong": "cloves"
                }
            }
        },
        {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "vegan butter",
            "nameClean": "vegan butter",
            "original": "2 tbsp vegan butter",
            "originalName": "vegan butter",
            "amount": 2.0,
            "unit": "tbsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        },
        {
            "id": 10011135,
            "aisle": "Produce",
            "image": "cauliflower.jpg",
            "consistency": "SOLID",
            "name": "cauliflower florets",
            "nameClean": "cauliflower florets",
            "original": "2 cups cauliflower florets",
            "originalName": "cauliflower florets",
            "amount": 2.0,
            "unit": "cups",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 200.0,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 16057,
            "aisle": "Pasta and Rice",
            "image": "pasta.jpg",
            "consistency": "SOLID",
            "name": "gluten-free pasta",
            "nameClean": "gluten-free pasta",
            "original": "8 ounces gluten-free pasta",
            "originalName": "gluten-free pasta",
            "amount": 8.0,
            "unit": "ounces",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 8.0,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 227.0,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 4053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consistency": "LIQUID",
            "name": "olive oil",
            "nameClean": "olive oil",
            "original": "2 tbsp olive oil",
            "originalName": "olive oil",
            "amount": 2.0,
            "unit": "tbsp",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        }
    ],
    "id": 713330,
    "title": "Gluten-Free Vegan Pasta with Garlic and Cauliflower",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "https://healthymealsinc.com/recipes/gluten-free-vegan-pasta",
    "image": "https://img.spoonacular.com/recipes/716430-556x370.jpg",
    "imageType": "jpg",
    "taste": {
        "sweetness": 50.0,
        "saltiness": 70.0,
        "sourness": 30.0,
        "bitterness": 20.0,
        "savoriness": 80.0,
        "fattiness": 60.0,
        "spiciness": 0.0
    },
    "summary": "This gluten-free vegan pasta with garlic and cauliflower is a delicious and healthy main course. One serving contains <b>400 calories</b>, <b>10g of protein</b>, and <b>15g of fat</b>. For <b>$1.20 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. A mixture of vegan butter, olive oil, gluten-free pasta, and a handful of other ingredients are all it takes to make this recipe so delicious. 300 people have tried and liked this recipe. It is brought to you by healthymealsinc.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 90%</b>, which is outstanding. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/gluten-free-vegan-pasta-1230187\">Gluten-Free Vegan Pasta</a>, <a href=\"https://spoonacular.com/recipes/gluten-free-vegan-pasta-1229807\">Gluten-Free Vegan Pasta</a>, and <a href=\"https://spoonacular.com/recipes/gluten-free-vegan-pasta-1229669\">Gluten-Free Vegan Pasta</a>.",
    "cuisines": ["Italian"],
    "dishTypes": [
        "main course",
        "dinner"
    ],
    "diets": ["gluten free", "vegan"],
    "occasions": ["weeknight dinner"],
    "winePairing": {
        "pairedWines": ["pinot grigio"],
        "pairingText": "This gluten-free vegan pasta pairs well with a light-bodied white wine like pinot grigio.",
        "productMatches": []
    },
    "instructions": "",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Cook the gluten-free pasta according to package instructions."
                },
                {
                    "number": 2,
                    "step": "While the pasta is cooking, heat the olive oil in a large pan over medium heat."
                },
                {
                    "number": 3,
                    "step": "Add the minced garlic and sauté until fragrant, about 2 minutes."
                },
                {
                    "number": 4,
                    "step": "Add the cauliflower florets to the pan and cook until tender, about 10 minutes."
                },
                {
                    "number": 5,
                    "step": "Drain the pasta and add it to the pan with the garlic and cauliflower."
                },
                {
                    "number": 6,
                    "step": "Stir in the vegan butter and season with salt to taste."
                },
                {
                    "number": 7,
                    "step": "Serve hot and enjoy your gluten-free vegan pasta!"
                }
            ]
        }
    ],
    "originalId": null,
    "spoonacularScore": 90.0,
    "spoonacularSourceUrl": "https://spoonacular.com/gluten-free-vegan-pasta-with-garlic-and-cauliflower-716430"
  }
};
// let user_full_recipes_view = {
//   "713330": {
//     "vegetarian": true,
//     "vegan": true,
//     "glutenFree": true,
//     "dairyFree": true,
//     "veryHealthy": true,
//     "cheap": true,
//     "veryPopular": true,
//     "sustainable": true,
//     "lowFodmap": false,
//     "weightWatcherSmartPoints": 10,
//     "gaps": "no",
//     "preparationMinutes": 20,
//     "cookingMinutes": 25,
//     "aggregateLikes": 300,
//     "healthScore": 90,
//     "creditsText": "Healthy Meals Inc",
//     "license": "CC BY-SA 3.0",
//     "sourceName": "Healthy Meals Inc",
//     "pricePerServing": 120.50,
//     "extendedIngredients": [
//         {
//             "id": 1102047,
//             "aisle": "Spices and Seasonings",
//             "image": "salt-and-pepper.jpg",
//             "consistency": "SOLID",
//             "name": "salt",
//             "nameClean": "table salt",
//             "original": "1 tsp salt",
//             "originalName": "salt",
//             "amount": 1.0,
//             "unit": "tsp",
//             "meta": [],
//             "measures": {
//                 "us": {
//                     "amount": 1.0,
//                     "unitShort": "tsp",
//                     "unitLong": "teaspoon"
//                 },
//                 "metric": {
//                     "amount": 1.0,
//                     "unitShort": "tsp",
//                     "unitLong": "teaspoon"
//                 }
//             }
//         },
//         {
//             "id": 11215,
//             "aisle": "Produce",
//             "image": "garlic.png",
//             "consistency": "SOLID",
//             "name": "garlic",
//             "nameClean": "garlic",
//             "original": "3 cloves garlic, minced",
//             "originalName": "garlic, minced",
//             "amount": 3.0,
//             "unit": "cloves",
//             "meta": [
//                 "minced"
//             ],
//             "measures": {
//                 "us": {
//                     "amount": 3.0,
//                     "unitShort": "cloves",
//                     "unitLong": "cloves"
//                 },
//                 "metric": {
//                     "amount": 3.0,
//                     "unitShort": "cloves",
//                     "unitLong": "cloves"
//                 }
//             }
//         },
//         {
//             "id": 1001,
//             "aisle": "Milk, Eggs, Other Dairy",
//             "image": "butter-sliced.jpg",
//             "consistency": "SOLID",
//             "name": "vegan butter",
//             "nameClean": "vegan butter",
//             "original": "2 tbsp vegan butter",
//             "originalName": "vegan butter",
//             "amount": 2.0,
//             "unit": "tbsp",
//             "meta": [],
//             "measures": {
//                 "us": {
//                     "amount": 2.0,
//                     "unitShort": "Tbsps",
//                     "unitLong": "Tbsps"
//                 },
//                 "metric": {
//                     "amount": 2.0,
//                     "unitShort": "Tbsps",
//                     "unitLong": "Tbsps"
//                 }
//             }
//         },
//         {
//             "id": 10011135,
//             "aisle": "Produce",
//             "image": "cauliflower.jpg",
//             "consistency": "SOLID",
//             "name": "cauliflower florets",
//             "nameClean": "cauliflower florets",
//             "original": "2 cups cauliflower florets",
//             "originalName": "cauliflower florets",
//             "amount": 2.0,
//             "unit": "cups",
//             "meta": [],
//             "measures": {
//                 "us": {
//                     "amount": 2.0,
//                     "unitShort": "cups",
//                     "unitLong": "cups"
//                 },
//                 "metric": {
//                     "amount": 200.0,
//                     "unitShort": "g",
//                     "unitLong": "grams"
//                 }
//             }
//         },
//         {
//             "id": 16057,
//             "aisle": "Pasta and Rice",
//             "image": "pasta.jpg",
//             "consistency": "SOLID",
//             "name": "gluten-free pasta",
//             "nameClean": "gluten-free pasta",
//             "original": "8 ounces gluten-free pasta",
//             "originalName": "gluten-free pasta",
//             "amount": 8.0,
//             "unit": "ounces",
//             "meta": [],
//             "measures": {
//                 "us": {
//                     "amount": 8.0,
//                     "unitShort": "oz",
//                     "unitLong": "ounces"
//                 },
//                 "metric": {
//                     "amount": 227.0,
//                     "unitShort": "g",
//                     "unitLong": "grams"
//                 }
//             }
//         },
//         {
//             "id": 4053,
//             "aisle": "Oil, Vinegar, Salad Dressing",
//             "image": "olive-oil.jpg",
//             "consistency": "LIQUID",
//             "name": "olive oil",
//             "nameClean": "olive oil",
//             "original": "2 tbsp olive oil",
//             "originalName": "olive oil",
//             "amount": 2.0,
//             "unit": "tbsp",
//             "meta": [],
//             "measures": {
//                 "us": {
//                     "amount": 2.0,
//                     "unitShort": "Tbsps",
//                     "unitLong": "Tbsps"
//                 },
//                 "metric": {
//                     "amount": 2.0,
//                     "unitShort": "Tbsps",
//                     "unitLong": "Tbsps"
//                 }
//             }
//         }
//     ],
//     "id": 716430,
//     "title": "Gluten-Free Vegan Pasta with Garlic and Cauliflower",
//     "readyInMinutes": 45,
//     "servings": 4,
//     "sourceUrl": "https://healthymealsinc.com/recipes/gluten-free-vegan-pasta",
//     "image": "https://img.spoonacular.com/recipes/716430-556x370.jpg",
//     "imageType": "jpg",
//     "taste": {
//         "sweetness": 50.0,
//         "saltiness": 70.0,
//         "sourness": 30.0,
//         "bitterness": 20.0,
//         "savoriness": 80.0,
//         "fattiness": 60.0,
//         "spiciness": 0.0
//     },
//     "summary": "This gluten-free vegan pasta with garlic and cauliflower is a delicious and healthy main course. One serving contains <b>400 calories</b>, <b>10g of protein</b>, and <b>15g of fat</b>. For <b>$1.20 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. A mixture of vegan butter, olive oil, gluten-free pasta, and a handful of other ingredients are all it takes to make this recipe so delicious. 300 people have tried and liked this recipe. It is brought to you by healthymealsinc.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 90%</b>, which is outstanding. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/gluten-free-vegan-pasta-1230187\">Gluten-Free Vegan Pasta</a>, <a href=\"https://spoonacular.com/recipes/gluten-free-vegan-pasta-1229807\">Gluten-Free Vegan Pasta</a>, and <a href=\"https://spoonacular.com/recipes/gluten-free-vegan-pasta-1229669\">Gluten-Free Vegan Pasta</a>.",
//     "cuisines": ["Italian"],
//     "dishTypes": [
//         "main course",
//         "dinner"
//     ],
//     "diets": ["gluten free", "vegan"],
//     "occasions": ["weeknight dinner"],
//     "winePairing": {
//         "pairedWines": ["pinot grigio"],
//         "pairingText": "This gluten-free vegan pasta pairs well with a light-bodied white wine like pinot grigio.",
//         "productMatches": []
//     },
//     "instructions": "",
//     "analyzedInstructions": [
//         {
//             "name": "",
//             "steps": [
//                 {
//                     "number": 1,
//                     "step": "Cook the gluten-free pasta according to package instructions."
//                 },
//                 {
//                     "number": 2,
//                     "step": "While the pasta is cooking, heat the olive oil in a large pan over medium heat."
//                 },
//                 {
//                     "number": 3,
//                     "step": "Add the minced garlic and sauté until fragrant, about 2 minutes."
//                 },
//                 {
//                     "number": 4,
//                     "step": "Add the cauliflower florets to the pan and cook until tender, about 10 minutes."
//                 },
//                 {
//                     "number": 5,
//                     "step": "Drain the pasta and add it to the pan with the garlic and cauliflower."
//                 },
//                 {
//                     "number": 6,
//                     "step": "Stir in the vegan butter and season with salt to taste."
//                 },
//                 {
//                     "number": 7,
//                     "step": "Serve hot and enjoy your gluten-free vegan pasta!"
//                 }
//             ]
//         }
//     ],
//     "originalId": null,
//     "spoonacularScore": 90.0,
//     "spoonacularSourceUrl": "https://spoonacular.com/gluten-free-vegan-pasta-with-garlic-and-cauliflower-716430"
//   }

// };
// let recipe_preperation_progress = {};
let user_meal_recipes = {};
let user_proccess_recipe = {}
let user_completed_recipe = []
let user_current_step = {};

export function mockGetProgressInRecipe(recipeId) {
  return user_proccess_recipe[recipeId] || 0;
}

export function mockSetStepInRecipe(recipeId, currentStepIndex, totalSteps) {
  const progress = (currentStepIndex / totalSteps) * 100;
  user_proccess_recipe[recipeId] = progress;
  user_current_step[recipeId] = currentStepIndex; // Save the current step index
}

export function mockRecipePreparationComplete(recipeId) {
  delete user_proccess_recipe[recipeId];
  delete user_current_step[recipeId];  // Clear the current step index
  user_completed_recipe.push(recipeId);
}

export function mockGetRecipeStatus(recipeId) {
  if (user_completed_recipe.includes(recipeId)) {
    return "2"; // "Dish is ready"
  } else if (user_proccess_recipe[recipeId] !== undefined) {
    return "1"; // "in process"
  } else {
    return "0"; // "wait for processing"
  }
}

export function mockGetCurrentStep(recipeId) {
  return user_current_step[recipeId] || 0; // Return the current step index, default to 0
}


  // export function mockAddFavorite(recipeId) {
  //   return { status: 200, response: { data: { message: "The Recipe successfully saved as favorite", success: true}} };
  // }

  export function mockAddFavorite(recipeId) {
    if(recipe_information[recipeId]){
      favorite_recipes[recipeId] = recipe_information[recipeId];
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
    return recipe_information.hasOwnProperty(recipeId);
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
  let all_recipes = { ...recipe_information, ...user_recipes_preview };
  return { data: { recipes: all_recipes } };
}

  // export function mockPrintUserFullRecipesView() {
  //   console.log(user_recipes_preview);
  // }

  export function mockAddRecipeToMealList(recipeId) {
    user_meal_recipes[recipeId] = recipe_information[recipeId];
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

  // export function mockGetUserRecipeFullDetails(recipeId){
  //   return { data: { recipe: user_full_recipes_view[recipeId] } } ;
  // }

  export function mockGetUserFullRecipeView(recipeId) {
    if (user_recipes_preview[recipeId]) {
      return { data: { recipe: user_recipes_preview[recipeId] }};
    } else if (recipe_information[recipeId]) {
      return { data: { recipe: recipe_information[recipeId] }};
    } else {
      return { data: { recipe: null }};
    }
  }

let watched_recipes = JSON.parse(localStorage.getItem('watched_recipes')) || {};

export function mockAddWatchedRecipe(recipeId) {
  if (recipe_preview[recipeId]) {
    watched_recipes[recipeId] = recipe_preview[recipeId];
  } else {
    watched_recipes[recipeId] = user_recipes_preview[recipeId];
  }
  localStorage.setItem('watched_recipes', JSON.stringify(watched_recipes));
  console.log('Added to watched:', watched_recipes);
  eventBus.$emit('recipe-watched', recipeId); // Emit the event when a recipe is watched
}

export function mockIsRecipeWatched(recipeId) {
  console.log('Checking if watched:', recipeId, recipeId in watched_recipes);
  return { data: { watched: recipeId in watched_recipes } };
}

export function mockGetWatchedRecipes() {
  const watchedRecipeIds = Object.values(watched_recipes);
  console.log('Getting watched recipes:', watchedRecipeIds);
  return { data: { recipes: watchedRecipeIds } };
}

export function mockClearWatchedRecipes() {
  watched_recipes = {};
  localStorage.removeItem('watched_recipes');
  console.log('Cleared watched recipes');
  eventBus.$emit('watched-recipes-cleared'); // Emit event to notify about clearing
}
export function mockUserLogout() {
  // Clear user-specific data
  mockClearWatchedRecipes();
  // Any other logout operations...
}
// Other existing functions...
  