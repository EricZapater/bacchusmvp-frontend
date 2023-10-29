import{d as w,g as T,u as B,j as k,x,o as R,P as l,h as n,m as S,w as a,k as r,a as I,e as d,i as e,n as D}from"./index-e1f2f827.js";import{u as E}from"./referenceType-dcd3c232.js";import{v as N}from"./v4-a960c1f4.js";import"./index-68519385.js";import"./base.service-136124b3.js";import"./reference.service-89db32df.js";const j={class:"flex flex-wrap align-items-center justify-content-between gap-2"},q=d("span",{class:"text-xl text-900 font-bold"},"Tipus de matèries primes",-1),M=["onClick"],L=w({__name:"ReferenceTypes",setup(P){const u=T(),p=B(),_=k(),f=x(),o=E();R(async()=>{await o.fetchAll(),p.setMenuItem({icon:l.BOX,title:"Gestió de tipus de materials"})});const h=()=>{u.push({path:`/referencetype/${N()}`})},y=t=>{t.originalEvent.target.className.includes("grid_delete_column_button")||u.push({path:`/referencetype/${t.data.id}`})},C=(t,i)=>{f.require({target:t.currentTarget,message:`Está segur que vol eliminar el tipus de materials ${i.name}?`,icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await o.deleteReferenceType(i.id)&&(_.add({severity:"success",summary:"Eliminat",life:3e3}),await o.fetchAll())}})};return(t,i)=>{const m=n("Button"),s=n("Column"),v=n("BooleanColumn"),g=n("DataTable");return I(),S(g,{value:r(o).referenceTypes,tableStyle:"min-width: 100%",scrollable:"",scrollHeight:"80vh",onRowClick:y},{header:a(()=>[d("div",j,[q,e(m,{icon:r(l).PLUS,rounded:"",raised:"",onClick:h},null,8,["icon"])])]),default:a(()=>[e(s,{field:"name",header:"Nom",style:{width:"25%"}}),e(s,{field:"description",header:"Descripció",style:{width:"50%"}}),e(s,{header:"Desactivada",style:{width:"20%"}},{body:a(c=>[e(v,{value:c.data.disabled},null,8,["value"])]),_:1}),e(s,null,{body:a(c=>[d("i",{class:D([r(l).TIMES,"grid_delete_column_button"]),onClick:b=>C(b,c.data)},null,10,M)]),_:1})]),_:1},8,["value"])}}});export{L as default};
