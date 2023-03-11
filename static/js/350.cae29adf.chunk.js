"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[350],{9350:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(2791),r=n(9434),c=n(2e3),o=n(4942),s=n(1413),i=n(9439),l={name:"",phone:"",importantContact:!1},u="contact-form_wrapper__KizuZ",m="contact-form_label__eDkdO",h="contact-form_input__hOykG",p="contact-form_btn__H7sX5",f=n(184),d=function(){var e=(0,a.useState)((0,s.Z)({},l)),t=(0,i.Z)(e,2),n=t[0],d=t[1],_=(0,r.I0)(),x=function(e){var t=e.target,n=t.name,a=t.value,r=t.type,c=t.checked,i="checkbox"===r?c:a;d((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,o.Z)({},n,i))}))},b=n.name,v=n.phone,j=n.newValue,C=n.importantContact;return(0,f.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault(),_((0,c.v6)((0,s.Z)({},n))),d((0,s.Z)({},l))},children:[(0,f.jsx)("label",{className:m,children:"Name"}),(0,f.jsx)("input",{className:h,value:b,type:"text",name:"name",onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,f.jsx)("label",{className:m,children:"Number"}),(0,f.jsx)("input",{className:h,value:v,type:"tel",name:"phone",onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,f.jsx)("label",{className:m,children:"Important Contact"}),(0,f.jsx)("input",{name:"importantContact",value:j,checked:C,type:"checkbox",onChange:x}),(0,f.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},_=n(5653),x=function(e){return e.filter},b="filter-phonebook_wrapperFilter__vC0a5",v="filter-phonebook_labelFilter__KzwfD",j="filter-phonebook_inputFilter__j7DCe",C=function(){var e=(0,r.v9)(x),t=(0,r.I0)();return(0,f.jsxs)("form",{className:b,children:[(0,f.jsx)("label",{className:v,children:"Find contacts by name"}),(0,f.jsx)("input",{value:e,className:j,type:"text",name:"filter",onChange:function(e){var n=e.target;t((0,_.T)(n.value))}})]})},k=n(4141),N="contact-list_contactsList__VBg5-",g="contact-list_contactsText__P+FJA",w="contact-list_contactsBtn__zLHx9",y=function(){var e=(0,r.v9)(k.F4),t=(0,r.v9)(k.mk),n=(0,r.I0)(),a=e.map((function(e){var t=e.id,a=e.name,r=e.phone,o=e.importantContact;return(0,f.jsxs)("li",{style:{fontWeight:o?"bold":"normal"},children:[(0,f.jsxs)("span",{className:g,children:[a,": ",r]}),(0,f.jsx)("button",{className:w,onClick:function(){return function(e){var t=(0,c.in)(e);n(t)}(t)},children:"Delete"})]},t)})),o=Boolean(t.length);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:N,children:a})}),!o&&(0,f.jsx)("p",{children:"No contacts"})]})},Z="phonebook_conteinerPhonebook__lxBpY",F="phonebook_text__S15cN",A=function(){var e=(0,r.I0)();return(0,a.useEffect)((function(){e((0,c.CL)())}),[e]),(0,f.jsxs)("main",{className:Z,children:[(0,f.jsx)(d,{}),(0,f.jsx)("h2",{className:F,children:"Contacts"}),(0,f.jsx)(C,{}),(0,f.jsx)(y,{})]})},z=function(){return(0,f.jsx)(A,{})}},4141:function(e,t,n){n.d(t,{F4:function(){return c},SA:function(){return r},mk:function(){return a}});var a=function(e){return e.contacts.items},r=function(e){return e.contacts.items.filter((function(e){return e.importantContact}))},c=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){var t=e.name,n=e.phone;return t.toLowerCase().includes(a)||n.toLowerCase().includes(a)}))}}}]);
//# sourceMappingURL=350.cae29adf.chunk.js.map