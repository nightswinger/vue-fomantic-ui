import{e as v,r as l,o as d,c as m,w as o,a as f,b as n,u as c,aT as h,O as g,d as t,Y as b,av as r,D as x}from"./index-DuTVbzB3.js";import{_}from"./DocSection-DD-a-yqL.js";const S=`<template>
  <Sidebar v-model:visible="visible" :items="items" />
  <Button icon="plus" @click="visible = !visible" />
</template>

<script setup>
import { ref } from 'vue'
import { Sidebar, Button } from 'vue-fomantic-ui'

const visible = ref(false)
const items = [
  { text: 1 },
  { text: 2 },
  { text: 3 },
]
<\/script>`,k=v({__name:"SidebarDoc",setup(p){const e=l(!1),s=[{text:1},{text:2},{text:3}];return(u,i)=>(d(),m(_,{label:"Sidebar",code:S},{description:o(()=>[f(" A sidebar ")]),example:o(()=>[n(c(h),{visible:e.value,"onUpdate:visible":i[0]||(i[0]=a=>e.value=a),items:s},null,8,["visible"]),n(c(g),{icon:"plus",onClick:i[1]||(i[1]=a=>e.value=!e.value)})]),_:1}))}}),y={class:"ui top attached demo menu"},C=t("i",{class:"sidebar icon"},null,-1),w={class:"pusher"},B=t("h3",{class:"ui header"},"Application Content",-1),$=t("img",{src:r},null,-1),V=t("img",{src:r},null,-1),A=t("img",{src:r},null,-1),D=t("img",{src:r},null,-1),O=`<template>
  <div class="ui top attached demo menu">
    <a class="item" @click="visible = !visible">
      <i class="sidebar icon"></i>
      Menu
    </a>
  </div>
  <Segment attached="bottom">
    <Sidebar
      v-model:visible="visible"
      :items="items"
      icon="labeled"
      :mountOnBody="false"
      v-bind="args"
    />
    <div class="pusher">
      <Segment basic>
        <h3 class="ui header">Application Content</h3>
        <img src="./wireframe/short-paragraph.png" />
        <img src="./wireframe/short-paragraph.png" />
        <img src="./wireframe/short-paragraph.png" />
        <img src="./wireframe/short-paragraph.png" />
      </Segment>
    </div>
  </Segment>
</template>

<script setup>
import { ref } from 'vue'
import { Sidebar, Segment } from 'vue-fomantic-ui'

const visible = ref(false)
const items = ref([
  { icon: 'gamepad', text: 'Games' },
  { icon: 'video camera', text: 'Channels' },
  { icon: 'video play', text: 'Videos' },
])
<\/script>`,G=v({__name:"SidebarPusherDoc",setup(p){const e=l(!1),s=l([{icon:"gamepad",text:"Games"},{icon:"video camera",text:"Channels"},{icon:"video play",text:"Videos"}]);return(u,i)=>(d(),m(_,{code:O},{example:o(()=>[t("div",y,[t("a",{class:"item",onClick:i[0]||(i[0]=a=>e.value=!e.value)},[C,f(" Menu ")])]),n(c(b),{attached:"bottom"},{default:o(()=>[n(c(h),{visible:e.value,"onUpdate:visible":i[1]||(i[1]=a=>e.value=a),items:s.value,icon:"labeled",mountOnBody:!1},null,8,["visible","items"]),t("div",w,[n(c(b),{basic:""},{default:o(()=>[B,$,V,A,D]),_:1})])]),_:1})]),_:1}))}}),M={__name:"Sidebar",setup(p){const e=[{id:"sidebar",label:"Sidebar",category:"Types",component:[k,G]}],s={Sidebar:{props:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}};return(u,i)=>(d(),m(x,{title:"Sidebar",description:"A sidebar hides additional content beside a page.","component-docs":e,"api-docs":s}))}};export{M as default};
