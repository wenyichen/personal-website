(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{43:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},57:function(e,n,t){},79:function(e,n){},80:function(e,n){},81:function(e,n){},82:function(e,n){},83:function(e,n){},84:function(e,n,t){},85:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),i=(t(43),t(37)),o=t.n(i),a=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,87)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),i(e),o(e)}))},s=(t(47),t(13)),l=(t(48),t(3)),u=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(s.b,{to:"/",children:"wenyi chen"}),Object(l.jsx)("div",{children:"software engineer @ aws"})]})},d=t(17),j=t(28),b=t(39),h="https://www.linkedin.com/in/wenyichen-cs/",f="wenyichen0310@gmail.com",m="mailto:".concat(f),p=(t(57),function(){var e=Object(c.useState)(!1),n=Object(d.a)(e,2),t=n[0],r=n[1],i=Object(c.useState)(!1),o=Object(d.a)(i,2),a=o[0],s=o[1],u="email";t&&(u=f),a&&(u="copied");var h=Object(j.b)(u,null,{from:{position:"absolute",left:"-50%",transform:"translateX(-50%)",opacity:0},enter:{opacity:1},leave:{opacity:0}}),m=function(){s(!0),setTimeout((function(){return s(!1)}),1500)};return Object(l.jsx)("div",{className:"home-menu-email",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},onTouchStart:function(){r(!0),setTimeout((function(){return r(!1)}),3e3)},children:h.map((function(e){var n=e.item,t=e.key,c=e.props;return Object(l.jsx)(b.CopyToClipboard,{text:f,onCopy:m,children:Object(l.jsx)(j.a.a,{style:c,children:n})},t)}))})}),O=function(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)("div",{className:"home-menu",children:[Object(l.jsx)(s.b,{to:"/about",children:"about"}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://medium.com/@wenyichen0310",children:"blog"}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:h,children:"linkedin"}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/wenyichen",children:"github"}),Object(l.jsx)(s.b,{to:"/resume",children:"resume"}),Object(l.jsx)(p,{})]})})},x=t(5),w=t(15),g=function(){return Object(l.jsx)("span",{children:"loading..."})},v=(t(84),!1),y=function e(n){v?n():setTimeout((function(){return e(n)}),100)},k=function(){var e,n=Object(c.useState)({read:function(){}}),t=Object(d.a)(n,2),r=t[0],i=t[1];Object(c.useEffect)((function(){y((function(){var e=window.gapi.client.request({path:"https://www.googleapis.com/drive/v3/files/".concat("1cH1u8KBP2EJSPJAuGXQMRtnLQRqvc2r2FasjSD6BxhY","/export"),params:{mimeType:"application/pdf"}});i(function(e){var n,t="pending",c=e.then((function(e){t="success",n=e}),(function(e){t="error",n=e}));return{read:function(){if("pending"===t)throw c;if("error"===t)console.log(n);else if("success"===t)return n}}}(e))}))}),[]);var o=(e=r.read())?function(e){for(var n=e.body,t=new Array(n.length),c=0;c<n.length;c++)t[c]=n.charCodeAt(c);var r=new Uint8Array(t);return new File([r],"Resume",{type:"application/pdf;base64"})}(e):void 0;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("a",{className:"resume-download",onClick:function(){return o&&function(e){var n=window.URL.createObjectURL(e),t=document.createElement("a");t.href=n,t.setAttribute("download","WenyiChenResume.pdf"),document.body.appendChild(t),t.click(),t&&t.parentNode&&t.parentNode.removeChild(t)}(o)},children:"download"}),Object(l.jsx)("div",{className:"resume-document-container",children:Object(l.jsx)(w.a,{className:"resume-document",file:o,noData:"",loading:"",error:"failed to load resume",children:Object(l.jsx)(w.b,{pageNumber:1,size:"4A0",width:1e3})})})]})},N=function(){return Object(l.jsx)("div",{className:"resume-loading",children:Object(l.jsx)(g,{})})},C=function(){return Object(l.jsx)("div",{className:"resume",children:Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)(N,{}),children:Object(l.jsx)(k,{})})})},S=(t(85),function(){return Object(l.jsx)("div",{className:"about",children:Object(l.jsxs)("div",{className:"about-content",children:[Object(l.jsx)("h3",{className:"about-title",children:"about"}),Object(l.jsx)("p",{children:"hi! i'm wenyi."}),Object(l.jsx)("p",{children:"i'm a software engineer currently working at aws in the bay area. before that, i studied at ucsd for my undergrad in computer science."}),Object(l.jsx)("p",{children:"i'm interested in full-stack web development and artificial intelligence. i enjoy delivering new products and tackling hard challenges."}),Object(l.jsx)("p",{children:"in my free time i like to trade stonks, drink beer, and travel."}),Object(l.jsxs)("p",{children:["feel free to connect on",Object(l.jsxs)("a",{target:"_blank",rel:"noreferrer",href:h,children:[" ","linkedin"," "]}),"or reach out through",Object(l.jsxs)("a",{href:m,children:[" ","email"]}),"!"]})]})})}),A=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)(s.a,{basename:"",children:[Object(l.jsx)(u,{}),Object(l.jsxs)(x.d,{children:[Object(l.jsx)(x.b,{path:"/about",children:Object(l.jsx)(S,{})}),Object(l.jsx)(x.b,{path:"/resume",children:Object(l.jsx)(C,{})}),Object(l.jsx)(x.b,{exact:!0,path:"/",children:Object(l.jsx)(O,{})}),Object(l.jsx)(x.b,{children:Object(l.jsx)(x.a,{to:"/"})})]})]})})};w.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(w.c.version,"/pdf.worker.min.js"),window.gapi.load("client",(function(){window.gapi.client.init({apiKey:"AIzaSyBlURUlghqBOfxJu3rc-XAwKH97XM2NHC8"}).then((function(){v=!0})).catch((function(e){console.error(e)}))})),o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),a()}},[[86,1,2]]]);
//# sourceMappingURL=main.0e479db2.chunk.js.map