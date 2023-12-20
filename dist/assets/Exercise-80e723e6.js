import{d as w,j as F,r as U,h as x,c as B,e as l,i as r,n as v,y as d,l as I,a as g,F as b,g as N,v as T,u as $,z as A,o as L,k as C,m as O,P as R}from"./index-a72117b0.js";import{c as S,a as y,e as E,f as q,F as M}from"./form-validator-f8953ae6.js";import{c as k}from"./functions-afe9fe15.js";import{u as z}from"./exercise-0152431b.js";import"./_commonjsHelpers-725317a4.js";import"./v4-a960c1f4.js";import"./index-f812ff3a.js";import"./base.service-2600e8bd.js";import"./reference.service-95116f81.js";const P={key:0},j={class:"two-columns"},G={class:"two-columns",style:{"margin-bottom":"1rem"}},J=l("label",{class:"block text-900 mb-2"},"Data inici",-1),H=l("label",{class:"block text-900 mb-2"},"Data fi",-1),K={class:"four-columns"},Q={class:"four-columns mt-2"},W=l("label",{class:"block text-900 mb-2"},"Desactivat",-1),X={class:"mt-2"},Y=w({__name:"FormExercise",props:{exercise:{}},emits:["submit","cancel"],setup(D,{emit:m}){const n=D,p=F(),V=S().shape({name:y().required("El nom és obligatori").max(250,"El nom no pot superar els 250 carácters"),description:y().required("La descripció és obligatori").max(250,"La descripció pot superar els 250 carácters"),startDate:E().required("La data d'inici es obligatoria"),endDate:E().required("La data final es obligatoria").min(q("startDate"),"La data final de l'exercici ha de ser posterior a l'inici")}),t=U({result:!1,errors:{}}),i=()=>{const e=new M(V);t.value=e.validate(n.exercise)},f=async()=>{if(i(),t.value.result)n.exercise.startDate=k(n.exercise.startDate),n.exercise.endDate=k(n.exercise.endDate),m("submit",n.exercise);else{let e="";Object.entries(t.value.errors).forEach(a=>{e+=`${a[1].map(o=>o)}.   `}),p.add({severity:"warn",summary:"Formulari inválid",detail:e,life:5e3})}};return(e,a)=>{const o=x("Calendar"),u=x("Checkbox"),c=x("Button");return e.exercise?(g(),B("form",P,[l("div",j,[r(d,{class:v(["mb-2",{"p-invalid":t.value.errors.name}]),label:"Nom",id:"name",modelValue:e.exercise.name,"onUpdate:modelValue":a[0]||(a[0]=s=>e.exercise.name=s)},null,8,["modelValue","class"]),r(d,{class:v(["mb-2",{"p-invalid":t.value.errors.description}]),label:"Descripció",id:"description",modelValue:e.exercise.description,"onUpdate:modelValue":a[1]||(a[1]=s=>e.exercise.description=s)},null,8,["modelValue","class"])]),l("div",G,[l("div",null,[J,r(o,{modelValue:e.exercise.startDate,"onUpdate:modelValue":a[2]||(a[2]=s=>e.exercise.startDate=s),dateFormat:"dd/mm/yy",class:v({"p-invalid":t.value.errors.startDate})},null,8,["modelValue","class"])]),l("div",null,[H,r(o,{modelValue:e.exercise.endDate,"onUpdate:modelValue":a[3]||(a[3]=s=>e.exercise.endDate=s),dateFormat:"dd/mm/yy",class:v({"p-invalid":t.value.errors.endDate})},null,8,["modelValue","class"])])]),l("section",K,[l("div",null,[r(d,{label:"Pressupostos",modelValue:e.exercise.budgetCounter,"onUpdate:modelValue":a[4]||(a[4]=s=>e.exercise.budgetCounter=s)},null,8,["modelValue"])]),l("div",null,[r(d,{label:"Comandes de venta",modelValue:e.exercise.salesOrderCounter,"onUpdate:modelValue":a[5]||(a[5]=s=>e.exercise.salesOrderCounter=s)},null,8,["modelValue"])]),l("div",null,[r(d,{label:"Albarans de venta",modelValue:e.exercise.deliveryNoteCounter,"onUpdate:modelValue":a[6]||(a[6]=s=>e.exercise.deliveryNoteCounter=s)},null,8,["modelValue"])]),l("div",null,[r(d,{label:"Factures de venta",modelValue:e.exercise.salesInvoiceCounter,"onUpdate:modelValue":a[7]||(a[7]=s=>e.exercise.salesInvoiceCounter=s)},null,8,["modelValue"])])]),l("div",Q,[l("div",null,[r(d,{label:"Albarans de recepció",modelValue:e.exercise.receiptCounter,"onUpdate:modelValue":a[8]||(a[8]=s=>e.exercise.receiptCounter=s)},null,8,["modelValue"])]),l("div",null,[r(d,{label:"Factures de compra",modelValue:e.exercise.purchaseInvoiceCounter,"onUpdate:modelValue":a[9]||(a[9]=s=>e.exercise.purchaseInvoiceCounter=s)},null,8,["modelValue"])]),l("div",null,[W,r(u,{modelValue:e.exercise.disabled,"onUpdate:modelValue":a[10]||(a[10]=s=>e.exercise.disabled=s),class:"w-full",binary:!0},null,8,["modelValue"])])]),l("div",X,[r(c,{label:"Guardar",class:"mr-2",onClick:f})])])):I("",!0)}}}),re=w({__name:"Exercise",setup(D){const m=U(b.EDIT),n=N(),p=T(),V=$(),t=z(),{exercise:i}=A(t),f=async()=>{await t.fetchOne(p.params.id);let o="";i.value?(m.value=b.EDIT,o=`Exercici ${i.value.name}`,i.value.startDate=new Date(i.value.startDate),i.value.endDate=new Date(i.value.endDate)):(m.value=b.CREATE,t.setNew(p.params.id),o="Alta d'exercici"),V.setMenuItem({icon:R.BUILDING,backButtonVisible:!0,title:o})};L(async()=>{await f()});const e=F(),a=async()=>{const o=i.value;let u=!1,c="";m.value===b.CREATE?(u=await t.create(o),c="Exercici creat correctament"):(u=await t.update(o.id,o),c="Exercici actualizat correctament"),u&&(e.add({severity:"success",summary:c,life:5e3}),n.back())};return(o,u)=>C(i)?(g(),O(Y,{key:0,exercise:C(i),onSubmit:a},null,8,["exercise"])):I("",!0)}});export{re as default};
