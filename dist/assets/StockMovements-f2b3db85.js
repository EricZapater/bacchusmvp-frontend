import{_ as P}from"./ExerciseDatePicker.vue_vue_type_script_setup_true_lang-d23f6425.js";import{K as C,d as T,j as B,x as I,g as R,u as E,r as F,o as A,P as f,h,c as L,i as t,w as l,k as i,a as N,e as d,C as _,D as x}from"./index-70c82e0d.js";import{S}from"./index-fea42caf.js";import{u as G}from"./reference-54a3cecc.js";import{u as V}from"./exercise-5b3d4843.js";import{f as j,a as k}from"./functions-8d6e0d81.js";import"./base.service-c65b9c29.js";import"./reference.service-1c3138d7.js";import"./index-be7f1ff3.js";import"./v4-a960c1f4.js";const z=C({id:"stockMovement",state:()=>({stockMovement:void 0,stockMovements:void 0}),getters:{},actions:{async Create(n){return S.StockMovementService.Create(n)},async GetBetweenDates(n,c){this.stockMovements=await S.StockMovementService.GetBetweenDates(n,c)}}}),H={class:"flex flex-wrap align-items-center justify-content-between gap-2"},K={class:"datatable-filter"},Q={class:"filter-field"},Y={class:"datatable-buttons"},q="temges.stockMovements.filter",re=T({__name:"StockMovements",setup(n){const c=B();I(),R();const s=E(),v=z(),p=G(),m=V(),w=F({exercise:void 0});A(async()=>{s.setMenuItem({icon:f.MAP,title:"Moviments de magatzem"}),await m.fetchAll(),await p.fetchReferences(),b()});const b=()=>{var a;const o=new Date().getFullYear().toString(),r=(a=m.exercises)==null?void 0:a.find(e=>e.name===o);r&&(s.exercisePicker.exercise=r,s.exercisePicker.dates=[new Date(s.exercisePicker.exercise.startDate),new Date(s.exercisePicker.exercise.endDate)])},g=()=>{s.cleanExercisePicker()},y=async()=>{if(s.exercisePicker.dates){const o=k(s.exercisePicker.dates[0]),r=k(s.exercisePicker.dates[1]);await v.GetBetweenDates(o,r),localStorage.setItem(q,JSON.stringify(w.value))}else c.add({severity:"info",summary:"Filtre invàlid",detail:"Seleccioni un període",life:5e3})},D=o=>{var a;const r=(a=p.references)==null?void 0:a.find(e=>e.id===o);return r?r.description:""};return(o,r)=>{const a=h("Button"),e=h("Column"),M=h("DataTable");return N(),L("div",null,[t(M,{class:"small-datatable",tablStyle:"min-width:100%",scrollable:"",scrollHeight:"80vh",sortMode:"multiple",value:i(v).stockMovements},{header:l(()=>[d("div",H,[d("div",K,[d("div",Q,[t(P,{exercises:i(m).exercises,onRangeSelected:y},null,8,["exercises"])])]),d("div",Y,[t(a,{class:"datatable-button mr-2",icon:i(f).FILTER,rounded:"",raised:"",onClick:y},null,8,["icon"]),t(a,{class:"datatable-button mr-2",icon:i(f).FILTER_SLASH,rounded:"",raised:"",onClick:g},null,8,["icon"])])])]),default:l(()=>[t(e,{header:"Data moviment",sortable:!0,style:{width:"10%"}},{body:l(u=>[_(x(i(j)(u.data.movementDate)),1)]),_:1}),t(e,{header:"Producte",sortable:!0,style:{width:"20%"}},{body:l(u=>[_(x(D(u.data.referenceId)),1)]),_:1}),t(e,{field:"width",header:"Ample (x) mm",style:{width:"5%"}}),t(e,{field:"length",header:"Llarg (y) mm",style:{width:"5%"}}),t(e,{field:"height",header:"Alt (z) mm",style:{width:"5%"}}),t(e,{field:"diameter",header:"Diámetre mm",style:{width:"5%"}}),t(e,{field:"thickness",header:"Gruix mm",style:{width:"5%"}}),t(e,{field:"description",header:"Descripció",sortable:!0,style:{width:"25%"}}),t(e,{field:"movementType",header:"Tipus de moviment",sortable:!0,style:{width:"10%"}}),t(e,{field:"quantity",header:"Quantitat",style:{width:"10%"}})]),_:1},8,["value"])])}}});export{re as default};