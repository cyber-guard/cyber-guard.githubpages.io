(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{357:function(t,e,n){var content=n(464);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6759f5ab",content,!0,{sourceMap:!1})},463:function(t,e,n){"use strict";var r=n(357);n.n(r).a},464:function(t,e,n){(e=n(24)(!1)).push([t.i,".container{margin:0 auto;min-height:50vh;display:flex;justify-content:center;text-align:center}.subtitle{font-weight:300;font-size:32;color:#526488;word-spacing:5px;padding-bottom:15px}",""]),t.exports=e},471:function(t,e,n){"use strict";n.r(e);n(41);var r=n(7),o=n(15),c={name:"Home",components:{mdbCard:o.mdbCard,mdbCardText:o.mdbCardText},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.get("/home");case 3:return r=e.sent,data=r.data,e.abrupt("return",{content:data.Content});case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$store.dispatch("ui/setSidebarVisibility",!1)}},d=(n(463),n(23)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("mdb-card",[e("mdb-card-text",{staticClass:"p-5",domProps:{innerHTML:this._s(this.content)}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);