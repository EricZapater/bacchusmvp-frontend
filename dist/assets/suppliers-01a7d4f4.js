var o=Object.defineProperty;var y=(t,e,s)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>(y(t,typeof e!="symbol"?e+"":e,s),s);import{m as p,q as i,s as h}from"./index-7ccc629f.js";class n{constructor(e){l(this,"apiClient");this.resource=e,this.apiClient=p}async getAll(){try{const e=await p.get(this.resource);if(e.status===200)return e.data}catch(e){i(e)}}async getById(e){try{const s=await p.get(`${this.resource}/${e}`);if(s.status===200)return s.data}catch(s){i(s)}}async create(e){let s=!1;try{const r=await p.post(`${this.resource}`,e);(r.status===200||r.status===201)&&(s=!0)}catch(r){i(r)}return s}async update(e,s){let r=!1;try{const c=await p.put(`${this.resource}/${e}`,s);(c.status===200||c.status===201)&&(r=!0)}catch(c){i(c)}return r}async delete(e){let s=!1;try{const r=await p.delete(`${this.resource}/${e}`);(r.status===200||r.status===201)&&(s=!0)}catch(r){i(r)}return s}}class d extends n{async addContact(e){let s=!1;try{const r=await this.apiClient.post(`${this.resource}/Contact`,e);(r.status===200||r.status===201)&&(s=!0)}catch(r){i(r)}return s}async updateContact(e){let s=!1;try{const r=await this.apiClient.put(`${this.resource}/Contact/${e.id}`,e);(r.status===200||r.status===201)&&(s=!0)}catch(r){i(r)}return s}async removeContact(e){let s=!1;try{const r=await this.apiClient.delete(`${this.resource}/Contact/${e}`);(r.status===200||r.status===201)&&(s=!0)}catch(r){i(r)}return s}}class f extends n{}const a=new d("/supplier"),u=new f("/suppliertype"),C=h({id:"suppliers",state:()=>({suppliers:void 0,supplierTypes:void 0,supplier:void 0,supplierType:void 0}),getters:{},actions:{setNewSupplier(t){this.supplier={id:t,comercialName:"",taxName:"",address:"",cif:"",city:"",country:"Espanya",disabled:!1,observations:"",phone:"",postalCode:"",region:""}},async fetchSuppliers(){this.suppliers=await a.getAll()},async fetchSupplier(t){this.supplier=await a.getById(t)},async createSupplier(t){const e=await a.create(t);return e&&await this.fetchSuppliers(),e},async updateSupplier(t,e){const s=await a.update(t,e);return s&&await this.fetchSuppliers(),s},async deleteSupplier(t){const e=await a.delete(t);return e&&await this.fetchSuppliers(),e},setNewSupplierType(t){this.supplierType={id:t,name:"",description:""}},async fetchSupplierTypes(){this.supplierTypes=await u.getAll()},async fetchSupplierType(t){this.supplierType=await u.getById(t)},async createSupplierType(t){const e=await u.create(t);return e&&await this.fetchSupplierTypes(),e},async updateSupplierType(t,e){const s=await u.update(t,e);return s&&await this.fetchSupplierTypes(),s},async deleteSupplierType(t){const e=await u.delete(t);return e&&await this.fetchSupplierTypes(),e},async addContactToSupplier(t){const e=await a.addContact(t);return e&&await this.fetchSupplier(t.supplierId),e},async updateContactFromSupplier(t){const e=await a.updateContact(t);return e&&await this.fetchSupplier(t.supplierId),e},async removeContactFromSupplier(t){const e=await a.removeContact(t.id);return e&&await this.fetchSupplier(t.supplierId),e}}});export{C as u};