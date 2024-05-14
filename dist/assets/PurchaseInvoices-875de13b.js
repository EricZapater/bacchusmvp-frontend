import{_ as R}from"./ExerciseDatePicker.vue_vue_type_script_setup_true_lang-941a98b0.js";import{d as $,j,x as q,g as O,u as Y,r as A,o as H,P as p,h as v,c as x,i as s,w as n,k as l,a as k,e as d,C as f,D as h,n as U,l as z}from"./index-3b8fad0b.js";import{u as G,a as J}from"./purchaseInvoices-8406a3ca.js";import{a as S,f as D}from"./functions-2e154ea4.js";import{u as K}from"./lifecycle-fc73f11b.js";import{v as Q}from"./v4-a960c1f4.js";import"./index-30d8ed80.js";import"./base.service-95f208f7.js";import"./reference.service-d6c42ab4.js";import"./index-f03ae8d8.js";import"./suppliers.service-eb5d51e2.js";import"./_commonjsHelpers-725317a4.js";const W={class:"flex flex-wrap align-items-center justify-content-between gap-2"},X={class:"datatable-filter"},Z={class:"filter-field"},ee={class:"filter-field"},te=d("label",{class:"block text-900 mb-2"},"Proveïdor",-1),ae={class:"datatable-buttons"},se=["onClick"],re="PurchaseInvoice",oe="temges.purchaseinvoice.filter",De=$({__name:"PurchaseInvoices",setup(ie){const I=j(),P=q(),b=O(),c=Y(),g=K(),u=G(),y=J(),m=A({supplierId:void 0,exercise:void 0});H(async()=>{c.setMenuItem({icon:p.MONEY_BILL,title:"Factures de compra"}),await g.fetchOneByName(re),await u.fetchMasterData(),C(),await _()});const C=()=>{var r;const e=new Date().getFullYear().toString(),t=(r=u.masterData.exercises)==null?void 0:r.find(o=>o.name===e);t&&(c.exercisePicker.exercise=t,c.exercisePicker.dates=[new Date(c.exercisePicker.exercise.startDate),new Date(c.exercisePicker.exercise.endDate)])},N=()=>{c.cleanExercisePicker(),m.value.supplierId=void 0},_=async()=>{if(c.exercisePicker.dates){const e=S(c.exercisePicker.dates[0]),t=S(c.exercisePicker.dates[1]);await y.GetFiltered(e,t,void 0,void 0,m.value.supplierId),localStorage.setItem(oe,JSON.stringify(m.value))}else I.add({severity:"info",summary:"Filtre invàlid",detail:"Seleccioni un període",life:5e3})},E=e=>{var r;const t=(r=u.masterData.suppliers)==null?void 0:r.find(o=>o.id===e);return t?t.comercialName:""},w=e=>{var r,o;const t=(o=(r=g.lifecycle)==null?void 0:r.statuses)==null?void 0:o.find(i=>i.id===e);return t?t.name:""},B=e=>e.purchaseInvoiceDueDates?e.purchaseInvoiceDueDates.length===0?D(e.purchaseInvoiceDate):D(e.purchaseInvoiceDueDates[e.purchaseInvoiceDueDates.length-1].dueDate):"",L=()=>{b.push({path:`/purchaseInvoice/${Q()}`})},T=e=>{e.originalEvent.target.className.includes("grid_delete_column_button")||b.push({path:`/purchaseinvoice/${e.data.id}`})},F=(e,t)=>{P.require({target:e.currentTarget,message:`Està segur que vol eliminar la factura ${t.number}?`,icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await y.Delete(t.id)&&(I.add({severity:"success",summary:"Eliminada",life:3e3}),await _())}})};return(e,t)=>{const r=v("Dropdown"),o=v("Button"),i=v("Column"),V=v("DataTable");return k(),x("div",null,[s(V,{class:"small-datatable",tableStyle:"min-width: 100%",scrollable:"",scrollHeight:"80vh",sortMode:"multiple",value:l(y).purchaseInvoices,onRowClick:T},{header:n(()=>[d("div",W,[d("div",X,[d("div",Z,[s(R,{exercises:l(u).masterData.exercises,onRangeSelected:_},null,8,["exercises"])]),d("div",ee,[te,s(r,{modelValue:m.value.supplierId,"onUpdate:modelValue":t[0]||(t[0]=a=>m.value.supplierId=a),editable:"",options:l(u).masterData.suppliers,optionValue:"id",optionLabel:"comercialName",class:"w-full"},null,8,["modelValue","options"])])]),d("div",ae,[s(o,{class:"datatable-button mr-2",icon:l(p).FILTER,rounded:"",raised:"",onClick:_},null,8,["icon"]),s(o,{class:"datatable-button mr-2",icon:l(p).FILTER_SLASH,rounded:"",raised:"",onClick:N},null,8,["icon"]),s(o,{icon:l(p).PLUS,rounded:"",raised:"",onClick:L},null,8,["icon"])])])]),default:n(()=>[s(i,{field:"number",header:"Número",sortable:!0,style:{width:"10%"}}),s(i,{header:"Data",field:"purchaseInvoiceDate",sortable:"",style:{width:"10%"}},{body:n(a=>[f(h(l(D)(a.data.purchaseInvoiceDate)),1)]),_:1}),s(i,{header:"Proveïdor",style:{width:"15%"}},{body:n(a=>[f(h(E(a.data.supplierId)),1)]),_:1}),s(i,{header:"Núm. Fra. Proveïdor",style:{width:"15%"},field:"supplierNumber"}),s(i,{header:"Estat",style:{width:"15%"}},{body:n(a=>[f(h(w(a.data.statusId)),1)]),_:1}),s(i,{header:"Venciment",style:{width:"10%"}},{body:n(a=>[f(h(B(a.data)),1)]),_:1}),s(i,{header:"Import",style:{width:"10%"}},{body:n(a=>[f(h(a.data.netAmount)+" € ",1)]),_:1}),s(i,{style:{width:"5%"}},{body:n(a=>[w(a.data.statusId)==="Nova"?(k(),x("i",{key:0,class:U([l(p).TIMES,"grid_delete_column_button"]),onClick:M=>F(M,a.data)},null,10,se)):z("",!0)]),_:1})]),_:1},8,["value"])])}}});export{De as default};