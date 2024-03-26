import{_ as G}from"./ExerciseDatePicker.vue_vue_type_script_setup_true_lang-567cb20c.js";import{_ as H}from"./FormCreateOrderOrInvoice.vue_vue_type_script_setup_true_lang-9a22dcd7.js";import{d as Y,g as z,j as Q,x as J,u as K,r as k,E as W,o as X,P as m,h as f,c as I,i as e,w as d,k as o,G as Z,a as N,e as u,C as S,D as w,n as ee,l as te}from"./index-b40c6ded.js";import{u as ae}from"./order-3925256b.js";import{u as se}from"./reference-c2502c33.js";import{u as oe}from"./customers-bd42da68.js";import{u as re}from"./lifecycle-5c03d44c.js";import{a as E,f as P,g as ie}from"./functions-79f2dbc4.js";import{u as le}from"./masterData-115fcf9b.js";import"./form-validator-f8953ae6.js";import"./_commonjsHelpers-725317a4.js";import"./index-fe53ec88.js";import"./base.service-265c7e5a.js";import"./reference.service-9da581c8.js";import"./index-21bedaf3.js";import"./v4-a960c1f4.js";const ce={class:"flex flex-wrap align-items-center justify-content-between gap-2"},ne={class:"datatable-filter"},de={class:"filter-field"},ue={class:"filter-field"},me=u("label",{class:"block text-900 mb-2"},"Client",-1),fe={class:"datatable-buttons"},pe=["onClick"],Re=Y({__name:"SalesOrders",setup(_e){const x=z(),C=Q(),O=J(),r=K(),v=le(),p=ae(),R=se(),g=oe(),y=re(),_=k({customerId:void 0,referenceId:void 0}),n=W({visible:!1,title:"Crear comanda",closable:!0,position:"center",modal:!0});X(async()=>{y.fetchOneByName("SalesOrder"),R.fetchReferences(),g.fetchCustomers(),await v.fetchMasterData(),T(),await h(),r.setMenuItem({icon:m.APPLE,title:"Comandes"})});const T=()=>{var l;const s=new Date().getFullYear().toString(),t=(l=v.exercises)==null?void 0:l.find(c=>c.name===s);t&&(r.exercisePicker.exercise=t,r.exercisePicker.dates=[new Date(r.exercisePicker.exercise.startDate),new Date(r.exercisePicker.exercise.endDate)])},B=()=>{r.cleanExercisePicker(),_.value.customerId=void 0},b=k({}),F=()=>({id:ie(),customerId:"",exerciseId:"",date:new Date}),V=()=>{b.value=F(),n.visible=!0},h=async()=>{if(r.exercisePicker.dates){const s=E(r.exercisePicker.dates[0]),t=E(r.exercisePicker.dates[1]);await p.GetFiltered(s,t,_.value.customerId)}else C.add({severity:"info",summary:"Filtre invàlid",detail:"Seleccioni un període",life:5e3})},q=s=>{var l,c;const t=(c=(l=y.lifecycle)==null?void 0:l.statuses)==null?void 0:c.find(i=>i.id===s);return t?t.name:""},L=async()=>{n.visible=!1,await p.Create(b.value)&&x.push({path:`/salesorder/${b.value.id}`})},M=s=>{s.originalEvent.target.className.includes("grid_delete_column_button")||x.push({path:`/salesorder/${s.data.id}`})},U=(s,t)=>{O.require({message:"Està segur que vol eliminar la comanda?",icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await p.Delete(t.id)&&(C.add({severity:"success",summary:"Eliminada",life:3e3}),await h())}})};return(s,t)=>{const l=f("Dropdown"),c=f("Button"),i=f("Column"),$=f("DataTable"),j=f("Dialog");return N(),I(Z,null,[e($,{value:o(p).salesOrders,class:"small-datatable",tableStyle:"min-width: 100%","sort-field":"salesOrderNumber","sort-mode":"single","sort-order":1,scrollable:"",scrollHeight:"80vh",onRowClick:M},{header:d(()=>[u("div",ce,[u("div",ne,[u("div",de,[e(G,{exercises:o(v).exercises,onRangeSelected:h},null,8,["exercises"])]),u("div",ue,[me,e(l,{modelValue:_.value.customerId,"onUpdate:modelValue":t[0]||(t[0]=a=>_.value.customerId=a),editable:"",options:o(g).customers,optionValue:"id",optionLabel:"comercialName",class:"w-full"},null,8,["modelValue","options"])])]),u("div",fe,[e(c,{class:"datatable-button mr-2",icon:o(m).FILTER,rounded:"",raised:"",onClick:h},null,8,["icon"]),e(c,{class:"datatable-button mr-2",icon:o(m).FILTER_SLASH,rounded:"",raised:"",onClick:B},null,8,["icon"]),e(c,{icon:o(m).PLUS,rounded:"",raised:"",onClick:V},null,8,["icon"])])])]),default:d(()=>[e(i,{field:"number",header:"Número",sortable:"",style:{width:"10%"}}),e(i,{field:"date",header:"Data",style:{width:"10%"},sortable:""},{body:d(a=>[S(w(o(P)(a.data.date)),1)]),_:1}),e(i,{field:"expectedDate",header:"Data Entrega",style:{width:"10%"},sortable:""},{body:d(a=>[S(w(a.data.expectedDate?o(P)(a.data.expectedDate):""),1)]),_:1}),e(i,{field:"customerComercialName",header:"Client",style:{width:"30%"}}),e(i,{field:"customerNumber",header:"Comanda client",style:{width:"15%"}}),e(i,{header:"Estat",style:{width:"20%"}},{body:d(a=>[S(w(q(a.data.statusId)),1)]),_:1}),e(i,{style:{width:"5%"}},{body:d(a=>{var D;return[a.data.statusId===((D=o(y).lifecycle)==null?void 0:D.initialStatusId)?(N(),I("i",{key:0,class:ee([o(m).TIMES,"grid_delete_column_button"]),onClick:A=>U(A,a.data)},null,10,pe)):te("",!0)]}),_:1})]),_:1},8,["value"]),e(j,{visible:n.visible,"onUpdate:visible":t[1]||(t[1]=a=>n.visible=a),header:n.title,closable:n.closable,modal:n.modal},{default:d(()=>[e(H,{"create-request":b.value,onSubmit:L},null,8,["create-request"])]),_:1},8,["visible","header","closable","modal"])],64)}}});export{Re as default};
