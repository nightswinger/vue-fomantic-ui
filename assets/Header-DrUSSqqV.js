import{o as d,c as n,w as e,a,b as t,u as r,R as o,K as _,h as m,i as h,d as p,z as H,L as u,D as S}from"./index-B2sz39O7.js";import{_ as s}from"./DocSection-LsN_yblw.js";const f=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,g={__name:"PageHeadersDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Page Headers",code:f},{description:e(()=>[a(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:e(()=>[t(r(o),{as:"h1"},{default:e(()=>[a("First Header")]),_:1}),t(r(o),{as:"h2"},{default:e(()=>[a("Second Header")]),_:1}),t(r(o),{as:"h3"},{default:e(()=>[a("Third Header")]),_:1}),t(r(o),{as:"h4"},{default:e(()=>[a("Fourth Header")]),_:1}),t(r(o),{as:"h5"},{default:e(()=>[a("Fifth Header")]),_:1})]),_:1}))}},b=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,v={__name:"ContentHeadersDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Content Headers",code:b},{description:e(()=>[a(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:e(()=>[t(r(o),{size:"huge"},{default:e(()=>[a("Huge Header")]),_:1}),t(r(o),{size:"large"},{default:e(()=>[a("Large Header")]),_:1}),t(r(o),{size:"medium"},{default:e(()=>[a("Medium Header")]),_:1}),t(r(o),{size:"small"},{default:e(()=>[a("Small Header")]),_:1}),t(r(o),{size:"tiny"},{default:e(()=>[a("Tiny Header")]),_:1})]),_:1}))}},x=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,y={__name:"IconHeadersDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Icon Headers",code:x},{description:e(()=>[a(" A header can be formatted to emphasize an icon ")]),example:e(()=>[t(r(o),{icon:""},{default:e(()=>[t(r(_),{name:"settings"}),t(r(m),null,{default:e(()=>[a(" Account Settings ")]),_:1}),t(r(h),null,{default:e(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},A=p("span",null,"$10.99",-1),$=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,D={__name:"SubHeadersDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Sub Headers",code:$},{description:e(()=>[a(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:e(()=>[t(r(o),{sub:""},{default:e(()=>[a("Price")]),_:1}),A]),_:1}))}},w=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,k={__name:"ImageDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Image",code:w},{description:e(()=>[a(" A header may contain an image ")]),example:e(()=>[t(r(o),{as:"h2"},{default:e(()=>[t(r(H),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),a(" Steve ")]),_:1})]),_:1}))}},B=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,C={__name:"IconDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Icon",code:B},{description:e(()=>[a(" A header may contain an Icon ")]),example:e(()=>[t(r(o),{as:"h2"},{default:e(()=>[t(r(_),{name:"plug"}),t(r(m),null,{default:e(()=>[a(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},T=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,z={__name:"SubheaderDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Subheader",code:T},{description:e(()=>[a(" Headers may contain subheaders ")]),example:e(()=>[t(r(o),{as:"h2"},{default:e(()=>[a(" Account Settings "),t(r(h),null,{default:e(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},F=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,I={__name:"DisabledDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Disabled",code:F},{description:e(()=>[a(" A header can show that it is inactive ")]),example:e(()=>[t(r(o),{disabled:""},{default:e(()=>[a(" Disabled Header ")]),_:1})]),_:1}))}},P=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,G={__name:"DividingDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Dividing",code:P},{description:e(()=>[a(" A header can be formatted to divide itself from the content below it ")]),example:e(()=>[t(r(o),{as:"h3",dividing:""},{default:e(()=>[a(" Dividing Header ")]),_:1})]),_:1}))}},V=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,q={__name:"BlockDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Block",code:V},{description:e(()=>[a(" A header can be formatted to appear inside a content block ")]),example:e(()=>[t(r(o),{as:"h3",block:""},{default:e(()=>[a(" Block Header ")]),_:1})]),_:1}))}},L=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,O={__name:"AttachedDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Attached",code:L},{description:e(()=>[a(" A header can be attached to other content, like a segment ")]),example:e(()=>[t(r(o),{as:"h2",attached:"top"},{default:e(()=>[a(" Attached Header ")]),_:1}),t(r(u),{attached:""},{default:e(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},R=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,M={__name:"FloatingDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Floating",code:R},{description:e(()=>[a(" A header can sit to the left or right of other content ")]),example:e(()=>[t(r(u),{clearing:""},{default:e(()=>[t(r(o),{as:"h3",floated:"right"},{default:e(()=>[a(" Go Forward ")]),_:1}),t(r(o),{as:"h3",floated:"left"},{default:e(()=>[a(" Go Back ")]),_:1})]),_:1})]),_:1}))}},j=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,U={__name:"TextAlignmentDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Text Alignment",code:j},{description:e(()=>[a(" A header can have its text aligned to a side ")]),example:e(()=>[t(r(u),null,{default:e(()=>[t(r(o),{as:"h3",textAlign:"right"},{default:e(()=>[a("Float Right")]),_:1}),t(r(o),{as:"h3",textAlign:"left"},{default:e(()=>[a("Float Left")]),_:1}),t(r(o),{as:"h3",textAlign:"justified"},{default:e(()=>[a(" This text takes up the full width of the container ")]),_:1}),t(r(o),{as:"h3",textAlign:"center"},{default:e(()=>[a("Centered")]),_:1})]),_:1})]),_:1}))}},Y=`<template>
  <SuiHeader as="h4" primary>Primary</SuiHeader>
  <SuiHeader as="h4" secondary>Secondary</SuiHeader>
  <SuiHeader as="h4" color="red">Red</SuiHeader>
  <SuiHeader as="h4" color="orange">Orange</SuiHeader>
  <SuiHeader as="h4" color="yellow">Yellow</SuiHeader>
  <SuiHeader as="h4" color="olive">Olive</SuiHeader>
  <SuiHeader as="h4" color="green">Green</SuiHeader>
  <SuiHeader as="h4" color="teal">Teal</SuiHeader>
  <SuiHeader as="h4" color="blue">Blue</SuiHeader>
  <SuiHeader as="h4" color="purple">Purple</SuiHeader>
  <SuiHeader as="h4" color="violet">Violet</SuiHeader>
  <SuiHeader as="h4" color="pink">Pink</SuiHeader>
  <SuiHeader as="h4" color="brown">Brown</SuiHeader>
  <SuiHeader as="h4" color="grey">Grey</SuiHeader>
</template>`,N={__name:"ColoredDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Colored",code:Y},{description:e(()=>[a(" A header can be formatted with different colors ")]),example:e(()=>[t(r(o),{as:"h4",primary:""},{default:e(()=>[a("Primary")]),_:1}),t(r(o),{as:"h4",secondary:""},{default:e(()=>[a("Secondary")]),_:1}),t(r(o),{as:"h4",color:"red"},{default:e(()=>[a("Red")]),_:1}),t(r(o),{as:"h4",color:"orange"},{default:e(()=>[a("Orange")]),_:1}),t(r(o),{as:"h4",color:"yellow"},{default:e(()=>[a("Yellow")]),_:1}),t(r(o),{as:"h4",color:"olive"},{default:e(()=>[a("Olive")]),_:1}),t(r(o),{as:"h4",color:"green"},{default:e(()=>[a("Green")]),_:1}),t(r(o),{as:"h4",color:"teal"},{default:e(()=>[a("Teal")]),_:1}),t(r(o),{as:"h4",color:"blue"},{default:e(()=>[a("Blue")]),_:1}),t(r(o),{as:"h4",color:"purple"},{default:e(()=>[a("Purple")]),_:1}),t(r(o),{as:"h4",color:"violet"},{default:e(()=>[a("Violet")]),_:1}),t(r(o),{as:"h4",color:"pink"},{default:e(()=>[a("Pink")]),_:1}),t(r(o),{as:"h4",color:"brown"},{default:e(()=>[a("Brown")]),_:1}),t(r(o),{as:"h4",color:"grey"},{default:e(()=>[a("Grey")]),_:1})]),_:1}))}},K=`<template>
  <SuiSegment inverted>
    <SuiHeader as="h4" inverted color="red">Red</SuiHeader>
    <SuiHeader as="h4" inverted color="orange">Orange</SuiHeader>
    <SuiHeader as="h4" inverted color="yellow">Yellow</SuiHeader>
    <SuiHeader as="h4" inverted color="olive">Olive</SuiHeader>
    <SuiHeader as="h4" inverted color="green">Green</SuiHeader>
    <SuiHeader as="h4" inverted color="teal">Teal</SuiHeader>
    <SuiHeader as="h4" inverted color="blue">Blue</SuiHeader>
    <SuiHeader as="h4" inverted color="purple">Purple</SuiHeader>
    <SuiHeader as="h4" inverted color="violet">Violet</SuiHeader>
    <SuiHeader as="h4" inverted color="pink">Pink</SuiHeader>
    <SuiHeader as="h4" inverted color="brown">Brown</SuiHeader>
    <SuiHeader as="h4" inverted color="grey">Grey</SuiHeader>
  </SuiSegment>
</template>`,E={__name:"InvertedDoc",setup(l){return(i,c)=>(d(),n(s,{label:"Colored",code:K},{description:e(()=>[a(" A header can have its colors inverted for contrast ")]),example:e(()=>[t(r(u),{inverted:""},{default:e(()=>[t(r(o),{as:"h4",inverted:"",color:"red"},{default:e(()=>[a("Red")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"orange"},{default:e(()=>[a("Orange")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"yellow"},{default:e(()=>[a("Yellow")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"olive"},{default:e(()=>[a("Olive")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"green"},{default:e(()=>[a("Green")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"teal"},{default:e(()=>[a("Teal")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"blue"},{default:e(()=>[a("Blue")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"purple"},{default:e(()=>[a("Purple")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"violet"},{default:e(()=>[a("Violet")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"pink"},{default:e(()=>[a("Pink")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"brown"},{default:e(()=>[a("Brown")]),_:1}),t(r(o),{as:"h4",inverted:"",color:"grey"},{default:e(()=>[a("Grey")]),_:1})]),_:1})]),_:1}))}},X={__name:"Header",setup(l){const i=[{id:"page-headers",label:"Page Headers",category:"Types",component:g},{id:"content-headers",label:"Content Headers",category:"Types",component:v},{id:"icon-headers",label:"Icon Headers",category:"Types",component:y},{id:"sub-headers",label:"Sub Headers",category:"Types",component:D},{id:"image",label:"Image",category:"Content",component:k},{id:"icon",label:"Icon",category:"Content",component:C},{id:"subheader",label:"Subheader",category:"Content",component:z},{id:"disabled",label:"Disabled",category:"States",component:I},{id:"dividing",label:"Dividing",category:"Variations",component:G},{id:"block",label:"Block",category:"Variations",component:q},{id:"attached",label:"Attached",category:"Variations",component:O},{id:"floating",label:"Floating",category:"Variations",component:M},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:U},{id:"colored",label:"Colored",category:"Variations",component:N},{id:"inverted",label:"Inverted",category:"Variations",component:E}];return(c,J)=>(d(),n(S,{title:"Header",description:"A header provides a short summary of content","component-docs":i}))}};export{X as default};
