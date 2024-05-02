import{r as b,o as c,c as l,w as t,a as i,b as e,u as o,O as n,t as g,Q as p,K as _,U as m,Y as f,I as d,d as B,e as v,D as h}from"./index-CFQxuMLK.js";import{_ as s}from"./DocSection-bYVctxpZ.js";const y=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,x={__name:"ButtonDoc",setup(r){const a=b("Follow"),u=()=>a.value=a.value==="Follow"?"Following":"Follow";return(S,Mt)=>(c(),l(s,{label:"Button",code:y},{description:t(()=>[i(" A standard button ")]),example:t(()=>[e(o(n),{onClick:u},{default:t(()=>[i(g(a.value),1)]),_:1})]),_:1}))}},w=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,k={__name:"EmphasisDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Emphasis",code:w},{description:t(()=>[i(" A button can be formatted to show different levels of emphasis ")]),example:t(()=>[e(o(n),{primary:""},{default:t(()=>[i("Save")]),_:1}),e(o(n),{secondary:""},{default:t(()=>[i("Okay")]),_:1}),e(o(n),null,{default:t(()=>[i("Cancel")]),_:1})]),_:1}))}},$=`<template>
  <SuiButton animated>
    <SuiButtonContent visible>Next</SuiButtonContent>
    <SuiButtonContent hidden>
      <SuiIcon name="arrow right" />
    </SuiButtonContent>
  </SuiButton>
  <SuiButton animated="vertical">
    <SuiButtonContent visible>
      <SuiIcon name="shop" />
    </SuiButtonContent>
    <SuiButtonContent hidden>Shop</SuiButtonContent>
  </SuiButton>
  <SuiButton animated="fade">
    <SuiButtonContent visible>
      Sign-up for a Pro account
    </SuiButtonContent>
    <SuiButtonContent hidden>$12.99 a month</SuiButtonContent>
  </SuiButton>
</template>`,G={__name:"AnimatedDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Animated",code:$},{description:t(()=>[i(" A button can animate to show hidden content ")]),example:t(()=>[e(o(n),{animated:""},{default:t(()=>[e(o(p),{visible:""},{default:t(()=>[i("Next")]),_:1}),e(o(p),{hidden:""},{default:t(()=>[e(o(_),{name:"arrow right"})]),_:1})]),_:1}),e(o(n),{animated:"vertical"},{default:t(()=>[e(o(p),{visible:""},{default:t(()=>[e(o(_),{name:"shop"})]),_:1}),e(o(p),{hidden:""},{default:t(()=>[i("Shop")]),_:1})]),_:1}),e(o(n),{animated:"fade"},{default:t(()=>[e(o(p),{visible:""},{default:t(()=>[i(" Sign-up for a Pro account ")]),_:1}),e(o(p),{hidden:""},{default:t(()=>[i("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},T=`<template>
  <SuiButton labeled="right" as="div">
    <SuiButton icon="heart" content=" Like" />
    <SuiLabel basic>2,048</SuiLabel>
  </SuiButton>
  <SuiButton labeled="left" as="div">
    <SuiLabel basic pointing="right">2,048</SuiLabel>
    <SuiButton icon="heart" content=" Like" />
  </SuiButton>
  <SuiButton labeled="left" as="div">
    <SuiLabel basic>1,048</SuiLabel>
    <SuiButton icon="fork" />
  </SuiButton>
</template>`,A={__name:"LabeledDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Labeled",code:T},{description:t(()=>[i(" A button can appear alongside a label ")]),example:t(()=>[e(o(n),{labeled:"right",as:"div"},{default:t(()=>[e(o(n),{icon:"heart",content:" Like"}),e(o(m),{basic:""},{default:t(()=>[i("2,048")]),_:1})]),_:1}),e(o(n),{labeled:"left",as:"div"},{default:t(()=>[e(o(m),{basic:"",pointing:"right"},{default:t(()=>[i("2,048")]),_:1}),e(o(n),{icon:"heart",content:" Like"})]),_:1}),e(o(n),{labeled:"left",as:"div"},{default:t(()=>[e(o(m),{basic:""},{default:t(()=>[i("1,048")]),_:1}),e(o(n),{icon:"fork"})]),_:1})]),_:1}))}},V=`<template>
  <SuiButton icon="cloud" />
</template>`,C={__name:"IconDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Icon",code:V},{description:t(()=>[i(" A button can have only an icon ")]),example:t(()=>[e(o(n),{icon:"cloud"})]),_:1}))}},D=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,L={__name:"LabeledIconDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Labeled Icon",code:D},{description:t(()=>[i(" A button can use an icon as a label ")]),example:t(()=>[e(o(n),{labeled:"",icon:"pause",content:"Pause"}),e(o(n),{labeled:"right",icon:"right arrow",content:"Next"}),e(o(n),{labeled:"",icon:""},{default:t(()=>[e(o(_),{loading:"",name:"spinner"}),i(" Loading ")]),_:1})]),_:1}))}},P=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,z={__name:"BasicDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Basic",code:P},{description:t(()=>[i(" A basic button is less pronounced ")]),example:t(()=>[e(o(n),{basic:"",primary:""},{default:t(()=>[i("Primary")]),_:1}),e(o(n),{basic:"",secondary:""},{default:t(()=>[i("Secondary")]),_:1}),e(o(n),{basic:"",positive:""},{default:t(()=>[i("Positive")]),_:1}),e(o(n),{basic:"",negative:""},{default:t(()=>[i("Negative")]),_:1})]),_:1}))}},F=`<template>
  <SuiButton tertiary primary>Primary</SuiButton>
  <SuiButton tertiary secondary>Secondary</SuiButton>
  <SuiButton tertiary color="red">Red</SuiButton>
  <SuiButton tertiary color="orange">Orange</SuiButton>
  <SuiButton tertiary color="yellow">Yellow</SuiButton>
  <SuiButton tertiary color="olive">Olive</SuiButton>
  <SuiButton tertiary color="green">Green</SuiButton>
  <SuiButton tertiary color="teal">Teal</SuiButton>
  <SuiButton tertiary color="blue">Blue</SuiButton>
  <SuiButton tertiary color="violet">Violet</SuiButton>
  <SuiButton tertiary color="purple">Purple</SuiButton>
  <SuiButton tertiary color="pink">Pink</SuiButton>
  <SuiButton tertiary color="brown">Brown</SuiButton>
  <SuiButton tertiary color="grey">Grey</SuiButton>
  <SuiButton tertiary color="black">Black</SuiButton>
</template>`,O={__name:"TertiaryDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Tertiary",code:F},{description:t(()=>[i(" An none bordered less important button ")]),example:t(()=>[e(o(n),{tertiary:"",primary:""},{default:t(()=>[i("Primary")]),_:1}),e(o(n),{tertiary:"",secondary:""},{default:t(()=>[i("Secondary")]),_:1}),e(o(n),{tertiary:"",color:"red"},{default:t(()=>[i("Red")]),_:1}),e(o(n),{tertiary:"",color:"orange"},{default:t(()=>[i("Orange")]),_:1}),e(o(n),{tertiary:"",color:"yellow"},{default:t(()=>[i("Yellow")]),_:1}),e(o(n),{tertiary:"",color:"olive"},{default:t(()=>[i("Olive")]),_:1}),e(o(n),{tertiary:"",color:"green"},{default:t(()=>[i("Green")]),_:1}),e(o(n),{tertiary:"",color:"teal"},{default:t(()=>[i("Teal")]),_:1}),e(o(n),{tertiary:"",color:"blue"},{default:t(()=>[i("Blue")]),_:1}),e(o(n),{tertiary:"",color:"violet"},{default:t(()=>[i("Violet")]),_:1}),e(o(n),{tertiary:"",color:"purple"},{default:t(()=>[i("Purple")]),_:1}),e(o(n),{tertiary:"",color:"pink"},{default:t(()=>[i("Pink")]),_:1}),e(o(n),{tertiary:"",color:"brown"},{default:t(()=>[i("Brown")]),_:1}),e(o(n),{tertiary:"",color:"grey"},{default:t(()=>[i("Grey")]),_:1}),e(o(n),{tertiary:"",color:"black"},{default:t(()=>[i("Black")]),_:1})]),_:1}))}},I=`<template>
  <SuiSegment inverted>
    <SuiButton inverted primary>Primary</SuiButton>
    <SuiButton inverted secondary>Secondary</SuiButton>
    <SuiButton inverted color="red">Red</SuiButton>
    <SuiButton inverted color="orange">Orange</SuiButton>
    <SuiButton inverted color="yellow">Yellow</SuiButton>
    <SuiButton inverted color="olive">Olive</SuiButton>
    <SuiButton inverted color="green">Green</SuiButton>
    <SuiButton inverted color="teal">Teal</SuiButton>
    <SuiButton inverted color="blue">Blue</SuiButton>
    <SuiButton inverted color="violet">Violet</SuiButton>
    <SuiButton inverted color="purple">Purple</SuiButton>
    <SuiButton inverted color="pink">Pink</SuiButton>
    <SuiButton inverted color="brown">Brown</SuiButton>
    <SuiButton inverted color="grey">Grey</SuiButton>
    <SuiButton inverted color="black">Black</SuiButton>
  </SuiSegment>
</template>`,q={__name:"InvertedDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Inverted",code:I},{description:t(()=>[i(" A button can be formatted to appear on dark backgrounds ")]),example:t(()=>[e(o(f),{inverted:""},{default:t(()=>[e(o(n),{inverted:"",primary:""},{default:t(()=>[i("Primary")]),_:1}),e(o(n),{inverted:"",secondary:""},{default:t(()=>[i("Secondary")]),_:1}),e(o(n),{inverted:"",color:"red"},{default:t(()=>[i("Red")]),_:1}),e(o(n),{inverted:"",color:"orange"},{default:t(()=>[i("Orange")]),_:1}),e(o(n),{inverted:"",color:"yellow"},{default:t(()=>[i("Yellow")]),_:1}),e(o(n),{inverted:"",color:"olive"},{default:t(()=>[i("Olive")]),_:1}),e(o(n),{inverted:"",color:"green"},{default:t(()=>[i("Green")]),_:1}),e(o(n),{inverted:"",color:"teal"},{default:t(()=>[i("Teal")]),_:1}),e(o(n),{inverted:"",color:"blue"},{default:t(()=>[i("Blue")]),_:1}),e(o(n),{inverted:"",color:"violet"},{default:t(()=>[i("Violet")]),_:1}),e(o(n),{inverted:"",color:"purple"},{default:t(()=>[i("Purple")]),_:1}),e(o(n),{inverted:"",color:"pink"},{default:t(()=>[i("Pink")]),_:1}),e(o(n),{inverted:"",color:"brown"},{default:t(()=>[i("Brown")]),_:1}),e(o(n),{inverted:"",color:"grey"},{default:t(()=>[i("Grey")]),_:1}),e(o(n),{inverted:"",color:"black"},{default:t(()=>[i("Black")]),_:1})]),_:1})]),_:1}))}},N=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,M={__name:"ButtonsDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Buttons",code:N},{description:t(()=>[i(" Buttons can exist together as a group ")]),example:t(()=>[e(o(d),null,{default:t(()=>[e(o(n),{content:"One"}),e(o(n),{content:"Two"}),e(o(n),{content:"Three"})]),_:1})]),_:1}))}},E=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,R={__name:"IconButtonsDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Icon Buttons",code:E},{description:t(()=>[i(" Button groups can show groups of icons ")]),example:t(()=>[e(o(d),{icon:""},{default:t(()=>[e(o(n),{icon:"align left"}),e(o(n),{icon:"align center"}),e(o(n),{icon:"align right"}),e(o(n),{icon:"align justify"})]),_:1})]),_:1}))}},Y=B("div",{class:"or"},null,-1),H=B("div",{class:"or","data-text":"ou"},null,-1),W=`<template>
  <SuiButtonGroup>
    <SuiButton content="Cancel" />
    <div class="or"></div>
    <SuiButton content="Save" positive />
  </SuiButtonGroup>
  <SuiButtonGroup>
    <SuiButton content="un" />
    <div class="or" data-text="ou"></div>
    <SuiButton content="deux" positive />
  </SuiButtonGroup>
</template>`,j={__name:"ConditionalsDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Conditionals",code:W},{description:t(()=>[i(" Button groups can contain conditionals ")]),example:t(()=>[e(o(d),null,{default:t(()=>[e(o(n),{content:"Cancel"}),Y,e(o(n),{content:"Save",positive:""})]),_:1}),e(o(d),null,{default:t(()=>[e(o(n),{content:"un"}),H,e(o(n),{content:"deux",positive:""})]),_:1})]),_:1}))}},K=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,Q={__name:"ActiveDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Active",code:K},{description:t(()=>[i(" A button can show it is currently the active user selection ")]),example:t(()=>[e(o(n),{active:"",icon:"user",content:" Follow"})]),_:1}))}},U=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,J={__name:"DisabledDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Disabled",code:U},{description:t(()=>[i(" A button can show it is currently unable to be interacted with ")]),example:t(()=>[e(o(n),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},X=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,Z={__name:"LoadingDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Loading",code:X},{description:t(()=>[i(" A button can show a loading indicator ")]),example:t(()=>[e(o(n),{loading:"",content:"Loading"}),e(o(n),{loading:"double",primary:"",content:"Loading"}),e(o(n),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},tt=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,et={__name:"SocialDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Social",code:tt},{description:t(()=>[i(" A button can be formatted to link to a social website ")]),example:t(()=>[e(o(n),{facebook:"",icon:"facebook",content:" Facebook"}),e(o(n),{twitter:"",icon:"twitter",content:" Twitter"}),e(o(n),{vk:"",icon:"vk",content:"VK"}),e(o(n),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),e(o(n),{instagram:"",icon:"instagram",content:" Instagram"}),e(o(n),{youtube:"",icon:"youtube",content:" YouTube"}),e(o(n),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),e(o(n),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},ot=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,nt={__name:"SizeDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Size",code:ot},{description:t(()=>[i(" A button can have different sizes ")]),example:t(()=>[e(o(n),{size:"mini",content:"Mini"}),e(o(n),{size:"tiny",content:"Tiny"}),e(o(n),{size:"small",content:"Small"}),e(o(n),{size:"medium",content:"Medium"}),e(o(n),{size:"large",content:"Large"}),e(o(n),{size:"big",content:"Big"}),e(o(n),{size:"huge",content:"Huge"}),e(o(n),{size:"massive",content:"Massive"})]),_:1}))}},it=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,at={__name:"FloatedDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Floated",code:it},{description:t(()=>[i(" A button can be aligned to the left or right of its container ")]),example:t(()=>[e(o(n),{floated:"left",content:"Left Floated"}),e(o(n),{floated:"right",content:"Right Floated"})]),_:1}))}},ut=`<template>
  <SuiButton color="red">Red</SuiButton>
  <SuiButton color="orange">Orange</SuiButton>
  <SuiButton color="yellow">Yellow</SuiButton>
  <SuiButton color="olive">Olive</SuiButton>
  <SuiButton color="green">Green</SuiButton>
  <SuiButton color="teal">Teal</SuiButton>
  <SuiButton color="blue">Blue</SuiButton>
  <SuiButton color="violet">Violet</SuiButton>
  <SuiButton color="purple">Purple</SuiButton>
  <SuiButton color="pink">Pink</SuiButton>
  <SuiButton color="brown">Brown</SuiButton>
  <SuiButton color="grey">Grey</SuiButton>
  <SuiButton color="black">Black</SuiButton>
</template>`,ct={__name:"ColoredDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Colored",code:ut},{description:t(()=>[i(" A button can have different colors ")]),example:t(()=>[e(o(n),{color:"red"},{default:t(()=>[i("Red")]),_:1}),e(o(n),{color:"orange"},{default:t(()=>[i("Orange")]),_:1}),e(o(n),{color:"yellow"},{default:t(()=>[i("Yellow")]),_:1}),e(o(n),{color:"olive"},{default:t(()=>[i("Olive")]),_:1}),e(o(n),{color:"green"},{default:t(()=>[i("Green")]),_:1}),e(o(n),{color:"teal"},{default:t(()=>[i("Teal")]),_:1}),e(o(n),{color:"blue"},{default:t(()=>[i("Blue")]),_:1}),e(o(n),{color:"violet"},{default:t(()=>[i("Violet")]),_:1}),e(o(n),{color:"purple"},{default:t(()=>[i("Purple")]),_:1}),e(o(n),{color:"pink"},{default:t(()=>[i("Pink")]),_:1}),e(o(n),{color:"brown"},{default:t(()=>[i("Brown")]),_:1}),e(o(n),{color:"grey"},{default:t(()=>[i("Grey")]),_:1}),e(o(n),{color:"black"},{default:t(()=>[i("Black")]),_:1})]),_:1}))}},lt=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,rt={__name:"CompactDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Compact",code:lt},{description:t(()=>[i(" A button can reduce its padding to fit into tighter spaces ")]),example:t(()=>[e(o(n),{compact:"",content:"Hold"}),e(o(n),{compact:"",icon:"pause"}),e(o(n),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},st=`<template>
  <SuiButton
    toggle
    :active="active"
    :onClick="() => active = !active"
    :content="active ? 'Voted' : 'Vote'"
    style="min-width: 200px;"
  />
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const active = ref(false)
<\/script>`,dt={__name:"ToggleDoc",setup(r){const a=b(!1);return(u,S)=>(c(),l(s,{label:"Toggle",code:st},{description:t(()=>[i(" A button can be formatted to toggle on and off ")]),example:t(()=>[e(o(n),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},pt=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,_t={__name:"PositiveDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Positive",code:pt},{description:t(()=>[i(" A button can hint towards a positive consequence ")]),example:t(()=>[e(o(n),{positive:"",content:"Positive Button"})]),_:1}))}},mt=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,Bt={__name:"NegativeDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Negative",code:mt},{description:t(()=>[i(" A button can hint towards a negative consequence ")]),example:t(()=>[e(o(n),{negative:"",content:"Negative Button"})]),_:1}))}},St=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,bt={__name:"FluidDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Fluid",code:St},{description:t(()=>[i(" A button can take the width of its container ")]),example:t(()=>[e(o(n),{fluid:"",content:"Fits container"})]),_:1}))}},ft=`<template>
  <SuiButton circular icon="settings" />
</template>`,gt={__name:"CircularDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Circular",code:ft},{description:t(()=>[i(" A button can be circular ")]),example:t(()=>[e(o(n),{circular:"",icon:"settings"})]),_:1}))}},vt=B("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),ht=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,yt={__name:"VerticallyAttachedDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Vertically Attached",code:ht},{description:t(()=>[i(" A button can be attached to the top or bottom of other content ")]),example:t(()=>[e(o(n),{attached:"top",content:"Top"}),e(o(f),{attached:""},{default:t(()=>[vt]),_:1}),e(o(n),{attached:"bottom",content:"Bottom"})]),_:1}))}},xt=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,wt={__name:"HorizontallyAttachedDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Horizontally Attached",code:xt},{description:t(()=>[i(" A button can be attached to the left or right of other content ")]),example:t(()=>[e(o(n),{attached:"left",content:"Left"}),e(o(n),{attached:"right",content:"Right"})]),_:1}))}},kt=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,$t={__name:"VerticalButtonsDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Vertical Buttons",code:kt},{description:t(()=>[i(" Groups can be formatted to appear vertically ")]),example:t(()=>[e(o(d),{vertical:""},{default:t(()=>[e(o(n),null,{default:t(()=>[i("Feed")]),_:1}),e(o(n),null,{default:t(()=>[i("Messages")]),_:1}),e(o(n),null,{default:t(()=>[i("Events")]),_:1}),e(o(n),null,{default:t(()=>[i("Photos")]),_:1})]),_:1})]),_:1}))}},Gt=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,Tt={__name:"StackableButtonsDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Stackable Buttons",code:Gt},{description:t(()=>[i(" Horizontal groups can automatically be stacked on mobile devices ")]),example:t(()=>[e(o(d),{stackable:""},{default:t(()=>[e(o(n),null,{default:t(()=>[i("Feed")]),_:1}),e(o(n),null,{default:t(()=>[i("Messages")]),_:1}),e(o(n),null,{default:t(()=>[i("Events")]),_:1}),e(o(n),null,{default:t(()=>[i("Photos")]),_:1})]),_:1})]),_:1}))}},At=`<template>
  <ButtonGroup vertical labeled icon>
    <Button icon="pause" content="Pause" />
    <Button icon="play" content="Play" />
    <Button icon="shuffle" content="Shuffle" />
  </ButtonGroup>
</template>`,Vt=v({__name:"LabeledIconButtonsDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Labeled Icon Buttons",code:At},{description:t(()=>[i(" Groups can be formatted as labeled icons ")]),example:t(()=>[e(o(d),{vertical:"",labeled:"",icon:""},{default:t(()=>[e(o(n),{icon:"pause",content:"Pause"}),e(o(n),{icon:"play",content:"Play"}),e(o(n),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}}),Ct=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,Dt={__name:"MixedGroupDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Mixed Group",code:Ct},{description:t(()=>[i(" Button groups can show groups of icons ")]),example:t(()=>[e(o(d),null,{default:t(()=>[e(o(n),{labeled:"",icon:"left chevron",content:"Back"}),e(o(n),{icon:"stop",content:"Stop"}),e(o(n),{icon:"",labeled:"right"},{default:t(()=>[e(o(_),{name:"right chevron"}),i(" Forward ")]),_:1})]),_:1})]),_:1}))}},Lt=`<template>
  <SuiButtonGroup :widths="5">
    <SuiButton>Overview</SuiButton>
    <SuiButton>Specs</SuiButton>
    <SuiButton>Warranty</SuiButton>
    <SuiButton>Reviews</SuiButton>
    <SuiButton>Support</SuiButton>
  </SuiButtonGroup>
  <SuiButtonGroup :widths="3">
    <SuiButton>Overview</SuiButton>
    <SuiButton>Specs</SuiButton>
    <SuiButton>Support</SuiButton>
  </SuiButtonGroup>
</template>`,Pt={__name:"EqualWidthDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Equal Width",code:Lt},{description:t(()=>[i(" Groups can have their widths divided evenly ")]),example:t(()=>[e(o(d),{widths:5},{default:t(()=>[e(o(n),null,{default:t(()=>[i("Overview")]),_:1}),e(o(n),null,{default:t(()=>[i("Specs")]),_:1}),e(o(n),null,{default:t(()=>[i("Warranty")]),_:1}),e(o(n),null,{default:t(()=>[i("Reviews")]),_:1}),e(o(n),null,{default:t(()=>[i("Support")]),_:1})]),_:1}),e(o(d),{widths:3},{default:t(()=>[e(o(n),null,{default:t(()=>[i("Overview")]),_:1}),e(o(n),null,{default:t(()=>[i("Specs")]),_:1}),e(o(n),null,{default:t(()=>[i("Support")]),_:1})]),_:1})]),_:1}))}},zt=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Ft={__name:"ColoredButtonsDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Colored Buttons",code:zt},{description:t(()=>[i(" Groups can have a shared color ")]),example:t(()=>[e(o(d),{color:"blue"},{default:t(()=>[e(o(n),null,{default:t(()=>[i("One")]),_:1}),e(o(n),null,{default:t(()=>[i("Two")]),_:1}),e(o(n),null,{default:t(()=>[i("Three")]),_:1})]),_:1})]),_:1}))}},Ot=`<template>
  <SuiButtonGroup basic>
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
  <SuiButtonGroup>
    <SuiButton basic color="red">One</SuiButton>
    <SuiButton basic color="blue">Two</SuiButton>
    <SuiButton basic color="green">Three</SuiButton>
  </SuiButtonGroup>
</template>`,It={__name:"BasicButtonsDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Basic Buttons",code:Ot},{description:t(()=>[i(" A button group can be less pronounced ")]),example:t(()=>[e(o(d),{basic:""},{default:t(()=>[e(o(n),null,{default:t(()=>[i("One")]),_:1}),e(o(n),null,{default:t(()=>[i("Two")]),_:1}),e(o(n),null,{default:t(()=>[i("Three")]),_:1})]),_:1}),e(o(d),null,{default:t(()=>[e(o(n),{basic:"",color:"red"},{default:t(()=>[i("One")]),_:1}),e(o(n),{basic:"",color:"blue"},{default:t(()=>[i("Two")]),_:1}),e(o(n),{basic:"",color:"green"},{default:t(()=>[i("Three")]),_:1})]),_:1})]),_:1}))}},qt=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Nt={__name:"GroupSizesDoc",setup(r){return(a,u)=>(c(),l(s,{label:"Group Sizes",code:qt},{description:t(()=>[i(" Groups can have a shared color ")]),example:t(()=>[e(o(d),{size:"large"},{default:t(()=>[e(o(n),null,{default:t(()=>[i("One")]),_:1}),e(o(n),null,{default:t(()=>[i("Two")]),_:1}),e(o(n),null,{default:t(()=>[i("Three")]),_:1})]),_:1})]),_:1}))}},Yt={__name:"Button",setup(r){const a=[{id:"button",label:"Button",category:"Types",component:x},{id:"emphasis",label:"Emphasis",category:"Types",component:k},{id:"animated",label:"Animated",category:"Types",component:G},{id:"labeled",label:"Labeled",category:"Types",component:A},{id:"icon",label:"Icon",category:"Types",component:C},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:L},{id:"basic",label:"Basic",category:"Types",component:z},{id:"tertiary",label:"Tertiary",category:"Types",component:O},{id:"inverted",label:"Inverted",category:"Types",component:q},{id:"buttons",label:"Buttons",category:"Groups",component:M},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:R},{id:"content",label:"Content",category:"Content",component:j},{id:"active",label:"Active",category:"States",component:Q},{id:"disabled",label:"Disabled",category:"States",component:J},{id:"loading",label:"Loading",category:"States",component:Z},{id:"social",label:"Social",category:"Variations",component:et},{id:"size",label:"Size",category:"Variations",component:nt},{id:"floated",label:"Floated",category:"Variations",component:at},{id:"colored",label:"Colored",category:"Variations",component:ct},{id:"compact",label:"Compact",category:"Variations",component:rt},{id:"toggle",label:"Toggle",category:"Variations",component:dt},{id:"positive",label:"Positive",category:"Variations",component:_t},{id:"negative",label:"Negative",category:"Variations",component:Bt},{id:"fluid",label:"Fluid",category:"Variations",component:bt},{id:"circular",label:"Circular",category:"Variations",component:gt},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:yt},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:wt},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:$t},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:Tt},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:Vt},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:Dt},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:Pt},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Ft},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:It},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Nt}];return(u,S)=>(c(),l(h,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}};export{Yt as default};
