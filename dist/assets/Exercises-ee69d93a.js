import{d as v,g as C,u as D,o as b,P as d,h as s,m as B,w as o,k as n,a as g,e as p,i as e,D as l,E as u}from"./index-c73e34a4.js";import{u as S}from"./exercise-e5d87933.js";import{f as m}from"./functions-028ffd6d.js";import{v as k}from"./v4-a960c1f4.js";import"./exercise.service-4fe4f098.js";import"./base.service-02c1db1f.js";const E={class:"flex flex-wrap align-items-center justify-content-between gap-2"},N=p("span",{class:"text-xl text-900 font-bold"},"Exercicis",-1),R=v({__name:"Exercises",setup(T){const c=C(),_=D(),r=S();b(async()=>{await r.fetchAll(),_.setMenuItem({icon:d.HASHTAG,title:"Gestió d'exercicis"})});const h=()=>{c.push({path:`/exercise/${k()}`})},f=i=>{i.originalEvent.target.className.includes("grid_delete_column_button")||c.push({path:`/exercise/${i.data.id}`})};return(i,A)=>{const x=s("Button"),t=s("Column"),y=s("BooleanColumn"),w=s("DataTable");return g(),B(w,{value:n(r).exercises,tableStyle:"min-width: 100%",onRowClick:f},{header:o(()=>[p("div",E,[N,e(x,{icon:n(d).PLUS,rounded:"",raised:"",onClick:h},null,8,["icon"])])]),default:o(()=>[e(t,{field:"name",header:"Nom",style:{width:"15%"}}),e(t,{field:"description",header:"Descripció",style:{width:"20%"}}),e(t,{header:"Data d'inici",style:{width:"20%"}},{body:o(a=>[l(u(n(m)(a.data.startDate)),1)]),_:1}),e(t,{header:"Dia de fi",style:{width:"20%"}},{body:o(a=>[l(u(n(m)(a.data.endDate)),1)]),_:1}),e(t,{field:"purchaseInvoiceCounter",header:"Factures de compra",style:{width:"15%"}}),e(t,{header:"Desactivada",style:{width:"10%"}},{body:o(a=>[e(y,{value:a.data.disabled},null,8,["value"])]),_:1})]),_:1},8,["value"])}}});export{R as default};
