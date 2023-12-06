import{d as B,g as x,u as I,j as q,x as M,o as D,P as d,h as l,m as E,w as i,k as u,a as W,e as r,i as c,D as p,n as T}from"./index-357c9d4c.js";import{u as N}from"./plantmodel-ce44b43b.js";import{v as P}from"./v4-a960c1f4.js";import"./index-6fe49fa3.js";import"./base.service-d0780977.js";const R={class:"flex flex-wrap align-items-center justify-content-between gap-2"},j=r("span",{class:"text-xl text-900 font-bold"},"Cost per màquina",-1),$=["onClick"],G=B({__name:"WorkcenterCosts",setup(A){const m=x(),_=I(),n=N(),h=q(),f=M();D(async()=>{await n.fetchWorkcenterCosts(),await n.fetchWorkcenters(),await n.fetchMachineStatuses(),_.setMenuItem({icon:d.CALENDAR,title:"Costs per màquina"})});const C=e=>{var a;const t=(a=n.workcenters)==null?void 0:a.find(o=>o.id===e);if(t)return t.name},k=e=>{var a;const t=(a=n.machineStatuses)==null?void 0:a.find(o=>o.id===e);if(t)return t.name},w=()=>{m.push({path:`/workcentercost/${P()}`})},y=e=>{e.originalEvent.target.className.includes("grid_delete_column_button")||m.push({path:`/workcentercost/${e.data.id}`})},g=(e,t)=>{f.require({target:e.currentTarget,message:`Está segur que vol eliminar el cost  ${t.id}?`,icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await n.deleteWorkcenterCost(t.id)&&(h.add({severity:"success",summary:"Eliminat",life:3e3}),await n.fetchWorkcenterCosts())}})};return(e,t)=>{const a=l("Button"),o=l("Column"),b=l("BooleanColumn"),v=l("DataTable");return W(),E(v,{value:u(n).workcentercosts,tableStyle:"min-width: 100%",onRowClick:y},{header:i(()=>[r("div",R,[j,c(a,{icon:u(d).PLUS,rounded:"",raised:"",onClick:w},null,8,["icon"])])]),default:i(()=>[c(o,{header:"Màquina",style:{width:"30%"}},{body:i(s=>[r("span",null,p(C(s.data.workcenterId)),1)]),_:1}),c(o,{header:"Estat de màquina",style:{width:"30%"}},{body:i(s=>[r("span",null,p(k(s.data.machineStatusId)),1)]),_:1}),c(o,{field:"cost",header:"Cost",style:{width:"30%"}}),c(o,{header:"Desactivada",style:{width:"10%"}},{body:i(s=>[c(b,{value:s.data.disabled},null,8,["value"])]),_:1}),c(o,null,{body:i(s=>[r("i",{class:T([u(d).TIMES,"grid_delete_column_button"]),onClick:S=>g(S,s.data)},null,10,$)]),_:1})]),_:1},8,["value"])}}});export{G as default};