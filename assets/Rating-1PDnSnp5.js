import{e as p,r as d,o as a,c as s,w as t,a as m,b as i,u as l,aS as g,y as r,A as f,C as _,j as b,D as R}from"./index-DQYazn23.js";import{_ as v}from"./DocSection--cc-x1DM.js";const x=`<template>
  <Rating v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const value = ref(0)
<\/script>`,h=p({__name:"RatingDoc",setup(u){const o=d(0);return(c,n)=>(a(),s(v,{label:"Rating",code:x},{description:t(()=>[m(" A Basic rating ")]),example:t(()=>[i(l(g),{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=e=>o.value=e)},null,8,["modelValue"])]),_:1}))}}),k=`<template>
  <div
    v-for="rating in ratings"
    :key="rating.icon"
  >
    <Rating
      :defaultRating="2"
      :maxRating="4"
      :icon="rating.icon"
      :color="rating.color"
    />
    <Divider hidden />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Rating, Divider } from 'vue-fomantic-ui'

const ratings = ref([
  { color: 'yellow' },
  { icon: 'heart', color: 'red' },
  { icon: 'female', color: 'purple' },
  { icon: 'male', color: 'blue' },
  { icon: 'cloud', color: 'grey' },
  { icon: 'cat', color: 'pink' },
  { icon: 'circle', color: 'orange' },
])
<\/script>`,w=p({__name:"IconDoc",setup(u){const o=d([{color:"yellow"},{icon:"heart",color:"red"},{icon:"female",color:"purple"},{icon:"male",color:"blue"},{icon:"cloud",color:"grey"},{icon:"cat",color:"pink"},{icon:"circle",color:"orange"}]);return(c,n)=>(a(),s(v,{label:"Icon",code:k},{description:t(()=>[m(" You can use any available icon as rating indicator ")]),example:t(()=>[(a(!0),r(f,null,_(o.value,e=>(a(),r("div",{key:e.icon},[i(l(g),{defaultRating:2,maxRating:4,icon:e.icon,color:e.color},null,8,["icon","color"]),i(l(b),{hidden:""})]))),128))]),_:1}))}}),D=`<template>
  <div
    v-for="(color, i) in colors"
    :key="i"
  >
    <Rating
      :defaultRating="i"
      :maxRating="colors.length"
      :color="color"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

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
<\/script>`,z=p({__name:"ColorDoc",setup(u){const o=d(["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]);return(c,n)=>(a(),s(v,{label:"Color",code:D},{description:t(()=>[m(" You can specify any color of the FUI color palette ")]),example:t(()=>[(a(!0),r(f,null,_(o.value,(e,y)=>(a(),r("div",{key:y},[i(l(g),{defaultRating:y,maxRating:o.value.length,color:e},null,8,["defaultRating","maxRating","color"])]))),128))]),_:1}))}}),$=`<template>
  <div
    v-for="rating in ratings"
    :key="rating.color"
  >
    <Rating
      :defaultRating="rating.value"
      :maxRating="5"
      :color="rating.color"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const ratings = ref([
  { color: 'black', value: 0.5 },
  { color: 'pink', value: 1.25 },
  { color: 'red', value: 1.775 },
  { color: 'yellow', value: 2.5 },
  { color: 'green', value: 3.225 },
  { color: 'purple', value: 3.65 },
  { color: 'blue', value: 4.375 },
  { color: 'brown', value: 4.75 },
])
<\/script>`,V=p({__name:"PartialRatingsDoc",setup(u){const o=d([{color:"black",value:.5},{color:"pink",value:1.25},{color:"red",value:1.775},{color:"yellow",value:2.5},{color:"green",value:3.225},{color:"purple",value:3.65},{color:"blue",value:4.375},{color:"brown",value:4.75}]);return(c,n)=>(a(),s(v,{label:"Partial Ratings",code:$},{description:t(()=>[m(" You can use decimal values for showing partially filled ratings ")]),example:t(()=>[(a(!0),r(f,null,_(o.value,e=>(a(),r("div",{key:e.color},[i(l(g),{defaultRating:e.value,maxRating:5,color:e.color},null,8,["defaultRating","color"])]))),128))]),_:1}))}}),A=`<template>
  <Rating disabled v-model="value" :maxRating="5" color="yellow" />
</template>

<script setup>
import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const value = ref(3)
<\/script>`,C=p({__name:"DisabledDoc",setup(u){const o=d(3);return(c,n)=>(a(),s(v,{label:"Disabled",code:A},{description:t(()=>[m(" A rating can be started in non-interactive mode by adding a disabled class ")]),example:t(()=>[i(l(g),{disabled:"",modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=e=>o.value=e),maxRating:5,color:"yellow"},null,8,["modelValue"])]),_:1}))}}),T=`<template>
  <div
    v-for="size in sizes"
    :key="size"
  >
    <Rating :size="size" :defaultRating="3" :maxRating="4" color="yellow" />
    <Divider hidden />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Rating, Divider } from 'vue-fomantic-ui'

const sizes = ref([
  'mini',
  'tiny',
  'small',
  'medium',
  'large',
  'huge',
  'massive',
])
<\/script>`,S=p({__name:"SizeDoc",setup(u){const o=d(["mini","tiny","small","medium","large","huge","massive"]);return(c,n)=>(a(),s(v,{label:"Size",code:T},{description:t(()=>[m(" A rating can vary in size ")]),example:t(()=>[(a(!0),r(f,null,_(o.value,e=>(a(),r("div",{key:e},[i(l(g),{size:e,defaultRating:3,maxRating:4,color:"yellow"},null,8,["size"]),i(l(b),{hidden:""})]))),128))]),_:1}))}}),P={__name:"Rating",setup(u){const o=[{id:"rating",label:"Rating",category:"Types",component:h},{id:"icon",label:"Icon",category:"Types",component:w},{id:"color",label:"Color",category:"Types",component:z},{id:"partial-ratings",label:"Partial Ratings",category:"Types",component:V},{id:"disabled",label:"Disabled",category:"States",component:C},{id:"size",label:"Size",category:"Variations",component:S}],c={Rating:{props:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}};return(n,e)=>(a(),s(R,{title:"Rating",description:"A rating indicates user interest in content","component-docs":o,"api-docs":c}))}};export{P as default};
