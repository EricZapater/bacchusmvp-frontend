import{J as t}from"./index-7c1e9124.js";import{S as o}from"./index-121e38e5.js";const c=t({id:"stock",state:()=>({stocks:void 0}),getters:{},actions:{async fetchStocks(){this.stocks=await o.Stock.getAll()}}});export{c as u};
