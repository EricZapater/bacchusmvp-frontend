import{d as x,g as y,u as C,o as v,P as l,h as t,m as w,w as n,k as c,a as b,e as p,i as e}from"./index-ed8fb5bb.js";import{u as B}from"./expense-f51402a5.js";import{v as T}from"./v4-a960c1f4.js";import"./index-2188bf6e.js";import"./base.service-1efb2a9b.js";const g={class:"flex flex-wrap align-items-center justify-content-between gap-2"},k=p("span",{class:"text-xl text-900 font-bold"},"Tipus de despesa",-1),L=x({__name:"ExpenseTypes",setup(E){const a=y(),d=C(),i=B();v(async()=>{await i.fetchExpenseTypes(),d.setMenuItem({icon:l.FLAG,title:"Gestió de tipus de despesa"})});const r=()=>{a.push({path:`/expensetype/${T()}`})},u=o=>{o.originalEvent.target.className.includes("grid_delete_column_button")||a.push({path:`/expensetype/${o.data.id}`})};return(o,S)=>{const m=t("Button"),s=t("Column"),_=t("BooleanColumn"),h=t("DataTable");return b(),w(h,{value:c(i).expenseTypes,tableStyle:"min-width: 100%",onRowClick:u},{header:n(()=>[p("div",g,[k,e(m,{icon:c(l).PLUS,rounded:"",raised:"",onClick:r},null,8,["icon"])])]),default:n(()=>[e(s,{field:"name",header:"Nom",style:{width:"25%"}}),e(s,{field:"description",header:"Descripció",style:{width:"50%"}}),e(s,{header:"Desactivada",style:{width:"10%"}},{body:n(f=>[e(_,{value:f.data.disabled,showColor:!1},null,8,["value"])]),_:1})]),_:1},8,["value"])}}});export{L as default};
