import{d as x,g as C,u as v,o as w,P as c,h as t,m as b,w as n,k as i,a as g,e as r,i as e}from"./index-ed8fb5bb.js";import{u as B}from"./tax-c319a031.js";import{v as y}from"./v4-a960c1f4.js";import"./index-f2c65ad9.js";import"./base.service-1efb2a9b.js";const k={class:"flex flex-wrap align-items-center justify-content-between gap-2"},S=r("span",{class:"text-xl text-900 font-bold"},"Impostos",-1),H=x({__name:"Taxes",setup(T){const s=C(),d=v(),l=B();w(async()=>{await l.fetchAll(),d.setMenuItem({icon:c.HASHTAG,title:"Gestió d'impostos"})});const u=()=>{s.push({path:`/tax/${y()}`})},m=o=>{o.originalEvent.target.className.includes("grid_delete_column_button")||s.push({path:`/tax/${o.data.id}`})};return(o,N)=>{const p=t("Button"),a=t("Column"),_=t("BooleanColumn"),h=t("DataTable");return g(),b(h,{value:i(l).taxes,tableStyle:"min-width: 100%",onRowClick:m},{header:n(()=>[r("div",k,[S,e(p,{icon:i(c).PLUS,rounded:"",raised:"",onClick:u},null,8,["icon"])])]),default:n(()=>[e(a,{field:"name",header:"Nom",style:{width:"33%"}}),e(a,{field:"percentatge",header:"% Percentatge",style:{width:"33%"}}),e(a,{header:"Desactivada",style:{width:"33%"}},{body:n(f=>[e(_,{value:f.data.disabled,showColor:!1},null,8,["value"])]),_:1})]),_:1},8,["value"])}}});export{H as default};
