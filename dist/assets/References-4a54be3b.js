import{d as w,g as B,u as S,r as b,J as I,o as R,P as f,h as r,m as g,w as l,a as k,e as d,i as e,y as P,k as x,p as D,b as V,f as N}from"./index-975a47bd.js";import{u as G}from"./reference-81bc0611.js";import{v as M}from"./v4-a960c1f4.js";import"./reference.service-beea0f30.js";import"./base.service-b690a68e.js";const T=s=>(D("data-v-3710126f"),s=s(),V(),s),U={class:"references-header"},$={class:"references-filter"},A=T(()=>d("label",null,"Codi",-1)),E=w({__name:"References",setup(s){const i=B(),_=S(),a=G(),n=b({code:""}),p=I(()=>a.references?n.value.code.length>0?a.references.filter(t=>t.code.includes(n.value.code)):a.references:[]);R(async()=>{await a.fetchReferences(),_.setMenuItem({icon:f.SHOPPING_BAG,title:"Gestió de referencies"})});const m=()=>{i.push({path:`/referencia/${M()}`})},h=t=>{t.originalEvent.target.className.includes("grid_delete_column_button")||i.push({path:`/referencia/${t.data.id}`})};return(t,u)=>{const v=r("Button"),o=r("Column"),C=r("BooleanColumn"),y=r("DataTable");return k(),g(y,{value:p.value,tableStyle:"min-width: 100%",onRowClick:h},{header:l(()=>[d("div",U,[d("div",$,[A,e(P,{modelValue:n.value.code,"onUpdate:modelValue":u[0]||(u[0]=c=>n.value.code=c)},null,8,["modelValue"])]),e(v,{style:{float:"right"},icon:x(f).PLUS,rounded:"",raised:"",onClick:m},null,8,["icon"])])]),default:l(()=>[e(o,{field:"code",header:"Codi",style:{width:"15%"}}),e(o,{field:"description",header:"Descripció",style:{width:"35%"}}),e(o,{field:"cost",header:"Cost",style:{width:"20%"}}),e(o,{field:"price",header:"Preu",style:{width:"20%"}}),e(o,{header:"Desactivada",style:{width:"10%"}},{body:l(c=>[e(C,{value:c.data.disabled},null,8,["value"])]),_:1})]),_:1},8,["value"])}}});const q=N(E,[["__scopeId","data-v-3710126f"]]);export{q as default};
