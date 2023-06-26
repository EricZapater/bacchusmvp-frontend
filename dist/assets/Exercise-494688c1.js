import{b as h}from"./vue-router-b024814c.js";import{j as k,k as _,f as d,c as N,e as t,h as i,n as u,d as C,o as w,u as g,ax as T,M as U,l as V,a as $,P as L}from"./index-2bfc80b2.js";import{u as I}from"./usetoast.esm-82b2df9e.js";import{F as p}from"./component-c8ee66ae.js";import{r as M}from"./router-059ec17d.js";import{B as y}from"./BaseInput-ac691025.js";import{c as q,a as D,e as E,f as A,F as R}from"./form-validator-1a569dfe.js";import{u as S}from"./exercise-add99abf.js";import"./runtime-dom.esm-bundler-0884c737.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./base.service-8b4a1a4e.js";const j={key:0},z={class:"two-columns"},G={class:"two-columns",style:{"margin-bottom":"1rem"}},O=t("label",{class:"block text-900 mb-2"},"Data inici",-1),P=t("label",{class:"block text-900 mb-2"},"Data fi",-1),H={class:"two-columns"},J=t("label",{class:"block text-900 mb-2"},"Comptador factures de compra",-1),K=t("label",{class:"block text-900 mb-2"},"Desactivat",-1),Q={class:"mt-2"},W=k({__name:"FormExercise",props:{exercise:{}},emits:["submit","cancel"],setup(x,{emit:n}){const c=x,b=I(),l=q().shape({name:D().required("El nom és obligatori").max(250,"El nom no pot superar els 250 carácters"),description:D().required("La descripció és obligatori").max(250,"La descripció pot superar els 250 carácters"),startDate:E().required("La data d'inici es obligatoria"),endDate:E().required("La data final es obligatoria").min(A("startDate"),"La data final de l'exercici ha de ser posterior a l'inici")}),s=_({result:!1,errors:{}}),f=()=>{const a=new R(l);s.value=a.validate(c.exercise)},v=async()=>{if(f(),s.value.result)n("submit",c.exercise);else{let a="";Object.entries(s.value.errors).forEach(e=>{a+=`${e[1].map(r=>r)}.   `}),b.add({severity:"warn",summary:"Formulari inválid",detail:a,life:5e3})}};return(a,e)=>{const r=d("Calendar"),m=d("InputNumber"),B=d("Checkbox"),F=d("Button");return a.exercise?(w(),N("form",j,[t("div",z,[i(y,{class:u(["mb-2",{"p-invalid":s.value.errors.name}]),label:"Nom",id:"name",modelValue:a.exercise.name,"onUpdate:modelValue":e[0]||(e[0]=o=>a.exercise.name=o)},null,8,["modelValue","class"]),i(y,{class:u(["mb-2",{"p-invalid":s.value.errors.description}]),label:"Descripció",id:"description",modelValue:a.exercise.description,"onUpdate:modelValue":e[1]||(e[1]=o=>a.exercise.description=o)},null,8,["modelValue","class"])]),t("div",G,[t("div",null,[O,i(r,{modelValue:a.exercise.startDate,"onUpdate:modelValue":e[2]||(e[2]=o=>a.exercise.startDate=o),dateFormat:"dd/mm/yy",class:u({"p-invalid":s.value.errors.startDate})},null,8,["modelValue","class"])]),t("div",null,[P,i(r,{modelValue:a.exercise.endDate,"onUpdate:modelValue":e[3]||(e[3]=o=>a.exercise.endDate=o),dateFormat:"dd/mm/yy",class:u({"p-invalid":s.value.errors.endDate})},null,8,["modelValue","class"])])]),t("div",H,[t("div",null,[J,i(m,{modelValue:a.exercise.purchaseInvoiceCounter,"onUpdate:modelValue":e[4]||(e[4]=o=>a.exercise.purchaseInvoiceCounter=o),class:"w-full mb-2"},null,8,["modelValue"])]),t("div",null,[K,i(B,{modelValue:a.exercise.disabled,"onUpdate:modelValue":e[5]||(e[5]=o=>a.exercise.disabled=o),class:"w-full",binary:!0},null,8,["modelValue"])])]),t("div",Q,[i(F,{label:"Guardar",class:"mr-2",onClick:v})])])):C("",!0)}}}),ne=k({__name:"Exercise",setup(x){const n=_(p.EDIT),c=h(),b=g(),l=S(),{exercise:s}=T(l),f=async()=>{await l.fetchOne(c.params.id);let e="";s.value?(n.value=p.EDIT,e=`Exercici ${s.value.name}`):(n.value=p.CREATE,l.setNew(c.params.id),e="Alta d'exercici"),b.setMenuItem({icon:L.BUILDING,backButtonVisible:!0,text:e})};U(async()=>{await f()});const v=I(),a=async()=>{const e=s.value;let r=!1,m="";n.value===p.CREATE?(r=await l.create(e),m="Exercici creat correctament"):(r=await l.update(e.id,e),m="Exercici actualizat correctament"),r&&(v.add({severity:"success",summary:m,life:5e3}),M.back())};return(e,r)=>V(s)?(w(),$(W,{key:0,exercise:V(s),onSubmit:a},null,8,["exercise"])):C("",!0)}});export{ne as default};