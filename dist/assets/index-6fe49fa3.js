import{B as e}from"./base.service-d0780977.js";class i extends e{}class c extends e{async getByWorkMasterId(t){const r=await this.apiClient.get(`${this.resource}?workMasterId=${t}`);if(r.status===200)return r.data}}class o extends e{async getByWorkMasterPhaseId(t){const r=await this.apiClient.get(`${this.resource}?workMasterPhaseId=${t}`);if(r.status===200)return r.data}}class l extends e{async getByWorkMasterPhaseId(t){const r=await this.apiClient.get(`${this.resource}?workMasterPhaseId=${t}`);if(r.status===200)return r.data}}class a extends e{}class h extends e{}class S extends e{}class w extends e{}class n extends e{}class k extends e{}class M extends e{}class W extends e{}class d extends e{}const v={Enterprise:new a("/Enterprise"),Areas:new a("/Area"),Site:new a("/Site"),WorkcenterType:new n("/WorkcenterType"),Workcenter:new n("/Workcenter"),WorkcenterCost:new k("/WorkcenterCost"),MachineStatus:new M("/MachineStatus"),OperatorType:new d("/OperatorType"),Operator:new W("/Operator"),WorkMaster:new i("/WorkMaster"),WorkMasterPhase:new c("/WorkMaster/Phase"),WorkMasterPhaseDetail:new o("/WorkMaster/Phase/Detail"),WorkMasterPhaseBillOfMaterials:new l("/WorkMaster/Phase/BillOfMaterials")};export{a as A,h as E,M,W as O,S,w as W,n as a,k as b,d as c,v as d};
