(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){e.exports=n(116)},116:function(e,t,n){"use strict";n.r(t);var r=n(110),a=n(111),l=n(114),c=n(113),u=n(52),o=n(2),s=n.n(o),i=n(112),h=n.n(i),f=n(53),m=n.n(f);n(215);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(e){Object(l.a)(n,e);var t=d(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={server_seed:"",amount:10},a}return Object(a.a)(n,[{key:"render",value:function(){for(var e=this,t=[this.state.server_seed],n=0;n<this.state.amount;n++)t.push(m.a.createHash("sha256").update(t[t.length-1]).digest("hex"));return s.a.createElement("div",{className:"App"},s.a.createElement("h3",null,"Enter the server seed of your game"),s.a.createElement("input",{value:this.state.server_seed,onChange:function(t){return e.setState({server_seed:t.target.value})}}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,"Enter the # of games to view before this one"),s.a.createElement("input",{value:this.state.amount,onChange:function(t){return e.setState({amount:t.target.value})}}),s.a.createElement("hr",null),s.a.createElement("h1",null,"Crash points:"),this.state.server_seed&&64===this.state.server_seed.length?s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Crash point"),s.a.createElement("th",null,"Seed"),s.a.createElement("th",null,"Hash (hmac with client seed)"))),s.a.createElement("tbody",null,t.map(function(e,t){var n=m.a.createHmac("sha256",e).update("0000000000000000000415ebb64b0d51ccee0bb55826e43846e5bea777d91966").digest("hex"),r=function(e,t){for(var n=0,r=e.length%4,a=r>0?r-4:0;a<e.length;a+=4)n=((n<<16)+parseInt(e.substring(a,a+4),16))%t;return 0===n};var a=function(e){if(r(e,15))return 0;var t=parseInt(e.slice(0,13),16),n=Math.pow(2,52);return(Math.floor((100*n-t)/(n-t))/100).toFixed(2)}(n);return s.a.createElement("tr",null,s.a.createElement("td",{style:{color:a<2?"red":"green"}},a),s.a.createElement("td",null,e),s.a.createElement("td",null,n))}))):s.a.createElement("h3",{style:{color:"red"}},"Please enter a server seed to view this table"))}}]),n}(s.a.Component),p=document.getElementById("root");h.a.render(s.a.createElement(v,null),p)},124:function(e,t){},126:function(e,t){},136:function(e,t){},138:function(e,t){},165:function(e,t){},166:function(e,t){},171:function(e,t){},173:function(e,t){},180:function(e,t){},199:function(e,t){},215:function(e,t,n){}},[[115,2,1]]]);
//# sourceMappingURL=main.0949e27b.chunk.js.map