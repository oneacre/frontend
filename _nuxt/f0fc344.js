(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{383:function(t,e,r){var content=r(439);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("6885e45b",content,!0,{sourceMap:!1})},384:function(t,e,r){var content=r(441);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("41e4af71",content,!0,{sourceMap:!1})},385:function(t,e,r){var content=r(443);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("8ea8c6fc",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r(383)},439:function(t,e,r){var o=r(71)(!1);o.push([t.i,".menu-item[data-v-244040f5]{font-size:1rem;padding:.75rem 1rem;background:#1a1a1a;color:#fff;justify-self:flex-end;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;border-radius:.375rem;opacity:1;transition:opacity .15s;cursor:pointer}.menu-item[data-v-244040f5]:hover{opacity:.8}.menu-item+.menu-item[data-v-244040f5]{margin-left:.3rem}",""]),t.exports=o},440:function(t,e,r){"use strict";r(384)},441:function(t,e,r){var o=r(71)(!1);o.push([t.i,'.editor[data-v-27469e6b]{color:#000;background-color:#fff;border:1px solid rgba(0,0,0,.1);border-radius:.5rem;margin-bottom:1rem}.editor__menu[data-v-27469e6b]{display:flex;flex-wrap:nowrap;padding:.25rem;border-bottom:1px solid rgba(0,0,0,.1)}.editor__content[data-v-27469e6b]{padding:1rem;max-height:30rem;overflow:auto}.editor__content[data-v-27469e6b]::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.1)}.editor__bottom-bar[data-v-27469e6b]{justify-content:space-between;flex-wrap:wrap;padding:.25rem 0 .25rem .25rem;border-top:1px solid rgba(0,0,0,.1)}.editor__bottom-bar[data-v-27469e6b],.editor__status[data-v-27469e6b]{display:flex;align-items:center;white-space:nowrap}.editor__status[data-v-27469e6b]{font-size:13px;font-weight:500;border-radius:5px;margin-top:1rem;padding:.25rem .5rem;color:rgba(0,0,0,.5)}.editor__status[data-v-27469e6b]:before{content:" ";flex:0 0 auto;display:inline-block;width:.5rem;height:.5rem;background:rgba(0,0,0,.5);border-radius:50%;margin-right:.5rem}.editor__status--connecting[data-v-27469e6b]:before{background:#fd9170}.editor__status--connected[data-v-27469e6b]:before{background:#9def8f}.editor__actions button[data-v-27469e6b]{background:none;border:none;font:inherit;font-size:13px;font-weight:500;color:rgba(0,0,0,.5);border-radius:.25rem;padding:.25rem .5rem;margin-right:.25rem}.editor__actions button[data-v-27469e6b]:hover{color:#000;background-color:rgba(0,0,0,.05)}',""]),t.exports=o},442:function(t,e,r){"use strict";r(385)},443:function(t,e,r){var o=r(71)(!1);o.push([t.i,'.collaboration-users{margin-top:.5rem}.collaboration-users__item{display:inline-block;border-radius:5px;padding:.25rem .5rem;color:#fff;margin-right:.5rem;margin-bottom:.5rem}.collaboration-cursor__caret{position:relative;margin-left:-1px;margin-right:-1px;border-left:1px solid #000;border-right:1px solid #000;word-break:normal;pointer-events:none}.collaboration-cursor__label{position:absolute;top:-1.4em;left:-1px;font-size:13px;font-style:normal;font-weight:500;line-height:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#000;padding:.1rem .3rem;border-radius:3px 3px 3px 0;white-space:nowrap}.ProseMirror>*+*{margin-top:.75em}.ProseMirror ol,.ProseMirror ul{padding:0 1rem}.ProseMirror code{background-color:rgba(97,97,97,.1);color:#616161}.ProseMirror pre{background:#0d0d0d;color:#fff;font-family:"JetBrainsMono",monospace;padding:.75rem 1rem;border-radius:.5rem}.ProseMirror pre code{color:inherit;background:none;font-size:.8rem}.ProseMirror img{max-width:100%;height:auto}.ProseMirror hr{margin:1rem 0}.ProseMirror blockquote{padding-left:1rem;border-left:2px solid rgba(13,13,13,.1)}.ProseMirror ul[data-type=taskList]{list-style:none;padding:0}.ProseMirror ul[data-type=taskList] li{display:flex;align-items:center}.ProseMirror ul[data-type=taskList] li>input{flex:0 0 auto;margin-right:.5rem}',""]),t.exports=o},512:function(t,e,r){"use strict";r.r(e);r(48),r(16),r(12),r(8),r(34);var o=r(17),n=(r(13),r(507)),c=r(505),l=r(509),d=r(510),f=r(435),m=r(436),h=r(437),v=r(336),_=r(506),k=r(508),y={props:{icon:{type:String,required:!0},title:{type:String,required:!0},action:{type:Function,required:!0},isActive:{type:Function,default:null}}},w=(r(438),r(44)),x={components:{MenuItem:Object(w.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"menu-item",class:{"is-active":t.isActive?t.isActive():null},attrs:{title:t.title},on:{click:t.action}},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"244040f5",null).exports},props:{editor:{type:Object,required:!0}},data:function(){var t=this;return{items:[{icon:"bold",title:"Bold",action:function(){return t.editor.chain().focus().toggleBold().run()},isActive:function(){return t.editor.isActive("bold")}},{icon:"italic",title:"Italic",action:function(){return t.editor.chain().focus().toggleItalic().run()},isActive:function(){return t.editor.isActive("italic")}},{icon:"strikethrough",title:"Strike",action:function(){return t.editor.chain().focus().toggleStrike().run()},isActive:function(){return t.editor.isActive("strike")}},{icon:"code-view",title:"Code",action:function(){return t.editor.chain().focus().toggleCode().run()},isActive:function(){return t.editor.isActive("code")}},{icon:"mark-pen-line",title:"Highlight",action:function(){return t.editor.chain().focus().toggleHighlight().run()},isActive:function(){return t.editor.isActive("highlight")}},{icon:"h-1",title:"Heading 1",action:function(){return t.editor.chain().focus().toggleHeading({level:1}).run()},isActive:function(){return t.editor.isActive("heading",{level:1})}},{icon:"h-2",title:"Heading 2",action:function(){return t.editor.chain().focus().toggleHeading({level:2}).run()},isActive:function(){return t.editor.isActive("heading",{level:2})}},{icon:"paragraph",title:"Paragraph",action:function(){return t.editor.chain().focus().setParagraph().run()},isActive:function(){return t.editor.isActive("paragraph")}},{icon:"list-unordered",title:"Bullet List",action:function(){return t.editor.chain().focus().toggleBulletList().run()},isActive:function(){return t.editor.isActive("bulletList")}},{icon:"list-ordered",title:"Ordered List",action:function(){return t.editor.chain().focus().toggleOrderedList().run()},isActive:function(){return t.editor.isActive("orderedList")}},{icon:"list-check-2",title:"Task List",action:function(){return t.editor.chain().focus().toggleTaskList().run()},isActive:function(){return t.editor.isActive("taskList")}},{icon:"code-box-line",title:"Code Block",action:function(){return t.editor.chain().focus().toggleCodeBlock().run()},isActive:function(){return t.editor.isActive("codeBlock")}},{icon:"double-quotes-l",title:"Blockquote",action:function(){return t.editor.chain().focus().toggleBlockquote().run()},isActive:function(){return t.editor.isActive("blockquote")}},{icon:"separator",title:"Horizontal Rule",action:function(){return t.editor.chain().focus().setHorizontalRule().run()}},{icon:"text-wrap",title:"Hard Break",action:function(){return t.editor.chain().focus().setHardBreak().run()}},{icon:"format-clear",title:"Clear Format",action:function(){return t.editor.chain().focus().clearNodes().unsetAllMarks().run()}},{icon:"arrow-go-back-line",title:"Undo",action:function(){return t.editor.chain().focus().undo().run()}},{icon:"arrow-go-forward-line",title:"Redo",action:function(){return t.editor.chain().focus().redo().run()}}]}}},A=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.items,(function(e,o){return r("menu-item",t._b({key:o},"menu-item",e,!1))})),1)}),[],!1,null,null,null).exports;function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var M=m.a.extend({content:"paragraph"}),P=function(t){return t[Math.floor(Math.random()*t.length)]},j={components:{EditorContent:c.b,MenuBar:A},data:function(){return{currentUser:JSON.parse(localStorage.getItem("currentUser"))||{name:this.getRandomName(),color:this.getRandomColor()},indexdb:null,editor:null,users:[],status:"connecting"}},mounted:function(){var t=this,e=new v.d,r=new _.a("ws://localhost:8080/","oa-collaboration-example",e);r.on("status",(function(e){console.log("event.status",e.status),t.status=e.status})),this.indexdb=new k.a("oa-collaboration-example",e),this.editor=new c.a({extensions:[].concat(Object(n.a)(Object(c.c)().filter((function(t){return"history"!==t.config.name}))),[h.a,f.a,M,l.a.configure({provider:r}),d.a.configure({provider:r,user:this.currentUser,onUpdate:function(e){t.users=e}})])}),localStorage.setItem("currentUser",JSON.stringify(this.currentUser))},methods:{setName:function(){var t=(window.prompt("Name")||"").trim().substring(0,32);if(t)return this.updateCurrentUser({name:t})},updateCurrentUser:function(t){this.currentUser=C(C({},this.currentUser),t),this.editor.chain().focus().user(this.currentUser).run(),localStorage.setItem("currentUser",JSON.stringify(this.currentUser))},getRandomColor:function(){return P(["#A975FF","#FB5151","#FD9170","#FFCB6B","#68CEF8","#80CBC4","#9DEF8F"])},getRandomName:function(){return P(["Lea Thompson","Cyndi Lauper","Tom Cruise","Madonna","Jerry Hall","Joan Collins","Winona Ryder","Christina Applegate","Alyssa Milano","Molly Ringwald","Ally Sheedy","Debbie Harry","Olivia Newton-John","Elton John","Michael J. Fox","Axl Rose","Emilio Estevez","Ralph Macchio","Rob Lowe","Jennifer Grey","Mickey Rourke","John Cusack","Matthew Broderick","Justine Bateman","Lisa Bonet"])}},beforeDestroy:function(){this.editor.destroy()}},B=(r(440),r(442),{components:{Editor:Object(w.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.editor?r("div",{staticClass:"editor"},[r("menu-bar",{staticClass:"editor__menu",attrs:{editor:t.editor}}),t._v(" "),r("editor-content",{staticClass:"editor__content",attrs:{editor:t.editor}}),t._v(" "),r("div",{staticClass:"editor__bottom-bar"},[r("div",{class:"editor__status editor__status--"+t.status},[t._v("\n        "+t._s(t.status)+"\n        "),"connected"===t.status?[t._v("\n          as "+t._s(t.currentUser.name)+",\n          "+t._s(t.users.length)+" user"+t._s(1===t.users.length?"":"s")+" online\n        ")]:t._e()],2),t._v(" "),r("div",{staticClass:"editor__actions"},[r("button",{on:{click:t.setName}},[t._v("\n          Set Name\n        ")]),t._v(" "),r("button",{on:{click:function(e){t.updateCurrentUser({name:t.getRandomName()})}}},[t._v("\n          Random Name\n        ")])])])],1):t._e(),t._v(" "),r("div",{staticClass:"collaboration-users"},t._l(t.users,(function(e){return r("div",{key:e.clientId,staticClass:"collaboration-users__item",style:"background-color: "+e.color},[t._v("\n      "+t._s(e.name)+"\n    ")])})),0)])}),[],!1,null,"27469e6b",null).exports}}),L=Object(w.a)(B,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dearborn"},[e("Editor")],1)}),[],!1,null,null,null);e.default=L.exports}}]);