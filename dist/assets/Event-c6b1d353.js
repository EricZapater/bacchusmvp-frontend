import{G as V,R as D,M as I,B as w,_ as M,r as g,o as R,c as S,a as i,b as s,w as r,F as k,d as p,t as v}from"./index-51c744d9.js";import{e as x}from"./eventstatus.service-dbd48096.js";import{i as q}from"./item.service-fc46f5f8.js";import{e as U}from"./employeecategory.service-6781a1ba.js";class P extends w{constructor(e){super(e)}getDetailedById(e){return this.apiClient.get(`${this.resource}/detail/${e}`)}addItemEvent(e){return this.apiClient.post(`${this.resource}/item`,e)}addEmployeeCategoryEvent(e){return this.apiClient.post(`${this.resource}/employeecategory`,e)}deleteItemEvent(e){return this.apiClient.delete(`${this.resource}/item/${e}`)}deleteEmployeeCategoryEvent(e){return this.apiClient.delete(`${this.resource}/employeecategory/${e}`)}economicCalculations(e){return this.apiClient.put(`${this.resource}/economics/${e}`)}}const d=new P(V(I.Data,D.Event)),A={name:"event-list",data(){return{events:[],currentEvent:{id:0,description:"",participants:0,eventdate:"2023-02-02",eventstatusid:0,estimatedcost:0,estimatedtime:0,realcost:0,realtime:0,grossprice:0,saleprice:0,discount:0,costparticipant:0,priceparticipant:0},eventStatus:[],currentEventStatus:null,display:!1,eventItems:[],currentEventItems:{id:0,eventid:0,itemid:0,itemCode:"",itemDescription:"",initialquantity:0,reloadquantity:0,wastequantity:0,rollbackquantity:0,costPrice:0,salePrice:0},margin:0,marginAlert:!1,newEventItem:{id:0,eventid:0,itemid:0,itemCode:"",itemDescription:"",initialquantity:0,reloadquantity:0,wastequantity:0,rollbackquantity:0,costPrice:0,salePrice:0},items:[],selectedItem:0,selectedItemQuantity:0,currentEventEmployeeCategories:[],eventSaved:!0,categories:[],selectedCategory:0,selectedEmployeeCategoryQuantity:0,selectedEmployeeCategoryTime:0,newEventEmployeeCategory:{id:0,eventid:0,employeecategoryid:0,employeecategorycode:"",employeecategorydescription:"",initialquantity:0,realquantity:0,initialtime:0,realtime:0,costPrice:0,salePrice:0}}},methods:{fetchData(){this.getEvent(),this.getEventStatus()},onRowSelect(o){console.log(o.data)},openDialog(o){o!==0?(this.getDetailed(o),this.getMargins(),this.display=!0):(this.resetData(),this.fetchData(),this.getMargins(),this.display=!0)},closeDialog(){this.fetchData(),this.display=!1},drop(o){this.$confirm.require({message:"Vols esborrar el registre seleccionat? "+this.currentEvent.description,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{d.delete(o).then(e=>{e.status===null&&this.$toast.add({severity:"error",summary:"Error Message",detail:"Error a l'esborrar el registre: ",life:3e3}),e.status===202&&(this.$toast.add({severity:"success",summary:"Succes Message",detail:"Registre esborrat",life:3e3}),this.fetchData())})},reject:()=>{},onHide:()=>{}})},formatCurrency(o){return o.toLocaleString("es-ES",{style:"currency",currency:"EUR"})},resetData(){this.currentEvent.id=0,this.currentEvent.eventstatusid=0,this.currentEvent.description="",this.currentEvent.eventdate="",this.currentEvent.estimatedcost=0,this.currentEvent.estimatedtime=0,this.currentEvent.realcost=0,this.currentEvent.realtime=0,this.currentEvent.saleprice=0,this.eventItems=[],this.currentEventEmployeeCategories=[]},getEventStatus(){x.getAll().then(o=>{this.eventStatus=o.data}).catch(o=>{console.log(o)})},getEvent(){d.getAll().then(o=>{this.events=o.data}).catch(o=>{console.log(o)})},getItems(){q.getAll().then(o=>{this.items=o.data}).catch(o=>{console.log(o)})},getEmployeeCategories(){U.getAll().then(o=>{this.categories=o.data}).catch(o=>{console.log(o)})},getMargins(){this.margin=100-this.currentEvent.realcost/this.currentEvent.saleprice*100,this.margin<30?this.marginAlert=!0:this.marginAlert=!1},setDiscount(){console.log(this.currentEvent.id),console.log(this.currentEvent),this.currentEvent.saleprice=this.currentEvent.grossprice*(1-this.currentEvent.discount/100),this.getMargins()},save(){this.currentEvent.id===0?d.create(this.currentEvent).then(o=>{o.status===null&&this.$toast.add({severity:"error",summary:"Error Message",detail:"Error al crear el registre: ",life:3e3}),o.status===201&&(this.$toast.add({severity:"success",summary:"Succes Message",detail:"Registre creat",life:3e3}),this.fetchData())}):(d.update(this.currentEvent).then(o=>{o.status===null&&this.$toast.add({severity:"error",summary:"Error Message",detail:"Error al crear el registre: ",life:3e3}),o.status===201&&(this.$toast.add({severity:"success",summary:"Succes Message",detail:"Registre actualitzat",life:3e3}),this.fetchData())}),console.log(this.currentEvent)),this.closeDialog()},getDetailed(o){d.getDetailedById(o).then(e=>{this.currentEvent=e.data.event,this.eventItems=e.data.item,this.currentEventEmployeeCategories=e.data.employeecategory,console.log(this.currentEventEmployeeCategories)}).catch(e=>{console.log(e)})},onItemRowSelect(o){this.currentEventItems=o.data},dropItem(o){this.$confirm.require({message:"Vols esborrar el registre seleccionat? "+this.currentEventItems.itemCode,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{d.deleteItemEvent(o).then(e=>{e.status===null&&this.$toast.add({severity:"error",summary:"Error Message",detail:"Error a l'esborrar el registre: ",life:3e3}),e.status===202&&d.economicCalculations(this.currentEvent.id).then(u=>{this.getDetailed(this.currentEvent.id),u.status===null&&this.$toast.add({severity:"error",summary:"Error Message",detail:"Error a l'afegir el registre: ",life:3e3}),u.status===201&&(this.$toast.add({severity:"success",summary:"Succes Message",detail:"Registre afegit",life:3e3}),this.getDetailed(this.currentEvent.id),this.getMargins())}).catch(u=>{console.log(u)})})},reject:()=>{},onHide:()=>{}})},addEventItem(){this.newEventItem.itemid=this.selectedItem,this.newEventItem.initialquantity=this.selectedItemQuantity,this.newEventItem.eventid=this.currentEvent.id,d.addItemEvent(this.newEventItem).then(o=>{d.economicCalculations(this.currentEvent.id).then(e=>{this.getDetailed(this.currentEvent.id),e.status===null&&this.$toast.add({severity:"error",summary:"Error Message",detail:"Error a l'afegir el registre: ",life:3e3}),e.status===201&&(this.$toast.add({severity:"success",summary:"Succes Message",detail:"Registre afegit",life:3e3}),this.getDetailed(this.currentEvent.id),this.getMargins())}).catch(e=>{console.log(e)})}).catch(o=>{console.log(o)})},addEventEmployeeCategory(){this.newEventEmployeeCategory.employeecategoryid=this.selectedCategory,this.newEventEmployeeCategory.initialquantity=this.selectedEmployeeCategoryQuantity,this.newEventEmployeeCategory.initialtime=this.selectedEmployeeCategoryTime,this.newEventEmployeeCategory.eventid=this.currentEvent.id,d.addEmployeeCategoryEvent(this.newEventEmployeeCategory).then(o=>{d.economicCalculations(this.currentEvent.id).then(e=>{this.getDetailed(this.currentEvent.id),e.status===null&&this.$toast.add({severity:"error",summary:"Error Message",detail:"Error a l'afegir el registre: ",life:3e3}),e.status===201&&(this.$toast.add({severity:"success",summary:"Succes Message",detail:"Registre afegit",life:3e3}),this.getDetailed(this.currentEvent.id),this.getMargins())}).catch(e=>{console.log(e)})}).catch(o=>{console.log(o)})},dropEmployeeCategory(o){this.$confirm.require({message:"Vols esborrar el registre seleccionat? "+this.newEventEmployeeCategory.employeecategorycode,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{d.deleteEmployeeCategoryEvent(o).then(e=>{e.status===null&&this.$toast.add({severity:"error",summary:"Error Message",detail:"Error a l'esborrar el registre: ",life:3e3}),e.status===202&&d.economicCalculations(this.currentEvent.id).then(u=>{this.getDetailed(this.currentEvent.id),u.status===null&&this.$toast.add({severity:"error",summary:"Error Message",detail:"Error a l'afegir el registre: ",life:3e3}),u.status===201&&(this.$toast.add({severity:"success",summary:"Succes Message",detail:"Registre afegit",life:3e3}),this.getDetailed(this.currentEvent.id),this.getMargins())}).catch(u=>{console.log(u)})})},reject:()=>{},onHide:()=>{}})},onEmployeeCategoryRowSelect(o){console.log(o.data)}},mounted(){this.fetchData(),this.getItems(),this.getEmployeeCategories(),this.getMargins()}},T={class:"grid p-fluid"},F=i("div",{class:"col-12 md:col-11"},null,-1),Q={class:"col-12 md:col-1"},B={class:"row"},L={class:"grid p-fluid"},G={class:"col-12 md:col-8"},N={class:"p-inputgroup"},H=i("span",{class:"p-inputgroup-addon"}," Descripció: ",-1),j={class:"col-12 md:col-4"},K={class:"p-inputgroup"},z=i("span",{class:"p-inputgroup-addon"}," Estat: ",-1),J={class:"col-12 md:col-3"},O={class:"p-inputgroup"},W=i("span",{class:"p-inputgroup-addon"}," Data: ",-1),X={class:"col-12 md:col-3"},Y={class:"p-inputgroup"},Z=i("span",{class:"p-inputgroup-addon"}," Descompte: ",-1),$=i("i",{class:"pi pi-calculator"},null,-1),ee=[$],te={class:"col-12 md:col-3"},ie={class:"p-inputgroup"},se=i("span",{class:"p-inputgroup-addon"}," Import: ",-1),oe=i("div",{class:"col-12 md:col-3"},null,-1),le=i("br",null,null,-1),ne={class:"col-12 md:col-3"},re={class:"p-inputgroup"},ae=i("span",{class:"p-inputgroup-addon"}," Persones: ",-1),de={class:"col-12 md:col-3"},ce={class:"p-inputgroup"},ue=i("span",{class:"p-inputgroup-addon"}," Cost persona: ",-1),pe={class:"col-12 md:col-3"},me={class:"p-inputgroup"},ge=i("span",{class:"p-inputgroup-addon"}," Import persona: ",-1),ve=i("div",{class:"col-12 md:col-3"},null,-1),he=i("br",null,null,-1),ye={class:"col-12 md:col-4"},Ee={class:"p-inputgroup"},_e=i("span",{class:"p-inputgroup-addon"}," Cost: ",-1),fe={class:"col-12 md:col-4"},Ce={class:"p-inputgroup"},be=i("span",{class:"p-inputgroup-addon"}," Preu: ",-1),Ve={class:"col-12 md:col-4"},De={class:"p-inputgroup"},Ie=i("span",{class:"p-inputgroup-addon"}," Marge: ",-1),we=["visible"],Me=i("i",{class:"pi pi-exclamation-triangle"},null,-1),Re=[Me],Se=i("div",{class:"col-12 md:col-8"},null,-1),ke={class:"col-12 md:col-2"},xe={class:"col-12 md:col-2"},qe={class:"grid p-fluid"},Ue={class:"col-12 md:col-8"},Pe={class:"p-inputgroup"},Ae=i("span",{class:"p-inputgroup-addon"}," Items: ",-1),Te={class:"col-12 md:col-2"},Fe={class:"p-inputgroup"},Qe=i("span",{class:"p-inputgroup-addon"}," Quantitat: ",-1),Be=i("div",{class:"col-12 md:col-1"},null,-1),Le={class:"col-12 md:col-1"},Ge={class:"grid p-fluid"},Ne={class:"col-12 md:col-6"},He={class:"p-inputgroup"},je=i("span",{class:"p-inputgroup-addon"}," Categories: ",-1),Ke={class:"col-12 md:col-2"},ze={class:"p-inputgroup"},Je=i("span",{class:"p-inputgroup-addon"}," Quantitat: ",-1),Oe={class:"col-12 md:col-2"},We={class:"p-inputgroup"},Xe=i("span",{class:"p-inputgroup-addon"}," Temps: ",-1),Ye=i("div",{class:"col-12 md:col-1"},null,-1),Ze={class:"col-12 md:col-1"};function $e(o,e,u,et,l,a){const m=g("Button"),n=g("Column"),h=g("DataTable"),f=g("InputText"),y=g("Dropdown"),c=g("InputNumber"),E=g("TabPanel"),C=g("TabView"),b=g("Dialog");return R(),S(k,null,[i("div",T,[F,i("div",Q,[s(m,{label:"Afegir",icon:"pi pi-add",class:"p-button-success",onClick:e[0]||(e[0]=t=>a.openDialog(0))})])]),i("div",B,[s(h,{value:l.events,selection:l.currentEvent,"onUpdate:selection":e[1]||(e[1]=t=>l.currentEvent=t),datakey:"id",stripedRows:"",responsiveLayout:"scroll",paginator:!0,showGridlines:"",rows:10,onRowClick:a.onRowSelect},{empty:r(()=>[p(" No hi ha events. ")]),loading:r(()=>[p(" Carregant events, si us plau espereu. ")]),default:r(()=>[s(n,{field:"description",header:"Descripció",sortable:!0}),s(n,{field:"eventdate",header:"Data",sortable:!0}),s(n,{field:"saleprice",header:"Preu de venta"},{body:r(t=>[p(v(a.formatCurrency(t.data.saleprice)),1)]),_:1}),s(n,{field:"id",header:"",style:{"text-align":"right"}},{body:r(t=>[s(m,{label:"",icon:"pi pi-pencil",onClick:_=>a.openDialog(t.data.id),"aria-label":"Modificar dades generals"},null,8,["onClick"]),p("    "),s(m,{label:"",icon:"pi pi-trash",onClick:_=>a.drop(t.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection","onRowClick"]),s(b,{header:"Detall de l'event",breakpoints:{"960px":"95vw","640px":"100vw"},style:{width:"95vw"},visible:l.display,"onUpdate:visible":e[27]||(e[27]=t=>l.display=t)},{default:r(()=>[s(C,{lazy:""},{default:r(()=>[s(E,{header:"Generals"},{default:r(()=>[i("div",null,[i("div",L,[i("div",G,[i("div",N,[H,s(f,{placeholder:"Codi",modelValue:l.currentEvent.description,"onUpdate:modelValue":e[2]||(e[2]=t=>l.currentEvent.description=t)},null,8,["modelValue"])])]),i("div",j,[i("div",K,[z,s(y,{modelValue:l.currentEvent.eventstatusid,"onUpdate:modelValue":e[3]||(e[3]=t=>l.currentEvent.eventstatusid=t),options:l.eventStatus,optionLabel:"description",optionValue:"id",dataKey:"id"},null,8,["modelValue","options"])])]),i("div",J,[i("div",O,[W,s(f,{modelValue:l.currentEvent.eventdate,"onUpdate:modelValue":e[4]||(e[4]=t=>l.currentEvent.eventdate=t)},null,8,["modelValue"])])]),i("div",X,[i("div",Y,[Z,s(c,{modelValue:l.currentEvent.discount,"onUpdate:modelValue":e[5]||(e[5]=t=>l.currentEvent.discount=t),placeholder:"Descompte:",suffix:" %",minFractionDigits:2,maxFractionDigits:2},null,8,["modelValue"]),i("span",{class:"p-inputgroup-addon",onClick:e[6]||(e[6]=t=>a.setDiscount())},ee)])]),i("div",te,[i("div",ie,[se,s(c,{modelValue:l.currentEvent.grossprice,"onUpdate:modelValue":e[7]||(e[7]=t=>l.currentEvent.grossprice=t),placeholder:"Import brut:",mode:"currency",currency:"EUR",disabled:!0},null,8,["modelValue"])])]),oe,le,i("div",ne,[i("div",re,[ae,s(c,{modelValue:l.currentEvent.participants,"onUpdate:modelValue":e[8]||(e[8]=t=>l.currentEvent.participants=t),placeholder:"Persones:"},null,8,["modelValue"])])]),i("div",de,[i("div",ce,[ue,s(c,{modelValue:l.currentEvent.costparticipant,"onUpdate:modelValue":e[9]||(e[9]=t=>l.currentEvent.costparticipant=t),placeholder:"Import brut:",mode:"currency",currency:"EUR",disabled:!0},null,8,["modelValue"])])]),i("div",pe,[i("div",me,[ge,s(c,{modelValue:l.currentEvent.priceparticipant,"onUpdate:modelValue":e[10]||(e[10]=t=>l.currentEvent.priceparticipant=t),placeholder:"Import brut:",mode:"currency",currency:"EUR",disabled:!0},null,8,["modelValue"])])]),ve,he,i("div",ye,[i("div",Ee,[_e,s(c,{modelValue:l.currentEvent.realcost,"onUpdate:modelValue":e[11]||(e[11]=t=>l.currentEvent.realcost=t),placeholder:"Cost real:",disabled:!0,mode:"currency",currency:"EUR"},null,8,["modelValue"])])]),i("div",fe,[i("div",Ce,[be,s(c,{modelValue:l.currentEvent.saleprice,"onUpdate:modelValue":e[12]||(e[12]=t=>l.currentEvent.saleprice=t),placeholder:"Preu de venta:",mode:"currency",onInput:e[13]||(e[13]=t=>a.getMargins()),onBlur:e[14]||(e[14]=t=>a.getMargins()),onFocus:e[15]||(e[15]=t=>a.getMargins()),currency:"EUR"},null,8,["modelValue"])])]),i("div",Ve,[i("div",De,[Ie,s(c,{"model-value":l.margin,placeholder:"Marge:",suffix:" %",minFractionDigits:2,maxFractionDigits:2,disabled:!0},null,8,["model-value"]),i("span",{class:"p-inputgroup-addon",visible:l.marginAlert},Re,8,we)])]),Se,i("div",ke,[s(m,{label:"Acceptar",onClick:e[16]||(e[16]=t=>a.save())})]),i("div",xe,[s(m,{label:"Cancelar",onClick:e[17]||(e[17]=t=>a.closeDialog())})])])])]),_:1}),s(E,{header:"Articles",disabled:l.currentEvent.id===0},{default:r(()=>[i("div",null,[i("div",qe,[i("div",Ue,[i("div",Pe,[Ae,s(y,{options:l.items,modelValue:l.selectedItem,"onUpdate:modelValue":e[18]||(e[18]=t=>l.selectedItem=t),optionLabel:"description",optionValue:"id",dataKey:"id",filter:!0},null,8,["options","modelValue"])])]),i("div",Te,[i("div",Fe,[Qe,s(c,{placeholder:"Quantitat",modelValue:l.selectedItemQuantity,"onUpdate:modelValue":e[19]||(e[19]=t=>l.selectedItemQuantity=t)},null,8,["modelValue"])])]),Be,i("div",Le,[s(m,{label:"Afegir",icon:"pi pi-add",class:"p-button-success",onClick:e[20]||(e[20]=t=>a.addEventItem())})])])]),s(h,{value:l.eventItems,selection:l.currentEventItems,"onUpdate:selection":e[21]||(e[21]=t=>l.currentEventItems=t),datakey:"id",stripedRows:"",responsiveLayout:"scroll",paginator:!0,showGridlines:"",rows:6,filterDisplay:"menu",globalFilterFields:["itemDescription"],onRowClick:a.onItemRowSelect},{default:r(()=>[s(n,{field:"itemCode",header:"Codi",sortable:!0}),s(n,{field:"itemDescription",header:"Descripció",sortable:!0}),s(n,{field:"initialquantity",header:"Quantitat",sortable:!0}),s(n,{field:"costPrice",header:"Preu de cost",sortable:!0}),s(n,{field:"salePrice",header:"Preu de venda",sortable:!0}),s(n,{field:"totalCost",header:"Cost linea"},{body:r(t=>[p(v(t.data.costPrice*t.data.initialquantity),1)]),_:1}),s(n,{field:"totalImport",header:"Import linea"},{body:r(t=>[p(v(t.data.salePrice*t.data.initialquantity),1)]),_:1}),s(n,{field:"margin",header:"Marge linea"},{body:r(t=>[p(v(100-t.data.costPrice*t.data.initialquantity/(t.data.salePrice*t.data.initialquantity)*100),1)]),_:1}),s(n,{field:"id",header:"",style:{"text-align":"right"}},{body:r(t=>[s(m,{label:"",icon:"pi pi-trash",onClick:_=>a.dropItem(t.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection","onRowClick"])]),_:1},8,["disabled"]),s(E,{header:"Persones",disabled:l.currentEvent.id===0},{default:r(()=>[i("div",null,[i("div",Ge,[i("div",Ne,[i("div",He,[je,s(y,{options:l.categories,modelValue:l.selectedCategory,"onUpdate:modelValue":e[22]||(e[22]=t=>l.selectedCategory=t),optionLabel:"description",optionValue:"id",dataKey:"id",filter:!0},null,8,["options","modelValue"])])]),i("div",Ke,[i("div",ze,[Je,s(c,{placeholder:"Quantitat",modelValue:l.selectedEmployeeCategoryQuantity,"onUpdate:modelValue":e[23]||(e[23]=t=>l.selectedEmployeeCategoryQuantity=t)},null,8,["modelValue"])])]),i("div",Oe,[i("div",We,[Xe,s(c,{placeholder:"Temps",modelValue:l.selectedEmployeeCategoryTime,"onUpdate:modelValue":e[24]||(e[24]=t=>l.selectedEmployeeCategoryTime=t)},null,8,["modelValue"])])]),Ye,i("div",Ze,[s(m,{label:"Afegir",icon:"pi pi-add",class:"p-button-success",onClick:e[25]||(e[25]=t=>a.addEventEmployeeCategory())})])])]),s(h,{value:l.currentEventEmployeeCategories,selection:l.newEventEmployeeCategory,"onUpdate:selection":e[26]||(e[26]=t=>l.newEventEmployeeCategory=t),datakey:"id",stripedRows:"",responsiveLayout:"scroll",paginator:!0,showGridlines:"",rows:6,onRowClick:a.onEmployeeCategoryRowSelect},{default:r(()=>[s(n,{field:"employeecategorydescription",header:"Descripció",sortable:!0}),s(n,{field:"initialquantity",header:"Persones"}),s(n,{field:"initialtime",header:"Hores"}),s(n,{field:"costPrice",header:"P.C. hora/persona"}),s(n,{field:"salePrice",header:"P.V. hora/persona"}),s(n,{field:"totalCost",header:"Cost linea"},{body:r(t=>[p(v(t.data.costPrice*t.data.initialquantity*t.data.initialtime),1)]),_:1}),s(n,{field:"totalImport",header:"Import linea"},{body:r(t=>[p(v(t.data.salePrice*t.data.initialquantity*t.data.initialtime),1)]),_:1}),s(n,{field:"margin",header:"Marge linea"},{body:r(t=>[p(v(100-t.data.costPrice*t.data.initialquantity*t.data.initialtime/(t.data.salePrice*t.data.initialquantity*t.data.initialtime)*100),1)]),_:1}),s(n,{field:"id",header:"",style:{"text-align":"right"}},{body:r(t=>[s(m,{label:"",icon:"pi pi-trash",onClick:_=>a.dropEmployeeCategory(t.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection","onRowClick"])]),_:1},8,["disabled"])]),_:1})]),_:1},8,["visible"])])],64)}const lt=M(A,[["render",$e]]);export{lt as default};
