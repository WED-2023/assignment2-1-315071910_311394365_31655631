(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[931],{3931:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=function(){var e=this,t=e._self._c;return t("div",[t("br"),t("h1",{staticClass:"title"},[e._v("My Family Recipes")]),t("div",{staticClass:"container"},[t("div",{staticClass:"recipes-grid"},e._l(e.recipes,(function(e){return t("RecipePreview",{key:e.id,staticClass:"recipePreview",attrs:{recipe:e}})})),1)])])},a=[],i=r(124);r(9753);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){if(Array.isArray(e))return s(e)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r(7042),r(8309),r(4916),r(7601);function u(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}r(1703),r(6647);function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e){return o(e)||c(e)||u(e)||l()}var d=r(8534),f=(r(7658),r(5124)),v=r(9669),x=r.n(v);const g={name:"RecipePreviewList",components:{RecipePreview:f.Z},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,d.Z)((0,i.Z)().mark((function t(){var r,n,a;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x().get("".concat(e.$root.store.server_domain,"/recipes/allFamily"));case 3:n=t.sent,a=n.data,e.recipes=[],(r=e.recipes).push.apply(r,p(a)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},h=g;var y=r(1001),m=(0,y.Z)(h,n,a,!1,null,"d2dfaf5c",null);const b=m.exports},8457:(e,t,r)=>{"use strict";var n=r(9974),a=r(6916),i=r(7908),s=r(3411),o=r(7659),c=r(4411),u=r(6244),l=r(6135),p=r(4121),d=r(1246),f=Array;e.exports=function(e){var t=i(e),r=c(this),v=arguments.length,x=v>1?arguments[1]:void 0,g=void 0!==x;g&&(x=n(x,v>2?arguments[2]:void 0));var h,y,m,b,I,R,w=d(t),A=0;if(!w||this===f&&o(w))for(h=u(t),y=r?new this(h):f(h);h>A;A++)R=g?x(t[A],A):t[A],l(y,A,R);else for(b=p(t,w),I=b.next,y=r?new this:[];!(m=a(I,b)).done;A++)R=g?s(b,x,[m.value,A],!0):m.value,l(y,A,R);return y.length=A,y}},3411:(e,t,r)=>{var n=r(9670),a=r(9212);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(s){a(e,"throw",s)}}},2261:(e,t,r)=>{"use strict";var n=r(6916),a=r(1702),i=r(1340),s=r(7066),o=r(2999),c=r(2309),u=r(30),l=r(9909).get,p=r(9441),d=r(7168),f=c("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,x=v,g=a("".charAt),h=a("".indexOf),y=a("".replace),m=a("".slice),b=function(){var e=/a/,t=/b*/g;return n(v,e,"a"),n(v,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),I=o.BROKEN_CARET,R=void 0!==/()??/.exec("")[1],w=b||R||I||p||d;w&&(x=function(e){var t,r,a,o,c,p,d,w=this,A=l(w),E=i(e),_=A.raw;if(_)return _.lastIndex=w.lastIndex,t=n(x,_,E),w.lastIndex=_.lastIndex,t;var C=A.groups,S=I&&w.sticky,k=n(s,w),O=w.source,P=0,T=E;if(S&&(k=y(k,"y",""),-1===h(k,"g")&&(k+="g"),T=m(E,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==g(E,w.lastIndex-1))&&(O="(?: "+O+")",T=" "+T,P++),r=new RegExp("^(?:"+O+")",k)),R&&(r=new RegExp("^"+O+"$(?!\\s)",k)),b&&(a=w.lastIndex),o=n(v,S?r:w,T),S?o?(o.input=m(o.input,P),o[0]=m(o[0],P),o.index=w.lastIndex,w.lastIndex+=o[0].length):w.lastIndex=0:b&&o&&(w.lastIndex=w.global?o.index+o[0].length:a),R&&o&&o.length>1&&n(f,o[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&C)for(o.groups=p=u(null),c=0;c<C.length;c++)d=C[c],p[d[0]]=o[d[1]];return o}),e.exports=x},7066:(e,t,r)=>{"use strict";var n=r(9670);e.exports=function(){var e=n(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2999:(e,t,r)=>{var n=r(7293),a=r(7854),i=a.RegExp,s=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=s||n((function(){return!i("a","y").sticky})),c=s||n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:o,UNSUPPORTED_Y:s}},9441:(e,t,r)=>{var n=r(7293),a=r(7854),i=a.RegExp;e.exports=n((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var n=r(7293),a=r(7854),i=a.RegExp;e.exports=n((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1038:(e,t,r)=>{var n=r(2109),a=r(8457),i=r(7072),s=!i((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:s},{from:a})},4916:(e,t,r)=>{"use strict";var n=r(2109),a=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},7601:(e,t,r)=>{"use strict";r(4916);var n=r(2109),a=r(6916),i=r(614),s=r(9670),o=r(1340),c=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=/./.test;n({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=s(this),r=o(e),n=t.exec;if(!i(n))return a(u,t,r);var c=a(n,t,r);return null!==c&&(s(c),!0)}})}}]);
//# sourceMappingURL=931.1b85efc2.js.map