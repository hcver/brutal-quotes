(function(t){function e(e){for(var r,s,a=e[0],i=e[1],c=e[2],d=0,f=[];d<a.length;d++)s=a[d],u[s]&&f.push(u[s][0]),u[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,a=1;a<o.length;a++){var i=o[a];0!==u[i]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},u={app:0},n=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=i;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"41cb":function(t,e){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var r=o("2b0e"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("quote-list"),o("quote-form")],1)},n=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"quote-form-wrapper"},[o("div",{staticClass:"quote-form-border"}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote,expression:"quote"}],staticClass:"quote-input",attrs:{name:"quote",id:"",cols:"30",rows:"10",placeholder:"quote"},domProps:{value:t.quote},on:{input:function(e){e.target.composing||(t.quote=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"author-input",attrs:{type:"text",placeholder:"name"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),o("button",{staticClass:"submit-quote",on:{click:t.addQuote}},[t._v("Add quote")]),o("div",{staticClass:"quote-form-error-msg",class:{error:t.error}},[t._v("\n        Only losers try to submit an empty form :-) Haha LOSER!!! :D\n    ")]),o("div",{staticClass:"quote-form-succes-msg",class:{succes:t.succes}},[t._v("\n        Your quote is succesfully added! Brutal!!!!\n        To see your brutalistic miracle, "),o("a",{attrs:{href:"#quote-list-bottom"}},[t._v("Click here")])])])},a=[],i={data:function(){return{quote:"",author:""}},methods:{addQuote:function(){var t=this;""==this.quote||""==this.author?(this.$store.commit("eventFormError",!0),setTimeout(function(){t.$store.commit("eventFormError",!1)},3e3)):(this.$store.dispatch("addQuote",{Quote:this.quote,Author:this.author}),this.$store.commit("eventFormSucces",!0),setTimeout(function(){t.$store.commit("eventFormSucces",!1)},6e3))}},computed:{isQuoteSend:function(){return this.$store.state.quoteSend},error:function(){return this.$store.state.eventFormError},succes:function(){return this.$store.state.eventFormSucces}},watch:{isQuoteSend:function(t,e){t&&(this.quote="",this.author="",this.$store.commit("isQuoteSend",!1))}}},c=i,l=o("2877"),d=Object(l["a"])(c,s,a,!1,null,null,null);d.options.__file="QuoteForm.vue";var f=d.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"quote-list-wrapper"},[t._l(t.quotes,function(e){return o("div",{staticClass:"quote-wrapper"},[o("p",{staticClass:"quote"},[t._v(t._s(e.Quote))]),o("p",{staticClass:"author"},[t._v(t._s(e.Author))])])}),o("div",{attrs:{id:"quote-list-bottom"}})],2)},m=[],v={data:function(){return{quotes:this.$store.state._quotes}},computed:{getQuotes:function(){return this.quotes=this.$store.getters.isQuote}},watch:{getQuotes:function(){return this.$store.state._quotes}}},h=v,b=Object(l["a"])(h,p,m,!1,null,null,null);b.options.__file="QuoteList.vue";var q=b.exports,_={data:function(){return{}},components:{QuoteForm:f,QuoteList:q},created:function(){this.$store.dispatch("getFirebaseDatabase")}},g=_,y=Object(l["a"])(g,u,n,!1,null,null,null);y.options.__file="App.vue";var Q=y.exports,S=o("41cb"),w=o.n(S),$=o("2f62"),F=o("8aa5"),O=o.n(F),x={apiKey:"AIzaSyD2N8zkfIKpUsLZ5sIC29iu9gVVVLy5Ie0",authDomain:"brutalic-quote.firebaseapp.com",databaseURL:"https://brutalic-quote.firebaseio.com",projectId:"brutalic-quote",storageBucket:"brutalic-quote.appspot.com",messagingSenderId:"224415553056"};O.a.initializeApp(x);var C={database:O.a.database()};r["a"].use($["a"]),r["a"].use(C);var j=new $["a"].Store({state:{_quotes:[],quoteSend:!1,eventFormError:!1,eventFormSucces:!1},getters:{isQuote:function(t){return t._quotes}},mutations:{addQuote:function(t,e){t._quotes=e},isQuoteSend:function(t,e){t.quoteSend=e},eventFormError:function(t,e){t.eventFormError=e},eventFormSucces:function(t,e){t.eventFormSucces=e}},actions:{addQuote:function(t,e){C.database.ref("Quotes").push(e,function(e){e?t.commit("isQuoteSend",!1):t.commit("isQuoteSend",!0)})},getFirebaseDatabase:function(t){C.database.ref("Quotes").on("value",function(e){t.commit("addQuote",e.val())})}}}),E=o("5f30"),P=o.n(E);o("fce9");r["a"].use(P.a),new r["a"]({router:w.a,store:j,render:function(t){return t(Q)}}).$mount("#app")},fce9:function(t,e,o){}});
//# sourceMappingURL=app.1e2ddb2d.js.map