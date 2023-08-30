import{d as I,o as T,j as E,z as x,r as h,h as V,k as o,c as A,e as i,i as c,n as p,y,l as B,a as C,F as b,v as D,u as g,m as L,P as N,K as U}from"./index-4a35f1ba.js";import{c as W,a as k,F as S}from"./form-validator-fef9bcaf.js";import{u as M}from"./plantmodel-0e9907cd.js";import"./base.service-bb100fed.js";const $={key:0},R={class:"two-columns"},z={class:"three-columns"},P=i("label",{class:"block text-900 mb-2"},"Tipus",-1),j=i("label",{class:"block text-900 mb-2"},"Area",-1),G=i("label",{class:"block text-900 mb-2"},"Desactivat",-1),K={class:"mt-2"},O=I({__name:"FormWorkcenter",props:{workcenter:{}},emits:["submit","cancel"],setup(_,{emit:d}){const u=_;T(async()=>{await t.fetchWorkcenterTypes(),await t.fetchAreas()});const v=E(),t=M(),{workcenter:e}=x(t),f=W().shape({name:k().required("El nom és obligatori").max(250,"El nom no pot superar els 250 carácters"),description:k().required("La descripció és obligatori").max(250,"La descripció pot superar els 250 carácters"),workcenterTypeId:k().required("El tipus es obligatori"),areaId:k().required("L'area es obligatoria")}),l=h({result:!1,errors:{}}),w=()=>{const r=new S(f);l.value=r.validate(u.workcenter)},s=async()=>{if(w(),l.value.result)d("submit",u.workcenter);else{let r="";Object.entries(l.value.errors).forEach(a=>{r+=`${a[1].map(m=>m)}.   `}),v.add({severity:"warn",summary:"Formulari inválid",detail:r,life:5e3})}};return(r,a)=>{const m=V("Dropdown"),q=V("Checkbox"),F=V("Button");return o(e)?(C(),A("form",$,[i("section",R,[c(y,{class:p(["mb-2",{"p-invalid":l.value.errors.name}]),label:"Nom",id:"name",modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=n=>o(e).name=n)},null,8,["modelValue","class"]),c(y,{class:p(["mb-2",{"p-invalid":l.value.errors.description}]),label:"Descripció",id:"description",modelValue:o(e).description,"onUpdate:modelValue":a[1]||(a[1]=n=>o(e).description=n)},null,8,["modelValue","class"])]),i("section",z,[i("div",null,[P,c(m,{modelValue:o(e).workcenterTypeId,"onUpdate:modelValue":a[2]||(a[2]=n=>o(e).workcenterTypeId=n),editable:"",options:o(t).workcenterTypes,optionValue:"id",optionLabel:"name",class:p(["w-full",{"p-invalid":l.value.errors.workcenterTypeId}])},null,8,["modelValue","options","class"])]),i("div",null,[j,c(m,{modelValue:o(e).areaId,"onUpdate:modelValue":a[3]||(a[3]=n=>o(e).areaId=n),editable:"",options:o(t).areas,optionValue:"id",optionLabel:"name",class:p(["w-full",{"p-invalid":l.value.errors.areaId}])},null,8,["modelValue","options","class"])]),i("div",null,[G,c(q,{modelValue:o(e).disabled,"onUpdate:modelValue":a[4]||(a[4]=n=>o(e).disabled=n),class:"w-full",binary:!0},null,8,["modelValue"])])]),i("div",K,[c(F,{label:"Guardar",class:"mr-2",onClick:s})])])):B("",!0)}}}),Y=I({__name:"Workcenter",setup(_){const d=h(b.EDIT),u=D(),v=g(),t=M(),{workcenter:e}=x(t),f=async()=>{await t.fetchArea(u.params.id);let s="";e.value?(d.value=b.EDIT,s=`Màquina: ${e.value.name}`):(d.value=b.CREATE,t.setNewWorkcenter(u.params.id),s="Alta de màquina"),v.setMenuItem({icon:N.BUILDING,backButtonVisible:!0,title:s})};T(async()=>{await f()});const l=E(),w=async()=>{const s=e.value;let r=!1,a="";d.value===b.CREATE?(r=await t.createWorkcenter(s),a="Màquina creada correctament"):(r=await t.updateWorkcenter(s.id,s),a="Màquina actualizada correctament"),r&&(l.add({severity:"success",summary:a,life:5e3}),U.back())};return(s,r)=>o(e)?(C(),L(O,{key:0,workcenter:o(e),onSubmit:w},null,8,["workcenter"])):B("",!0)}});export{Y as default};