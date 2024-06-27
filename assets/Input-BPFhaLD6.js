import{o,c as r,w as e,a as s,b as a,u as c,X as t,n as u,D as h}from"./index-DSC_QGPC.js";import{_ as p}from"./DocSection-Dy7AO88P.js";const _=`<template>
  <SuiInput placeholder="Search..." />
</template>`,m={__name:"InputDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Input",code:_},{description:e(()=>[s(" A standard input ")]),example:e(()=>[a(c(t),{placeholder:"Search..."})]),_:1}))}},S=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,b={__name:"FocusDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Focus",code:S},{description:e(()=>[s(" An input field can show a user is currently interacting with it ")]),example:e(()=>[a(c(t),{focus:"",placeholder:"Search..."})]),_:1}))}},f=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,g={__name:"LoadingDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Loading",code:f},{description:e(()=>[s(" An icon input field can show that it is currently loading data ")]),example:e(()=>[a(c(t),{loading:"",icon:"user",placeholder:"Search..."}),a(c(t),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},I=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,x={__name:"DisabledDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Disabled",code:I},{description:e(()=>[s(" An input field can show that it is disabled ")]),example:e(()=>[a(c(t),{disabled:"",placeholder:"Search..."})]),_:1}))}},$=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,y={__name:"ErrorDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Error",code:$},{description:e(()=>[s(" An input field can show the data contains errors ")]),example:e(()=>[a(c(t),{error:"",placeholder:"Search..."})]),_:1}))}},z=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,D={__name:"IconDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Icon",code:z},{description:e(()=>[s(" An input can be formatted with an icon ")]),example:e(()=>[a(c(t),{icon:"search",placeholder:"Search..."}),a(c(t),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},A=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,v={__name:"LabeledDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Labeled",code:A},{description:e(()=>[s(" An input can be formatted with a label ")]),example:e(()=>[a(c(t),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},w=`<template>
  <SuiInput action="Search" />
</template>`,V={__name:"ActionDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Action",code:w},{description:e(()=>[s(" An input can be formatted to alert the user to an action they may perform ")]),example:e(()=>[a(c(t),{action:"Search"})]),_:1}))}},k=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,F={__name:"TransparentDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Transparent",code:k},{description:e(()=>[s(" A transparent input has no background ")]),example:e(()=>[a(c(t),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},L=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,T={__name:"InvertedDoc",setup(i){return(n,l)=>{const d=u("SuiSegment");return o(),r(p,{label:"Inverted",code:L},{description:e(()=>[s(" An input can be formatted to appear on dark backgrounds ")]),example:e(()=>[a(d,{inverted:""},{default:e(()=>[a(c(t),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},P=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,C={__name:"FluidDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Fluid",code:P},{description:e(()=>[s(" An input can take the size of its container ")]),example:e(()=>[a(c(t),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},E=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,B={__name:"SizeDoc",setup(i){return(n,l)=>(o(),r(p,{label:"Size",code:E},{description:e(()=>[s(" An input can vary in size ")]),example:e(()=>[a(c(t),{icon:"search",placeholder:"Search mini...",size:"mini"}),a(c(t),{icon:"search",placeholder:"Search small...",size:"small"}),a(c(t),{icon:"search",placeholder:"Search large...",size:"large"}),a(c(t),{icon:"search",placeholder:"Search big...",size:"big"}),a(c(t),{icon:"search",placeholder:"Search huge...",size:"huge"}),a(c(t),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},j={__name:"Input",setup(i){const n=[{id:"input",label:"Input",category:"Types",component:m},{id:"focus",label:"Focus",category:"States",component:b},{id:"loading",label:"Loading",category:"States",component:g},{id:"disabled",label:"Disabled",category:"States",component:x},{id:"error",label:"Error",category:"States",component:y},{id:"icon",label:"Icon",category:"Variations",component:D},{id:"labeled",label:"Labeled",category:"Variations",component:v},{id:"action",label:"Action",category:"Variations",component:V},{id:"transparent",label:"Transparent",category:"Variations",component:F},{id:"inverted",label:"Inverted",category:"Variations",component:T},{id:"fluid",label:"Fluid",category:"Variations",component:C},{id:"size",label:"Size",category:"Variations",component:B}];return(l,d)=>(o(),r(h,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":n}))}};export{j as default};
