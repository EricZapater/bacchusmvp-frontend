import{B as s}from"./base.service-f5b02259.js";let r=class extends s{async Create(e){const t=`${this.resource}`;return(await this.apiClient.post(t,e)).status===200}async GetBetweenDates(e,t){const n=`${this.resource}?startTime=${e}&endTime=${t}`,c=await this.apiClient.get(n);if(c.status===200)return c.data}};class a extends s{}class i extends s{}const p={Warehouse:new a("/Warehouse"),Stock:new i("/Stock"),StockMovementService:new r("/StockMovement")};export{p as S};
