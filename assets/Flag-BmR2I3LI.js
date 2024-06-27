import{o,c as l,w as s,a as t,b as e,u as a,k as i,N as u,O as d,d as p,D as _}from"./index-DSC_QGPC.js";import{_ as r}from"./DocSection-Dy7AO88P.js";const z=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,g={__name:"SizeDoc",setup(m){return(n,c)=>(o(),l(r,{label:"Size",code:z},{description:s(()=>[t(" A flag can vary in size ")]),example:s(()=>[e(a(i),{name:"de",size:"small"}),e(a(i),{name:"fr",size:"medium"}),e(a(i),{name:"li",size:"large"}),e(a(i),{name:"jp",size:"big"}),e(a(i),{name:"gb",size:"huge"}),e(a(i),{name:"un",size:"massive"})]),_:1}))}},f=`<template>
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
</template>`,S={__name:"AutosizingDoc",setup(m){return(n,c)=>(o(),l(r,{label:"Autosizing",code:f},{description:s(()=>[t(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:s(()=>[e(a(u),{size:"small"},{default:s(()=>[t(" Within a Header "),e(a(i),{name:"us"})]),_:1}),e(a(d),{as:"div",size:"large"},{default:s(()=>[t(" Within a Button "),e(a(i),{name:"eu"})]),_:1}),e(a(p),{size:"massive"},{default:s(()=>[t(" Within a Label "),e(a(i),{name:"pirate"})]),_:1})]),_:1}))}},v={__name:"Flag",setup(m){const n=[{id:"size",label:"Size",category:"Types",component:g},{id:"autosizing",label:"Autosizing",category:"Types",component:S}];return(c,b)=>(o(),l(_,{title:"Flag",description:"A flag is used to represent a political state","component-docs":n}))}};export{v as default};
