import{J as s}from"./index-3b8fad0b.js";import{E as r}from"./index-f03ae8d8.js";const n=s({id:"purchaseInvoiceSeries",state:()=>({purchaseInvoiceSerie:void 0,purchaseInvoiceSeries:void 0}),getters:{},actions:{setNewPurchaseInvoiceSerie(e){this.purchaseInvoiceSerie={id:e,name:"",description:"",disabled:!1}},async fetchPurchaseInvoiceSeries(){this.purchaseInvoiceSeries=await r.PurchaseInvoiceSerie.getAll()},async fetchPurchaseInvoiceSerie(e){this.purchaseInvoiceSerie=await r.PurchaseInvoiceSerie.getById(e)},async createPurchaseInvoiceSerie(e){const i=await r.PurchaseInvoiceSerie.create(e);return i&&await this.fetchPurchaseInvoiceSeries(),i},async updatePurchaseInvoiceSerie(e,i){const c=await r.PurchaseInvoiceSerie.update(e,i);return c&&await this.fetchPurchaseInvoiceSeries(),c},async deletePurchaseInvoiceSerie(e){const i=await r.PurchaseInvoiceSerie.delete(e);return i&&await this.fetchPurchaseInvoiceSeries(),i}}});export{n as u};
