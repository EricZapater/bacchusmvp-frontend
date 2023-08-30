import{d as v,g as B,u as g,o as x,P as l,h as i,m as N,w as r,k as u,a as D,e as _,i as n,C as m,D as p}from"./index-4a35f1ba.js";import{u as T}from"./plantmodel-0e9907cd.js";import{v as I}from"./v4-a960c1f4.js";import"./base.service-bb100fed.js";const S={class:"flex flex-wrap align-items-center justify-content-between gap-2"},A=_("span",{class:"text-xl text-900 font-bold"},"Màquines",-1),q=v({__name:"Workcenters",setup(M){const d=B(),h=g(),c=T();x(async()=>{await c.fetchWorkcenters(),h.setMenuItem({icon:l.CALENDAR,title:"Gestió de màquines"})});const f=()=>{d.push({path:`/workcenter/${I()}`})},y=t=>{t.originalEvent.target.className.includes("grid_delete_column_button")||d.push({path:`/workcenter/${t.data.id}`})},w=t=>{var o;const a=(o=c.areas)==null?void 0:o.find(e=>e.id===t);return a?a.name:""},k=t=>{var o;const a=(o=c.workcenterTypes)==null?void 0:o.find(e=>e.id===t);return a?a.name:""};return(t,a)=>{const o=i("Button"),e=i("Column"),C=i("BooleanColumn"),b=i("DataTable");return D(),N(b,{value:u(c).workcenters,tableStyle:"min-width: 100%",onRowClick:y},{header:r(()=>[_("div",S,[A,n(o,{icon:u(l).PLUS,rounded:"",raised:"",onClick:f},null,8,["icon"])])]),default:r(()=>[n(e,{field:"name",header:"Nom",style:{width:"20%"}}),n(e,{field:"description",header:"Descripció",style:{width:"40%"}}),n(e,{header:"Tipus",style:{width:"15%"}},{body:r(s=>[m(p(k(s.data.workcenterTypeId)),1)]),_:1}),n(e,{header:"Area",style:{width:"15%"}},{body:r(s=>[m(p(w(s.data.areaId)),1)]),_:1}),n(e,{header:"Desactivat",style:{width:"10%"}},{body:r(s=>[n(C,{value:s.data.disabled},null,8,["value"])]),_:1})]),_:1},8,["value"])}}});export{q as default};