import{o as i,c as s,w as n,a as c,b as e,u as o,e as r,d as m,v as d,f as p}from"./index-Bk7GY-tj.js";import{_ as u}from"./DocSection-D3vdzv11.js";const _=`<template>
  <SuiIcon name="users" disabled />
</template>`,I={__name:"DisabledDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Disabled",code:_},{description:n(()=>[c(" An icon can show that it is disabled ")]),example:n(()=>[e(o(r),{name:"users",disabled:""})]),_:1}))}},b=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,S={__name:"LoadingDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Loading",code:b},{description:n(()=>[c(" An icon can be used as a simple loader ")]),example:n(()=>[e(o(r),{name:"spinner",loading:""}),e(o(r),{name:"notched circle",loading:""}),e(o(r),{name:"asterisk",loading:""})]),_:1}))}},h=m("br",null,null,-1),g=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,v={__name:"FittedDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Fitted",code:g},{description:n(()=>[c(" An icon can be fitted, without any space to the left or right of it. ")]),example:n(()=>[m("div",null,[c(" This icon "),e(o(r),{name:"help",fitted:""}),c(" is fitted. "),h,c(" This icon "),e(o(r),{name:"help"}),c(" is not fitted. ")])]),_:1}))}},f=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,z={__name:"SizeDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Size",code:f},{description:n(()=>[c(" An icon can vary in size ")]),example:n(()=>[e(o(r),{name:"home",size:"mini"}),e(o(r),{name:"home",size:"tiny"}),e(o(r),{name:"home",size:"small"}),e(o(r),{name:"home"}),e(o(r),{name:"home",size:"large"}),e(o(r),{name:"home",size:"big"}),e(o(r),{name:"home",size:"huge"}),e(o(r),{name:"home",size:"massive"})]),_:1}))}},y=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,x={__name:"LinkDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Link",code:y},{description:n(()=>[c(" An icon can be formatted as a link ")]),example:n(()=>[e(o(r),{name:"close",link:""}),e(o(r),{name:"help",link:""})]),_:1}))}},$=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,k={__name:"FlippedDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Flipped",code:$},{description:n(()=>[c(" An icon can be flipped ")]),example:n(()=>[e(o(r),{name:"cloud",flipped:"horizontally"}),e(o(r),{name:"cloud",flipped:"vertically"})]),_:1}))}},C=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,D={__name:"RotatedDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Rotated",code:C},{description:n(()=>[c(" An icon can be rotated ")]),example:n(()=>[e(o(r),{name:"cloud",rotated:"clockwise"}),e(o(r),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},w=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,A={__name:"CircularDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Circular",code:w},{description:n(()=>[c(" An icon can be formatted to appear circular ")]),example:n(()=>[e(o(r),{name:"users",circular:""}),e(o(r),{name:"users",circular:"",color:"teal"}),e(o(r),{name:"users",circular:"",inverted:""}),e(o(r),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},G=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,V={__name:"CircularColoredDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Circular Colored",code:G},{description:n(()=>[c(" The circular color can appear in the same color as the icon itself ")]),example:n(()=>[e(o(r),{name:"users",circular:"",colored:"",color:"red"}),e(o(r),{name:"users",circular:"",colored:"",color:"green"}),e(o(r),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},B=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,T={__name:"BorderedDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Bordered",code:B},{description:n(()=>[c(" An icon can be formatted to appear bordered ")]),example:n(()=>[e(o(r),{name:"users",bordered:""}),e(o(r),{name:"users",bordered:"",color:"teal"}),e(o(r),{name:"users",bordered:"",inverted:"",color:"black"}),e(o(r),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},F=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,L={__name:"BorderedColoredDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Bordered Colored",code:F},{description:n(()=>[c(" The bordered color can appear in the same color as the icon itself ")]),example:n(()=>[e(o(r),{name:"users",bordered:"",colored:"",color:"red"}),e(o(r),{name:"users",bordered:"",colored:"",color:"green"}),e(o(r),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},N=`<template>
  <SuiIcon name="users" primary />
  <SuiIcon name="users" secondary />
  <SuiIcon name="users" color="red" />
  <SuiIcon name="users" color="orange" />
  <SuiIcon name="users" color="yellow" />
  <SuiIcon name="users" color="olive" />
  <SuiIcon name="users" color="green" />
  <SuiIcon name="users" color="teal" />
  <SuiIcon name="users" color="blue" />
  <SuiIcon name="users" color="violet" />
  <SuiIcon name="users" color="purple" />
  <SuiIcon name="users" color="pink" />
  <SuiIcon name="users" color="brown" />
  <SuiIcon name="users" color="grey" />
  <SuiIcon name="users" color="black" />
</template>`,R={__name:"ColoredDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Colored",code:N},{description:n(()=>[c(" An icon can be formatted with different colors ")]),example:n(()=>[e(o(r),{name:"users",primary:""}),e(o(r),{name:"users",secondary:""}),e(o(r),{name:"users",color:"red"}),e(o(r),{name:"users",color:"orange"}),e(o(r),{name:"users",color:"yellow"}),e(o(r),{name:"users",color:"olive"}),e(o(r),{name:"users",color:"green"}),e(o(r),{name:"users",color:"teal"}),e(o(r),{name:"users",color:"blue"}),e(o(r),{name:"users",color:"violet"}),e(o(r),{name:"users",color:"purple"}),e(o(r),{name:"users",color:"pink"}),e(o(r),{name:"users",color:"brown"}),e(o(r),{name:"users",color:"grey"}),e(o(r),{name:"users",color:"black"})]),_:1}))}},j=`<template>
  <SuiIcon name="users" inverted />
  <SuiIcon name="users" inverted primary />
  <SuiIcon name="users" inverted secondary />
  <SuiIcon name="users" inverted color="red" />
  <SuiIcon name="users" inverted color="orange" />
  <SuiIcon name="users" inverted color="yellow" />
  <SuiIcon name="users" inverted color="olive" />
  <SuiIcon name="users" inverted color="green" />
  <SuiIcon name="users" inverted color="teal" />
  <SuiIcon name="users" inverted color="blue" />
  <SuiIcon name="users" inverted color="violet" />
  <SuiIcon name="users" inverted color="purple" />
  <SuiIcon name="users" inverted color="pink" />
  <SuiIcon name="users" inverted color="brown" />
  <SuiIcon name="users" inverted color="grey" />
</template>`,q={__name:"InvertedDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Inverted",code:j},{description:n(()=>[c(" An icon can have its colors inverted for contrast ")]),example:n(()=>[e(o(r),{name:"users",inverted:""}),e(o(r),{name:"users",inverted:"",primary:""}),e(o(r),{name:"users",inverted:"",secondary:""}),e(o(r),{name:"users",inverted:"",color:"red"}),e(o(r),{name:"users",inverted:"",color:"orange"}),e(o(r),{name:"users",inverted:"",color:"yellow"}),e(o(r),{name:"users",inverted:"",color:"olive"}),e(o(r),{name:"users",inverted:"",color:"green"}),e(o(r),{name:"users",inverted:"",color:"teal"}),e(o(r),{name:"users",inverted:"",color:"blue"}),e(o(r),{name:"users",inverted:"",color:"violet"}),e(o(r),{name:"users",inverted:"",color:"purple"}),e(o(r),{name:"users",inverted:"",color:"pink"}),e(o(r),{name:"users",inverted:"",color:"brown"}),e(o(r),{name:"users",inverted:"",color:"grey"})]),_:1}))}},E=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,H={__name:"IconsDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Icons",code:E},{description:n(()=>[c(" Several icons can be used together as a group ")]),example:n(()=>[e(o(d),{size:"huge"},{default:n(()=>[e(o(r),{name:"circle outline",size:"big"}),e(o(r),{name:"user"})]),_:1}),e(o(d),{size:"huge"},{default:n(()=>[e(o(r),{name:"dont",size:"big",color:"red"}),e(o(r),{name:"user",color:"black"})]),_:1})]),_:1}))}},J=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="top left" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="top right" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="bottom left" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="bottom right" />
  </SuiIconGroup>
</template>`,K={__name:"CornerIconDoc",setup(t){return(a,l)=>(i(),s(u,{label:"Corner Icon",code:J},{description:n(()=>[c(" A group of icons can display a smaller corner icon ")]),example:n(()=>[e(o(d),{size:"huge"},{default:n(()=>[e(o(r),{name:"puzzle"}),e(o(r),{name:"add",corner:"top left"})]),_:1}),e(o(d),{size:"huge"},{default:n(()=>[e(o(r),{name:"puzzle"}),e(o(r),{name:"add",corner:"top right"})]),_:1}),e(o(d),{size:"huge"},{default:n(()=>[e(o(r),{name:"puzzle"}),e(o(r),{name:"add",corner:"bottom left"})]),_:1}),e(o(d),{size:"huge"},{default:n(()=>[e(o(r),{name:"puzzle"}),e(o(r),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},Q={__name:"Icon",setup(t){const a=[{id:"disabled",label:"Disabled",category:"States",component:I},{id:"loading",label:"Loading",category:"States",component:S},{id:"fitted",label:"Fitted",category:"Variations",component:v},{id:"size",label:"Size",category:"Variations",component:z},{id:"link",label:"Link",category:"Variations",component:x},{id:"flipped",label:"Flipped",category:"Variations",component:k},{id:"rotated",label:"Rotated",category:"Variations",component:D},{id:"circular",label:"Circular",category:"Variations",component:A},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:V},{id:"bordered",label:"Bordered",category:"Variations",component:T},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:L},{id:"colored",label:"Colored",category:"Variations",component:R},{id:"inverted",label:"Inverted",category:"Variations",component:q},{id:"icons",label:"Icons",category:"Groups",component:H},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:K}];return(l,M)=>(i(),s(p,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}};export{Q as default};
