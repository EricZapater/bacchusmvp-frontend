import{G as i}from"./index-8ef16467.js";import{E as r}from"./exercise.service-bb122a0d.js";const s=new r("/Exercise"),l=i({id:"exercise",state:()=>({exercise:void 0,exercises:void 0}),getters:{},actions:{setNew(e){this.exercise={id:e,name:"",description:"",startDate:new Date,endDate:new Date,disabled:!1}},async fetchAll(){this.exercises=await s.getAll()},async fetchOne(e){this.exercise=await s.getById(e)},async create(e){const t=await s.create(e);return t&&await this.fetchAll(),t},async update(e,t){const a=await s.update(e,t);return a&&await this.fetchAll(),a},async delete(e){const t=await s.delete(e);return t&&await this.fetchAll(),t}}});export{l as u};