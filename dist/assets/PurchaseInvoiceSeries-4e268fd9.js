import{d as I,g as w,h as y,i as P,u as b,o as k,P as i,r as s,c as B,j as e,k as r,w as l,F as E,a as T,e as x,s as D}from"./index-b9d41b02.js";import{u as N}from"./invoices-0331c851.js";import{v as R}from"./v4-a960c1f4.js";import"./base.service-7dbc85ae.js";const q=["onClick"],z=I({__name:"PurchaseInvoiceSeries",setup(F){const m=w(),p=y(),u=P(),_=b(),o=N();k(async()=>{await o.fetchPurchaseInvoiceSeries(),_.setMenuItem({icon:i.SERVER,text:"Sèries Factures de Compra"})});const h=()=>{console.log("create"),u.push({path:`/purchaseinvoiceserie/${R()}`})},v=t=>{console.log("edit"),t.originalEvent.target.className.includes("grid_delete_column_button")||u.push({path:`/purchaseinvoiceserie/${t.data.id}`})},f=(t,n)=>{p.require({target:t.currentTarget,message:`Está segur que vol eliminar la sèrie de factures de compra ${n.name}?`,icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:async()=>{await o.deletePurchaseInvoiceSerie(n.id)&&(m.add({severity:"success",summary:"Eliminat",life:3e3}),await o.fetchPurchaseInvoiceSeries())}})};return(t,n)=>{const d=s("Button"),a=s("Column"),C=s("BooleanColumn"),S=s("DataTable");return T(),B(E,null,[e(d,{icon:r(i).PLUS,class:"grid_add_row_button",rounded:"",onClick:h},null,8,["icon"]),e(S,{value:r(o).purchaseInvoiceSeries,tableStyle:"min-width: 100%",onRowClick:v},{default:l(()=>[e(a,{field:"name",header:"Nom",style:{width:"20%"}}),e(a,{field:"description",header:"Descripció",style:{width:"50%"}}),e(a,{header:"Desactivada",style:{width:"20%"}},{body:l(c=>[e(C,{value:c.data.disabled},null,8,["value"])]),_:1}),e(a,null,{body:l(c=>[x("i",{class:D([r(i).TIMES,"grid_delete_column_button"]),onClick:g=>f(g,c.data)},null,10,q)]),_:1})]),_:1},8,["value"])],64)}}});export{z as default};