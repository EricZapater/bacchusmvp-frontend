import{J as t}from"./index-56b5197e.js";import{S as o}from"./index-cf983621.js";const c=t({id:"stock",state:()=>({stocks:void 0}),getters:{},actions:{async fetchStocks(){this.stocks=await o.Stock.getAll()}}});export{c as u};
