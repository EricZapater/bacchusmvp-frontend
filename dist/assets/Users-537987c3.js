import{d as _,r as f,u as p,g as v,o as w,P as b,h as n,c as y,i as e,w as t,U as C,a as x,B as U,e as l}from"./index-8ef16467.js";const N={class:"card"},S=l("div",{class:"flex flex-wrap align-items-center justify-content-between gap-2"},[l("span",{class:"text-xl text-900 font-bold"},"Usuaris")],-1),D=_({__name:"Users",setup(B){const r=new C,a=f(void 0),c=p(),i=v(),d=async()=>{a.value=await r.GetAll()},u=o=>{i.push({path:`/user/${o.data.id}`})};return w(async()=>{c.setMenuItem({icon:b.USERS,title:"Gestió d'usuaris"}),await d()}),(o,g)=>{const s=n("Column"),m=n("DataTable");return x(),y("div",N,[e(m,{value:a.value,removableSort:"",tableStyle:"min-width: 50rem",onRowClick:u},{header:t(()=>[S]),default:t(()=>[e(s,{field:"username",header:"Nom d'usuari",sortable:"",style:{width:"20%"}}),e(s,{field:"firstName",header:"Nom",sortable:"",style:{width:"20%"}}),e(s,{field:"lastName",header:"Cognoms",sortable:"",style:{width:"20%"}}),e(s,{header:"Desactivat",sortable:"",style:{width:"20%"}},{body:t(h=>[e(U,{value:h.data.disabled,showColor:!1},null,8,["value"])]),_:1})]),_:1},8,["value"])])}}});export{D as default};
