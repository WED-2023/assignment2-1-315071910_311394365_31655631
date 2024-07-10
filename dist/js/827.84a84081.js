(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[827],{2827:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>R});var a=function(){var e=this,t=e._self._c;return t("div",[t("br"),t("h1",{staticClass:"title"},[e._v("Meal Planning")]),t("div",{staticClass:"meal-planning-container"},[e.mealRecipes.length?t("div",{staticClass:"meal-recipes"},[e._l(e.mealRecipes,(function(r,a){return t("div",{key:r.id,staticClass:"meal-recipe",class:{dragging:e.draggingIndex===a},attrs:{draggable:"true"},on:{dragstart:function(t){return e.onDragStart(a,t)},dragover:function(t){return e.onDragOver(t)},drop:function(t){return e.onDrop(a)},dragend:e.onDragEnd}},[t("div",{staticClass:"meal-recipe-content"},[t("div",{staticClass:"meal-recipe-image-container"},[t("img",{staticClass:"meal-recipe-photo",attrs:{src:r.image,alt:"Recipe Photo"}})]),t("div",{staticClass:"meal-recipe-details"},[t("div",{staticClass:"meal-recipe-header"},[t("span",{staticClass:"meal-recipe-number"},[e._v(e._s(a+1)+". "+e._s(r.title))]),t("button",{staticClass:"remove-btn",on:{click:function(t){return e.removeRecipeFromMeal(r.id)}}},[e._v("×")])]),t("span",{staticClass:"meal-recipe-time"},[t("i",{staticClass:"fas fa-clock"}),e._v(" "+e._s(r.readyInMinutes)+" Minutes")]),t("div",{staticClass:"meal-recipe-status",class:e.getStatusClass(r.status)},[t("span",[e._v(e._s(r.status))]),t("i",{class:e.getStatusIcon(r.status)})]),t("div",{staticClass:"progress-bar-container"},[t("progress-bar",{attrs:{progress:Math.floor(r.progress)}})],1),t("router-link",{staticClass:"start-preparation",attrs:{to:{name:"RecipePreparation",params:{recipeId:r.id}}}},[t("i",{staticClass:"fas fa-play-circle"}),e._v(" Start Preparation ")])],1)])])})),t("button",{staticClass:"clear-meal-btn",on:{click:e.showClearMealModal}},[e._v("Clear All Recipes From Meal Plan")])],2):t("div",{staticClass:"no-recipes"},[e._v("No recipes added to the meal plan yet.")])]),t("b-modal",{attrs:{id:"clear-meal-modal"},on:{ok:e.clearMeal},scopedSlots:e._u([{key:"modal-title",fn:function(){return[e._v("Clear Meal Plan")]},proxy:!0}])},[e._v(" Are you sure you want to clear all recipes from the meal plan? ")])],1)},s=[],n=r(5957),i=r(3144),c=r(124),o=r(8534),l=(r(1249),r(2707),r(2772),r(7327),r(1539),r(8862),r(561),function(){var e=this,t=e._self._c;return t("div",{staticClass:"progress-bar"},[t("div",{class:["progress-bar-fill",e.progressColor],style:{width:e.progress+"%"}}),t("span",{staticClass:"progress-bar-text"},[e._v(e._s(e.progress)+"%")])])}),u=[];r(9653);const p={props:{progress:{type:Number,required:!0}},computed:{progressColor:function(){return this.progress>=75?"progress-bar-high":this.progress>=50?"progress-bar-medium":"progress-bar-low"}}},d=p;var g=r(1001),f=(0,g.Z)(d,l,u,!1,null,"3c009240",null);const m=f.exports;var v=r(3099);const h={name:"MealPlanning",components:{ProgressBar:m},data:function(){return{mealRecipes:[],draggingIndex:null}},mounted:function(){var e=this;return(0,o.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRecipes();case 2:case"end":return t.stop()}}),t)})))()},methods:{getRecipes:function(){var e=this;return(0,o.Z)((0,c.Z)().mark((function t(){var r,a;return(0,c.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v._p)();case 3:r=t.sent,e.mealRecipes=r.data.meals.map((function(t){return(0,i.Z)((0,i.Z)({},t),{},{time:t.time||0,status:e.getRecipeStatusText((0,v.vn)(t.id)),progress:(0,v.kd)(t.id)||0})})),a=JSON.parse(localStorage.getItem("mealRecipesOrder")),a&&(e.mealRecipes=e.mealRecipes.sort((function(e,t){return a.indexOf(e.id)-a.indexOf(t.id)}))),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error("Error fetching meal recipes:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},removeRecipeFromMeal:function(e){this.mealRecipes=this.mealRecipes.filter((function(t){return t.id!==e})),(0,v.A_)(e);var t=this.mealRecipes.map((function(e){return e.id}));localStorage.setItem("mealRecipesOrder",JSON.stringify(t))},clearMeal:function(){for(var e=(0,n.Z)(this.mealRecipes),t=0;t<e.length;t++)this.removeRecipeFromMeal(e[t].id);localStorage.removeItem("mealRecipesOrder")},showClearMealModal:function(){this.$bvModal.show("clear-meal-modal")},onDragStart:function(e,t){this.draggingIndex=e,t.dataTransfer.effectAllowed="move"},onDragOver:function(e){e.preventDefault()},onDrop:function(e){if(e!==this.draggingIndex){var t=this.mealRecipes[this.draggingIndex];this.mealRecipes.splice(this.draggingIndex,1),this.mealRecipes.splice(e,0,t),this.draggingIndex=null;var r=this.mealRecipes.map((function(e){return e.id}));localStorage.setItem("mealRecipesOrder",JSON.stringify(r))}},onDragEnd:function(){this.draggingIndex=null},getStatusClass:function(e){switch(e){case"Wait For Processing":return"status-wait";case"In Process":return"status-process";case"Complete!":return"status-ready";default:return""}},getStatusIcon:function(e){switch(e){case"Wait For Processing":return"fas fa-clock";case"In Process":return"fas fa-spinner";case"Complete!":return"fas fa-check-circle";default:return""}},getRecipeStatusText:function(e){switch(e){case"0":return"Wait For Processing";case"1":return"In Process";case"2":return"Complete!";default:return"Wait For Processing"}}}},x=h;var I=(0,g.Z)(x,a,s,!1,null,"19f82f43",null);const R=I.exports},2261:(e,t,r)=>{"use strict";var a=r(6916),s=r(1702),n=r(1340),i=r(7066),c=r(2999),o=r(2309),l=r(30),u=r(9909).get,p=r(9441),d=r(7168),g=o("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,m=f,v=s("".charAt),h=s("".indexOf),x=s("".replace),I=s("".slice),R=function(){var e=/a/,t=/b*/g;return a(f,e,"a"),a(f,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),b=c.BROKEN_CARET,C=void 0!==/()??/.exec("")[1],y=R||C||b||p||d;y&&(m=function(e){var t,r,s,c,o,p,d,y=this,_=u(y),S=n(e),w=_.raw;if(w)return w.lastIndex=y.lastIndex,t=a(m,w,S),y.lastIndex=w.lastIndex,t;var k=_.groups,M=b&&y.sticky,E=a(i,y),O=y.source,P=0,A=S;if(M&&(E=x(E,"y",""),-1===h(E,"g")&&(E+="g"),A=I(S,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==v(S,y.lastIndex-1))&&(O="(?: "+O+")",A=" "+A,P++),r=new RegExp("^(?:"+O+")",E)),C&&(r=new RegExp("^"+O+"$(?!\\s)",E)),R&&(s=y.lastIndex),c=a(f,M?r:y,A),M?c?(c.input=I(c.input,P),c[0]=I(c[0],P),c.index=y.lastIndex,y.lastIndex+=c[0].length):y.lastIndex=0:R&&c&&(y.lastIndex=y.global?c.index+c[0].length:s),C&&c&&c.length>1&&a(g,c[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c&&k)for(c.groups=p=l(null),o=0;o<k.length;o++)d=k[o],p[d[0]]=c[d[1]];return c}),e.exports=m},7066:(e,t,r)=>{"use strict";var a=r(9670);e.exports=function(){var e=a(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2999:(e,t,r)=>{var a=r(7293),s=r(7854),n=s.RegExp,i=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=i||a((function(){return!n("a","y").sticky})),o=i||a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:o,MISSED_STICKY:c,UNSUPPORTED_Y:i}},9441:(e,t,r)=>{var a=r(7293),s=r(7854),n=s.RegExp;e.exports=a((function(){var e=n(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var a=r(7293),s=r(7854),n=s.RegExp;e.exports=a((function(){var e=n("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},4916:(e,t,r)=>{"use strict";var a=r(2109),s=r(2261);a({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},7601:(e,t,r)=>{"use strict";r(4916);var a=r(2109),s=r(6916),n=r(614),i=r(9670),c=r(1340),o=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=/./.test;a({target:"RegExp",proto:!0,forced:!o},{test:function(e){var t=i(this),r=c(e),a=t.exec;if(!n(a))return s(l,t,r);var o=s(a,t,r);return null!==o&&(i(o),!0)}})},5957:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});r(9753);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function s(e){if(Array.isArray(e))return a(e)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r(7042),r(8309),r(4916),r(7601);function i(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}r(1703),r(6647);function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return s(e)||n(e)||i(e)||c()}}}]);
//# sourceMappingURL=827.84a84081.js.map