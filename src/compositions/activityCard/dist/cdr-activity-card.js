!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CdrActivityCard",[],e):"object"==typeof exports?exports.CdrActivityCard=e():t.CdrActivityCard=e()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([function(t,e,r){"use strict";function i(t){t.component("cdr-activity-card",n.a)}Object.defineProperty(e,"__esModule",{value:!0});var n=r(1);r.d(e,"cdrActivityCard",function(){return n.a}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),e.default=i},function(t,e,r){"use strict";var i=r(4),n=r(5),o=function(t){r(2)},a=r(3)(i.a,n.a,!1,o,null,null);e.a=a.exports},function(t,e){},function(t,e){t.exports=function(t,e,r,i,n,o){var a,c=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,c=t.default);var d="function"==typeof c?c.options:c;e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),r&&(d.functional=!0),n&&(d._scopeId=n);var l;if(o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=l):i&&(l=i),l){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(t,e){return l.call(e),f(t,e)}):d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:c,options:d}}},function(t,e,r){"use strict";throw new Error('Cannot find module "@rei-co-op/cedar-card"')},function(t,e,r){"use strict";var i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("cdr-card",{attrs:{modifier:"activity"}},[r("section",{staticClass:"cdr-inset cdr-inset--remove-top"},[r("cdr-media-object",{attrs:{"img-src":t.media,"img-alt":t.mediaAlt,"img-crop":t.mediaCrop,"img-cover":t.mediaCover,"img-ratio":t.mediaRatio,"img-class":"cdr-card--activity__image","img-modifier":"responsive",modifier:"top stretch","img-radius":"top"}},[null!=this.label?r("div",{staticClass:"cdr-card--activity__label"},[t._v(t._s(t.label))]):t._e(),t._v(" "),null!=this.title?r("cdr-heading",{attrs:{level:t.titleLevel}},[r("a",{staticClass:"cdr-card--activity__title cdr-card--activity__title--action",attrs:{href:t.titleUrl}},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.snapshot?r("cdr-list",{staticClass:"cdr-card--activity__snapshot",attrs:{modifier:"inline bulleted"}},t._l(t.snapshot,function(e){return r("li",[t._v("\n          "+t._s(e)+"\n        ")])})):t._e(),t._v(" "),t.location?r("div",{staticClass:"cdr-card--activity__location"},[t._v("\n        "+t._s(t.location)+"\n      ")]):t._e(),t._v(" "),null!=this.rating?r("cdr-rating",{staticClass:"cdr-card--activity__rating",attrs:{rating:t.rating,count:t.count,modifier:"medium"}}):t._e()],1)],1)])},staticRenderFns:[]};e.a=i}])});