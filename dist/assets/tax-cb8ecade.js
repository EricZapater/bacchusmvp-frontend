import{G as i}from"./index-8ef16467.js";import{T as r}from"./tax.service-ec9b8391.js";const a=new r("/Tax"),l=i({id:"tax",state:()=>({tax:void 0,taxes:void 0}),getters:{},actions:{setNew(t){this.tax={id:t,name:"",disabled:!1}},async fetchAll(){this.taxes=await a.getAll()},async fetchOne(t){this.tax=await a.getById(t)},async create(t){const e=await a.create(t);return e&&await this.fetchAll(),e},async update(t,e){const s=await a.update(t,e);return s&&await this.fetchAll(),s},async delete(t){const e=await a.delete(t);return e&&await this.fetchAll(),e}}});export{l as u};
