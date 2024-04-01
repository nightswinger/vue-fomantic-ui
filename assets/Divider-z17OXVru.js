import{o,c as l,w as r,a,b as e,u as i,n as u,x as t,y as p,i as v,j as h,k as D,l as f,D as S,d as g,m as w,e as _,h as m,f as z}from"./index-DXf-rKoW.js";import{_ as d}from"./DocSection-C2fGI9ub.js";const b=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,x={__name:"DividerDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Divider",code:b},{description:r(()=>[a(" A standard divider ")]),example:r(()=>[e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(i(t)),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},A=g("label",null,"Username",-1),y=g("input",{type:"text",placeholder:"Username"},null,-1),I=g("label",null,"Password",-1),H=g("input",{type:"password",placeholder:"Password"},null,-1),$=`<template>
  <SuiSegment placeholder>
    <SuiGrid columns="equal">
      <SuiGridColumn>
        <SuiForm>
          <SuiFormField>
            <label>Username</label>
            <input type="text" placeholder="Username" />
          </SuiFormField>
          <SuiFormField>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </SuiFormField>
          <SuiButton primary>Login</SuiButton>
        </SuiForm>
      </SuiGridColumn>
      <SuiGridColumn textAlign="middle">
        <SuiButton secondary icon="signup" content="Sign Up" />
      </SuiGridColumn>
    </SuiGrid>
    <SuiDivider vertical>Or</SuiDivider>
  </SuiSegment>
</template>`,L={__name:"VerticalDividerDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Vertical Divider",code:$},{description:r(()=>[a(" A divider can segment content vertically. ")]),example:r(()=>[e(i(p),{placeholder:""},{default:r(()=>[e(i(v),{columns:"equal"},{default:r(()=>[e(i(h),null,{default:r(()=>[e(i(D),null,{default:r(()=>[e(i(f),null,{default:r(()=>[A,y]),_:1}),e(i(f),null,{default:r(()=>[I,H]),_:1}),e(i(S),{primary:""},{default:r(()=>[a("Login")]),_:1})]),_:1})]),_:1}),e(i(h),{textAlign:"middle"},{default:r(()=>[e(i(S),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),e(i(t),{vertical:""},{default:r(()=>[a("Or")]),_:1})]),_:1})]),_:1}))}},O=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,V={__name:"HorizontalDividerDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Horizontal Divider",code:O},{description:r(()=>[a(" A divider can segment content horizontally ")]),example:r(()=>[e(i(p),{basic:"",textAlign:"center"},{default:r(()=>[e(i(w),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),e(i(t),{horizontal:""},{default:r(()=>[a("Or")]),_:1}),e(i(S),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},C=`<template>
  <SuiDivider horizontal textAlign="left">
    <SuiIcon name="left align" />
    Left Aligned
  </SuiDivider>
  <SuiDivider horizontal textAlign="center">
    <SuiIcon name="center align" />
    Center Aligned
  </SuiDivider>
  <SuiDivider horizontal textAlign="right">
    <SuiIcon name="right align" />
    Right Aligned
  </SuiDivider>
</template>`,N={__name:"HorizontalAlignmentDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Horizontal Alignment",code:C},{description:r(()=>[a(" A horizontal divider can be aligned ")]),example:r(()=>[e(i(t),{horizontal:"",textAlign:"left"},{default:r(()=>[e(i(_),{name:"left align"}),a(" Left Aligned ")]),_:1}),e(i(t),{horizontal:"",textAlign:"center"},{default:r(()=>[e(i(_),{name:"center align"}),a(" Center Aligned ")]),_:1}),e(i(t),{horizontal:"",textAlign:"right"},{default:r(()=>[e(i(_),{name:"right align"}),a(" Right Aligned ")]),_:1})]),_:1}))}},F=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,G={__name:"InvertedDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Inverted",code:F},{description:r(()=>[a(" A divider can have its colors inverted ")]),example:r(()=>[e(i(p),{inverted:""},{default:r(()=>[e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(i(t),{inverted:""}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(i(t),{horizontal:"",inverted:""},{default:r(()=>[a("Horizontal")]),_:1})]),_:1})]),_:1}))}},T=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,B={__name:"FittedDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Inverted",code:T},{description:r(()=>[a(" A divider can be fitted, without any space above or below it. ")]),example:r(()=>[e(i(p),null,{default:r(()=>[a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),e(i(t),{fitted:""}),a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},U=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,q={__name:"HiddenDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Hidden",code:U},{description:r(()=>[a(" A hidden divider divides content without creating a dividing line ")]),example:r(()=>[e(i(m),null,{default:r(()=>[a("Section One")]),_:1}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(i(t),{hidden:""}),e(i(m),null,{default:r(()=>[a("Section Two")]),_:1}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},E=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,M={__name:"SectionDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Section",code:E},{description:r(()=>[a(" A divider can provide greater margins to divide sections of content ")]),example:r(()=>[e(i(m),null,{default:r(()=>[a("Section One")]),_:1}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(i(t),{section:""}),e(i(m),null,{default:r(()=>[a("Section Two")]),_:1}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},P=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Q={__name:"ClearingDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Clearing",code:P},{description:r(()=>[a(" A divider can clear the contents above it ")]),example:r(()=>[e(i(p),null,{default:r(()=>[e(i(m),{floated:"right"},{default:r(()=>[a("Section One")]),_:1}),e(i(t),{clearing:""}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},R=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,k={__name:"SizeDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Size",code:R},{description:r(()=>[a(" A divider text can vary in size ")]),example:r(()=>[e(i(t),{horizontal:"",size:"mini"},{default:r(()=>[a("MINI")]),_:1}),e(i(t),{horizontal:"",size:"tiny"},{default:r(()=>[a("TINY")]),_:1}),e(i(t),{horizontal:"",size:"small"},{default:r(()=>[a("SMALL")]),_:1}),e(i(t),{horizontal:"",size:"large"},{default:r(()=>[a("LARGE")]),_:1}),e(i(t),{horizontal:"",size:"big"},{default:r(()=>[a("BIG")]),_:1}),e(i(t),{horizontal:"",size:"huge"},{default:r(()=>[a("HUGE")]),_:1}),e(i(t),{horizontal:"",size:"massive"},{default:r(()=>[a("MASSIVE")]),_:1})]),_:1}))}},K={__name:"Divider",setup(s){const n=[{id:"divider",label:"Divider",category:"Types",component:x},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:L},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:V},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:N},{id:"inverted",label:"Inverted",category:"Variations",component:G},{id:"fitted",label:"Fitted",category:"Variations",component:B},{id:"hidden",label:"Hidden",category:"Variations",component:q},{id:"section",label:"Section",category:"Variations",component:M},{id:"clearing",label:"Clearing",category:"Variations",component:Q},{id:"size",label:"Size",category:"Variations",component:k}];return(c,Y)=>(o(),l(z,{title:"Divider",description:"A divider visually segments content into groups","component-docs":n}))}};export{K as default};
