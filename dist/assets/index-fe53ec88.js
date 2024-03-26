import{t as r}from"./index-b40c6ded.js";import{B as o}from"./base.service-265c7e5a.js";import{C as c,a as p}from"./customers-bd42da68.js";class d extends o{async Create(e){const t=`${this.resource}`;return(await this.apiClient.post(t,e)).status===200}async GetBetweenDates(e,t){const s=`${this.resource}?startTime=${e}&endTime=${t}`,n=await r.get(s);if(n.status===200)return n.data}async GetBetweenDatesAndCustomer(e,t,s){const n=`${this.resource}?startTime=${e}&endTime=${t}&customerId=${s}`,a=await r.get(n);if(a.status===200)return a.data}async GetReportDataById(e){const t=`${this.resource}/Report/${e}`,s=await r.get(t);if(s.status===200)return s.data}async CreateDetail(e){const t=`${this.resource}/Detail`;return(await r.post(t,e)).status===200}async UpdateDetail(e){const t=`${this.resource}/Detail/${e.id}`;return(await r.put(t,e)).status===200}async DeleteDetail(e){const t=`${this.resource}/Detail/${e.id}`;return(await r.delete(t)).status===200}}class u extends o{async Create(e){const t=`${this.resource}`;return(await this.apiClient.post(t,e)).data}async GetBetweenDates(e,t){const s=`${this.resource}?startTime=${e}&endTime=${t}`,n=await r.get(s);if(n.status===200)return n.data}async GetBetweenDatesAndCustomer(e,t,s){const n=`${this.resource}?startTime=${e}&endTime=${t}&customerId=${s}`,a=await r.get(n);if(a.status===200)return a.data}async GetByInvoiceId(e){const t=`${this.resource}/Invoice/${e}`,s=await r.get(t);if(s.status===200)return s.data}async GetToInvoice(e){const t=`${this.resource}/ToInvoice?customerId=${e}`,s=await r.get(t);if(s.status===200)return s.data}async GetReportDataById(e){const t=`${this.resource}/Report/${e}`,s=await r.get(t);if(s.status===200)return s.data}async AddOrder(e,t){const s=`${this.resource}/${e}/AddOrder`;return(await r.post(s,t)).data}async DeleteOrder(e,t){const s=`${this.resource}/${e}/RemoveOrder`;return(await r.post(s,t)).data}}class $ extends o{async Create(e){const t=`${this.resource}`;return(await this.apiClient.post(t,e)).status===200}async GetBetweenDates(e,t){const s=`${this.resource}?startTime=${e}&endTime=${t}`,n=await this.apiClient.get(s);if(n.status===200)return n.data}async GetBetweenDatesAndStatus(e,t,s){const n=`${this.resource}?startTime=${e}&endTime=${t}&statusId=${s}`,a=await this.apiClient.get(n);if(a.status===200)return a.data}async GetBetweenDatesAndCustomer(e,t,s){const n=`${this.resource}?startTime=${e}&endTime=${t}&customerId=${s}`,a=await this.apiClient.get(n);if(a.status===200)return a.data}async GetReportDataById(e){const t=`${this.resource}/Report/${e}`,s=await this.apiClient.get(t);if(s.status===200)return s.data}async Update(e){const t=`${this.resource}/${e.id}`;return(await this.apiClient.put(t,e)).status===200}async Delete(e){const t=`${this.resource}/${e.id}`;return(await this.apiClient.delete(t)).status===200}async AddDeliveryNote(e,t){const s=`${this.resource}/${e}/AddDeliveryNote`;return(await this.apiClient.post(s,t)).data}async RemoveDeliveryNote(e,t){const s=`${this.resource}/${e}/RemoveDeliveryNote`;return(await this.apiClient.post(s,t)).data}async CreateDetail(e){const t=`${this.resource}/Detail`;return(await this.apiClient.post(t,e)).data}async UpdateDetail(e){const t=`${this.resource}/Detail/${e.id}`;return(await this.apiClient.put(t,e)).status===200}async DeleteDetail(e){const t=`${this.resource}/Detail/${e.id}`;return(await this.apiClient.delete(t)).status===200}}class l extends o{async Create(e){const t=`${this.resource}`;return(await this.apiClient.post(t,e)).status===200}async CreateFromBudget(e){const t=`${this.resource}`;return(await this.apiClient.post(`${t}/FromBudget`,e)).data}async GetFromBudgetId(e){const t=`${this.resource}/budget/${e}`,s=await r.get(t);if(s.status===200)return s.data}async GetBetweenDates(e,t){const s=`${this.resource}?startTime=${e}&endTime=${t}`,n=await r.get(s);if(n.status===200)return n.data}async GetBetweenDatesAndCustomer(e,t,s){const n=`${this.resource}?startTime=${e}&endTime=${t}&customerId=${s}`,a=await r.get(n);if(a.status===200)return a.data}async GetReportDataById(e){const t=`${this.resource}/Report/${e}`,s=await r.get(t);if(s.status===200)return s.data}async GetByDeliveryNote(e){const t=`${this.resource}/DeliveryNote/${e}`,s=await r.get(t);if(s.status===200)return s.data}async GetToDeliver(e){const t=`${this.resource}/ToDeliver?customerId=${e}`,s=await r.get(t);if(s.status===200)return s.data}async CreateDetail(e){const t=`${this.resource}/Detail`;return(await r.post(t,e)).status===200}async UpdateDetail(e){const t=`${this.resource}/Detail/${e.id}`;return(await r.put(t,e)).status===200}async DeleteDetail(e){const t=`${this.resource}/Detail/${e.id}`;return(await r.delete(t)).status===200}}const D={CustomerType:new c("/CustomerType"),Customer:new p("/Customer"),Budget:new d("/Budget"),SalesOrder:new l("/SalesOrder"),DeliveryNote:new u("/DeliveryNote"),SalesInvoice:new $("/SalesInvoice")};export{D as S};
