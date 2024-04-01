import{o as n,c as d,w as e,a as t,b as r,u as i,U as o,$ as a,W as c,d as B,y as f,X as b,Z as _,a0 as v,x as k,f as D}from"./index-DXf-rKoW.js";import{_ as s}from"./DocSection-C2fGI9ub.js";const h=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,g={__name:"BreadcrumbDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Breadcrumb",code:h},{description:e(()=>[t(" A standard breadcrumb ")]),example:e(()=>[r(i(o),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},x=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,$={__name:"DividerDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Divider",code:x},{description:e(()=>[t(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:e(()=>[r(i(o),null,{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{link:""},{default:e(()=>[t("Registration")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Personal Information")]),_:1})]),_:1})]),_:1}))}},y=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,H={__name:"SectionDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Section",code:y},{description:e(()=>[t(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:e(()=>[r(i(o),null,{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Search")]),_:1})]),_:1})]),_:1}))}},A=B("a",{href:"#"},"paper towels",-1),P=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,z={__name:"LinkDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Link",code:P},{description:e(()=>[t(" A section may be linkable or contain a link ")]),example:e(()=>[r(i(o),null,{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Search for: "),A]),_:1})]),_:1})]),_:1}))}},I=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,w={__name:"ActiveDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Active",code:I},{description:e(()=>[t(" A section can be active ")]),example:e(()=>[r(i(o),null,{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Products")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Paper Towels")]),_:1})]),_:1})]),_:1}))}},R=B("br",null,null,-1),T=`<template>
  <SuiSegment inverted>
    <SuiBreadcrumb inverted>
      <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
    </SuiBreadcrumb>
    <br>
    <SuiBreadcrumb inverted>
      <SuiBreadcrumbSection>Home</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection>Registration</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
    </SuiBreadcrumb>
  </SuiSegment>
</template>`,C={__name:"InvertedDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Inverted",code:T},{description:e(()=>[t(" A breadcrumb can be inverted ")]),example:e(()=>[r(i(f),{inverted:""},{default:e(()=>[r(i(o),{inverted:""},{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{link:""},{default:e(()=>[t("Registration")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Personal Information")]),_:1})]),_:1}),R,r(i(o),{inverted:""},{default:e(()=>[r(i(a),null,{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),null,{default:e(()=>[t("Registration")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},V=`<template>
  <template v-for="size in ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']" :key="size">
    <SuiBreadcrumb :size="size">
      <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
    </SuiBreadcrumb>
    <SuiDivider hidden />
  </template>
</template>`,L={__name:"SizeDoc",setup(l){const u=["mini","tiny","small","large","big","huge","massive"];return(m,p)=>(n(),d(s,{label:"Size",code:V},{description:e(()=>[t(" A breadcrumb can vary in size ")]),example:e(()=>[(n(),b(_,null,v(u,S=>(n(),b(_,{key:S},[r(i(o),{size:S},{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{link:""},{default:e(()=>[t("Registration")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Personal Information")]),_:1})]),_:2},1032,["size"]),r(i(k),{hidden:""})],64))),64))]),_:1}))}},F={__name:"Breadcrumb",setup(l){const u=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:g},{id:"divider",label:"Divider",category:"Content",component:$},{id:"section",label:"Section",category:"Content",component:H},{id:"link",label:"Link",category:"Content",component:z},{id:"active",label:"Active",category:"States",component:w},{id:"inverted",label:"Inverted",category:"Variations",component:C},{id:"size",label:"Size",category:"Variations",component:L}];return(m,p)=>(n(),d(D,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":u}))}};export{F as default};
