import{e as m,r as f,o as d,c as u,w as o,a as r,b as t,u as c,a4 as n,g as k,F as i,t as v,D as h}from"./index-CFQxuMLK.js";import{_ as b}from"./DocSection-bYVctxpZ.js";const _=`<template>
  <Checkbox label="Make my profile visible" v-model="checked" />
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox } from 'vue-fomantic-ui'

const checked = ref(false)
<\/script>`,x=m({__name:"CheckboxDoc",setup(p){const e=f(!1);return(s,l)=>(d(),u(b,{label:"Checkbox",code:_},{description:o(()=>[r(" A standard checkbox ")]),example:o(()=>[t(c(n),{label:"Make my profile visible",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a)},null,8,["modelValue"])]),_:1}))}}),C=`<template>
  <Form>
    <FormField>
      Selected values: {{ selected }}
    </FormField>
    <FormField>
      <Checkbox label="Apple" value="Apple" v-model="selected"  />
    </FormField>
    <FormField>
      <Checkbox label="Banana" value="Banana" v-model="selected"  />
    </FormField>
    <FormField>
      <Checkbox label="Chocolate" value="Chocolate" v-model="selected"  />
    </FormField>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox } from 'vue-fomantic-ui'

const selected = ref(['Apple'])
<\/script>`,g=m({__name:"MultipleDoc",setup(p){const e=f(["Apple"]);return(s,l)=>(d(),u(b,{label:"Multiple",code:C},{description:o(()=>[r(" Multiple mode is enabled by default, v-model property refers to an array to bind the selected values ")]),example:o(()=>[t(c(k),null,{default:o(()=>[t(c(i),null,{default:o(()=>[r(" Selected values: "+v(e.value),1)]),_:1}),t(c(i),null,{default:o(()=>[t(c(n),{label:"Apple",value:"Apple",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a)},null,8,["modelValue"])]),_:1}),t(c(i),null,{default:o(()=>[t(c(n),{label:"Banana",value:"Banana",modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value=a)},null,8,["modelValue"])]),_:1}),t(c(i),null,{default:o(()=>[t(c(n),{label:"Chocolate",value:"Chocolate",modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}))}}),V=`<template>
  <Checkbox toggle v-model="checked" />
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox } from 'vue-fomantic-ui'

const checked = ref(false)
<\/script>`,y=m({__name:"ToggleDoc",setup(p){const e=f(!1);return(s,l)=>(d(),u(b,{label:"Toggle",code:V},{description:o(()=>[r(" A checkbox can toggle ")]),example:o(()=>[t(c(n),{toggle:"",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a)},null,8,["modelValue"])]),_:1}))}}),F=`<template>
  <Checkbox slider v-model="checked" />
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox } from 'vue-fomantic-ui'

const checked = ref(false)
<\/script>`,A=m({__name:"SliderDoc",setup(p){const e=f(!1);return(s,l)=>(d(),u(b,{label:"Slider",code:F},{description:o(()=>[r(" A checkbox can look like a slider ")]),example:o(()=>[t(c(n),{slider:"",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a)},null,8,["modelValue"])]),_:1}))}}),D={__name:"Checkbox",setup(p){const e=[{id:"checkbox",label:"Checkbox",category:"Types",component:x},{id:"multiple",label:"Multiple",category:"Types",component:g},{id:"toggle",label:"Toggle",category:"Types",component:y},{id:"slider",label:"Slider",category:"Types",component:A}],s={Checkbox:{props:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}};return(l,a)=>(d(),u(h,{title:"Checkbox",description:"A checkbox allows a user to select a value from a small set of options, often binary","component-docs":e,"api-docs":s}))}};export{D as default};
