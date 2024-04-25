import{o,c as l,w as r,a as t,b as e,u as i,q as u,j as a,Y as p,E as v,f,g as D,F as h,O as S,d as g,X as w,K as _,e as z,N as m,D as b}from"./index-mc-R_Yr0.js";import{_ as d}from"./DocSection-C9DVj5Jx.js";const x=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,A={__name:"DividerDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Divider",code:x},{description:r(()=>[t(" A standard divider ")]),example:r(()=>[e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(i(a)),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},y=g("label",null,"Username",-1),I=g("input",{type:"text",placeholder:"Username"},null,-1),H=g("label",null,"Password",-1),$=g("input",{type:"password",placeholder:"Password"},null,-1),O=`<template>
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
</template>`,F={__name:"VerticalDividerDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Vertical Divider",code:O},{description:r(()=>[t(" A divider can segment content vertically. ")]),example:r(()=>[e(i(p),{placeholder:""},{default:r(()=>[e(i(v),{columns:"equal"},{default:r(()=>[e(i(f),null,{default:r(()=>[e(i(D),null,{default:r(()=>[e(i(h),null,{default:r(()=>[y,I]),_:1}),e(i(h),null,{default:r(()=>[H,$]),_:1}),e(i(S),{primary:""},{default:r(()=>[t("Login")]),_:1})]),_:1})]),_:1}),e(i(f),{textAlign:"middle"},{default:r(()=>[e(i(S),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),e(i(a),{vertical:""},{default:r(()=>[t("Or")]),_:1})]),_:1})]),_:1}))}},N=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,C={__name:"HorizontalDividerDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Horizontal Divider",code:N},{description:r(()=>[t(" A divider can segment content horizontally ")]),example:r(()=>[e(i(p),{basic:"",textAlign:"center"},{default:r(()=>[e(i(w),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),e(i(a),{horizontal:""},{default:r(()=>[t("Or")]),_:1}),e(i(S),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},L=`<template>
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
</template>`,V={__name:"HorizontalAlignmentDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Horizontal Alignment",code:L},{description:r(()=>[t(" A horizontal divider can be aligned ")]),example:r(()=>[e(i(a),{horizontal:"",textAlign:"left"},{default:r(()=>[e(i(_),{name:"left align"}),t(" Left Aligned ")]),_:1}),e(i(a),{horizontal:"",textAlign:"center"},{default:r(()=>[e(i(_),{name:"center align"}),t(" Center Aligned ")]),_:1}),e(i(a),{horizontal:"",textAlign:"right"},{default:r(()=>[e(i(_),{name:"right align"}),t(" Right Aligned ")]),_:1})]),_:1}))}},G=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,T={__name:"InvertedDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Inverted",code:G},{description:r(()=>[t(" A divider can have its colors inverted ")]),example:r(()=>[e(i(p),{inverted:""},{default:r(()=>[e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(i(a),{inverted:""}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(i(a),{horizontal:"",inverted:""},{default:r(()=>[t("Horizontal")]),_:1})]),_:1})]),_:1}))}},B=`<template>
  <Segment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <Divider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </Segment>
</template>`,q=z({__name:"FittedDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Fitted",code:B},{description:r(()=>[t(" A divider can be fitted, without any space above or below it. ")]),example:r(()=>[e(i(p),null,{default:r(()=>[t(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),e(i(a),{fitted:""}),t(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}}),E=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,U={__name:"HiddenDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Hidden",code:E},{description:r(()=>[t(" A hidden divider divides content without creating a dividing line ")]),example:r(()=>[e(i(m),null,{default:r(()=>[t("Section One")]),_:1}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(i(a),{hidden:""}),e(i(m),null,{default:r(()=>[t("Section Two")]),_:1}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},M=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,P={__name:"SectionDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Section",code:M},{description:r(()=>[t(" A divider can provide greater margins to divide sections of content ")]),example:r(()=>[e(i(m),null,{default:r(()=>[t("Section One")]),_:1}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(i(a),{section:""}),e(i(m),null,{default:r(()=>[t("Section Two")]),_:1}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},R=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Q={__name:"ClearingDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Clearing",code:R},{description:r(()=>[t(" A divider can clear the contents above it ")]),example:r(()=>[e(i(p),null,{default:r(()=>[e(i(m),{floated:"right"},{default:r(()=>[t("Section One")]),_:1}),e(i(a),{clearing:""}),e(i(u),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Y=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,j={__name:"SizeDoc",setup(s){return(n,c)=>(o(),l(d,{label:"Size",code:Y},{description:r(()=>[t(" A divider text can vary in size ")]),example:r(()=>[e(i(a),{horizontal:"",size:"mini"},{default:r(()=>[t("MINI")]),_:1}),e(i(a),{horizontal:"",size:"tiny"},{default:r(()=>[t("TINY")]),_:1}),e(i(a),{horizontal:"",size:"small"},{default:r(()=>[t("SMALL")]),_:1}),e(i(a),{horizontal:"",size:"large"},{default:r(()=>[t("LARGE")]),_:1}),e(i(a),{horizontal:"",size:"big"},{default:r(()=>[t("BIG")]),_:1}),e(i(a),{horizontal:"",size:"huge"},{default:r(()=>[t("HUGE")]),_:1}),e(i(a),{horizontal:"",size:"massive"},{default:r(()=>[t("MASSIVE")]),_:1})]),_:1}))}},J={__name:"Divider",setup(s){const n=[{id:"divider",label:"Divider",category:"Types",component:A},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:F},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:C},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:V},{id:"inverted",label:"Inverted",category:"Variations",component:T},{id:"fitted",label:"Fitted",category:"Variations",component:q},{id:"hidden",label:"Hidden",category:"Variations",component:U},{id:"section",label:"Section",category:"Variations",component:P},{id:"clearing",label:"Clearing",category:"Variations",component:Q},{id:"size",label:"Size",category:"Variations",component:j}];return(c,k)=>(o(),l(b,{title:"Divider",description:"A divider visually segments content into groups","component-docs":n}))}};export{J as default};
