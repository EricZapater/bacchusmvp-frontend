import{J as t}from"./index-357c9d4c.js";import{S as e}from"./index-44203410.js";const i=t({id:"sharedMasterData",state:()=>({paymentMethods:[],taxes:[],exercises:[],lifecycles:[],references:[]}),getters:{},actions:{async fetchMasterData(){this.paymentMethods=await e.PaymentMethod.getActive(),this.exercises=await e.Exercice.getActive(),this.taxes=await e.Tax.getActive(),this.lifecycles=await e.Lifecycle.getActive()}}});export{i as u};