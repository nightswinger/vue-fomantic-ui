import{d as i,r as _,o as n,c,w as t,a as g,b as e,u as r,R as o,A as u,_ as d,v,h as b,D as P}from"./index-fNAjED_P.js";const f=`<template>
  <Progress progress :percent="value" label="Uploading Files" />
  <Button icon="minus" @click="value -= 10" />
  <Button icon="plus" @click="value += 10" />
</template>

<script setup>
import { ref } from 'vue'
import { Progress, Button } from 'vue-fomantic-ui'

const value = ref(30)
<\/script>`,x=i({__name:"StandardDoc",setup(l){const s=_(30);return(a,p)=>(n(),c(d,{label:"Standard",code:f},{description:t(()=>[g(" A standard progress bar ")]),example:t(()=>[e(r(o),{progress:"",percent:s.value,label:"Uploading Files"},null,8,["percent"]),e(r(u),{icon:"minus",onClick:p[0]||(p[0]=m=>s.value-=10)}),e(r(u),{icon:"plus",onClick:p[1]||(p[1]=m=>s.value+=10)})]),_:1}))}}),y=`<template>
  <Progress indicating progress :percent="value" :label="\`\${value}% Funded\`" />
  <Button icon="minus" @click="value -= 10" />
  <Button icon="plus" @click="value += 10" />
</template>

<script setup>
import { ref } from 'vue'
import { Progress, Button } from 'vue-fomantic-ui'

const value = ref(10)
<\/script>`,$=i({__name:"IndicatingDoc",setup(l){const s=_(10);return(a,p)=>(n(),c(d,{label:"Indicating",code:y},{description:t(()=>[g(" An indicating progress bar visually indicates the current level of progress of a task ")]),example:t(()=>[e(r(o),{indicating:"",progress:"",percent:s.value,label:`${s.value}% Funded`},null,8,["percent","label"]),e(r(u),{icon:"minus",onClick:p[0]||(p[0]=m=>s.value-=10)}),e(r(u),{icon:"plus",onClick:p[1]||(p[1]=m=>s.value+=10)})]),_:1}))}}),h=`<template>
  <Progress :percent="33" />
</template>`,k=i({__name:"BarDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Bar",code:h},{description:t(()=>[g(" A progress element can contain a bar visually indicating progress ")]),example:t(()=>[e(r(o),{percent:33})]),_:1}))}}),w=`<template>
  <Progress progress :percent="33" />
</template>`,A=i({__name:"ProgressDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Progress",code:w},{description:t(()=>[g(" A progress bar can contain a text value indicating current progress ")]),example:t(()=>[e(r(o),{progress:"",percent:43})]),_:1}))}}),S=`<template>
  <Progress progress="centered" :percent="57" />
</template>`,C=i({__name:"CenteredProgressTextDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Centered Progress Text",code:S},{description:t(()=>[g(" The text inside a progress can be centered ")]),example:t(()=>[e(r(o),{progress:"centered",percent:57})]),_:1}))}}),D=`<template>
  <Progress progress :percent="12" label="Uploading Files" />
</template>`,B=i({__name:"LabelDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Label",code:D},{description:t(()=>[g(" A progress element can contain a label ")]),example:t(()=>[e(r(o),{progress:"",percent:12,label:"Uploading Files"})]),_:1}))}}),z=`<template>
  <Progress active progress :percent="12" label="Uploading Files" />
</template>`,F=i({__name:"ActiveDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Active",code:z},{description:t(()=>[g(" A progress bar can show activity ")]),example:t(()=>[e(r(o),{active:"",progress:"",percent:12,label:"Uploading Files"})]),_:1}))}}),T=`<template>
  <Progress success progress :percent="100" label="Everything worked, your file is all ready." />
</template>`,I=i({__name:"SuccessDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Success",code:T},{description:t(()=>[g(" A progress bar can show a success state ")]),example:t(()=>[e(r(o),{success:"",progress:"",percent:100,label:"Everything worked, your file is all ready."})]),_:1}))}}),U=`<template>
  <Progress warning progress :percent="100" label="Your file didn't meet the minimum resolution requirements." />
</template>`,V=i({__name:"WarningDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Warning",code:U},{description:t(()=>[g(" A progress bar can show a warning state ")]),example:t(()=>[e(r(o),{warning:"",progress:"",percent:100,label:"Your file didn't meet the minimum resolution requirements."})]),_:1}))}}),E=`<template>
  <Progress error progress :percent="100" label="There was an error." />
</template>`,L=i({__name:"ErrorDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Error",code:E},{description:t(()=>[g(" A progress bar can show an error state ")]),example:t(()=>[e(r(o),{error:"",progress:"",percent:100,label:"There was an error."})]),_:1}))}}),W=`<template>
  <Progress disabled :percent="34" />
</template>`,N=i({__name:"DisabledDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Disabled",code:W},{description:t(()=>[g(" A progress bar can be disabled ")]),example:t(()=>[e(r(o),{disabled:"",percent:34})]),_:1}))}}),q=`<template>
  <Segment inverted>
    <Progress inverted progress :percent="value" label="Uploading Files" />
    <Progress inverted success progress :percent="100" label="Success" />
    <Progress inverted warning progress :percent="100" label="Warning" />
    <Progress inverted error progress :percent="100" label="Error" />
  </Segment>
  <Button icon="plus" @click="value.value += 10" />
</template>

<script setup>
import { ref } from 'vue'
import { Progress, Segment, Button } from 'vue-fomantic-ui'

const value = ref(10)
<\/script>`,Y=i({__name:"InvertedDoc",setup(l){const s=_(10);return(a,p)=>(n(),c(d,{label:"Inverted",code:q},{description:t(()=>[g(" A progress bar can have its colors inverted ")]),example:t(()=>[e(r(v),{inverted:""},{default:t(()=>[e(r(o),{inverted:"",progress:"",percent:s.value,label:"Uploading Files"},null,8,["percent"]),e(r(o),{inverted:"",success:"",progress:"",percent:100,label:"Success"}),e(r(o),{inverted:"",warning:"",progress:"",percent:100,label:"Warning"}),e(r(o),{inverted:"",error:"",progress:"",percent:100,label:"Error"})]),_:1}),e(r(u),{icon:"plus",onClick:p[0]||(p[0]=m=>s.value+=10)})]),_:1}))}}),j=b("p",null,"La la la la",-1),R=`<template>
  <Segment>
    <Progress attached="top" :percent="value" />
    <p>La la la la</p>
    <Progress attached="bottom" :percent="value" />
  </Segment>
  <Button icon="plus" @click="value += 10" />
</template>`,G=i({__name:"AttachedDoc",setup(l){const s=_(10);return(a,p)=>(n(),c(d,{label:"Attached",code:R},{description:t(()=>[g(" A progress bar can show progress of an element ")]),example:t(()=>[e(r(v),null,{default:t(()=>[e(r(o),{attached:"top",percent:s.value},null,8,["percent"]),j,e(r(o),{attached:"bottom",percent:s.value},null,8,["percent"])]),_:1}),e(r(u),{icon:"plus",onClick:p[0]||(p[0]=m=>s.value+=10)})]),_:1}))}}),H=`<template>
  <Progress :percent="88" size="tiny" label="tiny" />
  <Progress :percent="100" size="small" label="small" success />
  <Progress :percent="83" label="standard" />
  <Progress :percent="73" size="large" label="large" />
  <Progress :percent="94" size="big" label="big" />
</template>`,J=i({__name:"SizeDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Size",code:H},{description:t(()=>[g(" A progress bar can vary in size ")]),example:t(()=>[e(r(o),{percent:88,size:"tiny",label:"tiny"}),e(r(o),{percent:100,size:"small",label:"small",success:""}),e(r(o),{percent:83,label:"standard"}),e(r(o),{percent:73,size:"large",label:"large"}),e(r(o),{percent:94,size:"big",label:"big"})]),_:1}))}}),K=`<template>
  <Progress :percent="32" color="red" />
  <Progress :percent="53" color="orange" />
  <Progress :percent="13" color="yellow" />
  <Progress :percent="37" color="olive" />
  <Progress :percent="83" color="green" />
  <Progress :percent="24" color="teal" />
  <Progress :percent="88" color="blue" />
  <Progress :percent="41" color="violet" />
  <Progress :percent="47" color="purple" />
  <Progress :percent="30" color="pink" />
  <Progress :percent="68" color="brown" />
  <Progress :percent="35" color="grey" />
  <Progress :percent="73" color="black" />
</template>`,M=i({__name:"ColorDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Color",code:K},{description:t(()=>[g(" A progress bar can have different colors ")]),example:t(()=>[e(r(o),{percent:32,color:"red"}),e(r(o),{percent:53,color:"orange"}),e(r(o),{percent:13,color:"yellow"}),e(r(o),{percent:37,color:"olive"}),e(r(o),{percent:83,color:"green"}),e(r(o),{percent:24,color:"teal"}),e(r(o),{percent:88,color:"blue"}),e(r(o),{percent:41,color:"violet"}),e(r(o),{percent:47,color:"purple"}),e(r(o),{percent:30,color:"pink"}),e(r(o),{percent:68,color:"brown"}),e(r(o),{percent:35,color:"grey"}),e(r(o),{percent:73,color:"black"})]),_:1}))}}),O=`<template>
  <Segment inverted>
    <Progress progress :percent="23" inverted color="red" />
    <Progress progress :percent="25" inverted color="orange" />
    <Progress progress :percent="64" inverted color="yellow" />
    <Progress progress :percent="24" inverted color="olive" />
    <Progress progress :percent="8" inverted color="green" />
    <Progress progress :percent="28" inverted color="teal" />
    <Progress progress :percent="41" inverted color="blue" />
    <Progress progress :percent="27" inverted color="violet" />
    <Progress progress :percent="26" inverted color="purple" />
    <Progress progress :percent="44" inverted color="pink" />
    <Progress progress :percent="38" inverted color="brown" />
    <Progress progress :percent="49" inverted color="grey" />
    <Progress progress :percent="46" inverted color="black" />
  </Segment>
</template>`,Q=i({__name:"InvertedColorDoc",setup(l){return(s,a)=>(n(),c(d,{label:"Inverted Color",code:O},{description:t(()=>[g(" These colors can also be inverted for improved contrast on dark backgrounds ")]),example:t(()=>[e(r(v),{inverted:""},{default:t(()=>[e(r(o),{progress:"",percent:23,inverted:"",color:"red"}),e(r(o),{progress:"",percent:25,inverted:"",color:"orange"}),e(r(o),{progress:"",percent:64,inverted:"",color:"yellow"}),e(r(o),{progress:"",percent:24,inverted:"",color:"olive"}),e(r(o),{progress:"",percent:8,inverted:"",color:"green"}),e(r(o),{progress:"",percent:28,inverted:"",color:"teal"}),e(r(o),{progress:"",percent:41,inverted:"",color:"blue"}),e(r(o),{progress:"",percent:27,inverted:"",color:"violet"}),e(r(o),{progress:"",percent:26,inverted:"",color:"purple"}),e(r(o),{progress:"",percent:44,inverted:"",color:"pink"}),e(r(o),{progress:"",percent:38,inverted:"",color:"brown"}),e(r(o),{progress:"",percent:49,inverted:"",color:"grey"}),e(r(o),{progress:"",percent:46,inverted:"",color:"black"})]),_:1})]),_:1}))}}),Z={__name:"Progress",setup(l){const s=[{id:"standard",label:"Standard",category:"Types",component:x},{id:"indicating",label:"Indicating",category:"Types",component:$},{id:"bar",label:"Bar",category:"Content",component:k},{id:"progress",label:"Progress",category:"Content",component:A},{id:"centered-progress-text",label:"Centered Progress Text",category:"Content",component:C},{id:"label",label:"Label",category:"Content",component:B},{id:"active",label:"Active",category:"States",component:F},{id:"success",label:"Success",category:"States",component:I},{id:"warning",label:"Warning",category:"States",component:V},{id:"error",label:"Error",category:"States",component:L},{id:"disabled",label:"Disabled",category:"States",component:N},{id:"inverted",label:"Inverted",category:"Variations",component:Y},{id:"attached",label:"Attached",category:"Variations",component:G},{id:"size",label:"Size",category:"Variations",component:J},{id:"color",label:"Color",category:"Variations",component:M},{id:"inverted-color",label:"Inverted Color",category:"Variations",component:Q}];return(a,p)=>(n(),c(P,{title:"Progress",description:"A progress bar shows the progression of a task","component-docs":s}))}};export{Z as default};
