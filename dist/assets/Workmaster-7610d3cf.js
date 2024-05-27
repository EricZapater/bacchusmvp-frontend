import{_ as O}from"./DropdownReference.vue_vue_type_script_setup_true_lang-f8a66cf5.js";import{c as j,d as L,a as z,F as A}from"./form-validator-f8953ae6.js";import{d as I,g as Q}from"./functions-2e154ea4.js";import{d as V,j as E,H as G,r as W,h as y,c as x,e,i as r,C as M,k as c,y as H,D as w,l as B,a as g,s as J,E as K,x as X,w as h,G as D,P,n as Y,m as S,v as Z,g as ee,u as te,z as se,o as ae,f as oe}from"./index-3b8fad0b.js";import{u as N}from"./plantmodel-4f98e0d8.js";import{_ as re}from"./FormWorkmasterPhase.vue_vue_type_script_setup_true_lang-b9108072.js";import{u as le}from"./reference-e0518f57.js";import{u as ne}from"./workmaster-f910fa28.js";import"./_commonjsHelpers-725317a4.js";import"./v4-a960c1f4.js";import"./index-60183c2e.js";import"./base.service-95f208f7.js";import"./reference.service-d6c42ab4.js";const ie={key:0},ce={class:"grid_add_row_button"},de=e("br",null,null,-1),ue={class:"three-columns"},me=e("label",{class:"block text-900 mb-2"},"Desactivat",-1),pe={class:"five-columns"},_e={class:"mt-1"},ke=e("label",{class:"block text-900 mb-2"},"Cost Operari:",-1),fe={class:"summary-field"},be={class:"mt-1"},he=e("label",{class:"block text-900 mb-2"},"Cost Màquina:",-1),we={class:"summary-field"},ye={class:"mt-1"},ve=e("label",{class:"block text-900 mb-2"},"Cost Material:",-1),Ce={class:"summary-field"},ge={class:"mt-1"},Te=e("label",{class:"block text-900 mb-2"},"Cost Extern:",-1),Ie={class:"summary-field"},$e={class:"mt-1"},Me=e("label",{class:"block text-900 mb-2"},"Cost Total:",-1),Be={class:"summary-field"},Pe=V({__name:"FormWorkmaster",props:{workmaster:{}},emits:["submit","calculateCost","cancel"],setup($,{emit:b}){const d=$,u=E(),v=G(()=>d.workmaster.operatorCost+d.workmaster.machineCost+d.workmaster.materialCost+d.workmaster.externalCost),p=j().shape({baseQuantity:L().min(1,"La quantitat base ha de ser superior a 0").required("La quanitat base és obligatoria"),referenceId:z().required("La referència és obligatoria")}),n=W({result:!1,errors:{}}),C=()=>{const s=new A(p);n.value=s.validate(d.workmaster)},m=async()=>{if(C(),n.value.result)b("submit",d.workmaster);else{let s="";Object.entries(n.value.errors).forEach(i=>{s+=`${i[1].map(f=>f)}.   `}),u.add({severity:"warn",summary:"Formulari inválid",detail:s,life:5e3})}},_=()=>{if(C(),n.value.result)b("calculateCost",d.workmaster);else{let s="";Object.entries(n.value.errors).forEach(i=>{s+=`${i[1].map(f=>f)}.   `}),u.add({severity:"warn",summary:"Formulari inválid",detail:s,life:5e3})}};return(s,i)=>{const f=y("Button"),T=y("Checkbox");return s.workmaster?(g(),x("form",ie,[e("div",ce,[r(f,{label:"Calcular Cost",size:"small",onClick:_}),M("   "),r(f,{label:"Guardar",size:"small",onClick:m}),de]),e("section",ue,[e("div",null,[r(O,{label:"Referència",modelValue:s.workmaster.referenceId,"onUpdate:modelValue":i[0]||(i[0]=a=>s.workmaster.referenceId=a),fullName:!0},null,8,["modelValue"])]),e("div",null,[r(H,{type:c(J).NUMERIC,label:"Quantitat Base",decimals:2,modelValue:s.workmaster.baseQuantity,"onUpdate:modelValue":i[1]||(i[1]=a=>s.workmaster.baseQuantity=a)},null,8,["type","modelValue"])]),e("div",null,[me,r(T,{modelValue:s.workmaster.disabled,"onUpdate:modelValue":i[2]||(i[2]=a=>s.workmaster.disabled=a),class:"w-full",binary:!0},null,8,["modelValue"])])]),e("section",pe,[e("div",_e,[ke,e("span",fe,w(c(I)(s.workmaster.operatorCost)),1)]),e("div",be,[he,e("span",we,w(c(I)(s.workmaster.machineCost)),1)]),e("div",ye,[ve,e("span",Ce,w(c(I)(s.workmaster.materialCost)),1)]),e("div",ge,[Te,e("span",Ie,w(c(I)(s.workmaster.externalCost)),1)]),e("div",$e,[Me,e("span",Be,w(c(I)(v.value)),1)])])])):B("",!0)}}}),Se={class:"flex flex-wrap align-items-center justify-content-between gap-2"},Ve=e("span",{class:"text-xl text-900 font-bold"},"Fases de la ruta",-1),We=["onClick"],xe=V({__name:"TableWorkmasterPhases",props:{workmaster:{},workmasterPhases:{}},emits:["add","edit","delete"],setup($,{emit:b}){const d=$,u=K({visible:!1,title:"Nova fase",closable:!0,position:"center",modal:!0}),v=X(),p=N(),n=a=>{var t;if(!p.workcenterTypes)return"";const l=(t=p.workcenterTypes)==null?void 0:t.find(o=>a===o.id);return l?l.name:""},C=a=>{var t;if(!p.workcenters)return"";const l=(t=p.workcenters)==null?void 0:t.find(o=>a===o.id);return l?l.name:""},m=a=>{var t;if(!p.operatorTypes)return"";const l=(t=p.operatorTypes)==null?void 0:t.find(o=>a===o.id);return l?l.name:""},_=W({}),s=()=>{_.value={id:Q(),workMasterId:d.workmaster.id,disabled:!1,code:((d.workmaster.phases.length+1)*10).toString(),description:"",operatorTypeId:null,workcenterTypeId:null,preferredWorkcenterId:null,isExternalWork:!1,externalWorkCost:0,workmasterPhaseDetails:[],workmasterPhaseBillOfMaterials:[]},u.visible=!0},i=a=>{u.visible=!1,b("add",a)},f=a=>{a.originalEvent.target.className.includes("grid_delete_column_button")||b("edit",a.data)},T=(a,l)=>{v.require({target:a.currentTarget,message:"Está segur que vol eliminar la fase?",icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:()=>{b("delete",l)}})};return(a,l)=>{const t=y("Button"),o=y("Column"),R=y("BooleanColumn"),q=y("DataTable"),F=y("Dialog");return g(),x(D,null,[r(q,{onRowClick:f,value:a.workmasterPhases,tableStyle:"min-width: 100%","sort-field":"code","sort-order":1},{header:h(()=>[e("div",Se,[Ve,r(t,{icon:c(P).PLUS,rounded:"",raised:"",onClick:s},null,8,["icon"])])]),default:h(()=>[r(o,{field:"code",header:"Codi",sortable:"",style:{width:"10%"}}),r(o,{field:"description",header:"Descripció",style:{width:"20%"}}),r(o,{header:"Tipus de màquina",style:{width:"15%"}},{body:h(k=>[M(w(n(k.data.workcenterTypeId)),1)]),_:1}),r(o,{header:"Màquina preferida",style:{width:"15%"}},{body:h(k=>[M(w(C(k.data.preferredWorkcenterId)),1)]),_:1}),r(o,{header:"Tipus d'operari",style:{width:"15%"}},{body:h(k=>[M(w(m(k.data.operatorTypeId)),1)]),_:1}),r(o,{header:"Extern",style:{width:"10%"}},{body:h(k=>[r(R,{value:k.data.isExternalWork},null,8,["value"])]),_:1}),r(o,{style:{width:"10%"}},{body:h(k=>[e("i",{class:Y([c(P).TIMES,"grid_delete_column_button"]),onClick:U=>T(U,k.data)},null,10,We)]),_:1})]),_:1},8,["value"]),r(F,{visible:u.visible,"onUpdate:visible":l[0]||(l[0]=k=>u.visible=k),header:u.title,closable:u.closable,modal:u.modal},{default:h(()=>[_.value?(g(),S(re,{key:0,workmaster:a.workmaster,phase:_.value,onSubmit:i},null,8,["workmaster","phase"])):B("",!0)]),_:1},8,["visible","header","closable","modal"])],64)}}}),Ee={class:"main"},De=V({__name:"Workmaster",setup($){const b=Z(),d=ee(),u=te(),v=E(),p=le(),n=ne(),C=N(),{workmaster:m}=se(n),_=W("");ae(async()=>{_.value=b.params.id,await s();let t="";t="Ruta de fabricació",m.value&&(t=`${t} ${p.getFullName(m.value.reference)}`),u.setMenuItem({icon:P.BUILDING,backButtonVisible:!0,title:t})});const s=async()=>{await p.fetchReferencesByModule("sales"),await n.fetchOne(_.value),C.fetchActiveModel()},i=async t=>{await n.update(_.value,t)&&await s()},f=async t=>{const o=await n.calculate(t.id);o.result?v.add({severity:"success",summary:"Cálcul de cost",detail:`${o.content} €`}):v.add({severity:"warn",summary:"Cálcul de cost",detail:o.errors.length>0?o.errors[0]:"Errors detectats durant el cálcul",life:1e4})},T=async t=>{await n.createPhase(t)&&d.push({path:`/workmaster/${_.value}/phase/${t.id}`})},a=t=>{d.push({path:`/workmaster/${_.value}/phase/${t.id}`})},l=async t=>{await n.deletePhase(t.id)};return(t,o)=>(g(),x(D,null,[e("header",null,[c(m)?(g(),S(Pe,{key:0,workmaster:c(m),onCalculateCost:f,onSubmit:i},null,8,["workmaster"])):B("",!0)]),e("main",Ee,[c(m)&&c(m).phases?(g(),S(xe,{key:0,workmaster:c(m),workmasterPhases:c(m).phases,onAdd:T,onEdit:a,onDelete:l},null,8,["workmaster","workmasterPhases"])):B("",!0)])],64))}});const Je=oe(De,[["__scopeId","data-v-b77b9b04"]]);export{Je as default};
