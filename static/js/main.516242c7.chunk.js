(this["webpackJsonpreact-planner"]=this["webpackJsonpreact-planner"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(11),a=c.n(s),i=(c(17),c(4)),d=c(12),r=c(2),j=c(6),l=c(7),o=c(9),h=c(8),b=c(0),u=Object(n.createContext)(),v=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={isLightTheme:!0,light:{syntax:"#555",ui:"#ddd",bg:"#eee"},dark:{syntax:"#ddd",ui:"#333",bg:"#555"}},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(b.jsx)(u.Provider,{value:Object(i.a)({},this.state),children:this.props.children})}}]),c}(n.Component),O=function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("header",{className:"main-header",children:[Object(b.jsx)("a",{className:"main-header__brand",href:"/",children:Object(b.jsx)("div",{children:"Planner App"})}),Object(b.jsx)("div",{className:"main-header__right",children:Object(b.jsx)("a",{className:"btn btn-header",href:"/",children:"Log In"})})]})}}]),c}(n.Component);O.contextType=u;var m=function(e){var t=e.addTask,c=Object(n.useState)(""),s=Object(r.a)(c,2),a=s[0],i=s[1];return Object(b.jsxs)("form",{tabIndex:"0",className:"add-task",onSubmit:function(e){e.preventDefault(),a&&t(a),i("")},children:[Object(b.jsxs)("div",{className:"add-task__input",children:[Object(b.jsx)("label",{htmlFor:"",children:Object(b.jsx)("h3",{children:"Add Task"})}),Object(b.jsx)("input",{tabIndex:"0",type:"text",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(b.jsx)("button",{className:"btn btn-add",type:"submit",children:Object(b.jsx)("svg",{className:"add-task__icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})})]})},x=Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5rem",height:"1.5rem",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M12 1c6.065 0 11 4.935 11 11s-4.935 11-11 11-11-4.935-11-11 4.935-11 11-11zm0-1c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"})}),p=Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5rem",height:"1.5rem",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"})}),f=Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5rem",height:"1.5rem",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z"})}),g=Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5rem",height:"1.5rem",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})}),k=Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M17 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1zm5-16v22h-20v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h6v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 7h-16v13h16v-13zm-12-8c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm10 0c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2z"})}),w=function(e){var t=e.task,c=e.handleDelete,s=e.setEditedTask,a=Object(n.useState)(!1),i=Object(r.a)(a,2),d=i[0],j=i[1];return Object(b.jsxs)("div",{className:"task",id:t.id,style:{textDecoration:d?"line-through":"none"},children:[Object(b.jsxs)("div",{className:"task__body",onClick:function(){return j(!d)},children:[Object(b.jsx)("div",{className:"task__complete",children:d?p:x}),Object(b.jsx)("div",{className:"task__body-text",children:t.body})]}),Object(b.jsxs)("div",{className:"task__icons",children:[Object(b.jsx)("div",{className:"task__icons--edit",onClick:function(){return s({body:t.body,id:t.id})},children:f}),Object(b.jsx)("div",{className:"task__icons--delete",onClick:function(){return c(t.id)},children:g})]})]})},y=function(e){var t=e.tasks,c=e.handleDelete,n=e.setEditedTask,s=t.map((function(e){return Object(b.jsx)(w,{task:e,handleDelete:c,setEditedTask:n},e.id)}));return Object(b.jsxs)("div",{className:"task-list",children:[Object(b.jsxs)("div",{className:"task-list__header",children:[k,Object(b.jsx)("p",{children:"Task List"})]}),s]})},_=function(e){var t=e.editedTask,c=e.setToggleModal,s=e.handleEdit,a=Object(n.useState)(t),i=Object(r.a)(a,2),d=i[0],j=i[1];return Object(n.useEffect)((function(){document.querySelector("#edit-input").focus(),j(t.body)}),[t.body]),Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("div",{className:"backdrop",onClick:function(){return c(!1)}}),Object(b.jsxs)("div",{className:"edit-modal",children:[Object(b.jsx)("div",{className:"edit-modal__title",children:Object(b.jsx)("h2",{children:"Edit task"})}),Object(b.jsxs)("form",{id:"edit-form",onSubmit:function(e){return function(e,t,c){e.preventDefault(),s(t,c)}(e,d,t.id)},children:[Object(b.jsx)("input",{id:"edit-input",type:"text",value:d,onChange:function(e){return j(e.target.value)}}),Object(b.jsxs)("div",{className:"edit-modal__buttons",children:[Object(b.jsx)("button",{type:"button",className:"btn",onClick:function(){return c(!1)},children:"Cancel"}),Object(b.jsx)("button",{type:"submit",className:"btn",children:"Save"})]})]})]})]})};var N=function(){var e=Object(n.useState)([{body:"go to the gym",id:1},{body:"go shoping",id:2},{body:"go hiking",id:3}]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(4),j=Object(r.a)(a,2),l=j[0],o=j[1],h=Object(n.useState)(!0),u=Object(r.a)(h,2),x=u[0],p=u[1],f=Object(n.useState)(""),g=Object(r.a)(f,2),k=g[0],w=g[1];return document.querySelector("#root").addEventListener("keydown",(function(e){"Escape"===e.key&&p(!1)})),Object(n.useEffect)((function(){p(!x)}),[k]),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(v,{children:[Object(b.jsx)(O,{}),Object(b.jsx)(y,{tasks:c,handleDelete:function(e){var t=c.filter((function(t){return t.id!==e}));s(t)},setEditedTask:w}),Object(b.jsx)(m,{addTask:function(e){var t={body:e,id:l};s([].concat(Object(d.a)(c),[t])),o(l+1)}}),x&&Object(b.jsx)(_,{editedTask:k,handleEdit:function(e,t){var n=c,s=n.findIndex((function(e){return e.id===t}));n[s]=Object(i.a)(Object(i.a)({},n[s]),{},{body:e}),p(!x)},setToggleModal:p})]})})};a.a.render(Object(b.jsx)(N,{}),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.516242c7.chunk.js.map