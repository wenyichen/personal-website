(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{43:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},57:function(e,n,t){},79:function(e,n){},80:function(e,n){},81:function(e,n){},82:function(e,n){},83:function(e,n){},84:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),i=(t(43),t(37)),o=t.n(i),s=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,86)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),i(e),o(e)}))},a=(t(47),t(13)),l=(t(48),t(3)),u=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(a.b,{to:"/",children:"wenyi chen"}),Object(l.jsx)("div",{children:"software engineer @ aws"})]})},j=t(17),d=t(28),b=t(39),f="wenyichen0310@gmail.com",h=(t(57),function(){var e=Object(c.useState)(!1),n=Object(j.a)(e,2),t=n[0],r=n[1],i=Object(c.useState)(!1),o=Object(j.a)(i,2),s=o[0],a=o[1],u="email";t&&(u=f),s&&(u="copied");var h=Object(d.b)(u,null,{from:{position:"absolute",left:"-50%",top:"0.5rem",transform:"translateX(-50%)",opacity:0},enter:{opacity:1},leave:{opacity:0}}),p=function(){a(!0),setTimeout((function(){return a(!1)}),1500)};return Object(l.jsx)("div",{className:"home-menu-email",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:h.map((function(e){var n=e.item,t=e.key,c=e.props;return Object(l.jsx)(b.CopyToClipboard,{text:f,onCopy:p,children:Object(l.jsx)(d.a.a,{style:c,children:n})},t)}))})}),p=function(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)("div",{className:"home-menu",children:[Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://medium.com/@wenyichen0310",children:"blog"}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/wenyichen-cs/",children:"linkedin"}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/wenyichen",children:"github"}),Object(l.jsx)(a.b,{to:"/resume",children:"resume"}),Object(l.jsx)(h,{})]})})},O=t(5),m=t(15),x=function(){return Object(l.jsx)("span",{children:"loading..."})},w=(t(84),!1),g=function e(n){w?n():setTimeout((function(){return e(n)}),100)},v=function(){var e,n=Object(c.useState)({read:function(){}}),t=Object(j.a)(n,2),r=t[0],i=t[1];Object(c.useEffect)((function(){g((function(){var e=window.gapi.client.request({path:"https://www.googleapis.com/drive/v3/files/".concat("1cH1u8KBP2EJSPJAuGXQMRtnLQRqvc2r2FasjSD6BxhY","/export"),params:{mimeType:"application/pdf"}});i(function(e){var n,t="pending",c=e.then((function(e){t="success",n=e}),(function(e){t="error",n=e}));return{read:function(){if("pending"===t)throw c;if("error"===t)console.log(n);else if("success"===t)return n}}}(e))}))}),[]);var o=(e=r.read())?function(e){for(var n=e.body,t=new Array(n.length),c=0;c<n.length;c++)t[c]=n.charCodeAt(c);var r=new Uint8Array(t);return new File([r],"Resume",{type:"application/pdf;base64"})}(e):void 0;return Object(l.jsx)("div",{className:"resume-document-container",children:Object(l.jsx)(m.a,{className:"resume-document",file:o,noData:"",loading:"",error:"failed to load resume",children:Object(l.jsx)(m.b,{pageNumber:1,size:"4A0",width:1e3})})})},y=function(){return Object(l.jsx)("div",{className:"resume-loading",children:Object(l.jsx)(x,{})})},S=function(){return Object(l.jsx)("div",{className:"resume",children:Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)(y,{}),children:Object(l.jsx)(v,{})})})},A=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)(a.a,{basename:"/personal-website",children:[Object(l.jsx)(u,{}),Object(l.jsxs)(O.c,{children:[Object(l.jsx)(O.a,{path:"/resume",children:Object(l.jsx)(S,{})}),Object(l.jsx)(O.a,{path:"/",children:Object(l.jsx)(p,{})})]})]})})};console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/personal-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GAPI_AUTH_TOKEN:"AIzaSyBlURUlghqBOfxJu3rc-XAwKH97XM2NHC8"})),m.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(m.c.version,"/pdf.worker.min.js"),window.gapi.load("client",(function(){console.log("AIzaSyBlURUlghqBOfxJu3rc-XAwKH97XM2NHC8"),window.gapi.client.init({apiKey:"AIzaSyBlURUlghqBOfxJu3rc-XAwKH97XM2NHC8"}).then((function(){w=!0})).catch((function(e){console.error(e)}))})),o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),s()}},[[85,1,2]]]);
//# sourceMappingURL=main.26b773d4.chunk.js.map