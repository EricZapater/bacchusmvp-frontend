import{B as s}from"./base.service-5f37388d.js";class p extends s{}class o extends s{async getConsolidated(t,i){const a=`${this.resource}/Consolidated?startTime=${t}&endTime=${i}`,e=await this.apiClient.get(a);if(e.status===200)return e.data}}const c={Expense:new o("Expense"),ExpenseType:new p("ExpenseType")};export{c as E};