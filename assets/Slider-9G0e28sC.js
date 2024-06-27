import{e as u,r as d,o,c as n,w as a,a as i,b as v,u as s,aU as p,t as _,Y as V,y as g,A as S,C as y,D as x}from"./index-DuTVbzB3.js";import{_ as m}from"./DocSection-DD-a-yqL.js";const k=`<template>
  <Slider v-model="value" />
  Slider value: {{ value }}
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(5)
<\/script>`,$=u({__name:"SliderDoc",setup(c){const e=d(5);return(r,l)=>(o(),n(m,{label:"Slider",code:k},{description:a(()=>[i(" A standard slider ")]),example:a(()=>[v(s(p),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t)},null,8,["modelValue"]),i(" Slider value: "+_(e.value),1)]),_:1}))}}),w=`<template>
  <Slider labeled v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(4)
<\/script>`,h=u({__name:"LabeledSliderDoc",setup(c){const e=d(4);return(r,l)=>(o(),n(m,{label:"Labeled Slider",code:w},{description:a(()=>[i(" A slider that show its labels ")]),example:a(()=>[v(s(p),{labeled:"",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t)},null,8,["modelValue"])]),_:1}))}}),A=`<template>
  <Slider labeled="ticked" v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(6)
<\/script>`,D=u({__name:"LabeledTickedSliderDoc",setup(c){const e=d(6);return(r,l)=>(o(),n(m,{label:"Labeled Ticked Slider",code:A},{description:a(()=>[i(" A slider that show its labels and ticks ")]),example:a(()=>[v(s(p),{labeled:"ticked",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t)},null,8,["modelValue"])]),_:1}))}}),C=`<template>
  <Slider
    v-model="value"
    labeled="ticked"
    :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
    :max="20"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref()
<\/script>`,U=u({__name:"CustomInterpretedLabelsDoc",setup(c){const e=d();return(r,l)=>(o(),n(m,{label:"Custom Interpreted Labels",code:C},{description:a(()=>[i(" You can provide a function which returns a custom label according to the label value ")]),example:a(()=>[v(s(p),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1}))}}),z=`<template>
  <Slider v-model="value" labeled :step="5" :max="120" :min="20" />
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(40)
<\/script>`,L=u({__name:"StepDoc",setup(c){const e=d(40);return(r,l)=>(o(),n(m,{label:"Step",code:z},{description:a(()=>[i(" A slider can change the default step increment ")]),example:a(()=>[v(s(p),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),labeled:"",step:5,max:120,min:20},null,8,["modelValue"])]),_:1}))}}),T=`<template>
  <Slider
    v-model="value"
    range
    labeled="ticked"
    :min="5"
    :max="100"
    :step="5"
  />
  Slider value: {{ value }}
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref([20, 60])
<\/script>`,I=u({__name:"RangeDoc",setup(c){const e=d([20,60]);return(r,l)=>(o(),n(m,{label:"Range",code:T},{description:a(()=>[i(" A range slider which allow you to select a range between two values ")]),example:a(()=>[v(s(p),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),i(" Slider value: "+_(e.value),1)]),_:1}))}}),R=`<template>
  <Slider v-model="value" disabled />
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(7)
<\/script>`,B=u({__name:"DisabledDoc",setup(c){const e=d(7);return(r,l)=>(o(),n(m,{label:"Disabled",code:R},{description:a(()=>[i(" A slider can appear disabled ")]),example:a(()=>[v(s(p),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),disabled:""},null,8,["modelValue"])]),_:1}))}}),W=`<template>
  <Segment inverted>
    <Slider v-model="value" inverted />
  </Segment>
</template>

<script setup>
import { ref } from 'vue'
import { Slider, Segment } from 'vue-fomantic-ui'

const value = ref(8)
<\/script>`,Y=u({__name:"InvertedDoc",setup(c){const e=d(8);return(r,l)=>(o(),n(m,{label:"Inverted",code:W},{description:a(()=>[i(" A slider can be inverted ")]),example:a(()=>[v(s(V),{inverted:""},{default:a(()=>[v(s(p),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),inverted:""},null,8,["modelValue"])]),_:1})]),_:1}))}}),H=`<template>
  <Slider v-model="value" reversed />
  Slider value: {{ value }}
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(5)
<\/script>`,M=u({__name:"ReversedDoc",setup(c){const e=d(5);return(r,l)=>(o(),n(m,{label:"Reversed",code:H},{description:a(()=>[i(" A slider can be reversed ")]),example:a(()=>[v(s(p),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),reversed:""},null,8,["modelValue"]),i(" Slider value: "+_(e.value),1)]),_:1}))}}),N=`<template>
  <Slider v-model="value" vertical />
  Slider value: {{ value }}
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(5)
<\/script>`,E=u({__name:"VerticalDoc",setup(c){const e=d(5);return(r,l)=>(o(),n(m,{label:"Vertical",code:N},{description:a(()=>[i(" A slider can be vertical ")]),example:a(()=>[v(s(p),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),vertical:""},null,8,["modelValue"]),i(" Slider value: "+_(e.value),1)]),_:1}))}}),F=`<template>
  <Slider
    v-for="color in colors"
    :key="color"
    :color="color"
    v-model="value"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(5)
const colors = ref([
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
])
<\/script>`,j=u({__name:"ColoredDoc",setup(c){const e=d(5),r=d(["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]);return(l,t)=>(o(),n(m,{label:"Colored",code:F},{description:a(()=>[i(" A slider can be different colors ")]),example:a(()=>[(o(!0),g(S,null,y(r.value,f=>(o(),n(s(p),{key:f,color:f,modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=b=>e.value=b)},null,8,["color","modelValue"]))),128))]),_:1}))}}),q=`<template>
  <Segment inverted>
    <Slider
      v-for="color in colors"
      :key="color"
      :color="color"
      inverted
      v-model="value"
    />
  </Segment>
</template>

<script setup>
import { ref } from 'vue'
import { Slider, Segment } from 'vue-fomantic-ui'
const value = ref(5)
const colors = ref([
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
])
<\/script>`,G=u({__name:"InvertedColoredDoc",setup(c){const e=d(5),r=d(["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]);return(l,t)=>(o(),n(m,{label:"Inverted Colored",code:q},{description:a(()=>[i(" A slider can be different colors while inverted ")]),example:a(()=>[v(s(V),{inverted:""},{default:a(()=>[(o(!0),g(S,null,y(r.value,f=>(o(),n(s(p),{key:f,color:f,inverted:"",modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=b=>e.value=b)},null,8,["color","modelValue"]))),128))]),_:1})]),_:1}))}}),J=`<template>
  <Slider
    v-for="size in sizes"
    :key="size"
    :size="size"
    v-model="value"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(5)
const sizes = ref([
  'small',
  'medium',
  'large',
  'big',
])
<\/script>`,K=u({__name:"SizeDoc",setup(c){const e=d(5),r=d(["small","medium","large","big"]);return(l,t)=>(o(),n(m,{label:"Size",code:J},{description:a(()=>[i(" A slider can have different sizes ")]),example:a(()=>[(o(!0),g(S,null,y(r.value,f=>(o(),n(s(p),{key:f,size:f,modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=b=>e.value=b)},null,8,["size","modelValue"]))),128))]),_:1}))}}),Q={__name:"Slider",setup(c){const e=[{id:"slider",label:"Slider",category:"Types",component:$},{id:"labeled-slider",label:"Labeled Slider",category:"Types",component:h},{id:"labeled-ticked-slider",label:"Labeled Ticked Slider",category:"Types",component:D},{id:"custom-interpreted-labels",label:"Custom Interpreted Labels",category:"Types",component:U},{id:"step",label:"Step",category:"Types",component:L},{id:"range",label:"Range",category:"Types",component:I},{id:"disabled",label:"Disabled",category:"Variations",component:B},{id:"inverted",label:"Inverted",category:"Variations",component:Y},{id:"reversed",label:"Reversed",category:"Variations",component:M},{id:"vertical",label:"Vertical",category:"Variations",component:E},{id:"colored",label:"Colored",category:"Variations",component:j},{id:"inverted-colored",label:"Inverted Colored",category:"Variations",component:G},{id:"size",label:"Size",category:"Variations",component:K}],r={Slider:{props:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}};return(l,t)=>(o(),n(x,{title:"Slider",description:"A slider allows users to select values within a range","component-docs":e,"api-docs":r}))}};export{Q as default};