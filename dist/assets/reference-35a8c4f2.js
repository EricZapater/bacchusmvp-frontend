import{J as i}from"./index-357c9d4c.js";import{R as c}from"./reference.service-387fdae1.js";const r=new c("/reference"),o=i({id:"reference",state:()=>({reference:void 0,references:void 0,referenceFormats:void 0,module:""}),getters:{getFullName:t=>e=>e?(e.description.length>=30&&(e.description=e.description.substring(0,29)),t.module==="sales"?`${e.code} - ${e.description} (${e.version})`:`${e.code} - ${e.description}`):""},actions:{setNewReference(t){this.reference={id:t,code:"",description:"",cost:0,price:0,disabled:!1,version:"1",sales:this.module==="sales",purchase:this.module==="purchase",production:this.module==="production",referenceTypeId:null,referenceFormatId:null,density:0,lastPurchaseCost:0}},async fetchReferences(){this.references=await r.getAll(),this.referenceFormats||(this.referenceFormats=await r.getReferenceFormats())},async fetchReferencesByModule(t){this.module=t,this.references=await r.getByModule(t),this.referenceFormats||(this.referenceFormats=await r.getReferenceFormats())},async fetchReference(t){this.reference=await r.getById(t)},async createReference(t){const e=await r.create(t);return e&&await this.fetchReferencesByModule(this.module),e},async updateReference(t,e){const s=await r.update(t,e);return s&&await this.fetchReferencesByModule(this.module),s},async deleteReference(t){const e=await r.delete(t);return e&&await this.fetchReferencesByModule(this.module),e}}});export{o as u};
