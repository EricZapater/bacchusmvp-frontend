import{d as g,g as S,u as k,j as x,x as B,o as D,P as c,h as a,m as E,w as n,k as r,a as I,e as d,i as e,n as N}from"./index-3b8fad0b.js";import{u as P}from"./plantmodel-4f98e0d8.js";import{v as T}from"./v4-a960c1f4.js";import"./index-60183c2e.js";import"./base.service-95f208f7.js";const M={class:"flex flex-wrap align-items-center justify-content-between gap-2"},j=d("span",{class:"text-xl text-900 font-bold"},"Local",-1),q=["onClick"],G=g({__name:"Sites",setup(A){const u=S(),p=k(),_=x(),h=B(),s=P();D(async()=>{await s.fetchSites(),p.setMenuItem({icon:c.CALENDAR,title:"Gestió de locals"})});const f=()=>{u.push({path:`/enterprise/${T()}`})},C=o=>{o.originalEvent.target.className.includes("grid_delete_column_button")||u.push({path:`/site/${o.data.id}`})},v=(o,i)=>{h.require({target:o.currentTarget,message:`Está segur que vol eliminar el site ${i.name}?`,icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await s.deleteSite(i.id)&&(_.add({severity:"success",summary:"Eliminat",life:3e3}),await s.fetchSites())}})};return(o,i)=>{const m=a("Button"),t=a("Column"),w=a("BooleanColumn"),y=a("DataTable");return I(),E(y,{value:r(s).sites,tableStyle:"min-width: 100%",scrollable:"",scrollHeight:"80vh",onRowClick:C},{header:n(()=>[d("div",M,[j,e(m,{icon:r(c).PLUS,rounded:"",raised:"",onClick:f},null,8,["icon"])])]),default:n(()=>[e(t,{field:"name",header:"Nom",style:{width:"20%"}}),e(t,{field:"description",header:"Descripció",style:{width:"30%"}}),e(t,{field:"city",header:"Població",style:{width:"20%"}}),e(t,{field:"address",header:"Adreça",style:{width:"30%"}}),e(t,{header:"Desactivada",style:{width:"10%"}},{body:n(l=>[e(w,{value:l.data.disabled},null,8,["value"])]),_:1}),e(t,null,{body:n(l=>[d("i",{class:N([r(c).TIMES,"grid_delete_column_button"]),onClick:b=>v(b,l.data)},null,10,q)]),_:1})]),_:1},8,["value"])}}});export{G as default};
