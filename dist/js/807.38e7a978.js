(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[807],{7807:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e.recipe?t("div",[t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"wrapped"},[t("div",{staticClass:"info mb-3"},[t("div",{staticClass:"time-likes"},[t("div",{staticClass:"time"},[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("div",{staticClass:"likes"},[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")])])]),t("h3",[e._v("Ingredients:")]),t("ul",{staticClass:"ingredients-list"},e._l(e.recipe.extendedIngredients,(function(r,i){return t("li",{key:i+"_"+r.id},[e._v(" "+e._s(r.original)+" ")])})),0)]),t("div",{staticClass:"wrapped"},[t("h3",[e._v("Instructions:")]),t("ol",{staticClass:"instructions-list"},e._l(e.recipe._instructions,(function(r){return t("li",{key:r.number},[e._v(" "+e._s(r.step)+" ")])})),0)])])])]):e._e()])},n=[],s=r(1907),a=r(4512),c=r(5617),u=(r(5827),r(1539),r(1249),r(8309),r(2222),r(7578));const o={data:function(){return{recipe:null}},created:function(){var e=this;return(0,c.Z)((0,s.Z)().mark((function t(){var r,i,n,c,o,l,d,p,v,f,g;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{r=(0,u.iG)(e.$route.params.recipeId),i=r.data.recipe,n=i.analyzedInstructions,c=i.instructions,o=i.extendedIngredients,l=i.aggregateLikes,d=i.readyInMinutes,p=i.image,v=i.title,f=n.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat((0,a.Z)(e),(0,a.Z)(t))}),[]),g={instructions:c,_instructions:f,analyzedInstructions:n,extendedIngredients:o,aggregateLikes:l,readyInMinutes:d,image:p,title:v},e.recipe=g}catch(s){console.log(s)}case 1:case"end":return t.stop()}}),t)})))()}},l=o;var d=r(1001),p=(0,d.Z)(l,i,n,!1,null,"36d9e4e4",null);const v=p.exports},3671:(e,t,r)=>{var i=r(9662),n=r(7908),s=r(8361),a=r(6244),c=TypeError,u=function(e){return function(t,r,u,o){i(r);var l=n(t),d=s(l),p=a(l),v=e?p-1:0,f=e?-1:1;if(u<2)while(1){if(v in d){o=d[v],v+=f;break}if(v+=f,e?v<0:p<=v)throw c("Reduce of empty array with no initial value")}for(;e?v>=0:p>v;v+=f)v in d&&(o=r(o,d[v],v,l));return o}};e.exports={left:u(!1),right:u(!0)}},2222:(e,t,r)=>{"use strict";var i=r(2109),n=r(7293),s=r(3157),a=r(111),c=r(7908),u=r(6244),o=r(7207),l=r(6135),d=r(5417),p=r(1194),v=r(5112),f=r(7392),g=v("isConcatSpreadable"),_=f>=51||!n((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),h=function(e){if(!a(e))return!1;var t=e[g];return void 0!==t?!!t:s(e)},m=!_||!p("concat");i({target:"Array",proto:!0,arity:1,forced:m},{concat:function(e){var t,r,i,n,s,a=c(this),p=d(a,0),v=0;for(t=-1,i=arguments.length;t<i;t++)if(s=-1===t?a:arguments[t],h(s))for(n=u(s),o(v+n),r=0;r<n;r++,v++)r in s&&l(p,v,s[r]);else o(v+1),l(p,v++,s);return p.length=v,p}})},1249:(e,t,r)=>{"use strict";var i=r(2109),n=r(2092).map,s=r(1194),a=s("map");i({target:"Array",proto:!0,forced:!a},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5827:(e,t,r)=>{"use strict";var i=r(2109),n=r(3671).left,s=r(9341),a=r(7392),c=r(5268),u=!c&&a>79&&a<83,o=u||!s("reduce");i({target:"Array",proto:!0,forced:o},{reduce:function(e){var t=arguments.length;return n(this,e,t,t>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=807.38e7a978.js.map