(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{364:function(t,e,n){var content=n(472);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("6759f5ab",content,!0,{sourceMap:!1})},471:function(t,e,n){"use strict";var r=n(364);n.n(r).a},472:function(t,e,n){(e=n(19)(!1)).push([t.i,".container{margin:0 auto;min-height:50vh;display:flex;justify-content:center;text-align:center}.subtitle{font-weight:300;font-size:32;color:#526488;word-spacing:5px;padding-bottom:15px}",""]),t.exports=e},479:function(t,e,n){"use strict";n.r(e);n(35);var r=n(6),o=n(13),c={name:"Home",components:{mdbCard:o.mdbCard,mdbCardText:o.mdbCardText},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.get("/home");case 3:return r=e.sent,data=r.data,e.abrupt("return",{content:data.Content});case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$store.dispatch("ui/setSidebarVisibility",!1)}},d=(n(471),n(25)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("mdb-card",[e("mdb-card-text",{staticClass:"p-5",domProps:{innerHTML:this._s(this.content)}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);