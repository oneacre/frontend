(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{292:function(t,e,o){var content=o(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(63).default)("594cbf22",content,!0,{sourceMap:!1})},294:function(t,e,o){"use strict";t.exports=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");try{return new URL(t),!0}catch{return!1}}},304:function(t,e,o){"use strict";o(292)},305:function(t,e,o){(e=o(62)(!1)).push([t.i,'.oa_payment_wrapper[data-v-2b0a0316]{width:100%;max-width:800px;border:1px solid var(--font-color);box-sizing:border-box;font-size:24px;font-family:"NEXTBook-Regular",sans-serif;text-align:center;margin:50px auto;color:var(--font-color);background-color:var(--bg-color);position:relative}.oa_payment_wrapper a[data-v-2b0a0316]{color:var(--primary);font-weight:700}.oa_p_label[data-v-2b0a0316]{padding:15px;border-bottom:1px solid var(--font-color)}.oa_p_content[data-v-2b0a0316]{padding:30px 30px 35px;font-size:19px;font-family:"NEXTBook-Regular",serif;line-height:1.35em;text-align:left}.oa_p_content[data-v-2b0a0316]:after{content:" ";display:block;height:0;clear:both}.oa_left[data-v-2b0a0316]{width:50%;padding-right:30px;float:left}.oa_left img[data-v-2b0a0316]{width:100%;display:block}.oa_right[data-v-2b0a0316]{width:50%;float:right;padding-left:30px;border-left:1px solid var(--primary)}.oa_mid[data-v-2b0a0316]{width:100%;margin:0 auto}.oa_small_font[data-v-2b0a0316]{font-size:14px;line-height:18px}.oa_p_content form[data-v-2b0a0316]{margin:0}.oa_p_content .oa_input[data-v-2b0a0316]{width:100%;padding:5px 10px;margin-top:20px;font-family:"Alverata-Regular",sans-serif;height:30px;font-size:16px;color:var(--font-color);border:1px solid var(--font-color);background-color:var(--bg-color);box-sizing:border-box}.oa_p_content .oa_input[data-v-2b0a0316]:placeholder{color:rgba(25,25,25,.4)}.oa_p_content #oa_submit[data-v-2b0a0316]{border:1px solid var(--primary);background-color:var(--primary);color:var(--bg-color);height:35px;cursor:pointer;transition:.15s;line-height:1.1em;box-shadow:inset 0 -2px 0 rgba(0,0,0,.1)}.oa_p_content #oa_submit[data-v-2b0a0316]:hover{box-shadow:none}.horizontal_slider[data-v-2b0a0316]{margin:20px 0 15px;background-color:var(--font-color);color:var(--bg-color);padding:10px 0;width:100%;outline:none}.horizontal_slider[data-v-2b0a0316]:focus{outline:none}.horizontal_slider[type=range][data-v-2b0a0316]::-moz-focus-outer{border:0}.horizontal_slider[type=range][data-v-2b0a0316]{-webkit-appearance:none;width:100%;background:transparent;outline:none}.horizontal_slider[type=range][data-v-2b0a0316]::-webkit-slider-thumb{-webkit-appearance:none;border:1px solid var(--font-color);height:25px;width:36px;background:var(--bg-color);border-radius:0;cursor:pointer;margin-top:-14px;outline:none}.horizontal_slider[type=range][data-v-2b0a0316]::-moz-range-thumb{border:1px solid var(--font-color);height:25px;width:36px;border-radius:0;background:var(--bg-color);cursor:pointer;outline:none}.horizontal_slider[type=range][data-v-2b0a0316]::-ms-thumb{border:1px solid var(--font-color);height:25px;width:36px;border-radius:0;background:var(--bg-color);cursor:pointer;outline:none}.horizontal_slider[type=range][data-v-2b0a0316]:focus{outline:none}.horizontal_slider[type=range][data-v-2b0a0316]::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;background:var(--font-color);outline:none}.horizontal_slider[type=range][data-v-2b0a0316]::-moz-range-track{width:100%;height:1px;cursor:pointer;background:var(--font-color);outline:none}.horizontal_slider[type=range][data-v-2b0a0316]::-ms-track{width:100%;height:1px;cursor:pointer;background:transparent;border-color:transparent;border-width:16px 0;color:transparent;outline:none}@media only screen and (max-width:768px){body[data-v-2b0a0316]{padding:0}.oa_payment_wrapper[data-v-2b0a0316]{margin-top:0;font-size:24px}.oa_p_content[data-v-2b0a0316]{font-size:16px;line-height:1.45em;padding:20px 15px}.oa_left[data-v-2b0a0316]{float:none;text-align:center;position:relative;display:table;margin:auto auto 40px}.oa_left img[data-v-2b0a0316]{max-width:350px}.oa_right[data-v-2b0a0316]{float:none;max-width:none;padding-left:0;border-left:0}.oa_p_content[data-v-2b0a0316]:after{clear:none;height:auto}}',""]),t.exports=e},309:function(t,e,o){"use strict";o(23),o(17);var r=o(3),n=o(294),l=o.n(n),c=o(86),d={props:{publication:{type:String,required:!0},artist:{type:Object,required:!0}},data:function(){return{payment_amount:5,name:"",discountcode:void 0,email:"",exlibris:void 0,path:Object(c.b)()}},methods:{checkForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={name:t.name,email:t.email,redirectUrl:t.path,exlibris:t.exlibris,payment_amount:t.payment_amount,publication:t.publication,discountcode:t.discountcode},e.next=3,t.$axios.$post("/shop/catalog/submit",o);case 3:if(r=e.sent,l()(r)){e.next=6;break}return e.abrupt("return",t.$router.push({path:t.path,query:{id:r}}));case 6:window.location=r;case 7:case"end":return e.stop()}}),e)})))()}}},h=(o(304),o(30)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"oa_payment_wrapper",attrs:{id:t.publication}},[o("div",{staticClass:"oa_p_label"},[t._v("order summary")]),t._v(" "),o("div",{staticClass:"oa_p_content"},[o("div",{staticClass:"oa_mid"},[o("span",[t._v("As the publications produced by oneacre.online exist only temporarily\n        on the website, oneacre.online offers the opportunity to preserve a\n        copy of the publication. By acquiring a permanent private link, the\n        publication remains accessible to you or whomever else you choose to\n        share the link with, past the 3 months for which the work will be\n        available at oneacre.online. The donation starting at 3 euros, will\n        support the creation of further unprintable publications as well as\n        the artists that fuel their content.")]),t._v(" "),o("form",{staticClass:"oa_mid",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"oa_input",attrs:{type:"text",name:"name",placeholder:"Name",required:"required"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"oa_input",attrs:{type:"email",name:"email",placeholder:"Email",required:"required"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.exlibris,expression:"exlibris"}],staticClass:"oa_input",attrs:{type:"exlibris",name:"exlibris",placeholder:"Ex Libris - optional"},domProps:{value:t.exlibris},on:{input:function(e){e.target.composing||(t.exlibris=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.discountcode,expression:"discountcode"}],staticClass:"oa_input",attrs:{type:"discountcode",name:"discountcode",placeholder:"Cipher - if applicable "},domProps:{value:t.discountcode},on:{input:function(e){e.target.composing||(t.discountcode=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.payment_amount,expression:"payment_amount"}],staticClass:"horizontal_slider",attrs:{type:"range",name:"payment_amount",min:"3",max:"100",id:"range_value"},domProps:{value:t.payment_amount},on:{__r:function(e){t.payment_amount=e.target.value}}}),t._v(" "),o("div",{attrs:{id:"show_value"}},[t._v("\n          Choose your price: € "),o("span",{attrs:{id:"value"}},[t._v(t._s(t.payment_amount))])]),t._v(" "),o("input",{staticClass:"oa_input",attrs:{type:"hidden",name:"publication"},domProps:{value:t.publication}}),t._v(" "),o("input",{staticClass:"oa_input",attrs:{id:"oa_submit",type:"submit",value:"Purchase"}})]),t._v(" "),t._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"oa_small_font"},[e("p",[e("br"),this._v("\n          Much like books, oneacre.online hopes that the acquired links will\n          be borrowed, lend, and shared, perhaps forgotten at a friend’s inbox\n          or messenger app to keep versions of the work alive and circulating\n          when the publication will be no longer be available at\n          oneacre.online.\n        ")]),this._v(" "),e("br"),this._v(" "),e("p",[this._v("\n          Ex Libris: is usually a small print or decorative label pasted into\n          a book, often on the inside front cover, to indicate its owner. Ex\n          Libris follow a similar function at oneacre.online, where a word,\n          sentence or phrase of your choice will be added in the url you\n          purchase to designated that the link is part of your collection. ex.\n          Ex Libris: possessive pronoun url containing Ex Libris:\n          http://oneacre.online/publication-one-possessive-pronoun-48010513293185144\n        ")]),this._v(" "),e("br"),this._v(" "),e("p",[this._v("\n          Cipher: magic word or code that gives a discount or a free copy.\n          Probably somebody told you about it.\n        ")])])}],!1,null,"2b0a0316",null);e.a=component.exports},324:function(t,e,o){var content=o(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(63).default)("d6040c0c",content,!0,{sourceMap:!1})},368:function(t,e,o){"use strict";o(324)},369:function(t,e,o){(e=o(62)(!1)).push([t.i,".karina{--primary:#191919;--secondary:#d9d9d9;--bg-color:#fff;--font-color:#191919;background-color:var(--secondary)}",""]),t.exports=e},401:function(t,e,o){"use strict";o.r(e);o(87),o(21),o(22),o(12),o(64);var r=o(48),n=o(309),l=o(86);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=l.c.karina,m={components:{Form:n.a},data:function(){return d(d({},h),{},{artist:h,description:"oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works."})},head:function(){return{title:this.title,meta:Object(l.d)(this.title,this.description,this.image),bodyAttrs:{class:this.dir}}}},v=(o(368),o(30)),component=Object(v.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("Form",{attrs:{publication:this.artist.dir,artist:this.artist}})}),[],!1,null,null,null);e.default=component.exports}}]);