(this.webpackJsonpnoticias_en_vivo=this.webpackJsonpnoticias_en_vivo||[]).push([[0],{10:function(e,t){e.exports={Noticias_key:"69f201b6a38ad34c31763ac55ebb97c2"}},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),s=c.n(r),n=c(8),i=c.n(n),o=(c(16),c(7)),l=c.n(o),j=c(9),d=c(2),b=c(3),u=c(5),h=c(4),p=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"card card-body mb-3 text-center",children:Object(a.jsxs)("form",{onSubmit:this.props.getNoticias,children:[Object(a.jsx)("div",{className:"form-group mb-3",children:Object(a.jsx)("input",{type:"text",name:"country",placeholder:"Your country name",className:"form-control",autoFocus:!0})}),Object(a.jsx)("button",{className:"btn btn-success text-center",children:"Get news"})]})})}}]),c}(r.Component),m=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this.props.n;return Object(a.jsxs)("div",{className:"card overflow-hidden border-0",style:x,children:[Object(a.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{src:e.image,alt:"imagen ilustrativa",className:"card-img-top",style:O})}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("p",{className:"card-title",children:[Object(a.jsx)("b",{children:"Title:"})," ",e.title]}),Object(a.jsxs)("p",{className:"card-text",children:[Object(a.jsx)("b",{children:"Description:"})," ",e.description]}),Object(a.jsxs)("p",{className:"card-subtitle",children:[Object(a.jsx)("b",{children:"Author:"})," ",e.author]}),Object(a.jsx)("a",{href:e.url,className:"btn btn-primary",children:"Go site"})]})]})}}]),c}(r.Component),x={textAlign:"justify",borderRadius:"25px",height:"500px",margin:"10px 2px"},O={height:"200px"},v=m,f=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container sinpadding",children:Object(a.jsx)("div",{className:"row",children:this.props.miState.articles?this.props.miState.articles.map((function(e,t){return Object(a.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(a.jsx)(v,{n:e})},t)})):null!=this.props.miState.articles?Object(a.jsx)("div",{className:"col-md-4 mx-auto",children:Object(a.jsx)("div",{className:"alert alert-danger",children:Object(a.jsx)("p",{children:"Please enter a country"})})}):Object(a.jsx)("div",{className:"col-md-4 mx-auto",children:Object(a.jsx)("div",{className:"card card-body",children:Object(a.jsx)("p",{children:" Not request yet"})})})})})}}]),c}(r.Component),y=c(10),N=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(d.a)(this,c);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={articles:null},e.getNoticias=function(){var t=Object(j.a)(l.a.mark((function t(c){var a,r,s,n,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),a=c.target.elements.country,!(r=a.value)){t.next=16;break}return"https://cors-anywhere.herokuapp.com/",s="".concat("https://cors-anywhere.herokuapp.com/","http://api.mediastack.com/v1/news?access_key=").concat(y.Noticias_key,"&countries=").concat(r),t.next=8,fetch(s);case 8:return n=t.sent,t.next=11,n.json();case 11:i=t.sent,o=i.data,e.setState({articles:o}),t.next=17;break;case 16:e.setState({articles:r});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container p-4",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-4 mx-auto",children:[Object(a.jsx)("div",{className:"card card-body bg-success mb-3 text-info text-center",children:Object(a.jsx)("h1",{className:"card-title",children:"Live news"})}),Object(a.jsx)(p,{getNoticias:this.getNoticias})]}),Object(a.jsx)(f,{miState:this.state})]})})}}]),c}(r.Component);i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c8e3cf36.chunk.js.map