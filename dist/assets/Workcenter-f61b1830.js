import{d as T,j as E,z as x,r as q,h as I,k as e,c as L,e as s,i as d,n as b,y as h,l as B,a as C,F as k,v as S,u as g,o as D,m as U,P as N,L as W}from"./index-98d6f8aa.js";import{c as A,a as f,F as $}from"./form-validator-f8953ae6.js";import{u as M}from"./plantmodel-3866c95d.js";import{u as R}from"./shift-09ac0ed5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a7eaf997.js";import"./base.service-e22fe275.js";const z={key:0},P={class:"three-columns"},j=s("label",{class:"block text-900 mb-2"},"Desactivat",-1),G={class:"three-columns"},O=s("label",{class:"block text-900 mb-2"},"Tipus",-1),H=s("label",{class:"block text-900 mb-2"},"Area",-1),J=s("label",{class:"block text-900 mb-2"},"Torn",-1),K={class:"mt-2"},Q=T({__name:"FormWorkcenter",props:{workcenter:{}},emits:["submit","cancel"],setup(y,{emit:m}){const p=y,v=E(),n=M(),c=R(),{workcenter:o}=x(n),V=A().shape({name:f().required("El nom és obligatori").max(250,"El nom no pot superar els 250 carácters"),description:f().required("La descripció és obligatori").max(250,"La descripció pot superar els 250 carácters"),workcenterTypeId:f().required("El tipus es obligatori"),areaId:f().required("L'area es obligatoria"),shiftId:f().required("El torn es obligatori")}),l=q({result:!1,errors:{}}),r=()=>{const i=new $(V);l.value=i.validate(p.workcenter)},u=async()=>{if(r(),l.value.result)m("submit",p.workcenter);else{let i="";Object.entries(l.value.errors).forEach(a=>{i+=`${a[1].map(w=>w)}.   `}),v.add({severity:"warn",summary:"Formulari inválid",detail:i,life:5e3})}};return(i,a)=>{const w=I("Checkbox"),_=I("Dropdown"),F=I("Button");return e(o)?(C(),L("form",z,[s("section",P,[d(h,{class:b(["mb-2",{"p-invalid":l.value.errors.name}]),label:"Nom",id:"name",modelValue:e(o).name,"onUpdate:modelValue":a[0]||(a[0]=t=>e(o).name=t)},null,8,["modelValue","class"]),d(h,{class:b(["mb-2",{"p-invalid":l.value.errors.description}]),label:"Descripció",id:"description",modelValue:e(o).description,"onUpdate:modelValue":a[1]||(a[1]=t=>e(o).description=t)},null,8,["modelValue","class"]),s("div",null,[j,d(w,{modelValue:e(o).disabled,"onUpdate:modelValue":a[2]||(a[2]=t=>e(o).disabled=t),class:"w-full",binary:!0},null,8,["modelValue"])])]),s("section",G,[s("div",null,[O,d(_,{modelValue:e(o).workcenterTypeId,"onUpdate:modelValue":a[3]||(a[3]=t=>e(o).workcenterTypeId=t),editable:"",options:e(n).workcenterTypes,optionValue:"id",optionLabel:"name",class:b(["w-full",{"p-invalid":l.value.errors.workcenterTypeId}])},null,8,["modelValue","options","class"])]),s("div",null,[H,d(_,{modelValue:e(o).areaId,"onUpdate:modelValue":a[4]||(a[4]=t=>e(o).areaId=t),editable:"",options:e(n).areas,optionValue:"id",optionLabel:"name",class:b(["w-full",{"p-invalid":l.value.errors.areaId}])},null,8,["modelValue","options","class"])]),s("div",null,[J,d(_,{modelValue:e(o).shiftId,"onUpdate:modelValue":a[5]||(a[5]=t=>e(o).shiftId=t),editable:"",options:e(c).shifts,optionValue:"id",optionLabel:"name",class:b(["w-full",{"p-invalid":l.value.errors.shiftId}])},null,8,["modelValue","options","class"])])]),s("div",K,[d(F,{label:"Guardar",class:"mr-2",onClick:u})])])):B("",!0)}}}),se=T({__name:"Workcenter",setup(y){const m=q(k.EDIT),p=S(),v=g(),n=M(),{workcenter:c}=x(n),o=async()=>{await n.fetchWorkcenter(p.params.id);let r="";c.value?(m.value=k.EDIT,r=`Màquina: ${c.value.name}`):(m.value=k.CREATE,n.setNewWorkcenter(p.params.id),r="Alta de màquina"),v.setMenuItem({icon:N.BUILDING,backButtonVisible:!0,title:r})};D(async()=>{await o()});const V=E(),l=async()=>{const r=c.value;let u=!1,i="";m.value===k.CREATE?(u=await n.createWorkcenter(r),i="Màquina creada correctament"):(u=await n.updateWorkcenter(r.id,r),i="Màquina actualizada correctament"),u&&(V.add({severity:"success",summary:i,life:5e3}),W.back())};return(r,u)=>e(c)?(C(),U(Q,{key:0,workcenter:e(c),onSubmit:l},null,8,["workcenter"])):B("",!0)}});export{se as default};
