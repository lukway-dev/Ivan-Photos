(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[0],{22:function(e,s,t){},29:function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),c=t(16),n=t.n(c),o=t(9),r=t(2),j=(t(22),t(10)),l=t(0),m=function(e){var s=e.id,t=e.image,a=e.handleZoomOpen;return Object(l.jsxs)("div",{className:"image",children:[Object(l.jsx)("img",{className:"image-principal",src:t}),Object(l.jsx)("img",{className:"image-cover",src:"./images/meme.jpeg",onClick:function(e){return a(s,e)}})]})},d=function(e){var s=e.imageId,t=e.images,i=e.handleZoomClose,c=Object(a.useState)(s),n=Object(j.a)(c,2),o=n[0],r=n[1],m=function(){r(o-1===-1?t.length-1:o-1)},d=function(){o===t.length-1?r(0):r(o+1)};return Object(l.jsxs)("div",{className:"slider",onKeyUp:function(e){console.log(e);var s=e.keyCode;37===s?m():39===s&&d()},children:[Object(l.jsx)("button",{className:"slider_button-left",title:"Im\xe1gen Anterior",onClick:m,children:Object(l.jsx)("i",{className:"fas fa-chevron-left"})}),Object(l.jsx)("img",{className:"slider_image",src:t[o].path}),Object(l.jsx)("button",{className:"slider_button-right",title:"Im\xe1gen Siguiente",onClick:d,children:Object(l.jsx)("i",{className:"fas fa-chevron-right"})}),Object(l.jsx)("button",{className:"slider_button-close",autoFocus:!0,onClick:i,children:Object(l.jsx)("i",{className:"fas fa-times"})}),Object(l.jsxs)("span",{className:"slider_counter",children:[o+1," of ",t.length]}),Object(l.jsxs)("div",{className:"slider_arrow_container",children:[Object(l.jsx)("p",{children:"Usa las Flechas"}),Object(l.jsxs)("div",{className:"slider_arrows",children:[Object(l.jsx)("img",{src:"./images/ArrowLeft.svg"}),Object(l.jsx)("img",{src:"./images/ArrowRight.svg"})]})]})]})},g=[{id:0,path:"./images/Centuoro - 1.jpg"},{id:1,path:"./images/Centuoro - 2.jpg"},{id:2,path:"./images/Centuoro - 3.jpg"},{id:3,path:"./images/Centuoro - 4.jpg"},{id:4,path:"./images/Centuoro - 5.jpg"},{id:5,path:"./images/Centuoro - 6.jpg"},{id:6,path:"./images/Centuoro - 7.jpg"},{id:7,path:"./images/Centuoro - 8.jpg"},{id:8,path:"./images/Centuoro - 9.jpg"},{id:9,path:"./images/Centuoro - 10.jpg"},{id:10,path:"./images/Centuoro - 11.jpg"},{id:11,path:"./images/Centuoro - 12.jpg"},{id:12,path:"./images/Centuoro - 1.jpg"},{id:13,path:"./images/Centuoro - 2.jpg"},{id:14,path:"./images/Centuoro - 3.jpg"},{id:15,path:"./images/Centuoro - 4.jpg"},{id:16,path:"./images/Centuoro - 5.jpg"},{id:17,path:"./images/Centuoro - 6.jpg"},{id:18,path:"./images/Centuoro - 7.jpg"},{id:19,path:"./images/Centuoro - 8.jpg"},{id:20,path:"./images/Centuoro - 9.jpg"},{id:21,path:"./images/Centuoro - 10.jpg"},{id:22,path:"./images/Centuoro - 11.jpg"},{id:23,path:"./images/Centuoro - 12.jpg"}],h=function(){var e=Object(a.useState)({hidden:!1,showImage:""}),s=Object(j.a)(e,2),t=s[0],i=s[1],c=function(e){console.log("open"),i({hidden:!0,imageId:e})};return Object(l.jsxs)("div",{className:"image_container",children:[g.map((function(e){return Object(l.jsx)(m,{id:e.id,image:e.path,handleZoomOpen:c},e.id)})),t.hidden?Object(l.jsx)(d,{imageId:t.imageId,images:g,handleZoomClose:function(){console.log("close"),i({hidden:!1,imageId:""})}}):Object(l.jsx)(l.Fragment,{})]})},b=function(){return Object(l.jsx)("section",{className:"section-fotos",children:Object(l.jsx)(h,{})})},u=function(){return Object(l.jsxs)("div",{className:"contact",children:[Object(l.jsx)("a",{className:"contact_link instagram",href:"https://www.instagram.com/ivan_centuoro",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"fab fa-instagram"})}),Object(l.jsx)("a",{className:"contact_link email",href:"https://www.instagram.com/ivan_centuoro",children:Object(l.jsx)("i",{className:"fas fa-envelope"})})]})},p=function(){return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)("p",{className:"copyright",children:"\xa9 Ivan Photos - 2021"}),Object(l.jsxs)("a",{className:"lukway_link",href:"https://www.lukway.site",children:["Powered by ",Object(l.jsx)("img",{className:"lukway_logo",src:"./images/lukway_logo.svg"})]}),Object(l.jsx)(u,{})]})},O=function(){return Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)("p",{children:"Logo va aqu\xed"}),Object(l.jsxs)("div",{className:"nav_button_container",children:[Object(l.jsx)(o.b,{className:"nav_button",to:"/",children:"Fotos"}),Object(l.jsx)(o.b,{className:"nav_button",to:"/reservaciones",children:"Hace tu Reserva"})]})]})},x=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{}),Object(l.jsx)(b,{}),Object(l.jsx)(p,{})]})},f=function(){return Object(l.jsxs)("div",{className:"oferta_card",children:[Object(l.jsx)("h3",{className:"oferta_title",children:"Oferta"}),Object(l.jsx)("p",{className:"oferta_precio",children:"\u20ac30"}),Object(l.jsxs)("ul",{className:"oferta_list",children:[Object(l.jsx)("li",{className:"oferta_list_item",children:"3 fotos"}),Object(l.jsx)("li",{className:"oferta_list_item",children:"Edits Profesionales"}),Object(l.jsx)("li",{className:"oferta_list_item",children:"3 fotos"}),Object(l.jsx)("li",{className:"oferta_list_item",children:"3 fotos"})]})]})},N=function(){return Object(l.jsxs)("section",{className:"section-precios",children:[Object(l.jsx)("h2",{className:"caption",children:"Reserva tu Sesi\xf3n"}),Object(l.jsxs)("p",{children:["Contactame por mis redes sociales o por email para reservar una sesi\xf3n",Object(l.jsx)("br",{}),"\xf3 para tener una oferta personalizada"]}),Object(l.jsxs)("div",{className:"oferta_container",children:[Object(l.jsx)(f,{}),Object(l.jsx)(f,{}),Object(l.jsx)(f,{})]})]})},v=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{}),Object(l.jsx)(N,{}),Object(l.jsx)(p,{})]})};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsxs)(o.a,{basename:"/Ivan-Photos",children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:x}),Object(l.jsx)(r.a,{exact:!0,path:"/reservaciones",component:v})]})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9ba27021.chunk.js.map