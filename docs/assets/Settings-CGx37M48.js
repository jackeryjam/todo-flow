import{d as L,u as V,a as B,r as _,w as N,c as P,b as l,P as T,e as s,o as D,f as n,g as u,h as o,t as I,i as $,s as f,j as R,_ as U}from"./main-D8H58RY6.js";const j={class:"settings-content"},K={class:"version-info"},q={class:"limit-setting"},z={class:"setting-header"},A={class:"setting-content"},E={class:"setting-footer"},F=L({__name:"Settings",setup(G){const v=V(),{itemsPerPage:r}=B(),g="35cc3ec",i=_(!1),c=_(String(r.value));N(i,e=>{e&&(c.value=String(r.value))});const w=e=>{if(e==="")return"";const t=parseInt(e);return isNaN(t)?"":t<1?"1":t>10?"10":String(t)},m=()=>{i.value=!1},h=()=>{const e=parseInt(c.value||"1");e>=1&&e<=10?(r.value=e,m(),f("设置已保存")):f("请输入1-10之间的数字")},k=()=>{R({title:"更新提示",message:"确定要清除缓存并刷新应用吗？",confirmButtonText:"确定",cancelButtonText:"取消"}).then(async e=>{if(e==="confirm")try{if("caches"in window){const t=await caches.keys();await Promise.all(t.map(p=>caches.delete(p)))}window.location.reload()}catch(t){console.error("清除缓存失败:",t)}})};return(e,t)=>{const p=s("van-nav-bar"),d=s("van-cell"),b=s("van-cell-group"),S=s("van-icon"),x=s("van-field"),y=s("van-button"),C=s("van-popup");return D(),P(T,null,{nav:l(()=>[n(p,{title:"设置","left-arrow":"",onClickLeft:t[0]||(t[0]=a=>u(v).back())})]),default:l(()=>[o("div",j,[n(b,null,{default:l(()=>[n(d,{title:"仓库设置","is-link":"",onClick:t[1]||(t[1]=a=>u(v).push({name:"repoSettings"}))}),n(d,{title:"每页显示条数",value:u(r)+"条","is-link":"",onClick:t[2]||(t[2]=a=>i.value=!0)},null,8,["value"])]),_:1}),o("div",K,[o("span",{class:"version-text",onClick:k},"版本号："+I(u(g)),1)])]),n(C,{show:i.value,"onUpdate:show":t[4]||(t[4]=a=>i.value=a),position:"bottom",round:"",class:"limit-popup","safe-area-inset-bottom":""},{default:l(()=>[o("div",q,[o("div",z,[t[5]||(t[5]=o("span",{class:"title"},"每页显示条数",-1)),n(S,{name:"cross",onClick:m})]),o("div",A,[n(x,{modelValue:c.value,"onUpdate:modelValue":t[3]||(t[3]=a=>c.value=a),type:"number",placeholder:"请输入数量","input-align":"center",formatter:w,class:"limit-input",maxlength:"2"},null,8,["modelValue"])]),o("div",E,[n(y,{block:"",type:"primary",onClick:h},{default:l(()=>t[6]||(t[6]=[$(" 确定 ")])),_:1})])])]),_:1},8,["show"])]),_:1})}}}),J=U(F,[["__scopeId","data-v-12b4e582"]]);export{J as default};