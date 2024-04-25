import{e as s,o as r,c as i,w as e,a,b as t,u as n,aV as p,aW as o,D as _}from"./index-mc-R_Yr0.js";import{_ as b}from"./DocSection-C9DVj5Jx.js";const T=`<template>
  <Tab>
    <TabPanel header="First">Content A</TabPanel>
    <TabPanel header="Second">Content B</TabPanel>
    <TabPanel header="Third">Content C</TabPanel>
  </Tab>
</template>`,h=s({__name:"TabDoc",setup(l){return(c,d)=>(r(),i(b,{label:"Tab",code:T},{description:e(()=>[a(" A basic tab ")]),example:e(()=>[t(n(p),null,{default:e(()=>[t(n(o),{header:"First"},{default:e(()=>[a("Content A")]),_:1}),t(n(o),{header:"Second"},{default:e(()=>[a("Content B")]),_:1}),t(n(o),{header:"Third"},{default:e(()=>[a("Content C")]),_:1})]),_:1})]),_:1}))}}),m=`<template>
  <Tab pointing>
    <TabPanel header="First">Content A</TabPanel>
    <TabPanel header="Second">Content B</TabPanel>
    <TabPanel header="Third">Content C</TabPanel>
  </Tab>
</template>`,u=s({__name:"PointingDoc",setup(l){return(c,d)=>(r(),i(b,{label:"Pointing",code:m},{description:e(()=>[a(" A tab can point to its active content ")]),example:e(()=>[t(n(p),{pointing:""},{default:e(()=>[t(n(o),{header:"First"},{default:e(()=>[a("Content A")]),_:1}),t(n(o),{header:"Second"},{default:e(()=>[a("Content B")]),_:1}),t(n(o),{header:"Third"},{default:e(()=>[a("Content C")]),_:1})]),_:1})]),_:1}))}}),f=`<template>
  <Tab secondary>
    <TabPanel header="First">Content A</TabPanel>
    <TabPanel header="Second">Content B</TabPanel>
    <TabPanel header="Third">Content C</TabPanel>
  </Tab>
</template>`,C=s({__name:"SecondaryDoc",setup(l){return(c,d)=>(r(),i(b,{label:"Secondary",code:f},{description:e(()=>[a(" A tab can ajust its appearance to de-emphasize its contents ")]),example:e(()=>[t(n(p),{secondary:""},{default:e(()=>[t(n(o),{header:"First"},{default:e(()=>[a("Content A")]),_:1}),t(n(o),{header:"Second"},{default:e(()=>[a("Content B")]),_:1}),t(n(o),{header:"Third"},{default:e(()=>[a("Content C")]),_:1})]),_:1})]),_:1}))}}),P=`<template>
  <Tab text>
    <TabPanel header="First">Content A</TabPanel>
    <TabPanel header="Second">Content B</TabPanel>
    <TabPanel header="Third">Content C</TabPanel>
  </Tab>
</template>`,x=s({__name:"TextDoc",setup(l){return(c,d)=>(r(),i(b,{label:"Text",code:P},{description:e(()=>[a(" A tab can be formatted for text content ")]),example:e(()=>[t(n(p),{text:""},{default:e(()=>[t(n(o),{header:"First"},{default:e(()=>[a("Content A")]),_:1}),t(n(o),{header:"Second"},{default:e(()=>[a("Content B")]),_:1}),t(n(o),{header:"Third"},{default:e(()=>[a("Content C")]),_:1})]),_:1})]),_:1}))}}),B={__name:"Tab",setup(l){const c=[{id:"tab",label:"Tab",category:"Types",component:h},{id:"pointing",label:"Pointing",category:"Types",component:u},{id:"secondary",label:"Secondary",category:"Types",component:C},{id:"text",label:"Text",category:"Types",component:x}],d={Tab:{props:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""},{name:"secondary",type:"boolean",default:!1,description:""},{name:"text",type:"boolean",default:!1,description:""}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]},TabPanel:{props:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}]}};return(y,g)=>(r(),i(_,{title:"Tab",description:"A tab is a hidden section of content activated by a menu","component-docs":c,"api-docs":d}))}};export{B as default};
