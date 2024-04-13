import{o as n,c as d,w as e,a as t,b as r,u as i,a2 as o,a3 as a,a4 as c,d as B,L as f,p as b,F as _,s as v,P as D,D as k}from"./index-BLRrc4sh.js";import{_ as s}from"./DocSection-Da03Tz-a.js";const h=`<template>
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
</template>`,y={__name:"DividerDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Divider",code:x},{description:e(()=>[t(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:e(()=>[r(i(o),null,{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{link:""},{default:e(()=>[t("Registration")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Personal Information")]),_:1})]),_:1})]),_:1}))}},P=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,$={__name:"SectionDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Section",code:P},{description:e(()=>[t(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:e(()=>[r(i(o),null,{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Search")]),_:1})]),_:1})]),_:1}))}},H=B("a",{href:"#"},"paper towels",-1),z=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,A={__name:"LinkDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Link",code:z},{description:e(()=>[t(" A section may be linkable or contain a link ")]),example:e(()=>[r(i(o),null,{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Search for: "),H]),_:1})]),_:1})]),_:1}))}},I=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,w={__name:"ActiveDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Active",code:I},{description:e(()=>[t(" A section can be active ")]),example:e(()=>[r(i(o),null,{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Products")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Paper Towels")]),_:1})]),_:1})]),_:1}))}},R=B("br",null,null,-1),L=`<template>
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
</template>`,T={__name:"InvertedDoc",setup(l){return(u,m)=>(n(),d(s,{label:"Inverted",code:L},{description:e(()=>[t(" A breadcrumb can be inverted ")]),example:e(()=>[r(i(f),{inverted:""},{default:e(()=>[r(i(o),{inverted:""},{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{link:""},{default:e(()=>[t("Registration")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Personal Information")]),_:1})]),_:1}),R,r(i(o),{inverted:""},{default:e(()=>[r(i(a),null,{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),null,{default:e(()=>[t("Registration")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},C=`<template>
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
</template>`,V={__name:"SizeDoc",setup(l){const u=["mini","tiny","small","large","big","huge","massive"];return(m,p)=>(n(),d(s,{label:"Size",code:C},{description:e(()=>[t(" A breadcrumb can vary in size ")]),example:e(()=>[(n(),b(_,null,v(u,S=>(n(),b(_,{key:S},[r(i(o),{size:S},{default:e(()=>[r(i(a),{link:""},{default:e(()=>[t("Home")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{link:""},{default:e(()=>[t("Registration")]),_:1}),r(i(c),null,{default:e(()=>[t(" / ")]),_:1}),r(i(a),{active:""},{default:e(()=>[t("Personal Information")]),_:1})]),_:2},1032,["size"]),r(i(D),{hidden:""})],64))),64))]),_:1}))}},E={__name:"Breadcrumb",setup(l){const u=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:g},{id:"divider",label:"Divider",category:"Content",component:y},{id:"section",label:"Section",category:"Content",component:$},{id:"link",label:"Link",category:"Content",component:A},{id:"active",label:"Active",category:"States",component:w},{id:"inverted",label:"Inverted",category:"Variations",component:T},{id:"size",label:"Size",category:"Variations",component:V}];return(m,p)=>(n(),d(k,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":u}))}};export{E as default};
