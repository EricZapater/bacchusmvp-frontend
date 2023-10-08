import{d as E,j as I,z as g,o as x,r as B,h as w,k as e,c as D,e as c,i as p,n as _,y,l as C,a as F,F as b,v as T,u as W,m as N,P as L,K as U}from"./index-6b09c644.js";import{c as $,a as V,F as A}from"./form-validator-73bea53e.js";import{u as M}from"./warehouse-68de8382.js";import{u as R}from"./plantmodel-905a21c0.js";import"./base.service-5073802c.js";const q={key:0},P={class:"two-columns"},j={class:"two-columns"},G=c("label",{class:"block text-900 mb-2"},"Local",-1),K=c("label",{class:"block text-900 mb-2"},"Desactivat",-1),O={class:"mt-2"},H=E({__name:"FormWarehouse",props:{warehouse:{}},emits:["submit","cancel"],setup(k,{emit:m}){const d=k,f=I(),n=M(),l=R(),{warehouse:a}=g(n);x(async()=>{await l.fetchSites()});const v=$().shape({name:V().required("El nom és obligatori").max(250,"El nom no pot superar els 250 carácters"),description:V().required("La descripció és obligatori").max(250,"La descripció pot superar els 250 carácters"),siteId:V().required("El local es obligatori")}),r=B({result:!1,errors:{}}),s=()=>{const t=new A(v);r.value=t.validate(d.warehouse)},u=async()=>{if(s(),r.value.result)m("submit",d.warehouse);else{let t="";Object.entries(r.value.errors).forEach(o=>{t+=`${o[1].map(h=>h)}.   `}),f.add({severity:"warn",summary:"Formulari inválid",detail:t,life:5e3})}};return(t,o)=>{const h=w("Dropdown"),S=w("Checkbox"),z=w("Button");return e(a)?(F(),D("form",q,[c("section",P,[p(y,{class:_(["mb-2",{"p-invalid":r.value.errors.name}]),label:"Nom",id:"name",modelValue:e(a).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(a).name=i)},null,8,["modelValue","class"]),p(y,{class:_(["mb-2",{"p-invalid":r.value.errors.description}]),label:"Descripció",id:"description",modelValue:e(a).description,"onUpdate:modelValue":o[1]||(o[1]=i=>e(a).description=i)},null,8,["modelValue","class"])]),c("section",j,[c("div",null,[G,p(h,{modelValue:e(a).siteId,"onUpdate:modelValue":o[2]||(o[2]=i=>e(a).siteId=i),editable:"",options:e(l).sites,optionValue:"id",optionLabel:"name",class:_(["w-full",{"p-invalid":r.value.errors.siteId}])},null,8,["modelValue","options","class"])]),c("div",null,[K,p(S,{modelValue:e(a).disabled,"onUpdate:modelValue":o[3]||(o[3]=i=>e(a).disabled=i),class:"w-full",binary:!0},null,8,["modelValue"])])]),c("div",O,[p(z,{label:"Guardar",class:"mr-2",onClick:u})])])):C("",!0)}}}),ee=E({__name:"Warehouse",setup(k){const m=B(b.EDIT),d=T(),f=W(),n=M(),{warehouse:l}=g(n),a=async()=>{await n.fetchWarehouse(d.params.id);let s="";l.value?(m.value=b.EDIT,s=`Magatzem ${l.value.name}`):(m.value=b.CREATE,n.setNewWarehouse(d.params.id),s="Alta de magatzem"),f.setMenuItem({icon:L.BUILDING,backButtonVisible:!0,title:s})};x(async()=>{await a()});const v=I(),r=async()=>{const s=l.value;let u=!1,t="";m.value===b.CREATE?(u=await n.createWarehouse(s),t="Magatzem creat correctament"):(u=await n.updateWarehouse(s.id,s),t="Magatzem actualizat correctament"),u&&(v.add({severity:"success",summary:t,life:5e3}),U.back())};return(s,u)=>e(l)?(F(),N(H,{key:0,warehouse:e(l),onSubmit:r},null,8,["warehouse"])):C("",!0)}});export{ee as default};