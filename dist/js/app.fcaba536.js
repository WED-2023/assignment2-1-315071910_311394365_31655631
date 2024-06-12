(()=>{"use strict";var e={9138:(e,t,a)=>{a.d(t,{Z:()=>d});var r=function(){var e=this,t=e._self._c;return t("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[t("div",{staticClass:"recipe-body"},[e.image_load?t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image},on:{load:e.onImageLoad,error:e.onImageError}}):e._e(),e.$root.store.username?t("div",{staticClass:"favorite-icon-container"},[t("i",{class:e.favorite?"fas fa-heart favorite-icon active":"far fa-heart favorite-icon",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.toggleFavorite.apply(null,arguments)}}})]):e._e()]),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),t("ul",{staticClass:"recipe-overview"},[t("li",[t("img",{staticClass:"icon",attrs:{src:"https://banner2.cleanpng.com/20180604/kwx/kisspng-computer-icons-time-attendance-clocks-font-aweso-clock-icon-5b14c6364f6622.2216713915280881183252.jpg",alt:"Time"}}),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes ")]),t("li",[t("img",{staticClass:"icon_like",attrs:{src:"https://w7.pngwing.com/pngs/116/409/png-transparent-social-media-computer-icons-like-button-thumb-signal-social-networking-service-like-rectangle-social-media-marketing-black-thumbnail.png",alt:"Likes"}}),e._v(" "+e._s(e.recipe.aggregateLikes)+" likes ")])])])])},i=[],n=a(9567),s=a(5617),o=(a(1539),a(4376));const c={data:function(){return{image_load:!1,favorite:!1}},props:{recipe:{type:Object,required:!0}},mounted:function(){var e=this;return(0,s.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.isRecipeMarkAsFavorite();case 2:return t.next=4,e.loadRecipeImage();case 4:case"end":return t.stop()}}),t)})))()},methods:{loadRecipeImage:function(){var e=this;return(0,s.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(t,a){var r=new Image;r.src=e.recipe.image,r.onload=function(){e.image_load=!0,t()},r.onerror=function(){e.image_load=!1,console.error("Image failed to load: "+e.recipe.image),a()}}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.error("Error loading image:",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},isRecipeMarkAsFavorite:function(){var e=this;return(0,s.Z)((0,n.Z)().mark((function t(){var a;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=(0,o.qZ)(e.recipe.id),e.favorite=a.data.favorite;case 2:case"end":return t.stop()}}),t)})))()},onImageLoad:function(){this.image_load=!0},onImageError:function(){console.error("Image failed to load: "+this.recipe.image),this.image_load=!1},toggleFavorite:function(){this.favorite=!this.favorite,this.favorite?(0,o.pZ)(this.recipe.id):(0,o.VZ)(this.recipe.id)}}},l=c;var u=a(1001),p=(0,u.Z)(l,r,i,!1,null,"0faf28c5",null);const d=p.exports},7151:(e,t,a)=>{a(6992),a(8674),a(9601),a(7727),a(9554),a(1539),a(4747);var r=a(144),i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"background",attrs:{id:"app"}},[t("b-navbar",{staticClass:"navbar-custom",attrs:{toggleable:"lg",type:"dark"}},[t("b-navbar-brand",{attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:{name:"search"},exact:""}},[e._v("Search")]),t("b-nav-item",{attrs:{to:{name:"about"},exact:""}},[e._v("About")])],1),t("b-navbar-nav",{staticClass:"ml-auto"},[e.$root.store.username?[t("div",{staticClass:"user-box d-flex align-items-center"},[t("span",{staticClass:"mr-2"},[e._v("Hello, "+e._s(e.$root.store.username)+":")]),t("b-dropdown",{staticClass:"personal-dropdown",attrs:{id:"dropdown-1",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("i",{staticClass:"fas fa-user mr-2"}),e._v(" Personal Area ")]},proxy:!0}])},[t("b-dropdown-item",{attrs:{to:{name:"favorites"}}},[e._v(" My Favorites "),t("i",{staticClass:"fas fa-heart ml-2"})]),t("b-dropdown-item",{attrs:{to:{name:"my-recipes"}}},[e._v(" My Recipes "),t("i",{staticClass:"fas fa-book ml-2"})]),t("b-dropdown-item",{attrs:{to:{name:"family-recipes"}}},[e._v(" My Family Recipes "),t("i",{staticClass:"fas fa-home ml-2"})]),t("b-dropdown-item",{attrs:{to:{name:"createRecipe"}}},[e._v(" Create New Recipe "),t("i",{staticClass:"fas fa-plus-circle ml-2"})]),t("b-dropdown-divider"),t("b-dropdown-item",{staticClass:"logout-item",on:{click:e.logout}},[t("span",{staticClass:"logout-text"},[e._v("Logout")]),t("i",{staticClass:"fas fa-sign-out-alt logout-icon"})])],1)],1)]:[t("span",{staticClass:"d-flex align-items-center"},[t("span",{staticClass:"mr-2"},[e._v("Hello guest:")]),t("b-button",{staticClass:"mr-2",attrs:{variant:"outline-light",to:{name:"register"}}},[e._v("Register")]),t("b-button",{attrs:{variant:"outline-light",to:{name:"login"}}},[e._v("Login")])],1)]],2)],1)],1),t("router-view")],1)},n=[];a(7658);const s={name:"App",methods:{logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},o=s;var c=a(1001),l=(0,c.Z)(o,i,n,!1,null,null,null);const u=l.exports;var p=a(1939),d=a.n(p),m=a(9669),g=a.n(m),f=(a(8783),a(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-container"},[e._m(0),t("div",{staticClass:"recipes-section"},[t("RecipePreviewList",{staticClass:"recipe-card",attrs:{title:"Random Recipes"}}),e.$root.store.username?e._e():t("router-link",{staticClass:"login-button",attrs:{to:"/login",tag:"button"}},[e._v(" You need to Login to view this ")]),e._v(" "+e._s(!e.$root.store.username)+" "),t("RecipePreviewList",{class:{"recipe-card":!0,blur:!e.$root.store.username},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)])}),h=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t("h1",[e._v("Main Page")])])}],v=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),t("b-row",e._l(e.recipes,(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},b=[],w=a(9567),y=a(4512),k=a(5617),_=a(9138),C=(a(7941),a(2707),a(1038),a(199),a(5352));function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Object.keys(C),a=t.length,r=t.sort((function(){return.5-Math.random()})),i=Array.from({length:e},(function(e,t){return C[r[t%a]]}));return{data:{recipes:i}}}const S={name:"RecipePreviewList",components:{RecipePreview:_.Z},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,k.Z)((0,w.Z)().mark((function t(){var a,r,i,n;return(0,w.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{r=3,i=x(r),console.log(i),n=i.data.recipes,console.log(n),e.recipes=[],(a=e.recipes).push.apply(a,(0,y.Z)(n))}catch(s){console.log(s)}case 1:case"end":return t.stop()}}),t)})))()}}},P=S;var j=(0,c.Z)(P,v,b,!1,null,"3340eb55",null);const L=j.exports,I={components:{RecipePreviewList:L}},F=I;var Z=(0,c.Z)(F,f,h,!1,null,"391ff53a",null);const A=Z.exports;var M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},R=[],O={},E=(0,c.Z)(O,M,R,!1,null,null,null);const B=E.exports;var T=[{path:"/",name:"main",component:A},{path:"/register",name:"register",component:function(){return a.e(635).then(a.bind(a,8635))}},{path:"/login",name:"login",component:function(){return a.e(199).then(a.bind(a,3199))}},{path:"/search",name:"search",component:function(){return a.e(834).then(a.bind(a,2834))}},{path:"   ",name:"recipe",component:function(){return a.e(424).then(a.bind(a,9424))}},{path:"*",name:"notFound",component:B},{path:"/about",name:"about",component:function(){return a.e(149).then(a.bind(a,8149))}},{path:"/favorites",name:"favorites",component:function(){return a.e(508).then(a.bind(a,508))}}];const $=T;var N=a(8345),q=a(8620),G=(a(7024),a(9301)),z=a(7563),D=a(5053),H=a(1869),V=a(8672),U=a(4500),Y=a(8348),J=a(4063),K=a(4167),X=a(8824);r["default"].use(N.ZP);var Q=new N.ZP({routes:$});[G.E,z.w6,D.g,H.SY,V.xL,U.u3,Y.v5,J.F,K.m$,X.A6].forEach((function(e){return r["default"].use(e)})),r["default"].use(q.ZP),g().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),g().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(d(),g()),r["default"].config.productionTip=!1;var W={server_domain:"http://localhost:3000",username:localStorage.username,favorites:JSON.parse(localStorage.getItem("favorites"))||[],login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(W),new r["default"]({router:Q,data:function(){return{store:W}},methods:{toast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:a,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:function(e){return e(u)}}).$mount("#app")},4376:(e,t,a)=>{a.d(t,{VZ:()=>s,pZ:()=>n,qZ:()=>o,qx:()=>c});a(2479),a(199);var r=a(5352),i={};function n(e){i[e]=r[e]}function s(e){delete i[e]}function o(e){return{data:{favorite:e in i}}}function c(){var e=Object.values(i);return{data:{recipes:e}}}},199:e=>{e.exports={}},5352:e=>{e.exports=JSON.parse('{"11111":{"id":11111,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":11,"aggregateLikes":209,"vegetarian":true,"vegan":true,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."},"11341":{"id":11111,"image":"https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=915&v=1660843558&width=1200","title":"Margherita Pizza","readyInMinutes":30,"aggregateLikes":120,"vegetarian":true,"vegan":false,"glutenFree":false,"summary":"Margherita Pizza is a classic Italian dish made with tomatoes, mozzarella, fresh basil, salt, and extra-virgin olive oil. Perfect for a quick dinner."},"22222":{"id":22222,"image":"https://marleyspoon.com/media/recipes/95462/main_photos/large/our-089c2d1ac120d12886fe743c0018342c.jpeg","title":"Cheeseburger","readyInMinutes":25,"aggregateLikes":150,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"A delicious cheeseburger made with a juicy beef patty, cheddar cheese, lettuce, tomato, and a special burger sauce."},"33333":{"id":33333,"image":"https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0286-I-500x375.jpg","title":"Sushi Rolls","readyInMinutes":45,"aggregateLikes":200,"vegetarian":true,"vegan":true,"glutenFree":true,"summary":"A variety of sushi rolls made with fresh vegetables, seaweed, and perfectly cooked sushi rice. A healthy and satisfying meal."},"44444":{"id":44444,"image":"https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg","title":"Caesar Salad","readyInMinutes":20,"aggregateLikes":100,"vegetarian":true,"vegan":false,"glutenFree":false,"summary":"Crispy romaine lettuce, Parmesan cheese, croutons, and Caesar dressing make this classic Caesar Salad a favorite starter or side dish."},"55555":{"id":55555,"image":"https://www.vickery.tv/wp-content/uploads/2020/12/SMGD-Spaghetti-Bolognese.jpg","title":"Spaghetti Bolognese","readyInMinutes":60,"aggregateLikes":250,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"Spaghetti Bolognese is a hearty Italian pasta dish made with ground beef, tomatoes, and a blend of spices. A family favorite!"},"66666":{"id":66666,"image":"https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg","title":"Chicken Curry","readyInMinutes":40,"aggregateLikes":180,"vegetarian":false,"vegan":false,"glutenFree":true,"summary":"A flavorful chicken curry made with tender chicken pieces, aromatic spices, and creamy coconut milk. Serve with rice for a complete meal."},"77777":{"id":77777,"image":"https://www.thespruceeats.com/thmb/vequ4du_9ahBCvjuNErPtixsHsY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-bean-and-rice-burrito-recipe-3378550-hero-01-40ecbc08fcc84e80b8be853c1b779a13.jpg","title":"Veggie Burrito","readyInMinutes":35,"aggregateLikes":140,"vegetarian":true,"vegan":true,"glutenFree":false,"summary":"A hearty veggie burrito filled with beans, rice, avocado, and fresh salsa. A perfect meal for vegetarians and vegans alike."},"88888":{"id":88888,"image":"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Beef-Stew-main.jpg","title":"Beef Stew","readyInMinutes":120,"aggregateLikes":220,"vegetarian":false,"vegan":false,"glutenFree":true,"summary":"A rich and comforting beef stew made with tender beef, carrots, potatoes, and a savory broth. Perfect for a cold day."},"99999":{"id":99999,"image":"https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg","title":"Grilled Salmon","readyInMinutes":25,"aggregateLikes":160,"vegetarian":false,"vegan":false,"glutenFree":true,"summary":"Grilled salmon seasoned with herbs and lemon. Serve with a side of vegetables for a healthy and delicious meal."},"101010":{"id":101010,"image":"https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4087-feature-2-500x500.jpg","title":"Chocolate Cake","readyInMinutes":90,"aggregateLikes":300,"vegetarian":true,"vegan":false,"glutenFree":false,"summary":"A rich and moist chocolate cake topped with a creamy chocolate ganache. A perfect dessert for any chocolate lover."}}')}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,r,i,n)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,i,n]=e[u],o=!0,c=0;c<r.length;c++)(!1&n||s>=n)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(o=!1,n<s&&(s=n));if(o){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,i,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{149:"9a520214",199:"0d11743b",424:"a8b69771",508:"d4e10e61",635:"40cb8196",834:"977de8de"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{199:"cca8a643",424:"2f4b77ed",508:"a365d6fe",635:"d5b1d6c6"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";a.l=(r,i,n,s)=>{if(e[r])e[r].push(i);else{var o,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+n){o=p;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+n),o.src=r),e[r]=[i];var d=(t,a)=>{o.onerror=o.onload=null,clearTimeout(m);var i=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(a))),t)return t(a)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,r,i)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var s=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=o,n.parentNode&&n.parentNode.removeChild(n),i(c)}};return n.onerror=n.onload=s,n.href=t,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var i=a[r],n=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){i=s[r],n=i.getAttribute("data-href");if(n===e||n===t)return i}},r=r=>new Promise(((i,n)=>{var s=a.miniCssF(r),o=a.p+s;if(t(s,o))return i();e(r,o,null,i,n)})),i={143:0};a.f.miniCss=(e,t)=>{var a={199:1,424:1,508:1,635:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=r(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var n=new Promise(((a,r)=>i=e[t]=[a,r]));r.push(i[2]=n);var s=a.p+a.u(t),o=new Error,c=r=>{if(a.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",o.name="ChunkLoadError",o.type=n,o.request=s,i[1](o)}};a.l(s,c,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,[s,o,c]=r,l=0;if(s.some((t=>0!==e[t]))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(c)var u=c(a)}for(t&&t(r);l<s.length;l++)n=s[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},r=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[998],(()=>a(7151)));r=a.O(r)})();
//# sourceMappingURL=app.fcaba536.js.map