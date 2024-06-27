import{o as s,c as a,w as e,a as p,b as t,u as i,$ as c,a0 as _,e as u,r,E as g,f as S,Y as v,d as h,D as b}from"./index-DuTVbzB3.js";import{_ as d}from"./DocSection-DD-a-yqL.js";import{_ as y}from"./paragraph-acT4RHv3.js";const C=`<template>
  <StepGroup>
    <Step>Shopping</Step>
  </StepGroup>
</template>`,G={__name:"StepDoc",setup(l){return(o,n)=>(s(),a(d,{label:"Step",code:C},{description:e(()=>[p(" A single step ")]),example:e(()=>[t(i(c),null,{default:e(()=>[t(i(_),null,{default:e(()=>[p("Shopping")]),_:1})]),_:1})]),_:1}))}},k=`<template>
  <StepGroup
    :steps="steps"
    :activeStep="active"
    no-completed
  >
  </StepGroup>
</template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", icon: "info" },
])
const active = ref(1)
<\/script>`,x=u({__name:"StepsDoc",setup(l){const o=r([{title:"Shipping",description:"Choose your shipping options",icon:"truck"},{title:"Billing",description:"Enter billing information",icon:"payment"},{title:"Confirm Order",icon:"info"}]),n=r(1);return(m,f)=>(s(),a(d,{label:"Steps",code:k},{description:e(()=>[p(" A set of steps ")]),example:e(()=>[t(i(c),{steps:o.value,activeStep:n.value,"no-completed":""},null,8,["steps","activeStep"])]),_:1}))}}),$=`<template>
  <StepGroup
    :steps="steps"
    :activeStep="active"
    ordered
  >
  </StepGroup>
</template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options" },
  { title: "Billing", description: "Enter billing information" },
  { title: "Confirm Order", description: "Verify order details" },
])
const active = ref(2)
<\/script>`,B=u({__name:"OrderedDoc",setup(l){const o=r([{title:"Shipping",description:"Choose your shipping options"},{title:"Billing",description:"Enter billing information"},{title:"Confirm Order",description:"Verify order details"}]),n=r(2);return(m,f)=>(s(),a(d,{label:"Ordered",code:$},{description:e(()=>[p(" A step can show a ordered sequence of steps ")]),example:e(()=>[t(i(c),{steps:o.value,activeStep:n.value,ordered:""},null,8,["steps","activeStep"])]),_:1}))}}),E=`<template>
  <StepGroup
    :steps="steps"
    :activeStep="active"
    vertical
  >
  </StepGroup>
</template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", description: "Verify order details", icon: "info" },
])
const active = ref(1)
<\/script>`,V=u({__name:"VerticalDoc",setup(l){const o=r([{title:"Shipping",description:"Choose your shipping options",icon:"truck"},{title:"Billing",description:"Enter billing information",icon:"payment"},{title:"Confirm Order",description:"Verify order details",icon:"info"}]),n=r(1);return(m,f)=>(s(),a(d,{label:"Vertical",code:E},{description:e(()=>[p(" A step can be displayed stacked vertically ")]),example:e(()=>[t(i(c),{steps:o.value,activeStep:n.value,vertical:""},null,8,["steps","activeStep"])]),_:1}))}}),D=`<template>
  <StepGroup>
    <Step
      title="Shipping"
      description="Choose your shipping options"
    />
  </StepGroup>
</template>`,A=u({__name:"DescriptionDoc",setup(l){return(o,n)=>(s(),a(d,{label:"Description",code:D},{description:e(()=>[p(" A step can contain a description ")]),example:e(()=>[t(i(c),null,{default:e(()=>[t(i(_),{title:"Shipping",description:"Choose your shipping options"})]),_:1})]),_:1}))}}),O=`<template>
  <StepGroup>
    <Step
      icon="truck"
      title="Shipping"
      description="Choose your shipping options"
    />
  </StepGroup>
</template>`,w=u({__name:"IconDoc",setup(l){return(o,n)=>(s(),a(d,{label:"Icon",code:O},{description:e(()=>[p(" A step can contain an icon ")]),example:e(()=>[t(i(c),null,{default:e(()=>[t(i(_),{icon:"truck",title:"Shipping",description:"Choose your shipping options"})]),_:1})]),_:1}))}}),z=`<template>
  <StepGroup>
    <Step
      active
      icon="payment"
      title="Billing"
      description="Enter billing information"
    />
  </StepGroup>
</template>`,I=u({__name:"ActiveDoc",setup(l){return(o,n)=>(s(),a(d,{label:"Active",code:z},{description:e(()=>[p(" A step can be highlighted as active ")]),example:e(()=>[t(i(c),null,{default:e(()=>[t(i(_),{active:"",icon:"payment",title:"Billing",description:"Enter billing information"})]),_:1})]),_:1}))}}),T=`<template>
  <StepGroup>
    <Step
      completed
      icon="payment"
      title="Billing"
      description="Enter billing information"
    />
  </StepGroup>
</template>`,F=u({__name:"CompletedDoc",setup(l){return(o,n)=>(s(),a(d,{label:"Completed",code:T},{description:e(()=>[p(" A step can show that a user has completed it ")]),example:e(()=>[t(i(c),null,{default:e(()=>[t(i(_),{completed:"",icon:"payment",title:"Billing",description:"Enter billing information"})]),_:1})]),_:1}))}}),N=`<template>
  <StepGroup>
    <Step disabled>
      Billing
    </Step>
  </StepGroup>
</template>`,U=u({__name:"DisabledDoc",setup(l){return(o,n)=>(s(),a(d,{label:"Disabled",code:N},{description:e(()=>[p(" A step can show that it cannot be selected ")]),example:e(()=>[t(i(c),null,{default:e(()=>[t(i(_),{disabled:""},{default:e(()=>[p(" Billing ")]),_:1})]),_:1})]),_:1}))}}),Y=`<template>
  <StepGroup
    stackable="tablet"
    noCompleted
    :steps="steps"
    :activeStep="active"
  >
  </StepGroup>
</template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "plane" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", description: "Verify order details", icon: "info" },
])
const active = ref(1)
<\/script>`,q=u({__name:"StackableDoc",setup(l){const o=r([{title:"Shipping",description:"Choose your shipping options",icon:"plane"},{title:"Billing",description:"Enter billing information",icon:"payment"},{title:"Confirm Order",description:"Verify order details",icon:"info"}]),n=r(1);return(m,f)=>(s(),a(d,{label:"Stackable",code:Y},{description:e(()=>[p(" A step can stack vertically only on smaller screens ")]),example:e(()=>[t(i(c),{stackable:"tablet",noCompleted:"",steps:o.value,activeStep:n.value},null,8,["steps","activeStep"])]),_:1}))}}),Q=`<template>
  <Grid :columns="2">
    <GridColumn>
      <StepGroup
        fluid
        vertical
        :steps="steps"
        :activeStep="active"
      >
      </StepGroup>
    </GridColumn>
    <GridColumn>
      The steps take up the entire column width
    </GridColumn>
  </Grid>
</template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "plane" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
])
const active = ref(1)
<\/script>`,R=u({__name:"FluidDoc",setup(l){const o=r([{title:"Shipping",description:"Choose your shipping options",icon:"plane"},{title:"Billing",description:"Enter billing information",icon:"dollar"}]),n=r(1);return(m,f)=>(s(),a(d,{label:"Fluid",code:Q},{description:e(()=>[p(" A fluid step takes up the width of its container ")]),example:e(()=>[t(i(g),{columns:2},{default:e(()=>[t(i(S),null,{default:e(()=>[t(i(c),{fluid:"",vertical:"",steps:o.value,activeStep:n.value},null,8,["steps","activeStep"])]),_:1}),t(i(S),null,{default:e(()=>[p(" The steps take up the entire column width ")]),_:1})]),_:1})]),_:1}))}}),j=`<template>
  <StepGroup
    unstackable
    :steps="steps"
    :activeStep="active"
    no-completed
  >
  </StepGroup>
</template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "dollar" },
  { title: "Confirm Order", description: "Verify order details", icon: "info circle" },
])
const active = ref(1)
<\/script>`,H=u({__name:"UnstackableDoc",setup(l){const o=r([{title:"Shipping",description:"Choose your shipping options",icon:"truck"},{title:"Billing",description:"Enter billing information",icon:"dollar"},{title:"Confirm Order",description:"Verify order details",icon:"info circle"}]),n=r(1);return(m,f)=>(s(),a(d,{label:"Unstackable",code:j},{description:e(()=>[p(" A step can prevent itself from stacking on mobile ")]),example:e(()=>[t(i(c),{unstackable:"",steps:o.value,activeStep:n.value,"no-completed":""},null,8,["steps","activeStep"])]),_:1}))}}),J=h("img",{src:y},null,-1),K=`<template>
  <StepGroup
    attached="top"
    :steps="steps"
    :activeStep="active"
  >
  </StepGroup>
  <Segment attached>
    <img src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
  </Segment>
</template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", description: "Verify order details", icon: "info" },
])
const active = ref(1)
<\/script>`,L=u({__name:"AttachedDoc",setup(l){const o=r([{title:"Shipping",description:"Choose your shipping options",icon:"truck"},{title:"Billing",description:"Enter billing information",icon:"payment"},{title:"Confirm Order",description:"Verify order details",icon:"info"}]),n=r(1);return(m,f)=>(s(),a(d,{label:"Attached",code:K},{description:e(()=>[p(" Steps can be attached to other elements ")]),example:e(()=>[t(i(c),{attached:"top",steps:o.value,activeStep:n.value},null,8,["steps","activeStep"]),t(i(v),{attached:""},{default:e(()=>[J]),_:1}),t(i(c),{attached:"bottom",steps:o.value,activeStep:n.value},null,8,["steps","activeStep"])]),_:1}))}}),M=`<template>
  <StepGroup
    size="mini"
    :steps="steps"
    :activeStep="active"
  >
  </StepGroup>
</template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", description: "Verify order details", icon: "info" },
])
const active = ref(1)
<\/script>`,P=u({__name:"SizeDoc",setup(l){const o=r([{title:"Shipping",description:"Choose your shipping options",icon:"truck"},{title:"Billing",description:"Enter billing information",icon:"payment"},{title:"Confirm Order",description:"Verify order details",icon:"info"}]),n=r(1);return(m,f)=>(s(),a(d,{label:"Size",code:M},{description:e(()=>[p(" Steps can have different sizes ")]),example:e(()=>[t(i(c),{size:"mini",steps:o.value,activeStep:n.value},null,8,["steps","activeStep"])]),_:1}))}}),W=`<template>
  <StepGroup
    :steps="steps"
    :activeStep="active"
    no-completed
  >
  </StepGroup>
</template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", icon: "info" },
])
const active = ref(1)
<\/script>`,X=u({__name:"InvertedDoc",setup(l){const o=r([{title:"Shipping",description:"Choose your shipping options",icon:"truck"},{title:"Billing",description:"Enter billing information",icon:"payment"},{title:"Confirm Order",icon:"info"}]),n=r(1);return(m,f)=>(s(),a(d,{label:"Inverted",code:W},{description:e(()=>[p(" A step's color can be inverted ")]),example:e(()=>[t(i(v),{inverted:""},{default:e(()=>[t(i(c),{inverted:"",steps:o.value,activeStep:n.value,"no-completed":""},null,8,["steps","activeStep"])]),_:1})]),_:1}))}}),ie={__name:"Step",setup(l){const o=[{id:"step",label:"Step",category:"Types",component:G},{id:"steps",label:"Steps",category:"Groups",component:x},{id:"ordered",label:"Ordered",category:"Groups",component:B},{id:"vertical",label:"Vertical",category:"Groups",component:V},{id:"description",label:"Description",category:"Content",component:A},{id:"icon",label:"Icon",category:"Content",component:w},{id:"active",label:"Active",category:"States",component:I},{id:"completed",label:"Completed",category:"States",component:F},{id:"disabled",label:"Disabled",category:"States",component:U},{id:"stackable",label:"Stackable",category:"Variations",component:q},{id:"fluid",label:"Fluid",category:"Variations",component:R},{id:"unstackable",label:"Unstackable",category:"Variations",component:H},{id:"attached",label:"Attached",category:"Variations",component:L},{id:"size",label:"Size",category:"Variations",component:P},{id:"inverted",label:"Inverted",category:"Variations",component:X}];return(n,m)=>(s(),a(b,{title:"Step",description:"A step shows the completion status of an activity in a series of activities","component-docs":o}))}};export{ie as default};
