(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[678],{6678:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});r(8309);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-page"},[e.recipe?t("div",{staticClass:"recipe-content"},[t("div",{staticClass:"recipe-header"},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}}),t("div",{staticClass:"recipe-info-header"},[t("h1",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),t("hr",{staticClass:"title-divider"}),t("div",{staticClass:"recipe-meta"},[t("div",{staticClass:"dietary-buttons"},[e.recipe.glutenFree?t("div",{staticClass:"dietary-item"},[t("img",{staticClass:"dietary-icon",attrs:{src:"https://github.com/WED-2023/assignment2-1-315071910_311394365_31655631/blob/main/photos/gluten-free2.png?raw=true",alt:"Gluten-Free"}}),t("span",[e._v("Gluten-Free")])]):e._e(),e.recipe.vegetarian?t("div",{staticClass:"dietary-item"},[t("img",{staticClass:"dietary-icon",attrs:{src:"https://github.com/WED-2023/assignment2-1-315071910_311394365_31655631/blob/main/photos/vegetable.png?raw=true",alt:"Vegetarian"}}),t("span",[e._v("Vegetarian")])]):e._e(),e.recipe.vegan?t("div",{staticClass:"dietary-item"},[t("img",{staticClass:"dietary-icon",attrs:{src:"https://github.com/WED-2023/assignment2-1-315071910_311394365_31655631/blob/main/photos/vegan.png?raw=true",alt:"Vegan"}}),t("span",[e._v("Vegan")])]):e._e()]),t("div",{staticClass:"time-likes"},[t("div",{staticClass:"item time"},[t("i",{staticClass:"fas fa-clock"}),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes ")]),t("div",{staticClass:"item likes"},[t("i",{staticClass:"fas fa-thumbs-up"}),e._v(" "+e._s(e.recipe.popularity)+" likes ")]),t("div",{staticClass:"item servings"},[t("i",{staticClass:"fas fa-utensils"}),e._v(" "+e._s(e.recipe.servings)+" servings ")])]),e.$root.store.username?t("button",{staticClass:"favorite-btn",attrs:{"aria-label":"Toggle favorite"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.toggleFavorite.apply(null,arguments)}}},[t("i",{class:this.favorite?"fas fa-heart active":"far fa-heart"}),e._v(" "+e._s(e.favorite?"Remove from My Favorite":"Add to My Favorite")+" ")]):e._e()])])]),t("div",{staticClass:"recipe-details"},[t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"ingredients"},[t("h3",[e._v("Ingredients")]),t("hr",{staticClass:"title-divider"}),t("ul",e._l(e.recipe.ingredients,(function(r,a){return t("li",{key:a},[e._v(" "+e._s(r.amount)+" "+e._s(r.name)+" ")])})),0)]),t("div",{staticClass:"instructions"},[t("h3",[e._v("Instructions")]),t("hr",{staticClass:"title-divider"}),t("ol",e._l(e.recipe.instructions,(function(r,a){return t("li",{key:a},[e._v(" "+e._s(r.step)+" ")])})),0)])])]),t("div",{staticClass:"recipe-actions"},[e.$root.store.username?t("button",{class:["add-to-meal",{added:e.addedToMeal}],on:{click:e.addToMeal}},[t("i",{class:[e.addedToMeal?"fas fa-check":"fas fa-plus-circle"]}),e._v(" "+e._s(e.addedToMeal?"Added to Meal Plan":"Add to Meal Plan")+" ")]):e._e(),e.$root.store.username?t("button",{staticClass:"start-preparation",on:{click:e.startPreparation}},[t("i",{staticClass:"fas fa-play-circle"}),e._v(" Start Preparation ")]):e._e()])]):e._e()])},n=[],i=r(124),s=r(8534),c=(r(3161),r(9653),r(1058),r(2222),r(4916),r(5306),r(1249),r(7658),r(9669)),o=r.n(c),l=r(3099);const u={data:function(){return{recipe:null,favorite:!1,addedToMeal:!1}},created:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r,a,n,s,c,u,d,p,v,f,g,h,x,m,b,_,C;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,a=e.$route.params.recipeId,console.log("Fetching recipe with ID:",a),o().defaults.withCredentials=!0,n={headers:{"Cache-Control":"no-cache",Pragma:"no-cache",Expires:"0"}},!Number.isInteger(parseInt(a))){t.next=11;break}return t.next=8,o().get("".concat(e.$root.store.server_domain,"/recipes/").concat(a),n);case 8:r=t.sent,t.next=14;break;case 11:return t.next=13,o().get("".concat(e.$root.store.server_domain,"/users/my_recipes/").concat(a),n);case 13:r=t.sent;case 14:if(console.log("Response status:",r.status),200===r.status||304===r.status){t.next=18;break}return e.$router.replace("/NotFound"),t.abrupt("return");case 18:return s=304===r.status?e.recipe:r.data,console.log("Fetched recipe data:",s),c=s.title,u=s.readyInMinutes,d=s.image,p=s.popularity,v=s.vegan,f=s.vegetarian,g=s.glutenFree,h=s.ingredients,x=s.instructions,m=s.servings,b=s.isFavorite,_=s.inMyMeal,C=x.length>0&&x[0].steps?x[0].steps.map((function(e){return{number:e.number,step:e.step}})):[],e.recipe={title:c,readyInMinutes:u,image:d,popularity:p,vegan:v,vegetarian:f,glutenFree:g,ingredients:h,instructions:C,servings:m,isFavorite:b,id:a,inMyMeal:_},e.favorite=b,t.next=26,e.checkIfRecipeInMeal();case 26:(0,l.Wp)(e.recipe.id),o().defaults.withCredentials=!1,t.next=34;break;case 30:t.prev=30,t.t0=t["catch"](0),console.error("Error fetching recipe:",t.t0),e.$router.replace("/NotFound");case 34:case"end":return t.stop()}}),t,null,[[0,30]])})))()},methods:{checkIfRecipeInMeal:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.addedToMeal=e.recipe.inMyMeal;case 1:case"end":return t.stop()}}),t)})))()},toggleFavorite:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o().defaults.withCredentials=!0,e.favorite=!e.favorite,r="".concat(e.$root.store.server_domain,"/users/favorites"),t.prev=3,!e.favorite){t.next=9;break}return t.next=7,o().post(r,{recipeId:e.recipe.id});case 7:t.next=11;break;case 9:return t.next=11,o()["delete"](r,{data:{recipeId:e.recipe.id}});case 11:t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](3),e.favorite=!e.favorite,console.error("Error toggling favorite:",t.t0);case 17:return t.prev=17,o().defaults.withCredentials=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[3,13,17,20]])})))()},addToMeal:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.addedToMeal=!e.addedToMeal,r="".concat(e.$root.store.server_domain,"/users/meal_plan"),o().defaults.withCredentials=!0,t.prev=3,!e.addedToMeal){t.next=9;break}return t.next=7,o().post(r,{recipeId:e.recipe.id});case 7:t.next=11;break;case 9:return t.next=11,o()["delete"](r,{data:{recipeId:String(e.recipe.id)}});case 11:t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](3),e.addedToMeal=!e.addedToMeal,console.error("Error updating meal plan:",t.t0);case 17:return t.prev=17,o().defaults.withCredentials=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[3,13,17,20]])})))()},startPreparation:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.addedToMeal){t.next=3;break}return t.next=3,e.addToMeal();case 3:e.$router.push({name:"RecipePreparation",params:{recipeId:e.recipe.id}});case 4:case"end":return t.stop()}}),t)})))()}}},d=u;var p=r(1001),v=(0,p.Z)(d,a,n,!1,null,"d0574e52",null);const f=v.exports},1530:(e,t,r)=>{"use strict";var a=r(8710).charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},7007:(e,t,r)=>{"use strict";r(4916);var a=r(1470),n=r(8052),i=r(2261),s=r(7293),c=r(5112),o=r(8880),l=c("species"),u=RegExp.prototype;e.exports=function(e,t,r,d){var p=c(e),v=!s((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),f=v&&!s((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!v||!f||r){var g=a(/./[p]),h=t(p,""[e],(function(e,t,r,n,s){var c=a(e),o=t.exec;return o===i||o===u.exec?v&&!s?{done:!0,value:g(t,r,n)}:{done:!0,value:c(r,t,n)}:{done:!1}}));n(String.prototype,e,h[0]),n(u,p,h[1])}d&&o(u[p],"sham",!0)}},647:(e,t,r)=>{var a=r(1702),n=r(7908),i=Math.floor,s=a("".charAt),c=a("".replace),o=a("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,a,d,p){var v=r+e.length,f=a.length,g=u;return void 0!==d&&(d=n(d),g=l),c(p,g,(function(n,c){var l;switch(s(c,0)){case"$":return"$";case"&":return e;case"`":return o(t,0,r);case"'":return o(t,v);case"<":l=d[o(c,1,-1)];break;default:var u=+c;if(0===u)return n;if(u>f){var p=i(u/10);return 0===p?n:p<=f?void 0===a[p-1]?s(c,1):a[p-1]+s(c,1):n}l=a[u-1]}return void 0===l?"":l}))}},5988:(e,t,r)=>{var a=r(111),n=Math.floor;e.exports=Number.isInteger||function(e){return!a(e)&&isFinite(e)&&n(e)===e}},3009:(e,t,r)=>{var a=r(7854),n=r(7293),i=r(1702),s=r(1340),c=r(3111).trim,o=r(1361),l=a.parseInt,u=a.Symbol,d=u&&u.iterator,p=/^[+-]?0x/i,v=i(p.exec),f=8!==l(o+"08")||22!==l(o+"0x16")||d&&!n((function(){l(Object(d))}));e.exports=f?function(e,t){var r=c(s(e));return l(r,t>>>0||(v(p,r)?16:10))}:l},7651:(e,t,r)=>{var a=r(6916),n=r(9670),i=r(614),s=r(4326),c=r(2261),o=TypeError;e.exports=function(e,t){var r=e.exec;if(i(r)){var l=a(r,e,t);return null!==l&&n(l),l}if("RegExp"===s(e))return a(c,e,t);throw o("RegExp#exec called on incompatible receiver")}},2261:(e,t,r)=>{"use strict";var a=r(6916),n=r(1702),i=r(1340),s=r(7066),c=r(2999),o=r(2309),l=r(30),u=r(9909).get,d=r(9441),p=r(7168),v=o("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,g=f,h=n("".charAt),x=n("".indexOf),m=n("".replace),b=n("".slice),_=function(){var e=/a/,t=/b*/g;return a(f,e,"a"),a(f,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),C=c.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],y=_||I||C||d||p;y&&(g=function(e){var t,r,n,c,o,d,p,y=this,k=u(y),M=i(e),w=k.raw;if(w)return w.lastIndex=y.lastIndex,t=a(g,w,M),y.lastIndex=w.lastIndex,t;var $=k.groups,E=C&&y.sticky,R=a(s,y),T=y.source,F=0,Z=M;if(E&&(R=m(R,"y",""),-1===x(R,"g")&&(R+="g"),Z=b(M,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==h(M,y.lastIndex-1))&&(T="(?: "+T+")",Z=" "+Z,F++),r=new RegExp("^(?:"+T+")",R)),I&&(r=new RegExp("^"+T+"$(?!\\s)",R)),_&&(n=y.lastIndex),c=a(f,E?r:y,Z),E?c?(c.input=b(c.input,F),c[0]=b(c[0],F),c.index=y.lastIndex,y.lastIndex+=c[0].length):y.lastIndex=0:_&&c&&(y.lastIndex=y.global?c.index+c[0].length:n),I&&c&&c.length>1&&a(v,c[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c&&$)for(c.groups=d=l(null),o=0;o<$.length;o++)p=$[o],d[p[0]]=c[p[1]];return c}),e.exports=g},7066:(e,t,r)=>{"use strict";var a=r(9670);e.exports=function(){var e=a(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2999:(e,t,r)=>{var a=r(7293),n=r(7854),i=n.RegExp,s=a((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=s||a((function(){return!i("a","y").sticky})),o=s||a((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:o,MISSED_STICKY:c,UNSUPPORTED_Y:s}},9441:(e,t,r)=>{var a=r(7293),n=r(7854),i=n.RegExp;e.exports=a((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var a=r(7293),n=r(7854),i=n.RegExp;e.exports=a((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},3161:(e,t,r)=>{var a=r(2109),n=r(5988);a({target:"Number",stat:!0},{isInteger:n})},1058:(e,t,r)=>{var a=r(2109),n=r(3009);a({global:!0,forced:parseInt!=n},{parseInt:n})},4916:(e,t,r)=>{"use strict";var a=r(2109),n=r(2261);a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},5306:(e,t,r)=>{"use strict";var a=r(2104),n=r(6916),i=r(1702),s=r(7007),c=r(7293),o=r(9670),l=r(614),u=r(8554),d=r(9303),p=r(7466),v=r(1340),f=r(4488),g=r(1530),h=r(8173),x=r(647),m=r(7651),b=r(5112),_=b("replace"),C=Math.max,I=Math.min,y=i([].concat),k=i([].push),M=i("".indexOf),w=i("".slice),$=function(e){return void 0===e?e:String(e)},E=function(){return"$0"==="a".replace(/./,"$0")}(),R=function(){return!!/./[_]&&""===/./[_]("a","$0")}(),T=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,r){var i=R?"$":"$0";return[function(e,r){var a=f(this),i=u(e)?void 0:h(e,_);return i?n(i,e,a,r):n(t,v(a),e,r)},function(e,n){var s=o(this),c=v(e);if("string"==typeof n&&-1===M(n,i)&&-1===M(n,"$<")){var u=r(t,s,c,n);if(u.done)return u.value}var f=l(n);f||(n=v(n));var h=s.global;if(h){var b=s.unicode;s.lastIndex=0}var _=[];while(1){var E=m(s,c);if(null===E)break;if(k(_,E),!h)break;var R=v(E[0]);""===R&&(s.lastIndex=g(c,p(s.lastIndex),b))}for(var T="",F=0,Z=0;Z<_.length;Z++){E=_[Z];for(var S=v(E[0]),A=C(I(d(E.index),c.length),0),P=[],N=1;N<E.length;N++)k(P,$(E[N]));var D=E.groups;if(f){var O=y([S],P,A,c);void 0!==D&&k(O,D);var V=v(a(n,void 0,O))}else V=x(S,c,A,P,D,n);A>=F&&(T+=w(c,F,A)+V,F=A+S.length)}return T+w(c,F)}]}),!T||!E||R)}}]);
//# sourceMappingURL=678.fbf9ff50.js.map