import{d as k,j as w,r as D,h as f,c as _,e as t,i as n,n as h,y as V,l as E,a as F,F as u,v as C,u as B,z as I,o as N,k as M,m as P,P as U,C as T}from"./index-8ef16467.js";import{c as $,a as g,d as c,F as O}from"./form-validator-167199ef.js";import{u as A}from"./paymentMethod-c1d83679.js";import"./paymentmethod.service-70117fd4.js";import"./base.service-01d8aabb.js";const L={key:0},R={class:"two-columns"},S={class:"two-columns"},z=t("label",{class:"block text-900 mb-2"},"Dies venciment",-1),j=t("label",{class:"block text-900 mb-2"},"Dia de pagament",-1),G={class:"two-columns"},H=t("label",{class:"block text-900 mb-2"},"Número de pagaments",-1),J=t("label",{class:"block text-900 mb-2"},"Freqüència",-1),K=t("label",{class:"block text-900 mb-2"},"Desactivada",-1),Q={class:"mt-2"},W=k({__name:"FormPaymentMethod",props:{paymentMethod:{}},emits:["submit","cancel"],setup(v,{emit:r}){const d=v,p=w(),m=$().shape({name:g().required("El nom és obligatori").max(250,"El nom comercial no pot superar els 250 carácters"),description:g().required("La descripció és obligatori").max(250,"La descripció no pot superar els 250 carácters"),dueDays:c().required("Els dies de venciment són obligatoris"),paymentDay:c().required("El dia de pagament és obligatori"),numberOfPayments:c().required("El número de pagaments és obligatori"),frequency:c().required("La freqüència és obligatoria")}),s=D({result:!1,errors:{}}),y=()=>{const a=new O(m);s.value=a.validate(d.paymentMethod)},b=async()=>{if(y(),s.value.result)r("submit",d.paymentMethod);else{let a="";Object.entries(s.value.errors).forEach(e=>{a+=`${e[1].map(l=>l)}.   `}),p.add({severity:"warn",summary:"Formulari inválid",detail:a,life:5e3})}};return(a,e)=>{const l=f("InputNumber"),i=f("Checkbox"),q=f("Button");return a.paymentMethod?(F(),_("form",L,[t("div",R,[n(V,{class:h(["mb-2",{"p-invalid":s.value.errors.name}]),label:"Nom",id:"name",modelValue:a.paymentMethod.name,"onUpdate:modelValue":e[0]||(e[0]=o=>a.paymentMethod.name=o)},null,8,["modelValue","class"]),n(V,{class:h(["mb-2",{"p-invalid":s.value.errors.description}]),label:"Descripció",id:"description",modelValue:a.paymentMethod.description,"onUpdate:modelValue":e[1]||(e[1]=o=>a.paymentMethod.description=o)},null,8,["modelValue","class"])]),t("div",S,[t("div",null,[z,n(l,{modelValue:a.paymentMethod.dueDays,"onUpdate:modelValue":e[2]||(e[2]=o=>a.paymentMethod.dueDays=o),class:"w-full mb-2"},null,8,["modelValue"])]),t("div",null,[j,n(l,{modelValue:a.paymentMethod.paymentDay,"onUpdate:modelValue":e[3]||(e[3]=o=>a.paymentMethod.paymentDay=o),class:"w-full mb-2"},null,8,["modelValue"])])]),t("div",G,[t("div",null,[H,n(l,{modelValue:a.paymentMethod.numberOfPayments,"onUpdate:modelValue":e[4]||(e[4]=o=>a.paymentMethod.numberOfPayments=o),class:"w-full mb-2"},null,8,["modelValue"])]),t("div",null,[J,n(l,{modelValue:a.paymentMethod.frequency,"onUpdate:modelValue":e[5]||(e[5]=o=>a.paymentMethod.frequency=o),class:"w-full mb-2"},null,8,["modelValue"])])]),t("div",null,[t("div",null,[K,n(i,{modelValue:a.paymentMethod.disabled,"onUpdate:modelValue":e[6]||(e[6]=o=>a.paymentMethod.disabled=o),class:"w-full",binary:!0},null,8,["modelValue"])])]),t("div",Q,[n(q,{label:"Guardar",class:"mr-2",onClick:b})])])):E("",!0)}}}),ae=k({__name:"PaymentMethod",setup(v){const r=D(u.EDIT),d=C(),p=B(),m=A(),{paymentMethod:s}=I(m),y=async()=>{await m.fetchOne(d.params.id);let e="";s.value?(r.value=u.EDIT,e=`Forma de pagament ${s.value.name}`):(r.value=u.CREATE,m.setNew(d.params.id),e="Alta de forma de pagament"),p.setMenuItem({icon:U.BUILDING,backButtonVisible:!0,title:e})};N(async()=>{await y()});const b=w(),a=async()=>{const e=s.value;let l=!1,i="";r.value===u.CREATE?(l=await m.create(e),i="Forma de pagament creada correctament"):(l=await m.update(e.id,e),i="Forma de pagament actualizada correctament"),l&&(b.add({severity:"success",summary:i,life:5e3}),T.back())};return(e,l)=>M(s)?(F(),P(W,{key:0,"payment-method":M(s),onSubmit:a},null,8,["payment-method"])):E("",!0)}});export{ae as default};