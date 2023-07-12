var n=Object.defineProperty;var o=(r,t,e)=>t in r?n(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(o(r,typeof t!="symbol"?t+"":t,e),e);import{t as a,J as c}from"./index-c73e34a4.js";class h{constructor(t){i(this,"apiClient");this.resource=t,this.apiClient=a}async getAll(){try{const t=await a.get(this.resource);if(t.status===200)return t.data}catch(t){c(t)}}async getById(t){try{const e=await a.get(`${this.resource}/${t}`);if(e.status===200)return e.data}catch(e){c(e)}}async create(t){let e=!1;try{const s=await a.post(`${this.resource}`,t);(s.status===200||s.status===201)&&(e=!0)}catch(s){c(s)}return e}async update(t,e){let s=!1;try{const u=await a.put(`${this.resource}/${t}`,e);(u.status===200||u.status===201)&&(s=!0)}catch(u){c(u)}return s}async delete(t){let e=!1;try{const s=await a.delete(`${this.resource}/${t}`);(s.status===200||s.status===201)&&(e=!0)}catch(s){c(s)}return e}}export{h as B};
