import{d as w,z as g,j as C,r as k,h as c,k as a,c as L,e as t,i,n as p,y as E,l as I,a as B,F as V,v as M,u as S,o as q,m as R,P as N,C as $}from"./index-8ef16467.js";import{u as F}from"./expense-910d863d.js";import{c as z,a as x,F as P}from"./form-validator-167199ef.js";import"./index-df0f1bd7.js";import"./base.service-01d8aabb.js";const j={key:0},G={class:"four-columns"},O=t("label",{class:"block text-900 mb-2"},"Tipus:",-1),W={class:"mt-2"},H=t("label",{class:"block text-900 mb-2"},"Data Alta: ",-1),J={class:"mt-1"},K=t("label",{class:"block text-900 mb-2"},"Data Pagament: ",-1),Q={class:"mt-2"},X={class:"four-columns"},Y=t("label",{class:"block text-900 mb-2"},"Recurrent",-1),Z=t("label",{class:"block text-900 mb-2"},"Freqüència: ",-1),ee={class:"mt-1"},ae={class:"mt-1"},se=t("label",{class:"block text-900 mb-2"},"Data fi: ",-1),te=t("label",{class:"block text-900 mb-2"},"Descripció",-1),oe={class:"mt-2"},le=w({__name:"FormExpense",props:{expense:{}},emits:["submit","cancel"],setup(T,{emit:m}){const b=T,v=F(),{expense:e}=g(v),d=C(),f=z().shape({expenseTypeId:x().required("El tipus de despesa es obligatori"),creationDate:x().required("La data de creació es obligatoria"),paymentDate:x().required("La data de pagament es obligatoria"),amount:x().required("L'import es obligatori")}),y=k([{id:1,name:"Mensual"},{id:2,name:"Bimensual"},{id:3,name:"Trimestral"},{id:6,name:"Semestral"},{id:12,name:"Anual"}]),l=k({result:!1,errors:{}}),n=()=>{const r=new P(f);l.value=r.validate(b.expense)},u=async()=>{if(n(),l.value.result)m("submit",e.value);else{let r="";Object.entries(l.value.errors).forEach(s=>{r+=`${s[1].map(_=>_)}.   `}),d.add({severity:"warn",summary:"Formulari inválid",detail:r,life:5e3})}};return(r,s)=>{const _=c("Dropdown"),D=c("Calendar"),U=c("Checkbox"),h=c("Textarea"),A=c("Button");return a(e)?(B(),L("form",j,[t("section",G,[t("div",null,[O,i(_,{modelValue:a(e).expenseTypeId,"onUpdate:modelValue":s[0]||(s[0]=o=>a(e).expenseTypeId=o),editable:"",options:a(v).expenseTypes,optionValue:"id",optionLabel:"name",class:p(["w-full",{"p-invalid":l.value.errors.expenseTypeId}])},null,8,["modelValue","options","class"])]),t("div",W,[H,i(D,{id:"creationDate",modelValue:a(e).creationDate,"onUpdate:modelValue":s[1]||(s[1]=o=>a(e).creationDate=o),class:p({"p-invalid":l.value.errors.creationDate})},null,8,["modelValue","class"])]),t("div",J,[K,i(D,{id:"paymentDate",modelValue:a(e).paymentDate,"onUpdate:modelValue":s[2]||(s[2]=o=>a(e).paymentDate=o),class:p({"p-invalid":l.value.errors.paymentDate})},null,8,["modelValue","class"])]),t("div",Q,[i(E,{label:"Import",id:"amount",modelValue:a(e).amount,"onUpdate:modelValue":s[3]||(s[3]=o=>a(e).amount=o),class:p({"p-invalid":l.value.errors.amount})},null,8,["modelValue","class"])])]),t("section",X,[t("div",null,[Y,i(U,{modelValue:a(e).recurring,"onUpdate:modelValue":s[4]||(s[4]=o=>a(e).recurring=o),class:"w-full",binary:!0},null,8,["modelValue"])]),t("div",null,[Z,i(_,{modelValue:a(e).frecuency,"onUpdate:modelValue":s[5]||(s[5]=o=>a(e).frecuency=o),editable:"",options:y.value,optionValue:"id",optionLabel:"name",class:p(["w-full",{"p-invalid":l.value.errors.expenseTypeId}])},null,8,["modelValue","options","class"])]),t("div",ee,[i(E,{label:"Dia de pagament",id:"paymentDay",modelValue:a(e).paymentDay,"onUpdate:modelValue":s[6]||(s[6]=o=>a(e).paymentDay=o)},null,8,["modelValue"])]),t("div",ae,[se,i(D,{id:"endDate",modelValue:a(e).endDate,"onUpdate:modelValue":s[7]||(s[7]=o=>a(e).endDate=o)},null,8,["modelValue"])])]),t("div",null,[te,i(h,{modelValue:a(e).description,"onUpdate:modelValue":s[8]||(s[8]=o=>a(e).description=o),class:"w-full"},null,8,["modelValue"])]),t("div",oe,[i(A,{label:"Guardar",class:"mr-2",onClick:u})])])):I("",!0)}}}),me=w({__name:"Expense",setup(T){const m=k(V.EDIT),b=M(),v=S(),e=F(),{expense:d}=g(e),f=async()=>{await e.fetchExpense(b.params.id);let n="";d.value?(m.value=V.EDIT,n="Modificació de despeses"):(m.value=V.CREATE,e.setNewExpense(b.params.id),n="Alta de despeses"),v.setMenuItem({icon:N.WALLET,backButtonVisible:!0,title:n})};q(async()=>{await f()});const y=C(),l=async()=>{const n=d.value;let u=!1,r="";m.value===V.CREATE?(u=await e.createExpense(n),r="Despesa registrada correctament"):(u=await e.updateExpense(n.id,n),r="Despesa actualizada correctament"),u&&(y.add({severity:"success",summary:r,life:5e3}),$.back())};return(n,u)=>a(d)?(B(),R(le,{key:0,expense:a(d),onSubmit:l},null,8,["expense"])):I("",!0)}});export{me as default};