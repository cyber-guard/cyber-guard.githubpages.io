(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{270:function(t,n,e){var content=e(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(28).default)("6759f5ab",content,!0,{sourceMap:!1})},367:function(t,n,e){"use strict";var r=e(270);e.n(r).a},368:function(t,n,e){(n=e(27)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),t.exports=n},373:function(t,n,e){"use strict";e.r(n);e(42);var r=e(7),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$axios,n.next=3,e.$get("/articles?_limit=10");case 3:return data=n.sent,n.abrupt("return",{data:data});case 5:case"end":return n.stop()}}),n)})))()}},c=(e(367),e(38)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[t._v("\n      client\n    ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n      Corruption app client\n    ")]),t._v(" "),e("div",{staticClass:"links"},[e("ul",t._l(t.data,(function(article){return e("li",{key:article,staticClass:"item"},[e("nuxt-link",{attrs:{to:"/article/"+article.Id}},[t._v(t._s(article.Title))])],1)})),0),t._v(" "),e("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("\n        Documentation\n      ")]),t._v(" "),e("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[t._v("\n        GitHub\n      ")])])])])}),[],!1,null,null,null);n.default=component.exports}}]);