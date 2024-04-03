import{o as l,c as s,w as i,a as t,b as e,u as a,y as c,S as d,U as r,n,f as g}from"./index-BtqR3fgc.js";import{_ as p}from"./DocSection-Bplbrfto.js";const _=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,S={__name:"LoaderDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Loader",code:_},{description:i(()=>[t(" A loader ")]),example:i(()=>[e(a(c),null,{default:i(()=>[e(a(d),{active:""},{default:i(()=>[e(a(r))]),_:1}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},f=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,v={__name:"TextLoaderDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Text Loader",code:f},{description:i(()=>[t(" A loader can contain text ")]),example:i(()=>[e(a(c),null,{default:i(()=>[e(a(d),{active:""},{default:i(()=>[e(a(r),{text:""},{default:i(()=>[t("Loading")]),_:1})]),_:1}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},h=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,L={__name:"IndeterminateDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Indeterminate",code:h},{description:i(()=>[t(" A loader can show it's unsure of how long a task will take ")]),example:i(()=>[e(a(c),null,{default:i(()=>[e(a(d),{active:""},{default:i(()=>[e(a(r),{Indeterminate:"",text:""},{default:i(()=>[t("Preparing Files")]),_:1})]),_:1}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},x=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,w={__name:"ActiveDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Active",code:x},{description:i(()=>[t(" A loader can be active or visible ")]),example:i(()=>[e(a(c),null,{default:i(()=>[e(a(r),{active:""}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},b=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,D={__name:"DisabledDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Disabled",code:b},{description:i(()=>[t(" A loader can be disabled or hidden ")]),example:i(()=>[e(a(c),null,{default:i(()=>[e(a(r),{disabled:""}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},I=`<template>
  <SuiLoader active inline />
</template>`,y={__name:"InlineDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Inline",code:I},{description:i(()=>[t(" Loaders can appear inline with content ")]),example:i(()=>[e(a(r),{active:"",inline:""})]),_:1}))}},$=`<template>
  <SuiLoader active inline />
</template>`,z={__name:"InlineCenterDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Inline Center",code:$},{description:i(()=>[t(" Loaders can appear inline centered with content ")]),example:i(()=>[e(a(r),{active:"",inline:"centered"})]),_:1}))}},A=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,C={__name:"SpeedDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Speed",code:A},{description:i(()=>[t(" Loaders can appear slow, normal or fast ")]),example:i(()=>[e(a(r),{slow:"",active:"",inline:""}),e(a(r),{active:"",inline:""}),e(a(r),{fast:"",active:"",inline:""})]),_:1}))}},k=`<template>
  <SuiLoader active inline primary />
  <SuiLoader active inline secondary />
  <SuiLoader active inline color="red" />
  <SuiLoader active inline color="orange" />
  <SuiLoader active inline color="yellow" />
  <SuiLoader active inline color="olive" />
  <SuiLoader active inline color="green" />
  <SuiLoader active inline color="teal" />
  <SuiLoader active inline color="blue" />
  <SuiLoader active inline color="violet" />
  <SuiLoader active inline color="purple" />
  <SuiLoader active inline color="pink" />
  <SuiLoader active inline color="brown" />
  <SuiLoader active inline color="grey" />
  <SuiLoader active inline color="black" />
</template>`,V={__name:"ColorsDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Colors",code:k},{description:i(()=>[t(" Loaders can be different colors ")]),example:i(()=>[e(a(r),{active:"",inline:"",primary:""}),e(a(r),{active:"",inline:"",secondary:""}),e(a(r),{active:"",inline:"",color:"red"}),e(a(r),{active:"",inline:"",color:"orange"}),e(a(r),{active:"",inline:"",color:"yellow"}),e(a(r),{active:"",inline:"",color:"olive"}),e(a(r),{active:"",inline:"",color:"green"}),e(a(r),{active:"",inline:"",color:"teal"}),e(a(r),{active:"",inline:"",color:"blue"}),e(a(r),{active:"",inline:"",color:"violet"}),e(a(r),{active:"",inline:"",color:"purple"}),e(a(r),{active:"",inline:"",color:"pink"}),e(a(r),{active:"",inline:"",color:"brown"}),e(a(r),{active:"",inline:"",color:"grey"}),e(a(r),{active:"",inline:"",color:"black"})]),_:1}))}},T=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="mini">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="tiny">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="small">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="large">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="big">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="huge">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,B={__name:"SizeDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Size",code:T},{description:i(()=>[t(" Loaders can have different sizes ")]),example:i(()=>[e(a(c),null,{default:i(()=>[e(a(d),{active:""},{default:i(()=>[e(a(r),{text:"",size:"mini"},{default:i(()=>[t("Loading")]),_:1})]),_:1}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),e(a(c),null,{default:i(()=>[e(a(d),{active:""},{default:i(()=>[e(a(r),{text:"",size:"tiny"},{default:i(()=>[t("Loading")]),_:1})]),_:1}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),e(a(c),null,{default:i(()=>[e(a(d),{active:""},{default:i(()=>[e(a(r),{text:"",size:"small"},{default:i(()=>[t("Loading")]),_:1})]),_:1}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),e(a(c),null,{default:i(()=>[e(a(d),{active:""},{default:i(()=>[e(a(r),{text:"",size:"large"},{default:i(()=>[t("Loading")]),_:1})]),_:1}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),e(a(c),null,{default:i(()=>[e(a(d),{active:""},{default:i(()=>[e(a(r),{text:"",size:"big"},{default:i(()=>[t("Loading")]),_:1})]),_:1}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),e(a(c),null,{default:i(()=>[e(a(d),{active:""},{default:i(()=>[e(a(r),{text:"",size:"huge"},{default:i(()=>[t("Loading")]),_:1})]),_:1}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},F=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,N={__name:"InvertedDoc",setup(m){return(o,u)=>(l(),s(p,{label:"Inverted",code:F},{description:i(()=>[t(" Loaders can have their colors inverted. ")]),example:i(()=>[e(a(c),{inverted:""},{default:i(()=>[e(a(r),{active:"",inverted:""}),e(a(n),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},q={__name:"Loader",setup(m){const o=[{id:"loader",label:"Loader",category:"Types",component:S},{id:"text-loader",label:"Text Loader",category:"Types",component:v},{id:"indeterminate",label:"Indeterminate",category:"States",component:L},{id:"active",label:"Active",category:"States",component:w},{id:"disabled",label:"Disabled",category:"States",component:D},{id:"inline",label:"Inline",category:"Variations",component:y},{id:"inline-center",label:"Inline Center",category:"Variations",component:z},{id:"speed",label:"Speed",category:"Variations",component:C},{id:"colors",label:"Colors",category:"Variations",component:V},{id:"size",label:"Size",category:"Variations",component:B},{id:"inverted",label:"Inverted",category:"Variations",component:N}];return(u,P)=>(l(),s(g,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":o}))}};export{q as default};
