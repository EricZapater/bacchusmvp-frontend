import{E as n}from"./index-ed8fb5bb.js";import{S as i}from"./index-f2c65ad9.js";import{P as t}from"./index-ca372a93.js";const d=n({id:"purchaseMasterData",state:()=>({masterData:{paymentMethods:[],series:[],statuses:[],suppliers:[],taxes:[],exercises:[]},purchaseInvoices:void 0}),getters:{},actions:{async fetchMasterData(){this.masterData.series=await t.PurchaseInvoiceSerie.getAll(),this.masterData.statuses=await t.PurchaseInvoiceStatus.getAll(),this.masterData.series=await t.PurchaseInvoiceSerie.getAll(),this.masterData.suppliers=await t.Supplier.getAll(),this.masterData.paymentMethods=await i.PaymentMethod.getAll(),this.masterData.exercises=await i.Exercice.getAll(),this.masterData.taxes=await i.Tax.getAll()}}}),I=n({id:"purchaseInvoices",state:()=>({purchaseInvoice:void 0,purchaseInvoices:void 0}),getters:{},actions:{setNewPurchaseInvoice(e){this.purchaseInvoice={id:e,number:0,supplierNumber:"--",purchaseInvoiceDate:new Date,baseAmount:0,transportAmount:0,subtotal:0,taxAmount:0,grossAmount:0,netAmount:0,discountPercentage:0,discountAmount:0,supplierId:"",taxId:"",exerciceId:"",purchaseInvoiceSerieId:"",paymentMethodId:"",purchaseInvoiceStatusId:"",extraTaxAmount:0,extraTaxPercentatge:0,purchaseInvoiceDueDates:[]}},async Create(e){const a=await t.PurchaseInvoice.create(e);if(a)return a},async Update(e){const a=await t.PurchaseInvoice.update(e.id,e),s=await t.PurchaseInvoice.RecreateDueDates(e);return a&&s},async GetById(e){this.purchaseInvoice=await t.PurchaseInvoice.getById(e)},async GetFiltered(e,a,s,r,c,u){s?this.purchaseInvoices=await t.PurchaseInvoice.GetBetweenDatesAndStatus(e,a,s):r?this.purchaseInvoices=await t.PurchaseInvoice.GetBetweenDatesAndExcludeStatus(e,a,r):c?this.purchaseInvoices=await t.PurchaseInvoice.GetBetweenDatesAndSupplier(e,a,c):this.purchaseInvoices=await t.PurchaseInvoice.GetBetweenDates(e,a)},async GetDueDates(e){const a=await t.PurchaseInvoice.GetDueDates(e);if(a)return a},async UpdateInvoicesStatus(e){return await t.PurchaseInvoice.UpdateStatuses(e)}}});export{I as a,d as u};
