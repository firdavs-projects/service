(this.webpackJsonpustokor=this.webpackJsonpustokor||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),o=n(8),a=n.n(o),j=(n(15),n(2)),s=n(9),b=n(3);n(16);var u=function(e){var t=e.task,n=e.onComplete,r=e.onChange,i=e.onRemove,o=function(){n(Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}))};return Object(c.jsxs)("article",{children:[Object(c.jsx)("h5",{children:t.name}),Object(c.jsxs)("span",{children:["\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: ",function(e){var t=new Date(e);return t.getDate()+"."+t.getMonth()+"."+t.getFullYear()+"\u0433. "+t.getHours()+":"+t.getMinutes()}(t.created)]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ",t.category]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",t.phone]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["\u0426\u0435\u043d\u0430: ",t.price," \u0441\u043c\u043d"]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u044f\u0432\u043a\u0438: ",t.completed?"\u0417\u0430\u043a\u0440\u044b\u0442\u0430":"\u0410\u043a\u0442\u0438\u0432\u043d\u0430"]}),Object(c.jsx)("br",{}),t.completed?Object(c.jsx)("button",{onClick:o,children:"\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}):Object(c.jsx)("button",{onClick:o,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),Object(c.jsx)("button",{onClick:function(e){r(t.id)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),Object(c.jsx)("button",{onClick:function(e){i(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})]})},d=n(5),l=(n(17),{user:{id:1,name:"Firdavs",client:!0},id:0,completed:!1,created:0,name:"",category:"",phone:"",price:0});var O=function(e){var t=e.edited,n=void 0===t?l:t,i=e.onSave,o=e.onCancel,a=Object(r.useState)(l),s=Object(b.a)(a,2),u=s[0],O=s[1];Object(r.useEffect)((function(){O(n)}),[n]);var h=function(e){var t=e.target,n=t.name,c=t.value;O((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(d.a)({},n,c))}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{id:"Task-Form",onSubmit:function(e){e.preventDefault(),i(Object(j.a)(Object(j.a)({},u),{},{id:u.id||Date.now(),created:u.created||Date.now()})),O(l)},children:[Object(c.jsx)("textarea",{type:"text",onChange:h,value:u.name||"",name:"name",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043e\u0431\u044a\u0451\u043c\u044b \u0440\u0430\u0431\u043e\u0442"}),Object(c.jsx)("br",{}),Object(c.jsxs)("select",{name:"category",onChange:h,value:u.category||"",children:[Object(c.jsx)("option",{children:"\u041e\u0442\u0434\u0435\u043b\u043a\u0430 \u0438 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"}),Object(c.jsx)("option",{children:"\u041f\u043e\u043c\u043e\u0449\u044c \u043f\u043e \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u0443"}),Object(c.jsx)("option",{children:"\u0411\u044b\u0442\u043e\u0432\u043e\u0439 \u0440\u0435\u043c\u043e\u043d\u0442"}),Object(c.jsx)("option",{children:"\u0422\u0435\u0445\u043d\u0438\u043a\u0430 \u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"number",onChange:h,value:u.phone||"",name:"phone",placeholder:"\u0412\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"number",onChange:h,value:u.price||"",name:"price",placeholder:"\u0426\u0435\u043d\u0430"}),Object(c.jsx)("br",{}),n===l?Object(c.jsx)("button",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}):Object(c.jsx)("button",{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})]}),n!==l&&Object(c.jsx)("button",{onClick:function(e){o(),O(l)},children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})};var h=function(e){var t=e.tasks,n=e.onSaveTask,i=e.onEditTask,o=e.onTaskComplete,a=e.onTaskRemove,j=Object(r.useState)(),s=Object(b.a)(j,2),d=s[0],l=s[1],h=function(e){o(e)},p=function(e){var n=t.find((function(t){return t.id===e}));void 0!==n&&l(n)},x=function(e){a(e)};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),Object(c.jsx)("span",{}),Object(c.jsx)(O,{edited:d,onSave:function(e){if(void 0!==d)return i(e),void l(void 0);n(e),l(void 0)},onCancel:function(){l(void 0)}}),Object(c.jsx)("h3",{children:"\u041c\u043e\u0438 \u0437\u0430\u044f\u0432\u043a\u0438"}),t.map((function(e){return Object(c.jsx)(u,{task:e,onComplete:h,onChange:p,onRemove:x},e.id)}))]})};var p=function(e){var t=e.task;return Object(c.jsxs)("article",{children:[Object(c.jsx)("h5",{children:t.name}),Object(c.jsxs)("span",{children:["\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: ",function(e){var t=new Date(e);return t.getDate()+"."+t.getMonth()+"."+t.getFullYear()+"\u0433. "+t.getHours()+":"+t.getMinutes()}(t.created)]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["\u041a\u043b\u0438\u0435\u043d\u0442: ",t.user.name]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ",t.category]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",t.phone]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["\u0426\u0435\u043d\u0430: ",t.price," \u0441\u043c\u043d"]}),Object(c.jsx)("br",{})]})};var x=function(e){var t=e.tasks;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"\u0417\u0430\u0434\u0430\u0447\u0438"}),Object(c.jsx)("span",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0443\u044e \u0432\u0430\u043c \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c"}),t.map((function(e){return Object(c.jsx)(p,{task:e},e.id)}))]})};var f=function(){var e=Object(r.useState)(!0),t=Object(b.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)([{user:{id:2,name:"Abdu",client:!1,phone:992111010036},id:2,completed:!1,created:1608549423650,name:"\u041d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u043b\u0435\u0438\u0442\u044c \u043e\u0431\u043e\u0438 25 \u043c2",category:"\u041e\u0442\u0434\u0435\u043b\u043a\u0430 \u0438 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e",phone:992929277725,price:200},{user:{id:1,name:"Firdavs",client:!0,phone:992989077725},id:1,completed:!0,created:1608549423600,name:"\u041f\u043e\u0447\u0438\u043d\u0438\u0442\u044c \u043a\u0440\u0430\u043d",category:"\u0411\u044b\u0442\u043e\u0432\u043e\u0439 \u0440\u0435\u043c\u043e\u043d\u0442",phone:992989077725,price:80}]),a=Object(b.a)(o,2),u=a[0],d=a[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"Ustokor.com"})}),Object(c.jsx)("button",{id:"Change-Client-Button",onClick:function(){i(!n)},children:n?"\u0421\u0442\u0430\u0442\u044c \u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u043c":"\u0421\u0442\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u043e\u043c"}),n?Object(c.jsx)(h,{tasks:u,onSaveTask:function(e){d((function(t){return[Object(j.a)({},e)].concat(Object(s.a)(t))}))},onEditTask:function(e){d((function(t){return t.map((function(t){return t.id!==e.id?t:Object(j.a)({},e)}))}))},onTaskRemove:function(e){d((function(t){return t.filter((function(t){return t.id!==e}))}))},onTaskComplete:function(e){d((function(t){return t.map((function(t){return t.id!==e.id?t:Object(j.a)({},e)}))}))}}):Object(c.jsx)(x,{tasks:u.filter((function(e){return!e.completed}))})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.c1e1be90.chunk.js.map