(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{337:function(t,e,n){var content=n(436);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("0d1fea3e",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";var r=n(337);n.n(r).a},436:function(t,e,n){(e=n(29)(!1)).push([t.i,".navbar-offset{margin-top:100px!important}",""]),t.exports=e},446:function(t,e,n){"use strict";n.r(e);n(60),n(170),n(43);var r=n(8),o=n(28),c=n(368),l=n.n(c),d={name:"ListOfValues",components:{mdbContainer:o.mdbContainer,mdbRow:o.mdbRow,mdbCol:o.mdbCol,mdbIcon:o.mdbIcon,mdbInput:o.mdbInput,mdbCard:o.mdbCard,mdbCardText:o.mdbCardText,mdbCardBody:o.mdbCardBody,mdbCardTitle:o.mdbCardTitle,mdbBtn:o.mdbBtn,mdbModal:o.mdbModal,mdbModalBody:o.mdbModalBody,mdbModalFooter:o.mdbModalFooter},directives:{mdbInfiniteScroll:o.mdbInfiniteScroll},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/articles",{params:{_limit:10,Abstract_contains:t.value,Title_contains:t.value}});case 2:return data=e.sent,e.next=5,t.$axios.$get("/articles/count",{params:{Abstract_contains:t.value,Title_contains:t.value}});case 5:n=e.sent,t.articles_count=n,t.articles=data;case 8:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1,data:function(t){return{value:"",modal:!1,citation_content:"",articles:[],articles_count:0,loading:!1}},methods:{citation:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,cite;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,r=t.match(/href=".*?\?url=(.*?)"/),n.next=4,l.a.async(r[1]);case 4:cite=n.sent,e.modal=!0,e.citation_content=cite.format("bibliography",{format:"html",template:"apa",lang:"en-US"}),e.loading=!1;case 8:case"end":return n.stop()}}),n)})))()},loadArticles:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/articles",{params:{_limit:10,Abstract_contains:t.value,Title_contains:t.value}});case 2:data=e.sent,t.articles.push(data);case 4:case"end":return e.stop()}}),e)})))()}}},m=(n(435),n(33)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mdb-container",{directives:[{name:"mdb-infite-scroll",rawName:"v-mdb-infite-scroll",value:t.loadArticles,expression:"loadArticles"}],staticClass:"navbar-offset",attrs:{fluid:""}},[n("mdb-row",[n("mdb-col",{attrs:{col:"10"}},[n("mdb-card",[n("mdb-input",{staticClass:"p-2 m-2",attrs:{label:"Search...",size:"lg"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("mdb-btn",{on:{click:t.$fetch}},[t._v("Search")])],1)],1),t._v(" "),n("mdb-col",{attrs:{col:"2"}},[n("button",{staticClass:"btn btn-primary"},[t._v(t._s(t.articles_count))])])],1),t._v(" "),t._l(t.articles,(function(article){return n("mdb-row",{key:article.Id,staticClass:"item"},[n("mdb-col",{attrs:{col:"12"}},[n("mdb-card",{staticClass:"mt-2"},[n("mdb-card-body",{attrs:{cascade:""}},[n("mdb-row",[n("mdb-col",{attrs:{col:"8"}},[n("mdb-card-title",[n("strong",[t._v(t._s(article.Title))])]),t._v(" "),n("h5",{staticClass:"indigo-text"},[n("strong",[t._v(t._s(article.Authors)+", "+t._s(article.Year)+",\n                  "+t._s(article.Source))])]),t._v(" "),n("mdb-card-text",[t._v(t._s(article.Abstract))])],1),t._v(" "),n("mdb-col",{attrs:{col:"4"}},[n("mdb-row",[n("mdb-col",{attrs:{col:"6"}},[n("strong",[t._v("Subject")])]),t._v(" "),n("mdb-col",{attrs:{col:"6"}},[t._v("\n                  "+t._s(article.Subject)+"\n                ")])],1),t._v(" "),n("mdb-row",{staticClass:"mt-2"},[n("mdb-col",{attrs:{col:"6"}},[n("strong",[t._v("Share")])]),t._v(" "),n("mdb-col",{attrs:{col:"6"}},[n("a",{staticClass:"px-2 fa-lg li-ic"},[n("mdb-icon",{attrs:{fab:"",icon:"linkedin"}})],1),t._v(" "),n("a",{staticClass:"px-2 fa-lg tw-ic"},[n("mdb-icon",{attrs:{fab:"",icon:"twitter"}})],1),t._v(" "),n("a",{staticClass:"px-2 fa-lg fb-ic"},[n("mdb-icon",{attrs:{fab:"",icon:"facebook"}})],1)])],1),t._v(" "),n("mdb-row",{staticClass:"mt-2"},[n("mdb-col",{staticClass:"text-center",attrs:{col:"6"}},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:t.loading},on:{click:function(e){return t.citation(article.OA)}}},[t._v("\n                    Citation\n                  ")])]),t._v(" "),n("mdb-col",{staticClass:"text-center",attrs:{col:"6"},domProps:{innerHTML:t._s(article.OA)}},[t._v("\n                  "+t._s(article.OA)+"\n                ")])],1)],1)],1)],1)],1)],1)],1)})),t._v(" "),n("mdb-modal",{attrs:{show:t.modal,centered:!0},on:{close:function(e){t.modal=!1}}},[n("mdb-modal-body",{domProps:{innerHTML:t._s(t.citation_content)}},[t._v(t._s(t.citation_content))]),t._v(" "),n("mdb-modal-footer",[n("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){t.modal=!1}}},[t._v("Close")])],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports}}]);