(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{331:function(t,e,o){var content=o(343);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("fb70d5a0",content,!0,{sourceMap:!1})},339:function(t,e,o){"use strict";t.exports=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");if((t=t.trim()).includes(" "))return!1;try{return new URL(t),!0}catch{return!1}}},342:function(t,e,o){"use strict";o(331)},343:function(t,e,o){var r=o(71)(!1);r.push([t.i,'.oa_payment_wrapper[data-v-7660cf5c]{width:100%;max-width:800px;border:1px solid var(--font-color);box-sizing:border-box;font-size:24px;font-family:"NEXTBook-Regular",sans-serif;text-align:center;margin:50px auto;color:var(--font-color);background-color:var(--bg-color);position:relative}.oa_payment_wrapper a[data-v-7660cf5c]{color:var(--primary);font-weight:700}.oa_p_label[data-v-7660cf5c]{padding:15px;border-bottom:1px solid var(--font-color)}.oa_p_content[data-v-7660cf5c]{padding:30px 30px 35px;font-size:19px;font-family:"NEXTBook-Regular",serif;line-height:1.35em;text-align:left}.oa_p_content[data-v-7660cf5c]:after{content:" ";display:block;height:0;clear:both}.oa_left[data-v-7660cf5c]{width:50%;padding-right:30px;float:left}.oa_left img[data-v-7660cf5c]{width:100%;display:block}.oa_right[data-v-7660cf5c]{width:50%;float:right;padding-left:30px;border-left:1px solid var(--primary)}.oa_mid[data-v-7660cf5c]{width:100%;margin:0 auto}.oa_small_font[data-v-7660cf5c]{font-size:14px;line-height:18px}.oa_p_content form[data-v-7660cf5c]{margin:0}.oa_p_content .oa_input[data-v-7660cf5c]{width:100%;padding:5px 10px;margin-top:20px;font-family:"Alverata-Regular",sans-serif;height:30px;font-size:16px;color:var(--font-color);border:1px solid var(--font-color);background-color:var(--bg-color);box-sizing:border-box}.oa_p_content .oa_input[data-v-7660cf5c]:placeholder{color:rgba(25,25,25,.4)}.oa_p_content #oa_submit[data-v-7660cf5c]{border:1px solid var(--primary);background-color:var(--primary);color:var(--bg-color);height:35px;cursor:pointer;transition:.15s;line-height:1.1em;box-shadow:inset 0 -2px 0 rgba(0,0,0,.1)}.oa_p_content #oa_submit[data-v-7660cf5c]:hover{box-shadow:none}.horizontal_slider[data-v-7660cf5c]{margin:20px 0 15px;background-color:var(--font-color);color:var(--bg-color);padding:10px 0;width:100%;outline:none}.horizontal_slider[data-v-7660cf5c]:focus{outline:none}.horizontal_slider[type=range][data-v-7660cf5c]::-moz-focus-outer{border:0}.horizontal_slider[type=range][data-v-7660cf5c]{-webkit-appearance:none;width:100%;background:transparent;outline:none}.horizontal_slider[type=range][data-v-7660cf5c]::-webkit-slider-thumb{-webkit-appearance:none;border:1px solid var(--font-color);height:25px;width:36px;background:var(--bg-color);border-radius:0;cursor:pointer;margin-top:-14px;outline:none}.horizontal_slider[type=range][data-v-7660cf5c]::-moz-range-thumb{border:1px solid var(--font-color);height:25px;width:36px;border-radius:0;background:var(--bg-color);cursor:pointer;outline:none}.horizontal_slider[type=range][data-v-7660cf5c]::-ms-thumb{border:1px solid var(--font-color);height:25px;width:36px;border-radius:0;background:var(--bg-color);cursor:pointer;outline:none}.horizontal_slider[type=range][data-v-7660cf5c]:focus{outline:none}.horizontal_slider[type=range][data-v-7660cf5c]::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;background:var(--font-color);outline:none}.horizontal_slider[type=range][data-v-7660cf5c]::-moz-range-track{width:100%;height:1px;cursor:pointer;background:var(--font-color);outline:none}.horizontal_slider[type=range][data-v-7660cf5c]::-ms-track{width:100%;height:1px;cursor:pointer;background:transparent;border-color:transparent;border-width:16px 0;color:transparent;outline:none}@media only screen and (max-width:768px){body[data-v-7660cf5c]{padding:0}.oa_payment_wrapper[data-v-7660cf5c]{margin-top:0;font-size:24px}.oa_p_content[data-v-7660cf5c]{font-size:16px;line-height:1.45em;padding:20px 15px}.oa_left[data-v-7660cf5c]{float:none;text-align:center;position:relative;display:table;margin:auto auto 40px}.oa_left img[data-v-7660cf5c]{max-width:350px}.oa_right[data-v-7660cf5c]{float:none;max-width:none;padding-left:0;border-left:0}.oa_p_content[data-v-7660cf5c]:after{clear:none;height:auto}}',""]),t.exports=r},346:function(t,e,o){"use strict";o(13),o(9);var r=o(2),n=o(339),c=o.n(n),l=o(73),d={props:{publication:{type:String,required:!0},artist:{type:Object,required:!0}},data:function(){return{payment_amount:5,name:"",discountcode:void 0,email:"",exlibris:void 0,path:Object(l.f)()}},methods:{checkForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={name:t.name,email:t.email,redirectUrl:t.path,exlibris:t.exlibris,payment_amount:t.payment_amount,publication:t.publication,discountcode:t.discountcode},e.next=3,t.$axios.$post("/shop/catalog/submit",o);case 3:if(r=e.sent,c()(r)){e.next=6;break}return e.abrupt("return",t.$router.push({path:t.path,query:{id:r}}));case 6:window.location=r;case 7:case"end":return e.stop()}}),e)})))()}}},f=(o(342),o(44)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"oa_payment_wrapper",attrs:{id:t.publication}},[o("div",{staticClass:"oa_p_label"},[t._v("order summary")]),t._v(" "),o("div",{staticClass:"oa_p_content"},[o("div",{staticClass:"oa_mid"},[o("span",[t._v("As the publications produced by oneacre.online exist only temporarily\n        on the website, oneacre.online offers the opportunity to preserve a\n        copy of the publication. By acquiring a permanent private link, the\n        publication remains accessible to you or whomever else you choose to\n        share the link with, past the 3 months for which the work will be\n        available at oneacre.online. The donation starting at 3 euros, will\n        support the creation of further unprintable publications as well as\n        the artists that fuel their content.")]),t._v(" "),o("form",{staticClass:"oa_mid",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"oa_input",attrs:{type:"text",name:"name",placeholder:"Name",required:"required"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"oa_input",attrs:{type:"email",name:"email",placeholder:"Email",required:"required"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.exlibris,expression:"exlibris"}],staticClass:"oa_input",attrs:{type:"exlibris",name:"exlibris",placeholder:"Ex Libris - optional"},domProps:{value:t.exlibris},on:{input:function(e){e.target.composing||(t.exlibris=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.discountcode,expression:"discountcode"}],staticClass:"oa_input",attrs:{type:"discountcode",name:"discountcode",placeholder:"Cipher - if applicable "},domProps:{value:t.discountcode},on:{input:function(e){e.target.composing||(t.discountcode=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.payment_amount,expression:"payment_amount"}],staticClass:"horizontal_slider",attrs:{type:"range",name:"payment_amount",min:"3",max:"100",id:"range_value"},domProps:{value:t.payment_amount},on:{__r:function(e){t.payment_amount=e.target.value}}}),t._v(" "),o("div",{attrs:{id:"show_value"}},[t._v("\n          Choose your price: € "),o("span",{attrs:{id:"value"}},[t._v(t._s(t.payment_amount))])]),t._v(" "),o("input",{staticClass:"oa_input",attrs:{type:"hidden",name:"publication"},domProps:{value:t.publication}}),t._v(" "),o("input",{staticClass:"oa_input",attrs:{id:"oa_submit",type:"submit",value:"Purchase"}})]),t._v(" "),t._m(0)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"oa_small_font"},[o("p",[o("br"),t._v("\n          Much like books, oneacre.online hopes that the acquired links will\n          be borrowed, lend, and shared, perhaps forgotten at a friend’s inbox\n          or messenger app to keep versions of the work alive and circulating\n          when the publication will be no longer be available at\n          oneacre.online.\n        ")]),t._v(" "),o("br"),t._v(" "),o("p",[t._v("\n          Ex Libris: is usually a small print or decorative label pasted into\n          a book, often on the inside front cover, to indicate its owner. Ex\n          Libris follow a similar function at oneacre.online, where a word,\n          sentence or phrase of your choice will be added in the url you\n          purchase to designated that the link is part of your collection. ex.\n          Ex Libris: possessive pronoun url containing Ex Libris:\n          http://oneacre.online/publication-one-possessive-pronoun-48010513293185144\n        ")]),t._v(" "),o("br"),t._v(" "),o("p",[t._v("\n          Cipher: magic word or code that gives a discount or a free copy.\n          Probably somebody told you about it.\n        ")])])}],!1,null,"7660cf5c",null);e.a=component.exports},403:function(t,e,o){var content=o(492);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("73bc42e5",content,!0,{sourceMap:!1})},491:function(t,e,o){"use strict";o(403)},492:function(t,e,o){var r=o(71)(!1);r.push([t.i,".ingrid{--primary:#fff;--secondary:#fff;--bg-color:#000;--font-color:#fff}",""]),t.exports=r},533:function(t,e,o){"use strict";o.r(e);o(48),o(16),o(12),o(8),o(34);var r=o(17),n=o(346),c=o(73);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=c.j.ingrid,m={components:{Form:n.a},data:function(){return d(d({},f),{},{artist:f,description:"oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works."})},head:function(){return{title:this.title,meta:Object(c.k)(this.title,this.description,this.image),bodyAttrs:{class:this.dir}}}},h=(o(491),o(44)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Form",{attrs:{publication:t.artist.dir,artist:t.artist}})}),[],!1,null,null,null);e.default=component.exports}}]);