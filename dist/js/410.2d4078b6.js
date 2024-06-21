"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[410],{2410:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});n(8309);var r=function(){var e=this,t=e._self._c;return t("div",[t("br"),e.recipe.title?t("div",{staticClass:"preparation-container"},[t("h1",[e._v(e._s(e.recipe.title))]),t("br"),t("div",{staticClass:"progress-bar-container"},[t("ul",{staticClass:"steps-progress"},e._l(e.steps,(function(n,r){return t("li",{key:r,class:{active:e.currentStepIndex===r,completed:e.currentStepIndex>r},on:{click:function(t){return e.goToStep(r)}}},[t("span",[e.currentStepIndex>r?[e._v("✓")]:[e._v(e._s(r+1))]],2),t("p",{class:{"current-step":e.currentStepIndex===r}},[e._v("Step "+e._s(r+1))])])})),0)]),t("div",{staticClass:"servings-selector"},[t("label",{attrs:{for:"servings"}},[e._v("Serving:")]),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.servings,expression:"servings",modifiers:{number:!0}}],attrs:{type:"number",id:"servings",min:"1"},domProps:{value:e.servings},on:{change:e.updateIngredients,input:function(t){t.target.composing||(e.servings=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"content-container"},[t("div",{staticClass:"ingredients-equipment"},[e.currentStep.ingredients.length?t("div",{staticClass:"ingredients"},[t("h3",[e._v("Ingredients:")]),t("ul",e._l(e.currentStep.ingredients,(function(n){return t("li",{key:n.id},[t("img",{staticClass:"item-image",attrs:{src:"https://spoonacular.com/cdn/ingredients_100x100/".concat(n.image),alt:"Ingredient Image"}}),t("span",[e._v(e._s(n.amount)+" "+e._s(n.unit)+" "+e._s(n.name))])])})),0)]):e._e(),e.currentStep.equipment.length?t("div",{staticClass:"equipment"},[t("h3",[e._v("Equipment:")]),t("ul",e._l(e.currentStep.equipment,(function(n){return t("li",{key:n.id},[t("img",{staticClass:"item-image",attrs:{src:"https://spoonacular.com/cdn/equipment_100x100/".concat(n.image),alt:"Equipment Image"}}),t("span",[e._v(e._s(n.name))])])})),0)]):e._e()]),t("div",{staticClass:"step-details"},[t("h3",[e._v("Step "+e._s(e.currentStep.number)+":")]),t("p",[e._v(e._s(e.currentStep.step))])]),t("div",{staticClass:"navigation-buttons"},[t("button",{attrs:{disabled:0===e.currentStepIndex},on:{click:e.prevStep}},[e._v("Prev")]),e.currentStepIndex<e.steps.length-1?t("button",{on:{click:e.nextStep}},[e._v("Next")]):t("button",{on:{click:e.completePreparation}},[e._v("Done")])])])]):t("div",[t("p",[e._v("Loading...")])])])},i=[],s=n(4452),a=n(1907),c=n(5617),u=(n(1249),n(6977),n(7658),n(7578)),p=n(4376);const o={data:function(){return{recipe:{title:"",image:"",summary:"",analyzedInstructions:[{steps:[]}],extendedIngredients:[]},servings:1,currentStepIndex:0,currentStepCompleted:!1}},created:function(){var e=this;return(0,c.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$route.params.recipeId){t.next=3;break}return t.next=3,e.fetchRecipe(e.$route.params.recipeId);case 3:case"end":return t.stop()}}),t)})))()},watch:{"$route.params.recipeId":"fetchRecipe"},methods:{fetchRecipe:function(e){var t=this;return(0,c.Z)((0,a.Z)().mark((function n(){var r;return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.cn)(e);case 3:r=n.sent,t.recipe=r.data.recipe,t.servings=t.recipe.servings,t.updateIngredients(),t.currentStepIndex=(0,p.k7)(e),t.updateProgress(),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()},nextStep:function(){this.currentStepIndex<this.steps.length-1&&(this.currentStepIndex+=1,this.currentStepCompleted=!1,this.updateProgress())},prevStep:function(){this.currentStepIndex>0&&(this.currentStepIndex-=1,this.currentStepCompleted=!1,this.updateProgress())},goToStep:function(e){this.currentStepIndex=e,this.currentStepCompleted=!1,this.updateProgress()},updateIngredients:function(){var e=this;this.recipe.extendedIngredients=this.adjustedIngredients.map((function(t){var n=t.amount/e.recipe.servings*e.servings;return(0,s.Z)((0,s.Z)({},t),{},{amount:n.toFixed(2)})}))},completePreparation:function(){(0,p.Ci)(this.recipe.id),this.currentStepIndex+=1,this.currentStepCompleted=!0,this.updateProgress(),alert("Preparation complete!"),this.$router.push({name:"meal-plan"})},updateProgress:function(){(0,p.UX)(this.recipe.id,this.currentStepIndex,this.steps.length)}},computed:{steps:function(){var e;return(null===(e=this.recipe.analyzedInstructions[0])||void 0===e?void 0:e.steps)||[]},currentStep:function(){return this.steps[this.currentStepIndex]||{}},progress:function(){return(this.currentStepIndex+1)/this.steps.length*100},adjustedIngredients:function(){var e=this;return this.recipe.extendedIngredients.map((function(t){var n=t.amount/e.recipe.servings*e.servings;return(0,s.Z)((0,s.Z)({},t),{},{amount:n.toFixed(2)})}))}}},d=o;var l=n(1001),v=(0,l.Z)(d,r,i,!1,null,"2bf8ceb0",null);const h=v.exports},3189:(e,t,n)=>{var r=n(9303),i=n(1340),s=n(4488),a=RangeError;e.exports=function(e){var t=i(s(this)),n="",c=r(e);if(c<0||c==1/0)throw a("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(t+=t))1&c&&(n+=t);return n}},6977:(e,t,n)=>{var r=n(2109),i=n(1702),s=n(9303),a=n(863),c=n(3189),u=n(7293),p=RangeError,o=String,d=Math.floor,l=i(c),v=i("".slice),h=i(1..toFixed),g=function(e,t,n){return 0===t?n:t%2===1?g(e,t-1,n*e):g(e*e,t/2,n)},m=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},f=function(e,t,n){var r=-1,i=n;while(++r<6)i+=t*e[r],e[r]=i%1e7,i=d(i/1e7)},x=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=d(r/t),r=r%t*1e7},S=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=o(e[t]);n=""===n?r:n+l("0",7-r.length)+r}return n},_=u((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!u((function(){h({})}));r({target:"Number",proto:!0,forced:_},{toFixed:function(e){var t,n,r,i,c=a(this),u=s(e),d=[0,0,0,0,0,0],h="",_="0";if(u<0||u>20)throw p("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return o(c);if(c<0&&(h="-",c=-c),c>1e-21)if(t=m(c*g(2,69,1))-69,n=t<0?c*g(2,-t,1):c/g(2,t,1),n*=4503599627370496,t=52-t,t>0){f(d,0,n),r=u;while(r>=7)f(d,1e7,0),r-=7;f(d,g(10,r,1),0),r=t-1;while(r>=23)x(d,1<<23),r-=23;x(d,1<<r),f(d,1,1),x(d,2),_=S(d)}else f(d,0,n),f(d,1<<-t,0),_=S(d)+l("0",u);return u>0?(i=_.length,_=h+(i<=u?"0."+l("0",u-i)+_:v(_,0,i-u)+"."+v(_,i-u))):_=h+_,_}})}}]);
//# sourceMappingURL=410.2d4078b6.js.map