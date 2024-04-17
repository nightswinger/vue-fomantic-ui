import{e as i,r as s,o,c as n,w as t,a as c,b as m,u as p,aD as u,D as f}from"./index-B2sz39O7.js";import{_}from"./DocSection-LsN_yblw.js";const v=`<template>
  <Calendar v-model="date" placeholder="Date/Time" />
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()
<\/script>`,C=i({__name:"CalendarDoc",setup(r){const e=s();return(d,a)=>(o(),n(_,{label:"Calendar",code:v},{description:t(()=>[c(" A standard calendar ")]),example:t(()=>[m(p(u),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1}))}}),b=`<template>
  <Calendar v-model="date" inline />
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()
<\/script>`,D=i({__name:"InlineCalendarDoc",setup(r){const e=s();return(d,a)=>(o(),n(_,{label:"Inline Calendar",code:b},{description:t(()=>[c(" An inline calendar isn't shown in a popup ")]),example:t(()=>[m(p(u),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),inline:""},null,8,["modelValue"])]),_:1}))}}),V=`<template>
  <Calendar v-model="date" size="big" placeholder="Date/Time" />
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()
<\/script>`,x=i({__name:"SizeDoc",setup(r){const e=s();return(d,a)=>(o(),n(_,{label:"Size",code:V},{description:t(()=>[c(" A calendar can have different sizes ")]),example:t(()=>[m(p(u),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),size:"big",placeholder:"Date/Time"},null,8,["modelValue"])]),_:1}))}}),T=`<template>
  <Calendar v-model="date" inverted placeholder="Date/Time" />
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()
<\/script>`,$=i({__name:"InvertedDoc",setup(r){const e=s();return(d,a)=>(o(),n(_,{label:"Inverted",code:T},{description:t(()=>[c(" A calendar can have its colors inverted ")]),example:t(()=>[m(p(u),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),inverted:"",placeholder:"Date/Time"},null,8,["modelValue"])]),_:1}))}}),h=`<template>
  <Calendar v-model="date" disabled placeholder="Date/Time" />
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()
<\/script>`,y=i({__name:"DisabledDoc",setup(r){const e=s();return(d,a)=>(o(),n(_,{label:"Disabled",code:h},{description:t(()=>[c(" A disabled calendar does not allow user interaction ")]),example:t(()=>[m(p(u),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),disabled:"",placeholder:"Date/Time"},null,8,["modelValue"])]),_:1}))}}),A={__name:"Calendar",setup(r){const e=[{id:"calendar",label:"Calendar",category:"Types",component:C},{id:"inline-calendar",label:"Inline Calendar",category:"Types",component:D},{id:"size",label:"Size",category:"Variations",component:x},{id:"inverted",label:"Inverted",category:"Variations",component:$},{id:"disabled",label:"Disabled",category:"States",component:y}];return(d,a)=>(o(),n(f,{title:"Calendar",description:"A calendar allows users to select any date or time","component-docs":e}))}};export{A as default};
