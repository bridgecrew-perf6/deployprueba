(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2800],{89890:function(e,r,t){"use strict";t.d(r,{r:function(){return c}});var n=t(30266),a=t(809),s=t.n(a),o=t(9669),u=t.n(o),c=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n,a,o,c,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:{},n=i.length>2&&void 0!==i[2]?i[2]:"POST",a=i.length>3&&void 0!==i[3]?i[3]:{},o=i.length>4&&void 0!==i[4]?i[4]:"json",a={Authorization:"Bearer "+localStorage.getItem("_tokenClient")},e.next=8,u()({url:"https://ramez-ecommerce.herokuapp.com/".concat(r),method:n,data:t,responseType:o,headers:a});case 8:return c=e.sent,e.abrupt("return",c.data);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},24410:function(e,r,t){"use strict";t.r(r);var n=t(92809),a=t(83789),s=t(30266),o=t(80318),u=t(809),c=t.n(u),i=t(15746),l=t(71230),p=t(67294),d=t(41003),f=t(71577),m=t(55019),h=t(932),x=t(39144),v=t(89890),b=t(37744),g=t(2924),C=t(95049),j=t(84751),w=t(11163),y=t(40074),k=t(97183),S=t(85893);function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var N=h.Z.Text,P=k.Z.Content,A=function(e){var r=g.Z.Option,t=(0,p.useState)("horizontal"),n=t[0],u=(t[1],(0,p.useState)(!1)),h=u[0],k=u[1],Z=(0,p.useState)([]),A=Z[0],F=Z[1],I=(0,p.useState)([]),O=I[0],D=I[1],R=(0,p.useState)(-1),T=R[0],G=R[1],V=(0,p.useState)(null),L=V[0],_=V[1],U=(0,p.useState)([]),q=U[0],z=U[1],B=(0,w.useRouter)(),X=(0,j.I0)(),H=(0,p.useState)(null),M=H[0],W=H[1],Y=d.Z.useForm(),J=(0,o.Z)(Y,1)[0],K="horizontal"===n?{labelCol:{span:4},wrapperCol:{span:14}}:null;(0,p.useEffect)((function(){null!=M&&(0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:case"end":return e.stop()}}),e)})))()}),[M]),(0,p.useEffect)((function(){null!=M?(0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:if(null==L){e.next=6;break}console.log("CARGAR DATA"),e.next=8;break;case 6:return e.next=8,ee();case 8:case"end":return e.stop()}}),e)})))():(0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:case"end":return e.stop()}}),e)})))()}),[M,L]);var Q=function(){var e=(0,s.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.r)("dataGeneral/getCountry",{},"get");case 3:r=e.sent,t=r.state?r.data:[],F(t),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:return e.abrupt("return","ok;");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=(0,s.Z)(c().mark((function e(r,t){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X((0,C.po)({loaderSpiner:!0})),e.prev=1,e.next=4,(0,v.r)("dataGeneral/getGeoParentId?idContry=".concat(r,"&idParent=").concat(t),{},"get");case 4:return n=e.sent,a=n.state?n.data:[],e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",[]);case 12:return e.prev=12,X((0,C.po)({loaderSpiner:!1})),e.finish(12);case 15:return e.abrupt("return","ok;");case 16:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(r,t){return e.apply(this,arguments)}}(),ee=function(){var e=(0,s.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X((0,C.po)({loaderSpiner:!0})),e.prev=1,e.next=4,(0,v.r)("userclients/getProfileListAddress",{},"get");case 4:r=e.sent,t=r.state?r.data:[],z(t),console.log("data",t),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",[]);case 13:return e.prev=13,X((0,C.po)({loaderSpiner:!1})),e.finish(13);case 16:return e.abrupt("return","ok;");case 17:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=(0,s.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J.setFieldsValue({Pais:r}),G(r),null!=r){e.next=6;break}D([]),e.next=31;break;case 6:return X((0,C.po)({loaderSpiner:!0})),e.prev=7,e.next=10,(0,v.r)("dataGeneral/getUbigeoLevel?idContry="+r,{},"get");case 10:if(t=e.sent,!((n=t.state?t.data:[]).length>0)){e.next=21;break}return e.next=15,$(r,"");case 15:return a=e.sent,n.forEach((function(e,r){0==r&&(e.listGeoAddress=a);({})[e.name]=null})),D(n),e.abrupt("return",n);case 21:return D([]),e.abrupt("return",[]);case 23:e.next=28;break;case 25:return e.prev=25,e.t0=e.catch(7),e.abrupt("return",e.t0);case 28:return e.prev=28,X((0,C.po)({loaderSpiner:!1})),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[7,25,28,31]])})));return function(r){return e.apply(this,arguments)}}(),te=function(){var e=(0,s.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G(r),null!=r){e.next=5;break}D([]),e.next=32;break;case 5:return X((0,C.po)({loaderSpiner:!0})),e.prev=6,e.next=9,(0,v.r)("dataGeneral/getUbigeoLevel?idContry="+r,{},"get");case 9:if(t=e.sent,!((n=t.state?t.data:[]).length>0)){e.next=21;break}return e.next=14,$(r,"");case 14:return a=e.sent,n.forEach((function(e,r){if(0==r){e.selectGeo=null;var t={};t[e.name]=null,J.setFieldsValue(t),e.listGeoAddress=a}})),D(n),J.setFieldsValue({sights:n}),e.abrupt("return",n);case 21:return D([]),J.setFieldsValue({sights:[]}),e.abrupt("return",[]);case 24:e.next=29;break;case 26:return e.prev=26,e.t0=e.catch(6),e.abrupt("return",e.t0);case 29:return e.prev=29,X((0,C.po)({loaderSpiner:!1})),e.finish(29);case 32:case"end":return e.stop()}}),e,null,[[6,26,29,32]])})));return function(r){return e.apply(this,arguments)}}(),ne=function(){var e=(0,s.Z)(c().mark((function e(r,t){var n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(t),J.setFieldsValue({Pais:r.idCountry}),e.next=4,te(r.idCountry);case 4:return n=e.sent,e.next=7,$(r.idCountry,"");case 7:return a=e.sent,n[0].selectGeo=""+r.geo.split(",")[0],n[0].listGeoAddress=a,(o={})[n[0].name]=parseInt(n[0].selectGeo),J.setFieldsValue(o),0,e.next=16,r.geo.split(",").forEach(function(){var e=(0,s.Z)(c().mark((function e(t,a){var s,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a>0)){e.next=8;break}return(s={})[n[a].name]=parseInt(t),J.setFieldsValue(s),e.next=6,$(r.idCountry,r.geo.split(",")[a-1]);case 6:o=e.sent,n[a].listGeoAddress=o;case 8:0;case 9:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}());case 16:J.setFieldsValue({numberStreet:r.numberStreet}),J.setFieldsValue({Flat:r.numberApartment}),J.setFieldsValue({Street:r.street}),J.setFieldsValue({Street:r.street}),J.setFieldsValue({PersonToReceive:r.personReceive}),D(n),k(!0);case 23:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),ae=function(){var e=(0,s.Z)(c().mark((function e(r,t){var n,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!((n=(0,a.Z)(O)).length>=r+1)){e.next=10;break}if(s=[],null==t){e.next=8;break}return e.next=7,$(T,t);case 7:s=e.sent;case 8:n.forEach((function(e,n){if(n==r&&(e.selectGeo=t),n==r+1){if(null==L){var a={};a[e.name]=null,J.setFieldsValue(a),e.selectGeo=null}e.listGeoAddress=s}if(n>=r+1){var o={};o[e.name]=null,J.setFieldsValue(o),e.selectGeo=null}})),D(n);case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",e.t0);case 15:return e.prev=15,X((0,C.po)({loaderSpiner:!1})),e.finish(15);case 18:return e.abrupt("return","ok;");case 19:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(r,t){return e.apply(this,arguments)}}(),se=q.map((function(e,r){return(0,S.jsx)(i.Z,{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:8},children:(0,S.jsxs)(x.Z,{className:"cardaddress",children:[(0,S.jsxs)("div",{className:"body-addres-text",children:[(0,S.jsxs)(N,{className:"text-address",children:[e.street," "]}),(0,S.jsx)(N,{className:"text-address",children:e.numberStreet}),(0,S.jsx)(N,{className:"text-address",children:e.numberApartment})]}),(0,S.jsx)("div",{className:"body-addres-text",children:(0,S.jsx)(N,{className:"text-address-geo",children:e.descriptionUbigeo})}),(0,S.jsx)(f.Z,{className:"btneditaddress",onClick:function(){ne(e,e.id)},children:"Editar"})]})},r)}));return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(b.Z,{className:"site-page-header",onBack:function(){h?(_(null),k(!1)):B.push("/Profile")},title:"Direcciones"}),(0,S.jsx)("div",{className:"headerAddress",children:0==h?(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(f.Z,{type:"primary",onClick:function(){k(!0)},children:"A\xd1ADIR DIRECCI\xd2N"})}):(0,S.jsx)(S.Fragment,{})}),1==h?(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(d.Z,E(E({className:"formEdit"},K),{},{form:J,ref:function(e){W(e)},name:"register",onFinish:function(){},scrollToFirstError:!0,layout:"vertical",children:(0,S.jsxs)(x.Z,{style:{width:"100%"},children:[(0,S.jsx)(d.Z.Item,{wrapperCol:{sm:24},label:"Pais",name:"Pais",rules:[{required:!0,message:"Seleccione Pais"}],children:(0,S.jsxs)(g.Z,{className:"formControlform formControl",placeholder:"Seleccione Pais",bordered:!0,onChange:function(e){re(e)},children:[(0,S.jsx)(r,{value:null,children:"Seleccione Pais"},-1),A.map((function(e,t){return(0,S.jsx)(r,{value:e.id,children:e.name},t)}))]})}),O.map((function(e,t){return(0,S.jsx)(d.Z.Item,{wrapperCol:{sm:24},labelCol:{sm:24},label:e.name,name:e.name,rules:[{required:!0,message:"seleccione "+e.name}],children:(0,S.jsxs)(g.Z,{placeholder:"seleccione "+e.name,bordered:!0,name:e.name,label:e.name,onChange:function(e){ae(t,e)},children:[(0,S.jsx)(r,{value:null,children:"seleccione "+e.name},"-"+e.name),(void 0==e.listGeoAddress?[]:e.listGeoAddress).map((function(e,n){return(0,S.jsx)(r,{value:e.id,children:e.name},e.id+"-"+t+"-"+n)}))]})},e.name)})),(0,S.jsx)(d.Z.Item,{wrapperCol:{sm:24},className:"formControlform formControl",name:"Street",label:"Calle",rules:[{required:!0,message:"Calle es requerido."}],children:(0,S.jsx)(m.Z,{autoComplete:"off",maxLength:250})}),(0,S.jsx)(d.Z.Item,{wrapperCol:{sm:24},className:"formControlform formControl",name:"numberStreet",label:"Numero",type:"number",rules:[{required:!0,message:"Calle es Numero."}],children:(0,S.jsx)(m.Z,{autoComplete:"off",maxLength:250})}),(0,S.jsx)(d.Z.Item,{wrapperCol:{sm:24},className:"formControlform formControl",name:"Flat",label:"Piso",rules:[{required:!0,message:"Piso es requerido."}],children:(0,S.jsx)(m.Z,{autoComplete:"off",maxLength:250})}),(0,S.jsx)(d.Z.Item,{wrapperCol:{sm:24},className:"formControlform formControl",name:"PersonToReceive",label:"persona a recibir",rules:[{required:!0,message:"Persona a recibir es requerido."}],children:(0,S.jsx)(m.Z,{autoComplete:"off",maxLength:250})}),(0,S.jsx)(f.Z,{className:"btnsave",type:"primary",onClick:function(){J.validateFields().then(function(){var e=(0,s.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:L,idgeo:J.getFieldValue("Distrito"),street:J.getFieldValue("Street"),numberstreet:J.getFieldValue("numberStreet"),numberapartment:J.getFieldValue("Flat"),personreceive:J.getFieldValue("PersonToReceive")},e.next=3,(0,v.r)("userClients/registerAddressProfile",t,"post");case 3:n=e.sent,console.log("respon",n),n.state?(y.Z.success({title:"DIRECCIONES",content:n.message}),k(!1)):y.Z.error({title:"DIRECCIONES",content:n.message});case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()).catch((function(e){console.log("errorInfo",e)}))},children:null==L?"A\xd1ADIR DIRECCI\xd2N":"EDITAR DIRECCI\xd2N"})]})}))}):(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(P,{className:"contentaddresslist",children:(0,S.jsx)(l.Z,{children:se})})})]})};r.default=p.memo(A)},95049:function(e,r,t){"use strict";t.d(r,{po:function(){return l},fl:function(){return p},NS:function(){return d},zs:function(){return f},rW:function(){return m},mb:function(){return h},v5:function(){return x}});var n="CHANGESELECTORDER",a="UPDATEFILTER",s="UPDATELISTCATEGORY",o="ADDCARD",u="SETVALUECOUNTCARD",c="UPDATELISTPRODUCTCOUNT",i="LOADERSPINER";function l(e){return{type:i,loaderSpiner:e.loaderSpiner}}function p(e){return{type:a,data:e}}function d(e){return{type:s,data:e}}function f(e){return{type:n,data:e}}function m(e){return{type:o,data:e}}function h(e){return{type:u,data:e}}function x(e){return console.log("setUpdateListProducts:",e.refreshList),{type:c,refreshList:e.refreshList}}},54325:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Main/FormAddressComponent",function(){return t(24410)}])}},function(e){e.O(0,[6138,853,932,636,1577,1752,9144,6316,6263,74,2246,1471,2924,4274,9774,2888,179],(function(){return r=54325,e(e.s=r);var r}));var r=e.O();_N_E=r}]);