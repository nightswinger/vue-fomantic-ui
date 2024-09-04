import{r as p,o as n,c as d,w as e,a as l,b as o,u as a,O as u,aM as f,aN as S,aO as M,K as g,aP as h,Y as w,aQ as v,d as r,U as k,D as B}from"./index-BPzz6yRK.js";import{_}from"./DocSection-CUzZAhfI.js";const b=r("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),y=r("p",null,"Is it okay to use this photo?",-1),C=`<template>
  <SuiButton @click="show = true">Show Modal</SuiButton>
  <SuiModal v-model="show">
    <SuiModalHeader>Select a Photo</SuiModalHeader>
    <SuiModalContent image>
      <SuiImage
        wrapped
        size="medium"
        src="/images/avatar/large/rachel.png"
      />
      <SuiModalDescription>
        <SuiHeader>Default Profile Image</SuiHeader>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </SuiModalDescription>
    </SuiModalContent>
    <SuiModalActions>
      <SuiButton positive @click="show = false">OK</SuiButton>
    </SuiModalActions>
  </SuiModal>

<script setup>
import { ref } from 'vue'
import {
  SuiModal,
  SuiModalActions,
  SuiModalContent,
  SuiModalDescription,
  SuiModalHeader,
  SuiButton,
  SuiHeader,
  SuiImage,
} from 'vue-fomantic-ui'

const show = ref(false)
<\/script>`,x={__name:"ModalDoc",setup(c){const i=p(!1);return(m,t)=>(n(),d(_,{label:"Modal",code:C},{description:e(()=>[l(" A standard modal ")]),example:e(()=>[o(a(u),{onClick:t[0]||(t[0]=s=>i.value=!0)},{default:e(()=>[l("Show Modal")]),_:1}),o(a(f),{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=s=>i.value=s)},{default:e(()=>[o(a(S),null,{default:e(()=>[l("Select a Photo")]),_:1}),o(a(M),{image:""},{default:e(()=>[o(a(g),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),o(a(h),null,{default:e(()=>[o(a(w),null,{default:e(()=>[l("Default Profile Image")]),_:1}),b,y]),_:1})]),_:1}),o(a(v),null,{default:e(()=>[o(a(u),{positive:"",onClick:t[1]||(t[1]=s=>i.value=!1)},{default:e(()=>[l("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},A=r("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),D=`<template>
  <SuiButton @click="show = true">Basic Modal</SuiButton>
  <SuiModal v-model="show">
    <SuiModalHeader icon>
      <SuiIcon name="archive" />
      Archive Old Messages</SuiModalHeader>
    <SuiModalContent>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </SuiModalContent>
    <SuiModalActions>
      <SuiButton
        basic color="red" inverted
        icon="remove"
        content="No"
        @click="show = false"
      />
      <SuiButton
        basic color="green"
        icon="checkmark"
        content="Yes"
        @click="show = false"
      />
    </SuiModalActions>
  </SuiModal>
</template>

<script setup>
import {
  SuiModal,
  SuiModalActions,
  SuiModalContent,
  SuiModalHeader,
  SuiButton,
  SuiIcon,
} from 'vue-fomantic-ui'

import { ref } from 'vue'

const show = ref(false)
<\/script>`,H={__name:"BasicDoc",setup(c){const i=p(!1);return(m,t)=>(n(),d(_,{label:"Basic",code:D},{description:e(()=>[l(" A modal can reduce its complexity ")]),example:e(()=>[o(a(u),{onClick:t[0]||(t[0]=s=>i.value=!0)},{default:e(()=>[l("Basic Modal")]),_:1}),o(a(f),{basic:"",modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=s=>i.value=s)},{default:e(()=>[o(a(S),{icon:""},{default:e(()=>[o(a(k),{name:"archive"}),l(" Archive Old Messages")]),_:1}),o(a(M),null,{default:e(()=>[A]),_:1}),o(a(v),null,{default:e(()=>[o(a(u),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:t[1]||(t[1]=s=>i.value=!1)}),o(a(u),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},I={__name:"Modal",setup(c){const i=[{id:"modal",label:"Modal",category:"Types",component:x},{id:"basic",label:"Basic",category:"Types",component:H}];return(m,t)=>(n(),d(B,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":i}))}};export{I as default};
