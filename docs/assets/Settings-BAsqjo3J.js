import{d as L,u as V,a as y,r as d,w as N,c as P,b as l,P as B,e as s,o as I,f as n,g as c,h as o,t as $,i as D,_ as T}from"./main-BZluSE13.js";import{s as m}from"./function-call-JvCRpybb.js";const U={class:"settings-content"},R={class:"version-info"},j={class:"version-text"},q={class:"limit-setting"},z={class:"setting-header"},A={class:"setting-content"},E={class:"setting-footer"},F=L({__name:"Settings",setup(G){const p=V(),{itemsPerPage:r}=y(),f="4da6739",i=d(!1),u=d(String(r.value));N(i,e=>{e&&(u.value=String(r.value))});const g=e=>{if(e==="")return"";const t=parseInt(e);return isNaN(t)?"":t<1?"1":t>10?"10":String(t)},v=()=>{i.value=!1},k=()=>{const e=parseInt(u.value||"1");e>=1&&e<=10?(r.value=e,v(),m("设置已保存")):m("请输入1-10之间的数字")};return(e,t)=>{const S=s("van-nav-bar"),_=s("van-cell"),b=s("van-cell-group"),w=s("van-icon"),C=s("van-field"),x=s("van-button"),h=s("van-popup");return I(),P(B,null,{nav:l(()=>[n(S,{title:"设置","left-arrow":"",onClickLeft:t[0]||(t[0]=a=>c(p).back())})]),default:l(()=>[o("div",U,[n(b,null,{default:l(()=>[n(_,{title:"仓库设置","is-link":"",onClick:t[1]||(t[1]=a=>c(p).push({name:"repoSettings"}))}),n(_,{title:"每页显示条数",value:c(r)+"条","is-link":"",onClick:t[2]||(t[2]=a=>i.value=!0)},null,8,["value"])]),_:1}),o("div",R,[o("span",j,"版本号："+$(c(f)),1)])]),n(h,{show:i.value,"onUpdate:show":t[4]||(t[4]=a=>i.value=a),position:"bottom",round:"",class:"limit-popup","safe-area-inset-bottom":""},{default:l(()=>[o("div",q,[o("div",z,[t[5]||(t[5]=o("span",{class:"title"},"每页显示条数",-1)),n(w,{name:"cross",onClick:v})]),o("div",A,[n(C,{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=a=>u.value=a),type:"number",placeholder:"请输入数量","input-align":"center",formatter:g,class:"limit-input",maxlength:"2"},null,8,["modelValue"])]),o("div",E,[n(x,{block:"",type:"primary",onClick:k},{default:l(()=>t[6]||(t[6]=[D(" 确定 ")])),_:1})])])]),_:1},8,["show"])]),_:1})}}}),K=T(F,[["__scopeId","data-v-d9c829d2"]]);export{K as default};
