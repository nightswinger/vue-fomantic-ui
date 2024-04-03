import{o as s,c as l,w as i,a as t,b as e,u as a,H as n,h as d,D as u,A as _,f as p}from"./index-BtqR3fgc.js";import{_ as r}from"./DocSection-Bplbrfto.js";const g=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,b={__name:"DisabledDoc",setup(m){return(o,c)=>(s(),l(r,{label:"Disabled",code:g},{description:i(()=>[t(" An emoji can show that it is disabled ")]),example:i(()=>[e(a(n),{name:"anguished",disabled:""})]),_:1}))}},x=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,z={__name:"LoadingDoc",setup(m){return(o,c)=>(s(),l(r,{label:"Loading",code:x},{description:i(()=>[t(" An emoji can be used as a simple loader ")]),example:i(()=>[e(a(n),{name:"angel",loading:""}),e(a(n),{name:"blush",loading:""}),e(a(n),{name:"grin",loading:""})]),_:1}))}},h=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,S={__name:"SizeDoc",setup(m){return(o,c)=>(s(),l(r,{label:"Size",code:h},{description:i(()=>[t(" An emoji can vary in size ")]),example:i(()=>[e(a(n),{name:"relaxed",size:"small"}),e(a(n),{name:"relaxed",size:"medium"}),e(a(n),{name:"relaxed",size:"large"}),e(a(n),{name:"relaxed",size:"big"})]),_:1}))}},j=`<template>
  <SuiHeader size="small">
    Within a Header
    <SuiEmoji name="relaxed" />
  </SuiHeader>
  <SuiButton as="div" size="large">
    Within a Button
    <SuiEmoji name="relaxed" />
  </SuiButton>
  <SuiLabel size="massive">
    Within a Label
    <SuiEmoji name="relaxed" />
  </SuiLabel>
</template>`,f={__name:"AutosizingDoc",setup(m){return(o,c)=>(s(),l(r,{label:"Autosizing",code:j},{description:i(()=>[t(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[e(a(d),{size:"small"},{default:i(()=>[t(" Within a Header "),e(a(n),{name:"relaxed"})]),_:1}),e(a(u),{as:"div",size:"large"},{default:i(()=>[t(" Within a Button "),e(a(n),{name:"relaxed"})]),_:1}),e(a(_),{size:"massive"},{default:i(()=>[t(" Within a Label "),e(a(n),{name:"relaxed"})]),_:1})]),_:1}))}},E=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,D={__name:"LinkDoc",setup(m){return(o,c)=>(s(),l(r,{label:"Link",code:E},{description:i(()=>[t(" An emoji can be formatted as a link ")]),example:i(()=>[e(a(n),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},k={__name:"Emoji",setup(m){const o=[{id:"disabled",label:"Disabled",category:"States",component:b},{id:"loading",label:"Loading",category:"States",component:z},{id:"size",label:"Size",category:"Variations",component:S},{id:"autosizing",label:"Autosizing",category:"Variations",component:f},{id:"link",label:"Link",category:"Variations",component:D}];return(c,A)=>(s(),l(p,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":o}))}};export{k as default};
