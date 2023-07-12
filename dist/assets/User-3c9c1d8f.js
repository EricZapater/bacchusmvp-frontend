var M=Object.defineProperty;var O=(t,o,a)=>o in t?M(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a;var U=(t,o,a)=>(O(t,typeof o!="symbol"?o+"":o,a),a);import{d as P,r as v,j as A,h as k,c as I,e as m,i,n as _,k as B,l as E,m as N,q,p as D,b as G,a as w,s as $,f as z,t as T,g as j,v as L,u as W,o as H,P as J,U as K,A as Q}from"./index-c73e34a4.js";import{c as X,a as S,b as Y,F as Z}from"./form-validator-2f00ec67.js";const R=t=>(D("data-v-63188081"),t=t(),G(),t),x=["onSubmit"],ee={class:"two-columns"},se=R(()=>m("label",{class:"block text-900 mb-2"},"Rol",-1)),ae={class:"two-columns"},oe={key:0,class:"form-user-changepassword"},te=R(()=>m("label",{class:"block mb-2",style:{color:"#fff"}},"...",-1)),re={class:"mt-2"},le=P({__name:"FormUser",props:{roles:{},user:{}},emits:["submit","change-password"],setup(t,{emit:o}){const a=t,u=v(!1),l=v(""),c=v(""),g=A(),V=X().shape({username:S().required("El correu és obligatori").max(250,"El nom d'usuari no pot superar els 250 carácters"),firstName:S().required("El nom és obligatori").max(250,"El nom no pot superar els 250 carácters"),lastName:S().required("Els cognoms són obligatoris").max(250,"Els cognoms no poden superar els 250 carácters"),disabled:Y().required()}),n=v({result:!1,errors:{}}),y=()=>{const s=new Z(V);n.value=s.validate(a.user)},h=s=>{const e=a.user;e.disabled=s,C()},C=async()=>{if(y(),n.value.result)o("submit",a.user);else{let s="";Object.entries(n.value.errors).forEach(e=>{s+=`${e[1].map(d=>d)}.   `}),g.add({severity:"warn",summary:"Formulari inválid",detail:s,life:5e3})}},p=()=>{u.value=!0},b=()=>{var e;if(!(l.value.length>4==c.value.length>4&&l.value===c.value)){g.add({severity:"warn",summary:"Contrasenya invàlida",detail:"Les contrasenyes han de coincidir i contenir més de 4 caràcters"});return}o("change-password",{username:(e=a.user)==null?void 0:e.username,password:l.value})};return(s,e)=>{const d=k("BaseInput"),F=k("Dropdown"),f=k("Button");return s.user?(w(),I("form",{key:0,onSubmit:q(C,["prevent"])},[m("section",ee,[i(d,{id:"username",class:_(["mb-2",{"p-invalid":n.value.errors.email}]),label:"Nom d'usuari",modelValue:s.user.username,"onUpdate:modelValue":e[0]||(e[0]=r=>s.user.username=r),disabled:"true"},null,8,["modelValue","class"]),m("div",null,[se,i(F,{modelValue:s.user.roleId,"onUpdate:modelValue":e[1]||(e[1]=r=>s.user.roleId=r),editable:"",options:s.roles,optionValue:"id",optionLabel:"name",class:_(["w-full",{"p-invalid":n.value.errors.city}])},null,8,["modelValue","options","class"])])]),m("section",ae,[i(d,{id:"firstName",class:_(["mb-2",{"p-invalid":n.value.errors.firstName}]),label:"Nom",modelValue:s.user.firstName,"onUpdate:modelValue":e[2]||(e[2]=r=>s.user.firstName=r)},null,8,["modelValue","class"]),i(d,{id:"lastName",class:_(["mb-2",{"p-invalid":n.value.errors.lastName}]),label:"Cognoms",modelValue:s.user.lastName,"onUpdate:modelValue":e[3]||(e[3]=r=>s.user.lastName=r)},null,8,["modelValue","class"])]),u.value===!0?(w(),I("section",oe,[i(d,{type:B($).PASSWORD,id:"passwordOne",class:"mb-2 w-full",label:"Contrasenya",modelValue:l.value,"onUpdate:modelValue":e[4]||(e[4]=r=>l.value=r)},null,8,["type","modelValue"]),i(d,{type:B($).PASSWORD,id:"passwordTwo",class:"mb-2",label:"Repetir contrasenya",modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=r=>c.value=r)},null,8,["type","modelValue"]),m("div",null,[te,i(f,{label:"Modificar",class:"mr-2",onClick:b})])])):E("",!0),m("div",re,[i(f,{type:"submit",label:"Guardar",class:"mr-2"}),s.user.disabled?(w(),N(f,{key:0,severity:"success",label:"Activar",class:"mr-2",onClick:e[6]||(e[6]=r=>h(!1))})):(w(),N(f,{key:1,label:"Desactivar",severity:"danger",class:"mr-2",onClick:e[7]||(e[7]=r=>h(!0))})),i(f,{severity:"secondary",label:"Canviar contrasenya",class:"mr-2",onClick:p})])],40,x)):E("",!0)}}});const ne=z(le,[["__scopeId","data-v-63188081"]]);class ie{constructor(){U(this,"apiClient");U(this,"resource");this.apiClient=T,this.resource="/role"}async GetAll(){try{let o=await this.apiClient.get(this.resource);if(o.status===200){const a=o.data;return console.log(a),a}}catch{}}async GetById(o){try{let a=await this.apiClient.get(`${this.resource}/${o}`);if(a.status===200){const u=a.data;return console.log(u),u}else console.log(a.data)}catch{}}}const me=P({__name:"User",setup(t){const o=j(),a=L(),u=W(),l=v(void 0),c=v(),g=new ie,V=new K,n=async()=>{l.value=await V.GetById(a.params.id),c.value=await g.GetAll(),l.value&&u.setMenuItem({icon:J.USER,title:`Usuari ${l.value.username}`,backButtonVisible:!0})};H(async()=>{await n()});const y=A(),h=async()=>{const p=l.value;let b="Usuari actualizat correctament";await V.Update(p)&&(y.add({severity:"success",summary:b,life:5e3}),o.back())},C=async p=>{await new Q().ChangePassword(p)?y.add({severity:"success",summary:"Canvi de contrasenya",detail:"Contrasenya actualitzada",life:1e4}):y.add({severity:"error",summary:"Canvi de contrasenya",detail:"Error al actualitzar contrasenya",life:1e4})};return(p,b)=>(w(),N(ne,{roles:c.value,user:l.value,onChangePassword:C,onSubmit:h},null,8,["roles","user"]))}});export{me as default};
