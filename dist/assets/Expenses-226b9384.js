import{d as T,g as D,u as k,o as B,P as d,j as I,x as S,h as l,m as N,w as n,k as r,a as M,e as m,i as s,C as p,D as u,n as j}from"./index-ed8fb5bb.js";import{u as q}from"./expense-f51402a5.js";import{f as L}from"./functions-028ffd6d.js";import{v as P}from"./v4-a960c1f4.js";import"./index-2188bf6e.js";import"./base.service-1efb2a9b.js";const R={class:"flex flex-wrap align-items-center justify-content-between gap-2"},V=m("span",{class:"text-xl text-900 font-bold"},"Despeses",-1),$=["onClick"],J=T({__name:"Expenses",setup(z){const _=D(),f=k(),o=q();B(async()=>{await o.fetchExpenseTypes(),await o.fetchExpenses(),f.setMenuItem({icon:d.WALLET,title:"Gestió de despeses"})});const h=()=>{_.push({path:`/expense/${P()}`})},x=a=>{a.originalEvent.target.className.includes("grid_delete_column_button")||_.push({path:`/expense/${a.data.id}`})},y=I(),g=S(),C=(a,i)=>{g.require({target:a.currentTarget,message:"Està segur que vol eliminar la despesa?",icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await o.deleteExpense(i.id)&&(y.add({severity:"success",summary:"Eliminat",life:3e3}),await o.fetchExpenses())}})},w=a=>{var c;const i=(c=o.expenseTypes)==null?void 0:c.find(t=>t.id===a);return i?i.name:""};return(a,i)=>{const c=l("Button"),t=l("Column"),E=l("BooleanColumn"),b=l("DataTable");return M(),N(b,{value:r(o).expenses,tableStyle:"min-width: 100%",scrollable:"",scrollHeight:"75vh",sortMode:"multiple",onRowClick:x},{header:n(()=>[m("div",R,[V,s(c,{icon:r(d).PLUS,rounded:"",raised:"",onClick:h},null,8,["icon"])])]),default:n(()=>[s(t,{field:"description",header:"Descripció",style:{width:"40%"}}),s(t,{field:"amount",header:"Import",style:{width:"15%"}},{body:n(e=>[p(u(e.data.amount)+" € ",1)]),_:1}),s(t,{field:"paymentDate",header:"Data pagament",style:{width:"20%"}},{body:n(e=>[p(u(r(L)(e.data.paymentDate)),1)]),_:1}),s(t,{header:"Tipus",style:{width:"15%"}},{body:n(e=>[p(u(w(e.data.expenseTypeId)),1)]),_:1}),s(t,{header:"Recurrent",style:{width:"10%"}},{body:n(e=>[s(E,{value:e.data.recurring,showColor:!1},null,8,["value"])]),_:1}),s(t,null,{body:n(e=>[m("i",{class:j([r(d).TIMES,"grid_delete_column_button"]),onClick:v=>C(v,e.data)},null,10,$)]),_:1})]),_:1},8,["value"])}}});export{J as default};
