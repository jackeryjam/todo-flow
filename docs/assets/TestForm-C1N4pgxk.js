import{d as i,u as v,r as f,l as b,h as s,f as o,g as V,b as r,e as n,o as k,i as x,_ as C}from"./index-BF2ygMmN.js";import{s as h}from"./function-call-Cp8VFPqO.js";const w={class:"test-form"},y={class:"nav-container"},T={class:"form-container"},g={class:"submit-btn"},B=i({__name:"TestForm",setup(N){const m=v(),t=f({name:"",phone:"",remark:""}),u=()=>{h("提交成功")};return(U,e)=>{const d=n("van-nav-bar"),l=n("van-field"),p=n("van-cell-group"),_=n("van-button"),c=n("van-form");return k(),b("div",w,[s("div",y,[o(d,{title:"测试表单","left-arrow":"",onClickLeft:e[0]||(e[0]=a=>V(m).back())})]),s("div",T,[o(c,null,{default:r(()=>[o(p,{inset:""},{default:r(()=>[o(l,{modelValue:t.value.name,"onUpdate:modelValue":e[1]||(e[1]=a=>t.value.name=a),label:"姓名",placeholder:"请输入姓名"},null,8,["modelValue"]),o(l,{modelValue:t.value.phone,"onUpdate:modelValue":e[2]||(e[2]=a=>t.value.phone=a),type:"tel",label:"手机号",placeholder:"请输入手机号"},null,8,["modelValue"]),o(l,{modelValue:t.value.remark,"onUpdate:modelValue":e[3]||(e[3]=a=>t.value.remark=a),type:"textarea",label:"备注",placeholder:"请输入备注",rows:"3",autosize:""},null,8,["modelValue"])]),_:1}),s("div",g,[o(_,{round:"",block:"",type:"primary",onClick:u},{default:r(()=>e[4]||(e[4]=[x(" 提交 ")])),_:1})])]),_:1})])])}}}),E=C(B,[["__scopeId","data-v-7fd755a0"]]);export{E as default};
