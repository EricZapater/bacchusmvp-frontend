import{u as m}from"./lifecycle-2ff86d21.js";import{d,h as u,c as l,D as n,l as i,i as _,w as f,N as b,k as h,a}from"./index-1f9e3570.js";const w={class:"mb-2"},y={key:0,class:"block text-900 mb-2"},V={key:0,class:"flex align-items-center"},g=d({__name:"DropdownLifecycle",props:{label:{},modelValue:{}},emits:["update:modelValue"],setup(k,{emit:r}){const c=m();return(e,t)=>{var s;const p=u("Dropdown");return a(),l("div",w,[e.label.length>0?(a(),l("label",y,n(e.label),1)):i("",!0),_(p,b({showClear:"",options:(s=h(c).lifecycle)==null?void 0:s.statuses,placeholder:"Selecciona...",optionValue:"id",optionLabel:"name",class:"w-full"},e.$attrs,{"model-value":e.modelValue,onChange:t[0]||(t[0]=o=>r("update:modelValue",o.value))}),{option:f(o=>[o.option?(a(),l("div",V,n(o.option.name),1)):i("",!0)]),_:1},16,["options","model-value"])])}}});export{g as _};
