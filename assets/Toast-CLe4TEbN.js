import{aX as m,m as h,o as l,c as r,w as t,a,b as i,d as S,r as b,u as f,O as d,aa as _,K as w,D as k}from"./index-CFQxuMLK.js";import{_ as p}from"./DocSection-bYVctxpZ.js";const B=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,v={__name:"MinimalDoc",setup(u){const{toast:e}=m(),s=()=>{e({message:"I am a toast, nice to meet you !"})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Minimal",code:B},{description:t(()=>[a(" A minimal toast will just display a message. ")]),example:t(()=>[i(n,{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1})}}},T=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    title: 'Better ?',
    message: 'Hey look, I have a title !'
  })
}
<\/script>`,x={__name:"TitledDoc",setup(u){const{toast:e}=m(),s=()=>{e({title:"Better ?",message:"Hey look, I have a title !"})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Titled",code:T},{description:t(()=>[a(" You can add a title to your toast. ")]),example:t(()=>[i(n,{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1})}}},$=`<template>
  <SuiButton @click="show">Show</SuiButton>
  <SuiButton color="red" @click="show('red')">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (color) => {
  toast({
    title: 'LOOK',
    message: 'See, how long i will last',
    showProgress: 'bottom',
    showProgressColor: color,
  })
}
<\/script>`,C={__name:"ProgressBarDoc",setup(u){const{toast:e}=m(),s=o=>{e({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Progress Bar",code:$},{description:t(()=>[a(" You can attach a progress bar to your toast. ")]),example:t(()=>[i(n,{onClick:s},{default:t(()=>[a("Show")]),_:1}),i(n,{color:"red",onClick:c[0]||(c[0]=g=>s("red"))},{default:t(()=>[a("Show")]),_:1})]),_:1})}}},Y=`<template>
  <SuiButton @click="show('success')" positive>Success</SuiButton>
  <SuiButton @click="show('error')" negative>Error</SuiButton>
  <SuiButton @click="show('warning')" color="yellow">Warning</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (type) => {
  toast({
    message: 'You're using the good framework !',
    type,
  })
}
<\/script>`,I={__name:"ToastTypeDoc",setup(u){const{toast:e}=m(),s=o=>{e({message:"You're using the good framework !",type:o})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Toast Type",code:Y},{description:t(()=>[a(" A toast can be used to display different types of informations. ")]),example:t(()=>[i(n,{onClick:c[0]||(c[0]=g=>s("success")),positive:""},{default:t(()=>[a("Success")]),_:1}),i(n,{onClick:c[1]||(c[1]=g=>s("error")),negative:""},{default:t(()=>[a("Error")]),_:1}),i(n,{onClick:c[2]||(c[2]=g=>s("warning")),color:"yellow"},{default:t(()=>[a("Warning")]),_:1})]),_:1})}}},D=`<template>
  <SuiButton @click="show('top left')">Top Left</SuiButton>
  <SuiButton @click="show('bottom right')">Bottom Right</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (position) => {
  toast({
    position,
    message: 'Look, I'm here !'
  })
}
<\/script>`,P={__name:"PositionDoc",setup(u){const{toast:e}=m(),s=o=>{e({position:o,message:"Look, I'm here !"})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Position",code:D},{description:t(()=>[a(" A toast can appear at different positions on the screen. ")]),example:t(()=>[i(n,{onClick:c[0]||(c[0]=g=>s("top left"))},{default:t(()=>[a("Top Left")]),_:1}),i(n,{onClick:c[1]||(c[1]=g=>s("bottom right"))},{default:t(()=>[a("Bottom Right")]),_:1})]),_:1})}}},A=S("br",null,null,-1),V=`<template>
  <SuiButton @click="show('top')">Top</SuiButton>
  <SuiButton @click="show('bottom')">Bottom</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (attached) => {
  toast({
    attached,
    title: 'Watch out!',
    message: 'I am a ' + attached + ' attached toast'
  })
}
<\/script>`,U={__name:"AttachedPosition",setup(u){const{toast:e}=m(),s=o=>{e({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Attached Position",code:V},{description:t(()=>[a(" A toast can have an attached position which will show the toast over the whole width of the screen."),A,a(" Just like notifications on mobile devices. ")]),example:t(()=>[i(n,{onClick:c[0]||(c[0]=g=>s("top"))},{default:t(()=>[a("Top")]),_:1}),i(n,{onClick:c[1]||(c[1]=g=>s("bottom"))},{default:t(()=>[a("Bottom")]),_:1})]),_:1})}}},F=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    horizontal: true,
    position: 'top left',
    title: 'Watch out!',
    message: 'Next one will open to the right'
  })
}
<\/script>`,M={__name:"DirectionDoc",setup(u){const{toast:e}=m(),s=()=>{e({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Direction",code:F},{description:t(()=>[a(" Toasts can stack horizontal ")]),example:t(()=>[i(n,{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1})}}},O=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    centered: true,
    title: 'Veronika has joined',
    message: 'Welcome to the Fomantic-UI community!'
  })
}
<\/script>`,L={__name:"CenterAligned",setup(u){const{toast:e}=m(),s=()=>{e({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Center Aligned",code:O},{description:t(()=>[a(" The toasts content can be shown center aligned. ")]),example:t(()=>[i(n,{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1})}}},W=`<template>
  <SuiButton @click="show(5000)">5 seconds</SuiButton>
  <SuiButton @click="show(0)">Stay</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (displayTime) => {
  toast({
    displayTime,
    message: displayTime === 0 ? 'I'll stay here until you click on me !' : 'You will see me for 5 seconds.'
  })
}
<\/script>`,j={__name:"DurationDoc",setup(u){const{toast:e}=m(),s=o=>{e({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Duration",code:W},{description:t(()=>[a(" You can choose how long a toast should be displayed. ")]),example:t(()=>[i(n,{onClick:c[0]||(c[0]=g=>s(5e3))},{default:t(()=>[a("5 seconds")]),_:1}),i(n,{onClick:c[1]||(c[1]=g=>s(0))},{default:t(()=>[a("Stay")]),_:1})]),_:1})}}},K=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    messageStyle: true,
    message: 'I got my style from the message class',
    color: 'purple',
  })
}
<\/script>`,N={__name:"MessageStyleDoc",setup(u){const{toast:e}=m(),s=()=>{e({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Use Message Style",code:K},{description:t(()=>[a(" You can use all of the styles and colors from the message component. ")]),example:t(()=>[i(n,{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1})}}},R=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    title: 'LOOK',
    message: 'See, how long i will last',
    showProgress: 'top',
    showProgressUp: true
  })
}
<\/script>`,z={__name:"IncreasingProgressBarDoc",setup(u){const{toast:e}=m(),s=()=>{e({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,c)=>{const n=h("SuiButton");return l(),r(p,{label:"Increasing Progress Bar",code:R},{description:t(()=>[a(" You can use the progress bar to show the progress of a task. ")]),example:t(()=>[i(n,{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1})}}},G=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { ref }  from 'vue'
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const index = ref(0)
const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']

const show = () => {
  toast({
    color: colors[index.value],
    message: 'I am a colorful toast',
    showProgress: 'bottom',
  })
  index.value = (index.value + 1) % colors.length
}
<\/script>`,E={__name:"ColorVariantsDoc",setup(u){const{toast:e}=m(),s=b(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],c=()=>{e({color:o[s.value],message:"I am a colorful toast",showProgress:"bottom"}),s.value=(s.value+1)%o.length};return(n,g)=>{const y=h("SuiButton");return l(),r(p,{label:"Color Variants",code:G},{description:t(()=>[a(" You can use all of the usual color names. ")]),example:t(()=>[i(y,{onClick:c},{default:t(()=>[a("Show")]),_:1})]),_:1})}}},H={__name:"InvertedColorsDoc",setup(u){const{toast:e}=m(),s=b(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],c=()=>{e({color:o[s.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),s.value=(s.value+1)%o.length};return(n,g)=>{const y=h("SuiButton");return l(),r(p,{label:"Inverted Colors",code:n.code},{description:t(()=>[a(" Same as above, just add inverted to the class definition. ")]),example:t(()=>[i(y,{onClick:c},{default:t(()=>[a("Show")]),_:1})]),_:1},8,["code"])}}},J=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { h } from 'vue'
import { useToast } from 'vue-fomantic-ui'
import { SuiButton, SuiIcon } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actions: ({ close }) => [
      h(SuiButton,
        {
          color: 'green',
          onclick: () => {
            toast({ message: 'You clicked "yes", toast closes by default' });
            close();
          }
        },
        () => [h(SuiIcon, { name: 'check' }), 'Yes']
      ),
      h(SuiButton, { color: 'red', icon: true }, () => [h(SuiIcon, { name: 'ban' })]),
      h(SuiButton,
        {
          color: 'blue',
          onclick: () => toast({ message: 'Returning false from the click handler avoids closing the toast' }),
        },
        () => '?'
      ),
    ],
  })
}
<\/script>`,X={__name:"ActionGeneralDoc",setup(u){const{toast:e}=m(),s=()=>{e({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[_(d,{color:"green",onclick:()=>{e({message:'You clicked "yes", toast closes by default'}),o()}},()=>[_(w,{name:"check"}),"Yes"]),_(d,{color:"red",icon:!0},()=>[_(w,{name:"ban"})]),_(d,{color:"blue",onclick:()=>e({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,c)=>(l(),r(p,{label:"General",code:J},{description:t(()=>[a(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:t(()=>[i(f(d),{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1}))}},q=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { h } from 'vue'
import { useToast, SuiButton } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actions: ({ close }) => [
      h(SuiButton,
        {
          color: 'yellow',
          onclick: () => {
            toast({ message: 'You clicked "yes", toast closes by default' })
            close()
          }
        },
        () => 'Yes, really'
      ),
    ],
    actionsProps: { basic: true, aligned: 'left' },
  })
}
<\/script>`,Q={__name:"ActionBasicDoc",setup(u){const{toast:e}=m(),s=()=>{e({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[_(d,{color:"yellow",onclick:()=>{e({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,c)=>(l(),r(p,{label:"Basic",code:q},{description:t(()=>[a(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:t(()=>[i(f(d),{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1}))}},Z=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { h } from 'vue'
import { useToast, SuiButton } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actions: ({ close }) => [
      h(SuiButton,
        {
          color: 'green',
          onclick: () => {
            toast({ message: 'You clicked "yes", toast closes by default' })
            close()
          }
        },
        () => 'Yes, really'
      ),
      h(SuiButton,
        {
          color: 'red',
          onclick: () => {
            toast({ message: 'You clicked "maybe", toast closes by default' })
            close()
          }
        },
        () => 'Maybe later'
      )
    ],
    actionsProps: { attached: 'top' },
  })
}
<\/script>`,tt={__name:"ActionAttachedDoc",setup(u){const{toast:e}=m(),s=()=>{e({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[_(d,{color:"green",onclick:()=>{e({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),_(d,{color:"red",onclick:()=>{e({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,c)=>(l(),r(p,{label:"Attached",code:Z},{description:t(()=>[a(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:t(()=>[i(f(d),{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1}))}},ot=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { h } from 'vue'
import { useToast, SuiButton } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actions: ({ close }) => [
      h(SuiButton,
        {
          color: 'green',
          onclick: () => {
            toast({ message: 'You clicked "yes", toast closes by default' })
            close()
          }
        },
        () => 'Yes, really'
      ),
      h(SuiButton,
        {
          color: 'red',
          onclick: () => {
            toast({ message: 'You clicked "maybe", toast closes by default' })
            close()
          }
        },
        () => 'Maybe later'
      )
    ],
    actionsProps: { vertical: true },
  })
}
<\/script>`,et={__name:"ActionVerticalDoc",setup(u){const{toast:e}=m(),s=()=>{e({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[_(d,{color:"green",onclick:()=>{e({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),_(d,{color:"red",onclick:()=>{e({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,c)=>(l(),r(p,{label:"Vertical",code:ot},{description:t(()=>[a(" You can use vertical to display your actions to the right of the toast. ")]),example:t(()=>[i(f(d),{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1}))}},st=S("br",null,null,-1),at=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { h } from 'vue'
import { useToast, SuiButton } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actions: ({ close }) => [
      h(SuiButton,
        {
          color: 'green',
          onclick: () => {
            toast({ message: 'You clicked "yes", toast closes by default' })
            close()
          }
        },
        () => 'Yes, really'
      ),
      h(SuiButton,
        {
          color: 'red',
          onclick: () => {
            toast({ message: 'You clicked "maybe", toast closes by default' })
            close()
          }
        },
        () => 'Maybe later'
      )
    ],
    actionsProps: { attached: 'left', vertical: true },
  })
}
<\/script>`,ct={__name:"ActionVerticalAttachedDoc",setup(u){const{toast:e}=m(),s=()=>{e({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[_(d,{color:"green",onclick:()=>{e({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),_(d,{color:"red",onclick:()=>{e({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,c)=>(l(),r(p,{label:"Vertical Attached",code:at},{description:t(()=>[a(" Vertical actions can also be displayed as button groups using vertical attached."),st,a(" Vertical attached actions also support left. ")]),example:t(()=>[i(f(d),{onClick:s},{default:t(()=>[a("Show")]),_:1})]),_:1}))}},lt={__name:"Toast",setup(u){const e=[{id:"minimal",label:"Minimal",category:"Types",component:v},{id:"titled",label:"Titled",category:"Types",component:x},{id:"progress-bar",label:"Progress Bar",category:"Types",component:C},{id:"toast-type",label:"Toast Type",category:"Variations",component:I},{id:"position",label:"Position",category:"Variations",component:P},{id:"attached-position",label:"Attached Position",category:"Variations",component:U},{id:"direction",label:"Direction",category:"Variations",component:M},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:L},{id:"duration",label:"Duration",category:"Variations",component:j},{id:"message-style",label:"Use Message Style",category:"Variations",component:N},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:z},{id:"color-variants",label:"Color Variants",category:"Variations",component:E},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:H},{id:"general",label:"General",category:"Actions",component:X},{id:"action-basic",label:"Basic",category:"Actions",component:Q},{id:"action-attached",label:"Attached",category:"Actions",component:tt},{id:"action-vertical",label:"Vertical",category:"Actions",component:et},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:ct}];return(s,o)=>(l(),r(k,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":e}))}};export{lt as default};
