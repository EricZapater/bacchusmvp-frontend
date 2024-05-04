import{_ as G}from"./ExerciseDatePicker.vue_vue_type_script_setup_true_lang-bd121bc6.js";import{_ as H}from"./FormCreateOrderOrInvoice.vue_vue_type_script_setup_true_lang-e7feed59.js";import{_ as Y}from"./DropdownCustomers.vue_vue_type_script_setup_true_lang-bb57db33.js";import{_ as z}from"./DropdownLifecycle.vue_vue_type_script_setup_true_lang-02070ccb.js";import{d as Q,g as J,j as K,x as W,u as X,r as k,E as Z,o as ee,P as p,h as b,c as B,i as s,w as n,k as r,G as te,a as E,e as d,C as v,D as y,n as se,l as ae}from"./index-1f9e3570.js";import{u as oe}from"./reference-79c88333.js";import{u as ie}from"./customers-bcffdfde.js";import{u as re}from"./lifecycle-2ff86d21.js";import{a as N,f as P,g as le}from"./functions-2e154ea4.js";import{u as ce}from"./masterData-1d6a5c56.js";import{u as ne}from"./budget-44080e08.js";import"./form-validator-f8953ae6.js";import"./_commonjsHelpers-725317a4.js";import"./reference.service-859533eb.js";import"./base.service-e02629e7.js";import"./index-a13a1f31.js";import"./v4-a960c1f4.js";import"./index-8f83f9ef.js";const de={class:"flex flex-wrap align-items-center justify-content-between gap-2"},ue={class:"datatable-filter-3"},me={class:"filter-field"},fe={class:"filter-field"},pe=d("label",{class:"block text-900"},"Client",-1),_e={class:"filter-field"},be=d("label",{class:"block text-900"},"Estat",-1),ve={class:"datatable-buttons"},ye=["onClick"],Le=Q({__name:"Budgets",setup(he){const I=J(),h=K(),R=W(),l=X(),g=ce(),u=ne(),V=oe(),S=ie(),w=re(),c=k({customerId:void 0,statusId:void 0}),m=Z({visible:!1,title:"Crear pressupost",closable:!0,position:"center",modal:!0});ee(async()=>{w.fetchOneByName("Budget"),V.fetchReferences(),S.fetchCustomers(),await g.fetchMasterData(),C(),await f(),l.setMenuItem({icon:p.APPLE,title:"Pressupostos"})});const C=()=>{var i;const o=new Date().getFullYear().toString(),e=(i=g.exercises)==null?void 0:i.find(a=>a.name===o);e&&(l.exercisePicker.exercise=e,l.exercisePicker.dates=[new Date(l.exercisePicker.exercise.startDate),new Date(l.exercisePicker.exercise.endDate)])},T=()=>{c.value.customerId=void 0,c.value.statusId=void 0,C(),f()},_=k({}),F=()=>({id:le(),customerId:"",exerciseId:"",date:new Date}),q=()=>{_.value=F(),m.visible=!0},f=async()=>{if(l.exercisePicker.dates){const o=N(l.exercisePicker.dates[0]),e=N(l.exercisePicker.dates[1]);await u.GetFiltered(o,e,c.value.customerId,c.value.statusId)}else h.add({severity:"info",summary:"Filtre invàlid",detail:"Seleccioni un període",life:5e3})},$=o=>{var i,a;const e=(a=(i=w.lifecycle)==null?void 0:i.statuses)==null?void 0:a.find(x=>x.id===o);return e?e.name:""},L=o=>{var i;const e=(i=S.customers)==null?void 0:i.find(a=>a.id===o);return e?e.comercialName:""},O=async()=>{m.visible=!1,await u.Create(_.value)&&I.push({path:`/budget/${_.value.id}`})},U=o=>{o.originalEvent.target.className.includes("grid_delete_column_button")||I.push({path:`/budget/${o.data.id}`})},M=async(o,e)=>{if(await u.GetAssociatedSalesOrders(e.id),u.order){h.add({severity:"warn",summary:"No es pot eliminar",detail:`El pressupost té la comanda ${u.order.number} associada`,life:5e3});return}R.require({message:"Està segur que vol eliminar el pressupost?",icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await u.Delete(e.id)&&(h.add({severity:"success",summary:"Eliminada",life:3e3}),await f())}})};return(o,e)=>{const i=b("Button"),a=b("Column"),x=b("DataTable"),j=b("Dialog");return E(),B(te,null,[s(x,{value:r(u).budgets,class:"small-datatable",tableStyle:"min-width: 100%","sort-field":"salesOrderNumber","sort-mode":"single","sort-order":1,scrollable:"",scrollHeight:"80vh",onRowClick:U},{header:n(()=>[d("div",de,[d("div",ue,[d("div",me,[s(G,{exercises:r(g).exercises,onRangeSelected:f},null,8,["exercises"])]),d("div",fe,[pe,s(Y,{label:"",modelValue:c.value.customerId,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value.customerId=t)},null,8,["modelValue"])]),d("div",_e,[be,s(z,{label:"",modelValue:c.value.statusId,"onUpdate:modelValue":e[1]||(e[1]=t=>c.value.statusId=t)},null,8,["modelValue"])])]),d("div",ve,[s(i,{class:"datatable-button mr-2",icon:r(p).FILTER,rounded:"",raised:"",onClick:f},null,8,["icon"]),s(i,{class:"datatable-button mr-2",icon:r(p).FILTER_SLASH,rounded:"",raised:"",onClick:T},null,8,["icon"]),s(i,{icon:r(p).PLUS,rounded:"",raised:"",onClick:q},null,8,["icon"])])])]),default:n(()=>[s(a,{field:"number",header:"Número",style:{width:"10%"}}),s(a,{field:"date",header:"Data",style:{width:"15%"},sortable:""},{body:n(t=>[v(y(r(P)(t.data.date)),1)]),_:1}),s(a,{header:"Client",style:{width:"20%"}},{body:n(t=>[v(y(L(t.data.customerId)),1)]),_:1}),s(a,{header:"Estat",style:{width:"20%"}},{body:n(t=>[v(y($(t.data.statusId)),1)]),_:1}),s(a,{field:"acceptanceDate",header:"Data d'acceptació",style:{width:"15%"}},{body:n(t=>[v(y(t.data.acceptanceDate?r(P)(t.data.acceptanceDate):""),1)]),_:1}),s(a,{field:"deliveryDays",header:"Dies d'entrega",style:{width:"10%"}}),s(a,{style:{width:"5%"}},{body:n(t=>{var D;return[t.data.statusId===((D=r(w).lifecycle)==null?void 0:D.initialStatusId)?(E(),B("i",{key:0,class:se([r(p).TIMES,"grid_delete_column_button"]),onClick:A=>M(A,t.data)},null,10,ye)):ae("",!0)]}),_:1})]),_:1},8,["value"]),s(j,{visible:m.visible,"onUpdate:visible":e[2]||(e[2]=t=>m.visible=t),header:m.title,closable:m.closable,modal:m.modal},{default:n(()=>[s(H,{"create-request":_.value,onSubmit:O},null,8,["create-request"])]),_:1},8,["visible","header","closable","modal"])],64)}}});export{Le as default};
