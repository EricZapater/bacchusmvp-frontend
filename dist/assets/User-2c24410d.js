var M=Object.defineProperty;var O=(r,o,a)=>o in r?M(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a;var k=(r,o,a)=>(O(r,typeof o!="symbol"?o+"":o,a),a);import{u as q,b as D}from"./vue-router-b024814c.js";import{j as P,k as v,f as S,c as B,e as m,h as i,n as _,l as I,d as E,a as N,q as G,s as z,o as w,au as T,u as j,M as L,P as W,aw as H}from"./index-2bfc80b2.js";import{b as J}from"./runtime-dom.esm-bundler-0884c737.js";import{c as K,a as U,b as Q,F as X}from"./form-validator-1a569dfe.js";import{u as A}from"./usetoast.esm-82b2df9e.js";import{B as $}from"./component-c8ee66ae.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{A as Z}from"./authentications.service-52628386.js";const R=r=>(G("data-v-63188081"),r=r(),z(),r),x=["onSubmit"],ee={class:"two-columns"},se=R(()=>m("label",{class:"block text-900 mb-2"},"Rol",-1)),ae={class:"two-columns"},oe={key:0,class:"form-user-changepassword"},re=R(()=>m("label",{class:"block mb-2",style:{color:"#fff"}},"...",-1)),te={class:"mt-2"},le=P({__name:"FormUser",props:{roles:{},user:{}},emits:["submit","change-password"],setup(r,{emit:o}){const a=r,u=v(!1),l=v(""),c=v(""),V=A(),g=K().shape({username:U().required("El correu és obligatori").max(250,"El nom d'usuari no pot superar els 250 carácters"),firstName:U().required("El nom és obligatori").max(250,"El nom no pot superar els 250 carácters"),lastName:U().required("Els cognoms són obligatoris").max(250,"Els cognoms no poden superar els 250 carácters"),disabled:Q().required()}),n=v({result:!1,errors:{}}),y=()=>{const s=new X(g);n.value=s.validate(a.user)},h=s=>{const e=a.user;e.disabled=s,C()},C=async()=>{if(y(),n.value.result)o("submit",a.user);else{let s="";Object.entries(n.value.errors).forEach(e=>{s+=`${e[1].map(d=>d)}.   `}),V.add({severity:"warn",summary:"Formulari inválid",detail:s,life:5e3})}},p=()=>{u.value=!0},b=()=>{var e;if(!(l.value.length>4==c.value.length>4&&l.value===c.value)){V.add({severity:"warn",summary:"Contrasenya invàlida",detail:"Les contrasenyes han de coincidir i contenir més de 4 caràcters"});return}o("change-password",{username:(e=a.user)==null?void 0:e.username,password:l.value})};return(s,e)=>{const d=S("BaseInput"),F=S("Dropdown"),f=S("Button");return s.user?(w(),B("form",{key:0,onSubmit:J(C,["prevent"])},[m("section",ee,[i(d,{id:"username",class:_(["mb-2",{"p-invalid":n.value.errors.email}]),label:"Nom d'usuari",modelValue:s.user.username,"onUpdate:modelValue":e[0]||(e[0]=t=>s.user.username=t),disabled:"true"},null,8,["modelValue","class"]),m("div",null,[se,i(F,{modelValue:s.user.roleId,"onUpdate:modelValue":e[1]||(e[1]=t=>s.user.roleId=t),editable:"",options:s.roles,optionValue:"id",optionLabel:"name",class:_(["w-full",{"p-invalid":n.value.errors.city}])},null,8,["modelValue","options","class"])])]),m("section",ae,[i(d,{id:"firstName",class:_(["mb-2",{"p-invalid":n.value.errors.firstName}]),label:"Nom",modelValue:s.user.firstName,"onUpdate:modelValue":e[2]||(e[2]=t=>s.user.firstName=t)},null,8,["modelValue","class"]),i(d,{id:"lastName",class:_(["mb-2",{"p-invalid":n.value.errors.lastName}]),label:"Cognoms",modelValue:s.user.lastName,"onUpdate:modelValue":e[3]||(e[3]=t=>s.user.lastName=t)},null,8,["modelValue","class"])]),u.value===!0?(w(),B("section",oe,[i(d,{type:I($).PASSWORD,id:"passwordOne",class:"mb-2 w-full",label:"Contrasenya",modelValue:l.value,"onUpdate:modelValue":e[4]||(e[4]=t=>l.value=t)},null,8,["type","modelValue"]),i(d,{type:I($).PASSWORD,id:"passwordTwo",class:"mb-2",label:"Repetir contrasenya",modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=t=>c.value=t)},null,8,["type","modelValue"]),m("div",null,[re,i(f,{label:"Modificar",class:"mr-2",onClick:b})])])):E("",!0),m("div",te,[i(f,{type:"submit",label:"Guardar",class:"mr-2"}),s.user.disabled?(w(),N(f,{key:0,severity:"success",label:"Activar",class:"mr-2",onClick:e[6]||(e[6]=t=>h(!1))})):(w(),N(f,{key:1,label:"Desactivar",severity:"danger",class:"mr-2",onClick:e[7]||(e[7]=t=>h(!0))})),i(f,{severity:"secondary",label:"Canviar contrasenya",class:"mr-2",onClick:p})])],40,x)):E("",!0)}}});const ne=Y(le,[["__scopeId","data-v-63188081"]]);class ie{constructor(){k(this,"apiClient");k(this,"resource");this.apiClient=T,this.resource="/role"}async GetAll(){try{let o=await this.apiClient.get(this.resource);if(o.status===200){const a=o.data;return console.log(a),a}}catch{}}async GetById(o){try{let a=await this.apiClient.get(`${this.resource}/${o}`);if(a.status===200){const u=a.data;return console.log(u),u}else console.log(a.data)}catch{}}}const we=P({__name:"User",setup(r){const o=q(),a=D(),u=j(),l=v(void 0),c=v(),V=new ie,g=new H,n=async()=>{l.value=await g.GetById(a.params.id),c.value=await V.GetAll(),l.value&&u.setMenuItem({icon:W.USER,text:`Usuari ${l.value.username}`,backButtonVisible:!0})};L(async()=>{await n()});const y=A(),h=async()=>{const p=l.value;let b="Usuari actualizat correctament";await g.Update(p)&&(y.add({severity:"success",summary:b,life:5e3}),o.back())},C=async p=>{await new Z().ChangePassword(p)?y.add({severity:"success",summary:"Canvi de contrasenya",detail:"Contrasenya actualitzada",life:1e4}):y.add({severity:"error",summary:"Canvi de contrasenya",detail:"Error al actualitzar contrasenya",life:1e4})};return(p,b)=>(w(),N(ne,{roles:c.value,user:l.value,onChangePassword:C,onSubmit:h},null,8,["roles","user"]))}});export{we as default};