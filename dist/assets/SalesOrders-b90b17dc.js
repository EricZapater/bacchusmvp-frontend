import{d as $,g as J,j as z,x as A,u as H,r as C,E as K,o as Q,P as _,h as u,c as I,i as o,w as m,k as i,G as W,a as N,e as n,C as k,D as O,n as X,l as Y}from"./index-4a35f1ba.js";import{u as Z}from"./salesOrder-4006b892.js";import{u as ee}from"./reference-e7e881c4.js";import{u as te}from"./customers-b2428f08.js";import{u as ae}from"./lifecycle-a3d29a0d.js";import{a as b,f as se,g as oe}from"./functions-c791afc8.js";import{_ as le}from"./FormCreateOrderOrInvoice.vue_vue_type_script_setup_true_lang-d5658db6.js";import{u as re}from"./masterData-80363acb.js";import"./index-6faaf367.js";import"./reference.service-d2af7bd6.js";import"./base.service-bb100fed.js";import"./index-ffdb11ba.js";import"./v4-a960c1f4.js";import"./form-validator-fef9bcaf.js";const ie={class:"flex flex-wrap align-items-center justify-content-between gap-2"},ne={class:"datatable-filter"},de={class:"filter-field"},ce=n("label",{class:"block text-900 mb-2"},"Període",-1),ue={class:"filter-field"},me=n("label",{class:"block text-900 mb-2"},"Client",-1),fe={class:"datatable-buttons"},pe=["onClick"],V="temges.salesorder.filter",xe=$({__name:"SalesOrders",setup(ve){const y=J(),S=z(),x=A(),E=H(),B=re(),f=Z(),R=ee(),g=te(),h=ae(),t=C({dates:void 0,customerId:void 0,referenceId:void 0}),r=K({visible:!1,title:"Crear comanda",closable:!0,position:"center",modal:!0});Q(async()=>{await R.fetchReferences(),await g.fetchCustomers(),await h.fetchOneByName("SalesOrder"),B.fetchMasterData();const a=localStorage.getItem(V);if(a!==null)t.value=JSON.parse(a),t.value.dates&&(t.value.dates[0]=new Date(t.value.dates[0]),t.value.dates[1]=new Date(t.value.dates[1])),await w();else{let e=new Date,l=new Date;e.setDate(l.getDate()-30);const d=b(e),c=b(l);await f.GetBetweenDates(d,c)}E.setMenuItem({icon:_.APPLE,title:"Comandes"})});const v=C({}),T=()=>({id:oe(),customerId:"",exerciseId:"",date:new Date}),q=()=>{v.value=T(),r.visible=!0},w=async()=>{if(t.value.dates){const a=b(t.value.dates[0]),e=b(t.value.dates[1]);await f.GetFiltered(a,e,t.value.customerId),localStorage.setItem(V,JSON.stringify(t.value))}else S.add({severity:"info",summary:"Filtre invàlid",detail:"Seleccioni un període",life:5e3})},F=a=>{var l,d;const e=(d=(l=h.lifecycle)==null?void 0:l.statuses)==null?void 0:d.find(c=>c.id===a);return e?e.name:""},L=async()=>{r.visible=!1,await f.Create(v.value)&&y.push({path:`/salesorder/${v.value.id}`})},M=a=>{a.originalEvent.target.className.includes("grid_delete_column_button")||y.push({path:`/salesorder/${a.data.id}`})},P=(a,e)=>{x.require({message:"Està segur que vol eliminar la comanda?",icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await f.Delete(e.id)&&(S.add({severity:"success",summary:"Eliminada",life:3e3}),await w())}})};return(a,e)=>{const l=u("Calendar"),d=u("Dropdown"),c=u("Button"),p=u("Column"),U=u("DataTable"),j=u("Dialog");return N(),I(W,null,[o(U,{value:i(f).salesOrders,class:"small-datatable",tableStyle:"min-width: 100%",scrollable:"",scrollHeight:"75vh",sortMode:"multiple",onRowClick:M},{header:m(()=>[n("div",ie,[n("div",ne,[n("div",de,[ce,o(l,{modelValue:t.value.dates,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value.dates=s),selectionMode:"range",dateFormat:"dd/mm/yy"},null,8,["modelValue"])]),n("div",ue,[me,o(d,{modelValue:t.value.customerId,"onUpdate:modelValue":e[1]||(e[1]=s=>t.value.customerId=s),editable:"",options:i(g).customers,optionValue:"id",optionLabel:"comercialName",class:"w-full"},null,8,["modelValue","options"])])]),n("div",fe,[o(c,{class:"datatable-button mr-2",icon:i(_).FILTER,rounded:"",raised:"",onClick:w},null,8,["icon"]),o(c,{icon:i(_).PLUS,rounded:"",raised:"",onClick:q},null,8,["icon"])])])]),default:m(()=>[o(p,{field:"salesOrderNumber",header:"Número",style:{width:"15%"}}),o(p,{header:"Data",style:{width:"15%"}},{body:m(s=>[k(O(i(se)(s.data.salesOrderDate)),1)]),_:1}),o(p,{field:"customerComercialName",header:"Client",style:{width:"40%"}}),o(p,{header:"Estat",style:{width:"20%"}},{body:m(s=>[k(O(F(s.data.statusId)),1)]),_:1}),o(p,{style:{width:"5%"}},{body:m(s=>{var D;return[s.data.statusId===((D=i(h).lifecycle)==null?void 0:D.initialStatusId)?(N(),I("i",{key:0,class:X([i(_).TIMES,"grid_delete_column_button"]),onClick:G=>P(G,s.data)},null,10,pe)):Y("",!0)]}),_:1})]),_:1},8,["value"]),o(j,{visible:r.visible,"onUpdate:visible":e[2]||(e[2]=s=>r.visible=s),header:r.title,closable:r.closable,modal:r.modal},{default:m(()=>[o(le,{"create-request":v.value,onSubmit:L},null,8,["create-request"])]),_:1},8,["visible","header","closable","modal"])],64)}}});export{xe as default};