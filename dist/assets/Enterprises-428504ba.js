import{d as E,g as y,u as k,j as x,x as B,o as S,P as c,h as n,m as D,w as a,k as l,a as I,e as d,i as e,n as N}from"./index-3b8fad0b.js";import{u as T}from"./plantmodel-4f98e0d8.js";import{v as M}from"./v4-a960c1f4.js";import"./index-60183c2e.js";import"./base.service-95f208f7.js";const P={class:"flex flex-wrap align-items-center justify-content-between gap-2"},j=d("span",{class:"text-xl text-900 font-bold"},"Empresa",-1),q=["onClick"],G=E({__name:"Enterprises",setup(R){const u=y(),m=k(),_=x(),h=B(),s=T();S(async()=>{await s.fetchEnterprises(),m.setMenuItem({icon:c.CALENDAR,title:"Gestió d'empreses"})});const f=()=>{u.push({path:`/enterprise/${M()}`})},C=t=>{t.originalEvent.target.className.includes("grid_delete_column_button")||u.push({path:`/enterprise/${t.data.id}`})},v=(t,i)=>{h.require({target:t.currentTarget,message:`Está segur que vol eliminar l'empresa ${i.name}?`,icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await s.deleteEnterprise(i.id)&&(_.add({severity:"success",summary:"Eliminat",life:3e3}),await s.fetchEnterprises())}})};return(t,i)=>{const p=n("Button"),o=n("Column"),g=n("BooleanColumn"),b=n("DataTable");return I(),D(b,{value:l(s).enterprises,tableStyle:"min-width: 100%",scrollable:"",scrollHeight:"80vh",onRowClick:C},{header:a(()=>[d("div",P,[j,e(p,{icon:l(c).PLUS,rounded:"",raised:"",onClick:f},null,8,["icon"])])]),default:a(()=>[e(o,{field:"name",header:"Nom",style:{width:"25%"}}),e(o,{field:"description",header:"Descripció",style:{width:"50%"}}),e(o,{header:"Desactivada",style:{width:"10%"}},{body:a(r=>[e(g,{value:r.data.disabled},null,8,["value"])]),_:1}),e(o,null,{body:a(r=>[d("i",{class:N([l(c).TIMES,"grid_delete_column_button"]),onClick:w=>v(w,r.data)},null,10,q)]),_:1})]),_:1},8,["value"])}}});export{G as default};
