import{E as n}from"./index-ed8fb5bb.js";import{S as a}from"./index-f2c65ad9.js";const d=n({id:"paymentMethod",state:()=>({paymentMethods:void 0,paymentMethod:void 0}),getters:{},actions:{setNew(t){this.paymentMethod={id:t,name:"",description:"",disabled:!1,dueDays:0,paymentDay:1,numberOfPayments:1,frequency:1}},async fetchAll(){this.paymentMethods=await a.PaymentMethod.getAll()},async fetchOne(t){this.paymentMethod=await a.PaymentMethod.getById(t)},async create(t){const e=await a.PaymentMethod.create(t);return e&&await this.fetchAll(),e},async update(t,e){const s=await a.PaymentMethod.update(t,e);return s&&await this.fetchAll(),s},async delete(t){const e=await a.PaymentMethod.delete(t);return e&&await this.fetchAll(),e}}});export{d as u};
