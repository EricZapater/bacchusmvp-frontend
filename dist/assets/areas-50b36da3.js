import{d as C,g as v,u as w,o as b,P as c,h as t,m as x,w as n,k as r,a as B,e as i,i as e}from"./index-ed8fb5bb.js";import{u as y}from"./plantmodel-31a05649.js";import{v as g}from"./v4-a960c1f4.js";import"./base.service-1efb2a9b.js";const k={class:"flex flex-wrap align-items-center justify-content-between gap-2"},D=i("span",{class:"text-xl text-900 font-bold"},"Area",-1),E=C({__name:"areas",setup(N){const s=v(),d=w(),l=y();b(async()=>{await l.fetchAreas(),d.setMenuItem({icon:c.CALENDAR,title:"Gestió d'arees"})});const u=()=>{s.push({path:`/area/${g()}`})},m=a=>{a.originalEvent.target.className.includes("grid_delete_column_button")||s.push({path:`/area/${a.data.id}`})};return(a,S)=>{const p=t("Button"),o=t("Column"),_=t("BooleanColumn"),h=t("DataTable");return B(),x(h,{value:r(l).areas,tableStyle:"min-width: 100%",onRowClick:m},{header:n(()=>[i("div",k,[D,e(p,{icon:r(c).PLUS,rounded:"",raised:"",onClick:u},null,8,["icon"])])]),default:n(()=>[e(o,{field:"name",header:"Nom",style:{width:"25%"}}),e(o,{field:"description",header:"Descripció",style:{width:"50%"}}),e(o,{header:"Desactivada",style:{width:"10%"}},{body:n(f=>[e(_,{value:f.data.disabled},null,8,["value"])]),_:1})]),_:1},8,["value"])}}});export{E as default};
