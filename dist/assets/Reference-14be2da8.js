import{d as T,r as i,F as s,v as y,u as S,z as w,o as I,j as k,k as l,m as x,l as A,P as E,I as b,a as h}from"./index-e1f2f827.js";import{_ as B}from"./FormReference.vue_vue_type_script_setup_true_lang-ff0c19aa.js";import{u as C}from"./reference-ee955fc0.js";import{u as M}from"./tax-1cd55388.js";import{u as D}from"./referenceType-dcd3c232.js";import"./form-validator-d0c5af4e.js";import"./FileEntityPicker-2c4d6f3e.js";import"./file.service-c18c5abd.js";import"./functions-8d6e0d81.js";import"./v4-a960c1f4.js";import"./reference.service-89db32df.js";import"./base.service-136124b3.js";import"./index-68519385.js";const K=T({__name:"Reference",setup(F){const c=i(s.EDIT),u=y(),f=S(),p=M(),a=C(),d=D(),{reference:r}=w(a),n=i(""),m=i(""),v=async()=>{await a.fetchReference(n.value),p.fetchAll(),d.fetchAll();let e="";r.value?(c.value=s.EDIT,e=`Referència ${r.value.description}`):(c.value=s.CREATE,a.setNewReference(n.value),e="Alta de referència"),f.setMenuItem({icon:E.BUILDING,backButtonVisible:!0,title:e})};I(async()=>{n.value=u.params.id,m.value=u.params.module,await v()});const R=k(),_=async()=>{const e=r.value;let t=!1,o="";c.value===s.CREATE?(t=await a.createReference(e),t?o="Referència creada correctament":o="La referència + versió introduïda ja existeix"):(t=await a.updateReference(e.id,e),o="Referència actualizada correctament"),R.add({severity:t?"success":"warn",summary:o,life:5e3}),t&&b.back()};return(e,t)=>l(r)?(h(),x(B,{key:0,module:m.value,reference:l(r),onSubmit:_},null,8,["module","reference"])):A("",!0)}});export{K as default};
