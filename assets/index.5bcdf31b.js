import{d as E,r as u,c as I,o as z,u as Fe,a as V,b as d,e,w as t,F as H,f as O,p as le,g as ne,h as i,t as P,v as Se,i as T,j as qe,k as Me,l as Le,m as Ie,n as Je,q as He}from"./vendor.0ebba445.js";const Oe=function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const $ of document.querySelectorAll('link[rel="modulepreload"]'))y($);new MutationObserver($=>{for(const A of $)if(A.type==="childList")for(const b of A.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&y(b)}).observe(document,{childList:!0,subtree:!0});function C($){const A={};return $.integrity&&(A.integrity=$.integrity),$.referrerpolicy&&(A.referrerPolicy=$.referrerpolicy),$.crossorigin==="use-credentials"?A.credentials="include":$.crossorigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function y($){if($.ep)return;$.ep=!0;const A=C($);fetch($.href,A)}};Oe();var x=(s,g)=>{const C=s.__vccOpts||s;for(const[y,$]of g)C[y]=$;return C};const Ge=E({name:"App"});function Ue(s,g,C,y,$,A){const b=u("router-view");return z(),I(b)}var Ye=x(Ge,[["render",Ue]]);const We=E({name:"Sidebar",setup(){const s=Fe();return{isActive:b=>s.path===b,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"}]}}}),ze=s=>(le("data-v-101414dd"),s=s(),ne(),s),Ke={class:"sidemenu"},Qe={style:{flex:"1","overflow-y":"scroll"}},Xe=ze(()=>d("strong",null," Fomantic UI Vue ",-1)),Ze=ze(()=>d("b",null,"Getting Started",-1));function et(s,g,C,y,$,A){const b=u("sui-menu-item"),_=u("sui-menu-header"),o=u("sui-menu-menu"),l=u("sui-menu");return z(),V("div",Ke,[d("div",Qe,[e(l,{fluid:"",inverted:"",vertical:""},{default:t(()=>[e(b,{as:"div"},{default:t(()=>[Xe]),_:1}),e(b,{as:"router-link",to:"/"},{default:t(()=>[Ze]),_:1}),e(b,{as:"div"},{default:t(()=>[e(_,{content:"Elements"}),e(o,null,{default:t(()=>[(z(!0),V(H,null,O(s.elements,r=>(z(),I(b,{key:r.name,name:r.name,to:r.path,active:s.isActive(r.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(b,{as:"div"},{default:t(()=>[e(_,{content:"Collections"}),e(o,null,{default:t(()=>[(z(!0),V(H,null,O(s.collections,r=>(z(),I(b,{key:r.name,name:r.name,to:r.path,active:s.isActive(r.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(b,{as:"div"},{default:t(()=>[e(_,{content:"Views"}),e(o,null,{default:t(()=>[(z(!0),V(H,null,O(s.views,r=>(z(),I(b,{key:r.name,name:r.name,to:r.path,active:s.isActive(r.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(b,{as:"div"},{default:t(()=>[e(_,{content:"Modules"}),e(o,null,{default:t(()=>[(z(!0),V(H,null,O(s.modules,r=>(z(),I(b,{key:r.name,name:r.name,to:r.path,active:s.isActive(r.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})])])}var tt=x(We,[["render",et],["__scopeId","data-v-101414dd"]]);const it=E({name:"Home",components:{Sidebar:tt}}),st={class:"article"};function ot(s,g,C,y,$,A){const b=u("sidebar"),_=u("router-view");return z(),V("div",null,[e(b),d("div",st,[e(_)])])}var at=x(it,[["render",ot]]);const lt=E({name:"DocPageHeader",props:{title:String,sub:String}}),nt={class:"intro"};function ut(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment");return z(),I(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",nt,[e(_,{as:"h1"},{default:t(()=>[i(P(s.title)+" ",1),e(b,null,{default:t(()=>[i(P(s.sub),1)]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}var j=x(lt,[["render",ut]]);const dt=E({name:"GettingStarted",components:{Prism:Se,DocPageHeader:j}}),ue=s=>(le("data-v-4bf2e10a"),s=s(),ne(),s),rt=i("Install"),ct=ue(()=>d("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),mt=i("via Package Manager"),_t=i(P(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`)),pt=i("Usage"),ht=ue(()=>d("p",null," You can import all components as Vue plugin. ",-1)),gt=ue(()=>d("br",null,null,-1)),ft=ue(()=>d("p",null," Or pick a component indivisually, add it to your components option. ",-1));function bt(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("prism"),l=u("sui-container");return z(),V("div",null,[e(b,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),e(l,{class:"main"},{default:t(()=>[e(_,{as:"h2"},{default:t(()=>[rt]),_:1}),ct,e(_,{as:"h3"},{default:t(()=>[mt]),_:1}),e(o,{language:"bash"},{default:t(()=>[_t]),_:1}),e(_,{as:"h2"},{default:t(()=>[pt]),_:1}),ht,e(o,{language:"js"},{default:t(()=>[i(P(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),gt,ft,e(o,{language:"js"},{default:t(()=>[i(P(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}var vt=x(dt,[["render",bt],["__scopeId","data-v-4bf2e10a"]]);const $t=E({name:"DocExample",components:{Prism:Se},props:{title:String,description:String,code:String},setup(){const s=T(!1);return{active:s,toggle:()=>s.value=!s.value}}}),wt={class:"example"};function Ct(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-grid-column"),l=u("sui-icon"),r=u("sui-grid-row"),n=u("prism"),h=u("sui-grid");return z(),V("div",wt,[e(h,{columns:2},{default:t(()=>[e(r,null,{default:t(()=>[e(o,null,{default:t(()=>[e(_,{as:"h3"},{default:t(()=>[i(P(s.title)+" ",1),e(b,null,{default:t(()=>[i(P(s.description),1)]),_:1})]),_:1})]),_:1}),e(o,{textAlign:"right"},{default:t(()=>[e(l,{name:"code",color:"grey",onClick:s.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(o,{width:16},{default:t(()=>[qe(s.$slots,"default")]),_:3}),s.active?(z(),I(o,{key:0,width:16},{default:t(()=>[e(n,{language:"markup"},{default:t(()=>[i(P(s.code),1)]),_:1})]),_:1})):Me("",!0)]),_:3})]),_:3})])}var B=x($t,[["render",Ct]]),D="/vue-fomantic-ui/images/wireframe/paragraph.png";const yt=E({name:"ButtonDoc",components:{DocExample:B},setup(){const s=T(!1);return{active:s,toggle:()=>s.value=!s.value,buttonExample:`<template>
  <sui-button>Follow</sui-button>
</template>`,emphasisExample:`<template>
  <div>
    <sui-button primary>Primary</sui-button>
    <sui-button secondary>Secondary</sui-button>
  </div>
</template>`,animatedExample:`<template>
  <div>
    <sui-button animated>
      <sui-button-content visible>Next</sui-button-content>
      <sui-button-content hidden>
        <sui-icon name="arrow right" />
      </sui-button-content>
    </sui-button>
    <sui-button animated="vertical">
      <sui-button-content visible>
        <sui-icon name="shop" />
      </sui-button-content>
      <sui-button-content hidden>Shop</sui-button-content>
    </sui-button>
    <sui-button animated="fade">
      <sui-button-content visible>
        Sign-up for a Pro account
      </sui-button-content>
      <sui-button-content hidden>$12.99 a month</sui-button-content>
    </sui-button>
  </div>
<template>`,labeledExample:`<sui-button labelPosition="right" as="div">
  <sui-button icon>
    <sui-icon name="heart" />
    Like
  </sui-button>
  <sui-label basic>2,048</sui-label>
</sui-button>
<sui-button labelPosition="left" as="div">
  <sui-label basic pointing="right">2,048</sui-label>
  <sui-button icon>
    <sui-icon name="heart" />
    Like
  </sui-button>
</sui-button>
<sui-button labelPosition="left" as="div">
  <sui-label basic>1,048</sui-label>
  <sui-button icon>
    <sui-icon name="fork" />
  </sui-button>
</sui-button>`,labeledExample2:`<sui-button labelPosition="right" as="div">
  <sui-button icon color="red">
    <sui-icon name="heart" />
    Like
  </sui-button>
  <sui-label basic pointing="left" color="red">
    1,048
  </sui-label>
</sui-button>
<sui-button labelPosition="right" as="div">
  <sui-button basic icon color="blue">
    <sui-icon name="fork" />
    Forks
  </sui-button>
  <sui-label basic pointing="left" color="blue">
    1,048
  </sui-label>
</sui-button>`,iconExample:`<template>
  <sui-button icon>
    <sui-icon name="cloud" />
  </sui-button>
</template>`,labeledIconExample:`<template>
  <div>
    <sui-button labeled icon>
      <sui-icon name="pause" />
      Pause
    </sui-button>
    <sui-button labeled="right" icon>
      <sui-icon name="right arrow" />
      Next
    </sui-button>
  <div>
</template>`,basicExample:`<template>
  <sui-button basic>
    <sui-icon name="user" />
    Add Friend
  </sui-button>
</template>`,basicExample2:`<template>
  <div>
    <sui-button basic primary>Primary</sui-button>
    <sui-button basic secondary>Secondary</sui-button>
    <sui-button basic positive>Positive</sui-button>
    <sui-button basic negative>Negative</sui-button>
  </div>
</template>`,basicExample3:`<template>
  <div>
    <sui-button basic color="red">Red</sui-button>
    <sui-button basic color="orange">Orange</sui-button>
    <sui-button basic color="yellow">Yellow</sui-button>
    <sui-button basic color="olive">Olive</sui-button>
    <sui-button basic color="green">Green</sui-button>
    <sui-button basic color="teal">Teal</sui-button>
    <sui-button basic color="blue">Blue</sui-button>
    <sui-button basic color="violet">Violet</sui-button>
    <sui-button basic color="purple">Purple</sui-button>
    <sui-button basic color="pink">Pink</sui-button>
    <sui-button basic color="brown">Brown</sui-button>
    <sui-button basic color="grey">Grey</sui-button>
    <sui-button basic color="black">Black</sui-button>
  </div>
</template>`,invertedExample:`<template>
  <sui-segment inverted>
    <sui-button inverted>Standard</sui-button>
    <sui-button inverted primary>Primary</sui-button>
    <sui-button inverted secondary>Secondary</sui-button>
    <sui-button inverted color="red">Red</sui-button>
    <sui-button inverted color="orange">Orange</sui-button>
    <sui-button inverted color="yellow">Yellow</sui-button>
    <sui-button inverted color="olive">Olive</sui-button>
    <sui-button inverted color="green">Green</sui-button>
    <sui-button inverted color="teal">Teal</sui-button>
    <sui-button inverted color="blue">Blue</sui-button>
    <sui-button inverted color="violet">Violet</sui-button>
    <sui-button inverted color="purple">Purple</sui-button>
    <sui-button inverted color="pink">Pink</sui-button>
    <sui-button inverted color="brown">Brown</sui-button>
    <sui-button inverted color="grey">Grey</sui-button>
    <sui-button inverted color="black">Black</sui-button>
  </sui-segment>
</template>`,invertedExample2:`<template>
  <sui-segment inverted>
    <sui-button inverted basic>Basic</sui-button>
    <sui-button inverted basic primary>Primary</sui-button>
    <sui-button inverted basic secondary>Secondary</sui-button>
    <sui-button inverted basic color="red">Basic Red</sui-button>
    <sui-button inverted basic color="orange">Basic Orange</sui-button>
    <sui-button inverted basic color="yellow">Basic Yellow</sui-button>
    <sui-button inverted basic color="olive">Basic Olive</sui-button>
    <sui-button inverted basic color="green">Basic Green</sui-button>
    <sui-button inverted basic color="teal">Basic Teal</sui-button>
    <sui-button inverted basic color="blue">Basic Blue</sui-button>
    <sui-button inverted basic color="violet">Basic Violet</sui-button>
    <sui-button inverted basic color="purple">Basic Purple</sui-button>
    <sui-button inverted basic color="pink">Basic Pink</sui-button>
    <sui-button inverted basic color="brown">Basic Brown</sui-button>
    <sui-button inverted basic color="grey">Basic Grey</sui-button>
    <sui-button inverted basic color="black">Basic Black</sui-button>
  </sui-segment>
</template>`,buttonsExample:`<template>
  <sui-button-group>
    <sui-button>One</sui-button>
    <sui-button>Two</sui-button>
    <sui-button>Three</sui-button>
  </sui-button-group>
</template>`,iconButtonsExample:`<template>
  <div>
    <sui-button-group icon>
      <sui-button><sui-icon name="align left" /></sui-button>
      <sui-button><sui-icon name="align center" /></sui-button>
      <sui-button><sui-icon name="align right" /></sui-button>
      <sui-button><sui-icon name="align justify" /></sui-button>
    </sui-button-group>
    <sui-button-group icon>
      <sui-button><sui-icon name="bold" /></sui-button>
      <sui-button><sui-icon name="underline" /></sui-button>
      <sui-button><sui-icon name="text width" /></sui-button>
    </sui-button-group>
  </div>
</template>`,conditionalsExample:`<template>
  <sui-button-group>
    <sui-button>Cancel</sui-button>
    <div class="or"></div>
    <sui-button positive>Save</sui-button>
  </sui-button-group>
</template>`,conditionalsExample2:`<template>
  <sui-button-group>
    <sui-button>Cancel</sui-button>
    <div class="or" data-text="ou"></div>
    <sui-button positive>Save</sui-button>
  </sui-button-group>
</template>`,activeExample:`<template>
  <sui-button active>
    <sui-icon name="user" />
    Follow
  </sui-button>
</template>`,disabledExample:`<template>
  <sui-button disabled>
    <sui-icon name="user" />
    Followed
  </sui-button>
</template>`,loadingExample:`<template>
  <div>
    <sui-button loading>Loading</sui-button>
    <sui-button basic loading>Loading</sui-button>
    <sui-button primary loading>Loading</sui-button>
    <sui-button secondary loading>Loading</sui-button>
  </div>
</template>`,socialExample:`<template>
  <div>
    <sui-button facebook>
      <sui-icon name="facebook" />
      Facebook
    </sui-button>
    <sui-button twitter>
      <sui-icon name="twitter" />
      Twitter
    </sui-button>
    <sui-button vk>
      <sui-icon name="vk" />
      VK
    </sui-button>
    <sui-button linkedin>
      <sui-icon name="linkedin" />
      LinkedIn
    </sui-button>
    <sui-button instagram>
      <sui-icon name="instagram" />
      Instagram
    </sui-button>
    <sui-button youtube>
      <sui-icon name="youtube" />
      YouTube
    </sui-button>
  </div>
</template>`,sizeExample:`<template>
  <div>
    <sui-button size="mini">Mini</sui-button>
    <sui-button size="tiny">Tiny</sui-button>
    <sui-button size="small">Small</sui-button>
    <sui-button size="medium">Medium</sui-button>
    <sui-button size="large">Large</sui-button>
    <sui-button size="big">Big</sui-button>
    <sui-button size="huge">Huge</sui-button>
    <sui-button size="massive">Massive</sui-button>
  </div>
</template>`,floatedExample:`<template>
  <div>
    <sui-button floated="left">Left Floated</sui-button>
    <sui-button floated="right">Right Floated</sui-button>
  </div>
</template>`,coloredExample:`<template>
  <div>
    <sui-button color="red">Red</sui-button>
    <sui-button color="orange">Orange</sui-button>
    <sui-button color="yellow">Yellow</sui-button>
    <sui-button color="olive">Olive</sui-button>
    <sui-button color="green">Green</sui-button>
    <sui-button color="teal">Teal</sui-button>
    <sui-button color="blue">Blue</sui-button>
    <sui-button color="violet">Violet</sui-button>
    <sui-button color="purple">Purple</sui-button>
    <sui-button color="pink">Pink</sui-button>
    <sui-button color="brown">Brown</sui-button>
    <sui-button color="grey">Grey</sui-button>
    <sui-button color="black">Black</sui-button>
  </div>
</template>`,compactExample:`<template>
  <div>
    <sui-button compact>Compact</sui-button>
    <sui-button>Normal</sui-button>
  </div>
</template>`,toggleExample:`<template>
  <sui-button toggle :active="active" @click="() => active = !active">Vote</sui-button>
</template>`,positiveExample:`<template>
  <sui-button positive>Positive</sui-button>
</template>`,negativeExample:`<template>
  <sui-button negative>Negative</sui-button>
</template>`,fluidExample:`<template>
  <sui-button fluid>Fluid</sui-button>
</template>`,circularExample:`<template>
  <sui-button circular icon>
    <sui-icon name="settings" />
  </sui-button>
</template>`,circularExample2:`<template>
  <div>
    <sui-button facebook circular icon>
      <sui-icon name="facebook" />
    </sui-button>
    <sui-button twitter circular icon>
      <sui-icon name="twitter" />
    </sui-button>
    <sui-button linkedin circular icon>
      <sui-icon name="linkedin" />
    </sui-button>
    <sui-button youtube circular icon>
      <sui-icon name="youtube" />
    </sui-button>
  </div>
</template>`,attachedExample:`<template>
  <div>
    <sui-button attached="top">Top</sui-button>
    <sui-segment attached>
      <img src="/images/wireframe/paragraph.png">
    </sui-segment>
    <sui-button attached="bottom">Bottom</sui-button>
  </div>
</template>`,attachedExample2:`<template>
  <div>
    <sui-button-group attached="top">
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
    </sui-button-group>
    <sui-segment attached>
      <img src="/images/wireframe/paragraph.png">
    </sui-segment>
    <sui-button-group attached="bottom">
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
    </sui-button-group>
  </div>
</template>`,horizontalAttachedExample:`<tempalte>
  <div>
    <sui-button attached="left">Left</sui-button>
    <sui-button attached="right">Right</sui-button>
  </div>
</template>`,verticalButtonsExample:`<template>
  <sui-button-group vertical>
    <sui-button>Feed</sui-button>
    <sui-button>Messages</sui-button>
    <sui-button>Events</sui-button>
    <sui-button>Photos</sui-button>
  </sui-button-group>
</template>`,labeledIconButtonsExample:`<template>
  <sui-button-group vertical labeled icon>
    <sui-button>
      <sui-icon name="pause" />
      Pause
    </sui-button>
    <sui-button>
      <sui-icon name="play" />
      Play
    </sui-button>
    <sui-button>
      <sui-icon name="shuffle" />
      Shuffle
    </sui-button>
  </sui-button-group>
</template>`,mixedGroupExample:`<template>
  <sui-button-group>
    <sui-button labelPosition="left" icon>
      <sui-icon name="left chevron" />
      Back
    </sui-button>
    <sui-button>
      <sui-icon name="stop" />
      Stop
    </sui-button>
    <sui-button labelPosition="right" icon>
      <sui-icon name="right chevron" />
      Forward
    </sui-button>
  </sui-button-group>
</template>`,equalWidthExample:`<template>
  <div>
    <sui-button-group :widths="5">
      <sui-button>Overview</sui-button>
      <sui-button>Specs</sui-button>
      <sui-button>Warranty</sui-button>
      <sui-button>Reviews</sui-button>
      <sui-button>Support</sui-button>
    </sui-button-group>
    <sui-divider />
    <sui-button-group :widths="3">
      <sui-button>Overview</sui-button>
      <sui-button>Specs</sui-button>
      <sui-button>Support</sui-button>
    </sui-button-group>
  </div>
</template>`,coloredButtonsExample:`<template>
  <sui-button-group color="blue">
    <sui-button>One</sui-button>
    <sui-button>Two</sui-button>
    <sui-button>Three</sui-button>
  </sui-button-group>
</template>`,basicButtonsExample:`<template>
  <div>
    <sui-button-group basic>
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
      <sui-button>Three</sui-button>
    </sui-button-group>
    <sui-divider />
    <sui-button-group basic vertical>
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
      <sui-button>Three</sui-button>
    </sui-button-group>
  </div>
</template>`,basicButtonsExample2:`<template>
  <sui-button-group>
    <sui-button basic color="red">One</sui-button>
    <sui-button basic color="blue">Two</sui-button>
    <sui-button basic color="green">Three</sui-button>
  </sui-button-group>
</template>`,groupSizesExample:`<template>
  <sui-button-group size="large">
    <sui-button>One</sui-button>
    <sui-button>Two</sui-button>
    <sui-button>Three</sui-button>
  </sui-button-group>
</template>`,groupSizesExample2:`<template>
  <sui-button-group basic icon size="small">
    <sui-button><sui-icon name="file" /></sui-button>
    <sui-button><sui-icon name="save" /></sui-button>
    <sui-button><sui-icon name="upload" /></sui-button>
    <sui-button><sui-icon name="download" /></sui-button>
  </sui-button-group>
</template>`,groupSizesExample3:`<template>
  <sui-button-group size="large">
    <sui-button>One</sui-button>
    <div class="or"></div>
    <sui-button>Two</sui-button>
  </sui-button-group>
</template>`}}}),X=s=>(le("data-v-7ebf685c"),s=s(),ne(),s),At={class:"intro"},kt=i("Button "),St=i("A button indicates a possible user action"),zt=i("Types"),Tt=i("Follow"),Rt=i("Primary"),Vt=i("Secondary"),Et=i("Next"),xt=i("Shop"),Dt=i(" Sign-up for a Pro account "),Bt=i("$12.99 a month"),Nt=i(" Like "),Pt=i("2,048"),jt=i("2,048"),Ft=i(" Like "),qt=i("1,048"),Mt=i(" Like "),Lt=i(" 1,048 "),It=i(" Forks "),Jt=i(" 1,048 "),Ht=i(" Pause "),Ot=i(" Next "),Gt=i(" Add Friend "),Ut=i("Primary"),Yt=i("Secondary"),Wt=i("Positive"),Kt=i("Negative"),Qt=i("Red"),Xt=i("Orange"),Zt=i("Yellow"),ei=i("Olive"),ti=i("Green"),ii=i("Teal"),si=i("Blue"),oi=i("Violet"),ai=i("Purple"),li=i("Pink"),ni=i("Brown"),ui=i("Grey"),di=i("Black"),ri=i("Standard"),ci=i("Primary"),mi=i("Secondary"),_i=i("Red"),pi=i("Orange"),hi=i("Yellow"),gi=i("Olive"),fi=i("Green"),bi=i("Teal"),vi=i("Blue"),$i=i("Violet"),wi=i("Purple"),Ci=i("Pink"),yi=i("Brown"),Ai=i("Grey"),ki=i("Black"),Si=i("Basic"),zi=i("Primary"),Ti=i("Secondary"),Ri=i("Basic Red"),Vi=i("Basic Orange"),Ei=i("Basic Yellow"),xi=i("Basic Olive"),Di=i("Basic Green"),Bi=i("Basic Teal"),Ni=i("Basic Blue"),Pi=i("Basic Violet"),ji=i("Basic Purple"),Fi=i("Basic Pink"),qi=i("Basic Brown"),Mi=i("Basic Grey"),Li=i("Basic Black"),Ii=i("Groups"),Ji=i("One"),Hi=i("Two"),Oi=i("Three"),Gi=i("Content"),Ui=i("Cancel"),Yi=X(()=>d("div",{class:"or"},null,-1)),Wi=i("Save"),Ki=i("Cancel"),Qi=X(()=>d("div",{class:"or","data-text":"ou"},null,-1)),Xi=i("Save"),Zi=i("States"),es=i(" Follow "),ts=i(" Followed "),is=i("Loading"),ss=i("Loading"),os=i("Loading"),as=i("Loading"),ls=i("Variations"),ns=i(" Facebook "),us=i(" Twitter "),ds=i(" VK "),rs=i(" LinkedIn "),cs=i(" Instagram "),ms=i(" YouTube "),_s=i("Mini"),ps=i("Tiny"),hs=i("Small"),gs=i("Medium"),fs=i("Large"),bs=i("Big"),vs=i("Huge"),$s=i("Massive"),ws=i("Left Floated"),Cs=i("Right Floated"),ys=i("Red"),As=i("Orange"),ks=i("Yellow"),Ss=i("Olive"),zs=i("Green"),Ts=i("Teal"),Rs=i("Blue"),Vs=i("Violet"),Es=i("Purple"),xs=i("Pink"),Ds=i("Brown"),Bs=i("Grey"),Ns=i("Black"),Ps=i("Compact"),js=i("Normal"),Fs=i("Vote"),qs=i("Positive"),Ms=i("Negative"),Ls=i("Fluid"),Is=i("Top"),Js=X(()=>d("img",{src:D},null,-1)),Hs=i("Bottom"),Os=i("One"),Gs=i("Two"),Us=X(()=>d("img",{src:D},null,-1)),Ys=i("One"),Ws=i("Two"),Ks=i("Left"),Qs=i("Right"),Xs=i("Group Variations"),Zs=i("Feed"),eo=i("Messages"),to=i("Events"),io=i("Photos"),so=i(" Pause "),oo=i(" Play "),ao=i(" Shuffle "),lo=i(" Back "),no=i(" Stop "),uo=i(" Forward "),ro=i("Overview"),co=i("Specs"),mo=i("Warranty"),_o=i("Reviews"),po=i("Support"),ho=i("Overview"),go=i("Specs"),fo=i("Support"),bo=i("One"),vo=i("Two"),$o=i("Three"),wo=i("One"),Co=i("Two"),yo=i("Three"),Ao=i("One"),ko=i("Two"),So=i("Three"),zo=i("One"),To=i("Two"),Ro=i("Three"),Vo=i("One"),Eo=i("Two"),xo=i("Three"),Do=i("One"),Bo=X(()=>d("div",{class:"or"},null,-1)),No=i("Two");function Po(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-button"),m=u("doc-example"),f=u("sui-button-content"),v=u("sui-label"),p=u("sui-button-group");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,null,{default:t(()=>[d("div",At,[e(_,{as:"h1"},{default:t(()=>[kt,e(b,null,{default:t(()=>[St]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[zt]),_:1}),e(m,{title:"Button",description:"A standard button",code:s.buttonExample},{default:t(()=>[e(a,null,{default:t(()=>[Tt]),_:1})]),_:1},8,["code"]),e(m,{title:"Emphasis",description:"A button can be formatted to show different levels of emphasis",code:s.emphasisExample},{default:t(()=>[d("div",null,[e(a,{primary:""},{default:t(()=>[Rt]),_:1}),e(a,{secondary:""},{default:t(()=>[Vt]),_:1})])]),_:1},8,["code"]),e(m,{title:"Animated",description:"A button can animate to show hidden content",code:s.animatedExample},{default:t(()=>[e(a,{animated:""},{default:t(()=>[e(f,{visible:""},{default:t(()=>[Et]),_:1}),e(f,{hidden:""},{default:t(()=>[e(l,{name:"arrow right"})]),_:1})]),_:1}),e(a,{animated:"vertical"},{default:t(()=>[e(f,{visible:""},{default:t(()=>[e(l,{name:"shop"})]),_:1}),e(f,{hidden:""},{default:t(()=>[xt]),_:1})]),_:1}),e(a,{animated:"fade"},{default:t(()=>[e(f,{visible:""},{default:t(()=>[Dt]),_:1}),e(f,{hidden:""},{default:t(()=>[Bt]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Labeled",description:"A button can appear alongside a label",code:s.labeledExample},{default:t(()=>[e(a,{labelPosition:"right",as:"div"},{default:t(()=>[e(a,{icon:""},{default:t(()=>[e(l,{name:"heart"}),Nt]),_:1}),e(v,{basic:""},{default:t(()=>[Pt]),_:1})]),_:1}),e(a,{labelPosition:"left",as:"div"},{default:t(()=>[e(v,{basic:"",pointing:"right"},{default:t(()=>[jt]),_:1}),e(a,{icon:""},{default:t(()=>[e(l,{name:"heart"}),Ft]),_:1})]),_:1}),e(a,{labelPosition:"left",as:"div"},{default:t(()=>[e(v,{basic:""},{default:t(()=>[qt]),_:1}),e(a,{icon:""},{default:t(()=>[e(l,{name:"fork"})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{code:s.labeledExample2},{default:t(()=>[e(a,{labelPosition:"right",as:"div"},{default:t(()=>[e(a,{icon:"",color:"red"},{default:t(()=>[e(l,{name:"heart"}),Mt]),_:1}),e(v,{basic:"",pointing:"left",color:"red"},{default:t(()=>[Lt]),_:1})]),_:1}),e(a,{labelPosition:"right",as:"div"},{default:t(()=>[e(a,{basic:"",icon:"",color:"blue"},{default:t(()=>[e(l,{name:"fork"}),It]),_:1}),e(v,{basic:"",pointing:"left",color:"blue"},{default:t(()=>[Jt]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Icon",description:"A button can have only an icon",code:s.iconExample},{default:t(()=>[e(a,{icon:""},{default:t(()=>[e(l,{name:"cloud"})]),_:1})]),_:1},8,["code"]),e(m,{title:"Labeled Icon",description:"A button can use an icon as a label",code:s.labeledIconExample},{default:t(()=>[e(a,{labeled:"",icon:""},{default:t(()=>[e(l,{name:"pause"}),Ht]),_:1}),e(a,{labeled:"right",icon:""},{default:t(()=>[e(l,{name:"right arrow"}),Ot]),_:1})]),_:1},8,["code"]),e(m,{title:"Basic",description:"A basic button is less pronounced",code:s.basicExample},{default:t(()=>[e(a,{basic:""},{default:t(()=>[e(l,{name:"user"}),Gt]),_:1})]),_:1},8,["code"]),e(m,{code:s.basicExample2},{default:t(()=>[e(a,{basic:"",primary:""},{default:t(()=>[Ut]),_:1}),e(a,{basic:"",secondary:""},{default:t(()=>[Yt]),_:1}),e(a,{basic:"",positive:""},{default:t(()=>[Wt]),_:1}),e(a,{basic:"",negative:""},{default:t(()=>[Kt]),_:1})]),_:1},8,["code"]),e(m,{code:s.basicExample3},{default:t(()=>[e(a,{basic:"",color:"red"},{default:t(()=>[Qt]),_:1}),e(a,{basic:"",color:"orange"},{default:t(()=>[Xt]),_:1}),e(a,{basic:"",color:"yellow"},{default:t(()=>[Zt]),_:1}),e(a,{basic:"",color:"olive"},{default:t(()=>[ei]),_:1}),e(a,{basic:"",color:"green"},{default:t(()=>[ti]),_:1}),e(a,{basic:"",color:"teal"},{default:t(()=>[ii]),_:1}),e(a,{basic:"",color:"blue"},{default:t(()=>[si]),_:1}),e(a,{basic:"",color:"violet"},{default:t(()=>[oi]),_:1}),e(a,{basic:"",color:"purple"},{default:t(()=>[ai]),_:1}),e(a,{basic:"",color:"pink"},{default:t(()=>[li]),_:1}),e(a,{basic:"",color:"brown"},{default:t(()=>[ni]),_:1}),e(a,{basic:"",color:"grey"},{default:t(()=>[ui]),_:1}),e(a,{basic:"",color:"black"},{default:t(()=>[di]),_:1})]),_:1},8,["code"]),e(m,{title:"Inverted",description:"A button can be formatted to appear on dark backgrounds",code:s.invertedExample},{default:t(()=>[e(c,{inverted:""},{default:t(()=>[e(a,{inverted:""},{default:t(()=>[ri]),_:1}),e(a,{inverted:"",primary:""},{default:t(()=>[ci]),_:1}),e(a,{inverted:"",secondary:""},{default:t(()=>[mi]),_:1}),e(a,{inverted:"",color:"red"},{default:t(()=>[_i]),_:1}),e(a,{inverted:"",color:"orange"},{default:t(()=>[pi]),_:1}),e(a,{inverted:"",color:"yellow"},{default:t(()=>[hi]),_:1}),e(a,{inverted:"",color:"olive"},{default:t(()=>[gi]),_:1}),e(a,{inverted:"",color:"green"},{default:t(()=>[fi]),_:1}),e(a,{inverted:"",color:"teal"},{default:t(()=>[bi]),_:1}),e(a,{inverted:"",color:"blue"},{default:t(()=>[vi]),_:1}),e(a,{inverted:"",color:"violet"},{default:t(()=>[$i]),_:1}),e(a,{inverted:"",color:"purple"},{default:t(()=>[wi]),_:1}),e(a,{inverted:"",color:"pink"},{default:t(()=>[Ci]),_:1}),e(a,{inverted:"",color:"brown"},{default:t(()=>[yi]),_:1}),e(a,{inverted:"",color:"grey"},{default:t(()=>[Ai]),_:1}),e(a,{inverted:"",color:"black"},{default:t(()=>[ki]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{code:s.invertedExample2},{default:t(()=>[e(c,{inverted:""},{default:t(()=>[e(a,{inverted:"",basic:""},{default:t(()=>[Si]),_:1}),e(a,{inverted:"",basic:"",primary:""},{default:t(()=>[zi]),_:1}),e(a,{inverted:"",basic:"",secondary:""},{default:t(()=>[Ti]),_:1}),e(a,{inverted:"",basic:"",color:"red"},{default:t(()=>[Ri]),_:1}),e(a,{inverted:"",basic:"",color:"orange"},{default:t(()=>[Vi]),_:1}),e(a,{inverted:"",basic:"",color:"yellow"},{default:t(()=>[Ei]),_:1}),e(a,{inverted:"",basic:"",color:"olive"},{default:t(()=>[xi]),_:1}),e(a,{inverted:"",basic:"",color:"green"},{default:t(()=>[Di]),_:1}),e(a,{inverted:"",basic:"",color:"teal"},{default:t(()=>[Bi]),_:1}),e(a,{inverted:"",basic:"",color:"blue"},{default:t(()=>[Ni]),_:1}),e(a,{inverted:"",basic:"",color:"violet"},{default:t(()=>[Pi]),_:1}),e(a,{inverted:"",basic:"",color:"purple"},{default:t(()=>[ji]),_:1}),e(a,{inverted:"",basic:"",color:"pink"},{default:t(()=>[Fi]),_:1}),e(a,{inverted:"",basic:"",color:"brown"},{default:t(()=>[qi]),_:1}),e(a,{inverted:"",basic:"",color:"grey"},{default:t(()=>[Mi]),_:1}),e(a,{inverted:"",basic:"",color:"black"},{default:t(()=>[Li]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Ii]),_:1}),e(m,{title:"Buttons",description:"Buttons can exist together as a group",code:s.buttonsExample},{default:t(()=>[e(p,null,{default:t(()=>[e(a,null,{default:t(()=>[Ji]),_:1}),e(a,null,{default:t(()=>[Hi]),_:1}),e(a,null,{default:t(()=>[Oi]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Icon Buttons",description:"Buttons can exist together as a group",code:s.iconButtonsExample},{default:t(()=>[e(p,{icon:""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"align left"})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"align center"})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"align right"})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"align justify"})]),_:1})]),_:1}),e(p,{icon:""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"bold"})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"underline"})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"text width"})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Gi]),_:1}),e(m,{title:"Conditionals",description:"Button groups can contain conditionals",code:s.conditionalsExample},{default:t(()=>[e(p,null,{default:t(()=>[e(a,null,{default:t(()=>[Ui]),_:1}),Yi,e(a,{positive:""},{default:t(()=>[Wi]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{code:s.conditionalsExample2},{default:t(()=>[e(p,null,{default:t(()=>[e(a,null,{default:t(()=>[Ki]),_:1}),Qi,e(a,{positive:""},{default:t(()=>[Xi]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Zi]),_:1}),e(m,{title:"Active",description:"A button can show it is currently the active user selection",code:s.activeExample},{default:t(()=>[e(a,{active:""},{default:t(()=>[e(l,{name:"user"}),es]),_:1})]),_:1},8,["code"]),e(m,{title:"Disabled",description:"A button can show it is currently unable to be interacted with",code:s.disabledExample},{default:t(()=>[e(a,{disabled:""},{default:t(()=>[e(l,{name:"user"}),ts]),_:1})]),_:1},8,["code"]),e(m,{title:"Loading",description:"A button can show a loading indicator",code:s.loadingExample},{default:t(()=>[e(a,{loading:""},{default:t(()=>[is]),_:1}),e(a,{basic:"",loading:""},{default:t(()=>[ss]),_:1}),e(a,{primary:"",loading:""},{default:t(()=>[os]),_:1}),e(a,{secondary:"",loading:""},{default:t(()=>[as]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[ls]),_:1}),e(m,{title:"Social",description:"A button can be formatted to link to a social website",code:s.socialExample},{default:t(()=>[e(a,{facebook:""},{default:t(()=>[e(l,{name:"facebook"}),ns]),_:1}),e(a,{twitter:""},{default:t(()=>[e(l,{name:"twitter"}),us]),_:1}),e(a,{vk:""},{default:t(()=>[e(l,{name:"vk"}),ds]),_:1}),e(a,{linkedin:""},{default:t(()=>[e(l,{name:"linkedin"}),rs]),_:1}),e(a,{instagram:""},{default:t(()=>[e(l,{name:"instagram"}),cs]),_:1}),e(a,{youtube:""},{default:t(()=>[e(l,{name:"youtube"}),ms]),_:1})]),_:1},8,["code"]),e(m,{title:"Size",description:"Buttons can have assorted sizes",code:s.sizeExample},{default:t(()=>[d("div",null,[e(a,{size:"mini"},{default:t(()=>[_s]),_:1}),e(a,{size:"tiny"},{default:t(()=>[ps]),_:1}),e(a,{size:"small"},{default:t(()=>[hs]),_:1}),e(a,{size:"medium"},{default:t(()=>[gs]),_:1}),e(a,{size:"large"},{default:t(()=>[fs]),_:1}),e(a,{size:"big"},{default:t(()=>[bs]),_:1}),e(a,{size:"huge"},{default:t(()=>[vs]),_:1}),e(a,{size:"massive"},{default:t(()=>[$s]),_:1})])]),_:1},8,["code"]),e(m,{title:"Floated",description:"A button can be aligned to the left or right of its container",code:s.floatedExample},{default:t(()=>[d("div",null,[e(a,{floated:"left"},{default:t(()=>[ws]),_:1}),e(a,{floated:"right"},{default:t(()=>[Cs]),_:1})])]),_:1},8,["code"]),e(m,{title:"Colored",description:"A button can have different colors",code:s.coloredExample},{default:t(()=>[d("div",null,[e(a,{color:"red"},{default:t(()=>[ys]),_:1}),e(a,{color:"orange"},{default:t(()=>[As]),_:1}),e(a,{color:"yellow"},{default:t(()=>[ks]),_:1}),e(a,{color:"olive"},{default:t(()=>[Ss]),_:1}),e(a,{color:"green"},{default:t(()=>[zs]),_:1}),e(a,{color:"teal"},{default:t(()=>[Ts]),_:1}),e(a,{color:"blue"},{default:t(()=>[Rs]),_:1}),e(a,{color:"violet"},{default:t(()=>[Vs]),_:1}),e(a,{color:"purple"},{default:t(()=>[Es]),_:1}),e(a,{color:"pink"},{default:t(()=>[xs]),_:1}),e(a,{color:"brown"},{default:t(()=>[Ds]),_:1}),e(a,{color:"grey"},{default:t(()=>[Bs]),_:1}),e(a,{color:"black"},{default:t(()=>[Ns]),_:1})])]),_:1},8,["code"]),e(m,{title:"Compact",description:"A button can reduce its padding to fit into tighter spaces",code:s.compactExample},{default:t(()=>[d("div",null,[e(a,{compact:""},{default:t(()=>[Ps]),_:1}),e(a,null,{default:t(()=>[js]),_:1})])]),_:1},8,["code"]),e(m,{title:"Toggle",description:"A button can be formatted to toggle on and off",code:s.toggleExample},{default:t(()=>[e(a,{toggle:"",active:s.active,onClick:g[0]||(g[0]=()=>s.active=!s.active)},{default:t(()=>[Fs]),_:1},8,["active"])]),_:1},8,["code"]),e(m,{title:"Positive",description:"A button can hint towards a positive consequence",code:s.positiveExample},{default:t(()=>[e(a,{positive:""},{default:t(()=>[qs]),_:1})]),_:1},8,["code"]),e(m,{title:"Negative",description:"A button can hint towards a negative consequence",code:s.negativeExample},{default:t(()=>[e(a,{negative:""},{default:t(()=>[Ms]),_:1})]),_:1},8,["code"]),e(m,{title:"Fluid",description:"A button can take the width of its container",code:s.fluidExample},{default:t(()=>[e(a,{fluid:""},{default:t(()=>[Ls]),_:1})]),_:1},8,["code"]),e(m,{title:"Circular",description:"A button can be circular",code:s.circularExample},{default:t(()=>[e(a,{circular:"",icon:""},{default:t(()=>[e(l,{name:"settings"})]),_:1})]),_:1},8,["code"]),e(m,{code:s.circularExample2},{default:t(()=>[d("div",null,[e(a,{facebook:"",circular:"",icon:""},{default:t(()=>[e(l,{name:"facebook"})]),_:1}),e(a,{twitter:"",circular:"",icon:""},{default:t(()=>[e(l,{name:"twitter"})]),_:1}),e(a,{linkedin:"",circular:"",icon:""},{default:t(()=>[e(l,{name:"linkedin"})]),_:1}),e(a,{youtube:"",circular:"",icon:""},{default:t(()=>[e(l,{name:"youtube"})]),_:1})])]),_:1},8,["code"]),e(m,{title:"Vertically Attached",description:"A button can be attached to the top or bottom of other content",code:s.attachedExample},{default:t(()=>[d("div",null,[e(a,{attached:"top"},{default:t(()=>[Is]),_:1}),e(c,{attached:""},{default:t(()=>[Js]),_:1}),e(a,{attached:"bottom"},{default:t(()=>[Hs]),_:1})])]),_:1},8,["code"]),e(m,{code:s.attachedExample2},{default:t(()=>[d("div",null,[e(p,{attached:"top"},{default:t(()=>[e(a,null,{default:t(()=>[Os]),_:1}),e(a,null,{default:t(()=>[Gs]),_:1})]),_:1}),e(c,{attached:""},{default:t(()=>[Us]),_:1}),e(p,{attached:"bottom"},{default:t(()=>[e(a,null,{default:t(()=>[Ys]),_:1}),e(a,null,{default:t(()=>[Ws]),_:1})]),_:1})])]),_:1},8,["code"]),e(m,{title:"Horizontally Attached",description:"A button can be attached to the left or right of other content",code:s.horizontalAttachedExample},{default:t(()=>[d("div",null,[e(a,{attached:"left"},{default:t(()=>[Ks]),_:1}),e(a,{attached:"right"},{default:t(()=>[Qs]),_:1})])]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Xs]),_:1}),e(m,{title:"Vertical Buttons",description:"Groups can be formatted to appear vertically",code:s.verticalButtonsExample},{default:t(()=>[e(p,{vertical:""},{default:t(()=>[e(a,null,{default:t(()=>[Zs]),_:1}),e(a,null,{default:t(()=>[eo]),_:1}),e(a,null,{default:t(()=>[to]),_:1}),e(a,null,{default:t(()=>[io]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Labeled Icon Buttons",description:"Groups can be formatted as labeled icons",code:s.labeledIconButtonsExample},{default:t(()=>[e(p,{vertical:"",labeled:"",icon:""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"pause"}),so]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"play"}),oo]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"shuffle"}),ao]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Mixed Group",description:"Groups can be formatted to use multiple button types together",code:s.mixedGroupExample},{default:t(()=>[e(p,null,{default:t(()=>[e(a,{labelPosition:"left",icon:""},{default:t(()=>[e(l,{name:"left chevron"}),lo]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"stop"}),no]),_:1}),e(a,{labelPosition:"right",icon:""},{default:t(()=>[e(l,{name:"right chevron"}),uo]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Equal Width",description:"Groups can have their widths divided evenly",code:s.equalWidthExample},{default:t(()=>[d("div",null,[e(p,{widths:5},{default:t(()=>[e(a,null,{default:t(()=>[ro]),_:1}),e(a,null,{default:t(()=>[co]),_:1}),e(a,null,{default:t(()=>[mo]),_:1}),e(a,null,{default:t(()=>[_o]),_:1}),e(a,null,{default:t(()=>[po]),_:1})]),_:1}),e(o),e(p,{widths:3},{default:t(()=>[e(a,null,{default:t(()=>[ho]),_:1}),e(a,null,{default:t(()=>[go]),_:1}),e(a,null,{default:t(()=>[fo]),_:1})]),_:1})])]),_:1},8,["code"]),e(m,{title:"Colored Buttons",description:"Groups can have a shared color",code:s.coloredButtonsExample},{default:t(()=>[e(p,{color:"blue"},{default:t(()=>[e(a,null,{default:t(()=>[bo]),_:1}),e(a,null,{default:t(()=>[vo]),_:1}),e(a,null,{default:t(()=>[$o]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Basic Buttons",description:"A button group can be less pronounced",code:s.basicButtonsExample},{default:t(()=>[d("div",null,[e(p,{basic:""},{default:t(()=>[e(a,null,{default:t(()=>[wo]),_:1}),e(a,null,{default:t(()=>[Co]),_:1}),e(a,null,{default:t(()=>[yo]),_:1})]),_:1}),e(o),e(p,{basic:"",vertical:""},{default:t(()=>[e(a,null,{default:t(()=>[Ao]),_:1}),e(a,null,{default:t(()=>[ko]),_:1}),e(a,null,{default:t(()=>[So]),_:1})]),_:1})])]),_:1},8,["code"]),e(m,{code:s.basicButtonsExample2},{default:t(()=>[e(p,null,{default:t(()=>[e(a,{basic:"",color:"red"},{default:t(()=>[zo]),_:1}),e(a,{basic:"",color:"blue"},{default:t(()=>[To]),_:1}),e(a,{basic:"",color:"green"},{default:t(()=>[Ro]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Group Sizes",description:"Groups can have a shared size",code:s.groupSizesExample},{default:t(()=>[e(p,{size:"large"},{default:t(()=>[e(a,null,{default:t(()=>[Vo]),_:1}),e(a,null,{default:t(()=>[Eo]),_:1}),e(a,null,{default:t(()=>[xo]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{code:s.groupSizesExample2},{default:t(()=>[e(p,{basic:"",icon:"",size:"small"},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"file"})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"save"})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"upload"})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"download"})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{code:s.groupSizesExample3},{default:t(()=>[e(p,{size:"large"},{default:t(()=>[e(a,null,{default:t(()=>[Do]),_:1}),Bo,e(a,null,{default:t(()=>[No]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var jo=x(yt,[["render",Po],["__scopeId","data-v-7ebf685c"]]);const Fo=E({name:"ContainerDoc",components:{DocExample:B},setup(){return{containerExample:`<template>
  <sui-container>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
  </sui-container>
</template>`,textContainerExample:`<template>
  <sui-container text>
    <sui-header as="h2">Header</sui-header>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
  </sui-container>
</template>`,textAlignmentExample:`<template>
  <div>
    <sui-container textAlign="left">Left Aligned</sui-container>
    <sui-container textAlign="center">Center Aligned</sui-container>
    <sui-container textAlign="right">Right Aligned</sui-container>
  </div>
</template>`,fluidExample:`<template>
  <sui-container fluid>
    <sui-header as="h2">Dogs Roles with Humans</sui-header>
    <p>
      Domestic dogs inherited complex behaviors, such as bite inhibition, from
      their wolf ancestors, which would have been pack hunters with complex
      body language. These sophisticated forms of social cognition and
      communication may account for their trainability, playfulness, and
      ability to fit into human households and social situations, and these
      attributes have given dogs a relationship with humans that has enabled
      them to become one of the most successful species on the planet today.
    </p>
  </sui-container>
</template>`}}}),pe=s=>(le("data-v-8cf609c4"),s=s(),ne(),s),qo={class:"intro"},Mo=i("Container "),Lo=i("A container limits content to a maximum width"),Io=i("Types"),Jo=pe(()=>d("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),Ho=i("Header"),Oo=pe(()=>d("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),Go=i("Variations"),Uo=i("Left Aligned"),Yo=i("Center Aligned"),Wo=i("Right Aligned"),Ko=i("Dogs Roles with Humans"),Qo=pe(()=>d("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1));function Xo(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("doc-example");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",qo,[e(_,{as:"h1"},{default:t(()=>[Mo,e(b,null,{default:t(()=>[Lo]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Io]),_:1}),e(a,{title:"Container",description:"A standard container",code:s.containerExample},{default:t(()=>[e(h,null,{default:t(()=>[Jo]),_:1})]),_:1},8,["code"]),e(a,{title:"Text Container",description:"A container can reduce its maximum width to more naturally accommodate a single column of text",code:s.textContainerExample},{default:t(()=>[e(h,{text:""},{default:t(()=>[e(_,{as:"h2"},{default:t(()=>[Ho]),_:1}),Oo]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Go]),_:1}),e(a,{title:"Text Alignment",description:"A container can specify its text alignment",code:s.textAlignmentExample},{default:t(()=>[d("div",null,[e(h,{textAlign:"left"},{default:t(()=>[Uo]),_:1}),e(h,{textAlign:"center"},{default:t(()=>[Yo]),_:1}),e(h,{textAlign:"right"},{default:t(()=>[Wo]),_:1})])]),_:1},8,["code"]),e(a,{title:"Fluid",description:"A fluid container has no maximum width",code:s.fluidExample},{default:t(()=>[e(h,{fluid:""},{default:t(()=>[e(_,{as:"h2"},{default:t(()=>[Ko]),_:1}),Qo]),_:1})]),_:1},8,["code"])]),_:1})])}var Zo=x(Fo,[["render",Xo],["__scopeId","data-v-8cf609c4"]]),N="/vue-fomantic-ui/images/wireframe/short-paragraph.png";const ea=E({name:"DividerDoc",components:{DocExample:B},setup(){return{dividerCode:`<div>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider />
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</div>`,verticalDividerCode:`<sui-segment>
  <sui-grid :columns="2" relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
  <sui-divider vertical>and</sui-divider>
</sui-segment>`,horizontalDividerCode:`<sui-segment>
  <sui-grid relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
  <sui-divider horizontal>and</sui-divider>
  <sui-grid relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
</sui-segment>`,horizontalAlignmentCode:`<div>
  <sui-divider horizontal textAlign="left">
    <sui-header as="h4">
      <sui-icon name="left align" />
      Left Aligned
    </sui-header>
  </sui-divider>
  <sui-divider horizontal textAlign="center">
    <sui-header as="h4">
      <sui-icon name="center align" />
      Center Aligned
    </sui-header>
  </sui-divider>
  <sui-divider horizontal textAlign="right">
    <sui-header as="h4">
      <sui-icon name="right align" />
      Right Aligned
    </sui-header>
  </sui-divider>
</div>`,invertedCode:`<sui-segment inverted>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider inverted />
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,fittedCode:`<sui-segment>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  <sui-divider fitted />
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
</sui-segment>`,hiddenCode:`<div>
  <sui-header as="h3">Section One</sui-header>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider hidden />
  <sui-header as="h3">Section Two</sui-header>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</div>`,sectionCode:`<div>
  <sui-header as="h3">Section One</sui-header>
  <sui-image src="/images/wireframe/short-paragraph.png" />
  <sui-divider section />
  <sui-header as="h3">Section Two</sui-header>
  <sui-image src="/images/wireframe/short-paragraph.png" />
</div>`,clearingCode:`<sui-segment>
  <sui-header floated="right">Floated Content</sui-header>
  <sui-divider clearing />
  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`}}}),ta={class:"intro"},ia=i("Divider "),sa=i("A divider visually segments content into groups"),oa=i("Types"),aa=i("and"),la=i("and"),na=i(" Left Aligned "),ua=i(" Center Aligned "),da=i(" Right Aligned "),ra=i("Variations"),ca=i(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),ma=i(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),_a=i("Section One"),pa=i("Section Two"),ha=i("Section One"),ga=i("Section Two"),fa=i("Floated Content");function ba(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-image"),m=u("doc-example"),f=u("sui-grid-column"),v=u("sui-grid");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",ta,[e(_,{as:"h1"},{default:t(()=>[ia,e(b,null,{default:t(()=>[sa]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[oa]),_:1}),e(m,{title:"Divider",description:"A standard divider",code:s.dividerCode},{default:t(()=>[d("div",null,[e(a,{src:N}),e(o),e(a,{src:N})])]),_:1},8,["code"]),e(m,{title:"Vertical Divider",description:"A divider can segment content vertically",code:s.verticalDividerCode},{default:t(()=>[e(c,null,{default:t(()=>[e(v,{columns:2,relaxed:"very"},{default:t(()=>[e(f,null,{default:t(()=>[e(a,{src:N})]),_:1}),e(f,null,{default:t(()=>[e(a,{src:N})]),_:1})]),_:1}),e(o,{vertical:""},{default:t(()=>[aa]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Horizontal Divider",description:"A divider can segment content horizontally",code:s.horizontalDividerCode},{default:t(()=>[e(c,null,{default:t(()=>[e(v,{relaxed:"very"},{default:t(()=>[e(f,null,{default:t(()=>[e(a,{src:N})]),_:1})]),_:1}),e(o,{horizontal:""},{default:t(()=>[la]),_:1}),e(v,{relaxed:"very"},{default:t(()=>[e(f,null,{default:t(()=>[e(a,{src:N})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Horizontal Alignment",description:"A horizontal divider can be aligned",code:s.horizontalAlignmentCode},{default:t(()=>[d("div",null,[e(o,{horizontal:"",textAlign:"left"},{default:t(()=>[e(_,{as:"h4"},{default:t(()=>[e(l,{name:"left align"}),na]),_:1})]),_:1}),e(o,{horizontal:"",textAlign:"center"},{default:t(()=>[e(_,{as:"h4"},{default:t(()=>[e(l,{name:"center align"}),ua]),_:1})]),_:1}),e(o,{horizontal:"",textAlign:"right"},{default:t(()=>[e(_,{as:"h4"},{default:t(()=>[e(l,{name:"right align"}),da]),_:1})]),_:1})])]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[ra]),_:1}),e(m,{title:"Inverted",description:"A divider can have its colors inverted",code:s.invertedCode},{default:t(()=>[e(c,{inverted:""},{default:t(()=>[e(a,{src:N}),e(o,{inverted:""}),e(a,{src:N})]),_:1})]),_:1},8,["code"]),e(m,{title:"Fitted",description:"A divider can be fitted, without any space above or below it",code:s.fittedCode},{default:t(()=>[e(c,null,{default:t(()=>[ca,e(o,{fitted:""}),ma]),_:1})]),_:1},8,["code"]),e(m,{title:"Hidden",description:"A hidden divider divides content without creating a dividing line",code:s.hiddenCode},{default:t(()=>[d("div",null,[e(_,{as:"h3"},{default:t(()=>[_a]),_:1}),e(a,{src:N}),e(o,{hidden:""}),e(_,{as:"h3"},{default:t(()=>[pa]),_:1}),e(a,{src:N})])]),_:1},8,["code"]),e(m,{title:"Section",description:"A divider can provide greater margins to divide sections of content",code:s.sectionCode},{default:t(()=>[d("div",null,[e(_,{as:"h3"},{default:t(()=>[ha]),_:1}),e(a,{src:N}),e(o,{section:""}),e(_,{as:"h3"},{default:t(()=>[ga]),_:1}),e(a,{src:N})])]),_:1},8,["code"]),e(m,{title:"Clearing",description:"A divider can clear the contents above it",code:s.clearingCode},{default:t(()=>[e(c,null,{default:t(()=>[e(_,{floated:"right"},{default:t(()=>[fa]),_:1}),e(o,{clearing:""}),e(a,{src:N})]),_:1})]),_:1},8,["code"])]),_:1})])}var va=x(ea,[["render",ba],["__scopeId","data-v-ac49b7a2"]]);const $a=E({name:"EmojiDoc",components:{DocExample:B},setup(){return{disabledCode:`<sui-segment basic>
  <sui-emoji name="anguished" disabled />
</sui-segment>`,loadingCode:`<sui-segment basic>
  <sui-emoji name="angel" loading />
  <sui-emoji name="blush" loading />
  <sui-emoji name="grin" loading />
</sui-segment>`,sizeCode:`<sui-segment basic>
  <sui-emoji name="relaxed" size="small" /> Small
  <br>
  <sui-emoji name="relaxed" size="medium" /> Medium
  <br>
  <sui-emoji name="relaxed" size="large" /> Large
  <br>
  <sui-emoji name="relaxed" size="big" /> Big
</sui-segment>`,autosizingCode:`<sui-segment basic>
  <sui-header size="small">Within a header <sui-emoji name="relaxed" /></sui-header>
  <sui-button size="large">Within a button <sui-emoji name="relaxed" /></sui-button>
  <br><br>
  <sui-label size="massive">Within a label <sui-emoji name="relaxed" /></sui-label>
</sui-segment>`,linkCode:`<sui-segment basic>
  <sui-emoji name="slight_smile" link />
</sui-segment>`}}}),wa={class:"intro"},Ca=i("Emoji "),ya=i(" An emoji is a glyph used to represent an emotional state "),Aa=i("States"),ka=i("Variations"),Sa=i(" Small "),za=d("br",null,null,-1),Ta=i(" Medium "),Ra=d("br",null,null,-1),Va=i(" Large "),Ea=d("br",null,null,-1),xa=i(" Big "),Da=i("Within a header "),Ba=i("Within a button "),Na=d("br",null,null,-1),Pa=d("br",null,null,-1),ja=i("Within a label ");function Fa(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-emoji"),m=u("doc-example"),f=u("sui-button"),v=u("sui-label");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",wa,[e(_,{as:"h1"},{default:t(()=>[Ca,e(b,null,{default:t(()=>[ya]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Aa]),_:1}),e(m,{title:"Disabled",description:"An emoji can show that it is disabled",code:s.disabledCode},{default:t(()=>[e(c,{basic:""},{default:t(()=>[e(a,{name:"anguished",disabled:""})]),_:1})]),_:1},8,["code"]),e(m,{title:"Loading",description:"An emoji can be used as a simple loader",code:s.loadingCode},{default:t(()=>[e(c,{basic:""},{default:t(()=>[e(a,{name:"angel",loading:""}),e(a,{name:"blush",loading:""}),e(a,{name:"grin",loading:""})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[ka]),_:1}),e(m,{title:"Size",description:"An emoji can vary in size",code:s.sizeCode},{default:t(()=>[e(c,{basic:""},{default:t(()=>[e(a,{name:"relaxed",size:"small"}),Sa,za,e(a,{name:"relaxed",size:"medium"}),Ta,Ra,e(a,{name:"relaxed",size:"large"}),Va,Ea,e(a,{name:"relaxed",size:"big"}),xa]),_:1})]),_:1},8,["code"]),e(m,{title:"Autosizing",description:"If no specific size class is given, all emojis are automatically sized according to the current element font-size",code:s.autosizingCode},{default:t(()=>[e(c,{basic:""},{default:t(()=>[e(_,{size:"small"},{default:t(()=>[Da,e(a,{name:"relaxed"})]),_:1}),e(f,{size:"large"},{default:t(()=>[Ba,e(a,{name:"relaxed"})]),_:1}),Na,Pa,e(v,{size:"massive"},{default:t(()=>[ja,e(a,{name:"relaxed"})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Link",description:"An emoji can be formatted as a link",code:s.linkCode},{default:t(()=>[e(c,{basic:""},{default:t(()=>[e(a,{name:"slight_smile",link:""})]),_:1})]),_:1},8,["code"])]),_:1})])}var qa=x($a,[["render",Fa]]);const Ma=E({name:"FlagDoc",components:{DocExample:B},setup(){return{flagCode:`<div>
  <sui-flag name="ae" />
  <sui-flag name="france" />
  <sui-flag name="myanmar" />
</div>`}}}),La={class:"intro"},Ia=i("Flag "),Ja=i(" A flag is used to represent a political state ");function Ha(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-flag"),m=u("doc-example");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",La,[e(_,{as:"h1"},{default:t(()=>[Ia,e(b,null,{default:t(()=>[Ja]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(m,{title:"Flag",description:"A flag can use the two digit country code, the full name, or a common alias",code:s.flagCode},{default:t(()=>[d("div",null,[e(a,{name:"ae"}),e(a,{name:"france"}),e(a,{name:"myanmar"})])]),_:1},8,["code"])]),_:1})])}var Oa=x(Ma,[["render",Ha]]),Ga="/vue-fomantic-ui/images/icons/school.png";const Ua=E({name:"HeaderDoc",components:{DocExample:B},setup(){return{pageHeaderCode:`<div>
  <sui-header as="h1">First header</sui-header>
  <sui-header as="h2">Second header</sui-header>
  <sui-header as="h3">Third header</sui-header>
  <sui-header as="h4">Fourth header</sui-header>
  <sui-header as="h5">Fifth header</sui-header>
</div>`,contentHeaderCode:`<div>
  <sui-header size="huge">Huge Header</sui-header>
  <sui-header size="large">Large Header</sui-header>
  <sui-header size="medium">Medium Header</sui-header>
  <sui-header size="small">Small Header</sui-header>
  <sui-header size="tiny">Tiny Header</sui-header>
</div>`,iconHeadersCode:`<sui-header icon>
  <sui-icon name="settings" />
  <sui-header-content>
    AccountSettings
    <sui-header-subheader>
      Manage your account settings and set e-mail preferences.
    </sui-header-subheader>
  </sui-header-content>
</sui-header>`,subHeadersCode:`<div>
  <sui-header as="h2" sub>Price</sui-header>
  <span>$10.99</span>
</div>`,imageCode:`<sui-header>
  <sui-image src="/images/icons/school.png" />
  <sui-header-content>Learn More</sui-header-content>
</sui-header>`,iconCode:`<sui-header>
  <sui-icon name="plug" />
  <sui-header-content>Uptime Guarantee</sui-header-content>
</sui-header>`,subheaderCode:`<sui-header as="h2">
  AccountSettings
  <sui-header-subheader>
    Manage your account settings and set e-mail preferences.
  </sui-header-subheader>
</sui-header>`,disabledCode:"<sui-header disabled>Disabled Header</sui-header>",dividingCode:'<sui-header as="h3" dividing>Dividing Header</sui-header>',blockCode:'<sui-header as="h3" block>Block Header</sui-header>',attachedCode:`<div>
  <sui-header as="h2" attached="top">Attached Header</sui-header>
  <sui-segment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </sui-segment>
</div>`,floatingCode:`<sui-segment clearing>
  <sui-header as="h3" floated="right">Go Forward</sui-header>
  <sui-header as="h3" floated="left">Go Back</sui-header>
</sui-segment>`,textAlignCode:`<sui-segment>
  <sui-header as="h3" textAlign="right">Right</sui-header>
  <sui-header as="h3" textAlign="left">Left</sui-header>
  <sui-header as="h3" textAlign="justified">
    This should take up the full width even if only one line
  </sui-header>
  <sui-header as="h3" textAlign="center">Center</sui-header>
</sui-segment>`,coloredCode:`<div>
  <sui-header as="h4" color="primary">Primary</sui-header>
  <sui-header as="h4" color="secondary">Secondary</sui-header>
  <sui-header as="h4" color="red">Red</sui-header>
  <sui-header as="h4" color="orange">Orange</sui-header>
  <sui-header as="h4" color="yellow">Yellow</sui-header>
  <sui-header as="h4" color="olive">Olive</sui-header>
  <sui-header as="h4" color="green">Green</sui-header>
  <sui-header as="h4" color="teal">Teal</sui-header>
  <sui-header as="h4" color="blue">Blue</sui-header>
  <sui-header as="h4" color="purple">Purple</sui-header>
  <sui-header as="h4" color="violet">Violet</sui-header>
  <sui-header as="h4" color="pink">Pink</sui-header>
  <sui-header as="h4" color="brown">Brown</sui-header>
  <sui-header as="h4" color="grey">Grey</sui-header>
</div>`,invertedCode:`<sui-segment inverted>
  <sui-header as="h4" color="red" inverted>Red</sui-header>
  <sui-header as="h4" color="orange" inverted>Orange</sui-header>
  <sui-header as="h4" color="yellow" inverted>Yellow</sui-header>
  <sui-header as="h4" color="olive" inverted>Olive</sui-header>
  <sui-header as="h4" color="green" inverted>Green</sui-header>
  <sui-header as="h4" color="teal" inverted>Teal</sui-header>
  <sui-header as="h4" color="blue" inverted>Blue</sui-header>
  <sui-header as="h4" color="purple" inverted>Purple</sui-header>
  <sui-header as="h4" color="violet" inverted>Violet</sui-header>
  <sui-header as="h4" color="pink" inverted>Pink</sui-header>
  <sui-header as="h4" color="brown" inverted>Brown</sui-header>
  <sui-header as="h4" color="grey" inverted>Grey</sui-header>
</sui-segment>`}}}),Ya={class:"intro"},Wa=i("Header "),Ka=i(" A header provides a short summary of content "),Qa=i("Types"),Xa=i("First header"),Za=i("Second header"),el=i("Third header"),tl=i("Fourth header"),il=i("Fifth header"),sl=i("Huge Header"),ol=i("Large Header"),al=i("Medium Header"),ll=i("Small Header"),nl=i("Tiny Header"),ul=i(" AccountSettings "),dl=i(" Manage your account settings and set e-mail preferences. "),rl=i("Price"),cl=d("span",null,"$10.99",-1),ml=i("Content"),_l=i("Learn More"),pl=i("Uptime Guarantee"),hl=i(" AccountSettings "),gl=i(" Manage your account settings and set e-mail preferences. "),fl=i("States"),bl=i("Disabled Header"),vl=i("Variations"),$l=i("Dividing Header"),wl=i("Block Header"),Cl=i("Attached Header"),yl=i(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),Al=i("Go Forward"),kl=i("Go Back"),Sl=i("Right"),zl=i("Left"),Tl=i(" This should take up the full width even if only one line "),Rl=i("Center"),Vl=i("Primary"),El=i("Secondary"),xl=i("Red"),Dl=i("Orange"),Bl=i("Yellow"),Nl=i("Olive"),Pl=i("Green"),jl=i("Teal"),Fl=i("Blue"),ql=i("Purple"),Ml=i("Violet"),Ll=i("Pink"),Il=i("Brown"),Jl=i("Grey"),Hl=i("Red"),Ol=i("Orange"),Gl=i("Yellow"),Ul=i("Olive"),Yl=i("Green"),Wl=i("Teal"),Kl=i("Blue"),Ql=i("Purple"),Xl=i("Violet"),Zl=i("Pink"),en=i("Brown"),tn=i("Grey");function sn(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("doc-example"),m=u("sui-header-content"),f=u("sui-image");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",Ya,[e(_,{as:"h1"},{default:t(()=>[Wa,e(b,null,{default:t(()=>[Ka]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Qa]),_:1}),e(a,{title:"Page Headers",description:"Headers may be oriented to give the hierarchy of a section in the context of the page",code:s.pageHeaderCode},{default:t(()=>[d("div",null,[e(_,{as:"h1"},{default:t(()=>[Xa]),_:1}),e(_,{as:"h2"},{default:t(()=>[Za]),_:1}),e(_,{as:"h3"},{default:t(()=>[el]),_:1}),e(_,{as:"h4"},{default:t(()=>[tl]),_:1}),e(_,{as:"h5"},{default:t(()=>[il]),_:1})])]),_:1},8,["code"]),e(a,{title:"Content Headers",description:"Headers may be oriented to give the importance of a section in the context of the content that surrounds it",code:s.contentHeaderCode},{default:t(()=>[d("div",null,[e(_,{size:"huge"},{default:t(()=>[sl]),_:1}),e(_,{size:"large"},{default:t(()=>[ol]),_:1}),e(_,{size:"medium"},{default:t(()=>[al]),_:1}),e(_,{size:"small"},{default:t(()=>[ll]),_:1}),e(_,{size:"tiny"},{default:t(()=>[nl]),_:1})])]),_:1},8,["code"]),e(a,{title:"Icon Headers",description:"A header can be formatted to emphasize an icon",code:s.iconHeadersCode},{default:t(()=>[e(_,{icon:""},{default:t(()=>[e(l,{name:"settings"}),e(m,null,{default:t(()=>[ul,e(b,null,{default:t(()=>[dl]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Sub Headers",description:"Headers may be formatted to label smaller or de-emphasized content",code:s.subHeadersCode},{default:t(()=>[d("div",null,[e(_,{as:"h2",sub:""},{default:t(()=>[rl]),_:1}),cl])]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[ml]),_:1}),e(a,{title:"Image",description:"A header may contain an image",code:s.imageCode},{default:t(()=>[e(_,null,{default:t(()=>[e(f,{src:Ga}),e(m,null,{default:t(()=>[_l]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Icon",description:"A header may contain an icon",code:s.iconCode},{default:t(()=>[e(_,null,{default:t(()=>[e(l,{name:"plug"}),e(m,null,{default:t(()=>[pl]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Subheader",description:"Headers may contain subheaders",code:s.subheaderCode},{default:t(()=>[e(_,{as:"h2"},{default:t(()=>[hl,e(b,null,{default:t(()=>[gl]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[fl]),_:1}),e(a,{title:"Disabled",description:"A header can show that it is inactive",code:s.disabledCode},{default:t(()=>[e(_,{disabled:""},{default:t(()=>[bl]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[vl]),_:1}),e(a,{title:"Dividing",description:"A header can be formatted to divide itself from the content below it",code:s.dividingCode},{default:t(()=>[e(_,{as:"h3",dividing:""},{default:t(()=>[$l]),_:1})]),_:1},8,["code"]),e(a,{title:"Block",description:"A header can be formatted to appear inside a content block",code:s.blockCode},{default:t(()=>[e(_,{as:"h3",block:""},{default:t(()=>[wl]),_:1})]),_:1},8,["code"]),e(a,{title:"Attached",description:"A header can be attached to other content, like a segment",code:s.attachedCode},{default:t(()=>[d("div",null,[e(_,{as:"h2",attached:"top"},{default:t(()=>[Cl]),_:1}),e(c,{attached:""},{default:t(()=>[yl]),_:1})])]),_:1},8,["code"]),e(a,{title:"Floating",description:"A header can sit to the left or right of other content",code:s.floatingCode},{default:t(()=>[e(c,{clearing:""},{default:t(()=>[e(_,{as:"h3",floated:"right"},{default:t(()=>[Al]),_:1}),e(_,{as:"h3",floated:"left"},{default:t(()=>[kl]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Text Alignment",description:"A header can have its text aligned to a side",code:s.textAlignCode},{default:t(()=>[e(c,null,{default:t(()=>[e(_,{as:"h3",textAlign:"right"},{default:t(()=>[Sl]),_:1}),e(_,{as:"h3",textAlign:"left"},{default:t(()=>[zl]),_:1}),e(_,{as:"h3",textAlign:"justified"},{default:t(()=>[Tl]),_:1}),e(_,{as:"h3",textAlign:"center"},{default:t(()=>[Rl]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Colored",description:"A header can be formatted with different colors",code:s.coloredCode},{default:t(()=>[d("div",null,[e(_,{as:"h4",color:"primary"},{default:t(()=>[Vl]),_:1}),e(_,{as:"h4",color:"secondary"},{default:t(()=>[El]),_:1}),e(_,{as:"h4",color:"red"},{default:t(()=>[xl]),_:1}),e(_,{as:"h4",color:"orange"},{default:t(()=>[Dl]),_:1}),e(_,{as:"h4",color:"yellow"},{default:t(()=>[Bl]),_:1}),e(_,{as:"h4",color:"olive"},{default:t(()=>[Nl]),_:1}),e(_,{as:"h4",color:"green"},{default:t(()=>[Pl]),_:1}),e(_,{as:"h4",color:"teal"},{default:t(()=>[jl]),_:1}),e(_,{as:"h4",color:"blue"},{default:t(()=>[Fl]),_:1}),e(_,{as:"h4",color:"purple"},{default:t(()=>[ql]),_:1}),e(_,{as:"h4",color:"violet"},{default:t(()=>[Ml]),_:1}),e(_,{as:"h4",color:"pink"},{default:t(()=>[Ll]),_:1}),e(_,{as:"h4",color:"brown"},{default:t(()=>[Il]),_:1}),e(_,{as:"h4",color:"grey"},{default:t(()=>[Jl]),_:1})])]),_:1},8,["code"]),e(a,{title:"Inverted",description:"A header can have its colors inverted for contrast",code:s.invertedCode},{default:t(()=>[e(c,{inverted:""},{default:t(()=>[e(_,{as:"h4",color:"red",inverted:""},{default:t(()=>[Hl]),_:1}),e(_,{as:"h4",color:"orange",inverted:""},{default:t(()=>[Ol]),_:1}),e(_,{as:"h4",color:"yellow",inverted:""},{default:t(()=>[Gl]),_:1}),e(_,{as:"h4",color:"olive",inverted:""},{default:t(()=>[Ul]),_:1}),e(_,{as:"h4",color:"green",inverted:""},{default:t(()=>[Yl]),_:1}),e(_,{as:"h4",color:"teal",inverted:""},{default:t(()=>[Wl]),_:1}),e(_,{as:"h4",color:"blue",inverted:""},{default:t(()=>[Kl]),_:1}),e(_,{as:"h4",color:"purple",inverted:""},{default:t(()=>[Ql]),_:1}),e(_,{as:"h4",color:"violet",inverted:""},{default:t(()=>[Xl]),_:1}),e(_,{as:"h4",color:"pink",inverted:""},{default:t(()=>[Zl]),_:1}),e(_,{as:"h4",color:"brown",inverted:""},{default:t(()=>[en]),_:1}),e(_,{as:"h4",color:"grey",inverted:""},{default:t(()=>[tn]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var on=x(Ua,[["render",sn]]);const an=E({name:"IconDoc",components:{DocExample:B},setup(){return{disabledCode:'<sui-icon name="users" disabled />',loadingCode:`<div>
  <sui-icon name="spinner" loading />
  <sui-icon name="notched circle" loading />
  <sui-icon name="asterisk" loading />
</div>`,fittedCode:`<div>
  This icon
  <sui-icon name="help" fitted />
  is fitted.
  <br>
  This icon
  <sui-icon name="help" />
  is not.
</div>`,sizeCode:`<div>
  <sui-icon name="home" size="mini" />
  <sui-icon name="home" size="tiny" />
  <sui-icon name="home" size="small" />
  <br>
  <sui-icon name="home" />
  <br>
  <sui-icon name="home" size="large" />
  <br>
  <sui-icon name="home" size="big" />
  <br>
  <sui-icon name="home" size="huge" />
  <br>
  <sui-icon name="home" size="massive" />
</div>`,linkCode:`<div>
  <sui-icon name="close" link />
  <sui-icon name="help" link />
</div>`,flippedCode:`<div>
  <sui-icon name="cloud" flipped="horizontally" />
  <sui-icon name="cloud" flipped="vertically" />
</div>`,rotatedCode:`<div>
  <sui-icon name="cloud" rotated="clockwise" />
  <sui-icon name="cloud" rotated="counterclockwise" />
</div>`,circularCode:`<div>
  <sui-icon name="users" circular />
  <sui-icon name="users" color="teal" circular />
  <sui-icon name="users" inverted circular />
  <sui-icon name="users" color="teal" inverted circular />
</div>`,borderedCode:`<div>
  <sui-icon name="users" bordered />
  <sui-icon name="users" bordered color="teal" />
  <sui-icon name="users" inverted bordered color="black" />
  <sui-icon name="users" inverted bordered color="teal" />
</div>`,coloredCode:`<div>
  <sui-icon name="users" color="primary" />
  <sui-icon name="users" color="secondary" />
  <sui-icon name="users" color="red" />
  <sui-icon name="users" color="orange" />
  <sui-icon name="users" color="yellow" />
  <sui-icon name="users" color="olive" />
  <sui-icon name="users" color="green" />
  <sui-icon name="users" color="teal" />
  <sui-icon name="users" color="blue" />
  <sui-icon name="users" color="violet" />
  <sui-icon name="users" color="purple" />
  <sui-icon name="users" color="pink" />
  <sui-icon name="users" color="brown" />
  <sui-icon name="users" color="grey" />
  <sui-icon name="users" color="black" />
</div>`,invertedCode:`<sui-segment inverted>
  <sui-icon name="users" inverted />
  <sui-icon name="users" inverted color="primary" />
  <sui-icon name="users" inverted color="secondary" />
  <sui-icon name="users" inverted color="red" />
  <sui-icon name="users" inverted color="orange" />
  <sui-icon name="users" inverted color="yellow" />
  <sui-icon name="users" inverted color="olive" />
  <sui-icon name="users" inverted color="green" />
  <sui-icon name="users" inverted color="teal" />
  <sui-icon name="users" inverted color="blue" />
  <sui-icon name="users" inverted color="violet" />
  <sui-icon name="users" inverted color="purple" />
  <sui-icon name="users" inverted color="pink" />
  <sui-icon name="users" inverted color="brown" />
  <sui-icon name="users" inverted color="grey" />
</sui-segment>`,iconsCode:`<sui-icon-group size="huge">
  <sui-icon name="circle outline" size="big" />
  <sui-icon name="user" />
</sui-icon-group>`,cornerIconCode:`<sui-icon-group size="huge">
  <sui-icon name="puzzle" />
  <sui-icon name="add" corner />
</sui-icon-group>`}}}),ln={class:"intro"},nn=i("Icon "),un=i(" An icon is a glyph used to represent something else "),dn=i("States"),rn=i("Variations"),cn=i(" This icon "),mn=i(" is fitted. "),_n=d("br",null,null,-1),pn=i(" This icon "),hn=i(" is not. "),gn=d("br",null,null,-1),fn=d("br",null,null,-1),bn=d("br",null,null,-1),vn=d("br",null,null,-1),$n=d("br",null,null,-1),wn=i("Groups");function Cn(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("doc-example"),m=u("sui-icon-group");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",ln,[e(_,{as:"h1"},{default:t(()=>[nn,e(b,null,{default:t(()=>[un]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[dn]),_:1}),e(a,{title:"Disabled",description:"An icon can show that it is disabled",code:s.disabledCode},{default:t(()=>[e(l,{name:"users",disabled:""})]),_:1},8,["code"]),e(a,{title:"Loading",description:"An icon can be used as a simple loader",code:s.loadingCode},{default:t(()=>[d("div",null,[e(l,{name:"spinner",loading:""}),e(l,{name:"notched circle",loading:""}),e(l,{name:"asterisk",loading:""})])]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[rn]),_:1}),e(a,{title:"Fitted",description:"An icon can be fitted, without any space to the left or right of it",code:s.fittedCode},{default:t(()=>[d("div",null,[cn,e(l,{name:"help",fitted:""}),mn,_n,pn,e(l,{name:"help"}),hn])]),_:1},8,["code"]),e(a,{title:"Size",description:"An icon can vary in size",code:s.sizeCode},{default:t(()=>[d("div",null,[e(l,{name:"home",size:"mini"}),e(l,{name:"home",size:"tiny"}),e(l,{name:"home",size:"small"}),gn,e(l,{name:"home"}),fn,e(l,{name:"home",size:"large"}),bn,e(l,{name:"home",size:"big"}),vn,e(l,{name:"home",size:"huge"}),$n,e(l,{name:"home",size:"massive"})])]),_:1},8,["code"]),e(a,{title:"Link",description:"An icon can be formatted as a link",code:s.linkCode},{default:t(()=>[d("div",null,[e(l,{name:"close",link:""}),e(l,{name:"help",link:""})])]),_:1},8,["code"]),e(a,{title:"Flipped",description:"An icon can be flipped",code:s.flippedCode},{default:t(()=>[d("div",null,[e(l,{name:"cloud",flipped:"horizontally"}),e(l,{name:"cloud",flipped:"vertically"})])]),_:1},8,["code"]),e(a,{title:"Rotated",description:"An icon can be rotated",code:s.rotatedCode},{default:t(()=>[d("div",null,[e(l,{name:"cloud",rotated:"clockwise"}),e(l,{name:"cloud",rotated:"counterclockwise"})])]),_:1},8,["code"]),e(a,{title:"Circular",description:"An icon can be formatted to appear circular",code:s.circularCode},{default:t(()=>[d("div",null,[e(l,{name:"users",circular:""}),e(l,{name:"users",color:"teal",circular:""}),e(l,{name:"users",inverted:"",circular:""}),e(l,{name:"users",color:"teal",inverted:"",circular:""})])]),_:1},8,["code"]),e(a,{title:"Bordered",description:"An icon can be formatted to appear bordered",code:s.borderedCode},{default:t(()=>[d("div",null,[e(l,{name:"users",bordered:""}),e(l,{name:"users",bordered:"",color:"teal"}),e(l,{name:"users",inverted:"",bordered:"",color:"black"}),e(l,{name:"users",inverted:"",bordered:"",color:"teal"})])]),_:1},8,["code"]),e(a,{title:"Colored",description:"An icon can be formatted with different colors",code:s.coloredCode},{default:t(()=>[d("div",null,[e(l,{name:"users",color:"primary"}),e(l,{name:"users",color:"secondary"}),e(l,{name:"users",color:"red"}),e(l,{name:"users",color:"orange"}),e(l,{name:"users",color:"yellow"}),e(l,{name:"users",color:"olive"}),e(l,{name:"users",color:"green"}),e(l,{name:"users",color:"teal"}),e(l,{name:"users",color:"blue"}),e(l,{name:"users",color:"violet"}),e(l,{name:"users",color:"purple"}),e(l,{name:"users",color:"pink"}),e(l,{name:"users",color:"brown"}),e(l,{name:"users",color:"grey"}),e(l,{name:"users",color:"black"})])]),_:1},8,["code"]),e(a,{title:"Inverted",description:"An icon can have its colors inverted for contrast",code:s.invertedCode},{default:t(()=>[e(c,{inverted:""},{default:t(()=>[e(l,{name:"users",inverted:""}),e(l,{name:"users",inverted:"",color:"primary"}),e(l,{name:"users",inverted:"",color:"secondary"}),e(l,{name:"users",inverted:"",color:"red"}),e(l,{name:"users",inverted:"",color:"orange"}),e(l,{name:"users",inverted:"",color:"yellow"}),e(l,{name:"users",inverted:"",color:"olive"}),e(l,{name:"users",inverted:"",color:"green"}),e(l,{name:"users",inverted:"",color:"teal"}),e(l,{name:"users",inverted:"",color:"blue"}),e(l,{name:"users",inverted:"",color:"violet"}),e(l,{name:"users",inverted:"",color:"purple"}),e(l,{name:"users",inverted:"",color:"pink"}),e(l,{name:"users",inverted:"",color:"brown"}),e(l,{name:"users",inverted:"",color:"grey"})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[wn]),_:1}),e(a,{title:"Icons",description:"Several icons can be used together as a group",code:s.iconsCode},{default:t(()=>[e(m,{size:"huge"},{default:t(()=>[e(l,{name:"circle outline",size:"big"}),e(l,{name:"user"})]),_:1})]),_:1},8,["code"]),e(a,{title:"Corner Icon",description:"A group of icons can display a smaller corner icon",code:s.cornerIconCode},{default:t(()=>[e(m,{size:"huge"},{default:t(()=>[e(l,{name:"puzzle"}),e(l,{name:"add",corner:""})]),_:1})]),_:1},8,["code"])]),_:1})])}var yn=x(an,[["render",Cn]]),k="/vue-fomantic-ui/images/wireframe/image.png",de="/vue-fomantic-ui/images/wireframe/image-text.png",Z="/vue-fomantic-ui/images/wireframe/white-image.png",J="/vue-fomantic-ui/images/wireframe/square-image.png";const An=E({name:"ImageDoc",components:{DocExample:B},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
  as="a"
  size="medium"
  src="/images/image-text.png"
  href="https://google.com"
  target="_blank"
/>`,hiddenCode:'<sui-image hidden src="/images/image.png" size="small" />',disabledCode:'<sui-image disabled src="/images/image.png" size="small" />',avatarCode:`<div>
  <sui-image avatar src="/images/image.png" />
  <span>Username</span>
</div>`,borderedCode:'<sui-image bordered size="medium" src="/images/white-image.png" />',fluidCode:'<sui-image fluid src="/images/image.png" />',roundedCode:'<sui-image rounded size="medium" src="/images/image.png" />',circularCode:'<sui-image circular size="medium" src="/images/square-image.png" />',verticallyAlignedCode:`<div>
  <sui-image verticalAlign="top" size="tiny" src="/images/square-image.png" />
  <span>Top Aligned</span>
  <sui-divider />
  <sui-image verticalAlign="middle" size="tiny" src="/images/square-image.png" />
  <span>Middle Aligned</span>
  <sui-divider />
  <sui-image verticalAlign="bottom" size="tiny" src="/images/square-image.png" />
  <span>Bottom Aligned</span>
</div>`,centeredCode:`<sui-segment>
  <sui-image centered size="medium" src="/images/wireframe/image.png" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
  <sui-image centered size="small" src="/images/wireframe/image-text.png" />
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</sui-segment>`,spacedCode:`<sui-segment>
  <p>Te eum doming eirmod, nominati pertinacia 
  <sui-image spaced size="mini" src="/images/image.png" />
    argumentum ad his. Ex eam alia facete scriptorem, 
    est autem aliquip detraxit at. Usu ocurreret referrentur at, 
    cu epicurei appellantur vix. Cum ea laoreet recteque electram, 
    eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
</sui-segment>`,floatedCode:`<sui-segment>
  <sui-image floated="left" size="small" src="/images/image-text.png" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. 
    Ex eam alia facete scriptorem, est autem aliquip detraxit at. 
    Usu ocurreret referrentur at, cu epicurei appellantur vix. 
    Cum ea laoreet recteque electram, eos choro alterum definiebas in. 
    Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <sui-image floated="right" size="small" src="/images/image-text.png" />
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. 
    Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, 
    his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, 
    vim vivendum maiestatis in.</p>
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. 
    Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. 
    Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, 
    wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, 
    quas minimum postulant per id.</p>
</sui-segment>`,sizeCode:`<div>
  <sui-image size="mini" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="tiny" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="medium" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="large" src="/images/image.png" />
</div>`,sizeGroupCode:`<sui-image-group size="tiny">
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
</sui-image-group>`}}}),kn={class:"intro"},Sn=i("Image "),zn=i(" An image is a graphic representation of something "),Tn=i("Types"),Rn=i("States"),Vn=i("Variations"),En=d("span",null,"Username",-1),xn=d("span",null,"Top Aligned",-1),Dn=d("span",null,"Middle Aligned",-1),Bn=d("span",null,"Bottom Aligned",-1),Nn=d("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),Pn=d("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),jn=d("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),Fn=i("Te eum doming eirmod, nominati pertinacia "),qn=i(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque."),Mn=d("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),Ln=d("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),In=d("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),Jn=i("Groups");function Hn(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-image"),m=u("doc-example"),f=u("sui-image-group");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",kn,[e(_,{as:"h1"},{default:t(()=>[Sn,e(b,null,{default:t(()=>[zn]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Tn]),_:1}),e(m,{title:"Image",description:"An image",code:s.imageCode},{default:t(()=>[e(a,{src:k,size:"small"})]),_:1},8,["code"]),e(m,{title:"Image Link",description:"An image can be formatted to link to other content",code:s.imageLinkCode},{default:t(()=>[e(a,{as:"a",size:"medium",src:de,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Rn]),_:1}),e(m,{title:"Hidden",description:"An image can be hidden",code:s.hiddenCode},{default:t(()=>[e(a,{hidden:"",src:k,size:"small"})]),_:1},8,["code"]),e(m,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:s.disabledCode},{default:t(()=>[e(a,{disabled:"",src:k,size:"small"})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Vn]),_:1}),e(m,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:s.avatarCode},{default:t(()=>[d("div",null,[e(a,{avatar:"",src:k}),En])]),_:1},8,["code"]),e(m,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:s.borderedCode},{default:t(()=>[e(a,{bordered:"",size:"medium",src:Z})]),_:1},8,["code"]),e(m,{title:"Fluid",description:"An image can take up the width of its container",code:s.fluidCode},{default:t(()=>[e(a,{fluid:"",src:k})]),_:1},8,["code"]),e(m,{title:"Rounded",description:"An image may appear rounded",code:s.roundedCode},{default:t(()=>[e(a,{rounded:"",size:"medium",src:k})]),_:1},8,["code"]),e(m,{title:"Circular",description:"An image may appear circular",code:s.circularCode},{default:t(()=>[e(a,{circular:"",size:"medium",src:J})]),_:1},8,["code"]),e(m,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:s.verticallyAlignedCode},{default:t(()=>[d("div",null,[e(a,{verticalAlign:"top",size:"tiny",src:J}),xn,e(o),e(a,{verticalAlign:"middle",size:"tiny",src:J}),Dn,e(o),e(a,{verticalAlign:"bottom",size:"tiny",src:J}),Bn])]),_:1},8,["code"]),e(m,{title:"Centered",description:"An image can appear centered in a content block",code:s.centeredCode},{default:t(()=>[e(c,null,{default:t(()=>[e(a,{centered:"",size:"medium",src:k}),Nn,Pn,e(a,{centered:"",size:"small",src:de}),jn]),_:1})]),_:1},8,["code"]),e(m,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:s.spacedCode},{default:t(()=>[e(c,null,{default:t(()=>[d("p",null,[Fn,e(a,{spaced:"",size:"mini",src:k}),qn])]),_:1})]),_:1},8,["code"]),e(m,{title:"Floated",description:"An image can sit to the left or right of other content",code:s.floatedCode},{default:t(()=>[e(c,null,{default:t(()=>[e(a,{floated:"left",size:"small",src:de}),Mn,e(a,{floated:"right",size:"small",src:de}),Ln,In]),_:1})]),_:1},8,["code"]),e(m,{title:"Size",description:"An image may appear at different sizes",code:s.sizeCode},{default:t(()=>[d("div",null,[e(a,{size:"mini",src:k}),e(o,{hidden:""}),e(a,{size:"tiny",src:k}),e(o,{hidden:""}),e(a,{size:"medium",src:k}),e(o,{hidden:""}),e(a,{size:"large",src:k})])]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Jn]),_:1}),e(m,{title:"Size",description:"A group of images can be formatted to have the same size",code:s.sizeGroupCode},{default:t(()=>[e(f,{size:"tiny"},{default:t(()=>[e(a,{src:k}),e(a,{src:k}),e(a,{src:k}),e(a,{src:k})]),_:1})]),_:1},8,["code"])]),_:1})])}var On=x(An,[["render",Hn]]);const Gn=E({name:"InputDoc",components:{DocExample:B},setup(){return{inputCode:'<sui-input placeholder="Search..." />',focusCode:'<sui-input focus placeholder="Search..." />',loadingCode:`<div>
  <sui-input loading placeholder="Search..." />
  <sui-divider hidden />
  <sui-input loading iconPosition="left" placeholder="Search..." />
</div>`,disabledCode:'<sui-input disabled placeholder="Search..." />',errorCode:'<sui-input error placeholder="Search..." />',iconCode:'<sui-input icon="search" placeholder="Search..." />',labeledCode:'<sui-input label="http://" placeholder="mysite.com" />',actionCode:'<sui-input action="Search" placeholder="Search..." />',transparentCode:'<sui-input transparent placeholder="Search..." />',invertedCode:`<sui-segment inverted>
  <sui-input inverted placeholder="Search..." />
  <sui-divider inverted />
  <sui-input inverted icon="search" iconPosition="left" placeholder="Search..." />
  <sui-divider inverted />
  <sui-input inverted transparent icon="search" placeholder="Search..." />
</sui-segment>`,fluidCode:'<sui-input fluid icon="search" placeholder="Search..." />',sizeCode:`<div>
  <sui-input size="mini" icon="search" placeholder="Search mini" />
  <sui-divider hidden />
  <sui-input size="small" icon="search" placeholder="Search small" />
  <sui-divider hidden />
  <sui-input size="large" icon="search" placeholder="Search large" />
  <sui-divider hidden />
  <sui-input size="big" icon="search" placeholder="Search big" />
  <sui-divider hidden />
  <sui-input size="huge" icon="search" placeholder="Search huge" />
  <sui-divider hidden />
  <sui-input size="massive" icon="search" placeholder="Search massive" />
</div>`}}}),Un={class:"intro"},Yn=i("Input "),Wn=i(" An input is a field used to elicit a response from a user "),Kn=i("Types"),Qn=i("States"),Xn=i("Variations");function Zn(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-input"),m=u("doc-example");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",Un,[e(_,{as:"h1"},{default:t(()=>[Yn,e(b,null,{default:t(()=>[Wn]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Kn]),_:1}),e(m,{title:"Input",description:"A standard input",code:s.inputCode},{default:t(()=>[e(a,{placeholder:"Search..."})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Qn]),_:1}),e(m,{title:"Focus",description:"An input field can show a user is currently interacting with it",code:s.focusCode},{default:t(()=>[e(a,{focus:"",placeholder:"Search..."})]),_:1},8,["code"]),e(m,{title:"Loading",description:"An icon input field can show that it is currently loading data",code:s.loadingCode},{default:t(()=>[d("div",null,[e(a,{loading:"",placeholder:"Search..."}),e(o,{hidden:""}),e(a,{loading:"",iconPosition:"left",placeholder:"Search..."})])]),_:1},8,["code"]),e(m,{title:"Disabled",description:"An input field can show that it is disabled",code:s.disabledCode},{default:t(()=>[e(a,{disabled:"",placeholder:"Search..."})]),_:1},8,["code"]),e(m,{title:"Error",description:"An input field can show the data contains errors",code:s.errorCode},{default:t(()=>[e(a,{error:"",placeholder:"Search..."})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Xn]),_:1}),e(m,{title:"Icon",description:"An input can be formatted with an icon",code:s.iconCode},{default:t(()=>[e(a,{icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(m,{title:"Labeled",description:"An input can be formatted with a label",code:s.labeledCode},{default:t(()=>[d("div",null,[e(a,{label:"http://",placeholder:"mysite.com"})])]),_:1},8,["code"]),e(m,{title:"Action",description:"An input can be formatted to alert the user to an action they may perform",code:s.actionCode},{default:t(()=>[e(a,{action:"Search",placeholder:"Search..."})]),_:1},8,["code"]),e(m,{title:"Transparent",description:"A transparent input has no background",code:s.transparentCode},{default:t(()=>[e(a,{transparent:"",placeholder:"Search..."})]),_:1},8,["code"]),e(m,{title:"Inverted",description:"An input can be formatted to appear on dark backgrounds",code:s.invertedCode},{default:t(()=>[e(c,{inverted:""},{default:t(()=>[e(a,{inverted:"",placeholder:"Search..."}),e(o,{inverted:""}),e(a,{inverted:"",icon:"search",iconPosition:"left",placeholder:"Search..."}),e(o,{inverted:""}),e(a,{inverted:"",transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["code"]),e(m,{title:"Fluid",description:"An input can take the size of its container",code:s.fluidCode},{default:t(()=>[e(a,{fluid:"",icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(m,{title:"Size",description:"An input can vary in size",code:s.sizeCode},{default:t(()=>[d("div",null,[e(a,{size:"mini",icon:"search",placeholder:"Search mini"}),e(o,{hidden:""}),e(a,{size:"small",icon:"search",placeholder:"Search small"}),e(o,{hidden:""}),e(a,{size:"large",icon:"search",placeholder:"Search large"}),e(o,{hidden:""}),e(a,{size:"big",icon:"search",placeholder:"Search big"}),e(o,{hidden:""}),e(a,{size:"huge",icon:"search",placeholder:"Search huge"}),e(o,{hidden:""}),e(a,{size:"massive",icon:"search",placeholder:"Search massive"})])]),_:1},8,["code"])]),_:1})])}var eu=x(Gn,[["render",Zn]]),he="/vue-fomantic-ui/images/avatar/small/joe.jpg",G="/vue-fomantic-ui/images/avatar/small/elliot.jpg",ee="/vue-fomantic-ui/images/avatar/small/stevie.jpg";const tu=E({name:"LabelDoc",components:{DocExample:B},setup(){return{labelCode:`<sui-label>
  <sui-icon name="mail" /> 23
</sui-label>`,imageCode:`<div>
  <sui-label as="a" image>
    <img src="/images/avatar/small/joe.jpg" />
    Joe
  </sui-label>
  <sui-label as="a" image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label as="a" image>
    <img src="/images/avatar/small/stevie.jpg" />
    Stevie
  </sui-label>
</div>`,pointingCode:`<sui-form fluid>
  <sui-form-field>
    <input type="text" placeholder="First name" />
    <sui-label pointing>Please enter a value</sui-label>
  </sui-form-field>
  <sui-divider />

  <sui-form-field>
    <sui-label pointing="below">Please enter a value</sui-label>
    <input type="text" placeholder="Last name" />
  </sui-form-field>
  <sui-divider />

  <sui-form-field inline>
    <input type="text" placeholder="Username" />
    <sui-label pointing="left">That name is taken!</sui-label>
  </sui-form-field>
  <sui-divider />

  <sui-form-field inline>
    <sui-label pointing="right">Your password must be 6 characters or more</sui-label>
    <input type="password" placeholder="Password" />
  </sui-form-field>
</sui-form>`,cornerCode:`<sui-grid :columns="2">
  <sui-grid-column>
    <sui-image
      fluid
      src="/images/wireframe/image.png"
      :label="{ corner: 'left', icon: 'heart' }"
    />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image
      fluid
      src="/images/wireframe/image.png"
      :label="{ corner: 'right', icon: 'save', color: 'red' }"
    />
  </sui-grid-column>
</sui-grid>`,tagCode:`<div>
  <sui-label tag>New</sui-label>
  <sui-label tag color="red">Upcoming</sui-label>
  <sui-label tag color="teal">Featured</sui-label>
</div>`,ribbonCode:`<sui-grid :columns="2">
  <sui-grid-column>
    <sui-segment raised>
      <sui-label as="a" ribbon color="red">Overview</sui-label>
      <span>Account Details</span>
      <sui-image src="/images/wireframe/paragraph.png" />

      <sui-label as="a" ribbon color="blue">Community</sui-label>
      <span>User Reviews</span>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segment>
  </sui-grid-column>

  <sui-grid-column>
    <sui-segment raised>
      <sui-label as="a" ribbon="right" color="orange">Specs</sui-label>
      <sui-image src="/images/wireframe/paragraph.png" />

      <sui-label as="a" ribbon="right" color="teal">Reviews</sui-label>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,attachedCode:`<sui-grid :columns="3">
  <sui-grid-row>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top">HTML</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom">CSS</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top right">Code</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top left">View</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom left">User View</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom right">Admin View</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,horizontalCode:`<sui-list divided selection>
  <sui-list-item>
    <sui-label color="red" horizontal>Fruit</sui-label>
    Kumquats
  </sui-list-item>
  <sui-list-item>
    <sui-label  color="purple" horizontal>Candy</sui-label>
    Ice Cream
  </sui-list-item>
  <sui-list-item>
    <sui-label color="red" horizontal>Fruit</sui-label>
    Orange
  </sui-list-item>
  <sui-list-item>
    <sui-label horizontal>Dog</sui-label>
    Poodle
  </sui-list-item>
</sui-list>`,floatingCode:`<sui-menu compact>
  <sui-menu-item>
    <sui-icon name="mail" /> Messages
    <sui-label floating color="red">22</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="users" /> Friends
    <sui-label floating color="teal">22</sui-label>
  </sui-menu-item>
</sui-menu>`,detailCode:`<sui-label>
  Dogs
  <sui-label-detail>214</sui-label-detail>
</sui-label>`,iconCode:`<div>
  <sui-label as="a">
    <sui-icon name="mail" />
    Mail
  </sui-label>
  <sui-label as="a">
    Tag
    <sui-icon name="delete" />
  </sui-label>
</div>`,imageIncludeCode:`<div>
  <sui-label as="a">
    <sui-image avatar spaced="right" src="/images/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label as="a">
    <img src="/images/avatar/small/stevie.jpg" />
    Stevie
  </sui-label>
</div>`,linkCode:`<sui-label as="a" link>
  <sui-icon name="mail" /> 23
</sui-label>`,circularCode:`<div>
  <sui-label as="a" circular color="red">2</sui-label>
  <sui-label as="a" circular color="orange">2</sui-label>
  <sui-label as="a" circular color="yellow">2</sui-label>
  <sui-label as="a" circular color="olive">2</sui-label>
  <sui-label as="a" circular color="green">2</sui-label>
  <sui-label as="a" circular color="teal">2</sui-label>
  <sui-label as="a" circular color="blue">2</sui-label>
  <sui-label as="a" circular color="violet">2</sui-label>
  <sui-label as="a" circular color="purple">2</sui-label>
  <sui-label as="a" circular color="pink">2</sui-label>
  <sui-label as="a" circular color="brown">2</sui-label>
  <sui-label as="a" circular color="grey">2</sui-label>
  <sui-label as="a" circular color="black">2</sui-label>
</div>`,basicCode:`<div>
  <sui-label basic as="a">Basic</sui-label>
  <sui-label basic as="a" pointing>Pointing</sui-label>
  <sui-label basic as="a" image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label basic as="a" pointing color="red">Red Pointing</sui-label>
  <sui-label basic as="a" color="blue">Blue</sui-label>
</div>`,coloredCode:`<div>
  <sui-label as="a" color="primary">Primary</sui-label>
  <sui-label as="a" color="secondary">Secondary</sui-label>
  <sui-label as="a" color="red">Red</sui-label>
  <sui-label as="a" color="orange">Orange</sui-label>
  <sui-label as="a" color="yellow">Yellow</sui-label>
  <sui-label as="a" color="olive">Olive</sui-label>
  <sui-label as="a" color="green">Green</sui-label>
  <sui-label as="a" color="teal">Teal</sui-label>
  <sui-label as="a" color="blue">Blue</sui-label>
  <sui-label as="a" color="violet">Violet</sui-label>
  <sui-label as="a" color="purple">Purple</sui-label>
  <sui-label as="a" color="pink">Pink</sui-label>
  <sui-label as="a" color="brown">Brown</sui-label>
  <sui-label as="a" color="grey">Grey</sui-label>
  <sui-label as="a" color="black">Black</sui-label>
</div>`,basicTagCode:`<div>
  <sui-label as="a" basic tag color="primary">Primary</sui-label>
  <sui-label as="a" basic tag color="secondary">Secondary</sui-label>
  <sui-label as="a" basic tag color="red">Red</sui-label>
  <sui-label as="a" basic tag color="orange">Orange</sui-label>
  <sui-label as="a" basic tag color="yellow">Yellow</sui-label>
  <sui-label as="a" basic tag color="olive">Olive</sui-label>
  <sui-label as="a" basic tag color="green">Green</sui-label>
  <sui-label as="a" basic tag color="teal">Teal</sui-label>
  <sui-label as="a" basic tag color="blue">Blue</sui-label>
  <sui-label as="a" basic tag color="violet">Violet</sui-label>
  <sui-label as="a" basic tag color="purple">Purple</sui-label>
  <sui-label as="a" basic tag color="pink">Pink</sui-label>
  <sui-label as="a" basic tag color="brown">Brown</sui-label>
  <sui-label as="a" basic tag color="grey">Grey</sui-label>
  <sui-label as="a" basic tag color="black">Black</sui-label>
</div>`,sizeCode:`<div>
  <sui-label size="mini">Mini</sui-label>
  <sui-label size="tiny">Tiny</sui-label>
  <sui-label size="small">Small</sui-label>
  <sui-label>Medium</sui-label>
  <sui-label size="large">Large</sui-label>
  <sui-label size="big">Big</sui-label>
  <sui-label size="huge">Huge</sui-label>
  <sui-label size="massive">Massive</sui-label>
</div>`,groupSizeCode:`<sui-label-group size="huge">
  <sui-label>Fun</sui-label>
  <sui-label>Happy</sui-label>
  <sui-label>Smart</sui-label>
  <sui-label>Witty</sui-label>
</sui-label-group>`,coloredGroupCode:`<sui-label-group color="blue">
  <sui-label as="a">
    Fun <sui-icon name="close" />
  </sui-label>
  <sui-label as="a">
    Happy
    <sui-label-detail>22</sui-label-detail>
  </sui-label>
  <sui-label as="a">Smart</sui-label>
  <sui-label as="a">Insane</sui-label>
  <sui-label as="a">Exciting</sui-label>
</sui-label-group>`,basicGroupCode:`<sui-label-group basic>
  <sui-label as="a">
    Fun <sui-icon name="close" />
  </sui-label>
  <sui-label as="a">
    Happy
    <sui-label-detail>22</sui-label-detail>
  </sui-label>
  <sui-label as="a">Smart</sui-label>
  <sui-label as="a">Insane</sui-label>
  <sui-label as="a">Exciting</sui-label>
</sui-label-group>`,tagGroupCode:`<sui-label-group tag>
  <sui-label as="a">$10.00</sui-label>
  <sui-label as="a">$19.99</sui-label>
  <sui-label as="a">$24.99</sui-label>
  <sui-label as="a">$30.99</sui-label>
  <sui-label as="a">$10.25</sui-label>
</sui-label-group>`,circularGroupCode:`<sui-label-group circular>
  <sui-label>11</sui-label>
  <sui-label>22</sui-label>
  <sui-label>33</sui-label>
  <sui-label>44</sui-label>
  <sui-label>141</sui-label>
</sui-label-group>`}}}),iu={class:"intro"},su=i("Label "),ou=i(" A label displays content classification "),au=i("Types"),lu=i(" 23 "),nu=d("img",{src:he},null,-1),uu=i(" Joe "),du=d("img",{src:G},null,-1),ru=i(" Elliot "),cu=d("img",{src:ee},null,-1),mu=i(" Stevie "),_u=d("input",{type:"text",placeholder:"First name"},null,-1),pu=i("Please enter a value"),hu=i("Please enter a value"),gu=d("input",{type:"text",placeholder:"Last name"},null,-1),fu=d("input",{type:"text",placeholder:"Username"},null,-1),bu=i("That name is taken!"),vu=i("Your password must be 6 characters or more"),$u=d("input",{type:"password",placeholder:"Password"},null,-1),wu=i("New"),Cu=i("Upcoming"),yu=i("Featured"),Au=i("Overview"),ku=d("span",null,"Account Details",-1),Su=i("Community"),zu=d("span",null,"User Reviews",-1),Tu=i("Specs"),Ru=i("Reviews"),Vu=i("HTML"),Eu=i("CSS"),xu=i("Code"),Du=i("View"),Bu=i("User View"),Nu=i("Admin View"),Pu=i("Fruit"),ju=i(" Kumquats "),Fu=i("Candy"),qu=i(" Ice Cream "),Mu=i("Fruit"),Lu=i(" Orange "),Iu=i("Dog"),Ju=i(" Poodle "),Hu=i(" Messages "),Ou=i("22"),Gu=i(" Friends "),Uu=i("22"),Yu=i("Content"),Wu=i(" Dogs "),Ku=i("214"),Qu=i(" Mail "),Xu=i(" Tag "),Zu=i(" Elliot "),ed=d("img",{src:ee},null,-1),td=i(" Stevie "),id=i(" 23 "),sd=i("Variations"),od=i("2"),ad=i("2"),ld=i("2"),nd=i("2"),ud=i("2"),dd=i("2"),rd=i("2"),cd=i("2"),md=i("2"),_d=i("2"),pd=i("2"),hd=i("2"),gd=i("2"),fd=i("Basic"),bd=i("Pointing"),vd=d("img",{src:G},null,-1),$d=i(" Elliot "),wd=i("Red Pointing"),Cd=i("Blue"),yd=i("Primary"),Ad=i("Secondary"),kd=i("Red"),Sd=i("Orange"),zd=i("Yellow"),Td=i("Olive"),Rd=i("Green"),Vd=i("Teal"),Ed=i("Blue"),xd=i("Violet"),Dd=i("Purple"),Bd=i("Pink"),Nd=i("Brown"),Pd=i("Grey"),jd=i("Black"),Fd=i("Primary"),qd=i("Secondary"),Md=i("Red"),Ld=i("Orange"),Id=i("Yellow"),Jd=i("Olive"),Hd=i("Green"),Od=i("Teal"),Gd=i("Blue"),Ud=i("Violet"),Yd=i("Purple"),Wd=i("Pink"),Kd=i("Brown"),Qd=i("Grey"),Xd=i("Black"),Zd=i("Mini"),er=i("Tiny"),tr=i("Small"),ir=i("Medium"),sr=i("Large"),or=i("Big"),ar=i("Huge"),lr=i("Massive"),nr=i("Groups"),ur=i("Fun"),dr=i("Happy"),rr=i("Smart"),cr=i("Witty"),mr=i(" Fun "),_r=i(" Happy "),pr=i("22"),hr=i("Smart"),gr=i("Insane"),fr=i("Exciting"),br=i(" Fun "),vr=i(" Happy "),$r=i("22"),wr=i("Smart"),Cr=i("Insane"),yr=i("Exciting"),Ar=i("$10.00"),kr=i("$19.99"),Sr=i("$24.99"),zr=i("$30.99"),Tr=i("$10.25"),Rr=i("11"),Vr=i("22"),Er=i("33"),xr=i("44"),Dr=i("141");function Br(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-label"),m=u("doc-example"),f=u("sui-form-field"),v=u("sui-form"),p=u("sui-image"),w=u("sui-grid-column"),S=u("sui-grid"),R=u("sui-grid-row"),F=u("sui-list-item"),M=u("sui-list"),L=u("sui-label-detail"),q=u("sui-label-group");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",iu,[e(_,{as:"h1"},{default:t(()=>[su,e(b,null,{default:t(()=>[ou]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[au]),_:1}),e(m,{title:"Label",description:"A label",code:s.labelCode},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"mail"}),lu]),_:1})]),_:1},8,["code"]),e(m,{title:"Image",description:"A label can be formatted to emphasize an image",code:s.imageCode},{default:t(()=>[d("div",null,[e(a,{as:"a",image:""},{default:t(()=>[nu,uu]),_:1}),e(a,{as:"a",image:""},{default:t(()=>[du,ru]),_:1}),e(a,{as:"a",image:""},{default:t(()=>[cu,mu]),_:1})])]),_:1},8,["code"]),e(m,{title:"Pointing",description:"A label can point to content next to it",code:s.pointingCode},{default:t(()=>[e(v,{fluid:""},{default:t(()=>[e(f,null,{default:t(()=>[_u,e(a,{pointing:""},{default:t(()=>[pu]),_:1})]),_:1}),e(o),e(f,null,{default:t(()=>[e(a,{pointing:"below"},{default:t(()=>[hu]),_:1}),gu]),_:1}),e(o),e(f,{inline:""},{default:t(()=>[fu,e(a,{pointing:"left"},{default:t(()=>[bu]),_:1})]),_:1}),e(o),e(f,{inline:""},{default:t(()=>[e(a,{pointing:"right"},{default:t(()=>[vu]),_:1}),$u]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Corner",description:"A label can position itself in the corner of an element",code:s.cornerCode},{default:t(()=>[e(S,{columns:2},{default:t(()=>[e(w,null,{default:t(()=>[e(p,{fluid:"",src:k,label:{corner:"left",icon:"heart"}})]),_:1}),e(w,null,{default:t(()=>[e(p,{fluid:"",src:k,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Tag",description:"A label can appear as a tag",code:s.tagCode},{default:t(()=>[d("div",null,[e(a,{tag:""},{default:t(()=>[wu]),_:1}),e(a,{tag:"",color:"red"},{default:t(()=>[Cu]),_:1}),e(a,{tag:"",color:"teal"},{default:t(()=>[yu]),_:1})])]),_:1},8,["code"]),e(m,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:s.ribbonCode},{default:t(()=>[e(S,{columns:2},{default:t(()=>[e(w,null,{default:t(()=>[e(c,{raised:""},{default:t(()=>[e(a,{as:"a",ribbon:"",color:"red"},{default:t(()=>[Au]),_:1}),ku,e(p,{src:D}),e(a,{as:"a",ribbon:"",color:"blue"},{default:t(()=>[Su]),_:1}),zu,e(p,{src:D})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(c,{raised:""},{default:t(()=>[e(a,{as:"a",ribbon:"right",color:"orange"},{default:t(()=>[Tu]),_:1}),e(p,{src:D}),e(a,{as:"a",ribbon:"right",color:"teal"},{default:t(()=>[Ru]),_:1}),e(p,{src:D})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Attached",description:"A label can attach to a content segment",code:s.attachedCode},{default:t(()=>[e(S,{columns:3},{default:t(()=>[e(R,null,{default:t(()=>[e(w,null,{default:t(()=>[e(c,{padded:""},{default:t(()=>[e(a,{attached:"top"},{default:t(()=>[Vu]),_:1}),e(p,{src:D})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(c,{padded:""},{default:t(()=>[e(a,{attached:"bottom"},{default:t(()=>[Eu]),_:1}),e(p,{src:D})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(c,{padded:""},{default:t(()=>[e(a,{attached:"top right"},{default:t(()=>[xu]),_:1}),e(p,{src:D})]),_:1})]),_:1})]),_:1}),e(R,null,{default:t(()=>[e(w,null,{default:t(()=>[e(c,{padded:""},{default:t(()=>[e(a,{attached:"top left"},{default:t(()=>[Du]),_:1}),e(p,{src:D})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(c,{padded:""},{default:t(()=>[e(a,{attached:"bottom left"},{default:t(()=>[Bu]),_:1}),e(p,{src:D})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(c,{padded:""},{default:t(()=>[e(a,{attached:"bottom right"},{default:t(()=>[Nu]),_:1}),e(p,{src:D})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:s.horizontalCode},{default:t(()=>[e(M,{divided:"",selection:""},{default:t(()=>[e(F,null,{default:t(()=>[e(a,{color:"red",horizontal:""},{default:t(()=>[Pu]),_:1}),ju]),_:1}),e(F,null,{default:t(()=>[e(a,{color:"purple",horizontal:""},{default:t(()=>[Fu]),_:1}),qu]),_:1}),e(F,null,{default:t(()=>[e(a,{color:"red",horizontal:""},{default:t(()=>[Mu]),_:1}),Lu]),_:1}),e(F,null,{default:t(()=>[e(a,{horizontal:""},{default:t(()=>[Iu]),_:1}),Ju]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Floating",description:"A label can float above or below another element",code:s.floatingCode},{default:t(()=>[e(n,{compact:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,{name:"mail"}),Hu,e(a,{floating:"",color:"red"},{default:t(()=>[Ou]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{name:"users"}),Gu,e(a,{floating:"",color:"teal"},{default:t(()=>[Uu]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Yu]),_:1}),e(m,{title:"Detail",description:"A label can contain a detail",code:s.detailCode},{default:t(()=>[e(a,null,{default:t(()=>[Wu,e(L,null,{default:t(()=>[Ku]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Icon",description:"A label can include an icon",code:s.iconCode},{default:t(()=>[d("div",null,[e(a,{as:"a"},{default:t(()=>[e(l,{name:"mail"}),Qu]),_:1}),e(a,{as:"a"},{default:t(()=>[Xu,e(l,{name:"delete"})]),_:1})])]),_:1},8,["code"]),e(m,{title:"Image",description:"A label can include an image",code:s.imageIncludeCode},{default:t(()=>[d("div",null,[e(a,{as:"a"},{default:t(()=>[e(p,{avatar:"",spaced:"right",src:G}),Zu]),_:1}),e(a,{as:"a"},{default:t(()=>[ed,td]),_:1})])]),_:1},8,["code"]),e(m,{title:"Link",description:"A label can be a link or contain an item that links",code:s.linkCode},{default:t(()=>[e(a,{as:"a",link:""},{default:t(()=>[e(l,{name:"mail"}),id]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[sd]),_:1}),e(m,{title:"Circular",description:"A label can be circular",code:s.circularCode},{default:t(()=>[d("div",null,[e(a,{as:"a",circular:"",color:"red"},{default:t(()=>[od]),_:1}),e(a,{as:"a",circular:"",color:"orange"},{default:t(()=>[ad]),_:1}),e(a,{as:"a",circular:"",color:"yellow"},{default:t(()=>[ld]),_:1}),e(a,{as:"a",circular:"",color:"olive"},{default:t(()=>[nd]),_:1}),e(a,{as:"a",circular:"",color:"green"},{default:t(()=>[ud]),_:1}),e(a,{as:"a",circular:"",color:"teal"},{default:t(()=>[dd]),_:1}),e(a,{as:"a",circular:"",color:"blue"},{default:t(()=>[rd]),_:1}),e(a,{as:"a",circular:"",color:"violet"},{default:t(()=>[cd]),_:1}),e(a,{as:"a",circular:"",color:"purple"},{default:t(()=>[md]),_:1}),e(a,{as:"a",circular:"",color:"pink"},{default:t(()=>[_d]),_:1}),e(a,{as:"a",circular:"",color:"brown"},{default:t(()=>[pd]),_:1}),e(a,{as:"a",circular:"",color:"grey"},{default:t(()=>[hd]),_:1}),e(a,{as:"a",circular:"",color:"black"},{default:t(()=>[gd]),_:1})])]),_:1},8,["code"]),e(m,{title:"Basic",description:"A label can reduce its complexity",code:s.basicCode},{default:t(()=>[d("div",null,[e(a,{basic:"",as:"a"},{default:t(()=>[fd]),_:1}),e(a,{basic:"",as:"a",pointing:""},{default:t(()=>[bd]),_:1}),e(a,{basic:"",as:"a",image:""},{default:t(()=>[vd,$d]),_:1}),e(a,{basic:"",as:"a",pointing:"",color:"red"},{default:t(()=>[wd]),_:1}),e(a,{basic:"",as:"a",color:"blue"},{default:t(()=>[Cd]),_:1})])]),_:1},8,["code"]),e(m,{title:"Colored",description:"A label can have different colors",code:s.coloredCode},{default:t(()=>[d("div",null,[e(a,{as:"a",color:"primary"},{default:t(()=>[yd]),_:1}),e(a,{as:"a",color:"secondary"},{default:t(()=>[Ad]),_:1}),e(a,{as:"a",color:"red"},{default:t(()=>[kd]),_:1}),e(a,{as:"a",color:"orange"},{default:t(()=>[Sd]),_:1}),e(a,{as:"a",color:"yellow"},{default:t(()=>[zd]),_:1}),e(a,{as:"a",color:"olive"},{default:t(()=>[Td]),_:1}),e(a,{as:"a",color:"green"},{default:t(()=>[Rd]),_:1}),e(a,{as:"a",color:"teal"},{default:t(()=>[Vd]),_:1}),e(a,{as:"a",color:"blue"},{default:t(()=>[Ed]),_:1}),e(a,{as:"a",color:"violet"},{default:t(()=>[xd]),_:1}),e(a,{as:"a",color:"purple"},{default:t(()=>[Dd]),_:1}),e(a,{as:"a",color:"pink"},{default:t(()=>[Bd]),_:1}),e(a,{as:"a",color:"brown"},{default:t(()=>[Nd]),_:1}),e(a,{as:"a",color:"grey"},{default:t(()=>[Pd]),_:1}),e(a,{as:"a",color:"black"},{default:t(()=>[jd]),_:1})])]),_:1},8,["code"]),e(m,{title:"Basic Tag",description:"",code:s.basicTagCode},{default:t(()=>[d("div",null,[e(a,{as:"a",basic:"",tag:"",color:"primary"},{default:t(()=>[Fd]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"secondary"},{default:t(()=>[qd]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"red"},{default:t(()=>[Md]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"orange"},{default:t(()=>[Ld]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"yellow"},{default:t(()=>[Id]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"olive"},{default:t(()=>[Jd]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"green"},{default:t(()=>[Hd]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"teal"},{default:t(()=>[Od]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"blue"},{default:t(()=>[Gd]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"violet"},{default:t(()=>[Ud]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"purple"},{default:t(()=>[Yd]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"pink"},{default:t(()=>[Wd]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"brown"},{default:t(()=>[Kd]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"grey"},{default:t(()=>[Qd]),_:1}),e(a,{as:"a",basic:"",tag:"",color:"black"},{default:t(()=>[Xd]),_:1})])]),_:1},8,["code"]),e(m,{title:"Size",description:"A label can be small or large",code:s.sizeCode},{default:t(()=>[d("div",null,[e(a,{size:"mini"},{default:t(()=>[Zd]),_:1}),e(a,{size:"tiny"},{default:t(()=>[er]),_:1}),e(a,{size:"small"},{default:t(()=>[tr]),_:1}),e(a,null,{default:t(()=>[ir]),_:1}),e(a,{size:"large"},{default:t(()=>[sr]),_:1}),e(a,{size:"big"},{default:t(()=>[or]),_:1}),e(a,{size:"huge"},{default:t(()=>[ar]),_:1}),e(a,{size:"massive"},{default:t(()=>[lr]),_:1})])]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[nr]),_:1}),e(m,{title:"Group Size",description:"Labels can share sizes together",code:s.groupSizeCode},{default:t(()=>[e(q,{size:"huge"},{default:t(()=>[e(a,null,{default:t(()=>[ur]),_:1}),e(a,null,{default:t(()=>[dr]),_:1}),e(a,null,{default:t(()=>[rr]),_:1}),e(a,null,{default:t(()=>[cr]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Colored Group",description:"Labels can share colors together",code:s.coloredGroupCode},{default:t(()=>[e(q,{color:"blue"},{default:t(()=>[e(a,{as:"a"},{default:t(()=>[mr,e(l,{name:"close"})]),_:1}),e(a,{as:"a"},{default:t(()=>[_r,e(L,null,{default:t(()=>[pr]),_:1})]),_:1}),e(a,{as:"a"},{default:t(()=>[hr]),_:1}),e(a,{as:"a"},{default:t(()=>[gr]),_:1}),e(a,{as:"a"},{default:t(()=>[fr]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Basic Group",description:"Labels can share their style together",code:s.basicGroupCode},{default:t(()=>[e(q,{basic:""},{default:t(()=>[e(a,{as:"a"},{default:t(()=>[br,e(l,{name:"close"})]),_:1}),e(a,{as:"a"},{default:t(()=>[vr,e(L,null,{default:t(()=>[$r]),_:1})]),_:1}),e(a,{as:"a"},{default:t(()=>[wr]),_:1}),e(a,{as:"a"},{default:t(()=>[Cr]),_:1}),e(a,{as:"a"},{default:t(()=>[yr]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Tag Group",description:"Labels can share tag formatting",code:s.tagGroupCode},{default:t(()=>[e(q,{tag:""},{default:t(()=>[e(a,{as:"a"},{default:t(()=>[Ar]),_:1}),e(a,{as:"a"},{default:t(()=>[kr]),_:1}),e(a,{as:"a"},{default:t(()=>[Sr]),_:1}),e(a,{as:"a"},{default:t(()=>[zr]),_:1}),e(a,{as:"a"},{default:t(()=>[Tr]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"CircularGroup",description:"Labels can share shapes",code:s.circularGroupCode},{default:t(()=>[e(q,{circular:""},{default:t(()=>[e(a,null,{default:t(()=>[Rr]),_:1}),e(a,null,{default:t(()=>[Vr]),_:1}),e(a,null,{default:t(()=>[Er]),_:1}),e(a,null,{default:t(()=>[xr]),_:1}),e(a,null,{default:t(()=>[Dr]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var Nr=x(tu,[["render",Br]]),Pr="/vue-fomantic-ui/images/avatar/small/rachel.png",jr="/vue-fomantic-ui/images/avatar/small/lindsay.png",Fr="/vue-fomantic-ui/images/avatar/small/matthew.png",re="/vue-fomantic-ui/images/avatar/small/jenny.jpg",qr="/vue-fomantic-ui/images/avatar/small/veronika.jpg",Mr="/vue-fomantic-ui/images/avatar/small/tom.jpg",ce="/vue-fomantic-ui/images/avatar/small/christian.jpg",me="/vue-fomantic-ui/images/avatar/small/matt.jpg",te="/vue-fomantic-ui/images/avatar/small/helen.jpg",W="/vue-fomantic-ui/images/avatar/small/daniel.jpg";const Lr=E({name:"ListDoc",components:{DocExample:B},setup(){return{listCode:`<sui-list>
  <sui-list-item>Apples</sui-list-item>
  <sui-list-item>Pears</sui-list-item>
  <sui-list-item>Oranges</sui-list-item>
</sui-list>`,bulletedCode:`<sui-list bulleted>
  <sui-list-item>Gaining Access</sui-list-item>
  <sui-list-item>Inviting Friends</sui-list-item>
  <sui-list-item>
    <div>Benefits</div>
    <div class="list">
      <sui-list-item as="a">Link to somewhere</sui-list-item>
      <sui-list-item>Rebates</sui-list-item>
      <sui-list-item>Discounts</sui-list-item>
    </div>
  </sui-list-item>
  <sui-list-item>Warranty</sui-list-item>
</sui-list>`,orderedCode:`<sui-list ordered>
  <sui-list-item as="a">Getting Started</sui-list-item>
  <sui-list-item as="a">Introduction</sui-list-item>
  <sui-list-item>
    <a>Languages</a>
    <sui-list-list>
      <sui-list-item as="a">HTML</sui-list-item>
      <sui-list-item as="a">Javascript</sui-list-item>
      <sui-list-item as="a">CSS</sui-list-item>
    </sui-list-list>
  </sui-list-item>
  <sui-list-item as="a">Review</sui-list-item>
</sui-list>`,linkCode:`<sui-list link>
  <sui-list-item active>Home</sui-list-item>
  <sui-list-item as="a">About</sui-list-item>
  <sui-list-item as="a">Jobs</sui-list-item>
  <sui-list-item as="a">Team</sui-list-item>
</sui-list>`,itemCode:`<sui-list>
  <sui-list-item>1</sui-list-item>
  <sui-list-item>2</sui-list-item>
  <sui-list-item>3</sui-list-item>
</sui-list>`,iconCode:`<sui-list>
  <sui-list-item as="a">
    <sui-icon name="help" />
    <sui-list-content>
      <sui-list-header>Floated Icon</sui-list-header>
      <sui-list-description>
        This text will always have a left margin to make sure it sits alongside your icon
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item as="a">
    <sui-icon name="right triangle" />
    <sui-list-content>
      <sui-list-header>Icon Alignment</sui-list-header>
      <sui-list-description>
        Floated icons are by default top aligned. To have an icon top aligned try this example
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="help" />
    Inline Text
  </sui-list-item>
</sui-list>`,imageContentCode:`<sui-list>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/rachel.png" />
    <sui-list-content>
      <sui-list-header>Rachel</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Arrested Development</b></a> just now.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/lindsay.png" />
    <sui-list-content>
      <sui-list-header>Lindsay</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/matthew.png" />
    <sui-list-content>
      <sui-list-header>Matthew</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/jenny.jpg" />
    <sui-list-content>
      <sui-list-header>Jenny Hess</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/veronika.jpg" />
    <sui-list-content>
      <sui-list-header>Veronika Ossi</sui-list-header>
      <sui-list-description>
        Has not watched anything recently
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,linkContentCode:`<sui-list>
  <sui-list-item as="a">What is a FAQ?</sui-list-item>
  <sui-list-item as="a">Who is our user?</sui-list-item>
  <sui-list-item as="a">Where is our office located?</sui-list-item>
</sui-list>`,headerContentCode:`<sui-list>
  <sui-list-item>
    <sui-list-header>New York City</sui-list-header>
    A lovely city
  </sui-list-item>
  <sui-list-item>
    <sui-list-header>Chicago</sui-list-header>
    Also quite a lovely city
  </sui-list-item>
  <sui-list-item>
    <sui-list-header>Los Angeles</sui-list-header>
    Sometimes can be a lovely city
  </sui-list-item>
  <sui-list-item>
    <sui-list-header>San Francisco</sui-list-header>
    What a lovely city
  </sui-list-item>
</sui-list>`,descriptionContentCode:`<sui-list>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Krolewskie Jadlo</sui-list-header>
      <sui-list-description>
        An excellent polish restaurant, quick delivery and hearty, filling meals.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Xian Famous Foods</sui-list-header>
      <sui-list-description>
        A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Sapporo Haru</sui-list-header>
      <sui-list-description>
        Greenpoint's best choice for quick and delicious sushi.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Enid's</sui-list-header>
      <sui-list-description>
        At night a bar, during the day a delicious brunch spot.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,horizontalVarCode:`<sui-list horizontal>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/tom.jpg" />
    <sui-list-content>
      <sui-list-header>Tom</sui-list-header>
      Top Contributor
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian Rocha</sui-list-header>
      Admin
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/matt.jpg" />
    <sui-list-content>
      <sui-list-header>Matt</sui-list-header>
      Top Rated User
    </sui-list-content>
  </sui-list-item>
</sui-list>`,invertedVarCode:`<sui-segment inverted>
  <sui-list inverted relaxed divided>
    <sui-list-item>
      <sui-list-content>
        <sui-list-header>Snickerdoodle</sui-list-header>
        An excellent companion
      </sui-list-content>
    </sui-list-item>
    <sui-list-item>
      <sui-list-content>
        <sui-list-header>Poodle</sui-list-header>
        A poodle, its pretty basic
      </sui-list-content>
    </sui-list-item>
    <sui-list-item>
      <sui-list-content>
        <sui-list-header>Paulo</sui-list-header>
        He's also a dog
      </sui-list-content>
    </sui-list-item>
  </sui-list>
</sui-segment>`,selectionVarCode:`<sui-list selection verticalAlign="middle">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Helen</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Daniel</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,animatedVarCode:`<sui-list animated verticalAlign="middle">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Helen</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Daniel</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,relaxedVarCode:`<sui-list relaxed>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Daniel Louise</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Arrested Development</b></a> just now.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/stevie.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Stevie Feliciano</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/elliot.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Elliot Fu</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,dividedVarCode:`<sui-list divided verticalAlign="middle">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Daniel Louise</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/stevie.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Stevie Feliciano</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/elliot.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Elliot Fu</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,celledVarCode:`<sui-list celled>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Snickerdoodle</sui-list-header>
      An excellent companion
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Poodle</sui-list-header>
      A poodle, its pretty basic
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Paulo</sui-list-header>
      He's also a dog
    </sui-list-content>
  </sui-list-item>
</sui-list>`,sizeCode:`<sui-list horizontal divided size="mini">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Helen</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Daniel</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,verticalAlignedCode:`<sui-list horizontal>
  <sui-list-item>
    <sui-image avatar src="/images/wireframe/square-image.png" />
    <sui-list-content verticalAlign="top">
      Top Aligned
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/wireframe/square-image.png" />
    <sui-list-content verticalAlign="middle">
      Middle
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/wireframe/square-image.png" />
    <sui-list-content verticalAlign="bottom">
      Bottom
    </sui-list-content>
  </sui-list-item>
</sui-list>`,floatedCode:`<div>
  <sui-list floated="right" horizontal>
    <sui-list-item disabled>\xA9 GitHub, Inc.</sui-list-item>
    <sui-list-item as="a">Terms</sui-list-item>
    <sui-list-item as="a">Privacy</sui-list-item>
    <sui-list-item as="a">Contact</sui-list-item>
  </sui-list>
  <sui-list horizontal>
    <sui-list-item as="a">About Us</sui-list-item>
    <sui-list-item as="a">Jobs</sui-list-item>
  </sui-list>
</div>`}}}),Ir={class:"intro"},Jr=i("List "),Hr=i(" A list is used to group related content "),Or=i("Types"),Gr=i("Apples"),Ur=i("Pears"),Yr=i("Oranges"),Wr=i("Gaining Access"),Kr=i("Inviting Friends"),Qr=d("div",null,"Benefits",-1),Xr={class:"list"},Zr=i("Link to somewhere"),ec=i("Rebates"),tc=i("Discounts"),ic=i("Warranty"),sc=i("Getting Started"),oc=i("Introduction"),ac=d("a",null,"Languages",-1),lc=i("HTML"),nc=i("Javascript"),uc=i("CSS"),dc=i("Review"),rc=i("Home"),cc=i("About"),mc=i("Jobs"),_c=i("Team"),pc=i("Content"),hc=i("1"),gc=i("2"),fc=i("3"),bc=i("Floated Icon"),vc=i(" This text will always have a left margin to make sure it sits alongside your icon "),$c=i("Icon Alignment"),wc=i(" Floated icons are by default top aligned. To have an icon top aligned try this example "),Cc=i(" Inline Text "),yc=i("Rachel"),Ac=i(" Last seen watching "),kc=d("a",null,[d("b",null,"Arrested Development")],-1),Sc=i(" just now. "),zc=i("Lindsay"),Tc=i(" Last seen watching "),Rc=d("a",null,[d("b",null,"Bob's Burgers")],-1),Vc=i(" 10 hours ago. "),Ec=i("Matthew"),xc=i(" Last seen watching "),Dc=d("a",null,[d("b",null,"The Godfather Part 2")],-1),Bc=i(" yesterday. "),Nc=i("Jenny Hess"),Pc=i(" Last seen watching "),jc=d("a",null,[d("b",null,"Twin Peaks")],-1),Fc=i(" 3 days ago. "),qc=i("Veronika Ossi"),Mc=i(" Has not watched anything recently "),Lc=i("What is a FAQ?"),Ic=i("Who is our user?"),Jc=i("Where is our office located?"),Hc=i("New York City"),Oc=i(" A lovely city "),Gc=i("Chicago"),Uc=i(" Also quite a lovely city "),Yc=i("Los Angeles"),Wc=i(" Sometimes can be a lovely city "),Kc=i("San Francisco"),Qc=i(" What a lovely city "),Xc=i("Krolewskie Jadlo"),Zc=i(" An excellent polish restaurant, quick delivery and hearty, filling meals. "),em=i("Xian Famous Foods"),tm=i(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. "),im=i("Sapporo Haru"),sm=i(" Greenpoint's best choice for quick and delicious sushi. "),om=i("Enid's"),am=i(" At night a bar, during the day a delicious brunch spot. "),lm=i("Variations"),nm=i("Tom"),um=i(" Top Contributor "),dm=i("Christian Rocha"),rm=i(" Admin "),cm=i("Matt"),mm=i(" Top Rated User "),_m=i("Snickerdoodle"),pm=i(" An excellent companion "),hm=i("Poodle"),gm=i(" A poodle, its pretty basic "),fm=i("Paulo"),bm=i(" He's also a dog "),vm=i("Helen"),$m=i("Christian"),wm=i("Daniel"),Cm=i("Helen"),ym=i("Christian"),Am=i("Daniel"),km=i("Daniel Louise"),Sm=i(" Last seen watching "),zm=d("a",null,[d("b",null,"Arrested Development")],-1),Tm=i(" just now. "),Rm=i("Stevie Feliciano"),Vm=i(" Last seen watching "),Em=d("a",null,[d("b",null,"Bob's Burgers")],-1),xm=i(" 10 hours ago. "),Dm=i("Elliot Fu"),Bm=i(" Last seen watching "),Nm=d("a",null,[d("b",null,"The Godfather Part 2")],-1),Pm=i(" yesterday. "),jm=i("Daniel Louise"),Fm=i("Stevie Feliciano"),qm=i("Elliot Fu"),Mm=i("Snickerdoodle"),Lm=i(" An excellent companion "),Im=i("Poodle"),Jm=i(" A poodle, its pretty basic "),Hm=i("Paulo"),Om=i(" He's also a dog "),Gm=i("Helen"),Um=i("Christian"),Ym=i("Daniel"),Wm=i("Content Variations"),Km=i(" Top Aligned "),Qm=i(" Middle "),Xm=i(" Bottom "),Zm=i("\xA9 GitHub, Inc."),e_=i("Terms"),t_=i("Privacy"),i_=i("Contact"),s_=i("About Us"),o_=i("Jobs");function a_(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-list-item"),m=u("sui-list"),f=u("doc-example"),v=u("sui-list-list"),p=u("sui-list-header"),w=u("sui-list-description"),S=u("sui-list-content"),R=u("sui-image");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",Ir,[e(_,{as:"h1"},{default:t(()=>[Jr,e(b,null,{default:t(()=>[Hr]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Or]),_:1}),e(f,{title:"List",description:"A list groups related content",code:s.listCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[Gr]),_:1}),e(a,null,{default:t(()=>[Ur]),_:1}),e(a,null,{default:t(()=>[Yr]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Bulleted",description:"A list can mark items with a bullet",code:s.bulletedCode},{default:t(()=>[e(m,{bulleted:""},{default:t(()=>[e(a,null,{default:t(()=>[Wr]),_:1}),e(a,null,{default:t(()=>[Kr]),_:1}),e(a,null,{default:t(()=>[Qr,d("div",Xr,[e(a,{as:"a"},{default:t(()=>[Zr]),_:1}),e(a,null,{default:t(()=>[ec]),_:1}),e(a,null,{default:t(()=>[tc]),_:1})])]),_:1}),e(a,null,{default:t(()=>[ic]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Ordered",description:"A list can be ordered numerically",code:s.orderedCode},{default:t(()=>[e(m,{ordered:""},{default:t(()=>[e(a,{as:"a"},{default:t(()=>[sc]),_:1}),e(a,{as:"a"},{default:t(()=>[oc]),_:1}),e(a,null,{default:t(()=>[ac,e(v,null,{default:t(()=>[e(a,{as:"a"},{default:t(()=>[lc]),_:1}),e(a,{as:"a"},{default:t(()=>[nc]),_:1}),e(a,{as:"a"},{default:t(()=>[uc]),_:1})]),_:1})]),_:1}),e(a,{as:"a"},{default:t(()=>[dc]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Link",description:"A list can be specially formatted for navigation links",code:s.linkCode},{default:t(()=>[e(m,{link:""},{default:t(()=>[e(a,{active:""},{default:t(()=>[rc]),_:1}),e(a,{as:"a"},{default:t(()=>[cc]),_:1}),e(a,{as:"a"},{default:t(()=>[mc]),_:1}),e(a,{as:"a"},{default:t(()=>[_c]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[pc]),_:1}),e(f,{title:"Item",description:"A list item can contain a set of items",code:s.itemCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[hc]),_:1}),e(a,null,{default:t(()=>[gc]),_:1}),e(a,null,{default:t(()=>[fc]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Icon",description:"A list item can contain an icon",code:s.iconCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,{as:"a"},{default:t(()=>[e(l,{name:"help"}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[bc]),_:1}),e(w,null,{default:t(()=>[vc]),_:1})]),_:1})]),_:1}),e(a,{as:"a"},{default:t(()=>[e(l,{name:"right triangle"}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[$c]),_:1}),e(w,null,{default:t(()=>[wc]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"help"}),Cc]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Image",description:"A list can contain an image",code:s.imageContentCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(R,{avatar:"",src:Pr}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[yc]),_:1}),e(w,null,{default:t(()=>[Ac,kc,Sc]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:jr}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[zc]),_:1}),e(w,null,{default:t(()=>[Tc,Rc,Vc]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:Fr}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[Ec]),_:1}),e(w,null,{default:t(()=>[xc,Dc,Bc]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:re}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[Nc]),_:1}),e(w,null,{default:t(()=>[Pc,jc,Fc]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:qr}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[qc]),_:1}),e(w,null,{default:t(()=>[Mc]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Link",description:"A list can contain links",code:s.linkContentCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,{as:"a"},{default:t(()=>[Lc]),_:1}),e(a,{as:"a"},{default:t(()=>[Ic]),_:1}),e(a,{as:"a"},{default:t(()=>[Jc]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"header",description:"A list item can contain a header",code:s.headerContentCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(p,null,{default:t(()=>[Hc]),_:1}),Oc]),_:1}),e(a,null,{default:t(()=>[e(p,null,{default:t(()=>[Gc]),_:1}),Uc]),_:1}),e(a,null,{default:t(()=>[e(p,null,{default:t(()=>[Yc]),_:1}),Wc]),_:1}),e(a,null,{default:t(()=>[e(p,null,{default:t(()=>[Kc]),_:1}),Qc]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Description",description:"A list item can contain a description",code:s.descriptionContentCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"map marker"}),e(S,null,{default:t(()=>[e(p,{as:"a"},{default:t(()=>[Xc]),_:1}),e(w,null,{default:t(()=>[Zc]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"map marker"}),e(S,null,{default:t(()=>[e(p,{as:"a"},{default:t(()=>[em]),_:1}),e(w,null,{default:t(()=>[tm]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"map marker"}),e(S,null,{default:t(()=>[e(p,{as:"a"},{default:t(()=>[im]),_:1}),e(w,null,{default:t(()=>[sm]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(l,{name:"map marker"}),e(S,null,{default:t(()=>[e(p,{as:"a"},{default:t(()=>[om]),_:1}),e(w,null,{default:t(()=>[am]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[lm]),_:1}),e(f,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:s.horizontalVarCode},{default:t(()=>[e(m,{horizontal:""},{default:t(()=>[e(a,null,{default:t(()=>[e(R,{avatar:"",src:Mr}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[nm]),_:1}),um]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:ce}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[dm]),_:1}),rm]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:me}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[cm]),_:1}),mm]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:s.invertedVarCode},{default:t(()=>[e(c,{inverted:""},{default:t(()=>[e(m,{inverted:"",relaxed:"",divided:""},{default:t(()=>[e(a,null,{default:t(()=>[e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[_m]),_:1}),pm]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[hm]),_:1}),gm]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[fm]),_:1}),bm]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Selection",description:"A selection list formats list items as possible choices",code:s.selectionVarCode},{default:t(()=>[e(m,{selection:"",verticalAlign:"middle"},{default:t(()=>[e(a,null,{default:t(()=>[e(R,{avatar:"",src:te}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[vm]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:ce}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[$m]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:W}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[wm]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:s.animatedVarCode},{default:t(()=>[e(m,{animated:"",verticalAlign:"middle"},{default:t(()=>[e(a,null,{default:t(()=>[e(R,{avatar:"",src:te}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[Cm]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:ce}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[ym]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:W}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[Am]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:s.relaxedVarCode},{default:t(()=>[e(m,{relaxed:""},{default:t(()=>[e(a,null,{default:t(()=>[e(R,{avatar:"",src:W}),e(S,null,{default:t(()=>[e(p,{as:"a"},{default:t(()=>[km]),_:1}),e(w,null,{default:t(()=>[Sm,zm,Tm]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:ee}),e(S,null,{default:t(()=>[e(p,{as:"a"},{default:t(()=>[Rm]),_:1}),e(w,null,{default:t(()=>[Vm,Em,xm]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:G}),e(S,null,{default:t(()=>[e(p,{as:"a"},{default:t(()=>[Dm]),_:1}),e(w,null,{default:t(()=>[Bm,Nm,Pm]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Divided",description:"A list can show divisions between content",code:s.dividedVarCode},{default:t(()=>[e(m,{divided:"",verticalAlign:"middle"},{default:t(()=>[e(a,null,{default:t(()=>[e(R,{avatar:"",src:W}),e(S,null,{default:t(()=>[e(p,{as:"a"},{default:t(()=>[jm]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:ee}),e(S,null,{default:t(()=>[e(p,{as:"a"},{default:t(()=>[Fm]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:G}),e(S,null,{default:t(()=>[e(p,{as:"a"},{default:t(()=>[qm]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Celled",description:"A list can divide its items into cells",code:s.celledVarCode},{default:t(()=>[e(m,{celled:""},{default:t(()=>[e(a,null,{default:t(()=>[e(R,{avatar:"",src:te}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[Mm]),_:1}),Lm]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:W}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[Im]),_:1}),Jm]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:W}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[Hm]),_:1}),Om]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Size",description:"A list can vary in size",code:s.sizeCode},{default:t(()=>[e(m,{horizontal:"",divided:"",size:"mini"},{default:t(()=>[e(a,null,{default:t(()=>[e(R,{avatar:"",src:te}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[Gm]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:ce}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[Um]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:W}),e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[Ym]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Wm]),_:1}),e(f,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:s.verticalAlignedCode},{default:t(()=>[e(m,{horizontal:""},{default:t(()=>[e(a,null,{default:t(()=>[e(R,{avatar:"",src:J}),e(S,{verticalAlign:"top"},{default:t(()=>[Km]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:J}),e(S,{verticalAlign:"middle"},{default:t(()=>[Qm]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(R,{avatar:"",src:J}),e(S,{verticalAlign:"bottom"},{default:t(()=>[Xm]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:s.floatedCode},{default:t(()=>[d("div",null,[e(m,{floated:"right",horizontal:""},{default:t(()=>[e(a,{disabled:""},{default:t(()=>[Zm]),_:1}),e(a,{as:"a"},{default:t(()=>[e_]),_:1}),e(a,{as:"a"},{default:t(()=>[t_]),_:1}),e(a,{as:"a"},{default:t(()=>[i_]),_:1})]),_:1}),e(m,{horizontal:""},{default:t(()=>[e(a,{as:"a"},{default:t(()=>[s_]),_:1}),e(a,{as:"a"},{default:t(()=>[o_]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}var l_=x(Lr,[["render",a_]]);const n_=E({name:"LoaderDoc",components:{DocExample:B},setup(){return{loaderCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader />
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,textLoaderCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader text>Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,indeterminateCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader indeterminate>Preparing Files</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,activeCode:`<sui-segment>
  <sui-loader active />

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,disabledCode:`<sui-segment>
  <sui-loader disabled />

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,inlineCode:"<sui-loader inline active />",inlineCenterCode:'<sui-loader inline="centered" active />',speedCode:`<div>
  <sui-loader slow active inline />
  <sui-loader active inline />
  <sui-loader fast active inline />
</div>`,colorsCode:`<div>
  <sui-loader color="primary" inline active />
  <sui-loader color="secondary" inline active />
  <sui-loader color="red" inline active />
  <sui-loader color="orange" inline active />
  <sui-loader color="yellow" inline active />
  <sui-loader color="olive" inline active />
  <sui-loader color="green" inline active />
  <sui-loader color="teal" inline active />
  <sui-loader color="blue" inline active />
  <sui-loader color="violet" inline active />
  <sui-loader color="purple" inline active />
  <sui-loader color="pink" inline active />
  <sui-loader color="brown" inline active />
  <sui-loader color="grey" inline active />
  <sui-loader color="black" inline active />
</div>`,sizeCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader size="mini">Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,invertedCode:`<sui-segment>
  <sui-dimmer active inverted>
    <sui-loader>Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`}}}),u_={class:"intro"},d_=i("Loader "),r_=i(" A loader alerts a user to wait for an activity to complete "),c_=i("Types"),m_=i("Loading"),__=i("States"),p_=i("Preparing Files"),h_=i("Variations"),g_=i("Loading"),f_=i("Loading");function b_(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-loader"),m=u("sui-dimmer"),f=u("sui-image"),v=u("doc-example");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",u_,[e(_,{as:"h1"},{default:t(()=>[d_,e(b,null,{default:t(()=>[r_]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[c_]),_:1}),e(v,{title:"Loader",description:"A loader",code:s.loaderCode},{default:t(()=>[e(c,null,{default:t(()=>[e(m,{active:""},{default:t(()=>[e(a)]),_:1}),e(f,{src:N})]),_:1})]),_:1},8,["code"]),e(v,{title:"Text Loader",description:"A loader can contain text",code:s.textLoaderCode},{default:t(()=>[e(c,null,{default:t(()=>[e(m,{active:""},{default:t(()=>[e(a,null,{default:t(()=>[m_]),_:1})]),_:1}),e(f,{src:N})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[__]),_:1}),e(v,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:s.indeterminateCode},{default:t(()=>[e(c,null,{default:t(()=>[e(m,{active:""},{default:t(()=>[e(a,{indeterminate:""},{default:t(()=>[p_]),_:1})]),_:1}),e(f,{src:N})]),_:1})]),_:1},8,["code"]),e(v,{title:"Active",description:"A loader can be active or visible",code:s.activeCode},{default:t(()=>[e(c,null,{default:t(()=>[e(a,{active:""}),e(f,{src:N})]),_:1})]),_:1},8,["code"]),e(v,{title:"Diasbled",description:"A loader can be disabled or hidden",code:s.disabledCode},{default:t(()=>[e(c,null,{default:t(()=>[e(a,{disabled:""}),e(f,{src:N})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[h_]),_:1}),e(v,{title:"Inline",description:"Loaders can appear inline with content",code:s.inlineCode},{default:t(()=>[e(a,{inline:"",active:""})]),_:1},8,["code"]),e(v,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:s.inlineCenterCode},{default:t(()=>[e(a,{inline:"centered",active:""})]),_:1},8,["code"]),e(v,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:s.speedCode},{default:t(()=>[d("div",null,[e(a,{slow:"",active:"",inline:""}),e(a,{active:"",inline:""}),e(a,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),e(v,{title:"Colors",description:"Loaders can be different colors",code:s.colorsCode},{default:t(()=>[d("div",null,[e(a,{color:"primary",inline:"",active:""}),e(a,{color:"secondary",inline:"",active:""}),e(a,{color:"red",inline:"",active:""}),e(a,{color:"orange",inline:"",active:""}),e(a,{color:"yellow",inline:"",active:""}),e(a,{color:"olive",inline:"",active:""}),e(a,{color:"green",inline:"",active:""}),e(a,{color:"teal",inline:"",active:""}),e(a,{color:"blue",inline:"",active:""}),e(a,{color:"violet",inline:"",active:""}),e(a,{color:"purple",inline:"",active:""}),e(a,{color:"pink",inline:"",active:""}),e(a,{color:"brown",inline:"",active:""}),e(a,{color:"grey",inline:"",active:""}),e(a,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),e(v,{title:"Size",description:"Loaders can have different sizes",code:s.sizeCode},{default:t(()=>[e(c,null,{default:t(()=>[e(m,{active:""},{default:t(()=>[e(a,{size:"mini"},{default:t(()=>[g_]),_:1})]),_:1}),e(f,{src:N})]),_:1})]),_:1},8,["code"]),e(v,{title:"Inverted",description:"Loaders can have their colors inverted",code:s.invertedCode},{default:t(()=>[e(c,null,{default:t(()=>[e(m,{active:"",inverted:""},{default:t(()=>[e(a,null,{default:t(()=>[f_]),_:1})]),_:1}),e(f,{src:N})]),_:1})]),_:1},8,["code"])]),_:1})])}var v_=x(n_,[["render",b_]]);const $_=E({name:"RailDoc",components:{DocExample:B},setup(){return{railCode:`<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/short-paragraph.png" />

      <sui-rail position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,internalCode:`<sui-segment textAlign="center">
  <sui-image src="/images/wireframe/short-paragraph.png" />

  <sui-rail internal position="left">
    <sui-segment>Left Rail Content</sui-segment>
  </sui-rail>

  <sui-rail internal position="right">
    <sui-segment>Right Rail Content</sui-segment>
  </sui-rail>
</sui-segment>`,dividingCode:`<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/short-paragraph.png" />

      <sui-rail dividing position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail dividing position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,attachedCode:`<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/short-paragraph.png" />

      <sui-rail attached position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail attached position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,closeCode:`<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/short-paragraph.png" />

      <sui-rail close position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail close position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,sizeCode:`<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/short-paragraph.png" />

      <sui-rail size="small" position="left">
        Left Small Rail
      </sui-rail>
      <sui-rail size="large" position="right">
        Right Large Rail
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`}}}),w_={class:"intro"},C_=i("Rail "),y_=i(" A rail is used to show accompanying content outside the boundaries of the main view of a site "),A_=i("Types"),k_=i(" Left Rail Content "),S_=i(" Right Rail Content "),z_=i("Left Rail Content"),T_=i("Right Rail Content"),R_=i(" Left Rail Content "),V_=i(" Right Rail Content "),E_=i("Variations"),x_=i(" Left Rail Content "),D_=i(" Right Rail Content "),B_=i(" Left Rail Content "),N_=i(" Right Rail Content "),P_=i(" Left Small Rail "),j_=i(" Right Large Rail ");function F_(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-image"),m=u("sui-rail"),f=u("sui-grid-column"),v=u("sui-grid"),p=u("doc-example");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",w_,[e(_,{as:"h1"},{default:t(()=>[C_,e(b,null,{default:t(()=>[y_]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[A_]),_:1}),e(p,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:s.railCode},{default:t(()=>[e(v,{centered:"",columns:3},{default:t(()=>[e(f,null,{default:t(()=>[e(c,null,{default:t(()=>[e(a,{src:N}),e(m,{position:"left"},{default:t(()=>[e(c,null,{default:t(()=>[k_]),_:1})]),_:1}),e(m,{position:"right"},{default:t(()=>[e(c,null,{default:t(()=>[S_]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:s.internalCode},{default:t(()=>[e(c,{textAlign:"center"},{default:t(()=>[e(a,{src:N}),e(m,{internal:"",position:"left"},{default:t(()=>[e(c,null,{default:t(()=>[z_]),_:1})]),_:1}),e(m,{internal:"",position:"right"},{default:t(()=>[e(c,null,{default:t(()=>[T_]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Dividing",description:"A rail can create a division between itself and a container",code:s.dividingCode},{default:t(()=>[e(v,{centered:"",columns:3},{default:t(()=>[e(f,null,{default:t(()=>[e(c,null,{default:t(()=>[e(a,{src:N}),e(m,{dividing:"",position:"left"},{default:t(()=>[e(c,null,{default:t(()=>[R_]),_:1})]),_:1}),e(m,{dividing:"",position:"right"},{default:t(()=>[e(c,null,{default:t(()=>[V_]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[E_]),_:1}),e(p,{title:"Attached",description:"A rail can appear attached to the main viewport",code:s.attachedCode},{default:t(()=>[e(v,{centered:"",columns:3},{default:t(()=>[e(f,null,{default:t(()=>[e(c,null,{default:t(()=>[e(a,{src:N}),e(m,{attached:"",position:"left"},{default:t(()=>[e(c,null,{default:t(()=>[x_]),_:1})]),_:1}),e(m,{attached:"",position:"right"},{default:t(()=>[e(c,null,{default:t(()=>[D_]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Close",description:"A rail can appear closer to the main viewport",code:s.closeCode},{default:t(()=>[e(v,{centered:"",columns:3},{default:t(()=>[e(f,null,{default:t(()=>[e(c,null,{default:t(()=>[e(a,{src:N}),e(m,{close:"",position:"left"},{default:t(()=>[e(c,null,{default:t(()=>[B_]),_:1})]),_:1}),e(m,{close:"",position:"right"},{default:t(()=>[e(c,null,{default:t(()=>[N_]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Size",description:"A rail can have different sizes",code:s.sizeCode},{default:t(()=>[e(v,{centered:"",columns:3},{default:t(()=>[e(f,null,{default:t(()=>[e(c,null,{default:t(()=>[e(a,{src:N}),e(m,{size:"small",position:"left"},{default:t(()=>[P_]),_:1}),e(m,{size:"large",position:"right"},{default:t(()=>[j_]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var q_=x($_,[["render",F_]]),M_="/vue-fomantic-ui/images/avatar/large/ade.jpg",Te="/vue-fomantic-ui/images/avatar/large/chris.jpg",ge="/vue-fomantic-ui/images/avatar/large/stevie.jpg",Re="/vue-fomantic-ui/images/avatar/large/nan.jpg";const L_=E({name:"RevealDoc",components:{DocExample:B},setup(){return{fadeCode:`<sui-reveal animated="fade">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/ade.jpg" />
  </sui-reveal-content>
</sui-reveal>`,moveCode:`<sui-reveal animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/chris.jpg" />
  </sui-reveal-content>
</sui-reveal>`,rotateCode:`<sui-reveal animated="rotate">
  <sui-reveal-content visible>
    <sui-image circular size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image circular size="small" src="/images/avatar/large/stevie.jpg" />
  </sui-reveal-content>
</sui-reveal>`,activeCode:`<sui-reveal active animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/nan.jpg" />
  </sui-reveal-content>
</sui-reveal>`,disabledCode:`<sui-reveal disabled animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/nan.jpg" />
  </sui-reveal-content>
</sui-reveal>`,instantCode:`<sui-reveal instant animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/chris.jpg" />
  </sui-reveal-content>
</sui-reveal>`}}}),I_={class:"intro"},J_=i("Reveal "),H_=i(" A reveal displays additional content in place of previous content when activated "),O_=i("Types"),G_=i("States"),U_=i("Variations");function Y_(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-image"),m=u("sui-reveal-content"),f=u("sui-reveal"),v=u("doc-example");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",I_,[e(_,{as:"h1"},{default:t(()=>[J_,e(b,null,{default:t(()=>[H_]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[O_]),_:1}),e(v,{title:"Fade",description:"An element can disappear to reveal content below",code:s.fadeCode},{default:t(()=>[e(f,{animated:"fade"},{default:t(()=>[e(m,{visible:""},{default:t(()=>[e(a,{size:"small",src:J})]),_:1}),e(m,{hidden:""},{default:t(()=>[e(a,{size:"small",src:M_})]),_:1})]),_:1})]),_:1},8,["code"]),e(v,{title:"Move",description:"An element can move in a direction to reveal content",code:s.moveCode},{default:t(()=>[e(f,{animated:"move"},{default:t(()=>[e(m,{visible:""},{default:t(()=>[e(a,{size:"small",src:J})]),_:1}),e(m,{hidden:""},{default:t(()=>[e(a,{size:"small",src:Te})]),_:1})]),_:1})]),_:1},8,["code"]),e(v,{title:"Rotate",description:"An element can rotate to reveal content below",code:s.rotateCode},{default:t(()=>[e(f,{animated:"rotate"},{default:t(()=>[e(m,{visible:""},{default:t(()=>[e(a,{circular:"",size:"small",src:J})]),_:1}),e(m,{hidden:""},{default:t(()=>[e(a,{circular:"",size:"small",src:ge})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[G_]),_:1}),e(v,{title:"Active",description:"An active reveal displays its hidden content",code:s.activeCode},{default:t(()=>[e(f,{active:"",animated:"move"},{default:t(()=>[e(m,{visible:""},{default:t(()=>[e(a,{size:"small",src:J})]),_:1}),e(m,{hidden:""},{default:t(()=>[e(a,{size:"small",src:Re})]),_:1})]),_:1})]),_:1},8,["code"]),e(v,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:s.disabledCode},{default:t(()=>[e(f,{disabled:"",animated:"move"},{default:t(()=>[e(m,{visible:""},{default:t(()=>[e(a,{size:"small",src:J})]),_:1}),e(m,{hidden:""},{default:t(()=>[e(a,{size:"small",src:Re})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[U_]),_:1}),e(v,{title:"Instant",description:"An element can show its content without delay",code:s.instantCode},{default:t(()=>[e(f,{instant:"",animated:"move"},{default:t(()=>[e(m,{visible:""},{default:t(()=>[e(a,{size:"small",src:J})]),_:1}),e(m,{hidden:""},{default:t(()=>[e(a,{size:"small",src:Te})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var W_=x(L_,[["render",Y_]]);const K_=E({name:"SegmentDoc",components:{DocExample:B},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
  <sui-header icon>
    <sui-icon name="file outline" />
    No documents are listed for this customer.
  </sui-header>
  <sui-button color="primary">Add Document</sui-button>
</sui-segment>`,raisedCode:`<sui-segment raised>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
    sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`,stackedCode:`<sui-segment stacked>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`,piledCode:`<sui-segment piled>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`,verticalCode:`<div>
  <sui-segment vertical>
    Te eum doming eirmod, nominati pertinacia argumentum ad his.
  </sui-segment>
  <sui-segment vertical>
    Pellentesque habitant morbi tristique senectus.
  </sui-segment>
  <sui-segment vertical>
    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
  </sui-segment>
</div>`,segmentsCode:`<sui-segment-group>
  <sui-segment><p>Top</p></sui-segment>
  <sui-segment><p>Middle</p></sui-segment>
  <sui-segment><p>Middle</p></sui-segment>
  <sui-segment><p>Middle</p></sui-segment>
  <sui-segment><p>Bottom</p></sui-segment>
</sui-segment-group>`,nestedCode:`<sui-segment-group>
  <sui-segment>Top</sui-segment>
  <sui-segment-group>
    <sui-segment>Nested Top</sui-segment>
    <sui-segment>Nested Middle</sui-segment>
    <sui-segment>Nested Bottom</sui-segment>
  </sui-segment-group>
  <sui-segment-group horizontal>
    <sui-segment>Top</sui-segment>
    <sui-segment>Middle</sui-segment>
    <sui-segment>Bottom</sui-segment>
  </sui-segment-group>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`,horizontalCode:`<sui-segment-group horizontal>
  <sui-segment>Left</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Right</sui-segment>
</sui-segment-group>`,raisedSegmentsCode:`<sui-segment-group raised>
  <sui-segment>Top</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`,stackedSegmentsCode:`<sui-segment-group stacked>
  <sui-segment>Top</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`,piledSegmentsCode:`<sui-segment-group piled>
  <sui-segment>Top</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`,disabledCode:"<sui-segment disabled>Disabled content</sui-segment>",loadingCode:"<sui-segment loading>Now Loading...</sui-segment>",invertedCode:`<sui-segment inverted>
  <p>I'm here to tell you something, and you will probably read me first.</p>
</sui-segment>`,attachedCode:`<div>
  <sui-segment attached="top">
    <p>This segment is on top</p>
  </sui-segment>
  <sui-segment attached>
    <p>This segment is attached on both sides</p>
  </sui-segment>
  <sui-segment attached="bottom">
    <p>This segment is on bottom</p>
  </sui-segment>
</div>`,paddedCode:"<sui-segment padded>Padded content</sui-segment>",fittedCode:`<div>
  <sui-segment fitted>
    <p>Fitted Segment</p>
  </sui-segment>
  <sui-segment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </sui-segment>
  <sui-segment fitted="vertically">
    <p>Vertically fitted segment</p>
  </sui-segment>
</div>`,compactCode:"<sui-segment compact>Compact content</sui-segment>",coloredCode:`<div>
  <sui-segment color="red">Red</sui-segment>
  <sui-segment color="orange">Orange</sui-segment>
  <sui-segment color="yellow">Yellow</sui-segment>
  <sui-segment color="olive">Olive</sui-segment>
  <sui-segment color="green">Green</sui-segment>
  <sui-segment color="teal">Teal</sui-segment>
  <sui-segment color="blue">Blue</sui-segment>
  <sui-segment color="violet">Violet</sui-segment>
  <sui-segment color="purple">Purple</sui-segment>
  <sui-segment color="pink">Pink</sui-segment>
  <sui-segment color="brown">Brown</sui-segment>
  <sui-segment color="grey">Grey</sui-segment>
  <sui-segment color="black">Black</sui-segment>
</div>`,emphasisCode:`<div>
  <sui-segment>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </sui-segment>
  <sui-segment secondary>
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
  </sui-segment>
  <sui-segment tertiary>
    <p>If you notice me you must be looking very hard.</p>
  </sui-segment>
</div>`,circularCode:`<div>
  <sui-segment circular style="width: 175px; height: 175px;">
    <sui-header as="h2">
      Buy Now
      <sui-header-subheader>
        $10.99
      </sui-header-subheader>
    </sui-header>
  </sui-segment>
  <sui-segment inverted circular style="width: 175px; height: 175px;">
    <sui-header as="h2">
      Buy Now
      <sui-header-subheader>
        $10.99
      </sui-header-subheader>
    </sui-header>
  </sui-segment>
</div>`,clearingCode:`<sui-segment clearing>
  <sui-button floated="right">Floated</sui-button>
</sui-segment>`,floatedCode:`<div>
  <sui-segment floated="right">
    <p>This segment will appear to the right</p>
  </sui-segment>
  <sui-segment floated="left">
    <p>This segment will appear to the left</p>
  </sui-segment>
</div>`,textAlignCode:`<div>
  <sui-segment textAlign="right">
    Right
  </sui-segment>
  <sui-segment textAlign="left">
    Left
  </sui-segment>
  <sui-segment textAlign="center">
    Center
  </sui-segment>
</div>`,basicCode:`<sui-segment basic>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
    sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`}}}),Q_={class:"intro"},X_=i("Segment "),Z_=i(" A segment is used to create a grouping of related content "),ep=i("Types"),tp=i("Pellentesque habitant morbi tristique senectus."),ip=i(" No documents are listed for this customer. "),sp=i("Add Document"),op=d("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),ap=d("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),lp=d("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),np=i(" Te eum doming eirmod, nominati pertinacia argumentum ad his. "),up=i(" Pellentesque habitant morbi tristique senectus. "),dp=i(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. "),rp=i("Groups"),cp=d("p",null,"Top",-1),mp=d("p",null,"Middle",-1),_p=d("p",null,"Middle",-1),pp=d("p",null,"Middle",-1),hp=d("p",null,"Bottom",-1),gp=i("Top"),fp=i("Nested Top"),bp=i("Nested Middle"),vp=i("Nested Bottom"),$p=i("Top"),wp=i("Middle"),Cp=i("Bottom"),yp=i("Bottom"),Ap=i("Left"),kp=i("Middle"),Sp=i("Right"),zp=i("Top"),Tp=i("Middle"),Rp=i("Bottom"),Vp=i("Top"),Ep=i("Middle"),xp=i("Bottom"),Dp=i("Top"),Bp=i("Middle"),Np=i("Bottom"),Pp=i("States"),jp=i("Disabled content"),Fp=i("Now Loading..."),qp=i("Variations"),Mp=d("p",null,"I'm here to tell you something, and you will probably read me first.",-1),Lp=d("p",null,"This segment is on top",-1),Ip=d("p",null,"This segment is attached on both sides",-1),Jp=d("p",null,"This segment is on bottom",-1),Hp=i("Padded content"),Op=d("p",null,"Fitted Segment",-1),Gp=d("p",null,"Horizontally fitted segment",-1),Up=d("p",null,"Vertically fitted segment",-1),Yp=i("Compact content"),Wp=i("Red"),Kp=i("Orange"),Qp=i("Yellow"),Xp=i("Olive"),Zp=i("Green"),eh=i("Teal"),th=i("Blue"),ih=i("Violet"),sh=i("Purple"),oh=i("Pink"),ah=i("Brown"),lh=i("Grey"),nh=i("Black"),uh=d("p",null,"I'm here to tell you something, and you will probably read me first.",-1),dh=d("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),rh=d("p",null,"If you notice me you must be looking very hard.",-1),ch=i(" Buy Now "),mh=i(" $10.99 "),_h=i(" Buy Now "),ph=i(" $10.99 "),hh=i("Floated"),gh=d("p",null,"This segment will appear to the right",-1),fh=d("p",null,"This segment will appear to the left",-1),bh=i(" Right "),vh=i(" Left "),$h=i(" Center "),wh=d("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function Ch(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("doc-example"),m=u("sui-button"),f=u("sui-segment-group");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",Q_,[e(_,{as:"h1"},{default:t(()=>[X_,e(b,null,{default:t(()=>[Z_]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[ep]),_:1}),e(a,{title:"Segment",description:"A segment of content",code:s.segmentCode},{default:t(()=>[e(c,null,{default:t(()=>[tp]),_:1})]),_:1},8,["code"]),e(a,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:s.placeholderCode},{default:t(()=>[e(c,{placeholder:""},{default:t(()=>[e(_,{icon:""},{default:t(()=>[e(l,{name:"file outline"}),ip]),_:1}),e(m,{color:"primary"},{default:t(()=>[sp]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Raised",description:"A segment may be formatted to raise above the page",code:s.raisedCode},{default:t(()=>[e(c,{raised:""},{default:t(()=>[op]),_:1})]),_:1},8,["code"]),e(a,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:s.stackedCode},{default:t(()=>[e(c,{stacked:""},{default:t(()=>[ap]),_:1})]),_:1},8,["code"]),e(a,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:s.piledCode},{default:t(()=>[e(c,{piled:""},{default:t(()=>[lp]),_:1})]),_:1},8,["code"]),e(a,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:s.verticalCode},{default:t(()=>[d("div",null,[e(c,{vertical:""},{default:t(()=>[np]),_:1}),e(c,{vertical:""},{default:t(()=>[up]),_:1}),e(c,{vertical:""},{default:t(()=>[dp]),_:1})])]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[rp]),_:1}),e(a,{title:"Segments",description:"A group of segments can be formatted to appear together",code:s.segmentsCode},{default:t(()=>[e(f,null,{default:t(()=>[e(c,null,{default:t(()=>[cp]),_:1}),e(c,null,{default:t(()=>[mp]),_:1}),e(c,null,{default:t(()=>[_p]),_:1}),e(c,null,{default:t(()=>[pp]),_:1}),e(c,null,{default:t(()=>[hp]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:s.nestedCode},{default:t(()=>[e(f,null,{default:t(()=>[e(c,null,{default:t(()=>[gp]),_:1}),e(f,null,{default:t(()=>[e(c,null,{default:t(()=>[fp]),_:1}),e(c,null,{default:t(()=>[bp]),_:1}),e(c,null,{default:t(()=>[vp]),_:1})]),_:1}),e(f,{horizontal:""},{default:t(()=>[e(c,null,{default:t(()=>[$p]),_:1}),e(c,null,{default:t(()=>[wp]),_:1}),e(c,null,{default:t(()=>[Cp]),_:1})]),_:1}),e(c,null,{default:t(()=>[yp]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:s.horizontalCode},{default:t(()=>[e(f,{horizontal:""},{default:t(()=>[e(c,null,{default:t(()=>[Ap]),_:1}),e(c,null,{default:t(()=>[kp]),_:1}),e(c,null,{default:t(()=>[Sp]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Raised Segments",description:"A group of segments can be raised",code:s.raisedSegmentsCode},{default:t(()=>[e(f,{raised:""},{default:t(()=>[e(c,null,{default:t(()=>[zp]),_:1}),e(c,null,{default:t(()=>[Tp]),_:1}),e(c,null,{default:t(()=>[Rp]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Stacked Segments",description:"A group of segments can be stacked",code:s.stackedSegmentsCode},{default:t(()=>[e(f,{stacked:""},{default:t(()=>[e(c,null,{default:t(()=>[Vp]),_:1}),e(c,null,{default:t(()=>[Ep]),_:1}),e(c,null,{default:t(()=>[xp]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Piled Segments",description:"A group of segments can be piled",code:s.piledSegmentsCode},{default:t(()=>[e(f,{piled:""},{default:t(()=>[e(c,null,{default:t(()=>[Dp]),_:1}),e(c,null,{default:t(()=>[Bp]),_:1}),e(c,null,{default:t(()=>[Np]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Pp]),_:1}),e(a,{title:"Disabled",description:"A segment may show its content is disabled",code:s.disabledCode},{default:t(()=>[e(c,{disabled:""},{default:t(()=>[jp]),_:1})]),_:1},8,["code"]),e(a,{title:"Loading",description:"A segment may show its content is being loaded",code:s.loadingCode},{default:t(()=>[e(c,{loading:""},{default:t(()=>[Fp]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[qp]),_:1}),e(a,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:s.invertedCode},{default:t(()=>[e(c,{inverted:""},{default:t(()=>[Mp]),_:1})]),_:1},8,["code"]),e(a,{title:"Attached",description:"A segment can be attached to other content on a page",code:s.attachedCode},{default:t(()=>[d("div",null,[e(c,{attached:"top"},{default:t(()=>[Lp]),_:1}),e(c,{attached:""},{default:t(()=>[Ip]),_:1}),e(c,{attached:"bottom"},{default:t(()=>[Jp]),_:1})])]),_:1},8,["code"]),e(a,{title:"Padded",description:"A segment can increase its padding",code:s.paddedCode},{default:t(()=>[e(c,{padded:""},{default:t(()=>[Hp]),_:1})]),_:1},8,["code"]),e(a,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:s.fittedCode},{default:t(()=>[d("div",null,[e(c,{fitted:""},{default:t(()=>[Op]),_:1}),e(c,{fitted:"horizontally"},{default:t(()=>[Gp]),_:1}),e(c,{fitted:"vertically"},{default:t(()=>[Up]),_:1})])]),_:1},8,["code"]),e(a,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:s.compactCode},{default:t(()=>[e(c,{compact:""},{default:t(()=>[Yp]),_:1})]),_:1},8,["code"]),e(a,{title:"Colored",description:"A segment can be colored",code:s.coloredCode},{default:t(()=>[d("div",null,[e(c,{color:"red"},{default:t(()=>[Wp]),_:1}),e(c,{color:"orange"},{default:t(()=>[Kp]),_:1}),e(c,{color:"yellow"},{default:t(()=>[Qp]),_:1}),e(c,{color:"olive"},{default:t(()=>[Xp]),_:1}),e(c,{color:"green"},{default:t(()=>[Zp]),_:1}),e(c,{color:"teal"},{default:t(()=>[eh]),_:1}),e(c,{color:"blue"},{default:t(()=>[th]),_:1}),e(c,{color:"violet"},{default:t(()=>[ih]),_:1}),e(c,{color:"purple"},{default:t(()=>[sh]),_:1}),e(c,{color:"pink"},{default:t(()=>[oh]),_:1}),e(c,{color:"brown"},{default:t(()=>[ah]),_:1}),e(c,{color:"grey"},{default:t(()=>[lh]),_:1}),e(c,{color:"black"},{default:t(()=>[nh]),_:1})])]),_:1},8,["code"]),e(a,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:s.emphasisCode},{default:t(()=>[d("div",null,[e(c,null,{default:t(()=>[uh]),_:1}),e(c,{secondary:""},{default:t(()=>[dh]),_:1}),e(c,{tertiary:""},{default:t(()=>[rh]),_:1})])]),_:1},8,["code"]),e(a,{title:"Circular",description:"A segment can be circular",code:s.circularCode},{default:t(()=>[d("div",null,[e(c,{circular:"",style:{width:"175px",height:"175px"}},{default:t(()=>[e(_,{as:"h2"},{default:t(()=>[ch,e(b,null,{default:t(()=>[mh]),_:1})]),_:1})]),_:1}),e(c,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:t(()=>[e(_,{as:"h2"},{default:t(()=>[_h,e(b,null,{default:t(()=>[ph]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(a,{title:"Clearing",description:"A segment can clear floated content",code:s.clearingCode},{default:t(()=>[e(c,{clearing:""},{default:t(()=>[e(m,{floated:"right"},{default:t(()=>[hh]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Floated",description:"A segment can appear to the left or right of other content",code:s.floatedCode},{default:t(()=>[d("div",null,[e(c,{floated:"right"},{default:t(()=>[gh]),_:1}),e(c,{floated:"left"},{default:t(()=>[fh]),_:1})])]),_:1},8,["code"]),e(a,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:s.textAlignCode},{default:t(()=>[d("div",null,[e(c,{textAlign:"right"},{default:t(()=>[bh]),_:1}),e(c,{textAlign:"left"},{default:t(()=>[vh]),_:1}),e(c,{textAlign:"center"},{default:t(()=>[$h]),_:1})])]),_:1},8,["code"]),e(a,{title:"Basic",description:"A basic segment has no special formatting",code:s.basicCode},{default:t(()=>[e(c,{basic:""},{default:t(()=>[wh]),_:1})]),_:1},8,["code"])]),_:1})])}var yh=x(K_,[["render",Ch]]);const Ah=E({name:"StepDoc",components:{DocExample:B},setup(){return{stepCode:`<sui-step-group>
  <sui-step>Shipping</sui-step>
</sui-step-group>`,stepsCode:`<sui-step-group>
  <sui-step>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,orderedCode:`<sui-step-group ordered>
  <sui-step completed>
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step completed>
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,verticalCode:`<sui-step-group vertical>
  <sui-step completed>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step completed>
    <sui-icon name="credit card" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,descriptionCode:`<sui-step-group>
  <sui-step>
    <sui-step-title>Shipping</sui-step-title>
    <sui-step-description>
      Choose your shipping options
    </sui-step-description>
  </sui-step>
</sui-step-group>`,iconCode:`<sui-step-group>
  <sui-step>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,linkCode:`<sui-step-group>
  <sui-step link>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step>
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,activeCode:`<sui-step-group>
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,completedCode:`<sui-step-group>
  <sui-step completed>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,disabledCode:`<sui-step-group>
  <sui-step disabled>Billing</sui-step>
</sui-step-group>`,stackableCode:`<sui-step-group stackable="tablet">
  <sui-step>
    <sui-icon name="plane" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="dollar" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info circle" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,unstackableCode:`<sui-step-group unstackable>
  <sui-step>
    <sui-icon name="plane" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="dollar" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info circle" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,fluidCode:`<sui-grid :columns="2">
  <sui-grid-column>
    <sui-step-group fluid vertical>
      <sui-step completed>
        <sui-icon name="truck" />
        <sui-step-content>
          <sui-step-title>Shipping</sui-step-title>
          <sui-step-description>
            Choose your shipping options
          </sui-step-description>
        </sui-step-content>
      </sui-step>
      <sui-step active>
        <sui-icon name="dollar" />
        <sui-step-content>
          <sui-step-title>Billing</sui-step-title>
          <sui-step-description>
            Enter billing information
          </sui-step-description>
        </sui-step-content>
      </sui-step>
    </sui-step-group>
  </sui-grid-column>

  <sui-grid-column>
    <p>The steps take up the entire column width</p>
  </sui-grid-column>
</sui-grid>`,attachedCode:`<div>
  <sui-step-group attached="top">
    <sui-step>
      <sui-icon name="truck" />
      <sui-step-content>
        <sui-step-title>Shipping</sui-step-title>
        <sui-step-description>
          Choose your shipping options
        </sui-step-description>
      </sui-step-content>
    </sui-step>

    <sui-step active>
      <sui-icon name="payment" />
      <sui-step-content>
        <sui-step-title>Billing</sui-step-title>
        <sui-step-description>
          Enter billing information
        </sui-step-description>
      </sui-step-content>
    </sui-step>
  </sui-step-group>

  <sui-segment attached>
    <p>Main content</p>
  </sui-segment>

  <sui-step-group attached="bottom">
    <sui-step>
      <sui-icon name="truck" />
      <sui-step-content>
        <sui-step-title>Shipping</sui-step-title>
        <sui-step-description>
          Choose your shipping options
        </sui-step-description>
      </sui-step-content>
    </sui-step>

    <sui-step active>
      <sui-icon name="payment" />
      <sui-step-content>
        <sui-step-title>Billing</sui-step-title>
        <sui-step-description>
          Enter billing information
        </sui-step-description>
      </sui-step-content>
    </sui-step>
  </sui-step-group>
</div>`,evenlyDividedCode:`<sui-step-group :widths="2">
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,sizeCode:`<sui-step-group size="mini">
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,invertedCode:`<sui-segment inverted>
  <sui-step-group inverted vertical>
    <sui-step completed>
      <sui-icon name="truck" />
      <sui-step-content>
        <sui-step-title>Shipping</sui-step-title>
        <sui-step-description>
          Choose your shipping options
        </sui-step-description>
      </sui-step-content>
    </sui-step>
    <sui-step completed>
      <sui-icon name="credit card" />
      <sui-step-content>
        <sui-step-title>Billing</sui-step-title>
        <sui-step-description>
          Enter billing information
        </sui-step-description>
      </sui-step-content>
    </sui-step>
    <sui-step active>
      <sui-icon name="info" />
      <sui-step-content>
        <sui-step-title>Confirm Order</sui-step-title>
        <sui-step-description>
          Verify order details
        </sui-step-description>
      </sui-step-content>
    </sui-step>
  </sui-step-group>
</sui-segment>`}}}),kh={class:"intro"},Sh=i("Step "),zh=i(" A step shows the completion status of an activity in a series of activities "),Th=i("Types"),Rh=i("Shipping"),Vh=i("Groups"),Eh=i("Shipping"),xh=i(" Choose your shipping options "),Dh=i("Billing"),Bh=i(" Enter billing information "),Nh=i("Confirm Order"),Ph=i("Shipping"),jh=i(" Choose your shipping options "),Fh=i("Billing"),qh=i(" Enter billing information "),Mh=i("Confirm Order"),Lh=i(" Verify order details "),Ih=i("Shipping"),Jh=i(" Choose your shipping options "),Hh=i("Billing"),Oh=i(" Enter billing information "),Gh=i("Confirm Order"),Uh=i(" Verify order details "),Yh=i("Content"),Wh=i("Shipping"),Kh=i(" Choose your shipping options "),Qh=i("Shipping"),Xh=i(" Choose your shipping options "),Zh=i("Shipping"),eg=i(" Choose your shipping options "),tg=i("Billing"),ig=i(" Enter billing information "),sg=i("States"),og=i("Billing"),ag=i(" Enter billing information "),lg=i("Billing"),ng=i(" Enter billing information "),ug=i("Billing"),dg=i("Variations"),rg=i("Shipping"),cg=i(" Choose your shipping options "),mg=i("Billing"),_g=i(" Enter billing information "),pg=i("Confirm Order"),hg=i(" Verify order details "),gg=i("Shipping"),fg=i(" Choose your shipping options "),bg=i("Billing"),vg=i(" Enter billing information "),$g=i("Confirm Order"),wg=i(" Verify order details "),Cg=i("Shipping"),yg=i(" Choose your shipping options "),Ag=i("Billing"),kg=i(" Enter billing information "),Sg=d("p",null,"The steps take up the entire column width",-1),zg=i("Shipping"),Tg=i(" Choose your shipping options "),Rg=i("Billing"),Vg=i(" Enter billing information "),Eg=d("p",null,"Main content",-1),xg=i("Shipping"),Dg=i(" Choose your shipping options "),Bg=i("Billing"),Ng=i(" Enter billing information "),Pg=i("Billing"),jg=i("Confirm Order"),Fg=i("Billing"),qg=i("Confirm Order"),Mg=i("Shipping"),Lg=i(" Choose your shipping options "),Ig=i("Billing"),Jg=i(" Enter billing information "),Hg=i("Confirm Order"),Og=i(" Verify order details ");function Gg(s,g,C,y,$,A){const b=u("sui-header-subheader"),_=u("sui-header"),o=u("sui-divider"),l=u("sui-icon"),r=u("sui-menu-item"),n=u("sui-menu"),h=u("sui-container"),c=u("sui-segment"),a=u("sui-step"),m=u("sui-step-group"),f=u("doc-example"),v=u("sui-step-title"),p=u("sui-step-description"),w=u("sui-step-content"),S=u("sui-grid-column"),R=u("sui-grid");return z(),V("div",null,[e(c,{vertical:""},{default:t(()=>[e(h,{class:"main"},{default:t(()=>[d("div",kh,[e(_,{as:"h1"},{default:t(()=>[Sh,e(b,null,{default:t(()=>[zh]),_:1})]),_:1}),e(o,{hidden:""}),e(n,{floated:"right"},{default:t(()=>[e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"edit"})]),_:1}),e(r,{as:"a",icon:""},{default:t(()=>[e(l,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Th]),_:1}),e(f,{title:"Step",description:"A single step",code:s.stepCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[Rh]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Vh]),_:1}),e(f,{title:"Steps",description:"A set of steps",code:s.stepsCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"truck"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Eh]),_:1}),e(p,null,{default:t(()=>[xh]),_:1})]),_:1})]),_:1}),e(a,{active:""},{default:t(()=>[e(l,{name:"payment"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Dh]),_:1}),e(p,null,{default:t(()=>[Bh]),_:1})]),_:1})]),_:1}),e(a,{disabled:""},{default:t(()=>[e(l,{name:"info"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Nh]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:s.orderedCode},{default:t(()=>[e(m,{ordered:""},{default:t(()=>[e(a,{completed:""},{default:t(()=>[e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Ph]),_:1}),e(p,null,{default:t(()=>[jh]),_:1})]),_:1})]),_:1}),e(a,{completed:""},{default:t(()=>[e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Fh]),_:1}),e(p,null,{default:t(()=>[qh]),_:1})]),_:1})]),_:1}),e(a,{active:""},{default:t(()=>[e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Mh]),_:1}),e(p,null,{default:t(()=>[Lh]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Vertical",description:"A step can be displayed stacked vertically",code:s.verticalCode},{default:t(()=>[e(m,{vertical:""},{default:t(()=>[e(a,{completed:""},{default:t(()=>[e(l,{name:"truck"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Ih]),_:1}),e(p,null,{default:t(()=>[Jh]),_:1})]),_:1})]),_:1}),e(a,{completed:""},{default:t(()=>[e(l,{name:"credit card"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Hh]),_:1}),e(p,null,{default:t(()=>[Oh]),_:1})]),_:1})]),_:1}),e(a,{active:""},{default:t(()=>[e(l,{name:"info"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Gh]),_:1}),e(p,null,{default:t(()=>[Uh]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Yh]),_:1}),e(f,{title:"Description",description:"A step can contain a description",code:s.descriptionCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(v,null,{default:t(()=>[Wh]),_:1}),e(p,null,{default:t(()=>[Kh]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Icon",description:"A step can contain an icon",code:s.iconCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"truck"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Qh]),_:1}),e(p,null,{default:t(()=>[Xh]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Link",description:"A step can link",code:s.linkCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,{link:""},{default:t(()=>[e(l,{name:"truck"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Zh]),_:1}),e(p,null,{default:t(()=>[eg]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[tg]),_:1}),e(p,null,{default:t(()=>[ig]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[sg]),_:1}),e(f,{title:"Active",description:"A step can be highlighted as active",code:s.activeCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,{active:""},{default:t(()=>[e(l,{name:"payment"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[og]),_:1}),e(p,null,{default:t(()=>[ag]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Completed",description:"A step can show that a user has completed it",code:s.completedCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,{completed:""},{default:t(()=>[e(l,{name:"payment"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[lg]),_:1}),e(p,null,{default:t(()=>[ng]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Disabled",description:"A step can show that it cannot be selected",code:s.disabledCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,{disabled:""},{default:t(()=>[ug]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[dg]),_:1}),e(f,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:s.stackableCode},{default:t(()=>[e(m,{stackable:"tablet"},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"plane"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[rg]),_:1}),e(p,null,{default:t(()=>[cg]),_:1})]),_:1})]),_:1}),e(a,{active:""},{default:t(()=>[e(l,{name:"dollar"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[mg]),_:1}),e(p,null,{default:t(()=>[_g]),_:1})]),_:1})]),_:1}),e(a,{disabled:""},{default:t(()=>[e(l,{name:"info circle"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[pg]),_:1}),e(p,null,{default:t(()=>[hg]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:s.unstackableCode},{default:t(()=>[e(m,{unstackable:""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"plane"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[gg]),_:1}),e(p,null,{default:t(()=>[fg]),_:1})]),_:1})]),_:1}),e(a,{active:""},{default:t(()=>[e(l,{name:"dollar"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[bg]),_:1}),e(p,null,{default:t(()=>[vg]),_:1})]),_:1})]),_:1}),e(a,{disabled:""},{default:t(()=>[e(l,{name:"info circle"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[$g]),_:1}),e(p,null,{default:t(()=>[wg]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Fluid",description:"A fluid step takes up the width of its container",code:s.fluidCode},{default:t(()=>[e(R,{columns:2},{default:t(()=>[e(S,null,{default:t(()=>[e(m,{fluid:"",vertical:""},{default:t(()=>[e(a,{completed:""},{default:t(()=>[e(l,{name:"truck"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Cg]),_:1}),e(p,null,{default:t(()=>[yg]),_:1})]),_:1})]),_:1}),e(a,{active:""},{default:t(()=>[e(l,{name:"dollar"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Ag]),_:1}),e(p,null,{default:t(()=>[kg]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[Sg]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Attached",description:"Steps can be attached to other elements",code:s.attachedCode},{default:t(()=>[d("div",null,[e(m,{attached:"top"},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"truck"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[zg]),_:1}),e(p,null,{default:t(()=>[Tg]),_:1})]),_:1})]),_:1}),e(a,{active:""},{default:t(()=>[e(l,{name:"payment"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Rg]),_:1}),e(p,null,{default:t(()=>[Vg]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{attached:""},{default:t(()=>[Eg]),_:1}),e(m,{attached:"bottom"},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{name:"truck"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[xg]),_:1}),e(p,null,{default:t(()=>[Dg]),_:1})]),_:1})]),_:1}),e(a,{active:""},{default:t(()=>[e(l,{name:"payment"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Bg]),_:1}),e(p,null,{default:t(()=>[Ng]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(f,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:s.evenlyDividedCode},{default:t(()=>[e(m,{widths:2},{default:t(()=>[e(a,{active:""},{default:t(()=>[e(l,{name:"payment"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Pg]),_:1})]),_:1})]),_:1}),e(a,{disabled:""},{default:t(()=>[e(l,{name:"info"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[jg]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Size",description:"Steps can have different sizes",code:s.sizeCode},{default:t(()=>[e(m,{size:"mini"},{default:t(()=>[e(a,{active:""},{default:t(()=>[e(l,{name:"payment"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Fg]),_:1})]),_:1})]),_:1}),e(a,{disabled:""},{default:t(()=>[e(l,{name:"info"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[qg]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Inverted",description:"A step's color can be inverted",code:s.invertedCode},{default:t(()=>[e(c,{inverted:""},{default:t(()=>[e(m,{inverted:"",vertical:""},{default:t(()=>[e(a,{completed:""},{default:t(()=>[e(l,{name:"truck"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Mg]),_:1}),e(p,null,{default:t(()=>[Lg]),_:1})]),_:1})]),_:1}),e(a,{completed:""},{default:t(()=>[e(l,{name:"credit card"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Ig]),_:1}),e(p,null,{default:t(()=>[Jg]),_:1})]),_:1})]),_:1}),e(a,{active:""},{default:t(()=>[e(l,{name:"info"}),e(w,null,{default:t(()=>[e(v,null,{default:t(()=>[Hg]),_:1}),e(p,null,{default:t(()=>[Og]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var Ug=x(Ah,[["render",Gg]]);const Yg=E({name:"BreadcrumbDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{breadcrumbCode:`<sui-breadcrumb>
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section link>Store</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>T-Shirt</sui-breadcrumb-section>
</sui-breadcrumb>`,breadcrumbCode2:`<sui-breadcrumb
  :sections="[
    { content: 'Home', link: true },
    { content: 'Store', link: true },
    { content: 'T-Shirt', active: true }
  ]"
  icon="right angle"
/>`,dividerCode:`<sui-breadcrumb>
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right chevron" />
  <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right arrow" />
  <sui-breadcrumb-section active>Personal Information</sui-breadcrumb-section>
</sui-breadcrumb>`,sectionCode:`<sui-breadcrumb>
  <sui-breadcrumb-section>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>Search</sui-breadcrumb-section>
</sui-breadcrumb>`,linkCode:`<sui-breadcrumb>
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>Search</sui-breadcrumb-section>
</sui-breadcrumb>`,activeCode:`<sui-breadcrumb>
  <sui-breadcrumb-section link>Product</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>Paper Towels</sui-breadcrumb-section>
</sui-breadcrumb>`,invertedCode:`<sui-segment inverted>
  <sui-breadcrumb inverted>
    <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
    <sui-breadcrumb-divider icon="right chevron" />
    <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
    <sui-breadcrumb-divider icon="right chevron" />
    <sui-breadcrumb-section active>Personal Information</sui-breadcrumb-section>
  </sui-breadcrumb>
</sui-segment>`,sizeCode:`<sui-breadcrumb size="mini">
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right chevron" />
  <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right chevron" />
  <sui-breadcrumb-section>Personal Information</sui-breadcrumb-section>
</sui-breadcrumb>`}}}),Wg=i("Types"),Kg=i("Home"),Qg=i(" / "),Xg=i("Store"),Zg=i(" / "),ef=i("T-Shirt"),tf=i("Content"),sf=i("Home"),of=i("Registration"),af=i("Personal Information"),lf=i("Home"),nf=i(" / "),uf=i("Search"),df=i("Home"),rf=i(" / "),cf=i("Search"),mf=i("States"),_f=i("Product"),pf=i(" / "),hf=i("Paper Towels"),gf=i("Variations"),ff=i("Home"),bf=i("Registration"),vf=i("Personal Information"),$f=i("Home"),wf=i("Registration"),Cf=i("Personal Information");function yf(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-breadcrumb-section"),l=u("sui-breadcrumb-divider"),r=u("sui-breadcrumb"),n=u("doc-example"),h=u("sui-segment"),c=u("sui-container");return z(),V("div",null,[e(b,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),e(c,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Wg]),_:1}),e(n,{title:"Breadcrumb",description:"A standard breadcrumb",code:s.breadcrumbCode},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{link:""},{default:t(()=>[Kg]),_:1}),e(l,null,{default:t(()=>[Qg]),_:1}),e(o,{link:""},{default:t(()=>[Xg]),_:1}),e(l,null,{default:t(()=>[Zg]),_:1}),e(o,{active:""},{default:t(()=>[ef]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{description:"You can do the same using shorthands",code:s.breadcrumbCode2},{default:t(()=>[e(r,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[tf]),_:1}),e(n,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:s.dividerCode},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{link:""},{default:t(()=>[sf]),_:1}),e(l,{icon:"right chevron"}),e(o,{link:""},{default:t(()=>[of]),_:1}),e(l,{icon:"right arrow"}),e(o,{active:""},{default:t(()=>[af]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:s.sectionCode},{default:t(()=>[e(r,null,{default:t(()=>[e(o,null,{default:t(()=>[lf]),_:1}),e(l,null,{default:t(()=>[nf]),_:1}),e(o,{active:""},{default:t(()=>[uf]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Link",description:"A section may be linkable or contain a link",code:s.linkCode},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{link:""},{default:t(()=>[df]),_:1}),e(l,null,{default:t(()=>[rf]),_:1}),e(o,{active:""},{default:t(()=>[cf]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[mf]),_:1}),e(n,{title:"Active",description:"A section can be active",code:s.activeCode},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{link:""},{default:t(()=>[_f]),_:1}),e(l,null,{default:t(()=>[pf]),_:1}),e(o,{active:""},{default:t(()=>[hf]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[gf]),_:1}),e(n,{title:"Inverted",description:"A breadcrumb can be inverted",code:s.invertedCode},{default:t(()=>[e(h,{inverted:""},{default:t(()=>[e(r,{inverted:""},{default:t(()=>[e(o,{link:""},{default:t(()=>[ff]),_:1}),e(l,{icon:"right chevron"}),e(o,{link:""},{default:t(()=>[bf]),_:1}),e(l,{icon:"right chevron"}),e(o,{active:""},{default:t(()=>[vf]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Size",description:"A breadcrumb can vary in size",code:s.sizeCode},{default:t(()=>[e(r,{size:"mini"},{default:t(()=>[e(o,{link:""},{default:t(()=>[$f]),_:1}),e(l,{icon:"right chevron"}),e(o,{link:""},{default:t(()=>[wf]),_:1}),e(l,{icon:"right chevron"}),e(o,null,{default:t(()=>[Cf]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var Af=x(Yg,[["render",yf]]);const kf=E({name:"FormDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{formCode:`<sui-form>
  <sui-form-field
    label="First Name"
    placeholder="First Name"
  />
  <sui-form-field
    label="Last Name"
    placeholder="Last Name"
  />
  <sui-form-field>
    <sui-checkbox label="I agree to the Terms and Conditions" />
  </sui-form-field>
  <sui-button>Submit</sui-button>
</sui-form>`,fieldCode:`<sui-form>
  <sui-form-field
    label="Enter Password"
    type="password"
  />
</sui-form>`,fieldsCode:`<sui-form>
  <sui-form-group>
    <sui-form-field
      label="First name"
      placeholder="First Name"
    />
    <sui-form-field
      label="Middle name"
      placeholder="Middle Name"
    />
    <sui-form-field
      label="Last name"
      placeholder="Last Name"
    />
  </sui-form-group>
</sui-form>`}}}),Sf=i("Types"),zf=i("Submit"),Tf=i("Content");function Rf(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-form-field"),l=u("sui-checkbox"),r=u("sui-button"),n=u("sui-form"),h=u("doc-example"),c=u("sui-form-group"),a=u("sui-container");return z(),V("div",null,[e(b,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),e(a,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Sf]),_:1}),e(h,{title:"Form",description:"A form",code:s.formCode},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{label:"First Name",placeholder:"First Name"}),e(o,{label:"Last Name",placeholder:"Last Name"}),e(o,null,{default:t(()=>[e(l,{label:"I agree to the Terms and Conditions"})]),_:1}),e(r,null,{default:t(()=>[zf]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Tf]),_:1}),e(h,{title:"Field",description:"A field is a form element containing a label and an input",code:s.fieldCode},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),e(h,{title:"Fields",description:"A set of fields can appear grouped together",code:s.fieldsCode},{default:t(()=>[e(n,null,{default:t(()=>[e(c,null,{default:t(()=>[e(o,{label:"First name",placeholder:"First Name"}),e(o,{label:"Middle name",placeholder:"Middle Name"}),e(o,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var Vf=x(kf,[["render",Rf]]),U="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Ve="/vue-fomantic-ui/images/wireframe/centered-paragraph.png";const Ef=E({name:"GridDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
  <sui-grid-column
    v-for="n in numbers"
    :key="n"
  >
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
</sui-grid>`,dividedCode:`<sui-grid :columns="3" divided>
  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,verticalDividedCode:`<sui-grid divided="vertically">
  <sui-grid-row :columns="2">
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row :columns="3">
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,celledCode:`<sui-grid celled>
  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="13">
      <sui-image src="/images/wireframe/centered-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="10">
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,internallyCelledCode:`<sui-grid celled="internally">
  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="13">
      <sui-image src="/images/wireframe/centered-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="10">
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,rowsCode:`<sui-grid :columns="3">
  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,columnsCode:`<sui-grid>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
</sui-grid>`,floatedCode:`<sui-grid>
  <sui-grid-column floated="left" :width="5">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column floated="right" :width="5">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
</sui-grid>`,columnWidthCode:`<sui-grid>
  <sui-grid-column :width="4">
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column :width="9">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="3">
    <sui-image src="/images/wireframe/media-paragraph.png" />
  </sui-grid-column>
</sui-grid>`,columnCountCode:`<sui-grid>
  <sui-grid-row :columns="3">
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row :columns="4">
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,equalWidthCode:`<sui-grid columns="equal">
  <sui-grid-column>
    <sui-segment>1</sui-segment>
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-segment>2</sui-segment>
  </sui-grid-column>
  <sui-grid-column>
    <sui-segment>3</sui-segment>
  </sui-grid-column>
</sui-grid>`,stretchedCode:`<sui-grid :columns="3" divided>
  <sui-grid-row stretched>
    <sui-grid-column>
      <sui-segment>1</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>1</sui-segment>
      <sui-segment>2</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>1</sui-segment>
      <sui-segment>2</sui-segment>
      <sui-segment>3</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,paddedCode:`<div>
  <sui-divider />
  <sui-grid padded :columns="2">
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid>
</div>`,relaxedCode:`<sui-grid relaxed :columns="4">
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
</sui-grid>`,coloredCode:`<sui-grid padded :columns="5">
  <sui-grid-column color="red">Red</sui-grid-column>
  <sui-grid-column color="orange">Orange</sui-grid-column>
  <sui-grid-column color="yellow">Yellow</sui-grid-column>
  <sui-grid-column color="olive">Olive</sui-grid-column>
  <sui-grid-column color="green">Green</sui-grid-column>
  <sui-grid-column color="teal">Teal</sui-grid-column>
  <sui-grid-column color="blue">Blue</sui-grid-column>
  <sui-grid-column color="violet">Violet</sui-grid-column>
  <sui-grid-column color="purple">Purple</sui-grid-column>
  <sui-grid-column color="pink">Pink</sui-grid-column>
  <sui-grid-column color="brown">Brown</sui-grid-column>
  <sui-grid-column color="grey">Grey</sui-grid-column>
  <sui-grid-column color="black">Black</sui-grid-column>
</sui-grid>`,centeredCode:`<sui-grid centered :columns="2">
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-row centered :columns="4">
    <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,textAlignCode:`<sui-grid textAlign="center" :columns="3">
  <sui-grid-row>
    <sui-grid-column>
      <sui-menu vertical fluid>
        <sui-menu-item header>Cats</sui-menu-item>
      </sui-menu>
    </sui-grid-column>
    <sui-grid-column>
      <sui-menu vertical fluid>
        <sui-menu-item header>Dogs</sui-menu-item>
        <sui-menu-item>Poodle</sui-menu-item>
        <sui-menu-item>Cockerspaniel</sui-menu-item>
      </sui-menu>
    </sui-grid-column>
    <sui-grid-column>
      <sui-menu vertical fluid>
        <sui-menu-item header>Monkeys</sui-menu-item>
      </sui-menu>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,verticalAlignCode:`<sui-grid verticalAlign="middle" :columns="4" centered>
  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
      <br />
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,doublingCode:`<sui-grid doubling :columns="5">
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
</sui-grid>`,stackableCode:`<sui-grid stackable :columns="2">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segment>
  </sui-grid-column>
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,reversedCode:`<sui-grid reversed="computer vertically">
  <sui-grid-row>
    <sui-grid-column>Computer Row 3</sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>Computer Row 2</sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>Computer Row 1</sui-grid-column>
  </sui-grid-row>
</sui-grid>`,deviceVisibilityCode:`<sui-grid>
  <sui-grid-row only="large screen" :columns="2">
    <sui-grid-column>
      <sui-segment>Large Screen</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Large Screen</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="widescreen" :columns="2">
    <sui-grid-column>
      <sui-segment>Widescreen</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Widescreen</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="mobile" :columns="2">
    <sui-grid-column>
      <sui-segment>Mobile</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Mobile</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row :columns="3">
    <sui-grid-column only="computer">
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column only="mobile">
      <sui-segment>Tablet and Mobile</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>All Sizes</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>All Sizes</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="computer" :columns="4">
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="tablet" :columns="3">
    <sui-grid-column>
      <sui-segment>Tablet</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Tablet</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Tablet</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,responsiveWidthCode:`<sui-grid>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
</sui-grid>`}}}),xf=i("Types"),Df=i("Content"),Bf=i("Variations"),Nf=i("1"),Pf=i("2"),jf=i("3"),Ff=i("1"),qf=i("1"),Mf=i("2"),Lf=i("1"),If=i("2"),Jf=i("3"),Hf=i("Red"),Of=i("Orange"),Gf=i("Yellow"),Uf=i("Olive"),Yf=i("Green"),Wf=i("Teal"),Kf=i("Blue"),Qf=i("Violet"),Xf=i("Purple"),Zf=i("Pink"),e1=i("Brown"),t1=i("Grey"),i1=i("Black"),s1=i("Cats"),o1=i("Dogs"),a1=i("Poodle"),l1=i("Cockerspaniel"),n1=i("Monkeys"),u1=d("br",null,null,-1),d1=i("Responsive Variations"),r1=i("Computer Row 3"),c1=i("Computer Row 2"),m1=i("Computer Row 1"),_1=i("Large Screen"),p1=i("Large Screen"),h1=i("Widescreen"),g1=i("Widescreen"),f1=i("Mobile"),b1=i("Mobile"),v1=i("Computer"),$1=i("Tablet and Mobile"),w1=i("All Sizes"),C1=i("All Sizes"),y1=i("Computer"),A1=i("Computer"),k1=i("Computer"),S1=i("Computer"),z1=i("Tablet"),T1=i("Tablet"),R1=i("Tablet");function V1(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-image"),l=u("sui-grid-column"),r=u("sui-grid"),n=u("doc-example"),h=u("sui-grid-row"),c=u("sui-segment"),a=u("sui-divider"),m=u("sui-menu-item"),f=u("sui-menu"),v=u("sui-container");return z(),V("div",null,[e(b,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),e(v,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[xf]),_:1}),e(n,{title:"Grid",description:"A basic grid",code:s.gridCode},{default:t(()=>[e(r,null,{default:t(()=>[(z(!0),V(H,null,O(s.numbers,p=>(z(),I(l,{key:p},{default:t(()=>[e(o,{src:k})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),e(n,{title:"Divided",description:"A grid can have dividers between its columns",code:s.dividedCode},{default:t(()=>[e(r,{columns:3,divided:""},{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:U})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:U})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:U})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:U})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:U})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:U})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:s.verticalDividedCode},{default:t(()=>[e(r,{divided:"vertically"},{default:t(()=>[e(h,{columns:2},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:D})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1}),e(h,{columns:3},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:D})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:D})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Celled",description:"A grid can have rows divided into cells",code:s.celledCode},{default:t(()=>[e(r,{celled:""},{default:t(()=>[e(h,null,{default:t(()=>[e(l,{width:3},{default:t(()=>[e(o,{src:k})]),_:1}),e(l,{width:13},{default:t(()=>[e(o,{src:Ve})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,{width:3},{default:t(()=>[e(o,{src:k})]),_:1}),e(l,{width:10},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{width:3},{default:t(()=>[e(o,{src:k})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:s.internallyCelledCode},{default:t(()=>[e(r,{celled:"internally"},{default:t(()=>[e(h,null,{default:t(()=>[e(l,{width:3},{default:t(()=>[e(o,{src:k})]),_:1}),e(l,{width:13},{default:t(()=>[e(o,{src:Ve})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,{width:3},{default:t(()=>[e(o,{src:k})]),_:1}),e(l,{width:10},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{width:3},{default:t(()=>[e(o,{src:k})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Df]),_:1}),e(n,{title:"Rows",description:"A row is a horizontal grouping of columns",code:s.rowsCode},{default:t(()=>[e(r,{columns:3},{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:D})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:D})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:D})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:s.columnsCode},{default:t(()=>[e(r,null,{default:t(()=>[e(l,{width:8},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{width:8},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{width:8},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{width:8},{default:t(()=>[e(o,{src:D})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Bf]),_:1}),e(n,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:s.floatedCode},{default:t(()=>[e(r,null,{default:t(()=>[e(l,{floated:"left",width:5},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{floated:"right",width:5},{default:t(()=>[e(o,{src:D})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:s.columnWidthCode},{default:t(()=>[e(r,null,{default:t(()=>[e(l,{width:4},{default:t(()=>[e(o,{src:k})]),_:1}),e(l,{width:9},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{width:3},{default:t(()=>[e(o,{src:U})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Column Count",description:"A grid can have a different number of columns per row",code:s.columnCountCode},{default:t(()=>[e(r,null,{default:t(()=>[e(h,{columns:3},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1})]),_:1}),e(h,{columns:4},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Equal Width",description:"Equal Width",code:s.equalWidthCode},{default:t(()=>[e(r,{columns:"equal"},{default:t(()=>[e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[Nf]),_:1})]),_:1}),e(l,{width:8},{default:t(()=>[e(c,null,{default:t(()=>[Pf]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[jf]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:s.stretchedCode},{default:t(()=>[e(r,{columns:3,divided:""},{default:t(()=>[e(h,{stretched:""},{default:t(()=>[e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[Ff]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[qf]),_:1}),e(c,null,{default:t(()=>[Mf]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[Lf]),_:1}),e(c,null,{default:t(()=>[If]),_:1}),e(c,null,{default:t(()=>[Jf]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:s.paddedCode},{default:t(()=>[d("div",null,[e(a),e(r,{padded:"",columns:2},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:D})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1})])]),_:1},8,["code"]),e(n,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:s.relaxedCode},{default:t(()=>[e(r,{relaxed:"",columns:4},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Colored",description:"A row or column can be colored",code:s.coloredCode},{default:t(()=>[e(r,{padded:"",columns:5},{default:t(()=>[e(l,{color:"red"},{default:t(()=>[Hf]),_:1}),e(l,{color:"orange"},{default:t(()=>[Of]),_:1}),e(l,{color:"yellow"},{default:t(()=>[Gf]),_:1}),e(l,{color:"olive"},{default:t(()=>[Uf]),_:1}),e(l,{color:"green"},{default:t(()=>[Yf]),_:1}),e(l,{color:"teal"},{default:t(()=>[Wf]),_:1}),e(l,{color:"blue"},{default:t(()=>[Kf]),_:1}),e(l,{color:"violet"},{default:t(()=>[Qf]),_:1}),e(l,{color:"purple"},{default:t(()=>[Xf]),_:1}),e(l,{color:"pink"},{default:t(()=>[Zf]),_:1}),e(l,{color:"brown"},{default:t(()=>[e1]),_:1}),e(l,{color:"grey"},{default:t(()=>[t1]),_:1}),e(l,{color:"black"},{default:t(()=>[i1]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Centered",description:"A grid can have its columns centered",code:s.centeredCode},{default:t(()=>[e(r,{centered:"",columns:2},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(h,{centered:"",columns:4},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:s.textAlignCode},{default:t(()=>[e(r,{textAlign:"center",columns:3},{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(f,{vertical:"",fluid:""},{default:t(()=>[e(m,{header:""},{default:t(()=>[s1]),_:1})]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(f,{vertical:"",fluid:""},{default:t(()=>[e(m,{header:""},{default:t(()=>[o1]),_:1}),e(m,null,{default:t(()=>[a1]),_:1}),e(m,null,{default:t(()=>[l1]),_:1})]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(f,{vertical:"",fluid:""},{default:t(()=>[e(m,{header:""},{default:t(()=>[n1]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:s.verticalAlignCode},{default:t(()=>[e(r,{verticalAlign:"middle",columns:4,centered:""},{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k}),u1,e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[d1]),_:1}),e(n,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:s.doublingCode},{default:t(()=>[e(r,{doubling:"",columns:5},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(l,null,{default:t(()=>[e(o,{src:k})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:s.stackableCode},{default:t(()=>[e(r,{stackable:"",columns:2},{default:t(()=>[e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:s.reversedCode},{default:t(()=>[e(r,{reversed:"computer vertically"},{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[r1]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[c1]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[m1]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:s.deviceVisibilityCode},{default:t(()=>[e(r,null,{default:t(()=>[e(h,{only:"large screen",columns:2},{default:t(()=>[e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[_1]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[p1]),_:1})]),_:1})]),_:1}),e(h,{only:"widescreen",columns:2},{default:t(()=>[e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[h1]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[g1]),_:1})]),_:1})]),_:1}),e(h,{only:"mobile",columns:2},{default:t(()=>[e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[f1]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[b1]),_:1})]),_:1})]),_:1}),e(h,{columns:3},{default:t(()=>[e(l,{only:"computer"},{default:t(()=>[e(c,null,{default:t(()=>[v1]),_:1})]),_:1}),e(l,{only:"mobile"},{default:t(()=>[e(c,null,{default:t(()=>[$1]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[w1]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[C1]),_:1})]),_:1})]),_:1}),e(h,{only:"computer",columns:4},{default:t(()=>[e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[y1]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[A1]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[k1]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[S1]),_:1})]),_:1})]),_:1}),e(h,{only:"tablet",columns:3},{default:t(()=>[e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[z1]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[T1]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[R1]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:s.responsiveWidthCode},{default:t(()=>[e(r,null,{default:t(()=>[e(l,{mobile:16,tablet:8,computer:4},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{mobile:16,tablet:8,computer:4},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{mobile:16,tablet:8,computer:4},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{mobile:16,tablet:8,computer:4},{default:t(()=>[e(o,{src:D})]),_:1}),e(l,{mobile:16,tablet:8,computer:4},{default:t(()=>[e(o,{src:D})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var E1=x(Ef,[["render",V1]]),x1="/vue-fomantic-ui/images/logo.png";const D1=E({name:"MenuDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{menuCode:`<sui-menu>
  <sui-menu-item>Editorials</sui-menu-item>
  <sui-menu-item>Reviews</sui-menu-item>
  <sui-menu-item>Upcoming Events</sui-menu-item>
</sui-menu>`,secondaryMenuCode:`<sui-menu secondary>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-menu-item>
      <sui-input icon="search" placeholder="Search..." />
    </sui-menu-item>
    <sui-menu-item>logout</sui-menu-item>
  </sui-menu-menu>
</sui-menu>`,pointingCode:`<sui-menu pointing>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-menu-item>
      <sui-input transparent icon="search" placeholder="Search..." />
    </sui-menu-item>
  </sui-menu-menu>
</sui-menu>`,tabularCode:`<sui-menu tabular>
  <sui-menu-item active>Bio</sui-menu-item>
  <sui-menu-item>Photos</sui-menu-item>
</sui-menu>`,textCode:`<sui-menu text>
  <sui-menu-item header>Sort By</sui-menu-item>
  <sui-menu-item active>Closest</sui-menu-item>
  <sui-menu-item>Most Comments</sui-menu-item>
  <sui-menu-item>Most Popular</sui-menu-item>
</sui-menu>`,verticalMenuCode:`<sui-menu vertical>
  <sui-menu-item active color="teal">
    Inbox
    <sui-label color="teal" pointing="left">1</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    Spam
    <sui-label>51</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    Updates
    <sui-label>1</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    <sui-input transparent icon="search" placeholder="Search mail..." />
  </sui-menu-item>
</sui-menu>`,paginationCode:`<sui-menu pagination>
  <sui-menu-item active>1</sui-menu-item>
  <sui-menu-item disabled>...</sui-menu-item>
  <sui-menu-item>10</sui-menu-item>
  <sui-menu-item>11</sui-menu-item>
  <sui-menu-item>12</sui-menu-item>
</sui-menu>`,headerCode:`<sui-menu>
  <sui-menu-item header>Our Company</sui-menu-item>
  <sui-menu-item>About us</sui-menu-item>
  <sui-menu-item>Jobs</sui-menu-item>
  <sui-menu-item>Locations</sui-menu-item>
</sui-menu>`,textContentCode:`<sui-menu vertical>
  <sui-menu-item>
    <sui-header as="h4">Promotions</sui-header>
    <p>Check out our new promotions</p>
  </sui-menu-item>
  <sui-menu-item>
    <sui-header as="h4">Coupons</sui-header>
    <p>Check out our collection of coupons</p>
  </sui-menu-item>
  <sui-menu-item>
    <sui-header as="h4">Rebates</sui-header>
    <p>Visit our rebate forum for information on claiming rebates</p>
  </sui-menu-item>
</sui-menu>`,inputCode:`<sui-menu>
  <sui-menu-item as="div">
    <sui-input icon="search" placeholder="Search..." />
  </sui-menu-item>
  <sui-menu-item position="right" as="div">
    <sui-input placeholder="Navigate to ..." />
  </sui-menu-item>
</sui-menu>`,buttonCode:`<sui-menu>
  <sui-menu-item as="div">
    <sui-button color="primary">Sign up</sui-button>
  </sui-menu-item>
  <sui-menu-item as="div">
    <sui-button>Log in</sui-button>
  </sui-menu-item>
</sui-menu>`,linkItemCode:`<sui-menu vertical>
  <sui-menu-item href="https://google.com">Visit Google</sui-menu-item>
  <sui-menu-item link as="div">Javascript Link</sui-menu-item>
</sui-menu>`,dropdownItemCode:`<sui-menu vertical>
  <sui-dropdown item text="Categories">
    <sui-dropdown-menu>
      <sui-dropdown-item text="Electoronics" />
      <sui-dropdown-item text="Automotive" />
      <sui-dropdown-item text="Home" />
    </sui-dropdown-menu>
  </sui-dropdown>
</sui-menu>`,menuContentCode:`<sui-menu>
  <sui-menu-item>Browse</sui-menu-item>
  <sui-menu-item>Submit</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-menu-item>Sign up</sui-menu-item>
    <sui-menu-item>Help</sui-menu-item>
  </sui-menu-menu>
</sui-menu>`,subMenuCode:`<sui-menu vertical>
  <sui-menu-item as="div">
    <sui-input placeholder="Search..." />
  </sui-menu-item>
  <sui-menu-item as="div">
    Home
    <sui-menu-menu>
      <sui-menu-item>Search</sui-menu-item>
      <sui-menu-item>Add</sui-menu-item>
      <sui-menu-item>Remove</sui-menu-item>
    </sui-menu-menu>
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="grid layout" />
    Browse
  </sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-dropdown item text="More">
    <sui-dropdown-menu>
      <sui-dropdown-item icon="edit" text="Edit Profile" />
      <sui-dropdown-item icon="globe" text="Choose Language" />
      <sui-dropdown-item icon="settings" text="Account Settings" />
    </sui-dropdown-menu>
  </sui-dropdown>
</sui-menu>`,hoverCode:`<sui-menu compact>
  <sui-menu-item>A link</sui-menu-item>
  <sui-menu-item as="div" link>div Link</sui-menu-item>
</sui-menu>`,activeCode:`<sui-menu compact>
  <sui-menu-item active>Link</sui-menu-item>
</sui-menu>`,stackableCode:`<sui-menu stackable>
  <sui-menu-item as="div">
    <img src="/images/logo.png">
  </sui-menu-item>
  <sui-menu-item>Features</sui-menu-item>
  <sui-menu-item>Testimonials</sui-menu-item>
  <sui-menu-item>Sign in</sui-menu-item>
</sui-menu>`,invertedCode:`<sui-menu inverted>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
</sui-menu>`,coloredCode:`<sui-menu>
  <sui-menu-item active color="red">Red</sui-menu-item>
  <sui-menu-item color="orange">Orange</sui-menu-item>
  <sui-menu-item color="yellow">Yellow</sui-menu-item>
  <sui-menu-item color="olive">Olive</sui-menu-item>
  <sui-menu-item color="green">Green</sui-menu-item>
  <sui-menu-item color="teal">Teal</sui-menu-item>
</sui-menu>`,iconsCode:`<sui-menu icon>
  <sui-menu-item>
    <sui-icon name="gamepad" />
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video camera" />
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video play" />
  </sui-menu-item>
</sui-menu>`,labeledIconCode:`<sui-menu icon="labeled">
  <sui-menu-item>
    <sui-icon name="gamepad" />
    Games
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video camera" />
    Channels
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video play" />
    Videos
  </sui-menu-item>
</sui-menu>`,fluidCode:`<sui-menu fluid vertical>
  <sui-menu-item>Run</sui-menu-item>
  <sui-menu-item>Walk</sui-menu-item>
  <sui-menu-item>Bike</sui-menu-item>
</sui-menu>`,compactCode:`<sui-menu compact>
  <sui-menu-item>
    <sui-icon name="gamepad" />
    Games
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video camera" />
    Channels
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video play" />
    Videos
  </sui-menu-item>
</sui-menu>`,evenlyDividedCode:`<sui-menu fluid :widths="3">
  <sui-menu-item>Buy</sui-menu-item>
  <sui-menu-item>Sell</sui-menu-item>
  <sui-menu-item>Rent</sui-menu-item>
</sui-menu>`,attachedCode:`<div>
  <sui-menu attached="top" tabular>
    <sui-menu-item active>tab1</sui-menu-item>
    <sui-menu-item>tab2</sui-menu-item>
  </sui-menu>

  <sui-segment attached="bottom">
      There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly believable.
      If you are going to use a passage of Lorem Ipsum, you need to be sure
      there isn't anything embarrassing hidden in the middle of text. All
      the Lorem Ipsum generators on the Internet tend to repeat predefined
      chunks as necessary, making this the first true generator on the
      Internet. It uses a dictionary of over 200 Latin words, combined with
      a handful of model sentence structures, to generate Lorem Ipsum which
      looks reasonable. The generated Lorem Ipsum is therefore always free
      from repetition, injected humour, or non-characteristic words etc.
  </sui-segment>
</div>`,sizeCode:`<sui-menu size="mini">
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-dropdown item text="Language">
      <sui-dropdown-menu>
        <sui-dropdown-item>English</sui-dropdown-item>
        <sui-dropdown-item>Russian</sui-dropdown-item>
        <sui-dropdown-item>Spanish</sui-dropdown-item>
      </sui-dropdown-menu>
    </sui-dropdown>
    <sui-menu-item as="div">
      <sui-button color="primary">Sign up</sui-button>
    </sui-menu-item>
  </sui-menu-menu>
</sui-menu>`,fittedCode:`<sui-menu>
  <sui-menu-item fitted>No padding whatsoever</sui-menu-item>
  <sui-menu-item fitted="horizontally">No horizontal padding</sui-menu-item>
  <sui-menu-item fitted="vertically">No vertical padding</sui-menu-item>
</sui-menu>`,borderlessCode:`<sui-menu borderless>
  <sui-menu-item>1</sui-menu-item>
  <sui-menu-item>2</sui-menu-item>
  <sui-menu-item>3</sui-menu-item>
  <sui-menu-item>4</sui-menu-item>
  <sui-menu-item>5</sui-menu-item>
  <sui-menu-item>6</sui-menu-item>
</sui-menu>`}}}),B1=i("Types"),N1=i("Editorials"),P1=i("Reviews"),j1=i("Upcoming Events"),F1=i("Home"),q1=i("Messages"),M1=i("Friends"),L1=i("logout"),I1=i("Home"),J1=i("Messages"),H1=i("Friends"),O1=i("Bio"),G1=i("Photos"),U1=i("Sort By"),Y1=i("Closest"),W1=i("Most Comments"),K1=i("Most Popular"),Q1=i(" Inbox "),X1=i("1"),Z1=i(" Spam "),eb=i("51"),tb=i(" Updates "),ib=i("1"),sb=i("1"),ob=i("..."),ab=i("10"),lb=i("11"),nb=i("12"),ub=i("Content"),db=i("Our Company"),rb=i("About us"),cb=i("Jobs"),mb=i("Locations"),_b=i("Promotions"),pb=d("p",null,"Check out our new promotions",-1),hb=i("Coupons"),gb=d("p",null,"Check out our collection of coupons",-1),fb=i("Rebates"),bb=d("p",null,"Visit our rebate forum for information on claiming rebates",-1),vb=i("Sign up"),$b=i("Log in"),wb=i("Visit Google"),Cb=i("Javascript Link"),yb=i("Browse"),Ab=i("Submit"),kb=i("Sign up"),Sb=i("Help"),zb=i(" Home "),Tb=i("Search"),Rb=i("Add"),Vb=i("Remove"),Eb=i(" Browse "),xb=i("Messages"),Db=i("States"),Bb=i("A link"),Nb=i("div Link"),Pb=i("Link"),jb=i("Variations"),Fb=d("img",{src:x1},null,-1),qb=i("Features"),Mb=i("Testimonials"),Lb=i("Sign in"),Ib=i("Home"),Jb=i("Messages"),Hb=i("Friends"),Ob=i("Red"),Gb=i("Orange"),Ub=i("Yellow"),Yb=i("Olive"),Wb=i("Green"),Kb=i("Teal"),Qb=i(" Games "),Xb=i(" Channels "),Zb=i(" Videos "),ev=i("Run"),tv=i("Walk"),iv=i("Bike"),sv=i(" Games "),ov=i(" Channels "),av=i(" Videos "),lv=i("Buy"),nv=i("Sell"),uv=i("Rent"),dv=i("tab1"),rv=i("tab2"),cv=i(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. "),mv=i("Home"),_v=i("Messages"),pv=i("English"),hv=i("Russian"),gv=i("Spanish"),fv=i("Sign up"),bv=i("No padding whatsoever"),vv=i("No horizontal padding"),$v=i("No vertical padding"),wv=i("1"),Cv=i("2"),yv=i("3"),Av=i("4"),kv=i("5"),Sv=i("6");function zv(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-menu-item"),l=u("sui-menu"),r=u("doc-example"),n=u("sui-input"),h=u("sui-menu-menu"),c=u("sui-label"),a=u("sui-button"),m=u("sui-dropdown-item"),f=u("sui-dropdown-menu"),v=u("sui-dropdown"),p=u("sui-icon"),w=u("sui-segment"),S=u("sui-container");return z(),V("div",null,[e(b,{title:"Menu",sub:"A menu displays grouped navigation actions"}),e(S,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[B1]),_:1}),e(r,{title:"Menu",description:"A menu",code:s.menuCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[N1]),_:1}),e(o,null,{default:t(()=>[P1]),_:1}),e(o,null,{default:t(()=>[j1]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:s.secondaryMenuCode},{default:t(()=>[e(l,{secondary:""},{default:t(()=>[e(o,{active:""},{default:t(()=>[F1]),_:1}),e(o,null,{default:t(()=>[q1]),_:1}),e(o,null,{default:t(()=>[M1]),_:1}),e(h,{position:"right"},{default:t(()=>[e(o,null,{default:t(()=>[e(n,{icon:"search",placeholder:"Search..."})]),_:1}),e(o,null,{default:t(()=>[L1]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:s.pointingCode},{default:t(()=>[e(l,{pointing:""},{default:t(()=>[e(o,{active:""},{default:t(()=>[I1]),_:1}),e(o,null,{default:t(()=>[J1]),_:1}),e(o,null,{default:t(()=>[H1]),_:1}),e(h,{position:"right"},{default:t(()=>[e(o,null,{default:t(()=>[e(n,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:s.tabularCode},{default:t(()=>[e(l,{tabular:""},{default:t(()=>[e(o,{active:""},{default:t(()=>[O1]),_:1}),e(o,null,{default:t(()=>[G1]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Text",description:"A menu can be formatted for text content",code:s.textCode},{default:t(()=>[e(l,{text:""},{default:t(()=>[e(o,{header:""},{default:t(()=>[U1]),_:1}),e(o,{active:""},{default:t(()=>[Y1]),_:1}),e(o,null,{default:t(()=>[W1]),_:1}),e(o,null,{default:t(()=>[K1]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:s.verticalMenuCode},{default:t(()=>[e(l,{vertical:""},{default:t(()=>[e(o,{active:"",color:"teal"},{default:t(()=>[Q1,e(c,{color:"teal",pointing:"left"},{default:t(()=>[X1]),_:1})]),_:1}),e(o,null,{default:t(()=>[Z1,e(c,null,{default:t(()=>[eb]),_:1})]),_:1}),e(o,null,{default:t(()=>[tb,e(c,null,{default:t(()=>[ib]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(n,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:s.paginationCode},{default:t(()=>[e(l,{pagination:""},{default:t(()=>[e(o,{active:""},{default:t(()=>[sb]),_:1}),e(o,{disabled:""},{default:t(()=>[ob]),_:1}),e(o,null,{default:t(()=>[ab]),_:1}),e(o,null,{default:t(()=>[lb]),_:1}),e(o,null,{default:t(()=>[nb]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[ub]),_:1}),e(r,{title:"Header",description:"A menu item may include a header or may itself be a header",code:s.headerCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{header:""},{default:t(()=>[db]),_:1}),e(o,null,{default:t(()=>[rb]),_:1}),e(o,null,{default:t(()=>[cb]),_:1}),e(o,null,{default:t(()=>[mb]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:s.textContentCode},{default:t(()=>[e(l,{vertical:""},{default:t(()=>[e(o,null,{default:t(()=>[e(_,{as:"h4"},{default:t(()=>[_b]),_:1}),pb]),_:1}),e(o,null,{default:t(()=>[e(_,{as:"h4"},{default:t(()=>[hb]),_:1}),gb]),_:1}),e(o,null,{default:t(()=>[e(_,{as:"h4"},{default:t(()=>[fb]),_:1}),bb]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Input",description:"A menu item can contain an input inside of it",code:s.inputCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{as:"div"},{default:t(()=>[e(n,{icon:"search",placeholder:"Search..."})]),_:1}),e(o,{position:"right",as:"div"},{default:t(()=>[e(n,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Button",description:"A menu item can contain a button inside of it",code:s.buttonCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{as:"div"},{default:t(()=>[e(a,{color:"primary"},{default:t(()=>[vb]),_:1})]),_:1}),e(o,{as:"div"},{default:t(()=>[e(a,null,{default:t(()=>[$b]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:s.linkItemCode},{default:t(()=>[e(l,{vertical:""},{default:t(()=>[e(o,{href:"https://google.com"},{default:t(()=>[wb]),_:1}),e(o,{link:"",as:"div"},{default:t(()=>[Cb]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:s.dropdownItemCode},{default:t(()=>[e(l,{vertical:""},{default:t(()=>[e(v,{item:"",text:"Categories"},{default:t(()=>[e(f,null,{default:t(()=>[e(m,{text:"Electoronics"}),e(m,{text:"Automotive"}),e(m,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:s.menuContentCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[yb]),_:1}),e(o,null,{default:t(()=>[Ab]),_:1}),e(h,{position:"right"},{default:t(()=>[e(o,null,{default:t(()=>[kb]),_:1}),e(o,null,{default:t(()=>[Sb]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:s.subMenuCode},{default:t(()=>[e(l,{vertical:""},{default:t(()=>[e(o,{as:"div"},{default:t(()=>[e(n,{placeholder:"Search..."})]),_:1}),e(o,{as:"div"},{default:t(()=>[zb,e(h,null,{default:t(()=>[e(o,null,{default:t(()=>[Tb]),_:1}),e(o,null,{default:t(()=>[Rb]),_:1}),e(o,null,{default:t(()=>[Vb]),_:1})]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(p,{name:"grid layout"}),Eb]),_:1}),e(o,null,{default:t(()=>[xb]),_:1}),e(v,{item:"",text:"More"},{default:t(()=>[e(f,null,{default:t(()=>[e(m,{icon:"edit",text:"Edit Profile"}),e(m,{icon:"globe",text:"Choose Language"}),e(m,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Db]),_:1}),e(r,{title:"Hover",description:"A menu item can be hovered",code:s.hoverCode},{default:t(()=>[e(l,{compact:""},{default:t(()=>[e(o,null,{default:t(()=>[Bb]),_:1}),e(o,{as:"div",link:""},{default:t(()=>[Nb]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Active",description:"A menu item can be active",code:s.activeCode},{default:t(()=>[e(l,{compact:""},{default:t(()=>[e(o,{active:""},{default:t(()=>[Pb]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[jb]),_:1}),e(r,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:s.stackableCode},{default:t(()=>[e(l,{stackable:""},{default:t(()=>[e(o,{as:"div"},{default:t(()=>[Fb]),_:1}),e(o,null,{default:t(()=>[qb]),_:1}),e(o,null,{default:t(()=>[Mb]),_:1}),e(o,null,{default:t(()=>[Lb]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:s.invertedCode},{default:t(()=>[e(l,{inverted:""},{default:t(()=>[e(o,{active:""},{default:t(()=>[Ib]),_:1}),e(o,null,{default:t(()=>[Jb]),_:1}),e(o,null,{default:t(()=>[Hb]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Colored",description:"Additional colors can be specified",code:s.coloredCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{active:"",color:"red"},{default:t(()=>[Ob]),_:1}),e(o,{color:"orange"},{default:t(()=>[Gb]),_:1}),e(o,{color:"yellow"},{default:t(()=>[Ub]),_:1}),e(o,{color:"olive"},{default:t(()=>[Yb]),_:1}),e(o,{color:"green"},{default:t(()=>[Wb]),_:1}),e(o,{color:"teal"},{default:t(()=>[Kb]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Icons",description:"A menu may have just icons",code:s.iconsCode},{default:t(()=>[e(l,{icon:""},{default:t(()=>[e(o,null,{default:t(()=>[e(p,{name:"gamepad"})]),_:1}),e(o,null,{default:t(()=>[e(p,{name:"video camera"})]),_:1}),e(o,null,{default:t(()=>[e(p,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Labeled Icon",description:"A menu may have labeled icons",code:s.labeledIconCode},{default:t(()=>[e(l,{icon:"labeled"},{default:t(()=>[e(o,null,{default:t(()=>[e(p,{name:"gamepad"}),Qb]),_:1}),e(o,null,{default:t(()=>[e(p,{name:"video camera"}),Xb]),_:1}),e(o,null,{default:t(()=>[e(p,{name:"video play"}),Zb]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Fluid",description:"A vertical menu may take the size of its container",code:s.fluidCode},{default:t(()=>[e(l,{fluid:"",vertical:""},{default:t(()=>[e(o,null,{default:t(()=>[ev]),_:1}),e(o,null,{default:t(()=>[tv]),_:1}),e(o,null,{default:t(()=>[iv]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:s.compactCode},{default:t(()=>[e(l,{compact:""},{default:t(()=>[e(o,null,{default:t(()=>[e(p,{name:"gamepad"}),sv]),_:1}),e(o,null,{default:t(()=>[e(p,{name:"video camera"}),ov]),_:1}),e(o,null,{default:t(()=>[e(p,{name:"video play"}),av]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:s.evenlyDividedCode},{default:t(()=>[e(l,{fluid:"",widths:3},{default:t(()=>[e(o,null,{default:t(()=>[lv]),_:1}),e(o,null,{default:t(()=>[nv]),_:1}),e(o,null,{default:t(()=>[uv]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Attached",description:"A menu may be attached to other content segments",code:s.attachedCode},{default:t(()=>[d("div",null,[e(l,{attached:"top",tabular:""},{default:t(()=>[e(o,{active:""},{default:t(()=>[dv]),_:1}),e(o,null,{default:t(()=>[rv]),_:1})]),_:1}),e(w,{attached:"bottom"},{default:t(()=>[cv]),_:1})])]),_:1},8,["code"]),e(r,{title:"Size",description:"A menu can vary in size",code:s.sizeCode},{default:t(()=>[e(l,{size:"mini"},{default:t(()=>[e(o,{active:""},{default:t(()=>[mv]),_:1}),e(o,null,{default:t(()=>[_v]),_:1}),e(h,{position:"right"},{default:t(()=>[e(v,{item:"",text:"Language"},{default:t(()=>[e(f,null,{default:t(()=>[e(m,null,{default:t(()=>[pv]),_:1}),e(m,null,{default:t(()=>[hv]),_:1}),e(m,null,{default:t(()=>[gv]),_:1})]),_:1})]),_:1}),e(o,{as:"div"},{default:t(()=>[e(a,{color:"primary"},{default:t(()=>[fv]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:s.fittedCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{fitted:""},{default:t(()=>[bv]),_:1}),e(o,{fitted:"horizontally"},{default:t(()=>[vv]),_:1}),e(o,{fitted:"vertically"},{default:t(()=>[$v]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Borderless",description:"A menu item or menu can have no borders",code:s.borderlessCode},{default:t(()=>[e(l,{borderless:""},{default:t(()=>[e(o,null,{default:t(()=>[wv]),_:1}),e(o,null,{default:t(()=>[Cv]),_:1}),e(o,null,{default:t(()=>[yv]),_:1}),e(o,null,{default:t(()=>[Av]),_:1}),e(o,null,{default:t(()=>[kv]),_:1}),e(o,null,{default:t(()=>[Sv]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var Tv=x(D1,[["render",zv]]);const Rv=E({name:"MessageDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{messageCode:`<sui-message>
  <sui-message-header>Changes in Service</sui-message-header>
  <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
</sui-message>`,listMessageCode:`<sui-message>
  <sui-message-header>New Site Features</sui-message-header>
  <sui-message-list>
    <sui-message-item>You can now have cover images on blog pages</sui-message-item>
    <sui-message-item>Drafts will now auto-save while writing</sui-message-item>
  </sui-message-list>
</sui-message>`,iconMessageCode:`<sui-message icon>
  <sui-icon name="inbox" />
  <sui-message-content>
    <sui-message-header>
      Have you heard about our mailing list?
    </sui-message-header>
    <p>Get the best news in your e-mail every day.</p>
  </sui-message-content>
</sui-message>`,hiddenCode:`<sui-message hidden>
  <p>You can't see me</p>
</sui-message>`,visibleCode:`<sui-message visible>
  <p>You can always see me</p>
</sui-message>`,floatingCode:`<sui-message floating>
  <p>Way to go!</p>
</sui-message>`,compactCode:`<sui-message compact>
  <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
</sui-message>`,attachedCode:`<div>
  <sui-message
    attached
    header="Welcome to our site!"
    content="Fill out the form below to sign-up for a new account"
  />
  <sui-form class="attached fluid segment">
    <sui-form-group widths="equal">
      <sui-form-field
        label="First Name"
        placeholder="First Name"
      />
      <sui-form-field
        label="Last Name"
        placeholder="Last Name"
      />
    </sui-form-group>
    <sui-form-field label="Username" placeholder="Username" />
    <sui-form-field label="Password" placeholder="Password" />
    <sui-button color="primary">Submit</sui-button>
  </sui-form>
  <sui-message attached="bottom" warning>
    <sui-icon name="help" />
    Already signed up? <a href="#">Login here</a> instead.
  </sui-message>
</div>`,warningCode:`<sui-message warning>
  <sui-icon name="close" />
  <sui-message-header>
    You must register before you can do that!
  </sui-message-header>
  Visit our registration page, then try again
</sui-message>`,infoCode:`<sui-message info>
  <sui-message-header>Was this what you wanted?</sui-message-header>
  <sui-message-list>It's good to see you again.</sui-message-list>
  <sui-message-list>Did you know it's been a while?</sui-message-list>
</sui-message>`,positiveSuccessCode:`<sui-message positive>
  <sui-message-header>You are eligible for a reward</sui-message-header>
  <p>Go to your <b>special offers</b> page to see now.</p>
</sui-message>`,negativeErrorCode:`<sui-message negative>
  <sui-icon name="close" />
  <sui-message-header>We're sorry we can't apply that discount</sui-message-header>
  <p>That offer has expired</p>
</sui-message>`,coloredCode:`<div>
  <sui-message color="red">Red</sui-message>
  <sui-message color="orange">Orange</sui-message>
  <sui-message color="yellow">Yellow</sui-message>
  <sui-message color="olive">Olive</sui-message>
  <sui-message color="green">Green</sui-message>
  <sui-message color="teal">Teal</sui-message>
  <sui-message color="blue">Blue</sui-message>
  <sui-message color="violet">Violet</sui-message>
  <sui-message color="purple">Purple</sui-message>
  <sui-message color="pink">Pink</sui-message>
  <sui-message color="brown">Brown</sui-message>
  <sui-message color="black">Black</sui-message>
</div>`,sizeCode:`<div>
  <sui-message size="mini">This is a mini message.</sui-message>
  <sui-message size="large">This is a large message.</sui-message>
  <sui-message size="massive">This is a massive message.</sui-message>
</div>`}}}),Vv=i("Types"),Ev=i("Changes in Service"),xv=d("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),Dv=i("New Site Features"),Bv=i("You can now have cover images on blog pages"),Nv=i("Drafts will now auto-save while writing"),Pv=i(" Have you heard about our mailing list? "),jv=d("p",null,"Get the best news in your e-mail every day.",-1),Fv=i("States"),qv=d("p",null,"You can't see me",-1),Mv=d("p",null,"You can always see me",-1),Lv=i("Variations"),Iv=d("p",null,"Way to go!",-1),Jv=d("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),Hv=i("Submit"),Ov=i(" Already signed up? "),Gv=d("a",{href:"#"},"Login here",-1),Uv=i(" instead. "),Yv=i(" You must register before you can do that! "),Wv=i(" Visit our registration page, then try again "),Kv=i("Was this what you wanted?"),Qv=i("It's good to see you again."),Xv=i("Did you know it's been a while?"),Zv=i("You are eligible for a reward"),e$=d("p",null,[i("Go to your "),d("b",null,"special offers"),i(" page to see now.")],-1),t$=i("We're sorry we can't apply that discount"),i$=d("p",null,"That offer has expired",-1),s$=i("Red"),o$=i("Orange"),a$=i("Yellow"),l$=i("Olive"),n$=i("Green"),u$=i("Teal"),d$=i("Blue"),r$=i("Violet"),c$=i("Purple"),m$=i("Pink"),_$=i("Brown"),p$=i("Black"),h$=i("This is a mini message."),g$=i("This is a large message."),f$=i("This is a massive message.");function b$(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-message-header"),l=u("sui-message"),r=u("doc-example"),n=u("sui-message-item"),h=u("sui-message-list"),c=u("sui-icon"),a=u("sui-message-content"),m=u("sui-form-field"),f=u("sui-form-group"),v=u("sui-button"),p=u("sui-form"),w=u("sui-container");return z(),V("div",null,[e(b,{title:"Message",sub:"A message displays information that explains nearby content"}),e(w,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Vv]),_:1}),e(r,{title:"Message",description:"A basic message",code:s.messageCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[Ev]),_:1}),xv]),_:1})]),_:1},8,["code"]),e(r,{title:"List Message",description:"A message with a list",code:s.listMessageCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[Dv]),_:1}),e(h,null,{default:t(()=>[e(n,null,{default:t(()=>[Bv]),_:1}),e(n,null,{default:t(()=>[Nv]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Icon Message",description:"A message can contain an icon",code:s.iconMessageCode},{default:t(()=>[e(l,{icon:""},{default:t(()=>[e(c,{name:"inbox"}),e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[Pv]),_:1}),jv]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Fv]),_:1}),e(r,{title:"Hidden",description:"A message can be hidden",code:s.hiddenCode},{default:t(()=>[e(l,{hidden:""},{default:t(()=>[qv]),_:1})]),_:1},8,["code"]),e(r,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:s.visibleCode},{default:t(()=>[e(l,{visible:""},{default:t(()=>[Mv]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Lv]),_:1}),e(r,{title:"Floating",description:"A message can float above content that it is related to",code:s.floatingCode},{default:t(()=>[e(l,{floating:""},{default:t(()=>[Iv]),_:1})]),_:1},8,["code"]),e(r,{title:"Compact",description:"A message can only take up the width of its content",code:s.compactCode},{default:t(()=>[e(l,{compact:""},{default:t(()=>[Jv]),_:1})]),_:1},8,["code"]),e(r,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:s.attachedCode},{default:t(()=>[d("div",null,[e(l,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),e(p,{class:"attached fluid segment"},{default:t(()=>[e(f,{widths:"equal"},{default:t(()=>[e(m,{label:"First Name",placeholder:"First Name"}),e(m,{label:"Last Name",placeholder:"Last Name"})]),_:1}),e(m,{label:"Username",placeholder:"Username"}),e(m,{label:"Password",placeholder:"Password"}),e(v,{color:"primary"},{default:t(()=>[Hv]),_:1})]),_:1}),e(l,{attached:"bottom",warning:""},{default:t(()=>[e(c,{name:"help"}),Ov,Gv,Uv]),_:1})])]),_:1},8,["code"]),e(r,{title:"Warning",description:"A message may be formatted to display warning messages",code:s.warningCode},{default:t(()=>[e(l,{warning:""},{default:t(()=>[e(c,{name:"close"}),e(o,null,{default:t(()=>[Yv]),_:1}),Wv]),_:1})]),_:1},8,["code"]),e(r,{title:"Info",description:"A message may be formatted to display information",code:s.infoCode},{default:t(()=>[e(l,{info:""},{default:t(()=>[e(o,null,{default:t(()=>[Kv]),_:1}),e(h,null,{default:t(()=>[Qv]),_:1}),e(h,null,{default:t(()=>[Xv]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:s.positiveSuccessCode},{default:t(()=>[e(l,{positive:""},{default:t(()=>[e(o,null,{default:t(()=>[Zv]),_:1}),e$]),_:1})]),_:1},8,["code"]),e(r,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:s.negativeErrorCode},{default:t(()=>[e(l,{negative:""},{default:t(()=>[e(c,{name:"close"}),e(o,null,{default:t(()=>[t$]),_:1}),i$]),_:1})]),_:1},8,["code"]),e(r,{title:"Colored",description:"A message can be formatted to be different colors",code:s.coloredCode},{default:t(()=>[d("div",null,[e(l,{color:"red"},{default:t(()=>[s$]),_:1}),e(l,{color:"orange"},{default:t(()=>[o$]),_:1}),e(l,{color:"yellow"},{default:t(()=>[a$]),_:1}),e(l,{color:"olive"},{default:t(()=>[l$]),_:1}),e(l,{color:"green"},{default:t(()=>[n$]),_:1}),e(l,{color:"teal"},{default:t(()=>[u$]),_:1}),e(l,{color:"blue"},{default:t(()=>[d$]),_:1}),e(l,{color:"violet"},{default:t(()=>[r$]),_:1}),e(l,{color:"purple"},{default:t(()=>[c$]),_:1}),e(l,{color:"pink"},{default:t(()=>[m$]),_:1}),e(l,{color:"brown"},{default:t(()=>[_$]),_:1}),e(l,{color:"black"},{default:t(()=>[p$]),_:1})])]),_:1},8,["code"]),e(r,{title:"Size",description:"A message can have different sizes",code:s.sizeCode},{default:t(()=>[d("div",null,[e(l,{size:"mini"},{default:t(()=>[h$]),_:1}),e(l,{size:"large"},{default:t(()=>[g$]),_:1}),e(l,{size:"massive"},{default:t(()=>[f$]),_:1})])]),_:1},8,["code"])]),_:1})])}var v$=x(Rv,[["render",b$]]);const $$=E({name:"TableDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{tableCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Age</sui-table-header-cell>
      <sui-table-header-cell>Job</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>James</sui-table-cell>
      <sui-table-cell>24</sui-table-cell>
      <sui-table-cell>Engineer</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>26</sui-table-cell>
      <sui-table-cell>Engineer</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Elyse</sui-table-cell>
      <sui-table-cell>24</sui-table-cell>
      <sui-table-cell>Designer</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,definitionCode:`<sui-table definition>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell>Arguments</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>reset rating</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
      <sui-table-cell>Resets rating to default value</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>set rating</sui-table-cell>
      <sui-table-cell>rating (integer)</sui-table-cell>
      <sui-table-cell>Sets the current star rating to specified value</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,structuredCode:`<sui-table structured celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell rowspan="2">Name</sui-table-header-cell>
      <sui-table-header-cell rowspan="2">Type</sui-table-header-cell>
      <sui-table-header-cell rowspan="2">Files</sui-table-header-cell>
      <sui-table-header-cell colspan="3">Languages</sui-table-header-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-header-cell>Ruby</sui-table-header-cell>
      <sui-table-header-cell>Javascript</sui-table-header-cell>
      <sui-table-header-cell>Python</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>Alpha Team</sui-table-cell>
      <sui-table-cell>Project 1</sui-table-cell>
      <sui-table-cell textAlign="right">2</sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell rowspan="3">Beta Team</sui-table-cell>
      <sui-table-cell>Project 1</sui-table-cell>
      <sui-table-cell textAlign="right">52</sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Project 2</sui-table-cell>
      <sui-table-cell textAlign="right">12</sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Project 3</sui-table-cell>
      <sui-table-cell textAlign="right">21</sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,positiveNegativeCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell negative>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row positive>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="checkmark" />
        Approved
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell positive>
        <sui-icon name="close" />
        Requires call
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row negative>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,errorCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row error>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Cannot pull data</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell error>
        <sui-icon name="attention" />
        Requires call
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,warningCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row warning>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="attention" />
        Requires Action
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell warning>
        <sui-icon name="attention" />
        Hostile
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,activeCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row active>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Selected</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell active>Jill</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,disabledCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row disabled>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Selected</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell disabled>Jill</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,coloredCellsCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell color="orange">No Name Specified</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row color="blue">
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="microphone" />
        Recording session
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell color="pink">
        <sui-icon name="child" />
        Baby Party
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell color="green">Vacation</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,markedCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell marked="right" color="blue">No Name Specified</sui-table-cell>
      <sui-table-cell marked="left" color="red">Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell marked="left" color="green">Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="microphone" />
        Recording session
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell marked="left" color="orange">
        <sui-icon name="child" />
        Baby Party
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell marked="right" color="purple">Vacation</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,singleLineCode:`<sui-table single-line>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Registration Date</sui-table-header-cell>
      <sui-table-header-cell>E-mail address</sui-table-header-cell>
      <sui-table-header-cell>Premium Plan</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John Lilki</sui-table-cell>
      <sui-table-cell>September 14, 2013</sui-table-cell>
      <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
      <sui-table-cell>No</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie Harington</sui-table-cell>
      <sui-table-cell>January 11, 2014</sui-table-cell>
      <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill Lewis</sui-table-cell>
      <sui-table-cell>May 11, 2014</sui-table-cell>
      <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,fixedCode:`<sui-table fixed>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,stackingCode:`<sui-table stackable>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,selectableRowCode:`<sui-table selectable celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell positive>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row warning>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell negative>Denied</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,selectableCellCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell positive>Approved</sui-table-cell>
      <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
    </sui-table-row>
    <sui-table-row warning>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell negative>Denied</sui-table-cell>
      <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,verticalAlignmentCode:`<sui-table striped>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row verticalAlign="top">
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell verticalAlign="top">
        Notes
        <br />
        1<br />
        2<br />
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell verticalAlign="bottom">Approved</sui-table-cell>
      <sui-table-cell>
        Notes
        <br />
        1<br />
        2<br />
      </sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,textAlignCode:`<sui-table striped>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell textAlign="right">Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row textAlign="center">
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,stripedCode:`<sui-table striped>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Date Joined</sui-table-header-cell>
      <sui-table-header-cell>E-mail</sui-table-header-cell>
      <sui-table-header-cell>Called</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John Lilki</sui-table-cell>
      <sui-table-cell>September 14, 2013</sui-table-cell>
      <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
      <sui-table-cell>No</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie Harington</sui-table-cell>
      <sui-table-cell>January 11, 2014</sui-table-cell>
      <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill Lewis</sui-table-cell>
      <sui-table-cell>May 11, 2014</sui-table-cell>
      <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,celledCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
  <sui-table-footer>
    <sui-table-row>
      <sui-table-cell>3 People</sui-table-cell>
      <sui-table-cell>2 Approved</sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
  </sui-table-footer>
</sui-table>`,basicCode:`<div>
  <sui-table basic>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jill</sui-table-cell>
        <sui-table-cell>Denied</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  <br />
  <sui-table basic="very">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jill</sui-table-cell>
        <sui-table-cell>Denied</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</div>`,collapsingCode:`<sui-table collapsing>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Age</sui-table-header-cell>
      <sui-table-header-cell>Gender</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>

  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>27</sui-table-cell>
      <sui-table-cell>Male</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>32</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>22</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>

  <sui-table-footer>
    <sui-table-row>
      <sui-table-header-cell>3 People</sui-table-header-cell>
      <sui-table-header-cell>2 Approved</sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
    </sui-table-row>
  </sui-table-footer>
</sui-table>`,collapsingCellCode:`<sui-table>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell collapsing>
        <sui-icon name="folder" /> node_modules
      </sui-table-cell>
      <sui-table-cell>Initial commit</sui-table-cell>
      <sui-table-cell>10 hours ago</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell collapsing>
        <sui-icon name="folder" /> node_modules
      </sui-table-cell>
      <sui-table-cell>Initial commit</sui-table-cell>
      <sui-table-cell>10 hours ago</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell collapsing>
        <sui-icon name="folder" /> node_modules
      </sui-table-cell>
      <sui-table-cell>Initial commit</sui-table-cell>
      <sui-table-cell>10 hours ago</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,columnCountCode:`<sui-table :columns="5">
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Age</sui-table-header-cell>
      <sui-table-header-cell>Gender</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>

  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>27</sui-table-cell>
      <sui-table-cell>Male</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>32</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>22</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>

  <sui-table-footer>
    <sui-table-row>
      <sui-table-header-cell>3 People</sui-table-header-cell>
      <sui-table-header-cell>2 Approved</sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
    </sui-table-row>
  </sui-table-footer>
</sui-table>`,columnWidthCode:`<sui-table>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell :width="10">Name</sui-table-header-cell>
      <sui-table-header-cell :width="6">Status</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,coloredCode:`<sui-table color="red">
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Food</sui-table-header-cell>
      <sui-table-header-cell>Calories</sui-table-header-cell>
      <sui-table-header-cell>Protein</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>Apples</sui-table-cell>
      <sui-table-cell>200</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Orange</sui-table-cell>
      <sui-table-cell>310</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,invertedCode:`<sui-table inverted>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Food</sui-table-header-cell>
      <sui-table-header-cell>Calories</sui-table-header-cell>
      <sui-table-header-cell>Protein</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>Apples</sui-table-cell>
      <sui-table-cell>200</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Orange</sui-table-cell>
      <sui-table-cell>310</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,paddedCode:`<div>
  <sui-table padded>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Jamie was not interested in purchasing our product.</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  <sui-table padded="very">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Jamie was not interested in purchasing our product.</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</div>`,compactCode:`<div>
  <sui-table compact>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  <sui-table compact="very">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</div>`,sizeCode:`<sui-table size="small">
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`}}}),w$=i("Types"),C$=i("Name"),y$=i("Age"),A$=i("Job"),k$=i("James"),S$=i("24"),z$=i("Engineer"),T$=i("Jill"),R$=i("26"),V$=i("Engineer"),E$=i("Elyse"),x$=i("24"),D$=i("Designer"),B$=i("Arguments"),N$=i("Description"),P$=i("reset rating"),j$=i("None"),F$=i("Resets rating to default value"),q$=i("set rating"),M$=i("rating (integer)"),L$=i("Sets the current star rating to specified value"),I$=i("Name"),J$=i("Type"),H$=i("Files"),O$=i("Languages"),G$=i("Ruby"),U$=i("Javascript"),Y$=i("Python"),W$=i("Alpha Team"),K$=i("Project 1"),Q$=i("2"),X$=i("Beta Team"),Z$=i("Project 1"),ew=i("52"),tw=i("Project 2"),iw=i("12"),sw=i("Project 3"),ow=i("21"),aw=i("States"),lw=i("Name"),nw=i("Status"),uw=i("Notes"),dw=i("No Name Specified"),rw=i("Unknown"),cw=i("None"),mw=i("Jimmy"),_w=i(" Approved "),pw=i("None"),hw=i("Jamie"),gw=i("Unknown"),fw=i(" Requires call "),bw=i("Jill"),vw=i("Unknown"),$w=i("None"),ww=i("Name"),Cw=i("Status"),yw=i("Notes"),Aw=i("No Name Specified"),kw=i("Approved"),Sw=i("None"),zw=i("Jimmy"),Tw=i("Cannot pull data"),Rw=i("None"),Vw=i("Jamie"),Ew=i("Approved"),xw=i(" Requires call "),Dw=i("Jill"),Bw=i("Approved"),Nw=i("None"),Pw=i("Name"),jw=i("Status"),Fw=i("Notes"),qw=i("No Name Specified"),Mw=i("Unknown"),Lw=i("None"),Iw=i("Jimmy"),Jw=i(" Requires Action "),Hw=i("None"),Ow=i("Jamie"),Gw=i("Unknown"),Uw=i(" Hostile "),Yw=i("Jill"),Ww=i("Unknown"),Kw=i("None"),Qw=i("Name"),Xw=i("Status"),Zw=i("Notes"),eC=i("No Name Specified"),tC=i("Approved"),iC=i("None"),sC=i("Jimmy"),oC=i("Selected"),aC=i("None"),lC=i("Jamie"),nC=i("Approved"),uC=i("Requires call"),dC=i("Jill"),rC=i("Approved"),cC=i("None"),mC=i("Name"),_C=i("Status"),pC=i("Notes"),hC=i("No Name Specified"),gC=i("Approved"),fC=i("None"),bC=i("Jimmy"),vC=i("Selected"),$C=i("None"),wC=i("Jamie"),CC=i("Approved"),yC=i("Requires call"),AC=i("Jill"),kC=i("Approved"),SC=i("None"),zC=i("Name"),TC=i("Status"),RC=i("Notes"),VC=i("No Name Specified"),EC=i("Unknown"),xC=i("None"),DC=i("Jimmy"),BC=i(" Recording session "),NC=i("None"),PC=i("Jamie"),jC=i("Unknown"),FC=i(" Baby Party "),qC=i("Jill"),MC=i("Unknown"),LC=i("Vacation"),IC=i("Name"),JC=i("Status"),HC=i("Notes"),OC=i("No Name Specified"),GC=i("Unknown"),UC=i("None"),YC=i("Jimmy"),WC=i(" Recording session "),KC=i("None"),QC=i("Jamie"),XC=i("Unknown"),ZC=i(" Baby Party "),ey=i("Jill"),ty=i("Unknown"),iy=i("Vacation"),sy=i("Variations"),oy=i("Name"),ay=i("Registration Date"),ly=i("E-mail address"),ny=i("Premium Plan"),uy=i("John Lilki"),dy=i("September 14, 2013"),ry=i("jhlilk22@yahoo.com"),cy=i("No"),my=i("Jamie Harington"),_y=i("January 11, 2014"),py=i("jamieharingonton@yahoo.com"),hy=i("Yes"),gy=i("Jill Lewis"),fy=i("May 11, 2014"),by=i("jilsewris22@yahoo.com"),vy=i("Yes"),$y=i("Name"),wy=i("Status"),Cy=i("Description"),yy=i("John"),Ay=i("Approved"),ky=i("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like"),Sy=i("Jimmy"),zy=i("Approved"),Ty=i("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like"),Ry=i("Jamie"),Vy=i("Denied"),Ey=i("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like"),xy=i("Name"),Dy=i("Status"),By=i("Description"),Ny=i("John"),Py=i("Approved"),jy=i("None"),Fy=i("Jimmy"),qy=i("Approved"),My=i("Requires call"),Ly=i("Jamie"),Iy=i("Denied"),Jy=i("None"),Hy=i("Name"),Oy=i("Status"),Gy=i("Description"),Uy=i("John"),Yy=i("Approved"),Wy=i("None"),Ky=i("Jimmy"),Qy=i("Approved"),Xy=i("Requires call"),Zy=i("Jamie"),e2=i("Denied"),t2=i("None"),i2=i("Name"),s2=i("Status"),o2=i("Description"),a2=i("John"),l2=i("Approved"),n2=d("a",{href:"#"},"Edit",-1),u2=i("Jimmy"),d2=i("Approved"),r2=d("a",{href:"#"},"Edit",-1),c2=i("Jamie"),m2=i("Denied"),_2=d("a",{href:"#"},"Edit",-1),p2=i("Name"),h2=i("Status"),g2=i("Notes"),f2=i("John"),b2=i("Approved"),v2=i(" Notes "),$2=d("br",null,null,-1),w2=i(" 1"),C2=d("br",null,null,-1),y2=i(" 2"),A2=d("br",null,null,-1),k2=i("Jamie"),S2=i("Approved"),z2=i(" Notes "),T2=d("br",null,null,-1),R2=i(" 1"),V2=d("br",null,null,-1),E2=i(" 2"),x2=d("br",null,null,-1),D2=i("Name"),B2=i("Status"),N2=i("Notes"),P2=i("John"),j2=i("Approved"),F2=i("None"),q2=i("Jamie"),M2=i("Approved"),L2=i("Requires call"),I2=i("Jamie"),J2=i("Approved"),H2=i("None"),O2=i("Name"),G2=i("Date Joined"),U2=i("E-mail"),Y2=i("Called"),W2=i("John Lilki"),K2=i("September 14, 2013"),Q2=i("jhlilk22@yahoo.com"),X2=i("No"),Z2=i("Jamie Harington"),eA=i("January 11, 2014"),tA=i("jamieharingonton@yahoo.com"),iA=i("Yes"),sA=i("Jill Lewis"),oA=i("May 11, 2014"),aA=i("jilsewris22@yahoo.com"),lA=i("Yes"),nA=i("Name"),uA=i("Status"),dA=i("Notes"),rA=i("John"),cA=i("Approved"),mA=i("None"),_A=i("Jamie"),pA=i("Approved"),hA=i("Requires call"),gA=i("Jill"),fA=i("Denied"),bA=i("None"),vA=i("3 People"),$A=i("2 Approved"),wA=i("Name"),CA=i("Status"),yA=i("Notes"),AA=i("John"),kA=i("Approved"),SA=i("None"),zA=i("Jamie"),TA=i("Approved"),RA=i("Requires call"),VA=i("Jill"),EA=i("Denied"),xA=i("None"),DA=d("br",null,null,-1),BA=i("Name"),NA=i("Status"),PA=i("Notes"),jA=i("John"),FA=i("Approved"),qA=i("None"),MA=i("Jamie"),LA=i("Approved"),IA=i("Requires call"),JA=i("Jill"),HA=i("Denied"),OA=i("None"),GA=i("Name"),UA=i("Status"),YA=i("Age"),WA=i("Gender"),KA=i("Notes"),QA=i("John"),XA=i("Approved"),ZA=i("27"),e8=i("Male"),t8=i("None"),i8=i("Jamie"),s8=i("Approved"),o8=i("32"),a8=i("Other"),l8=i("None"),n8=i("Jill"),u8=i("Denied"),d8=i("22"),r8=i("Other"),c8=i("None"),m8=i("3 People"),_8=i("2 Approved"),p8=i(" node_modules "),h8=i("Initial commit"),g8=i("10 hours ago"),f8=i(" node_modules "),b8=i("Initial commit"),v8=i("10 hours ago"),$8=i(" node_modules "),w8=i("Initial commit"),C8=i("10 hours ago"),y8=i("Name"),A8=i("Status"),k8=i("Age"),S8=i("Gender"),z8=i("Notes"),T8=i("John"),R8=i("Approved"),V8=i("27"),E8=i("Male"),x8=i("None"),D8=i("Jamie"),B8=i("Approved"),N8=i("32"),P8=i("Other"),j8=i("None"),F8=i("Jill"),q8=i("Denied"),M8=i("22"),L8=i("Other"),I8=i("None"),J8=i("3 People"),H8=i("2 Approved"),O8=i("Name"),G8=i("Status"),U8=i("John"),Y8=i("Approved"),W8=i("Jamie"),K8=i("Approved"),Q8=i("Food"),X8=i("Calories"),Z8=i("Protein"),e3=i("Apples"),t3=i("200"),i3=i("0g"),s3=i("Orange"),o3=i("310"),a3=i("0g"),l3=i("Food"),n3=i("Calories"),u3=i("Protein"),d3=i("Apples"),r3=i("200"),c3=i("0g"),m3=i("Orange"),_3=i("310"),p3=i("0g"),h3=i("Name"),g3=i("Status"),f3=i("Notes"),b3=i("John"),v3=i("Approved"),$3=i("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again."),w3=i("Jamie"),C3=i("Approved"),y3=i("Jamie was not interested in purchasing our product."),A3=i("Name"),k3=i("Status"),S3=i("Notes"),z3=i("John"),T3=i("Approved"),R3=i("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again."),V3=i("Jamie"),E3=i("Approved"),x3=i("Jamie was not interested in purchasing our product."),D3=i("Name"),B3=i("Status"),N3=i("Notes"),P3=i("John"),j3=i("Approved"),F3=i("None"),q3=i("Jamie"),M3=i("Approved"),L3=i("Requires call"),I3=i("Name"),J3=i("Status"),H3=i("Notes"),O3=i("John"),G3=i("Approved"),U3=i("None"),Y3=i("Jamie"),W3=i("Approved"),K3=i("Requires call"),Q3=i("Name"),X3=i("Status"),Z3=i("Notes"),ek=i("John"),tk=i("Approved"),ik=i("None"),sk=i("Jamie"),ok=i("Approved"),ak=i("Requires call"),lk=i("Jill"),nk=i("Denied"),uk=i("None");function dk(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-table-header-cell"),l=u("sui-table-row"),r=u("sui-table-header"),n=u("sui-table-cell"),h=u("sui-table-body"),c=u("sui-table"),a=u("doc-example"),m=u("sui-icon"),f=u("sui-table-footer"),v=u("sui-container");return z(),V("div",null,[e(b,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),e(v,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[w$]),_:1}),e(a,{title:"Table",description:"A standard table",code:s.tableCode},{default:t(()=>[e(c,{celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[C$]),_:1}),e(o,null,{default:t(()=>[y$]),_:1}),e(o,null,{default:t(()=>[A$]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[k$]),_:1}),e(n,null,{default:t(()=>[S$]),_:1}),e(n,null,{default:t(()=>[z$]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[T$]),_:1}),e(n,null,{default:t(()=>[R$]),_:1}),e(n,null,{default:t(()=>[V$]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[E$]),_:1}),e(n,null,{default:t(()=>[x$]),_:1}),e(n,null,{default:t(()=>[D$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:s.definitionCode},{default:t(()=>[e(c,{definition:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o),e(o,null,{default:t(()=>[B$]),_:1}),e(o,null,{default:t(()=>[N$]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[P$]),_:1}),e(n,null,{default:t(()=>[j$]),_:1}),e(n,null,{default:t(()=>[F$]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[q$]),_:1}),e(n,null,{default:t(()=>[M$]),_:1}),e(n,null,{default:t(()=>[L$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Structured",description:"A table can be formatted to display complex structured data",code:s.structuredCode},{default:t(()=>[e(c,{structured:"",celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,{rowspan:"2"},{default:t(()=>[I$]),_:1}),e(o,{rowspan:"2"},{default:t(()=>[J$]),_:1}),e(o,{rowspan:"2"},{default:t(()=>[H$]),_:1}),e(o,{colspan:"3"},{default:t(()=>[O$]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[G$]),_:1}),e(o,null,{default:t(()=>[U$]),_:1}),e(o,null,{default:t(()=>[Y$]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[W$]),_:1}),e(n,null,{default:t(()=>[K$]),_:1}),e(n,{textAlign:"right"},{default:t(()=>[Q$]),_:1}),e(n,{textAlign:"center"},{default:t(()=>[e(m,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(n),e(n)]),_:1}),e(l,null,{default:t(()=>[e(n,{rowspan:"3"},{default:t(()=>[X$]),_:1}),e(n,null,{default:t(()=>[Z$]),_:1}),e(n,{textAlign:"right"},{default:t(()=>[ew]),_:1}),e(n,{textAlign:"center"},{default:t(()=>[e(m,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(n),e(n)]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[tw]),_:1}),e(n,{textAlign:"right"},{default:t(()=>[iw]),_:1}),e(n),e(n,{textAlign:"center"},{default:t(()=>[e(m,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(n)]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[sw]),_:1}),e(n,{textAlign:"right"},{default:t(()=>[ow]),_:1}),e(n,{textAlign:"center"},{default:t(()=>[e(m,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(n),e(n)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[aw]),_:1}),e(a,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:s.positiveNegativeCode},{default:t(()=>[e(c,{celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[lw]),_:1}),e(o,null,{default:t(()=>[nw]),_:1}),e(o,null,{default:t(()=>[uw]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[dw]),_:1}),e(n,null,{default:t(()=>[rw]),_:1}),e(n,{negative:""},{default:t(()=>[cw]),_:1})]),_:1}),e(l,{positive:""},{default:t(()=>[e(n,null,{default:t(()=>[mw]),_:1}),e(n,null,{default:t(()=>[e(m,{name:"checkmark"}),_w]),_:1}),e(n,null,{default:t(()=>[pw]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[hw]),_:1}),e(n,null,{default:t(()=>[gw]),_:1}),e(n,{positive:""},{default:t(()=>[e(m,{name:"close"}),fw]),_:1})]),_:1}),e(l,{negative:""},{default:t(()=>[e(n,null,{default:t(()=>[bw]),_:1}),e(n,null,{default:t(()=>[vw]),_:1}),e(n,null,{default:t(()=>[$w]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:s.errorCode},{default:t(()=>[e(c,{celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[ww]),_:1}),e(o,null,{default:t(()=>[Cw]),_:1}),e(o,null,{default:t(()=>[yw]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Aw]),_:1}),e(n,null,{default:t(()=>[kw]),_:1}),e(n,null,{default:t(()=>[Sw]),_:1})]),_:1}),e(l,{error:""},{default:t(()=>[e(n,null,{default:t(()=>[zw]),_:1}),e(n,null,{default:t(()=>[Tw]),_:1}),e(n,null,{default:t(()=>[Rw]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Vw]),_:1}),e(n,null,{default:t(()=>[Ew]),_:1}),e(n,{error:""},{default:t(()=>[e(m,{name:"attention"}),xw]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Dw]),_:1}),e(n,null,{default:t(()=>[Bw]),_:1}),e(n,null,{default:t(()=>[Nw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Warning",description:"A cell or row may warn a user",code:s.warningCode},{default:t(()=>[e(c,{celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[Pw]),_:1}),e(o,null,{default:t(()=>[jw]),_:1}),e(o,null,{default:t(()=>[Fw]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[qw]),_:1}),e(n,null,{default:t(()=>[Mw]),_:1}),e(n,null,{default:t(()=>[Lw]),_:1})]),_:1}),e(l,{warning:""},{default:t(()=>[e(n,null,{default:t(()=>[Iw]),_:1}),e(n,null,{default:t(()=>[e(m,{name:"attention"}),Jw]),_:1}),e(n,null,{default:t(()=>[Hw]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Ow]),_:1}),e(n,null,{default:t(()=>[Gw]),_:1}),e(n,{warning:""},{default:t(()=>[e(m,{name:"attention"}),Uw]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Yw]),_:1}),e(n,null,{default:t(()=>[Ww]),_:1}),e(n,null,{default:t(()=>[Kw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Active",description:"A cell or row can be active or selected by a user",code:s.activeCode},{default:t(()=>[e(c,{celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[Qw]),_:1}),e(o,null,{default:t(()=>[Xw]),_:1}),e(o,null,{default:t(()=>[Zw]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[eC]),_:1}),e(n,null,{default:t(()=>[tC]),_:1}),e(n,null,{default:t(()=>[iC]),_:1})]),_:1}),e(l,{active:""},{default:t(()=>[e(n,null,{default:t(()=>[sC]),_:1}),e(n,null,{default:t(()=>[oC]),_:1}),e(n,null,{default:t(()=>[aC]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[lC]),_:1}),e(n,null,{default:t(()=>[nC]),_:1}),e(n,null,{default:t(()=>[uC]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,{active:""},{default:t(()=>[dC]),_:1}),e(n,null,{default:t(()=>[rC]),_:1}),e(n,null,{default:t(()=>[cC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Disabled",description:"A cell can be disabled",code:s.disabledCode},{default:t(()=>[e(c,{celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[mC]),_:1}),e(o,null,{default:t(()=>[_C]),_:1}),e(o,null,{default:t(()=>[pC]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,{disabled:""},{default:t(()=>[e(n,null,{default:t(()=>[hC]),_:1}),e(n,null,{default:t(()=>[gC]),_:1}),e(n,null,{default:t(()=>[fC]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[bC]),_:1}),e(n,null,{default:t(()=>[vC]),_:1}),e(n,null,{default:t(()=>[$C]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[wC]),_:1}),e(n,null,{default:t(()=>[CC]),_:1}),e(n,null,{default:t(()=>[yC]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,{disabled:""},{default:t(()=>[AC]),_:1}),e(n,null,{default:t(()=>[kC]),_:1}),e(n,null,{default:t(()=>[SC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:s.coloredCellsCode},{default:t(()=>[e(c,{celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[zC]),_:1}),e(o,null,{default:t(()=>[TC]),_:1}),e(o,null,{default:t(()=>[RC]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,{color:"orange"},{default:t(()=>[VC]),_:1}),e(n,null,{default:t(()=>[EC]),_:1}),e(n,null,{default:t(()=>[xC]),_:1})]),_:1}),e(l,{color:"blue"},{default:t(()=>[e(n,null,{default:t(()=>[DC]),_:1}),e(n,null,{default:t(()=>[e(m,{name:"microphone"}),BC]),_:1}),e(n,null,{default:t(()=>[NC]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[PC]),_:1}),e(n,null,{default:t(()=>[jC]),_:1}),e(n,{color:"pink"},{default:t(()=>[e(m,{name:"child"}),FC]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[qC]),_:1}),e(n,null,{default:t(()=>[MC]),_:1}),e(n,{color:"green"},{default:t(()=>[LC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:s.markedCode},{default:t(()=>[e(c,{celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[IC]),_:1}),e(o,null,{default:t(()=>[JC]),_:1}),e(o,null,{default:t(()=>[HC]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,{marked:"right",color:"blue"},{default:t(()=>[OC]),_:1}),e(n,{marked:"left",color:"red"},{default:t(()=>[GC]),_:1}),e(n,null,{default:t(()=>[UC]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,{marked:"left",color:"green"},{default:t(()=>[YC]),_:1}),e(n,null,{default:t(()=>[e(m,{name:"microphone"}),WC]),_:1}),e(n,null,{default:t(()=>[KC]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[QC]),_:1}),e(n,null,{default:t(()=>[XC]),_:1}),e(n,{marked:"left",color:"orange"},{default:t(()=>[e(m,{name:"child"}),ZC]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[ey]),_:1}),e(n,null,{default:t(()=>[ty]),_:1}),e(n,{marked:"right",color:"purple"},{default:t(()=>[iy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[sy]),_:1}),e(a,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:s.singleLineCode},{default:t(()=>[e(c,{"single-line":""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[oy]),_:1}),e(o,null,{default:t(()=>[ay]),_:1}),e(o,null,{default:t(()=>[ly]),_:1}),e(o,null,{default:t(()=>[ny]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[uy]),_:1}),e(n,null,{default:t(()=>[dy]),_:1}),e(n,null,{default:t(()=>[ry]),_:1}),e(n,null,{default:t(()=>[cy]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[my]),_:1}),e(n,null,{default:t(()=>[_y]),_:1}),e(n,null,{default:t(()=>[py]),_:1}),e(n,null,{default:t(()=>[hy]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[gy]),_:1}),e(n,null,{default:t(()=>[fy]),_:1}),e(n,null,{default:t(()=>[by]),_:1}),e(n,null,{default:t(()=>[vy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:s.fixedCode},{default:t(()=>[e(c,{fixed:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[$y]),_:1}),e(o,null,{default:t(()=>[wy]),_:1}),e(o,null,{default:t(()=>[Cy]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[yy]),_:1}),e(n,null,{default:t(()=>[Ay]),_:1}),e(n,null,{default:t(()=>[ky]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Sy]),_:1}),e(n,null,{default:t(()=>[zy]),_:1}),e(n,null,{default:t(()=>[Ty]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Ry]),_:1}),e(n,null,{default:t(()=>[Vy]),_:1}),e(n,null,{default:t(()=>[Ey]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:s.stackingCode},{default:t(()=>[e(c,{stackable:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[xy]),_:1}),e(o,null,{default:t(()=>[Dy]),_:1}),e(o,null,{default:t(()=>[By]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Ny]),_:1}),e(n,null,{default:t(()=>[Py]),_:1}),e(n,{textAlign:"right"},{default:t(()=>[jy]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Fy]),_:1}),e(n,null,{default:t(()=>[qy]),_:1}),e(n,{textAlign:"right"},{default:t(()=>[My]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Ly]),_:1}),e(n,null,{default:t(()=>[Iy]),_:1}),e(n,{textAlign:"right"},{default:t(()=>[Jy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:s.selectableRowCode},{default:t(()=>[e(c,{selectable:"",celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[Hy]),_:1}),e(o,null,{default:t(()=>[Oy]),_:1}),e(o,null,{default:t(()=>[Gy]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Uy]),_:1}),e(n,{positive:""},{default:t(()=>[Yy]),_:1}),e(n,null,{default:t(()=>[Wy]),_:1})]),_:1}),e(l,{warning:""},{default:t(()=>[e(n,null,{default:t(()=>[Ky]),_:1}),e(n,null,{default:t(()=>[Qy]),_:1}),e(n,null,{default:t(()=>[Xy]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Zy]),_:1}),e(n,{negative:""},{default:t(()=>[e2]),_:1}),e(n,null,{default:t(()=>[t2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Selectable Cell",description:"A table cell can be selectable",code:s.selectableCellCode},{default:t(()=>[e(c,{celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[i2]),_:1}),e(o,null,{default:t(()=>[s2]),_:1}),e(o,null,{default:t(()=>[o2]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[a2]),_:1}),e(n,{positive:""},{default:t(()=>[l2]),_:1}),e(n,{selectable:""},{default:t(()=>[n2]),_:1})]),_:1}),e(l,{warning:""},{default:t(()=>[e(n,null,{default:t(()=>[u2]),_:1}),e(n,null,{default:t(()=>[d2]),_:1}),e(n,{selectable:""},{default:t(()=>[r2]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[c2]),_:1}),e(n,{negative:""},{default:t(()=>[m2]),_:1}),e(n,{selectable:""},{default:t(()=>[_2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:s.verticalAlignmentCode},{default:t(()=>[e(c,{striped:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[p2]),_:1}),e(o,null,{default:t(()=>[h2]),_:1}),e(o,null,{default:t(()=>[g2]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,{verticalAlign:"top"},{default:t(()=>[e(n,null,{default:t(()=>[f2]),_:1}),e(n,null,{default:t(()=>[b2]),_:1}),e(n,{verticalAlign:"top"},{default:t(()=>[v2,$2,w2,C2,y2,A2]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[k2]),_:1}),e(n,{verticalAlign:"bottom"},{default:t(()=>[S2]),_:1}),e(n,null,{default:t(()=>[z2,T2,R2,V2,E2,x2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:s.textAlignCode},{default:t(()=>[e(c,{striped:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[D2]),_:1}),e(o,null,{default:t(()=>[B2]),_:1}),e(o,{textAlign:"right"},{default:t(()=>[N2]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,{textAlign:"center"},{default:t(()=>[e(n,null,{default:t(()=>[P2]),_:1}),e(n,null,{default:t(()=>[j2]),_:1}),e(n,{textAlign:"right"},{default:t(()=>[F2]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[q2]),_:1}),e(n,null,{default:t(()=>[M2]),_:1}),e(n,null,{default:t(()=>[L2]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[I2]),_:1}),e(n,null,{default:t(()=>[J2]),_:1}),e(n,{textAlign:"right"},{default:t(()=>[H2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:s.stripedCode},{default:t(()=>[e(c,{striped:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[O2]),_:1}),e(o,null,{default:t(()=>[G2]),_:1}),e(o,null,{default:t(()=>[U2]),_:1}),e(o,null,{default:t(()=>[Y2]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[W2]),_:1}),e(n,null,{default:t(()=>[K2]),_:1}),e(n,null,{default:t(()=>[Q2]),_:1}),e(n,null,{default:t(()=>[X2]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Z2]),_:1}),e(n,null,{default:t(()=>[eA]),_:1}),e(n,null,{default:t(()=>[tA]),_:1}),e(n,null,{default:t(()=>[iA]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[sA]),_:1}),e(n,null,{default:t(()=>[oA]),_:1}),e(n,null,{default:t(()=>[aA]),_:1}),e(n,null,{default:t(()=>[lA]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Celled",description:"A table may be divided each row into separate cells",code:s.celledCode},{default:t(()=>[e(c,{celled:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[nA]),_:1}),e(o,null,{default:t(()=>[uA]),_:1}),e(o,null,{default:t(()=>[dA]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[rA]),_:1}),e(n,null,{default:t(()=>[cA]),_:1}),e(n,null,{default:t(()=>[mA]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[_A]),_:1}),e(n,null,{default:t(()=>[pA]),_:1}),e(n,null,{default:t(()=>[hA]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[gA]),_:1}),e(n,null,{default:t(()=>[fA]),_:1}),e(n,null,{default:t(()=>[bA]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[vA]),_:1}),e(n,null,{default:t(()=>[$A]),_:1}),e(n)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:s.basicCode},{default:t(()=>[d("div",null,[e(c,{basic:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[wA]),_:1}),e(o,null,{default:t(()=>[CA]),_:1}),e(o,null,{default:t(()=>[yA]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[AA]),_:1}),e(n,null,{default:t(()=>[kA]),_:1}),e(n,null,{default:t(()=>[SA]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[zA]),_:1}),e(n,null,{default:t(()=>[TA]),_:1}),e(n,null,{default:t(()=>[RA]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[VA]),_:1}),e(n,null,{default:t(()=>[EA]),_:1}),e(n,null,{default:t(()=>[xA]),_:1})]),_:1})]),_:1})]),_:1}),DA,e(c,{basic:"very"},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[BA]),_:1}),e(o,null,{default:t(()=>[NA]),_:1}),e(o,null,{default:t(()=>[PA]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[jA]),_:1}),e(n,null,{default:t(()=>[FA]),_:1}),e(n,null,{default:t(()=>[qA]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[MA]),_:1}),e(n,null,{default:t(()=>[LA]),_:1}),e(n,null,{default:t(()=>[IA]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[JA]),_:1}),e(n,null,{default:t(()=>[HA]),_:1}),e(n,null,{default:t(()=>[OA]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(a,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:s.collapsingCode},{default:t(()=>[e(c,{collapsing:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[GA]),_:1}),e(o,null,{default:t(()=>[UA]),_:1}),e(o,null,{default:t(()=>[YA]),_:1}),e(o,null,{default:t(()=>[WA]),_:1}),e(o,null,{default:t(()=>[KA]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[QA]),_:1}),e(n,null,{default:t(()=>[XA]),_:1}),e(n,null,{default:t(()=>[ZA]),_:1}),e(n,null,{default:t(()=>[e8]),_:1}),e(n,null,{default:t(()=>[t8]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[i8]),_:1}),e(n,null,{default:t(()=>[s8]),_:1}),e(n,null,{default:t(()=>[o8]),_:1}),e(n,null,{default:t(()=>[a8]),_:1}),e(n,null,{default:t(()=>[l8]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[n8]),_:1}),e(n,null,{default:t(()=>[u8]),_:1}),e(n,null,{default:t(()=>[d8]),_:1}),e(n,null,{default:t(()=>[r8]),_:1}),e(n,null,{default:t(()=>[c8]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[m8]),_:1}),e(o,null,{default:t(()=>[_8]),_:1}),e(o),e(o),e(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:s.collapsingCellCode},{default:t(()=>[e(c,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,{collapsing:""},{default:t(()=>[e(m,{name:"folder"}),p8]),_:1}),e(n,null,{default:t(()=>[h8]),_:1}),e(n,null,{default:t(()=>[g8]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,{collapsing:""},{default:t(()=>[e(m,{name:"folder"}),f8]),_:1}),e(n,null,{default:t(()=>[b8]),_:1}),e(n,null,{default:t(()=>[v8]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,{collapsing:""},{default:t(()=>[e(m,{name:"folder"}),$8]),_:1}),e(n,null,{default:t(()=>[w8]),_:1}),e(n,null,{default:t(()=>[C8]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:s.columnCountCode},{default:t(()=>[e(c,{columns:5},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[y8]),_:1}),e(o,null,{default:t(()=>[A8]),_:1}),e(o,null,{default:t(()=>[k8]),_:1}),e(o,null,{default:t(()=>[S8]),_:1}),e(o,null,{default:t(()=>[z8]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[T8]),_:1}),e(n,null,{default:t(()=>[R8]),_:1}),e(n,null,{default:t(()=>[V8]),_:1}),e(n,null,{default:t(()=>[E8]),_:1}),e(n,null,{default:t(()=>[x8]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[D8]),_:1}),e(n,null,{default:t(()=>[B8]),_:1}),e(n,null,{default:t(()=>[N8]),_:1}),e(n,null,{default:t(()=>[P8]),_:1}),e(n,null,{default:t(()=>[j8]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[F8]),_:1}),e(n,null,{default:t(()=>[q8]),_:1}),e(n,null,{default:t(()=>[M8]),_:1}),e(n,null,{default:t(()=>[L8]),_:1}),e(n,null,{default:t(()=>[I8]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[J8]),_:1}),e(o,null,{default:t(()=>[H8]),_:1}),e(o),e(o),e(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Column Width",description:"Column Width",code:s.columnWidthCode},{default:t(()=>[e(c,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,{width:10},{default:t(()=>[O8]),_:1}),e(o,{width:6},{default:t(()=>[G8]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[U8]),_:1}),e(n,null,{default:t(()=>[Y8]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[W8]),_:1}),e(n,null,{default:t(()=>[K8]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:s.coloredCode},{default:t(()=>[e(c,{color:"red"},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[Q8]),_:1}),e(o,null,{default:t(()=>[X8]),_:1}),e(o,null,{default:t(()=>[Z8]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[e3]),_:1}),e(n,null,{default:t(()=>[t3]),_:1}),e(n,null,{default:t(()=>[i3]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s3]),_:1}),e(n,null,{default:t(()=>[o3]),_:1}),e(n,null,{default:t(()=>[a3]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Inverted",description:"A table's colors can be inverted",code:s.invertedCode},{default:t(()=>[e(c,{inverted:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[l3]),_:1}),e(o,null,{default:t(()=>[n3]),_:1}),e(o,null,{default:t(()=>[u3]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[d3]),_:1}),e(n,null,{default:t(()=>[r3]),_:1}),e(n,null,{default:t(()=>[c3]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[m3]),_:1}),e(n,null,{default:t(()=>[_3]),_:1}),e(n,null,{default:t(()=>[p3]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(a,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:s.paddedCode},{default:t(()=>[d("div",null,[e(c,{padded:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[h3]),_:1}),e(o,null,{default:t(()=>[g3]),_:1}),e(o,null,{default:t(()=>[f3]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[b3]),_:1}),e(n,null,{default:t(()=>[v3]),_:1}),e(n,null,{default:t(()=>[$3]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[w3]),_:1}),e(n,null,{default:t(()=>[C3]),_:1}),e(n,null,{default:t(()=>[y3]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{padded:"very"},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[A3]),_:1}),e(o,null,{default:t(()=>[k3]),_:1}),e(o,null,{default:t(()=>[S3]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[z3]),_:1}),e(n,null,{default:t(()=>[T3]),_:1}),e(n,null,{default:t(()=>[R3]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[V3]),_:1}),e(n,null,{default:t(()=>[E3]),_:1}),e(n,null,{default:t(()=>[x3]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(a,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:s.compactCode},{default:t(()=>[d("div",null,[e(c,{compact:""},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[D3]),_:1}),e(o,null,{default:t(()=>[B3]),_:1}),e(o,null,{default:t(()=>[N3]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[P3]),_:1}),e(n,null,{default:t(()=>[j3]),_:1}),e(n,null,{default:t(()=>[F3]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[q3]),_:1}),e(n,null,{default:t(()=>[M3]),_:1}),e(n,null,{default:t(()=>[L3]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{compact:"very"},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[I3]),_:1}),e(o,null,{default:t(()=>[J3]),_:1}),e(o,null,{default:t(()=>[H3]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[O3]),_:1}),e(n,null,{default:t(()=>[G3]),_:1}),e(n,null,{default:t(()=>[U3]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[Y3]),_:1}),e(n,null,{default:t(()=>[W3]),_:1}),e(n,null,{default:t(()=>[K3]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(a,{title:"Size",description:"A table can also be small or large",code:s.sizeCode},{default:t(()=>[e(c,{size:"small"},{default:t(()=>[e(r,null,{default:t(()=>[e(l,null,{default:t(()=>[e(o,null,{default:t(()=>[Q3]),_:1}),e(o,null,{default:t(()=>[X3]),_:1}),e(o,null,{default:t(()=>[Z3]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[ek]),_:1}),e(n,null,{default:t(()=>[tk]),_:1}),e(n,null,{default:t(()=>[ik]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[sk]),_:1}),e(n,null,{default:t(()=>[ok]),_:1}),e(n,null,{default:t(()=>[ak]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[lk]),_:1}),e(n,null,{default:t(()=>[nk]),_:1}),e(n,null,{default:t(()=>[uk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var rk=x($$,[["render",dk]]);const ck=E({name:"AdvertisementDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
  <img src="/images/wireframe/image.png" />
</sui-advertisement>`,commonUnitsCode:`<div>
  <sui-advertisement unit="medium rectangle" test="Medium Rectangle" />
  <sui-advertisement unit="banner" test="Banner" />
  <sui-advertisement unit="leaderboard" test="Leaderboard" />
  <sui-advertisement unit="large rectangle" test="Large Rectangle" />
  <sui-advertisement unit="half page" test="Half Page" />
</div>`,mobileCode:`<div>
  <sui-advertisement unit="mobile banner" test="Mobile Banner" />
  <sui-advertisement unit="mobile leaderboard" test="Mobile Leaderboard" />
</div>`,rectangleCode:'<sui-advertisement unit="medium rectangle" test="Medium Rectangle" />',buttonCode:`<div>
  <sui-advertisement unit="button" test="Button"  />
  <sui-advertisement unit="square button" test="Square Button"  />
  <sui-advertisement unit="small button" test="Small Button"  />
</div>`,skyscraperCode:`<div>
  <sui-advertisement unit="skyscraper" test="Skyscraper"  />
  <br />
  <sui-advertisement unit="wide skyscraper" test="Wide Skyscraper"  />
</div>`,bannerCode:`<div>
  <sui-advertisement unit="banner" test="Banner" />
  <sui-advertisement unit="vertical banner" test="Vertical Banner" />
  <sui-advertisement unit="top banner" test="Top Banner" />
  <sui-advertisement unit="half banner" test="Half Banner" />
</div>`,leaderboardCode:`<div>
  <sui-advertisement unit="leaderboard" test="Leaderboard" />
  <sui-advertisement unit="large leaderboard" test="Large Leaderboard" />
  <sui-advertisement unit="billboard" test="Billboard" />
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),mk=i("Types"),_k=d("img",{src:k},null,-1),pk=d("br",null,null,-1),hk=i("Variations");function gk(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-advertisement"),l=u("doc-example"),r=u("sui-container");return z(),V("div",null,[e(b,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),e(r,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[mk]),_:1}),e(l,{title:"Ad",description:"A standard ad",code:s.adCode},{default:t(()=>[e(o,{unit:"medium rectangle"},{default:t(()=>[_k]),_:1})]),_:1},8,["code"]),e(l,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:s.commonUnitsCode},{default:t(()=>[d("div",null,[e(o,{unit:"medium rectangle",test:"Medium Rectangle"}),e(o,{unit:"banner",test:"Banner"}),e(o,{unit:"leaderboard",test:"Leaderboard"}),e(o,{unit:"large rectangle",test:"Large Rectangle"}),e(o,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),e(l,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:s.mobileCode},{default:t(()=>[d("div",null,[e(o,{unit:"mobile banner",test:"Mobile Banner"}),e(o,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),e(l,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:s.rectangleCode},{default:t(()=>[e(o,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),e(l,{title:"Button",description:"An ad can use button ad unit size",code:s.buttonCode},{default:t(()=>[d("div",null,[e(o,{unit:"button",test:"Button"}),e(o,{unit:"square button",test:"Square Button"}),e(o,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),e(l,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:s.skyscraperCode},{default:t(()=>[d("div",null,[e(o,{unit:"skyscraper",test:"Skyscraper"}),pk,e(o,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),e(l,{title:"Banner",description:"An ad can use banner ad unit size",code:s.bannerCode},{default:t(()=>[d("div",null,[e(o,{unit:"banner",test:"Banner"}),e(o,{unit:"vertical banner",test:"Vertical Banner"}),e(o,{unit:"top banner",test:"Top Banner"}),e(o,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),e(l,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:s.leaderboardCode},{default:t(()=>[d("div",null,[e(o,{unit:"leaderboard",test:"Leaderboard"}),e(o,{unit:"large leaderboard",test:"Large Leaderboard"}),e(o,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),e(l,{title:"Panorama",description:"An ad can use panorama ad unit size",code:s.panoramaCode},{default:t(()=>[e(o,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),e(l,{title:"Netboard",description:"An ad can use netboard ad unit size",code:s.netboardCode},{default:t(()=>[e(o,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[hk]),_:1}),e(l,{title:"Centered",description:"An advertisement can appear centered",code:s.centeredCode},{default:t(()=>[e(o,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),e(l,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:s.testCode},{default:t(()=>[e(o,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}var fk=x(ck,[["render",gk]]),Ee="/vue-fomantic-ui/images/avatar/large/kristy.png",bk="/vue-fomantic-ui/images/avatar/large/daniel.jpg",fe="/vue-fomantic-ui/images/avatar/large/helen.jpg",be="/vue-fomantic-ui/images/avatar/large/elliot.jpg",ve="/vue-fomantic-ui/images/avatar/large/elyse.png",vk="/vue-fomantic-ui/images/avatar/large/matthew.png",$k="/vue-fomantic-ui/images/avatar/large/molly.png",xe="/vue-fomantic-ui/images/avatar/large/jenny.jpg",De="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Be="/vue-fomantic-ui/images/avatar/large/steve.jpg";const wk=E({name:"CardDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{cardCode:`<sui-card>
  <sui-image src="/images/avatar/large/kristy.png" wrapped />
  <sui-card-content>
    <sui-card-header>Kristy</sui-card-header>
    <sui-card-meta>
      <span class="date">Joined in 2013</span>
    </sui-card-meta>
    <sui-card-description>
      Kristy is an art director living in New York.
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <a>
      <sui-icon name="user" />
      22 Friends
    </a>
  </sui-card-content>
</sui-card>`,cardsCode:`<sui-card-group>
  <sui-card>
    <sui-card-content>
      <sui-image src="/images/avatar/small/elliot.jpg" floated="right" size="mini" />
      <sui-card-header>Elliot Fu</sui-card-header>
      <sui-card-meta>Friends of Veronika</sui-card-meta>
      <sui-card-description>Elliot requested permission to view your contact details</sui-card-description>
    </sui-card-content>
    <sui-card-content extra>
      <sui-button-group :widths="2">
        <sui-button basic color="green">Approve</sui-button>
        <sui-button basic color="red">Decline</sui-button>
      </sui-button-group>
    </sui-card-content>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-image src="/images/avatar/small/jenny.jpg" floated="right" size="mini" />
      <sui-card-header>Jenny Hess</sui-card-header>
      <sui-card-meta>New Member</sui-card-meta>
      <sui-card-description>Jenny wants to add you to the group best friends</sui-card-description>
    </sui-card-content>
    <sui-card-content extra>
      <sui-button-group :widths="2">
        <sui-button basic color="green">Approve</sui-button>
        <sui-button basic color="red">Decline</sui-button>
      </sui-button-group>
    </sui-card-content>
  </sui-card>
</sui-card-group>`,contentBlockCode:`<sui-card>
  <sui-card-content>
    <sui-card-header>Project Timeline</sui-card-header>
  </sui-card-content>
  <sui-card-content>
    <sui-header sub>Activity</sui-header>
    <sui-feed size="small">
      <sui-feed-event>
        <sui-feed-content>
          <sui-feed-summary>
            <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
          </sui-feed-summary>
        </sui-feed-content>
      </sui-feed-event>
      <sui-feed-event>
        <sui-feed-content>
          <sui-feed-summary>
            <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
          </sui-feed-summary>
        </sui-feed-content>
      </sui-feed-event>
      <sui-feed-event>
        <sui-feed-content>
          <sui-feed-summary>
            <a>Helen Troy</a> added two pictures
          </sui-feed-summary>
        </sui-feed-content>
      </sui-feed-event>
    </sui-feed>
  </sui-card-content>
  <sui-card-content extra>
    <sui-button as="button">Join Project</sui-button>
  </sui-card-content>
</sui-card>`,imageCode:`<sui-card>
  <sui-image src="/images/avatar/large/kristy.png" wrapped />
  <sui-card-content>
    <sui-card-header>Kristy</sui-card-header>
    <sui-card-meta>
      <span class="date">Joined in 2013</span>
    </sui-card-meta>
    <sui-card-description>
      Kristy is an art director living in New York.
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <a>
      <sui-icon name="user" />
      22 Friends
    </a>
  </sui-card-content>
</sui-card>`,headerCode:`<sui-card-group>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Elliot Fu</sui-card-header>
      <sui-card-meta>Friend</sui-card-meta>
      <sui-card-description>
        Elliot Fu is a film-maker from New York.
      </sui-card-description>
    </sui-card-content>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Veronika Ossi</sui-card-header>
      <sui-card-meta>Friend</sui-card-meta>
      <sui-card-description>
        Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
      </sui-card-description>
    </sui-card-content>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Jenny Hess</sui-card-header>
      <sui-card-meta>Friend</sui-card-meta>
      <sui-card-description>
        Jenny is a student studying Media Management at the New School
      </sui-card-description>
    </sui-card-content>
  </sui-card>
</sui-card-group>`,metadataCode:`<sui-card>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span>2 days ago</span>
      <a>Animals</a>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
</sui-card>`,buttonsCode:`<sui-card-group>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Elliot Fu</sui-card-header>
      <sui-card-description>
        Elliot Fu is a film-maker from New York.
      </sui-card-description>
    </sui-card-content>
    <sui-button attached="bottom">
      <sui-icon name="add" />
      Add Friend
    </sui-button>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Veronika Ossi</sui-card-header>
      <sui-card-description>
        Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
      </sui-card-description>
    </sui-card-content>
    <sui-button attached="bottom">
      <sui-icon name="add" />
      Add Friend
    </sui-button>
  </sui-card>
</sui-card-group>`,descriptionCode:`<sui-card>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>2 days ago</sui-card-meta>
    <sui-card-description>
      <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
      <p>Many people also have their own barometers for what makes a cute dog.</p>
    </sui-card-description>
  </sui-card-content>
</sui-card>`,extraContentCode:`<sui-card>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>2 days ago</sui-card-meta>
    <sui-card-description>
      <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
      <p>Many people also have their own barometers for what makes a cute dog.</p>
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <sui-icon name="check" />
    121 Votes
  </sui-card-content>
</sui-card>`,fluidCardCode:`<sui-grid :columns="3">
  <sui-grid-column>
    <sui-card fluid>
      <sui-image src="/images/avatar/large/daniel.jpg" />
      <sui-card-content>
        <sui-card-header>Daniel Louise</sui-card-header>
      </sui-card-content>
    </sui-card>
  </sui-grid-column>
  <sui-grid-column>
    <sui-card fluid>
      <sui-image src="/images/avatar/large/helen.jpg" />
      <sui-card-content>
        <sui-card-header>Helen Troy</sui-card-header>
      </sui-card-content>
    </sui-card>
  </sui-grid-column>
  <sui-grid-column>
    <sui-card fluid>
      <sui-image src="/images/avatar/large/elliot.jpg" />
      <sui-card-content>
        <sui-card-header>Elliot Fu</sui-card-header>
      </sui-card-content>
    </sui-card>
  </sui-grid-column>
</sui-grid>`,centeredCardCode:`<sui-card centered>
  <sui-image src="/images/avatar/large/elyse.png" />
  <sui-card-content>
    <sui-card-header>Elyse</sui-card-header>
  </sui-card-content>
</sui-card>`,horizontalCardsCode:`<sui-card horizontal>
  <sui-image src="/images/avatar/large/elyse.png" />
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span class="category">Animals</span>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
</sui-card>`,raisedCode:`<sui-card raised>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span class="category">Animals</span>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <div class="right floated author">
      <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
    </div>
  </sui-card-content>
</sui-card>`,linkCardCode:`<sui-card href="#" raised>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span class="category">Animals</span>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <div class="right floated author">
      <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
    </div>
  </sui-card-content>
</sui-card>`,textAlignCode:`<sui-card>
  <sui-card-content>
    <sui-card-header textAlign="center">Jenny Hess</sui-card-header>
    <sui-card-description textAlign="center">
      <p>Jenny is a student studying Media Management at the New School</p>
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <div class="center aligned author">
      <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"> Jenny
    </div>
  </sui-card-content>
</sui-card>`,invertedCode:`<sui-segment inverted>
  <sui-card-group inverted>
    <sui-card>
      <sui-image src="/images/avatar/large/matthew.png" />
      <sui-card-content>
        <sui-card-header>Matt Giampietro</sui-card-header>
        <sui-card-meta>
          <a>Friends</a>
        </sui-card-meta>
        <sui-card-description>
          Matthew is an interior designer living in New York.
        </sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <span class="right floated">
          Joined in 2013
        </span>
        <a>
          <i class="user icon"></i>
          75 Friends
        </a>
      </sui-card-content>
    </sui-card>
    <sui-card>
      <sui-image src="/images/avatar/large/molly.png" />
      <sui-card-content>
        <sui-card-header>Molly</sui-card-header>
        <sui-card-meta>
          <a>Coworker</a>
        </sui-card-meta>
        <sui-card-description>
          Molly is a personal assistant living in Paris.
        </sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <span class="right floated">
          Joined in 2011
        </span>
        <a>
          <i class="user icon"></i>
          35 Friends
        </a>
      </sui-card-content>
    </sui-card>
    <sui-card>
      <sui-image src="/images/avatar/large/elyse.png" />
      <sui-card-content>
        <sui-card-header>Elyse</sui-card-header>
        <sui-card-meta>
          <a>Coworker</a>
        </sui-card-meta>
        <sui-card-description>
          Elyse is a copywriter working in New York.
        </sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <span class="right floated">
          Joined in 2014
        </span>
        <a>
          <i class="user icon"></i>
          151 Friends
        </a>
      </sui-card-content>
    </sui-card>
  </sui-card-group>
</sui-segment>`,coloredCode:`<sui-card-group :itemsPerRow="4">
  <sui-card color="primary" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
  <sui-card color="secondary" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
  <sui-card color="red" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
  <sui-card color="orange" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
</sui-card-group>`,columnCountCode:`<sui-card-group :itemsPerRow="4">
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
</sui-card-group>`,stackableCode:`<sui-card-group :itemsPerRow="3" stackable>
  <sui-card>
    <sui-image src="/images/avatar/large/elliot.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/helen.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/jenny.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/veronika.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/stevie.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/steve.jpg" />
  </sui-card>
</sui-card-group>`,doublingCode:`<sui-card-group :itemsPerRow="6" doubling>
  <sui-card>
    <sui-image src="/images/avatar/large/elliot.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/helen.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/jenny.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/veronika.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/stevie.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/steve.jpg" />
  </sui-card>
</sui-card-group>`}}}),Ck=i("Types"),yk=i("Kristy"),Ak=d("span",{class:"date"},"Joined in 2013",-1),kk=i(" Kristy is an art director living in New York. "),Sk=i(" 22 Friends "),zk=i("Elliot Fu"),Tk=i("Friends of Veronika"),Rk=i("Elliot requested permission to view your contact details"),Vk=i("Approve"),Ek=i("Decline"),xk=i("Jenny Hess"),Dk=i("New Member"),Bk=i("Jenny wants to add you to the group best friends"),Nk=i("Approve"),Pk=i("Decline"),jk=i("Content"),Fk=i("Project Timeline"),qk=i("Activity"),Mk=d("a",null,"Elliot Fu",-1),Lk=i(" added "),Ik=d("a",null,"Jenny Hess",-1),Jk=i(" to the project "),Hk=d("a",null,"Stevie Feliciano",-1),Ok=i(" was added as an "),Gk=d("a",null,"Administrator",-1),Uk=d("a",null,"Helen Troy",-1),Yk=i(" added two pictures "),Wk=i("Join Project"),Kk=i("Kristy"),Qk=d("span",{class:"date"},"Joined in 2013",-1),Xk=i(" Kristy is an art director living in New York. "),Zk=i(" 22 Friends "),e4=i("Elliot Fu"),t4=i("Friend"),i4=i(" Elliot Fu is a film-maker from New York. "),s4=i("Veronika Ossi"),o4=i("Friend"),a4=i(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. "),l4=i("Jenny Hess"),n4=i("Friend"),u4=i(" Jenny is a student studying Media Management at the New School "),d4=i("Cute Dog"),r4=d("span",null,"2 days ago",-1),c4=d("a",null,"Animals",-1),m4=i("Elliot Fu"),_4=i(" Elliot Fu is a film-maker from New York. "),p4=i(" Add Friend "),h4=i("Veronika Ossi"),g4=i(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. "),f4=i(" Add Friend "),b4=i("Cute Dog"),v4=i("2 days ago"),$4=d("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),w4=d("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),C4=i("Cute Dog"),y4=i("2 days ago"),A4=d("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),k4=d("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),S4=i(" 121 Votes "),z4=i("Variations"),T4=i("Daniel Louise"),R4=i("Helen Troy"),V4=i("Elliot Fu"),E4=i("Elyse"),x4=i("Cute Dog"),D4=d("span",{class:"category"},"Animals",-1),B4=i("Cute Dog"),N4=d("span",{class:"category"},"Animals",-1),P4=d("div",{class:"right floated author"},[d("img",{class:"ui avatar image",src:me}),i(" Matt ")],-1),j4=i("Cute Dog"),F4=d("span",{class:"category"},"Animals",-1),q4=d("div",{class:"right floated author"},[d("img",{class:"ui avatar image",src:me}),i(" Matt ")],-1),M4=i("Jenny Hess"),L4=d("p",null,"Jenny is a student studying Media Management at the New School",-1),I4=d("div",{class:"center aligned author"},[d("img",{class:"ui avatar image",src:re}),i(" Jenny ")],-1),J4=i("Matt Giampietro"),H4=d("a",null,"Friends",-1),O4=i(" Matthew is an interior designer living in New York. "),G4=d("span",{class:"right floated"}," Joined in 2013 ",-1),U4=d("a",null,[d("i",{class:"user icon"}),i(" 75 Friends ")],-1),Y4=i("Molly"),W4=d("a",null,"Coworker",-1),K4=i(" Molly is a personal assistant living in Paris. "),Q4=d("span",{class:"right floated"}," Joined in 2011 ",-1),X4=d("a",null,[d("i",{class:"user icon"}),i(" 35 Friends ")],-1),Z4=i("Elyse"),eS=d("a",null,"Coworker",-1),tS=i(" Elyse is a copywriter working in New York. "),iS=d("span",{class:"right floated"}," Joined in 2014 ",-1),sS=d("a",null,[d("i",{class:"user icon"}),i(" 151 Friends ")],-1);function oS(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-image"),l=u("sui-card-header"),r=u("sui-card-meta"),n=u("sui-card-description"),h=u("sui-card-content"),c=u("sui-icon"),a=u("sui-card"),m=u("doc-example"),f=u("sui-button"),v=u("sui-button-group"),p=u("sui-card-group"),w=u("sui-feed-summary"),S=u("sui-feed-content"),R=u("sui-feed-event"),F=u("sui-feed"),M=u("sui-grid-column"),L=u("sui-grid"),q=u("sui-segment"),Y=u("sui-container");return z(),V("div",null,[e(b,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),e(Y,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[Ck]),_:1}),e(m,{title:"Card",description:"A single card",code:s.cardCode},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:Ee,wrapped:""}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[yk]),_:1}),e(r,null,{default:t(()=>[Ak]),_:1}),e(n,null,{default:t(()=>[kk]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[d("a",null,[e(c,{name:"user"}),Sk])]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Cards",description:"A group of cards",code:s.cardsCode},{default:t(()=>[e(p,null,{default:t(()=>[e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(o,{src:G,floated:"right",size:"mini"}),e(l,null,{default:t(()=>[zk]),_:1}),e(r,null,{default:t(()=>[Tk]),_:1}),e(n,null,{default:t(()=>[Rk]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[e(v,{widths:2},{default:t(()=>[e(f,{basic:"",color:"green"},{default:t(()=>[Vk]),_:1}),e(f,{basic:"",color:"red"},{default:t(()=>[Ek]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(o,{src:re,floated:"right",size:"mini"}),e(l,null,{default:t(()=>[xk]),_:1}),e(r,null,{default:t(()=>[Dk]),_:1}),e(n,null,{default:t(()=>[Bk]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[e(v,{widths:2},{default:t(()=>[e(f,{basic:"",color:"green"},{default:t(()=>[Nk]),_:1}),e(f,{basic:"",color:"red"},{default:t(()=>[Pk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[jk]),_:1}),e(m,{title:"Content Block",description:"A card can contain blocks of content",code:s.contentBlockCode},{default:t(()=>[e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[Fk]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(_,{sub:""},{default:t(()=>[qk]),_:1}),e(F,{size:"small"},{default:t(()=>[e(R,null,{default:t(()=>[e(S,null,{default:t(()=>[e(w,null,{default:t(()=>[Mk,Lk,Ik,Jk]),_:1})]),_:1})]),_:1}),e(R,null,{default:t(()=>[e(S,null,{default:t(()=>[e(w,null,{default:t(()=>[Hk,Ok,Gk]),_:1})]),_:1})]),_:1}),e(R,null,{default:t(()=>[e(S,null,{default:t(()=>[e(w,null,{default:t(()=>[Uk,Yk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[e(f,{as:"button"},{default:t(()=>[Wk]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Image",description:"A card can contain an image",code:s.imageCode},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:Ee,wrapped:""}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[Kk]),_:1}),e(r,null,{default:t(()=>[Qk]),_:1}),e(n,null,{default:t(()=>[Xk]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[d("a",null,[e(c,{name:"user"}),Zk])]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Header",description:"A card can contain a header",code:s.headerCode},{default:t(()=>[e(p,null,{default:t(()=>[e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[e4]),_:1}),e(r,null,{default:t(()=>[t4]),_:1}),e(n,null,{default:t(()=>[i4]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[s4]),_:1}),e(r,null,{default:t(()=>[o4]),_:1}),e(n,null,{default:t(()=>[a4]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[l4]),_:1}),e(r,null,{default:t(()=>[n4]),_:1}),e(n,null,{default:t(()=>[u4]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Metadata",description:"A card can contain content metadata",code:s.metadataCode},{default:t(()=>[e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[d4]),_:1}),e(r,null,{default:t(()=>[r4,c4]),_:1}),e(n,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Buttons",description:"A card can contain buttons",code:s.buttonsCode},{default:t(()=>[e(p,null,{default:t(()=>[e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[m4]),_:1}),e(n,null,{default:t(()=>[_4]),_:1})]),_:1}),e(f,{attached:"bottom"},{default:t(()=>[e(c,{name:"add"}),p4]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[h4]),_:1}),e(n,null,{default:t(()=>[g4]),_:1})]),_:1}),e(f,{attached:"bottom"},{default:t(()=>[e(c,{name:"add"}),f4]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:s.descriptionCode},{default:t(()=>[e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[b4]),_:1}),e(r,null,{default:t(()=>[v4]),_:1}),e(n,null,{default:t(()=>[$4,w4]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:s.extraContentCode},{default:t(()=>[e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[C4]),_:1}),e(r,null,{default:t(()=>[y4]),_:1}),e(n,null,{default:t(()=>[A4,k4]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[e(c,{name:"check"}),S4]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[z4]),_:1}),e(m,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:s.fluidCardCode},{default:t(()=>[e(L,{columns:3},{default:t(()=>[e(M,null,{default:t(()=>[e(a,{fluid:""},{default:t(()=>[e(o,{src:bk}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[T4]),_:1})]),_:1})]),_:1})]),_:1}),e(M,null,{default:t(()=>[e(a,{fluid:""},{default:t(()=>[e(o,{src:fe}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[R4]),_:1})]),_:1})]),_:1})]),_:1}),e(M,null,{default:t(()=>[e(a,{fluid:""},{default:t(()=>[e(o,{src:be}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[V4]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Centered Card",description:"A card can center itself inside its container",code:s.centeredCardCode},{default:t(()=>[e(a,{centered:""},{default:t(()=>[e(o,{src:ve}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[E4]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Horizontal Cards",description:"A card can display horizontally",code:s.horizontalCardsCode},{default:t(()=>[e(a,{horizontal:""},{default:t(()=>[e(o,{src:ve}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[x4]),_:1}),e(r,null,{default:t(()=>[D4]),_:1}),e(n,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:s.raisedCode},{default:t(()=>[e(a,{raised:""},{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[B4]),_:1}),e(r,null,{default:t(()=>[N4]),_:1}),e(n,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[P4]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:s.linkCardCode},{default:t(()=>[e(a,{href:"#",raised:""},{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[j4]),_:1}),e(r,null,{default:t(()=>[F4]),_:1}),e(n,null,{default:t(()=>[e(o,{src:D})]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[q4]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:s.textAlignCode},{default:t(()=>[e(a,null,{default:t(()=>[e(h,null,{default:t(()=>[e(l,{textAlign:"center"},{default:t(()=>[M4]),_:1}),e(n,{textAlign:"center"},{default:t(()=>[L4]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[I4]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Inverted",description:"Card's colors can be inverted",code:s.invertedCode},{default:t(()=>[e(q,{inverted:""},{default:t(()=>[e(p,{inverted:""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:vk}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[J4]),_:1}),e(r,null,{default:t(()=>[H4]),_:1}),e(n,null,{default:t(()=>[O4]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[G4,U4]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:$k}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[Y4]),_:1}),e(r,null,{default:t(()=>[W4]),_:1}),e(n,null,{default:t(()=>[K4]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[Q4,X4]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:ve}),e(h,null,{default:t(()=>[e(l,null,{default:t(()=>[Z4]),_:1}),e(r,null,{default:t(()=>[eS]),_:1}),e(n,null,{default:t(()=>[tS]),_:1})]),_:1}),e(h,{extra:""},{default:t(()=>[iS,sS]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Colored",description:"A card can specify a color",code:s.coloredCode},{default:t(()=>[e(p,{itemsPerRow:4},{default:t(()=>[e(a,{color:"primary",href:"#"},{default:t(()=>[e(o,{src:Z})]),_:1}),e(a,{color:"secondary",href:"#"},{default:t(()=>[e(o,{src:Z})]),_:1}),e(a,{color:"red",href:"#"},{default:t(()=>[e(o,{src:Z})]),_:1}),e(a,{color:"orange",href:"#"},{default:t(()=>[e(o,{src:Z})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:s.columnCountCode},{default:t(()=>[e(p,{itemsPerRow:4},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:k})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:k})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:s.stackableCode},{default:t(()=>[e(p,{itemsPerRow:3,stackable:""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:be})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:fe})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:xe})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:De})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:ge})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:Be})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:s.doublingCode},{default:t(()=>[e(p,{itemsPerRow:6,doubling:""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:be})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:fe})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:xe})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:De})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:ge})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:Be})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var aS=x(wk,[["render",oS]]);const lS=E({name:"CommentDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{commentsCode:`<sui-comment-group>
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>How artistic!</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>This has been very useful for my research. Thanks as well!</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
    <div class="comments">
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>Elliot you are always so right :)</sui-comment-text>
          <sui-comment-actions>
            <a>Reply</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </div>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>Dude, this is awesome. Thanks so much</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,avatarCode:`<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author>Elliot Fu</sui-comment-author>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,metadataCode:`<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/stevie.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Stevie Feliciano</sui-comment-author>
      <sui-comment-metadata>
        <div class="date">2 days ago</div>
        <div class="rating">
          <i class="star icon"></i>
          5 Faves
        </div>
      </sui-comment-metadata>
      <sui-comment-text>
        Hey guys, I hope this example comment is helping you read this documentation.
      </sui-comment-text>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,actionsCode:`<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Tom Lukic</sui-comment-author>
      <sui-comment-text>
        This will be great for business reports. I will definitely download this.
      </sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
        <a>Save</a>
        <a>Hide</a>
        <a>
          <i class="expand icon"></i>
          Full-screen
        </a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,replyFormCode:`<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/steve.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Steve Jobs</sui-comment-author>
      <sui-comment-metadata>2 days ago</sui-comment-metadata>
      <sui-comment-text>Revolutionary!</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
      <sui-form reply>
        <sui-form-textarea />
        <sui-button color="primary" icon labelPosition="left">
          <sui-icon name="edit" />
          Add Reply
        </sui-button>
      </sui-form>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,collapsedCode:`<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/christian.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Christian Rocha</sui-comment-author>
      <sui-comment-metadata>2 days ago</sui-comment-metadata>
      <sui-comment-text>
        I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
      </sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group collapsed>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
        <sui-comment-content>
          <sui-comment-author>Elliot Fu</sui-comment-author>
          <sui-comment-metadata>1 days ago</sui-comment-metadata>
          <sui-comment-text>No, it wont</sui-comment-text>
          <sui-comment-actions>
            <a>Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
</sui-comment-group>`,threadedCode:`<sui-comment-group threaded>
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        How artistic!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        This has been very useful for my research. Thanks as well!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>
            Elliot you are always so right :)
          </sui-comment-text>
          <sui-comment-actions>
            <a href="#">Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>
        Dude, this is awesome. Thanks so much
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,minimalCode:`<sui-comment-group minimal>
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        How artistic!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        This has been very useful for my research. Thanks as well!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>
            Elliot you are always so right :)
          </sui-comment-text>
          <sui-comment-actions>
            <a href="#">Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>
        Dude, this is awesome. Thanks so much
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,sizeCode:`<sui-comment-group size="small">
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        How artistic!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        This has been very useful for my research. Thanks as well!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>
            Elliot you are always so right :)
          </sui-comment-text>
          <sui-comment-actions>
            <a href="#">Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>
        Dude, this is awesome. Thanks so much
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,invertedCode:`<sui-segment inverted>
  <sui-comment-group inverted>
    <sui-header as="h3" inverted dividing>Comments</sui-header>
    <sui-comment>
      <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
      <sui-comment-content>
        <sui-comment-author as="a">Matt</sui-comment-author>
        <sui-comment-metadata>
          <span>Today at 5:42PM</span>
        </sui-comment-metadata>
        <sui-comment-text>
          How artistic!
        </sui-comment-text>
        <sui-comment-actions>
          <a href="#">Replay</a>
        </sui-comment-actions>
      </sui-comment-content>
    </sui-comment>
    <sui-comment>
      <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
      <sui-comment-content>
        <sui-comment-author as="a">Elliot Fu</sui-comment-author>
        <sui-comment-metadata>
          <span>Yesterday at 12:30AM</span>
        </sui-comment-metadata>
        <sui-comment-text>
          This has been very useful for my research. Thanks as well!
        </sui-comment-text>
        <sui-comment-actions>
          <a href="#">Replay</a>
        </sui-comment-actions>
      </sui-comment-content>
      <sui-comment-group>
        <sui-comment>
          <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
          <sui-comment-content>
            <sui-comment-author as="a">Jenny Hess</sui-comment-author>
            <sui-comment-metadata>
              <span>Just now</span>
            </sui-comment-metadata>
            <sui-comment-text>
              Elliot you are always so right :)
            </sui-comment-text>
            <sui-comment-actions>
              <a href="#">Replay</a>
            </sui-comment-actions>
          </sui-comment-content>
        </sui-comment>
      </sui-comment-group>
    </sui-comment>
    <sui-comment>
      <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
      <sui-comment-content>
        <sui-comment-author as="a">Joe Henderson</sui-comment-author>
        <sui-comment-metadata>
          <span>5 days ago</span>
        </sui-comment-metadata>
        <sui-comment-text>
          Dude, this is awesome. Thanks so much
        </sui-comment-text>
        <sui-comment-actions>
          <a href="#">Replay</a>
        </sui-comment-actions>
      </sui-comment-content>
    </sui-comment>
  </sui-comment-group>
  </sui-segment>`}}}),nS=i("Types"),uS=i("Comments"),dS=i("Matt"),rS=d("span",null,"Today at 5:42PM",-1),cS=i("How artistic!"),mS=d("a",null,"Reply",-1),_S=i("Elliot Fu"),pS=d("span",null,"Yesterday at 12:30AM",-1),hS=i("This has been very useful for my research. Thanks as well!"),gS=d("a",null,"Reply",-1),fS={class:"comments"},bS=i("Jenny Hess"),vS=d("span",null,"Just now",-1),$S=i("Elliot you are always so right :)"),wS=d("a",null,"Reply",-1),CS=i("Joe Henderson"),yS=d("span",null,"5 days ago",-1),AS=i("Dude, this is awesome. Thanks so much"),kS=d("a",null,"Reply",-1),SS=i("Content"),zS=i("Elliot Fu"),TS=i("Stevie Feliciano"),RS=d("div",{class:"date"},"2 days ago",-1),VS=d("div",{class:"rating"},[d("i",{class:"star icon"}),i(" 5 Faves ")],-1),ES=i(" Hey guys, I hope this example comment is helping you read this documentation. "),xS=i("Tom Lukic"),DS=i(" This will be great for business reports. I will definitely download this. "),BS=d("a",null,"Reply",-1),NS=d("a",null,"Save",-1),PS=d("a",null,"Hide",-1),jS=d("a",null,[d("i",{class:"expand icon"}),i(" Full-screen ")],-1),FS=i("Steve Jobs"),qS=i("2 days ago"),MS=i("Revolutionary!"),LS=d("a",null,"Reply",-1),IS=i(" Add Reply "),JS=i("States"),HS=i("Christian Rocha"),OS=i("2 days ago"),GS=i(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? "),US=d("a",null,"Reply",-1),YS=i("Elliot Fu"),WS=i("1 days ago"),KS=i("No, it wont"),QS=d("a",null,"Replay",-1),XS=i("Variations"),ZS=i("Comments"),e5=i("Matt"),t5=d("span",null,"Today at 5:42PM",-1),i5=i(" How artistic! "),s5=d("a",{href:"#"},"Replay",-1),o5=i("Elliot Fu"),a5=d("span",null,"Yesterday at 12:30AM",-1),l5=i(" This has been very useful for my research. Thanks as well! "),n5=d("a",{href:"#"},"Replay",-1),u5=i("Jenny Hess"),d5=d("span",null,"Just now",-1),r5=i(" Elliot you are always so right :) "),c5=d("a",{href:"#"},"Replay",-1),m5=i("Joe Henderson"),_5=d("span",null,"5 days ago",-1),p5=i(" Dude, this is awesome. Thanks so much "),h5=d("a",{href:"#"},"Replay",-1),g5=i("Comments"),f5=i("Matt"),b5=d("span",null,"Today at 5:42PM",-1),v5=i(" How artistic! "),$5=d("a",{href:"#"},"Replay",-1),w5=i("Elliot Fu"),C5=d("span",null,"Yesterday at 12:30AM",-1),y5=i(" This has been very useful for my research. Thanks as well! "),A5=d("a",{href:"#"},"Replay",-1),k5=i("Jenny Hess"),S5=d("span",null,"Just now",-1),z5=i(" Elliot you are always so right :) "),T5=d("a",{href:"#"},"Replay",-1),R5=i("Joe Henderson"),V5=d("span",null,"5 days ago",-1),E5=i(" Dude, this is awesome. Thanks so much "),x5=d("a",{href:"#"},"Replay",-1),D5=i("Comments"),B5=i("Matt"),N5=d("span",null,"Today at 5:42PM",-1),P5=i(" How artistic! "),j5=d("a",{href:"#"},"Replay",-1),F5=i("Elliot Fu"),q5=d("span",null,"Yesterday at 12:30AM",-1),M5=i(" This has been very useful for my research. Thanks as well! "),L5=d("a",{href:"#"},"Replay",-1),I5=i("Jenny Hess"),J5=d("span",null,"Just now",-1),H5=i(" Elliot you are always so right :) "),O5=d("a",{href:"#"},"Replay",-1),G5=i("Joe Henderson"),U5=d("span",null,"5 days ago",-1),Y5=i(" Dude, this is awesome. Thanks so much "),W5=d("a",{href:"#"},"Replay",-1),K5=i("Comments"),Q5=i("Matt"),X5=d("span",null,"Today at 5:42PM",-1),Z5=i(" How artistic! "),ez=d("a",{href:"#"},"Replay",-1),tz=i("Elliot Fu"),iz=d("span",null,"Yesterday at 12:30AM",-1),sz=i(" This has been very useful for my research. Thanks as well! "),oz=d("a",{href:"#"},"Replay",-1),az=i("Jenny Hess"),lz=d("span",null,"Just now",-1),nz=i(" Elliot you are always so right :) "),uz=d("a",{href:"#"},"Replay",-1),dz=i("Joe Henderson"),rz=d("span",null,"5 days ago",-1),cz=i(" Dude, this is awesome. Thanks so much "),mz=d("a",{href:"#"},"Replay",-1);function _z(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-comment-avatar"),l=u("sui-comment-author"),r=u("sui-comment-metadata"),n=u("sui-comment-text"),h=u("sui-comment-actions"),c=u("sui-comment-content"),a=u("sui-comment"),m=u("sui-comment-group"),f=u("doc-example"),v=u("sui-form-textarea"),p=u("sui-icon"),w=u("sui-button"),S=u("sui-form"),R=u("sui-segment"),F=u("sui-container");return z(),V("div",null,[e(b,{title:"Comment",sub:"A comment displays user feedback to site content"}),e(F,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[nS]),_:1}),e(f,{title:"Comments",description:"A basic list of comments",code:s.commentsCode},{default:t(()=>[e(m,null,{default:t(()=>[e(_,{as:"h3",dividing:""},{default:t(()=>[uS]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[dS]),_:1}),e(r,null,{default:t(()=>[rS]),_:1}),e(n,null,{default:t(()=>[cS]),_:1}),e(h,null,{default:t(()=>[mS]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[_S]),_:1}),e(r,null,{default:t(()=>[pS]),_:1}),e(n,null,{default:t(()=>[hS]),_:1}),e(h,null,{default:t(()=>[gS]),_:1})]),_:1}),d("div",fS,[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[bS]),_:1}),e(r,null,{default:t(()=>[vS]),_:1}),e(n,null,{default:t(()=>[$S]),_:1}),e(h,null,{default:t(()=>[wS]),_:1})]),_:1})]),_:1})])]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[CS]),_:1}),e(r,null,{default:t(()=>[yS]),_:1}),e(n,null,{default:t(()=>[AS]),_:1}),e(h,null,{default:t(()=>[kS]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[SS]),_:1}),e(f,{title:"avatar",description:"A comment can contain an image or avatar",code:s.avatarCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[zS]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:s.metadataCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/stevie.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[TS]),_:1}),e(r,null,{default:t(()=>[RS,VS]),_:1}),e(n,null,{default:t(()=>[ES]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:s.actionsCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[xS]),_:1}),e(n,null,{default:t(()=>[DS]),_:1}),e(h,null,{default:t(()=>[BS,NS,PS,jS]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:s.replyFormCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/steve.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[FS]),_:1}),e(r,null,{default:t(()=>[qS]),_:1}),e(n,null,{default:t(()=>[MS]),_:1}),e(h,null,{default:t(()=>[LS]),_:1}),e(S,{reply:""},{default:t(()=>[e(v),e(w,{color:"primary",icon:"",labelPosition:"left"},{default:t(()=>[e(p,{name:"edit"}),IS]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[JS]),_:1}),e(f,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:s.collapsedCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/christian.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[HS]),_:1}),e(r,null,{default:t(()=>[OS]),_:1}),e(n,null,{default:t(()=>[GS]),_:1}),e(h,null,{default:t(()=>[US]),_:1})]),_:1}),e(m,{collapsed:""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[YS]),_:1}),e(r,null,{default:t(()=>[WS]),_:1}),e(n,null,{default:t(()=>[KS]),_:1}),e(h,null,{default:t(()=>[QS]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[XS]),_:1}),e(f,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:s.threadedCode},{default:t(()=>[e(m,{threaded:""},{default:t(()=>[e(_,{as:"h3",dividing:""},{default:t(()=>[ZS]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[e5]),_:1}),e(r,null,{default:t(()=>[t5]),_:1}),e(n,null,{default:t(()=>[i5]),_:1}),e(h,null,{default:t(()=>[s5]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[o5]),_:1}),e(r,null,{default:t(()=>[a5]),_:1}),e(n,null,{default:t(()=>[l5]),_:1}),e(h,null,{default:t(()=>[n5]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[u5]),_:1}),e(r,null,{default:t(()=>[d5]),_:1}),e(n,null,{default:t(()=>[r5]),_:1}),e(h,null,{default:t(()=>[c5]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[m5]),_:1}),e(r,null,{default:t(()=>[_5]),_:1}),e(n,null,{default:t(()=>[p5]),_:1}),e(h,null,{default:t(()=>[h5]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:s.minimalCode},{default:t(()=>[e(m,{minimal:""},{default:t(()=>[e(_,{as:"h3",dividing:""},{default:t(()=>[g5]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[f5]),_:1}),e(r,null,{default:t(()=>[b5]),_:1}),e(n,null,{default:t(()=>[v5]),_:1}),e(h,null,{default:t(()=>[$5]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[w5]),_:1}),e(r,null,{default:t(()=>[C5]),_:1}),e(n,null,{default:t(()=>[y5]),_:1}),e(h,null,{default:t(()=>[A5]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[k5]),_:1}),e(r,null,{default:t(()=>[S5]),_:1}),e(n,null,{default:t(()=>[z5]),_:1}),e(h,null,{default:t(()=>[T5]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[R5]),_:1}),e(r,null,{default:t(()=>[V5]),_:1}),e(n,null,{default:t(()=>[E5]),_:1}),e(h,null,{default:t(()=>[x5]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Size",description:"Comments can have different sizes",code:s.sizeCode},{default:t(()=>[e(m,{size:"small"},{default:t(()=>[e(_,{as:"h3",dividing:""},{default:t(()=>[D5]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[B5]),_:1}),e(r,null,{default:t(()=>[N5]),_:1}),e(n,null,{default:t(()=>[P5]),_:1}),e(h,null,{default:t(()=>[j5]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[F5]),_:1}),e(r,null,{default:t(()=>[q5]),_:1}),e(n,null,{default:t(()=>[M5]),_:1}),e(h,null,{default:t(()=>[L5]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[I5]),_:1}),e(r,null,{default:t(()=>[J5]),_:1}),e(n,null,{default:t(()=>[H5]),_:1}),e(h,null,{default:t(()=>[O5]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[G5]),_:1}),e(r,null,{default:t(()=>[U5]),_:1}),e(n,null,{default:t(()=>[Y5]),_:1}),e(h,null,{default:t(()=>[W5]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Inverted",description:"Comments's colors can be inverted",code:s.invertedCode},{default:t(()=>[e(R,{inverted:""},{default:t(()=>[e(m,{inverted:""},{default:t(()=>[e(_,{as:"h3",inverted:"",dividing:""},{default:t(()=>[K5]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[Q5]),_:1}),e(r,null,{default:t(()=>[X5]),_:1}),e(n,null,{default:t(()=>[Z5]),_:1}),e(h,null,{default:t(()=>[ez]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[tz]),_:1}),e(r,null,{default:t(()=>[iz]),_:1}),e(n,null,{default:t(()=>[sz]),_:1}),e(h,null,{default:t(()=>[oz]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[az]),_:1}),e(r,null,{default:t(()=>[lz]),_:1}),e(n,null,{default:t(()=>[nz]),_:1}),e(h,null,{default:t(()=>[uz]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(c,null,{default:t(()=>[e(l,{as:"a"},{default:t(()=>[dz]),_:1}),e(r,null,{default:t(()=>[rz]),_:1}),e(n,null,{default:t(()=>[cz]),_:1}),e(h,null,{default:t(()=>[mz]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var pz=x(lS,[["render",_z]]);const hz=E({name:"FeedDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{feedCode:`<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/elliot.jpg">
    </sui-feed-label>
    <sui-feed-content>
      <sui-feed-summary>
        <sui-feed-user>Elliot Fu</sui-feed-user> added you as a friend
        <sui-feed-date>1 Hour Ago</sui-feed-date>
      </sui-feed-summary>
      <sui-feed-meta>
        <sui-feed-like>
          <sui-icon name="like" /> 4 Likes
        </sui-feed-like>
      </sui-feed-meta>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`,labelCode:`<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/elliot.jpg">
    </sui-feed-label>
    <sui-feed-content>
      You added Elliot Fu to the group <a>Coworkers</a>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`,dateCode:`<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/jenny.jpg">
    </sui-feed-label>
    <sui-feed-content>
      <sui-feed-date>
        3 days ago
      </sui-feed-date>
      <sui-feed-summary>
        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`,additionalInfoCode:`<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/helen.jpg">
    </sui-feed-label>
    <sui-feed-content>
      <sui-feed-date>
        3 days ago
      </sui-feed-date>
      <sui-feed-summary>
        <a>Helen Troy</a> added 2 photos
      </sui-feed-summary>
      <sui-feed-extra images>
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </sui-feed-extra>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`,sizeCode:`<sui-feed size="small">
  <sui-header as="h4">Followers Activity</sui-header>
  <sui-feed-event>
    <sui-feed-content>
      <sui-feed-summary>
        <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
  <sui-feed-event>
    <sui-feed-content>
      <sui-feed-summary>
        <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
  <sui-feed-event>
    <sui-feed-content>
      <sui-feed-summary>
        <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`}}}),gz=i("Types"),fz=d("img",{src:G},null,-1),bz=i("Elliot Fu"),vz=i(" added you as a friend "),$z=i("1 Hour Ago"),wz=i(" 4 Likes "),Cz=i("Content"),yz=d("img",{src:G},null,-1),Az=i(" You added Elliot Fu to the group "),kz=d("a",null,"Coworkers",-1),Sz=d("img",{src:re},null,-1),zz=i(" 3 days ago "),Tz=i(" You added "),Rz=d("a",null,"Jenny Hess",-1),Vz=i(" to your "),Ez=d("a",null,"coworker",-1),xz=i(" group. "),Dz=d("img",{src:te},null,-1),Bz=i(" 3 days ago "),Nz=d("a",null,"Helen Troy",-1),Pz=i(" added 2 photos "),jz=d("a",null,[d("img",{src:k})],-1),Fz=d("a",null,[d("img",{src:k})],-1),qz=i("Variations"),Mz=i("Followers Activity"),Lz=d("a",null,"Elliot Fu",-1),Iz=i(" added "),Jz=d("a",null,"Jenny Hess",-1),Hz=i(" as a friend "),Oz=d("a",null,"Stevie Feliciano",-1),Gz=i(" added "),Uz=d("a",null,"Elliot Fu",-1),Yz=i(" as a friend "),Wz=d("a",null,"Helen Troy",-1),Kz=i(" added "),Qz=d("a",null,"Christian Rocha",-1),Xz=i(" as a friend "),Zz=d("img",{src:G},null,-1),eT=d("div",{class:"date"},"Just now",-1),tT=d("a",{class:"user"},"Elliot Fu",-1),iT=i(" posted on his page "),sT=i(" Hey there ! ");function oT(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-feed-label"),l=u("sui-feed-user"),r=u("sui-feed-date"),n=u("sui-feed-summary"),h=u("sui-icon"),c=u("sui-feed-like"),a=u("sui-feed-meta"),m=u("sui-feed-content"),f=u("sui-feed-event"),v=u("sui-feed"),p=u("doc-example"),w=u("sui-feed-extra"),S=u("sui-segment"),R=u("sui-container");return z(),V("div",null,[e(b,{title:"Feed",sub:"A feed presents user activity chronologically"}),e(R,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[gz]),_:1}),e(p,{title:"Feed",description:"A feed",code:s.feedCode},{default:t(()=>[e(v,null,{default:t(()=>[e(f,null,{default:t(()=>[e(o,null,{default:t(()=>[fz]),_:1}),e(m,null,{default:t(()=>[e(n,null,{default:t(()=>[e(l,null,{default:t(()=>[bz]),_:1}),vz,e(r,null,{default:t(()=>[$z]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(c,null,{default:t(()=>[e(h,{name:"like"}),wz]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Cz]),_:1}),e(p,{title:"Label",description:"An event can contain an image or icon label",code:s.labelCode},{default:t(()=>[e(v,null,{default:t(()=>[e(f,null,{default:t(()=>[e(o,null,{default:t(()=>[yz]),_:1}),e(m,null,{default:t(()=>[Az,kz]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Date",description:"An event or an event summary can contain a date",code:s.dateCode},{default:t(()=>[e(v,null,{default:t(()=>[e(f,null,{default:t(()=>[e(o,null,{default:t(()=>[Sz]),_:1}),e(m,null,{default:t(()=>[e(r,null,{default:t(()=>[zz]),_:1}),e(n,null,{default:t(()=>[Tz,Rz,Vz,Ez,xz]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:s.additionalInfoCode},{default:t(()=>[e(v,null,{default:t(()=>[e(f,null,{default:t(()=>[e(o,null,{default:t(()=>[Dz]),_:1}),e(m,null,{default:t(()=>[e(r,null,{default:t(()=>[Bz]),_:1}),e(n,null,{default:t(()=>[Nz,Pz]),_:1}),e(w,{images:""},{default:t(()=>[jz,Fz]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[qz]),_:1}),e(p,{title:"Size",description:"A feed can have different sizes",code:s.sizeCode},{default:t(()=>[e(v,{size:"small"},{default:t(()=>[e(_,{as:"h4"},{default:t(()=>[Mz]),_:1}),e(f,null,{default:t(()=>[e(m,null,{default:t(()=>[e(n,null,{default:t(()=>[Lz,Iz,Jz,Hz]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(m,null,{default:t(()=>[e(n,null,{default:t(()=>[Oz,Gz,Uz,Yz]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(m,null,{default:t(()=>[e(n,null,{default:t(()=>[Wz,Kz,Qz,Xz]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Inverted",description:"A feed's color can be inverted",code:s.invertedCode},{default:t(()=>[e(S,{inverted:""},{default:t(()=>[e(v,{inverted:""},{default:t(()=>[e(f,null,{default:t(()=>[e(o,null,{default:t(()=>[Zz]),_:1}),e(m,null,{default:t(()=>[eT,e(n,null,{default:t(()=>[tT,iT]),_:1}),e(w,{text:""},{default:t(()=>[sT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var aT=x(hz,[["render",oT]]);const lT=E({name:"ItemDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{itemsCode:`<sui-item-group>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>Header</sui-item-header>
      <sui-item-meta>
        <span>Description</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        Additional Details
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>Header</sui-item-header>
      <sui-item-meta>
        <span>Description</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        Additional Details
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,imageCode:`<sui-item-group divided>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
  </sui-item>
</sui-item-group>`,contentCode:`<sui-item-group divided>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      Content A
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      Content B
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      Content C
    </sui-item-content>
  </sui-item>
</sui-item-group>`,headerCode:`<sui-item-group>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      <sui-item-header>12 Years a Slave</sui-item-header>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,metadataCode:`<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Arrowhead Valley Camp</sui-item-header>
      <sui-item-meta>
        <span class="price">$1200</span>
        <span class="stay">1 Month</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Buck's Homebrew Stayaway</sui-item-header>
      <sui-item-meta>
        <span class="price">$1000</span>
        <span class="stay">2 Weeks</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,descriptionCode:`<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Cute Dog</sui-item-header>
      <sui-item-description>
        <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
        <p>Many people also have their own barometers for what makes a cute dog.</p>
      </sui-item-description>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,extraContentCode:`<sui-item-group>
  <sui-item>
    <sui-item-content>
      <sui-item-header>Cute Dog</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-icon name="check" color="green" />
        121 Votes
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,dividedCode:`<sui-item-group divided>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>12 Years a Slave</sui-item-header>
      <sui-item-meta>
        <span class="cinema">Union Square 14</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-label>IMAX</sui-label>
        <sui-label>
          <sui-icon name="globe" /> Additional Languages
        </sui-label>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>My Neighbor Totoro</sui-item-header>
      <sui-item-meta>
        <span class="cinema">IFC Cinema</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right" color="primary">
          Buy tickets
          <sui-icon name="right chevron" />
        </sui-button>
        <sui-label>Limited</sui-label>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>Watchmen</sui-item-header>
      <sui-item-meta>
        <span class="cinema">IFC</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right" color="primary">
          Buy tickets
          <sui-icon name="right chevron" />
        </sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,relaxedCode:`<sui-item-group>
  <sui-item>
    <sui-image size="tiny" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header as="a">12 Years a Slave</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="tiny" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header as="a">My Neighbor Totoro</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="tiny" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header as="a">Watchmen</sui-item-header>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,verticalAlignCode:`<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Top Aligned</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Middle Aligned</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="bottom">
      <sui-item-header>Bottom Aligned</sui-item-header>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,floatedContentCode:`<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Content A</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right">Action</sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Content B</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right">Action</sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Content C</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right">Action</sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`}}}),nT=i("Types"),uT=d("img",{src:k},null,-1),dT=i("Header"),rT=d("span",null,"Description",-1),cT=d("img",{src:N},null,-1),mT=i(" Additional Details "),_T=d("img",{src:k},null,-1),pT=i("Header"),hT=d("span",null,"Description",-1),gT=d("img",{src:N},null,-1),fT=i(" Additional Details "),bT=i("Content"),vT=d("img",{src:k},null,-1),$T=d("img",{src:k},null,-1),wT=d("img",{src:k},null,-1),CT=d("img",{src:k},null,-1),yT=i(" Content A "),AT=d("img",{src:k},null,-1),kT=i(" Content B "),ST=d("img",{src:k},null,-1),zT=i(" Content C "),TT=d("img",{src:k},null,-1),RT=i("12 Years a Slave"),VT=i("Arrowhead Valley Camp"),ET=d("span",{class:"price"},"$1200",-1),xT=d("span",{class:"stay"},"1 Month",-1),DT=d("img",{src:N},null,-1),BT=i("Buck's Homebrew Stayaway"),NT=d("span",{class:"price"},"$1000",-1),PT=d("span",{class:"stay"},"2 Weeks",-1),jT=d("img",{src:N},null,-1),FT=i("Cute Dog"),qT=d("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),MT=d("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),LT=i("Cute Dog"),IT=d("img",{src:N},null,-1),JT=i(" 121 Votes "),HT=i("Variations"),OT=d("img",{src:k},null,-1),GT=i("12 Years a Slave"),UT=d("span",{class:"cinema"},"Union Square 14",-1),YT=d("img",{src:N},null,-1),WT=i("IMAX"),KT=i(" Additional Languages "),QT=d("img",{src:k},null,-1),XT=i("My Neighbor Totoro"),ZT=d("span",{class:"cinema"},"IFC Cinema",-1),e0=d("img",{src:N},null,-1),t0=i(" Buy tickets "),i0=i("Limited"),s0=d("img",{src:k},null,-1),o0=i("Watchmen"),a0=d("span",{class:"cinema"},"IFC",-1),l0=d("img",{src:N},null,-1),n0=i(" Buy tickets "),u0=i("12 Years a Slave"),d0=i("My Neighbor Totoro"),r0=i("Watchmen"),c0=i("Top Aligned"),m0=i("Middle Aligned"),_0=i("Bottom Aligned"),p0=i("Content A"),h0=d("img",{src:N},null,-1),g0=i("Action"),f0=i("Content B"),b0=d("img",{src:N},null,-1),v0=i("Action"),$0=i("Content C"),w0=d("img",{src:N},null,-1),C0=i("Action"),y0=i("Arrowhead Valley Camp"),A0=d("span",{class:"price"},"$1200",-1),k0=d("span",{class:"stay"},"1 Month",-1),S0=d("img",{src:N},null,-1),z0=i("Buck's Homebrew Stayaway"),T0=d("span",{class:"price"},"$1000",-1),R0=d("span",{class:"stay"},"2 Weeks",-1),V0=d("img",{src:N},null,-1);function E0(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-item-image"),l=u("sui-item-header"),r=u("sui-item-meta"),n=u("sui-item-description"),h=u("sui-item-extra"),c=u("sui-item-content"),a=u("sui-item"),m=u("sui-item-group"),f=u("doc-example"),v=u("sui-image"),p=u("sui-icon"),w=u("sui-label"),S=u("sui-button"),R=u("sui-segment"),F=u("sui-container");return z(),V("div",null,[e(b,{title:"Item",sub:"An item view presents large collections of site content for display"}),e(F,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[nT]),_:1}),e(f,{title:"Items",description:"A group of items",code:s.itemsCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[uT]),_:1}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[dT]),_:1}),e(r,null,{default:t(()=>[rT]),_:1}),e(n,null,{default:t(()=>[cT]),_:1}),e(h,null,{default:t(()=>[mT]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[_T]),_:1}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[pT]),_:1}),e(r,null,{default:t(()=>[hT]),_:1}),e(n,null,{default:t(()=>[gT]),_:1}),e(h,null,{default:t(()=>[fT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[bT]),_:1}),e(f,{title:"Image",description:"An item can contain an image",code:s.imageCode},{default:t(()=>[e(m,{divided:""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[vT]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[$T]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[wT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Content",description:"An item can contain content",code:s.contentCode},{default:t(()=>[e(m,{divided:""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[CT]),_:1}),e(c,{verticalAlign:"middle"},{default:t(()=>[yT]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[AT]),_:1}),e(c,{verticalAlign:"middle"},{default:t(()=>[kT]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[ST]),_:1}),e(c,{verticalAlign:"middle"},{default:t(()=>[zT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Header",description:"An item can contain a header",code:s.headerCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[TT]),_:1}),e(c,{verticalAlign:"middle"},{default:t(()=>[e(l,null,{default:t(()=>[RT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Metadata",description:"An item can contain content metadata",code:s.metadataCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[VT]),_:1}),e(r,null,{default:t(()=>[ET,xT]),_:1}),e(n,null,{default:t(()=>[DT]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[BT]),_:1}),e(r,null,{default:t(()=>[NT,PT]),_:1}),e(n,null,{default:t(()=>[jT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:s.descriptionCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[FT]),_:1}),e(n,null,{default:t(()=>[qT,MT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:s.extraContentCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[LT]),_:1}),e(n,null,{default:t(()=>[IT]),_:1}),e(h,null,{default:t(()=>[e(p,{name:"check",color:"green"}),JT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[HT]),_:1}),e(f,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:s.dividedCode},{default:t(()=>[e(m,{divided:""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[OT]),_:1}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[GT]),_:1}),e(r,null,{default:t(()=>[UT]),_:1}),e(n,null,{default:t(()=>[YT]),_:1}),e(h,null,{default:t(()=>[e(w,null,{default:t(()=>[WT]),_:1}),e(w,null,{default:t(()=>[e(p,{name:"globe"}),KT]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[QT]),_:1}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[XT]),_:1}),e(r,null,{default:t(()=>[ZT]),_:1}),e(n,null,{default:t(()=>[e0]),_:1}),e(h,null,{default:t(()=>[e(S,{floated:"right",color:"primary"},{default:t(()=>[t0,e(p,{name:"right chevron"})]),_:1}),e(w,null,{default:t(()=>[i0]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(o,null,{default:t(()=>[s0]),_:1}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[o0]),_:1}),e(r,null,{default:t(()=>[a0]),_:1}),e(n,null,{default:t(()=>[l0]),_:1}),e(h,null,{default:t(()=>[e(S,{floated:"right",color:"primary"},{default:t(()=>[n0,e(p,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:s.relaxedCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(v,{size:"tiny",src:k}),e(c,{verticalAlign:"middle"},{default:t(()=>[e(l,{as:"a"},{default:t(()=>[u0]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(v,{size:"tiny",src:k}),e(c,{verticalAlign:"middle"},{default:t(()=>[e(l,{as:"a"},{default:t(()=>[d0]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(v,{size:"tiny",src:k}),e(c,{verticalAlign:"middle"},{default:t(()=>[e(l,{as:"a"},{default:t(()=>[r0]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:s.verticalAlignCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[c0]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,{verticalAlign:"middle"},{default:t(()=>[e(l,null,{default:t(()=>[m0]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,{verticalAlign:"bottom"},{default:t(()=>[e(l,null,{default:t(()=>[_0]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Floated Content",description:"Any content element can be floated left or right",code:s.floatedContentCode},{default:t(()=>[e(m,null,{default:t(()=>[e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,{verticalAlign:"middle"},{default:t(()=>[e(l,null,{default:t(()=>[p0]),_:1}),e(n,null,{default:t(()=>[h0]),_:1}),e(h,null,{default:t(()=>[e(S,{floated:"right"},{default:t(()=>[g0]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,{verticalAlign:"middle"},{default:t(()=>[e(l,null,{default:t(()=>[f0]),_:1}),e(n,null,{default:t(()=>[b0]),_:1}),e(h,null,{default:t(()=>[e(S,{floated:"right"},{default:t(()=>[v0]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,{verticalAlign:"middle"},{default:t(()=>[e(l,null,{default:t(()=>[$0]),_:1}),e(n,null,{default:t(()=>[w0]),_:1}),e(h,null,{default:t(()=>[e(S,{floated:"right"},{default:t(()=>[C0]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:s.invertedCode},{default:t(()=>[e(R,{inverted:""},{default:t(()=>[e(m,{inverted:""},{default:t(()=>[e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[y0]),_:1}),e(r,null,{default:t(()=>[A0,k0]),_:1}),e(n,null,{default:t(()=>[S0]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(v,{size:"small",src:k}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[z0]),_:1}),e(r,null,{default:t(()=>[T0,R0]),_:1}),e(n,null,{default:t(()=>[V0]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var x0=x(lT,[["render",E0]]);const D0=E({name:"StatisticDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
  <sui-statistic value="22" label="Faves" />
  <sui-statistic value="31,200" label="Views" />
  <sui-statistic value="22" label="Members" />
</sui-statistic-group>`,valueCode:`<sui-statistic-group>
  <sui-statistic value="22" label="Faves" />
  <sui-statistic>
    <sui-statistic-value text>
      Three<br>
      Thousand
    </sui-statistic-value>
    <sui-statistic-label>Signups</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-icon name="plane" /> 5
    </sui-statistic-value>
    <sui-statistic-label>Flights</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-image circular inline src="/images/avatar/small/joe.jpg" />
      42
    </sui-statistic-value>
    <sui-statistic-label>Team Members</sui-statistic-label>
  </sui-statistic>
</sui-statistic-group>`,labelCode:'<sui-statistic value="2,204" label="Views" />',horizontalCode:'<sui-statistic horizontal value="2,204" label="Views" />',coloredCode:`<sui-statistic-group>
  <sui-statistic color="red" value="27" label="Red" />
  <sui-statistic color="orange" value="8" label="Orange" />
  <sui-statistic color="yellow" value="28" label="Yellow" />
  <sui-statistic color="olive" value="7" label="Olive" />
  <sui-statistic color="green" value="14" label="Green" />
  <sui-statistic color="teal" value="82" label="Teal" />
  <sui-statistic color="blue" value="1" label="Blue" />
  <sui-statistic color="violet" value="22" label="Violet" />
  <sui-statistic color="purple" value="23" label="Purple" />
  <sui-statistic color="pink" value="15" label="Pink" />
  <sui-statistic color="brown" value="36" label="Brown" />
  <sui-statistic color="grey" value="49" label="Grey" />
</sui-statistic-group>`,invertedCode:`<sui-segment inverted>
  <sui-statistic-group inverted>
    <sui-statistic color="red" value="27" label="Red" />
    <sui-statistic color="orange" value="8" label="Orange" />
    <sui-statistic color="yellow" value="28" label="Yellow" />
    <sui-statistic color="olive" value="7" label="Olive" />
    <sui-statistic color="green" value="14" label="Green" />
    <sui-statistic color="teal" value="82" label="Teal" />
    <sui-statistic color="blue" value="1" label="Blue" />
    <sui-statistic color="violet" value="22" label="Violet" />
    <sui-statistic color="purple" value="23" label="Purple" />
    <sui-statistic color="pink" value="15" label="Pink" />
    <sui-statistic color="brown" value="36" label="Brown" />
    <sui-statistic color="grey" value="49" label="Grey" />
  </sui-statistic-group>
</sui-segment>`,stackableCode:`<sui-statistic-group stackable>
  <sui-statistic color="red" value="27" label="Red" />
  <sui-statistic color="orange" value="8" label="Orange" />
  <sui-statistic color="yellow" value="28" label="Yellow" />
  <sui-statistic color="olive" value="7" label="Olive" />
  <sui-statistic color="green" value="14" label="Green" />
  <sui-statistic color="teal" value="82" label="Teal" />
  <sui-statistic color="blue" value="1" label="Blue" />
  <sui-statistic color="violet" value="22" label="Violet" />
  <sui-statistic color="purple" value="23" label="Purple" />
  <sui-statistic color="pink" value="15" label="Pink" />
  <sui-statistic color="brown" value="36" label="Brown" />
  <sui-statistic color="grey" value="49" label="Grey" />
</sui-statistic-group>`,evenlyDividedCode:`<sui-statistic-group :widths="4">
  <sui-statistic value="22" label="Faves" />
  <sui-statistic>
    <sui-statistic-value text>
      Three<br>
      Thousand
    </sui-statistic-value>
    <sui-statistic-label>Signups</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-icon name="plane" /> 5
    </sui-statistic-value>
    <sui-statistic-label>Flights</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-image circular inline src="/images/avatar/small/joe.jpg" />
      42
    </sui-statistic-value>
    <sui-statistic-label>Team Members</sui-statistic-label>
  </sui-statistic>
</sui-statistic-group>`,floatedCode:`<sui-segment>
  <sui-statistic floated="right" value="2,204" label="Views" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
  <sui-statistic floated="left" value="2,204" label="Views" />
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
</sui-segment>`,sizeCode:`<sui-statistic size="mini" value="2,204" label="Views" />
<sui-statistic size="tiny" value="2,204" label="Views" />
<sui-statistic size="small" value="2,204" label="Views" />
<sui-statistic value="2,204" label="Views" />
<sui-statistic size="large" value="2,204" label="Views" />
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),B0=i("Types"),N0=i("Content"),P0=i(" Three"),j0=d("br",null,null,-1),F0=i(" Thousand "),q0=i("Signups"),M0=i(" 5 "),L0=i("Flights"),I0=i(" 42 "),J0=i("Team Members"),H0=i("Variations"),O0=i(" Three"),G0=d("br",null,null,-1),U0=i(" Thousand "),Y0=i("Signups"),W0=i(" 5 "),K0=i("Flights"),Q0=i(" 42 "),X0=i("Team Members"),Z0=d("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),e6=d("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),t6=d("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),i6=d("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function s6(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-statistic"),l=u("doc-example"),r=u("sui-statistic-group"),n=u("sui-statistic-value"),h=u("sui-statistic-label"),c=u("sui-icon"),a=u("sui-image"),m=u("sui-segment"),f=u("sui-container");return z(),V("div",null,[e(b,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),e(f,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[B0]),_:1}),e(l,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:s.statisticCode},{default:t(()=>[e(o,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),e(l,{title:"Statistic Group",description:"A group of statistics",code:s.groupCode},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{value:"22",label:"Faves"}),e(o,{value:"31,200",label:"Views"}),e(o,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[N0]),_:1}),e(l,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:s.valueCode},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{value:"22",label:"Faves"}),e(o,null,{default:t(()=>[e(n,{text:""},{default:t(()=>[P0,j0,F0]),_:1}),e(h,null,{default:t(()=>[q0]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(n,null,{default:t(()=>[e(c,{name:"plane"}),M0]),_:1}),e(h,null,{default:t(()=>[L0]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(n,null,{default:t(()=>[e(a,{circular:"",inline:"",src:he}),I0]),_:1}),e(h,null,{default:t(()=>[J0]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(l,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:s.labelCode},{default:t(()=>[e(o,{value:"2,204",label:"Views"})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[H0]),_:1}),e(l,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:s.horizontalCode},{default:t(()=>[e(o,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),e(l,{title:"Colored",description:"A statistic can be formatted to be different colors",code:s.coloredCode},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(l,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:s.invertedCode},{default:t(()=>[e(m,{inverted:""},{default:t(()=>[e(r,{inverted:""},{default:t(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),e(l,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:s.stackableCode},{default:t(()=>[e(r,{stackable:""},{default:t(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(l,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:s.evenlyDividedCode},{default:t(()=>[e(r,{widths:4},{default:t(()=>[e(o,{value:"22",label:"Faves"}),e(o,null,{default:t(()=>[e(n,{text:""},{default:t(()=>[O0,G0,U0]),_:1}),e(h,null,{default:t(()=>[Y0]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(n,null,{default:t(()=>[e(c,{name:"plane"}),W0]),_:1}),e(h,null,{default:t(()=>[K0]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(n,null,{default:t(()=>[e(a,{circular:"",inline:"",src:he}),Q0]),_:1}),e(h,null,{default:t(()=>[X0]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(l,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:s.floatedCode},{default:t(()=>[e(m,null,{default:t(()=>[e(o,{floated:"right",value:"2,204",label:"Views"}),Z0,e6,e(o,{floated:"left",value:"2,204",label:"Views"}),t6,i6]),_:1})]),_:1},8,["code"]),e(l,{title:"Size",description:"A statistic can vary in size",code:s.sizeCode},{default:t(()=>[e(o,{size:"mini",value:"2,204",label:"Views"}),e(o,{size:"tiny",value:"2,204",label:"Views"}),e(o,{size:"small",value:"2,204",label:"Views"}),e(o,{value:"2,204",label:"Views"}),e(o,{size:"large",value:"2,204",label:"Views"}),e(o,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}var o6=x(D0,[["render",s6]]);const a6=E({name:"AccordionDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{accordionCode:`<sui-accordion>
  <sui-accordion-tab title="What is a dog?">
    <p>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households
      across the world.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="What kinds of dogs are there?">
    <p>
      There are many breeds of dogs. Each breed varies in size and
      temperament. Owners often select a breed of dog that they find to be
      compatible with their own lifestyle and desires from a companion.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="How do you acquire a dog?">
    <p>
      Three common ways for a prospective owner to acquire a dog is from
      pet shops, private owners, or shelters.
    </p>
    <p>
      A pet shop may be the most convenient way to buy a dog. Buying a dog
      from a private owner allows you to assess the pedigree and
      upbringing of your dog before choosing to take it home. Lastly,
      finding your dog from a shelter, helps give a good home to a dog who
      may not find one so readily.
    </p>
  </sui-accordion-tab>
</sui-accordion>`,styledCode:`<sui-accordion styled>
  <sui-accordion-tab title="What is a dog?">
    <p>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households
      across the world.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="What kinds of dogs are there?">
    <p>
      There are many breeds of dogs. Each breed varies in size and
      temperament. Owners often select a breed of dog that they find to be
      compatible with their own lifestyle and desires from a companion.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="How do you acquire a dog?">
    <p>
      Three common ways for a prospective owner to acquire a dog is from
      pet shops, private owners, or shelters.
    </p>
    <p>
      A pet shop may be the most convenient way to buy a dog. Buying a dog
      from a private owner allows you to assess the pedigree and
      upbringing of your dog before choosing to take it home. Lastly,
      finding your dog from a shelter, helps give a good home to a dog who
      may not find one so readily.
    </p>
  </sui-accordion-tab>
</sui-accordion>`,fluidCode:`<sui-accordion fluid styled>
  <sui-accordion-tab title="What is a dog?">
    <p>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households
      across the world.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="What kinds of dogs are there?">
    <p>
      There are many breeds of dogs. Each breed varies in size and
      temperament. Owners often select a breed of dog that they find to be
      compatible with their own lifestyle and desires from a companion.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="How do you acquire a dog?">
    <p>
      Three common ways for a prospective owner to acquire a dog is from
      pet shops, private owners, or shelters.
    </p>
    <p>
      A pet shop may be the most convenient way to buy a dog. Buying a dog
      from a private owner allows you to assess the pedigree and
      upbringing of your dog before choosing to take it home. Lastly,
      finding your dog from a shelter, helps give a good home to a dog who
      may not find one so readily.
    </p>
  </sui-accordion-tab>
</sui-accordion>`,invertedCode:`<sui-segment inverted>
  <sui-accordion inverted>
    <sui-accordion-tab title="What is a dog?">
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    </sui-accordion-tab>
    <sui-accordion-tab title="What kinds of dogs are there?">
      <p>
        There are many breeds of dogs. Each breed varies in size and
        temperament. Owners often select a breed of dog that they find to be
        compatible with their own lifestyle and desires from a companion.
      </p>
    </sui-accordion-tab>
    <sui-accordion-tab title="How do you acquire a dog?">
      <p>
        Three common ways for a prospective owner to acquire a dog is from
        pet shops, private owners, or shelters.
      </p>
      <p>
        A pet shop may be the most convenient way to buy a dog. Buying a dog
        from a private owner allows you to assess the pedigree and
        upbringing of your dog before choosing to take it home. Lastly,
        finding your dog from a shelter, helps give a good home to a dog who
        may not find one so readily.
      </p>
    </sui-accordion-tab>
  </sui-accordion>
</sui-segment>`}}}),l6=i("Types"),n6=d("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),u6=d("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),d6=d("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),r6=d("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),c6=d("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),m6=d("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),_6=d("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),p6=d("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),h6=i("Variations"),g6=d("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),f6=d("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),b6=d("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),v6=d("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),$6=d("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),w6=d("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),C6=d("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),y6=d("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),A6=i("Usage"),k6=d("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),S6=d("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),z6=d("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),T6=d("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function R6(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-accordion-tab"),l=u("sui-accordion"),r=u("doc-example"),n=u("sui-segment"),h=u("sui-container");return z(),V("div",null,[e(b,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),e(h,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[l6]),_:1}),e(r,{title:"Accordion",description:"A standard accordion",code:s.accordionCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{title:"What is a dog?"},{default:t(()=>[n6]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:t(()=>[u6]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:t(()=>[d6,r6]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Styled",description:"A styled accordion adds basic formatting",code:s.styledCode},{default:t(()=>[e(l,{styled:""},{default:t(()=>[e(o,{title:"What is a dog?"},{default:t(()=>[c6]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:t(()=>[m6]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:t(()=>[_6,p6]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[h6]),_:1}),e(r,{title:"Fluid",description:"An accordion can take up the width of its container",code:s.fluidCode},{default:t(()=>[e(l,{fluid:"",styled:""},{default:t(()=>[e(o,{title:"What is a dog?"},{default:t(()=>[g6]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:t(()=>[f6]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:t(()=>[b6,v6]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:s.invertedCode},{default:t(()=>[e(n,{inverted:""},{default:t(()=>[e(l,{inverted:""},{default:t(()=>[e(o,{title:"What is a dog?"},{default:t(()=>[$6]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:t(()=>[w6]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:t(()=>[C6,y6]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[A6]),_:1}),e(r,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:s.multipleCode},{default:t(()=>[e(l,{multiple:""},{default:t(()=>[e(o,{title:"What is a dog?"},{default:t(()=>[k6]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:t(()=>[S6]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:t(()=>[z6,T6]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var V6=x(a6,[["render",R6]]);const E6=E({name:"CalendarDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{calendar1:T(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}}),x6=i("Types");function D6(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-calendar"),l=u("doc-example"),r=u("sui-container");return z(),V("div",null,[e(b,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),e(r,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[x6]),_:1}),e(l,{title:"Calendar",description:"A standard calendar",code:s.calendarCode},{default:t(()=>[e(o,{modelValue:s.calendar1,"onUpdate:modelValue":g[0]||(g[0]=n=>s.calendar1=n),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}var B6=x(E6,[["render",D6]]);const N6=E({name:"PropertyListTable",props:{properties:Array}}),P6=i("Name"),j6=i("Type"),F6=i("Default"),q6=i("Description");function M6(s,g,C,y,$,A){const b=u("sui-table-header-cell"),_=u("sui-table-row"),o=u("sui-table-header"),l=u("sui-table-cell"),r=u("sui-table-body"),n=u("sui-table");return z(),I(n,{celled:""},{default:t(()=>[e(o,null,{default:t(()=>[e(_,null,{default:t(()=>[e(b,null,{default:t(()=>[P6]),_:1}),e(b,null,{default:t(()=>[j6]),_:1}),e(b,null,{default:t(()=>[F6]),_:1}),e(b,null,{default:t(()=>[q6]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[(z(!0),V(H,null,O(s.properties,h=>(z(),I(_,{key:h.name},{default:t(()=>[e(l,null,{default:t(()=>[i(P(h.name),1)]),_:2},1024),e(l,null,{default:t(()=>[i(P(h.type),1)]),_:2},1024),e(l,null,{default:t(()=>[i(P(h.default),1)]),_:2},1024),e(l,null,{default:t(()=>[i(P(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}var $e=x(N6,[["render",M6]]);const L6=E({name:"CheckboxDoc",components:{DocPageHeader:j,DocExample:B,PropertyListTable:$e},setup(){const s=T(!1),g='<sui-checkbox label="Make my profile visible" v-model="checked" />',C=T([]),y=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,$=T(!1),A='<sui-checkbox toggle v-model="toggle" />',b=T(!1);return{checked:s,checkboxCode:g,selected:C,multipleCode:y,toggle:$,toggleCode:A,slider:b,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),I6=i("Types"),J6={class:"ui form"},H6={class:"grouped fields"},O6={class:"field"},G6={class:"field"},U6={class:"field"},Y6=i("Properties"),W6=i("Events"),K6=i("Name"),Q6=i("Description");function X6(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-checkbox"),l=u("doc-example"),r=u("property-list-table"),n=u("sui-table-header-cell"),h=u("sui-table-row"),c=u("sui-table-header"),a=u("sui-table-cell"),m=u("sui-table-body"),f=u("sui-table"),v=u("sui-container");return z(),V("div",null,[e(b,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),e(v,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[I6]),_:1}),e(l,{title:"Checkbox",description:"A standard checkbox",code:s.checkboxCode},{default:t(()=>[e(o,{label:"Make my profile visible",modelValue:s.checked,"onUpdate:modelValue":g[0]||(g[0]=p=>s.checked=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(l,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:s.multipleCode},{default:t(()=>[d("div",J6,[d("div",H6,[d("div",O6,[e(o,{label:"Apple",value:"Apple",modelValue:s.selected,"onUpdate:modelValue":g[1]||(g[1]=p=>s.selected=p)},null,8,["modelValue"])]),d("div",G6,[e(o,{label:"Banana",value:"Banana",modelValue:s.selected,"onUpdate:modelValue":g[2]||(g[2]=p=>s.selected=p)},null,8,["modelValue"])]),d("div",U6,[e(o,{label:"Chocolate",value:"Chocolate",modelValue:s.selected,"onUpdate:modelValue":g[3]||(g[3]=p=>s.selected=p)},null,8,["modelValue"])])])]),i(" selected : "+P(s.selected),1)]),_:1},8,["code"]),e(l,{title:"Toggle",description:"A checkbox can toggle",code:s.toggleCode},{default:t(()=>[e(o,{toggle:"",modelValue:s.toggle,"onUpdate:modelValue":g[4]||(g[4]=p=>s.toggle=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(l,{title:"Slider",description:"A checkbox can look like a slider",code:s.sliderCode},{default:t(()=>[e(o,{slider:"",modelValue:s.slider,"onUpdate:modelValue":g[5]||(g[5]=p=>s.slider=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[Y6]),_:1}),e(r,{properties:s.properties},null,8,["properties"]),e(_,{as:"h2",dividing:""},{default:t(()=>[W6]),_:1}),e(f,{celled:""},{default:t(()=>[e(c,null,{default:t(()=>[e(h,null,{default:t(()=>[e(n,null,{default:t(()=>[K6]),_:1}),e(n,null,{default:t(()=>[Q6]),_:1})]),_:1})]),_:1}),e(m,null,{default:t(()=>[(z(!0),V(H,null,O(s.events,p=>(z(),I(h,{key:p.name},{default:t(()=>[e(a,null,{default:t(()=>[i(P(p.name),1)]),_:2},1024),e(a,null,{default:t(()=>[i(P(p.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}var Z6=x(L6,[["render",X6]]);const e7=E({name:"DimmerDoc",components:{DocPageHeader:j,DocExample:B},setup(){const s=`<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active />
</sui-dimmer-dimmable>`,g=`<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active>
    <sui-header as="h2" icon inverted>
      <sui-icon name="heart" />
      Dimmed Message!
    </sui-header>
  </sui-dimmer>
</sui-dimmer-dimmable>`,C=T(!1);return{dimmerCode:s,contentDimmerCode:g,active:C,pageDimmerCode:`<div>
  <sui-button labeled icon @click="active = true">
    <sui-icon name="plus" />
    Show
  </sui-button>

  <sui-dimmer :active="active" page @click="active = false">
    <sui-header as="h2" icon inverted>
      <sui-icon name="heart" />
      Dimmed Message!
      <sui-header-subheader>Dimmer sub-header</sui-header-subheader>
    </sui-header>
  </sui-dimmer>
</div>`}}}),t7=i("Types"),i7=i("Overlayable Section"),s7=i("Overlayable Section"),o7=i(" Dimmed Message! "),a7=i(" Show "),l7=i(" Dimmed Message! "),n7=i("Dimmer sub-header");function u7(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-image"),l=u("sui-image-group"),r=u("sui-dimmer"),n=u("sui-dimmer-dimmable"),h=u("doc-example"),c=u("sui-icon"),a=u("sui-button"),m=u("sui-header-subheader"),f=u("sui-container");return z(),V("div",null,[e(b,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),e(f,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[t7]),_:1}),e(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:s.dimmerCode},{default:t(()=>[e(n,null,{default:t(()=>[e(_,{as:"h3"},{default:t(()=>[i7]),_:1}),e(l,{size:"small"},{default:t(()=>[e(o,{src:k}),e(o,{src:k}),e(o,{src:k})]),_:1}),e(o,{size:"medium",src:U}),e(r,{active:""})]),_:1})]),_:1},8,["code"]),e(h,{title:"Content Dimmer",description:"A dimmer can display content",code:s.contentDimmerCode},{default:t(()=>[e(n,null,{default:t(()=>[e(_,{as:"h3"},{default:t(()=>[s7]),_:1}),e(l,{size:"small"},{default:t(()=>[e(o,{src:k}),e(o,{src:k}),e(o,{src:k})]),_:1}),e(o,{size:"medium",src:U}),e(r,{active:""},{default:t(()=>[e(_,{as:"h2",icon:"",inverted:""},{default:t(()=>[e(c,{name:"heart"}),o7]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:s.pageDimmerCode},{default:t(()=>[d("div",null,[e(a,{labeled:"",icon:"",onClick:g[0]||(g[0]=v=>s.active=!0)},{default:t(()=>[e(c,{name:"plus"}),a7]),_:1}),e(r,{active:s.active,page:"",onClick:g[1]||(g[1]=v=>s.active=!1)},{default:t(()=>[e(_,{as:"h2",icon:"",inverted:""},{default:t(()=>[e(c,{name:"heart"}),l7,e(m,null,{default:t(()=>[n7]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}var d7=x(e7,[["render",u7]]);const r7=E({name:"DropdownDoc",components:{DocPageHeader:j,DocExample:B},setup(){const s=`<sui-dropdown text="File">
  <sui-dropdown-menu>
    <sui-dropdown-item text="New" />
    <sui-dropdown-item text="Open..." description="ctrl + o" />
    <sui-dropdown-item text="Save as..." description="ctrl + s" />
    <sui-dropdown-item text="Rename" description="ctrl + r" />
    <sui-dropdown-item text="Make a copy" />
    <sui-dropdown-item icon="folder" text="Move to folder" />
    <sui-dropdown-item icon="trash" text="Move to trash" />
    <sui-divider />
    <sui-dropdown-item text="Download As..." />
    <sui-dropdown-item text="Publish To Web" />
    <sui-dropdown-item text="E-mail Collaborators" />
  </sui-dropdown-menu>
</sui-dropdown>`,g=T(null),C=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,y=T(null),$=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],A=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,b=T(null),_=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],o=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,l=T(null),r=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,n=T(null),h=`<sui-dropdown
  selection
  multiple
  fluid
  search
  v-model="selected5"
  placeholder="Skills"
  :options="[
    { value: 'af', flag: 'af', text: 'Afghanistan' },
    { value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { value: 'al', flag: 'al', text: 'Albania' },
    { value: 'dz', flag: 'dz', text: 'Algeria' },
    { value: 'as', flag: 'as', text: 'American Samoa' }
  ]"
/>`,c=T(null),a=`<sui-dropdown
  button
  floating
  labeled
  search
  icon="world"
  v-model="selected6"
  :options="[
    { text: 'Arabic', value: 'Arabic' },
    { text: 'Chinese', value: 'Chinese' },
    { text: 'Danish', value: 'Danish' },
    { text: 'Dutch', value: 'Dutch' },
    { text: 'English', value: 'English' },
    { text: 'French', value: 'French' },
    { text: 'German', value: 'German' },
    { text: 'Greek', value: 'Greek' },
    { text: 'Hungarian', value: 'Hungarian' },
    { text: 'Italian', value: 'Italian' },
    { text: 'Japanese', value: 'Japanese' },
    { text: 'Korean', value: 'Korean' },
    { text: 'Lithuanian', value: 'Lithuanian' },
    { text: 'Persian', value: 'Persian' },
    { text: 'Polish', value: 'Polish' },
    { text: 'Portuguese', value: 'Portuguese' },
    { text: 'Russian', value: 'Russian' },
    { text: 'Spanish', value: 'Spanish' },
    { text: 'Swedish', value: 'Swedish' },
    { text: 'Turkish', value: 'Turkish' },
    { text: 'Vietnamese', value: 'Vietnamese' }
  ]"
  text="Select Language"
/>`,m=T(null),f=`<sui-dropdown
  text="Filter Posts"
  icon="filter"
  floating
  labeled
  button
  searchInMenu
  v-model="selected7"
  :options="[
    {
      text: 'Important',
      value: 'Important',
      label: { color: 'red', empty: true, circular: true },
    },
    {
      text: 'Announcement',
      value: 'Announcement',
      label: { color: 'blue', empty: true, circular: true },
    },
    {
      text: 'Cannot Fix',
      value: 'Cannot Fix',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      text: 'News',
      value: 'News',
      label: { color: 'purple', empty: true, circular: true },
    },
    {
      text: 'Enhancement',
      value: 'Enhancement',
      label: { color: 'orange', empty: true, circular: true },
    },
    {
      text: 'Change Declined',
      value: 'Change Declined',
      label: { empty: true, circular: true },
    },
    {
      text: 'Off Topic',
      value: 'Off Topic',
      label: { color: 'yellow', empty: true, circular: true },
    },
    {
      text: 'Interesting',
      value: 'Interesting',
      label: { color: 'pink', empty: true, circular: true },
    },
    {
      text: 'Discussion',
      value: 'Discussion',
      label: { color: 'green', empty: true, circular: true },
    },
  ]"
/>`,v=T({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:s,selected1:g,selectionCode:C,selected2:y,searchSelectionOptions:$,searchSelectionCode:A,selected3:b,clearableSelectionOptions:_,clearableSelectionCode:o,selected4:l,multipleCode:r,selected5:n,multipleCode2:h,selected6:c,searchDropdownCode:a,selected7:m,searchInMenuCode:f,selected8:v,inlineCode:`<span>
  Show me posts by <sui-dropdown
    inline
    v-model="selected8"
    :options="[
      {
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
      },
      {
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
      },
      {
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
      },
      {
        text: 'Christian',
        value: 'Christian',
        image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
      },
    ]"
  />
</span>`,pointingCode:`<sui-dropdown
  icon="wrench"
  button
  pointing="top left"
>
  <sui-dropdown-menu>
    <sui-dropdown-item text="New" />
    <sui-dropdown-item text="Save As" />
    <sui-dropdown-item text="Edit" />
  </sui-dropdown-menu>
</sui-dropdown>`,floatingCode:`<sui-button-group color="teal">
  <sui-button>Save</sui-button>
  <sui-dropdown
    floating
    button
    icon="dropdown"
  >
    <sui-dropdown-menu>
      <sui-dropdown-item text="Edit Post" icon="edit" />
      <sui-dropdown-item text="Remove Post" icon="delete" />
      <sui-dropdown-item text="Hide Post" icon="hide" />
    </sui-dropdown-menu>
  </sui-dropdown>
</sui-button-group>`}}}),c7=i("Types"),m7=i(" Show me posts by "),_7=i("Save");function p7(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-dropdown-item"),l=u("sui-divider"),r=u("sui-dropdown-menu"),n=u("sui-dropdown"),h=u("doc-example"),c=u("sui-button"),a=u("sui-button-group"),m=u("sui-container");return z(),V("div",null,[e(b,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),e(m,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[c7]),_:1}),e(h,{title:"Dropdown",description:"A dropdown",code:s.dropdownCode},{default:t(()=>[e(n,{text:"File"},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{text:"New"}),e(o,{text:"Open...",description:"ctrl + o"}),e(o,{text:"Save as...",description:"ctrl + s"}),e(o,{text:"Rename",description:"ctrl + r"}),e(o,{text:"Make a copy"}),e(o,{icon:"folder",text:"Move to folder"}),e(o,{icon:"trash",text:"Move to trash"}),e(l),e(o,{text:"Download As..."}),e(o,{text:"Publish To Web"}),e(o,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:s.selectionCode},{default:t(()=>[e(n,{selection:"",placeholder:"Pet",modelValue:s.selected1,"onUpdate:modelValue":g[0]||(g[0]=f=>s.selected1=f),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:s.searchSelectionCode},{default:t(()=>[e(n,{search:"",selection:"",fluid:"",modelValue:s.selected2,"onUpdate:modelValue":g[1]||(g[1]=f=>s.selected2=f),options:s.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:s.clearableSelectionCode},{default:t(()=>[e(n,{clearable:"",selection:"",modelValue:s.selected3,"onUpdate:modelValue":g[2]||(g[2]=f=>s.selected3=f),options:s.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:s.multipleCode},{default:t(()=>[e(n,{selection:"",multiple:"",fluid:"",modelValue:s.selected4,"onUpdate:modelValue":g[3]||(g[3]=f=>s.selected4=f),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{code:s.multipleCode2},{default:t(()=>[e(n,{selection:"",multiple:"",fluid:"",search:"",modelValue:s.selected5,"onUpdate:modelValue":g[4]||(g[4]=f=>s.selected5=f),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:s.searchDropdownCode},{default:t(()=>[e(n,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:s.selected6,"onUpdate:modelValue":g[5]||(g[5]=f=>s.selected6=f),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:s.searchInMenuCode},{default:t(()=>[e(n,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:s.selected7,"onUpdate:modelValue":g[6]||(g[6]=f=>s.selected7=f),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:s.inlineCode},{default:t(()=>[d("span",null,[m7,e(n,{inline:"",modelValue:s.selected8,"onUpdate:modelValue":g[7]||(g[7]=f=>s.selected8=f),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),e(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:s.pointingCode},{default:t(()=>[e(n,{icon:"wrench",button:"",pointing:"top left"},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{text:"New"}),e(o,{text:"Save As"}),e(o,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:s.floatingCode},{default:t(()=>[e(a,{color:"teal"},{default:t(()=>[e(c,null,{default:t(()=>[_7]),_:1}),e(n,{floating:"",button:"",icon:"dropdown"},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{text:"Edit Post",icon:"edit"}),e(o,{text:"Remove Post",icon:"delete"}),e(o,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var h7=x(r7,[["render",p7]]);const g7=E({name:"EmbedDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}}),f7=i("Types"),b7=i("Variations");function v7(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-embed"),l=u("doc-example"),r=u("sui-container");return z(),V("div",null,[e(b,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),e(r,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[f7]),_:1}),e(l,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:s.youtubeCode},{default:t(()=>[e(o,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[b7]),_:1}),e(l,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:s.aspectRatioCode},{default:t(()=>[e(o,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}var $7=x(g7,[["render",v7]]),w7="/vue-fomantic-ui/images/avatar/large/rachel.png";const C7=E({name:"ModalDoc",components:{DocPageHeader:j,DocExample:B},setup(){const s=`<div>
  <sui-button @click="modal1 = true">Show Modal</sui-button>
  <sui-modal v-model="modal1">
    <sui-modal-header>Select a Photo</sui-modal-header>
    <sui-modal-content image>
      <sui-image
        wrapped
        size="medium"
        src="/images/avatar/large/rachel.png"
      />
      <sui-modal-description>
        <sui-header>Default Profile Image</sui-header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button positive @click="modal1 = false">OK</sui-button>
    </sui-modal-actions>
  </sui-modal>
</div>`,g=T(!1),C=T(!1);return{modalCode:s,modal1:g,basicModal:C,basicCode:`<div>
  <sui-button @click="basicModal = true">Basic Modal</sui-button>
  <sui-modal basic v-model="basicModal">
    <sui-modal-header icon>
      <sui-icon name="archive" />
      Archive Old Messages
    </sui-modal-header>
    <sui-modal-content>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button basic color="red" inverted @click="basicModal = false">
        <sui-icon name="remove" /> No
      </sui-button>
      <sui-button basic color="green">
        <sui-icon name="checkmark" /> Yes
      </sui-button>
    </sui-modal-actions>
  </sui-modal>
</div>`}}}),y7=i("Types"),A7=i("Show Modal"),k7=i("Select a Photo"),S7=i("Default Profile Image"),z7=d("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),T7=d("p",null,"Is it okay to use this photo?",-1),R7=i("OK"),V7=i("Basic Modal"),E7=i(" Archive Old Messages "),x7=d("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),D7=i(" No "),B7=i(" Yes ");function N7(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-button"),l=u("sui-modal-header"),r=u("sui-image"),n=u("sui-modal-description"),h=u("sui-modal-content"),c=u("sui-modal-actions"),a=u("sui-modal"),m=u("doc-example"),f=u("sui-icon"),v=u("sui-container");return z(),V("div",null,[e(b,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),e(v,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[y7]),_:1}),e(m,{title:"Modal",description:"A standard modal",code:s.modalCode},{default:t(()=>[d("div",null,[e(o,{onClick:g[0]||(g[0]=p=>s.modal1=!0)},{default:t(()=>[A7]),_:1}),e(a,{modelValue:s.modal1,"onUpdate:modelValue":g[2]||(g[2]=p=>s.modal1=p)},{default:t(()=>[e(l,null,{default:t(()=>[k7]),_:1}),e(h,{image:""},{default:t(()=>[e(r,{wrapped:"",size:"medium",src:w7}),e(n,null,{default:t(()=>[e(_,null,{default:t(()=>[S7]),_:1}),z7,T7]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(o,{positive:"",onClick:g[1]||(g[1]=p=>s.modal1=!1)},{default:t(()=>[R7]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e(m,{title:"Basic",description:"A modal can reduce its complexity",code:s.basicCode},{default:t(()=>[d("div",null,[e(o,{onClick:g[3]||(g[3]=p=>s.basicModal=!0)},{default:t(()=>[V7]),_:1}),e(a,{basic:"",modelValue:s.basicModal,"onUpdate:modelValue":g[5]||(g[5]=p=>s.basicModal=p)},{default:t(()=>[e(l,{icon:""},{default:t(()=>[e(f,{name:"archive"}),E7]),_:1}),e(h,null,{default:t(()=>[x7]),_:1}),e(c,null,{default:t(()=>[e(o,{basic:"",color:"red",inverted:"",onClick:g[4]||(g[4]=p=>s.basicModal=!1)},{default:t(()=>[e(f,{name:"remove"}),D7]),_:1}),e(o,{basic:"",color:"green"},{default:t(()=>[e(f,{name:"checkmark"}),B7]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}var P7=x(C7,[["render",N7]]),j7="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg";const F7=E({name:"PopupDoc",components:{DocPageHeader:j,DocExample:B},setup(){const s=T(null),g=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,C=T(null),y=T(null),$=T(null),A=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
<sui-image avatar src="/images/avatar/small/stevie.jpg" ref="titledTrigger2" />
<sui-image avatar src="/images/avatar/small/matt.jpg" ref="titledTrigger3" />
<sui-popup
  :trigger="titledTrigger1"
  header="Elliot Fu"
  content="Elliot has been a member since July 2012"
/>
<sui-popup
  :trigger="titledTrigger2"
  header="Stevie Feliciano"
  content="Stevie has been a member since August 2013"
/>
<sui-popup
  :trigger="titledTrigger3"
  header="Matt"
  content="Matt has been a member since July 2014"
/>`,b=T(null),_=`<sui-card ref="triggerTriger">
  <sui-image src="/images/movies/totoro-horizontal.jpg" />
  <sui-card-content>
    <sui-card-header>My Neighbor Totoro</sui-card-header>
    <sui-card-description>
      Two sisters move to the country with their father in order to be
      closer to their hospitalized mother, and discover the surrounding
      trees are inhabited by magical spirits.
    </sui-card-description>
  </sui-card-content>
</sui-card>
<sui-popup
  :trigger="triggerTriger"
  header="User Rating"
>
  <sui-rating icon="star" :defaultRating="3" :maxRating="4" />
</sui-popup>`,o=T(null),l=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,r=T(null),n=T(null),h=T(null),c=`<sui-icon name="heart" circular ref="wideTrigger1" />
<sui-icon name="heart" circular ref="wideTrigger2" />
<sui-icon name="heart" circular ref="wideTrigger3" />

<sui-popup :trigger="wideTrigger1">
  Hello. This is a regular pop-up which does not allow for lots of content.
  You cannot fit a lot of words here as the paragraphs will be pretty
  narrow.
</sui-popup>
<sui-popup :trigger="wideTrigger2" wide>
  Hello. This is a wide pop-up which allows for lots of content with
  additional space. You can fit a lot of words here and the paragraphs will
  be pretty wide.
</sui-popup>
<sui-popup :trigger="wideTrigger3" wide="very">
  Hello. This is a very wide pop-up which allows for lots of content with
  additional space. You can fit a lot of words here and the paragraphs will
  be pretty wide.
</sui-popup>`,a=T(null),m=T(null),f=T(null),v=T(null),p=T(null),w=T(null),S=T(null),R=T(null),F=`<sui-button ref="positionTrigger1">Top Left</sui-button>
<sui-button ref="positionTrigger2">Top Center</sui-button>
<sui-button ref="positionTrigger3">Top Right</sui-button>

<sui-divider />

<sui-button ref="positionTrigger4">Bottom Left</sui-button>
<sui-button ref="positionTrigger5">Bottom Center</sui-button>
<sui-button ref="positionTrigger6">Bottom Right</sui-button>

<sui-divider />

<sui-button ref="positionTrigger7">Right Center</sui-button>
<sui-button ref="positionTrigger8">Left Center</sui-button>

<sui-popup :trigger="positionTrigger1" position="top left" content="I am positioned to the top left" />
<sui-popup :trigger="positionTrigger2" position="top center" content="I am positioned to the top center" />
<sui-popup :trigger="positionTrigger3" position="top right" content="I am positioned to the top right" />
<sui-popup :trigger="positionTrigger4" position="bottom left" content="I am positioned to the bottom left" />
<sui-popup :trigger="positionTrigger5" position="bottom center" content="I am positioned to the bottom center" />
<sui-popup :trigger="positionTrigger6" position="bottom right" content="I am positioned to the bottom right" />
<sui-popup :trigger="positionTrigger7" position="right center" content="I am positioned to the right center" />
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,M=T(null),L=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
<sui-popup :trigger="flowingTrigger" flowing>
  <sui-grid centered divided :columns="3">
    <sui-grid-column textAlign="center">
      <sui-header as="h4">Basic Plan</sui-header>
      <p>
        <b>2</b> projects, $10 a month
      </p>
      <sui-button>Choose</sui-button>
    </sui-grid-column>
    <sui-grid-column textAlign="center">
      <sui-header as="h4">Business Plan</sui-header>
      <p>
        <b>5</b> projects, $20 a month
      </p>
      <sui-button>Choose</sui-button>
    </sui-grid-column>
    <sui-grid-column textAlign="center">
      <sui-header as="h4">Premium Plan</sui-header>
      <p>
        <b>8</b> projects, $25 a month
      </p>
      <sui-button>Choose</sui-button>
    </sui-grid-column>
  </sui-grid>
</sui-popup>`,q=T(null),Y=T(null),K=T(null),Q=T(null),ie=T(null),se=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,oe=T(null),ae=T(null);return{popupTrigger:s,popupCode:g,titledTrigger1:C,titledTrigger2:y,titledTrigger3:$,titledCode:A,triggerTriger:b,triggerCode:_,basicTrigger:o,basicCode:l,wideTrigger1:r,wideTrigger2:n,wideTrigger3:h,wideCode:c,positionTrigger1:a,positionTrigger2:m,positionTrigger3:f,positionTrigger4:v,positionTrigger5:p,positionTrigger6:w,positionTrigger7:S,positionTrigger8:R,positionCode:F,flowingTrigger:M,flowingCode:L,sizeTrigger1:q,sizeTrigger2:Y,sizeTrigger3:K,sizeTrigger4:Q,sizeTrigger5:ie,sizeCode:se,invertedTrigger1:oe,invertedTrigger2:ae,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
<sui-button icon ref="invertedTrigger2">
  <sui-icon name="add" />
</sui-button>

<sui-popup
  :trigger="invertedTrigger1"
  content="Hello. This is an inverted popup"  
  inverted
/>
<sui-popup
  :trigger="invertedTrigger2"
  content="Hello. This is an inverted popup"
  inverted
/>`}}}),q7=i("Types"),M7=i(" Add users to your feed "),L7=i("My Neighbor Totoro"),I7=i(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. "),J7=i("Variations"),H7=i("Top Left"),O7=i("Top Center"),G7=i("Top Right"),U7=i("Bottom Left"),Y7=i("Bottom Center"),W7=i("Bottom Right"),K7=i("Right Center"),Q7=i("Left Center"),X7=i("Show Flowing Popup"),Z7=i("Basic Plan"),e9=d("p",null,[d("b",null,"2"),i(" projects, $10 a month ")],-1),t9=i("Choose"),i9=i("Business Plan"),s9=d("p",null,[d("b",null,"5"),i(" projects, $20 a month ")],-1),o9=i("Choose"),a9=i("Premium Plan"),l9=d("p",null,[d("b",null,"8"),i(" projects, $25 a month ")],-1),n9=i("Choose"),u9=i(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. "),d9=i(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. "),r9=i(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ");function c9(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-icon"),l=u("sui-button"),r=u("sui-popup"),n=u("doc-example"),h=u("sui-image"),c=u("sui-card-header"),a=u("sui-card-description"),m=u("sui-card-content"),f=u("sui-card"),v=u("sui-rating"),p=u("sui-divider"),w=u("sui-grid-column"),S=u("sui-grid"),R=u("sui-container");return z(),V("div",null,[e(b,{title:"Popup",sub:"A popup displays additional information on top of a page"}),e(R,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[q7]),_:1}),e(n,{title:"Popup",description:"An element can specify popup content to appear",code:s.popupCode},{default:t(()=>[e(l,{icon:"",ref:"popupTrigger"},{default:t(()=>[e(o,{name:"add"})]),_:1},512),e(r,{trigger:s.popupTrigger},{default:t(()=>[M7]),_:1},8,["trigger"])]),_:1},8,["code"]),e(n,{title:"Titled",description:"An element can specify popup content with a title",code:s.titledCode},{default:t(()=>[e(h,{avatar:"",src:G,ref:"titledTrigger1"},null,512),e(h,{avatar:"",src:ee,ref:"titledTrigger2"},null,512),e(h,{avatar:"",src:me,ref:"titledTrigger3"},null,512),e(r,{trigger:s.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),e(r,{trigger:s.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),e(r,{trigger:s.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),e(n,{title:"Trigger",description:"A trigger can be complex element",code:s.triggerCode},{default:t(()=>[e(f,{ref:"triggerTriger"},{default:t(()=>[e(h,{src:j7}),e(m,null,{default:t(()=>[e(c,null,{default:t(()=>[L7]),_:1}),e(a,null,{default:t(()=>[I7]),_:1})]),_:1})]),_:1},512),e(r,{trigger:s.triggerTriger,header:"User Rating"},{default:t(()=>[e(v,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[J7]),_:1}),e(n,{title:"Basic",description:"A popup can provide more basic formatting",code:s.basicCode},{default:t(()=>[e(l,{icon:"",ref:"basicTrigger"},{default:t(()=>[e(o,{name:"add"})]),_:1},512),e(r,{trigger:s.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),e(n,{title:"Position",description:"A popup can be position around its trigger",code:s.positionCode},{default:t(()=>[e(l,{ref:"positionTrigger1"},{default:t(()=>[H7]),_:1},512),e(l,{ref:"positionTrigger2"},{default:t(()=>[O7]),_:1},512),e(l,{ref:"positionTrigger3"},{default:t(()=>[G7]),_:1},512),e(p),e(l,{ref:"positionTrigger4"},{default:t(()=>[U7]),_:1},512),e(l,{ref:"positionTrigger5"},{default:t(()=>[Y7]),_:1},512),e(l,{ref:"positionTrigger6"},{default:t(()=>[W7]),_:1},512),e(p),e(l,{ref:"positionTrigger7"},{default:t(()=>[K7]),_:1},512),e(l,{ref:"positionTrigger8"},{default:t(()=>[Q7]),_:1},512),e(r,{trigger:s.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),e(r,{trigger:s.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),e(r,{trigger:s.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),e(r,{trigger:s.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),e(r,{trigger:s.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),e(r,{trigger:s.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),e(r,{trigger:s.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),e(r,{trigger:s.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),e(n,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:s.flowingCode},{default:t(()=>[e(l,{ref:"flowingTrigger"},{default:t(()=>[X7]),_:1},512),e(r,{trigger:s.flowingTrigger,flowing:""},{default:t(()=>[e(S,{centered:"",divided:"",columns:3},{default:t(()=>[e(w,{textAlign:"center"},{default:t(()=>[e(_,{as:"h4"},{default:t(()=>[Z7]),_:1}),e9,e(l,null,{default:t(()=>[t9]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:t(()=>[e(_,{as:"h4"},{default:t(()=>[i9]),_:1}),s9,e(l,null,{default:t(()=>[o9]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:t(()=>[e(_,{as:"h4"},{default:t(()=>[a9]),_:1}),l9,e(l,null,{default:t(()=>[n9]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(n,{title:"Size",description:"A popup can vary in size",code:s.sizeCode},{default:t(()=>[e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),e(r,{size:"mini",content:"Hello. This is a mini popup",trigger:s.sizeTrigger1},null,8,["trigger"]),e(r,{size:"tiny",content:"Hello. This is a tiny popup",trigger:s.sizeTrigger2},null,8,["trigger"]),e(r,{size:"small",content:"Hello. This is a small popup",trigger:s.sizeTrigger3},null,8,["trigger"]),e(r,{size:"large",content:"Hello. This is a large popup",trigger:s.sizeTrigger4},null,8,["trigger"]),e(r,{size:"huge",content:"Hello. This is a huge popup",trigger:s.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),e(n,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:s.wideCode},{default:t(()=>[e(o,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),e(o,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),e(o,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),e(r,{trigger:s.wideTrigger1},{default:t(()=>[u9]),_:1},8,["trigger"]),e(r,{trigger:s.wideTrigger2,wide:""},{default:t(()=>[d9]),_:1},8,["trigger"]),e(r,{trigger:s.wideTrigger3,wide:"very"},{default:t(()=>[r9]),_:1},8,["trigger"])]),_:1},8,["code"]),e(n,{title:"Inverted",description:"A popup can have its colors inverted",code:s.invertedCode},{default:t(()=>[e(o,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),e(l,{icon:"",ref:"invertedTrigger2"},{default:t(()=>[e(o,{name:"add"})]),_:1},512),e(r,{trigger:s.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),e(r,{trigger:s.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}var m9=x(F7,[["render",c9]]);const _9=E({name:"ProgressDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
  <sui-progress inverted :percent="41" label="Uploading Files" progress />
  <sui-progress inverted :percent="100" label="Success" success progress />
  <sui-progress inverted :percent="100" label="Warning" warning progress />
  <sui-progress inverted :percent="100" label="Error" error progress />
</sui-segment>`,attachedCode:`<sui-segment>
  <sui-progress :percent="47" attached="top" />
  La la la la
  <sui-progress :percent="26" attached="bottom" />
</sui-segment>`,sizeCode:`<sui-progress :percent="88" size="tiny" label="tiny" />
<sui-progress :percent="100" size="small" label="small" success />
<sui-progress :percent="83" label="standard" />
<sui-progress :percent="73" size="large" label="large" />
<sui-progress :percent="94" size="big" label="big" />`,colorCode:`<sui-progress :percent="32" color="red" />
<sui-progress :percent="53" color="orange" />
<sui-progress :percent="13" color="yellow" />
<sui-progress :percent="37" color="olive" />
<sui-progress :percent="83" color="green" />
<sui-progress :percent="24" color="teal" />
<sui-progress :percent="88" color="blue" />
<sui-progress :percent="41" color="violet" />
<sui-progress :percent="47" color="purple" />
<sui-progress :percent="30" color="pink" />
<sui-progress :percent="68" color="brown" />
<sui-progress :percent="35" color="grey" />
<sui-progress :percent="73" color="black" />`}}}),p9=i("Types"),h9=i("Content"),g9=i("States"),f9=i("Variations"),b9=i(" La la la la ");function v9(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-progress"),l=u("doc-example"),r=u("sui-segment"),n=u("sui-container");return z(),V("div",null,[e(b,{title:"Progress",sub:"A progress bar shows the progression of a task"}),e(n,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[p9]),_:1}),e(l,{title:"Standard",description:"A standard progress bar",code:s.standardCode},{default:t(()=>[e(o,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(l,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:s.indicatingCode},{default:t(()=>[e(o,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[h9]),_:1}),e(l,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:s.barCode},{default:t(()=>[e(o,{percent:33})]),_:1},8,["code"]),e(l,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:s.progressCode},{default:t(()=>[e(o,{percent:14,progress:""})]),_:1},8,["code"]),e(l,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:s.centeredCode},{default:t(()=>[e(o,{percent:68,progress:"centered"})]),_:1},8,["code"]),e(l,{title:"Label",description:"A progress element can contain a label",code:s.labelCode},{default:t(()=>[e(o,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[g9]),_:1}),e(l,{title:"Active",description:"A progress bar can show activity",code:s.activeCode},{default:t(()=>[e(o,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),e(l,{title:"Success",description:"A progress bar can show a success state",code:s.successCode},{default:t(()=>[e(o,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),e(l,{title:"Warning",description:"A progress bar can show a warning state",code:s.warningCode},{default:t(()=>[e(o,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),e(l,{title:"Error",description:"A progress bar can show an error state",code:s.errorCode},{default:t(()=>[e(o,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),e(l,{title:"Disabled",description:"A progress bar can be disabled",code:s.disabledCode},{default:t(()=>[e(o,{percent:25,disabled:""})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[f9]),_:1}),e(l,{title:"Inverted",description:"A progress bar can have its colors inverted",code:s.invertedCode},{default:t(()=>[e(r,{inverted:""},{default:t(()=>[e(o,{inverted:"",percent:41,label:"Uploading Files",progress:""}),e(o,{inverted:"",percent:100,label:"Success",success:"",progress:""}),e(o,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),e(o,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),e(l,{title:"Attached",description:"A progress bar can show progress of an element",code:s.attachedCode},{default:t(()=>[e(r,null,{default:t(()=>[e(o,{percent:47,attached:"top"}),b9,e(o,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),e(l,{title:"Size",description:"A progress bar can vary in size",code:s.sizeCode},{default:t(()=>[e(o,{percent:88,size:"tiny",label:"tiny"}),e(o,{percent:100,size:"small",label:"small",success:""}),e(o,{percent:83,label:"standard"}),e(o,{percent:73,size:"large",label:"large"}),e(o,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),e(l,{title:"Color",description:"A progress bar can have different colors",code:s.colorCode},{default:t(()=>[e(o,{percent:32,color:"red"}),e(o,{percent:53,color:"orange"}),e(o,{percent:13,color:"yellow"}),e(o,{percent:37,color:"olive"}),e(o,{percent:83,color:"green"}),e(o,{percent:24,color:"teal"}),e(o,{percent:88,color:"blue"}),e(o,{percent:41,color:"violet"}),e(o,{percent:47,color:"purple"}),e(o,{percent:30,color:"pink"}),e(o,{percent:68,color:"brown"}),e(o,{percent:35,color:"grey"}),e(o,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}var $9=x(_9,[["render",v9]]);const w9=E({name:"RatingDoc",components:{DocPageHeader:j,DocExample:B},setup(){return{ratingCode:"<sui-rating  />",iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
<sui-rating :defaultRating="2" :maxRating="4" icon="heart" color="red" />
<sui-rating :defaultRating="2" :maxRating="4" icon="female" color="purple" />
<sui-rating :defaultRating="2" :maxRating="4" icon="male" color="blue" />
<sui-rating :defaultRating="2" :maxRating="4" icon="cloud" color="grey" />
<sui-rating :defaultRating="2" :maxRating="4" icon="cat" color="pink" />
<sui-rating :defaultRating="2" :maxRating="4" icon="circle" color="orange" />`,colorCode:`<sui-rating :defaultRating="1" :maxRating="7" color="red" />
<sui-rating :defaultRating="2" :maxRating="7" color="orange" />
<sui-rating :defaultRating="3" :maxRating="7" color="yellow" />
<sui-rating :defaultRating="4" :maxRating="7" color="olive" />
<sui-rating :defaultRating="5" :maxRating="7" color="green" />
<sui-rating :defaultRating="6" :maxRating="7" color="teal" />
<sui-rating :defaultRating="6" :maxRating="7" color="blue" />
<sui-rating :defaultRating="5" :maxRating="7" color="violet" />
<sui-rating :defaultRating="4" :maxRating="7" color="purple" />
<sui-rating :defaultRating="3" :maxRating="7" color="pink" />
<sui-rating :defaultRating="2" :maxRating="7" color="brown" />
<sui-rating :defaultRating="1" :maxRating="7" color="grey" />
<sui-rating :defaultRating="1" :maxRating="7" color="black" />`,disabledCode:'<sui-rating disabled :defaultRating="3" :maxRating="5" color="yellow" />',sizeCode:`<sui-rating size="mini" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="tiny" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="small" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="large" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="huge" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`}}}),C9=i("Types"),y9=d("br",null,null,-1),A9=d("br",null,null,-1),k9=d("br",null,null,-1),S9=d("br",null,null,-1),z9=d("br",null,null,-1),T9=d("br",null,null,-1),R9=d("br",null,null,-1),V9=d("br",null,null,-1),E9=d("br",null,null,-1),x9=d("br",null,null,-1),D9=d("br",null,null,-1),B9=d("br",null,null,-1),N9=d("br",null,null,-1),P9=d("br",null,null,-1),j9=d("br",null,null,-1),F9=d("br",null,null,-1),q9=d("br",null,null,-1),M9=d("br",null,null,-1),L9=d("br",null,null,-1),I9=d("br",null,null,-1),J9=d("br",null,null,-1),H9=d("br",null,null,-1),O9=d("br",null,null,-1),G9=d("br",null,null,-1),U9=d("br",null,null,-1),Y9=d("br",null,null,-1),W9=d("br",null,null,-1),K9=d("br",null,null,-1),Q9=d("br",null,null,-1),X9=d("br",null,null,-1),Z9=d("br",null,null,-1),eR=d("br",null,null,-1),tR=d("br",null,null,-1),iR=d("br",null,null,-1),sR=d("br",null,null,-1),oR=d("br",null,null,-1),aR=i("States"),lR=i("Variations"),nR=d("br",null,null,-1),uR=d("br",null,null,-1),dR=d("br",null,null,-1),rR=d("br",null,null,-1),cR=d("br",null,null,-1),mR=d("br",null,null,-1),_R=d("br",null,null,-1),pR=d("br",null,null,-1),hR=d("br",null,null,-1),gR=d("br",null,null,-1),fR=d("br",null,null,-1),bR=d("br",null,null,-1);function vR(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-rating"),l=u("doc-example"),r=u("sui-container");return z(),V("div",null,[e(b,{title:"Rating",sub:"A rating indicates user interest in content"}),e(r,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[C9]),_:1}),e(l,{title:"Rating",description:"A Basic rating",code:s.ratingCode},{default:t(()=>[e(o)]),_:1},8,["code"]),e(l,{title:"Icon",description:"You can use any available icon as rating indicator",code:s.iconCode},{default:t(()=>[e(o,{defaultRating:2,maxRating:4,color:"yellow"}),y9,A9,e(o,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),k9,S9,e(o,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),z9,T9,e(o,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),R9,V9,e(o,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),E9,x9,e(o,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),D9,B9,e(o,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),e(l,{title:"Color",description:"You can specify any color of the FUI color palette",code:s.colorCode},{default:t(()=>[e(o,{defaultRating:1,maxRating:7,color:"red"}),N9,P9,e(o,{defaultRating:2,maxRating:7,color:"orange"}),j9,F9,e(o,{defaultRating:3,maxRating:7,color:"yellow"}),q9,M9,e(o,{defaultRating:4,maxRating:7,color:"olive"}),L9,I9,e(o,{defaultRating:5,maxRating:7,color:"green"}),J9,H9,e(o,{defaultRating:6,maxRating:7,color:"teal"}),O9,G9,e(o,{defaultRating:6,maxRating:7,color:"blue"}),U9,Y9,e(o,{defaultRating:5,maxRating:7,color:"violet"}),W9,K9,e(o,{defaultRating:4,maxRating:7,color:"purple"}),Q9,X9,e(o,{defaultRating:3,maxRating:7,color:"pink"}),Z9,eR,e(o,{defaultRating:2,maxRating:7,color:"brown"}),tR,iR,e(o,{defaultRating:1,maxRating:7,color:"grey"}),sR,oR,e(o,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[aR]),_:1}),e(l,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:s.disabledCode},{default:t(()=>[e(o,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[lR]),_:1}),e(l,{title:"Size",description:"A rating can vary in size",code:s.sizeCode},{default:t(()=>[e(o,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),nR,uR,e(o,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),dR,rR,e(o,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),cR,mR,e(o,{defaultRating:3,maxRating:4,color:"yellow"}),_R,pR,e(o,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),hR,gR,e(o,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),fR,bR,e(o,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"])]),_:1})])}var $R=x(w9,[["render",vR]]);const wR=E({name:"SidebarDoc",components:{DocPageHeader:j,DocExample:B,PropertyListTable:$e},setup(){return{visible1:T(!1),sidebarCode:`<sui-grid :columns="1">
  <sui-grid-column>
    <sui-button @click="visible1 = !visible1" icon>
      <sui-icon name="arrow right" />
    </sui-button>
  </sui-grid-column>
  <sui-grid-column>
    <sui-segment class="pushable">
      <sui-sidebar v-model:visible="visible1" dimmed icon="labeled" inverted>
        <sui-menu-item>
          <sui-icon name="home" />
          Home
        </sui-menu-item>
        <sui-menu-item>
          <sui-icon name="gamepad" />
          Games
        </sui-menu-item>
        <sui-menu-item>
          <sui-icon name="camera" />
          Channels
        </sui-menu-item>
      </sui-sidebar>
      <div class="pusher">
        <sui-segment>
          <sui-header as="h2">Main Header</sui-header>
          <sui-image src="/images/wireframe/paragraph.png" />
        </sui-segment>
      </div>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),CR=i("Types"),yR=i(" Home "),AR=i(" Games "),kR=i(" Channels "),SR={class:"pusher"},zR=i("Main Header"),TR=i("Properties"),RR=i("Events"),VR=i("Name"),ER=i("Description");function xR(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-icon"),l=u("sui-button"),r=u("sui-grid-column"),n=u("sui-menu-item"),h=u("sui-sidebar"),c=u("sui-image"),a=u("sui-segment"),m=u("sui-grid"),f=u("doc-example"),v=u("property-list-table"),p=u("sui-table-header-cell"),w=u("sui-table-row"),S=u("sui-table-header"),R=u("sui-table-cell"),F=u("sui-table-body"),M=u("sui-table"),L=u("sui-container");return z(),V("div",null,[e(b,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),e(L,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[CR]),_:1}),e(f,{title:"Sidebar",description:"A sidebar",code:s.sidebarCode},{default:t(()=>[e(m,{columns:1},{default:t(()=>[e(r,null,{default:t(()=>[e(l,{onClick:g[0]||(g[0]=q=>s.visible1=!s.visible1),icon:""},{default:t(()=>[e(o,{name:"arrow right"})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(a,{class:"pushable"},{default:t(()=>[e(h,{visible:s.visible1,"onUpdate:visible":g[1]||(g[1]=q=>s.visible1=q),dimmed:"",icon:"labeled",inverted:""},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{name:"home"}),yR]),_:1}),e(n,null,{default:t(()=>[e(o,{name:"gamepad"}),AR]),_:1}),e(n,null,{default:t(()=>[e(o,{name:"camera"}),kR]),_:1})]),_:1},8,["visible"]),d("div",SR,[e(a,null,{default:t(()=>[e(_,{as:"h2"},{default:t(()=>[zR]),_:1}),e(c,{src:D})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[TR]),_:1}),e(v,{properties:s.properties},null,8,["properties"]),e(_,{as:"h2",dividing:""},{default:t(()=>[RR]),_:1}),e(M,{celled:""},{default:t(()=>[e(S,null,{default:t(()=>[e(w,null,{default:t(()=>[e(p,null,{default:t(()=>[VR]),_:1}),e(p,null,{default:t(()=>[ER]),_:1})]),_:1})]),_:1}),e(F,null,{default:t(()=>[(z(!0),V(H,null,O(s.events,q=>(z(),I(w,{key:q.name},{default:t(()=>[e(R,null,{default:t(()=>[i(P(q.name),1)]),_:2},1024),e(R,null,{default:t(()=>[i(P(q.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}var DR=x(wR,[["render",xR]]);const BR=E({name:"SliderDoc",components:{DocPageHeader:j,DocExample:B},setup(){const s=T(5),g='<sui-slider v-model="slider1" />',C=T(4),y='<sui-slider labeled v-model="slider2" />',$=T(6),A='<sui-slider labeled="ticked" v-model="slider3" />',b=T(0),_=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["\u03B1", "\u03B2", "\u03B3", "\u03B4", "\u03B5", "\u03B6", "\u03B7", "\u03B8", "\u03B9", "\u03BA", "\u03BB", "\u03BC", "\u03BD", "\u03BE", "\u03BF", "\u03C0", "\u03C1", "\u03C3/\u03C2", "\u03C4", "\u03C5", "\u03C6"]'
  :max="20"
/>`,o=T(40),l='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',r=T([]);r.value.push(20,60);const n='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=T(7),c='<sui-slider disabled v-model="slider7" />',a=T(8),m=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,f=T(3),v='<sui-slider reversed v-model="slider9" />',p=T(18),w='<sui-slider vertical v-model="slider10" :max="20" />',S=T(5),R=T(5),F=T(5),M=T(5),L=T(5),q=T(5),Y=T(5),K=T(5),Q=T(5),ie=T(5),se=T(5),oe=T(5),ae=T(5),_e=`<sui-slider color="red" v-model="redSlider" />
<sui-slider color="orange" v-model="orangeSlider" />
<sui-slider color="yellow" v-model="yellowSlider" />
<sui-slider color="olive" v-model="oliveSlider" />
<sui-slider color="green" v-model="greenSlider" />
<sui-slider color="teal" v-model="tealSlider" />
<sui-slider color="blue" v-model="blueSlider" />
<sui-slider color="violet" v-model="violetSlider" />
<sui-slider color="purple" v-model="purpleSlider" />
<sui-slider color="pink" v-model="pinkSlider" />
<sui-slider color="brown" v-model="brownSlider" />
<sui-slider color="grey" v-model="greySlider" />
<sui-slider color="black" v-model="blackSlider" />`,Ce=`<sui-segment inverted>
  <sui-slider inverted color="red" v-model="redSlider" />
  <sui-slider inverted color="orange" v-model="orangeSlider" />
  <sui-slider inverted color="yellow" v-model="yellowSlider" />
  <sui-slider inverted color="olive" v-model="oliveSlider" />
  <sui-slider inverted color="green" v-model="greenSlider" />
  <sui-slider inverted color="teal" v-model="tealSlider" />
  <sui-slider inverted color="blue" v-model="blueSlider" />
  <sui-slider inverted color="violet" v-model="violetSlider" />
  <sui-slider inverted color="purple" v-model="purpleSlider" />
  <sui-slider inverted color="pink" v-model="pinkSlider" />
  <sui-slider inverted color="brown" v-model="brownSlider" />
  <sui-slider inverted color="grey" v-model="greySlider" />
  <sui-slider inverted color="black" v-model="blackSlider" />
</sui-segment>`,ye=T(5),Ae=T(5),ke=T(5);return{slider1:s,sliderCode:g,slider2:C,labeledSliderCode:y,slider3:$,labeledTickedCode:A,slider4:b,customLabelsCode:_,slider5:o,stepCode:l,slider6:r,rangeCode:n,slider7:h,disabledCode:c,slider8:a,invertedCode:m,slider9:f,reversedCode:v,slider10:p,verticalCode:w,redSlider:S,orangeSlider:R,yellowSlider:F,oliveSlider:M,greenSlider:L,tealSlider:q,blueSlider:Y,violetSlider:K,purpleSlider:Q,pinkSlider:ie,brownSlider:se,greySlider:oe,blackSlider:ae,coloredCode:_e,invertedColoredCode:Ce,smallSlider:ye,largeSlider:Ae,bigSlider:ke,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}}),NR=i("Types"),PR=i("Variations"),jR=i("Properties"),FR=i("Name"),qR=i("Type"),MR=i("Default"),LR=i("Description"),IR=i("Events"),JR=i("Name"),HR=i("Description");function OR(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-slider"),l=u("doc-example"),r=u("sui-segment"),n=u("sui-table-header-cell"),h=u("sui-table-row"),c=u("sui-table-header"),a=u("sui-table-cell"),m=u("sui-table-body"),f=u("sui-table"),v=u("sui-container");return z(),V("div",null,[e(b,{title:"Slider",sub:"A slider allows users to select values within a range"}),e(v,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[NR]),_:1}),e(l,{title:"Slider",description:"A standard slider",code:s.sliderCode},{default:t(()=>[e(o,{modelValue:s.slider1,"onUpdate:modelValue":g[0]||(g[0]=p=>s.slider1=p)},null,8,["modelValue"]),i(" "+P(s.slider1),1)]),_:1},8,["code"]),e(l,{title:"Labeled Slider",description:"A slider that show its labels",code:s.labeledSliderCode},{default:t(()=>[e(o,{labeled:"",modelValue:s.slider2,"onUpdate:modelValue":g[1]||(g[1]=p=>s.slider2=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(l,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:s.labeledTickedCode},{default:t(()=>[e(o,{labeled:"ticked",modelValue:s.slider3,"onUpdate:modelValue":g[2]||(g[2]=p=>s.slider3=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(l,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:s.customLabelsCode},{default:t(()=>[e(o,{modelValue:s.slider4,"onUpdate:modelValue":g[3]||(g[3]=p=>s.slider4=p),labeled:"ticked",labels:["\u03B1","\u03B2","\u03B3","\u03B4","\u03B5","\u03B6","\u03B7","\u03B8","\u03B9","\u03BA","\u03BB","\u03BC","\u03BD","\u03BE","\u03BF","\u03C0","\u03C1","\u03C3/\u03C2","\u03C4","\u03C5","\u03C6"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),e(l,{title:"Step",description:"A slider can change the default step increment",code:s.stepCode},{default:t(()=>[e(o,{modelValue:s.slider5,"onUpdate:modelValue":g[4]||(g[4]=p=>s.slider5=p),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),i(" "+P(s.slider5),1)]),_:1},8,["code"]),e(l,{title:"Range",description:"A range slider which allow you to select a range between two values",code:s.rangeCode},{default:t(()=>[e(o,{modelValue:s.slider6,"onUpdate:modelValue":g[5]||(g[5]=p=>s.slider6=p),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),i(" "+P(s.slider6),1)]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[PR]),_:1}),e(l,{title:"Disabled",description:"A slider can appear disabled",code:s.disabledCode},{default:t(()=>[e(o,{disabled:"",modelValue:s.slider7,"onUpdate:modelValue":g[6]||(g[6]=p=>s.slider7=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(l,{title:"Inverted",description:"A slider can be inverted",code:s.invertedCode},{default:t(()=>[e(r,{inverted:""},{default:t(()=>[e(o,{inverted:"",modelValue:s.slider8,"onUpdate:modelValue":g[7]||(g[7]=p=>s.slider8=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(l,{title:"Reversed",description:"A slider can be reversed",code:s.reversedCode},{default:t(()=>[e(o,{reversed:"",modelValue:s.slider9,"onUpdate:modelValue":g[8]||(g[8]=p=>s.slider9=p)},null,8,["modelValue"]),i(" "+P(s.slider9),1)]),_:1},8,["code"]),e(l,{title:"Vertical",description:"A slider can be vertical",code:s.verticalCode},{default:t(()=>[e(o,{vertical:"",modelValue:s.slider10,"onUpdate:modelValue":g[9]||(g[9]=p=>s.slider10=p),max:20},null,8,["modelValue"]),i(" "+P(s.slider10),1)]),_:1},8,["code"]),e(l,{title:"Colored",description:"A slider can be different colors",code:s.coloredCode},{default:t(()=>[e(o,{color:"red",modelValue:s.redSlider,"onUpdate:modelValue":g[10]||(g[10]=p=>s.redSlider=p)},null,8,["modelValue"]),e(o,{color:"orange",modelValue:s.orangeSlider,"onUpdate:modelValue":g[11]||(g[11]=p=>s.orangeSlider=p)},null,8,["modelValue"]),e(o,{color:"yellow",modelValue:s.yellowSlider,"onUpdate:modelValue":g[12]||(g[12]=p=>s.yellowSlider=p)},null,8,["modelValue"]),e(o,{color:"olive",modelValue:s.oliveSlider,"onUpdate:modelValue":g[13]||(g[13]=p=>s.oliveSlider=p)},null,8,["modelValue"]),e(o,{color:"green",modelValue:s.greenSlider,"onUpdate:modelValue":g[14]||(g[14]=p=>s.greenSlider=p)},null,8,["modelValue"]),e(o,{color:"teal",modelValue:s.tealSlider,"onUpdate:modelValue":g[15]||(g[15]=p=>s.tealSlider=p)},null,8,["modelValue"]),e(o,{color:"blue",modelValue:s.blueSlider,"onUpdate:modelValue":g[16]||(g[16]=p=>s.blueSlider=p)},null,8,["modelValue"]),e(o,{color:"violet",modelValue:s.violetSlider,"onUpdate:modelValue":g[17]||(g[17]=p=>s.violetSlider=p)},null,8,["modelValue"]),e(o,{color:"purple",modelValue:s.purpleSlider,"onUpdate:modelValue":g[18]||(g[18]=p=>s.purpleSlider=p)},null,8,["modelValue"]),e(o,{color:"pink",modelValue:s.pinkSlider,"onUpdate:modelValue":g[19]||(g[19]=p=>s.pinkSlider=p)},null,8,["modelValue"]),e(o,{color:"brown",modelValue:s.brownSlider,"onUpdate:modelValue":g[20]||(g[20]=p=>s.brownSlider=p)},null,8,["modelValue"]),e(o,{color:"grey",modelValue:s.greySlider,"onUpdate:modelValue":g[21]||(g[21]=p=>s.greySlider=p)},null,8,["modelValue"]),e(o,{color:"black",modelValue:s.blackSlider,"onUpdate:modelValue":g[22]||(g[22]=p=>s.blackSlider=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(l,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:s.invertedColoredCode},{default:t(()=>[e(r,{inverted:""},{default:t(()=>[e(o,{inverted:"",color:"red",modelValue:s.redSlider,"onUpdate:modelValue":g[23]||(g[23]=p=>s.redSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"orange",modelValue:s.orangeSlider,"onUpdate:modelValue":g[24]||(g[24]=p=>s.orangeSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"yellow",modelValue:s.yellowSlider,"onUpdate:modelValue":g[25]||(g[25]=p=>s.yellowSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"olive",modelValue:s.oliveSlider,"onUpdate:modelValue":g[26]||(g[26]=p=>s.oliveSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"green",modelValue:s.greenSlider,"onUpdate:modelValue":g[27]||(g[27]=p=>s.greenSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"teal",modelValue:s.tealSlider,"onUpdate:modelValue":g[28]||(g[28]=p=>s.tealSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"blue",modelValue:s.blueSlider,"onUpdate:modelValue":g[29]||(g[29]=p=>s.blueSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"violet",modelValue:s.violetSlider,"onUpdate:modelValue":g[30]||(g[30]=p=>s.violetSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"purple",modelValue:s.purpleSlider,"onUpdate:modelValue":g[31]||(g[31]=p=>s.purpleSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"pink",modelValue:s.pinkSlider,"onUpdate:modelValue":g[32]||(g[32]=p=>s.pinkSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"brown",modelValue:s.brownSlider,"onUpdate:modelValue":g[33]||(g[33]=p=>s.brownSlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"grey",modelValue:s.greySlider,"onUpdate:modelValue":g[34]||(g[34]=p=>s.greySlider=p)},null,8,["modelValue"]),e(o,{inverted:"",color:"black",modelValue:s.blackSlider,"onUpdate:modelValue":g[35]||(g[35]=p=>s.blackSlider=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(l,{title:"Size",description:"A slider can have different sizes",code:s.sizeCode},{default:t(()=>[e(o,{size:"small",color:"red",modelValue:s.smallSlider,"onUpdate:modelValue":g[36]||(g[36]=p=>s.smallSlider=p)},null,8,["modelValue"]),e(o,{size:"large",color:"yellow",modelValue:s.largeSlider,"onUpdate:modelValue":g[37]||(g[37]=p=>s.largeSlider=p)},null,8,["modelValue"]),e(o,{size:"big",color:"olive",modelValue:s.bigSlider,"onUpdate:modelValue":g[38]||(g[38]=p=>s.bigSlider=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[jR]),_:1}),e(f,{celled:""},{default:t(()=>[e(c,null,{default:t(()=>[e(h,null,{default:t(()=>[e(n,null,{default:t(()=>[FR]),_:1}),e(n,null,{default:t(()=>[qR]),_:1}),e(n,null,{default:t(()=>[MR]),_:1}),e(n,null,{default:t(()=>[LR]),_:1})]),_:1})]),_:1}),e(m,null,{default:t(()=>[(z(!0),V(H,null,O(s.properties,p=>(z(),I(h,{key:p.name},{default:t(()=>[e(a,null,{default:t(()=>[i(P(p.name),1)]),_:2},1024),e(a,null,{default:t(()=>[i(P(p.type),1)]),_:2},1024),e(a,null,{default:t(()=>[i(P(p.default),1)]),_:2},1024),e(a,null,{default:t(()=>[i(P(p.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(_,{as:"h2",dividing:""},{default:t(()=>[IR]),_:1}),e(f,{celled:""},{default:t(()=>[e(c,null,{default:t(()=>[e(h,null,{default:t(()=>[e(n,null,{default:t(()=>[JR]),_:1}),e(n,null,{default:t(()=>[HR]),_:1})]),_:1})]),_:1}),e(m,null,{default:t(()=>[(z(!0),V(H,null,O(s.events,p=>(z(),I(h,{key:p.name},{default:t(()=>[e(a,null,{default:t(()=>[i(P(p.name),1)]),_:2},1024),e(a,null,{default:t(()=>[i(P(p.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}var GR=x(BR,[["render",OR]]);const UR=E({name:"TabDoc",components:{DocPageHeader:j,DocExample:B,PropertyListTable:$e},setup(){return{basicCode:`<sui-tab>
  <sui-tab-panel header="First">Content A</sui-tab-panel>
  <sui-tab-panel header="Second">Content B</sui-tab-panel>
  <sui-tab-panel header="Third">Content C</sui-tab-panel>
</sui-tab>`,pointingCode:`<sui-tab pointing>
    <sui-tab-panel header="First">Content A</sui-tab-panel>
    <sui-tab-panel header="Second">Content B</sui-tab-panel>
    <sui-tab-panel header="Third">Content C</sui-tab-panel>
  </sui-tab>
</doc-example>`,secondaryCode:`<sui-tab secondary>
    <sui-tab-panel header="First">Content A</sui-tab-panel>
    <sui-tab-panel header="Second">Content B</sui-tab-panel>
    <sui-tab-panel header="Third">Content C</sui-tab-panel>
  </sui-tab>
</doc-example>`,textCode:`<sui-tab text>
  <sui-tab-panel header="First">Content A</sui-tab-panel>
  <sui-tab-panel header="Second">Content B</sui-tab-panel>
  <sui-tab-panel header="Third">Content C</sui-tab-panel>
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}}),YR=i("Examples"),WR=i("Content A"),KR=i("Content B"),QR=i("Content C"),XR=i("Content A"),ZR=i("Content B"),eV=i("Content C"),tV=i("Content A"),iV=i("Content B"),sV=i("Content C"),oV=i("Content A"),aV=i("Content B"),lV=i("Content C"),nV=i("Properties"),uV=i("Tab"),dV=i("TabPanel"),rV=i("Events"),cV=i("Name"),mV=i("Description");function _V(s,g,C,y,$,A){const b=u("doc-page-header"),_=u("sui-header"),o=u("sui-tab-panel"),l=u("sui-tab"),r=u("doc-example"),n=u("property-list-table"),h=u("sui-table-header-cell"),c=u("sui-table-row"),a=u("sui-table-header"),m=u("sui-table-cell"),f=u("sui-table-body"),v=u("sui-table"),p=u("sui-container");return z(),V("div",null,[e(b,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),e(p,{class:"main"},{default:t(()=>[e(_,{as:"h2",dividing:""},{default:t(()=>[YR]),_:1}),e(r,{title:"Basic",code:s.basicCode},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{header:"First"},{default:t(()=>[WR]),_:1}),e(o,{header:"Second"},{default:t(()=>[KR]),_:1}),e(o,{header:"Third"},{default:t(()=>[QR]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Pointing",code:s.pointingCode},{default:t(()=>[e(l,{pointing:""},{default:t(()=>[e(o,{header:"First"},{default:t(()=>[XR]),_:1}),e(o,{header:"Second"},{default:t(()=>[ZR]),_:1}),e(o,{header:"Third"},{default:t(()=>[eV]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Secondary",code:s.secondaryCode},{default:t(()=>[e(l,{secondary:""},{default:t(()=>[e(o,{header:"First"},{default:t(()=>[tV]),_:1}),e(o,{header:"Second"},{default:t(()=>[iV]),_:1}),e(o,{header:"Third"},{default:t(()=>[sV]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Text",code:s.textCode},{default:t(()=>[e(l,{text:""},{default:t(()=>[e(o,{header:"First"},{default:t(()=>[oV]),_:1}),e(o,{header:"Second"},{default:t(()=>[aV]),_:1}),e(o,{header:"Third"},{default:t(()=>[lV]),_:1})]),_:1})]),_:1},8,["code"]),e(_,{as:"h2",dividing:""},{default:t(()=>[nV]),_:1}),e(_,{as:"h3"},{default:t(()=>[uV]),_:1}),e(n,{properties:s.tabProperties},null,8,["properties"]),e(_,{as:"h3"},{default:t(()=>[dV]),_:1}),e(n,{properties:s.tabPanelProperties},null,8,["properties"]),e(_,{as:"h2",dividing:""},{default:t(()=>[rV]),_:1}),e(v,{celled:""},{default:t(()=>[e(a,null,{default:t(()=>[e(c,null,{default:t(()=>[e(h,null,{default:t(()=>[cV]),_:1}),e(h,null,{default:t(()=>[mV]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[(z(!0),V(H,null,O(s.events,w=>(z(),I(c,{key:w.name},{default:t(()=>[e(m,null,{default:t(()=>[i(P(w.name),1)]),_:2},1024),e(m,null,{default:t(()=>[i(P(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}var pV=x(UR,[["render",_V]]);const hV=[{path:"/",component:at,children:[{path:"/",component:vt},{path:"elements/button",component:jo},{path:"elements/container",component:Zo},{path:"elements/divider",component:va},{path:"elements/emoji",component:qa},{path:"elements/flag",component:Oa},{path:"elements/header",component:on},{path:"elements/icon",component:yn},{path:"elements/image",component:On},{path:"elements/input",component:eu},{path:"elements/label",component:Nr},{path:"elements/list",component:l_},{path:"elements/loader",component:v_},{path:"elements/rail",component:q_},{path:"elements/reveal",component:W_},{path:"elements/segment",component:yh},{path:"elements/step",component:Ug},{path:"collections/breadcrumb",component:Af},{path:"collections/form",component:Vf},{path:"collections/grid",component:E1},{path:"collections/menu",component:Tv},{path:"collections/message",component:v$},{path:"collections/table",component:rk},{path:"views/advertisement",component:fk},{path:"views/card",component:aS},{path:"views/comment",component:pz},{path:"views/feed",component:aT},{path:"views/item",component:x0},{path:"views/statistic",component:o6},{path:"modules/accordion",component:V6},{path:"modules/calendar",component:B6},{path:"modules/checkbox",component:Z6},{path:"modules/dimmer",component:d7},{path:"modules/dropdown",component:h7},{path:"modules/embed",component:$7},{path:"modules/modal",component:P7},{path:"modules/popup",component:m9},{path:"modules/progress",component:$9},{path:"modules/rating",component:$R},{path:"modules/sidebar",component:DR},{path:"modules/slider",component:GR},{path:"modules/tab",component:pV}]}],gV=Le({history:Ie("/vue-fomantic-ui/"),routes:hV});const we=Je(Ye);we.use(gV);we.use(He);we.mount("#app");
