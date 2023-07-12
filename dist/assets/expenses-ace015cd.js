import{d as C,g as D,u as b,o as v,P as l,h as i,m as B,w as a,k as p,a as T,e as _,i as t,D as u,E as m}from"./index-c73e34a4.js";import{u as E}from"./expense-240fa383.js";import{f as k}from"./functions-028ffd6d.js";import{v as S}from"./v4-a960c1f4.js";import"./base.service-02c1db1f.js";const I={class:"flex flex-wrap align-items-center justify-content-between gap-2"},N=_("span",{class:"text-xl text-900 font-bold"},"Despeses",-1),j=C({__name:"expenses",setup(L){const d=D(),f=b(),o=E();v(async()=>{await o.fetchExpenseTypes(),await o.fetchExpenses(),f.setMenuItem({icon:l.WALLET,title:"Gestió de despeses"})});const h=()=>{d.push({path:`/expense/${S()}`})},x=s=>{s.originalEvent.target.className.includes("grid_delete_column_button")||d.push({path:`/expense/${s.data.id}`})},y=s=>{var r;const c=(r=o.expenseTypes)==null?void 0:r.find(e=>e.id===s);return c?c.name:""};return(s,c)=>{const r=i("Button"),e=i("Column"),w=i("BooleanColumn"),g=i("DataTable");return T(),B(g,{value:p(o).expenses,tableStyle:"min-width: 100%",onRowClick:x},{header:a(()=>[_("div",I,[N,t(r,{icon:p(l).PLUS,rounded:"",raised:"",onClick:h},null,8,["icon"])])]),default:a(()=>[t(e,{field:"description",header:"Descripció",style:{width:"40%"}}),t(e,{field:"amount",header:"Import",style:{width:"15%"}}),t(e,{field:"paymentDate",header:"Data pagament",style:{width:"20%"}},{body:a(n=>[u(m(p(k)(n.data.paymentDate)),1)]),_:1}),t(e,{header:"Tipus",style:{width:"15%"}},{body:a(n=>[u(m(y(n.data.expensTypeId)),1)]),_:1}),t(e,{header:"Recurrent",style:{width:"10%"}},{body:a(n=>[t(w,{value:n.data.recurring},null,8,["value"])]),_:1})]),_:1},8,["value"])}}});export{j as default};
