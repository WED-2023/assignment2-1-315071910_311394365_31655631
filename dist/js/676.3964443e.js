(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[676],{3676:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d});i(1249),i(7327),i(1539);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("Search Recipes")]),t("div",{staticClass:"content"},[t("div",{staticClass:"search-bar-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Search for recipes..."},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),t("button",{staticClass:"search-button",on:{click:e.handleSearch}},[e._v("Search")]),t("button",{staticClass:"reset-button",on:{click:e.resetSearch}},[e._v("Reset")])]),t("div",{staticClass:"filter-container"},[t("div",{staticClass:"filter-group"},[t("label",[e._v("Number of Results")]),t("div",{staticClass:"radio-group"},[t("div",{staticClass:"radio-item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.resultLimit,expression:"resultLimit"}],attrs:{type:"radio",id:"limit5",value:"5"},domProps:{checked:e._q(e.resultLimit,"5")},on:{change:function(t){e.resultLimit="5"}}}),t("label",{attrs:{for:"limit5"}},[e._v("5")])]),t("div",{staticClass:"radio-item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.resultLimit,expression:"resultLimit"}],attrs:{type:"radio",id:"limit10",value:"10"},domProps:{checked:e._q(e.resultLimit,"10")},on:{change:function(t){e.resultLimit="10"}}}),t("label",{attrs:{for:"limit10"}},[e._v("10")])]),t("div",{staticClass:"radio-item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.resultLimit,expression:"resultLimit"}],attrs:{type:"radio",id:"limit15",value:"15"},domProps:{checked:e._q(e.resultLimit,"15")},on:{change:function(t){e.resultLimit="15"}}}),t("label",{attrs:{for:"limit15"}},[e._v("15")])])])]),t("div",{staticClass:"filter-group"},[t("label",{staticClass:"filter-label",attrs:{for:"diet"}},[e._v("Diet")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedDiet,expression:"selectedDiet"}],staticClass:"dropdown",attrs:{id:"diet"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedDiet=t.target.multiple?i:i[0]}}},[t("option",{attrs:{value:""}},[e._v("All Diets")]),e._l(e.diets,(function(i){return t("option",{key:i,domProps:{value:i}},[e._v(e._s(i))])}))],2)]),t("div",{staticClass:"filter-group"},[t("label",{staticClass:"filter-label",attrs:{for:"cuisine"}},[e._v("Cuisine")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCuisine,expression:"selectedCuisine"}],staticClass:"dropdown",attrs:{id:"cuisine"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedCuisine=t.target.multiple?i:i[0]}}},[t("option",{attrs:{value:""}},[e._v("All Cuisines")]),e._l(e.cuisines,(function(i){return t("option",{key:i,domProps:{value:i}},[e._v(e._s(i))])}))],2)]),t("div",{staticClass:"filter-group"},[t("label",{staticClass:"filter-label",attrs:{for:"intolerance"}},[e._v("Intolerance")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedIntolerance,expression:"selectedIntolerance"}],staticClass:"dropdown",attrs:{id:"intolerance"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedIntolerance=t.target.multiple?i:i[0]}}},[t("option",{attrs:{value:""}},[e._v("All Intolerances")]),e._l(e.intolerances,(function(i){return t("option",{key:i,domProps:{value:i}},[e._v(e._s(i))])}))],2)])]),e.filteredRecipes.length?t("div",{staticClass:"sort-container"},[t("div",{staticClass:"filter-group"},[t("label",{staticClass:"filter-label",attrs:{for:"sortBy"}},[e._v("Sort By")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.sortBy,expression:"sortBy"}],staticClass:"dropdown sort-dropdown",attrs:{id:"sortBy"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sortBy=t.target.multiple?i:i[0]},e.handleSort]}},[t("option",{attrs:{value:""}},[e._v("None")]),t("option",{attrs:{value:"readyInMinutes"}},[e._v("Ready In Minutes")]),t("option",{attrs:{value:"aggregateLikes"}},[e._v("Likes")])])])]):e._e(),t("div",{staticClass:"results"},[e.filteredRecipes.length?t("div",{staticClass:"recipe-list"},e._l(e.filteredRecipes,(function(e){return t("RecipePreview",{key:e.id,staticClass:"recipe-preview",attrs:{recipe:e}})})),1):t("div",{staticClass:"no-results"},[t("p",[e._v("No recipes found.")])])])])])},r=[],a=(i(2479),i(3210),i(6699),i(2023),i(5212),i(7042),i(9653),i(2707),i(5906)),n=i(8098);const l={components:{RecipePreview:a.Z},data:function(){return{searchQuery:"",recipes:Object.values(n),filteredRecipes:[],resultLimit:"5",diets:["Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30"],cuisines:["Mexican","Italian","Chinese","Indian","Greek","Latine"],intolerances:["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat","butter"],selectedDiet:"",selectedCuisine:"",selectedIntolerance:"",sortBy:""}},methods:{handleSearch:function(){var e=this;""!==this.searchQuery.trim()?(this.filteredRecipes=this.recipes.filter((function(t){var i=t.title.toLowerCase().includes(e.searchQuery.toLowerCase()),s=!e.selectedDiet||t.vegetarian===("Vegetarian"===e.selectedDiet),r=!e.selectedCuisine||t.cuisine===e.selectedCuisine,a=!e.selectedIntolerance||!t.extendedIngredients.some((function(t){return t.original.includes(e.selectedIntolerance)}));return i&&s&&r&&a})),this.filteredRecipes=this.filteredRecipes.slice(0,Number(this.resultLimit)),this.handleSort()):this.filteredRecipes=[]},handleSort:function(){var e=this;this.filteredRecipes.length&&this.sortBy&&this.filteredRecipes.sort((function(t,i){return"readyInMinutes"===e.sortBy?t.readyInMinutes-i.readyInMinutes:"aggregateLikes"===e.sortBy?i.aggregateLikes-t.aggregateLikes:0}))},resetSearch:function(){this.searchQuery="",this.filteredRecipes=[],this.selectedDiet="",this.selectedCuisine="",this.selectedIntolerance="",this.sortBy="",this.resultLimit="5"}}},o=l;var c=i(1001),u=(0,c.Z)(o,s,r,!1,null,"7811eb92",null);const d=u.exports},6091:(e,t,i)=>{var s=i(6530).PROPER,r=i(7293),a=i(1361),n="​᠎";e.exports=function(e){return r((function(){return!!a[e]()||n[e]()!==n||s&&a[e].name!==e}))}},5212:(e,t,i)=>{"use strict";var s=i(2109),r=i(2092).some,a=i(9341),n=a("some");s({target:"Array",proto:!0,forced:!n},{some:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},3210:(e,t,i)=>{"use strict";var s=i(2109),r=i(3111).trim,a=i(6091);s({target:"String",proto:!0,forced:a("trim")},{trim:function(){return r(this)}})}}]);
//# sourceMappingURL=676.3964443e.js.map