import{d as B,g as k,u as x,j as S,x as I,o as M,P as l,h as s,m as T,w as n,k as r,a as W,e as u,i as e,n as z}from"./index-3b8fad0b.js";import{u as D}from"./warehouse-006c7976.js";import{u as E}from"./plantmodel-4f98e0d8.js";import{v as N}from"./v4-a960c1f4.js";import"./index-3b3622ba.js";import"./base.service-95f208f7.js";import"./index-60183c2e.js";const P={class:"flex flex-wrap align-items-center justify-content-between gap-2"},j=u("span",{class:"text-xl text-900 font-bold"},"Magatzem",-1),q=["onClick"],X=B({__name:"Warehouses",setup(R){const d=k(),p=x(),h=S(),_=I(),o=D(),f=E();M(async()=>{await o.fetchWarehouses(),await f.fetchSites(),p.setMenuItem({icon:l.BOX,title:"Gestió de magatzems"})});const w=()=>{d.push({path:`/warehouse/${N()}`})},g=t=>{t.originalEvent.target.className.includes("grid_delete_column_button")||d.push({path:`/warehouse/${t.data.id}`})},C=(t,i)=>{_.require({target:t.currentTarget,message:`Está segur que vol eliminar el magatzem ${i.name}?`,icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await o.deleteWarehouse(i.id)&&(h.add({severity:"success",summary:"Eliminat",life:3e3}),await o.fetchWarehouses())}})};return(t,i)=>{const m=s("Button"),a=s("Column"),v=s("BooleanColumn"),b=s("DataTable");return W(),T(b,{value:r(o).warehouses,tableStyle:"min-width: 100%",scrollable:"",scrollHeight:"80vh",onRowClick:g},{header:n(()=>[u("div",P,[j,e(m,{icon:r(l).PLUS,rounded:"",raised:"",onClick:w},null,8,["icon"])])]),default:n(()=>[e(a,{field:"name",header:"Nom",style:{width:"25%"}}),e(a,{field:"description",header:"Descripció",style:{width:"50%"}}),e(a,{header:"Desactivada",style:{width:"20%"}},{body:n(c=>[e(v,{value:c.data.disabled},null,8,["value"])]),_:1}),e(a,null,{body:n(c=>[u("i",{class:z([r(l).TIMES,"grid_delete_column_button"]),onClick:y=>C(y,c.data)},null,10,q)]),_:1})]),_:1},8,["value"])}}});export{X as default};
