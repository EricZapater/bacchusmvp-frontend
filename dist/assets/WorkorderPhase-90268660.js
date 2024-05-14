import{_ as oe}from"./FormWorkorderPhase.vue_vue_type_script_setup_true_lang-9be46c66.js";import{d as $,x as q,h as p,a as g,m as M,w as h,e as s,i as o,k as d,P as B,C as F,D as L,B as se,n as S,j as N,r as P,c as R,s as T,y as C,l as D,v as ie,u as ne,z as re,E as de,o as me,F as k,G as ue}from"./index-3b8fad0b.js";import{g as W}from"./functions-2e154ea4.js";import{u as O}from"./plantmodel-4f98e0d8.js";import{u as ce}from"./workmaster-f910fa28.js";import{c as j,d as A,F as z,a as pe}from"./form-validator-f8953ae6.js";import{u as G}from"./reference-e0518f57.js";import{_ as fe}from"./DropdownReference.vue_vue_type_script_setup_true_lang-f8a66cf5.js";import{u as be}from"./workorder-7616749e.js";import"./DropdownLifecycle.vue_vue_type_script_setup_true_lang-5f554caf.js";import"./lifecycle-fc73f11b.js";import"./index-30d8ed80.js";import"./base.service-95f208f7.js";import"./reference.service-d6c42ab4.js";import"./_commonjsHelpers-725317a4.js";import"./v4-a960c1f4.js";import"./index-60183c2e.js";const he={class:"flex flex-wrap align-items-center justify-content-between gap-2"},ve=s("span",{class:"text-xl text-900 font-bold"},"Pasos de fabricació",-1),ye=["onClick"],_e=$({__name:"TableWorkorderPhaseDetails",props:{workorderPhase:{},details:{}},emits:["add","edit","delete"],setup(V,{emit:c}){const f=V,w=q();ce();const v=O(),y=a=>{var m;if(!v.machineStatuses)return"";const t=(m=v.machineStatuses)==null?void 0:m.find(b=>a===b.id);return t?t.name:""},r=()=>{const a={id:W(),workOrderPhaseId:f.workorderPhase.id,estimatedTime:0,isCycleTime:!1,machineStatusId:"",comment:"",order:_()};c("add",a)},_=()=>{let a=10;return f.details?(f.details.length+1)*10:a},l=a=>{a.originalEvent.target.className.includes("grid_delete_column_button")||c("edit",a.data)},e=(a,t)=>{w.require({target:a.currentTarget,message:"Está segur que vol eliminar el pas de la fase?",icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:()=>{c("delete",t)}})};return(a,t)=>{const m=p("Button"),b=p("Column"),u=p("DataTable");return g(),M(u,{onRowClick:l,value:a.details,tableStyle:"min-width: 100%","sort-field":"order","sort-order":1},{header:h(()=>[s("div",he,[ve,o(m,{icon:d(B).PLUS,rounded:"",raised:"",onClick:r},null,8,["icon"])])]),default:h(()=>[o(b,{sortable:"",field:"order",header:"Ordre",style:{width:"10%"}}),o(b,{header:"Estat de màquina",style:{width:"25%"}},{body:h(n=>[F(L(y(n.data.machineStatusId)),1)]),_:1}),o(b,{field:"estimatedTime",header:"Temps (min)",style:{width:"25%"}}),o(b,{header:"Temps de cicle",style:{width:"25%"}},{body:h(n=>[o(se,{value:n.data.isCycleTime},null,8,["value"])]),_:1}),o(b,{style:{width:"25%"}},{body:h(n=>[s("i",{class:S([d(B).TIMES,"grid_delete_column_button"]),onClick:E=>e(E,n.data)},null,10,ye)]),_:1})]),_:1},8,["value"])}}}),Ie={key:0},we={class:"four-columns"},ke=s("label",{class:"block text-900 mb-2"},"Estat",-1),ge=s("label",{class:"block text-900v mb-1"},"Temps de cicle",-1),Ve={class:"mt-3"},Te=s("label",{class:"block text-900v mb-1"},"Comentari fabricació",-1),Ce=s("br",null,null,-1),Ee=$({__name:"FormWorkorderPhaseDetail",props:{detail:{}},emits:["submit","cancel"],setup(V,{emit:c}){const f=V,w=O(),v=N(),y=j().shape({order:A().required("L'ordre és obligatori").positive("L'ordre ha de ser positiu"),estimatedTime:A().required("El temps estimat és obligatori")}),r=P({result:!1,errors:{}}),_=()=>{const e=new z(y);r.value=e.validate(f.detail)},l=async()=>{if(_(),r.value.result)c("submit",f.detail);else{let e="";Object.entries(r.value.errors).forEach(a=>{e+=`${a[1].map(t=>t)}.   `}),v.add({severity:"warn",summary:"Formulari inválid",detail:e,life:5e3})}};return(e,a)=>{const t=p("Dropdown"),m=p("Checkbox"),b=p("Textarea"),u=p("Button");return e.detail?(g(),R("form",Ie,[s("section",we,[s("div",null,[o(C,{type:d(T).NUMERIC,label:"Ordre",modelValue:e.detail.order,"onUpdate:modelValue":a[0]||(a[0]=n=>e.detail.order=n),class:S({"p-invalid":r.value.errors.order})},null,8,["type","modelValue","class"])]),s("div",null,[ke,o(t,{modelValue:e.detail.machineStatusId,"onUpdate:modelValue":a[1]||(a[1]=n=>e.detail.machineStatusId=n),editable:"",options:d(w).machineStatuses,optionValue:"id",optionLabel:"description",class:S(["w-full",{"p-invalid":r.value.errors.machineStatusId}])},null,8,["modelValue","options","class"])]),s("div",null,[ge,o(m,{modelValue:e.detail.isCycleTime,"onUpdate:modelValue":a[2]||(a[2]=n=>e.detail.isCycleTime=n),class:"w-full",binary:!0},null,8,["modelValue"])]),s("div",null,[o(C,{type:d(T).NUMERIC,decimals:2,label:"Temps estimat (min)",modelValue:e.detail.estimatedTime,"onUpdate:modelValue":a[3]||(a[3]=n=>e.detail.estimatedTime=n),class:S({"p-invalid":r.value.errors.estimatedTime})},null,8,["type","modelValue","class"])])]),s("div",Ve,[Te,o(b,{class:"w-full",modelValue:e.detail.comment,"onUpdate:modelValue":a[4]||(a[4]=n=>e.detail.comment=n)},null,8,["modelValue"])]),Ce,s("div",null,[o(u,{label:"Guardar pas",style:{float:"right"},size:"small",onClick:l})])])):D("",!0)}}}),Pe={class:"flex flex-wrap align-items-center justify-content-between gap-2"},De=s("span",{class:"text-xl text-900 font-bold"},"Materials de fabricació",-1),Se=["onClick"],Me=$({__name:"TableWorkorderPhaseBillOfMaterials",props:{workorderPhase:{},billOfMaterials:{}},emits:["add","edit","delete"],setup(V,{emit:c}){const f=V,w=q(),v=G(),y=e=>{var t;if(!v.references)return"";const a=(t=v.references)==null?void 0:t.find(m=>e===m.id);return a?v.getFullName(a):""},r=()=>{const e={id:W(),workOrderPhaseId:f.workorderPhase.id,referenceId:"",quantity:0,width:0,diameter:0,height:0,length:0,thickness:0};c("add",e)},_=e=>{e.originalEvent.target.className.includes("grid_delete_column_button")||c("edit",e.data)},l=(e,a)=>{w.require({target:e.currentTarget,message:"Está segur que vol eliminar el material de la fase?",icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:()=>{c("delete",a)}})};return(e,a)=>{const t=p("Button"),m=p("Column"),b=p("DataTable");return g(),M(b,{onRowClick:_,value:e.billOfMaterials,tableStyle:"min-width: 100%"},{header:h(()=>[s("div",Pe,[De,o(t,{icon:d(B).PLUS,rounded:"",raised:"",onClick:r},null,8,["icon"])])]),default:h(()=>[o(m,{header:"Material consum",style:{width:"30%"}},{body:h(u=>[F(L(y(u.data.referenceId)),1)]),_:1}),o(m,{field:"quantity",header:"Consum",style:{width:"15%"}}),o(m,{field:"width",header:"Ample (x) mm",style:{width:"12%"}}),o(m,{field:"length",header:"Llarg (y) mm",style:{width:"12%"}}),o(m,{field:"height",header:"Alt (z) mm",style:{width:"12%"}}),o(m,{field:"diameter",header:"Diàmetre mm",style:{width:"12%"}}),o(m,{field:"thickness",header:"Gruix mm",style:{width:"12%"}}),o(m,{style:{width:"10%"}},{body:h(u=>[s("i",{class:S([d(B).TIMES,"grid_delete_column_button"]),onClick:n=>l(n,u.data)},null,10,Se)]),_:1})]),_:1},8,["value"])}}}),Be={key:0},$e={class:"three-columns"},Ue={class:"three-columns"},Re={class:"mt-2"},Ae={class:"mt-2"},Ne={class:"mt-2"},Oe=s("br",null,null,-1),qe=$({__name:"FormWorkorderPhaseBomItem",props:{bomItem:{}},emits:["submit","cancel"],setup(V,{emit:c}){const f=V,w=N(),v=j().shape({referenceId:pe().required("El material de consum és obligatori"),quantity:A().min(1,"La quantitat a consumir ha de ser positiva").required("La quantitat a consumir és obligatoria")}),y=P({result:!1,errors:{}}),r=()=>{const l=new z(v);y.value=l.validate(f.bomItem)},_=async()=>{if(r(),y.value.result)c("submit",f.bomItem);else{let l="";Object.entries(y.value.errors).forEach(e=>{l+=`${e[1].map(a=>a)}.   `}),w.add({severity:"warn",summary:"Formulari inválid",detail:l,life:5e3})}};return(l,e)=>{const a=p("Button");return l.bomItem?(g(),R("form",Be,[s("div",null,[o(fe,{label:"Material",fullName:!0,modelValue:l.bomItem.referenceId,"onUpdate:modelValue":e[0]||(e[0]=t=>l.bomItem.referenceId=t),class:S({"p-invalid":y.value.errors.referenceId})},null,8,["modelValue","class"])]),s("section",$e,[s("div",null,[o(C,{type:d(T).NUMERIC,label:"Quantitat",modelValue:l.bomItem.quantity,"onUpdate:modelValue":e[1]||(e[1]=t=>l.bomItem.quantity=t)},null,8,["type","modelValue"])]),s("div",null,[o(C,{type:d(T).NUMERIC,label:"Amplada (mm)",decimals:2,modelValue:l.bomItem.width,"onUpdate:modelValue":e[2]||(e[2]=t=>l.bomItem.width=t)},null,8,["type","modelValue"])]),s("div",null,[o(C,{type:d(T).NUMERIC,decimals:2,label:"Alçada (mm)",modelValue:l.bomItem.height,"onUpdate:modelValue":e[3]||(e[3]=t=>l.bomItem.height=t)},null,8,["type","modelValue"])])]),s("section",Ue,[s("div",Re,[o(C,{type:d(T).NUMERIC,decimals:2,label:"Longitud (mm)",modelValue:l.bomItem.length,"onUpdate:modelValue":e[4]||(e[4]=t=>l.bomItem.length=t)},null,8,["type","modelValue"])]),s("div",Ae,[o(C,{type:d(T).NUMERIC,decimals:2,label:"Diàmetre (mm)",modelValue:l.bomItem.diameter,"onUpdate:modelValue":e[5]||(e[5]=t=>l.bomItem.diameter=t)},null,8,["type","modelValue"])]),s("div",Ne,[o(C,{type:d(T).NUMERIC,decimals:2,label:"Gruix (mm)",modelValue:l.bomItem.thickness,"onUpdate:modelValue":e[6]||(e[6]=t=>l.bomItem.thickness=t)},null,8,["type","modelValue"])])]),Oe,s("div",null,[o(a,{label:"Guardar material",style:{float:"right"},size:"small",onClick:_})])])):D("",!0)}}}),Fe={key:0,class:"main"},ot=$({__name:"WorkorderPhase",setup(V){const c=ie(),f=N(),w=ne(),v=G(),y=O(),r=be(),{workorder:_,workorderPhase:l}=re(r),e=P(""),a=P(""),t=de({visible:!1,title:"Fase",closable:!0,position:"center",modal:!0});me(async()=>{e.value=c.params.id,a.value=c.params.phaseid,await m();let i="";i="Ordre de fabricació",_.value&&l.value&&(i=`${i} ${_.value.code} - Fase ${l.value.code}`),w.setMenuItem({icon:B.BUILDING,backButtonVisible:!0,title:i}),v.fetchReferencesByModule("purchase"),y.fetchActiveModel()});const m=async()=>{await r.fetchPhaseById(a.value)},b=async i=>{await r.updatePhase(a.value,i)&&f.add({severity:"success",summary:"Fase actualitzada",detail:`La fase ${i.code} ha estat actualitzada correctament`})},u=P(k.CREATE),n=P(void 0),E=P(void 0),x=()=>{n.value=void 0,E.value=void 0},H=i=>{u.value=k.CREATE,n.value=i,t.title="Afegir pas de fabricació",t.visible=!0},Q=i=>{u.value=k.EDIT,n.value=i,t.title="Modificar pas de fabricació",t.visible=!0},J=i=>{r.deletePhaseDetail(i.id)},K=async i=>{let I;u.value===k.CREATE?I=r.createPhaseDetail(i):u.value===k.EDIT&&(I=r.updatePhaseDetail(i.id,i)),await I&&(t.visible=!1)},X=i=>{u.value=k.CREATE,E.value=i,t.title="Afegir material",t.visible=!0},Y=i=>{u.value=k.EDIT,E.value=i,t.title="Modificar material",t.visible=!0},Z=i=>{r.deletePhaseBomItem(i.id)},ee=async i=>{let I;u.value===k.CREATE?I=r.createPhaseBomItem(i):u.value===k.EDIT&&(I=r.updatePhaseBomItem(i.id,i)),await I&&(t.visible=!1)};return(i,I)=>{const U=p("TabPanel"),te=p("TabView"),ae=p("Dialog");return g(),R(ue,null,[s("header",null,[d(_)&&d(l)?(g(),M(oe,{key:0,workorder:d(_),phase:d(l),onSubmit:b},null,8,["workorder","phase"])):D("",!0)]),d(l)?(g(),R("main",Fe,[o(te,null,{default:h(()=>[o(U,{header:"Pasos"},{default:h(()=>[o(_e,{workorderPhase:d(l),details:d(l).details,onAdd:H,onEdit:Q,onDelete:J},null,8,["workorderPhase","details"])]),_:1}),o(U,{header:"Materials"},{default:h(()=>[o(Me,{workorderPhase:d(l),billOfMaterials:d(l).billOfMaterials,onAdd:X,onEdit:Y,onDelete:Z},null,8,["workorderPhase","billOfMaterials"])]),_:1})]),_:1}),o(ae,{visible:t.visible,"onUpdate:visible":I[0]||(I[0]=le=>t.visible=le),header:t.title,closable:t.closable,modal:t.modal,onHide:x},{default:h(()=>[n.value?(g(),M(Ee,{key:0,detail:n.value,onSubmit:K},null,8,["detail"])):D("",!0),E.value?(g(),M(qe,{key:1,bomItem:E.value,onSubmit:ee},null,8,["bomItem"])):D("",!0)]),_:1},8,["visible","header","closable","modal"])])):D("",!0)],64)}}});export{ot as default};