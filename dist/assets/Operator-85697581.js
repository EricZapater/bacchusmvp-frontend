import{d as T,o as k,j as O,z as C,r as N,h as y,c as U,e as i,i as n,n as p,y as c,k as E,l as g,a as I,F as b,v as _,u as M,m as S,P as q,L as D}from"./index-56b5197e.js";import{c as R,a as d,F as $}from"./form-validator-f8953ae6.js";import{u as F}from"./plantmodel-bac71558.js";import"./_commonjsHelpers-725317a4.js";import"./index-fcb398d1.js";import"./base.service-d38362fa.js";const A={key:0},z={class:"three-columns"},P={class:"three-columns"},j=i("label",{class:"block text-900 mb-2"},"Tipus d'operari",-1),L=i("label",{class:"block text-900 mb-2"},"Desactivat",-1),G={class:"mt-2"},H=T({__name:"FormOperator",props:{operator:{}},emits:["submit","cancel"],setup(w,{emit:u}){const m=w;k(async()=>{await r.fetchOperators(),await r.fetchOperatorTypes()});const v=O(),r=F();C(r);const s=R().shape({name:d().required("El nom és obligatori").max(250,"El nom no pot superar els 250 carácters"),surname:d().required("El cognom és obligatori").max(250,"El cognom no pot superar els 250 carácters"),code:d().required("El codi és obligatori").max(10,"El codi no pot superar els 10 carácters"),vatNumber:d().required("El nif és obligatori").max(20,"El nif no pot superar els 20 carácters"),operatorTypeId:d().required("El tipus d'operari es obligatori")}),t=N({result:!1,errors:{}}),f=()=>{const e=new $(s);t.value=e.validate(m.operator)},V=async()=>{if(f(),t.value.result)u("submit",m.operator);else{let e="";Object.entries(t.value.errors).forEach(o=>{e+=`${o[1].map(l=>l)}.   `}),v.add({severity:"warn",summary:"Formulari inválid",detail:e,life:5e3})}};return(e,o)=>{const l=y("Dropdown"),B=y("Checkbox"),h=y("Button");return e.operator?(I(),U("form",A,[i("section",z,[n(c,{class:p(["mb-2",{"p-invalid":t.value.errors.name}]),label:"Nom",id:"name",modelValue:e.operator.name,"onUpdate:modelValue":o[0]||(o[0]=a=>e.operator.name=a)},null,8,["modelValue","class"]),n(c,{class:p(["mb-2",{"p-invalid":t.value.errors.surname}]),label:"Cognom",id:"surname",modelValue:e.operator.surname,"onUpdate:modelValue":o[1]||(o[1]=a=>e.operator.surname=a)},null,8,["modelValue","class"]),n(c,{class:p(["mb-2",{"p-invalid":t.value.errors.surname}]),label:"Codi",id:"code",modelValue:e.operator.code,"onUpdate:modelValue":o[2]||(o[2]=a=>e.operator.code=a)},null,8,["modelValue","class"])]),i("section",P,[n(c,{class:p(["mb-2",{"p-invalid":t.value.errors.vatNumber}]),label:"NIF",id:"vatNumber",modelValue:e.operator.vatNumber,"onUpdate:modelValue":o[3]||(o[3]=a=>e.operator.vatNumber=a)},null,8,["modelValue","class"]),i("div",null,[j,n(l,{modelValue:e.operator.operatorTypeId,"onUpdate:modelValue":o[4]||(o[4]=a=>e.operator.operatorTypeId=a),editable:"",options:E(r).operatorTypes,optionValue:"id",optionLabel:"name",class:p(["w-full",{"p-invalid":t.value.errors.operatorTypeId}])},null,8,["modelValue","options","class"])]),i("div",null,[L,n(B,{modelValue:e.operator.disabled,"onUpdate:modelValue":o[5]||(o[5]=a=>e.operator.disabled=a),class:"w-full",binary:!0},null,8,["modelValue"])])]),i("div",G,[n(h,{label:"Guardar",class:"mr-2",onClick:V})])])):g("",!0)}}}),Z=T({__name:"Operator",setup(w){const u=N(b.EDIT),m=_(),v=M(),r=F(),{operator:s}=C(r),t=async()=>{await r.fetchOperator(m.params.id);let e="";s.value?(u.value=b.EDIT,e=`Operari: ${s.value.name}`):(u.value=b.CREATE,r.setNewOperator(m.params.id),e="Alta d'operari"),v.setMenuItem({icon:q.USER,backButtonVisible:!0,title:e})};k(async()=>{await t()});const f=O(),V=async()=>{const e=s.value;let o=!1,l="";u.value===b.CREATE?(o=await r.createOperator(e),l="Operari creat correctament"):(o=await r.updateOperator(e.id,e),l="Operari actualizat correctament"),o&&(f.add({severity:"success",summary:l,life:5e3}),D.back())};return(e,o)=>E(s)?(I(),S(H,{key:0,operator:E(s),onSubmit:V},null,8,["operator"])):g("",!0)}});export{Z as default};
