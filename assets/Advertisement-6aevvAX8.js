import{o as s,c as o,w as a,a as d,b as e,u as t,I as n,_ as m,e as p,J as u,d as l,D as _}from"./index-RtEKpQy5.js";const b=p("img",{src:u},null,-1),g=`<template>
  <Advertisement unit="medium rectangle">
    <img src="/images/wireframe/image.png" />
  </Advertisement>
</template>`,A={__name:"AdDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Ad",code:g},{description:a(()=>[d(" A standard ad ")]),example:a(()=>[e(t(n),{unit:"medium rectangle"},{default:a(()=>[b]),_:1})]),_:1}))}},y=`<template>
  <Advertisement unit="medium rectangle" test="Medium Rectangle" />
  <Advertisement unit="banner" test="Banner" />
  <Advertisement unit="leaderboard" test="Leaderboard" />
  <Advertisement unit="large rectangle" test="Large Rectangle" />
  <Advertisement unit="half page" test="Half Page" />
</template>`,v={__name:"CommonUnitsDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Common Units",code:y},{description:a(()=>[d(" An advertisement can appear in common ad unit sizes ")]),example:a(()=>[e(t(n),{unit:"medium rectangle",test:"Medium Rectangle"}),e(t(n),{unit:"banner",test:"Banner"}),e(t(n),{unit:"leaderboard",test:"Leaderboard"}),e(t(n),{unit:"large rectangle",test:"Large Rectangle"}),e(t(n),{unit:"half page",test:"Half Page"})]),_:1}))}},f=`<template>
  <Advertisement unit="mobile banner" test="Mobile Banner" />
  <Advertisement unit="mobile leaderboard" test="Mobile Leaderboard" />
</template>`,B={__name:"MobileDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Mobile",code:f},{description:a(()=>[d(" An ad can use common mobile ad sizes ")]),example:a(()=>[e(t(n),{unit:"mobile banner",test:"Mobile Banner"}),e(t(n),{unit:"mobile leaderboard",test:"Mobile Leaderboard"})]),_:1}))}},x=`<template>
  <Advertisement unit="medium rectangle" test="Medium Rectangle" />
</template>`,$={__name:"RectangleDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Rectangle",code:x},{description:a(()=>[d(" An ad can use a common rectangle ad unit size ")]),example:a(()=>[e(t(n),{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1}))}},h=`<template>
  <Advertisement unit="button" test="Button"  />
  <Advertisement unit="square button" test="Square Button"  />
  <Advertisement unit="small button" test="Small Button"  />
</template>`,T={__name:"ButtonDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Button",code:h},{description:a(()=>[d(" An ad can use button ad unit size ")]),example:a(()=>[e(t(n),{unit:"button",test:"Button"}),e(t(n),{unit:"square button",test:"Square Button"}),e(t(n),{unit:"small button",test:"Small Button"})]),_:1}))}},k=`<template>
  <Advertisement unit="skyscraper" test="Skyscraper"  />
  <Advertisement unit="wide skyscraper" test="Wide Skyscraper"  />
</template>`,L={__name:"SkyscraperDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Skyscraper",code:k},{description:a(()=>[d(" An ad can use skyscraper ad unit size ")]),example:a(()=>[e(t(n),{unit:"skyscraper",test:"Skyscraper"}),e(t(n),{unit:"wide skyscraper",test:"Wide Skyscraper"})]),_:1}))}},D=`<template>
  <Advertisement unit="banner" test="Banner" />
  <Advertisement unit="vertical banner" test="Vertical Banner" />
  <Advertisement unit="top banner" test="Top Banner" />
  <Advertisement unit="half banner" test="Half Banner" />
</template>`,C={__name:"BannerDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Banner",code:D},{description:a(()=>[d(" An ad can use banner ad unit size ")]),example:a(()=>[e(t(n),{unit:"banner",test:"Banner"}),e(t(n),{unit:"vertical banner",test:"Vertical Banner"}),e(t(n),{unit:"top banner",test:"Top Banner"}),e(t(n),{unit:"half banner",test:"Half Banner"})]),_:1}))}},M=`<template>
  <Advertisement unit="leaderboard" test="Leaderboard" />
  <Advertisement unit="large leaderboard" test="Large Leaderboard" />
  <Advertisement unit="billboard" test="Billboard" />
</template>`,S={__name:"LeaderboardsDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Leaderboards",code:M},{description:a(()=>[d(" An ad can use leaderboard ad unit size ")]),example:a(()=>[e(t(n),{unit:"leaderboard",test:"Leaderboard"}),e(t(n),{unit:"large leaderboard",test:"Large Leaderboard"}),e(t(n),{unit:"billboard",test:"Billboard"})]),_:1}))}},z=`<template>
  <Advertisement unit="panorama" test="Panorama" />
</template>`,R=l({__name:"PanoramaDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Panorama",code:z},{description:a(()=>[d(" An ad can use panorama ad unit size ")]),example:a(()=>[e(t(n),{unit:"panorama",test:"Panorama"})]),_:1}))}}),N=`<template>
  <Advertisement unit="netboard" test="Netboard" />
</template>`,P=l({__name:"NetboardDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Netboard",code:N},{description:a(()=>[d(" An ad can use netboard ad unit size ")]),example:a(()=>[e(t(n),{unit:"netboard",test:"Netboard"})]),_:1}))}}),V=`<template>
  <Advertisement centered unit="banner" test="Centered" />
</template>`,w=l({__name:"CenteredDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Centered",code:V},{description:a(()=>[d(" An advertisement can appear centered ")]),example:a(()=>[e(t(n),{centered:"",unit:"banner",test:"Centered"})]),_:1}))}}),q=`<template>
  <Advertisement centered unit="banner" test="Centered" />
</template>`,H=l({__name:"TestDoc",setup(c){return(r,i)=>(s(),o(m,{label:"Test",code:q},{description:a(()=>[d(" A advertisement can be formatted to help verify placement ")]),example:a(()=>[e(t(n),{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1}))}}),I={__name:"Advertisement",setup(c){const r=[{id:"ad",label:"Ad",category:"Types",component:A},{id:"common-units",label:"Common Units",category:"Types",component:v},{id:"mobile",label:"Mobile",category:"Types",component:B},{id:"rectangle",label:"Rectangle",category:"Types",component:$},{id:"button",label:"Button",category:"Types",component:T},{id:"skyscraper",label:"Skyscraper",category:"Types",component:L},{id:"banner",label:"Banner",category:"Types",component:C},{id:"leaderboards",label:"Leaderboards",category:"Types",component:S},{id:"panorama",label:"Panorama",category:"Types",component:R},{id:"netboard",label:"Netboard",category:"Types",component:P},{id:"centered",label:"Centered",category:"Variations",component:w},{id:"test",label:"Test",category:"Variations",component:H}];return(i,U)=>(s(),o(_,{title:"Advertisement",description:"An ad displays third-party promotional content","component-docs":r}))}};export{I as default};
