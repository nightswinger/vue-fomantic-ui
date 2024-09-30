import{e as g,o as n,c as l,w as e,a as r,b as t,u as a,aj as d,K as m,ak as o,d as i,U as k,G as F,r as b,al as w,v as h,F as v,x as y,t as f,I as D,O as x,am as A,Y as I,an as j,ao as $,R as G,f as M,j as z,D as E}from"./index-1OxQlk_2.js";import{_}from"./DocSection-DUJg2L7o.js";const V=i("span",null,"Joined in 2013",-1),N=i("span",{class:"right floated"},"14h",-1),J={class:"right floated"},B=`<template>
  <Card>
    <Image src="/vue-fomantic-ui/images/avatar/large/kristy.png" />
    <CardContent header="Kristy">
      <template #meta>
        <span>Joined in 2013</span>
      </template>
      <template #description>
        Kristy is an art director living in New York.
      </template>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <Image avatar src="/vue-fomantic-ui/images/avatar/large/elliot.jpg" />
      Elliot
      <template #meta>
        <span class="right floated">14h</span>
      </template>
    </CardContent>
    <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    <CardContent>
      <span class="right floated">
        <Icon name="heart outline like" />
        17 likes
      </span>
      <Icon name="comment" />
      3 comments
    </CardContent>
    <CardContent extra>
      <Input
        icon="heart outline"
        iconPosition="left"
        size="large"
        transparent
        placeholder="Add Comment..."
      />
    </CardContent>
  </Card>
</template>`,S=g({__name:"CardDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Card",code:B},{description:e(()=>[r(" A single card. ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/avatar/large/kristy.png"}),t(a(o),{header:"Kristy"},{meta:e(()=>[V]),description:e(()=>[r(" Kristy is an art director living in New York. ")]),_:1}),t(a(o),{extra:""},{default:e(()=>[i("a",null,[t(a(k),{name:"user"}),r(" 22 Friends ")])]),_:1})]),_:1}),t(a(d),null,{default:e(()=>[t(a(o),null,{meta:e(()=>[N]),default:e(()=>[t(a(m),{avatar:"",src:"/vue-fomantic-ui/images/avatar/large/elliot.jpg"}),r(" Elliot ")]),_:1}),t(a(m),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(o),null,{default:e(()=>[i("span",J,[t(a(k),{name:"heart outline like"}),r(" 17 likes ")]),t(a(k),{name:"comment"}),r(" 3 comments ")]),_:1}),t(a(o),{extra:""},{default:e(()=>[t(a(F),{icon:"heart outline",iconPosition:"left",size:"large",transparent:"",placeholder:"Add Comment..."})]),_:1})]),_:1})]),_:1}))}}),H=`<template>
  <CardGroup>
    <Card v-for="item in items">
      <CardContent>
        <template #header>
          {{ item.header }}
          <Image size="mini" floated="right" :src="item.avatar" />
        </template>
        <template #meta>
          {{ item.meta }}
        </template>
        <template #description>
          {{ item.description }}
        </template>
      </CardContent>
      <CardContent extra>
        <ButtonGroup :widths="2">
          <Button basic color="green">Approve</Button>
          <Button basic color="red">Decline</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  </CardGroup>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardGroup,
  Button,
  ButtonGroup,
  Image,
} from 'vue-fomantic-ui'

const items = ref([
  {
    header: 'Elliot Fu',
    avatar: '/images/avatar/large/elliot.jpg',
    meta: 'Friends of Veronika',
    description: 'Elliot requested permission to view your contact details',
  },
  {
    header: 'Jenny Hess',
    avatar: '/images/avatar/large/jenny.jpg',
    meta: 'New Member',
    description: 'Jenny wants to add you to the group best friends',
  }
])
<\/script>`,Y=g({__name:"CardsDoc",setup(p){const s=b([{header:"Elliot Fu",avatar:"/vue-fomantic-ui/images/avatar/large/elliot.jpg",meta:"Friends of Veronika",description:"Elliot requested permission to view your contact details"},{header:"Jenny Hess",avatar:"/vue-fomantic-ui/images/avatar/large/jenny.jpg",meta:"New Member",description:"Jenny wants to add you to the group best friends"}]);return(u,C)=>(n(),l(_,{label:"Cards",code:H},{description:e(()=>[r(" A group of cards. ")]),example:e(()=>[t(a(w),null,{default:e(()=>[(n(!0),h(v,null,y(s.value,c=>(n(),l(a(d),null,{default:e(()=>[t(a(o),null,{header:e(()=>[r(f(c.header)+" ",1),t(a(m),{size:"mini",floated:"right",src:c.avatar},null,8,["src"])]),meta:e(()=>[r(f(c.meta),1)]),description:e(()=>[r(f(c.description),1)]),_:2},1024),t(a(o),{extra:""},{default:e(()=>[t(a(D),{widths:2},{default:e(()=>[t(a(x),{basic:"",color:"green"},{default:e(()=>[r("Approve")]),_:1}),t(a(x),{basic:"",color:"red"},{default:e(()=>[r("Decline")]),_:1})]),_:1})]),_:1})]),_:2},1024))),256))]),_:1})]),_:1}))}}),P=i("a",null,"Elliot Fu",-1),R=i("a",null,"Jenny Hess",-1),K=i("a",null,"Stevie Feliciano",-1),T=i("a",null,"Administrator",-1),L=i("a",null,"Helen Troy",-1),O=`<template>
  <Card>
    <CardContent>
      <CardHeader>Project Timeline</CardHeader>
    </CardContent>
    <CardContent>
      <Header sub>Activity</Header>
      <Feed size="small">
        <FeedEvent>
          <template #summary>
            <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #summary>
            <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #summary>
            <a>Helen Troy</a> added two pictures
          </template>
        </FeedEvent>
      </Feed>
    </CardContent>
    <CardContent extra>
      <Button as="button">Join Project</Button>
    </CardContent>
  </Card>
</template>`,U=g({__name:"ContentBlockDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Content Block",code:O},{description:e(()=>[r(" A card can contain blocks of content ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(o),null,{default:e(()=>[t(a(A),null,{default:e(()=>[r("Project Timeline")]),_:1})]),_:1}),t(a(o),null,{default:e(()=>[t(a(I),{sub:""},{default:e(()=>[r("Activity")]),_:1}),t(a(j),{size:"small"},{default:e(()=>[t(a($),null,{summary:e(()=>[P,r(" added "),R,r(" to the project ")]),_:1}),t(a($),null,{summary:e(()=>[K,r(" was added as an "),T]),_:1}),t(a($),null,{summary:e(()=>[L,r(" added two pictures ")]),_:1})]),_:1})]),_:1}),t(a(o),{extra:""},{default:e(()=>[t(a(x),{as:"button"},{default:e(()=>[r("Join Project")]),_:1})]),_:1})]),_:1})]),_:1}))}}),q=`<template>
  <CardGroup>
    <Card v-for="item in items">
      <template #header>
        {{ item.header }}
      </template>
      <template #meta>
        {{ item.meta }}
      </template>
      <template #description>
        {{ item.description }}
      </template>
    </Card>
  </CardGroup>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardGroup,
} from 'vue-fomantic-ui'

const items = ref([
  {
    header: 'Elliot Fu',
    meta: 'Friend',
    description: 'Elliot Fu is a film-maker from New York.',
  },
  {
    header: 'Veronika Ossi',
    meta: 'Friend',
    description: 'Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.',
  },
  {
    header: 'Jenny Hess',
    meta: 'Friend',
    description: 'Jenny is a student studying Media Management at the New School',
  }
])
<\/script>`,Q=g({__name:"HeaderDoc",setup(p){const s=b([{header:"Elliot Fu",meta:"Friend",description:"Elliot Fu is a film-maker from New York."},{header:"Veronika Ossi",meta:"Friend",description:"Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying."},{header:"Jenny Hess",meta:"Friend",description:"Jenny is a student studying Media Management at the New School"}]);return(u,C)=>(n(),l(_,{label:"Header",code:q},{description:e(()=>[r(" A card can contain a header ")]),example:e(()=>[t(a(w),null,{default:e(()=>[(n(!0),h(v,null,y(s.value,c=>(n(),l(a(d),null,{default:e(()=>[t(a(o),null,{header:e(()=>[r(f(c.header),1)]),meta:e(()=>[r(f(c.meta),1)]),description:e(()=>[r(f(c.description),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),W=i("span",null,"2 days ago",-1),X=i("a",null,"Animals",-1),Z=`<template>
  <Card>
    <CardContent header="Cute Dog">
      <template #meta>
        <span>2 days ago</span>
        <a>Animals</a>
      </template>
      <template #description>
        <Image src="/images/wireframe/paragraph.png" />
      </template>
    </CardContent>
  </Card>
</template>`,ee=g({__name:"MetadataDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Metadata",code:Z},{description:e(()=>[r(" A card can contain content metadata ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(o),{header:"Cute Dog"},{meta:e(()=>[W,X]),description:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}))}}),ae=`<template>
  <CardGroup>
    <Card v-for="item in items">
      <CardContent>
        <template #header>
          {{ item.header }}
        </template>
        <template #description>
          {{ item.description }}
        </template>
      </CardContent>
      <Button icon="plus" content="Add Friend" />
    </Card>
  </CardGroup>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardGroup,
  Button,
} from 'vue-fomantic-ui'

const items = ref([
  {
    header: 'Elliot Fu',
    description: 'Elliot Fu is a film-maker from New York.',
  },
  {
    header: 'Veronika Ossi',
    description: 'Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.',
  },
  {
    header: 'Jenny Hess',
    description: 'Jenny is a student studying Media Management at the New School',
  }
])
<\/script>`,te=g({__name:"ButtonsDoc",setup(p){const s=b([{header:"Elliot Fu",description:"Elliot Fu is a film-maker from New York."},{header:"Veronika Ossi",description:"Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying."},{header:"Jenny Hess",description:"Jenny is a student studying Media Management at the New School"}]);return(u,C)=>(n(),l(_,{label:"Buttons",code:ae},{description:e(()=>[r(" A card can contain buttons ")]),example:e(()=>[t(a(w),null,{default:e(()=>[(n(!0),h(v,null,y(s.value,c=>(n(),l(a(d),null,{default:e(()=>[t(a(o),null,{header:e(()=>[r(f(c.header),1)]),description:e(()=>[r(f(c.description),1)]),_:2},1024),t(a(x),{icon:"plus",content:"Add Friend"})]),_:2},1024))),256))]),_:1})]),_:1}))}}),re=i("span",{class:"left floated like"},[i("i",{class:"like icon"}),r(" Like ")],-1),ne=i("span",{class:"right floated star"},[i("i",{class:"star icon"}),r(" Favorite ")],-1),oe=`<template>
  <Card>
    <CardContent>
      <template #header>
        Cute Dog
      </template>
      <template #description>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </template>
      <CardContent extra>
        <span class="left floated like">
          <i class="like icon"></i>
          Like
        </span>
        <span class="right floated star">
          <i class="star icon"></i>
          Favorite
        </span>
      </CardContent>
    </CardContent>
  </Card>
</tempalte>`,ie=g({__name:"ApprovalDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Approval",code:oe},{description:e(()=>[r(" A card can contain a like or star action. ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(o),null,{header:e(()=>[r(" Cute Dog ")]),description:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),t(a(o),{extra:""},{default:e(()=>[re,ne]),_:1})]),_:1})]),_:1}))}}),se=i("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),le=i("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),de=`<template>
  <Card>
    <CardContent header="Cute Dog">
      <template #meta>
        2 days ago
      </template>
      <template #description>
        <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
        <p>Many people also have their own barometers for what makes a cute dog.</p>
      </template>
    </CardContent>
  </Card>
</template>`,ce=g({__name:"DescriptionDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Description",code:de},{description:e(()=>[r(" A card can contain a description with one or more paragraphs ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(o),{header:"Cute Dog"},{meta:e(()=>[r(" 2 days ago ")]),description:e(()=>[se,le]),_:1})]),_:1})]),_:1}))}}),me=i("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),pe=i("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),ue=`<template>
  <Card>
    <CardContent header="Cute Dog">
      <template #meta>
        2 days ago
      </template>
      <template #description>
        <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
        <p>Many people also have their own barometers for what makes a cute dog.</p>
      </template>
    </CardContent>
    <CardContent extra>
      <Icon name="check" />
      121 Votes
    </CardContent>
  </Card>
</template>`,ge=g({__name:"ExtraContentDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Extra Content",code:ue},{description:e(()=>[r(" A card can contain extra content meant to be formatted separately from the main content ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(o),{header:"Cute Dog"},{meta:e(()=>[r(" 2 days ago ")]),description:e(()=>[me,pe]),_:1}),t(a(o),{extra:""},{default:e(()=>[t(a(k),{name:"check"}),r(" 121 Votes ")]),_:1})]),_:1})]),_:1}))}}),_e=i("span",{class:"date"},"Joined in 2013",-1),Ce=`<template>
  <Card disabled>
    <CardContent header="Kristy">
      <template #meta>
        <span class="date">Joined in 2013</span>
      </template>
      <template #description>
        Kristy is an art director living in New York.
      </template>
    </CardContent>
    <CardContent extra>
      <Icon name="user" />
      22 Friends
    </CardContent>
  </Card>
</template>`,fe=g({__name:"DisabledDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Disabled",code:Ce},{description:e(()=>[r(" A card may show its content is disabled ")]),example:e(()=>[t(a(d),{disabled:""},{default:e(()=>[t(a(o),{header:"Kristy"},{meta:e(()=>[_e]),description:e(()=>[r(" Kristy is an art director living in New York. ")]),_:1}),t(a(o),{extra:""},{default:e(()=>[t(a(k),{name:"user"}),r(" 22 Friends ")]),_:1})]),_:1})]),_:1}))}}),he=i("span",{class:"date"},"Joined in 2013",-1),ve=`<template>
  <Card loading>
    <CardContent header="Kristy">
      <template #meta>
        <span class="date">Joined in 2013</span>
      </template>
      <template #description>
        Kristy is an art director living in New York.
      </template>
    </CardContent>
    <CardContent extra>
      <Icon name="user" />
      22 Friends
    </CardContent>
  </Card>
</template>`,ye=g({__name:"LoadingDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Loading",code:ve},{description:e(()=>[r(" A card may show its content is being loaded ")]),example:e(()=>[t(a(d),{loading:""},{default:e(()=>[t(a(o),{header:"Kristy"},{meta:e(()=>[he]),description:e(()=>[r(" Kristy is an art director living in New York. ")]),_:1}),t(a(o),{extra:""},{default:e(()=>[t(a(k),{name:"user"}),r(" 22 Friends ")]),_:1})]),_:1})]),_:1}))}}),we=i("span",{class:"date"},"Joined in 2013",-1),be=`<template>
  <Card
    v-for="v in ['double', 'usual double']"
    :key="v"
    :loading="v"
    color="brown"
  >
    <CardContent header="Kristy">
      <template #meta>
        <span class="date">Joined in 2013</span>
      </template>
      <template #description>
        Kristy is an art director living in New York.
      </template>
    </CardContent>
    <CardContent extra>
      <Icon name="user" />
      22 Friends
    </CardContent>
  </Card>
</template>`,ke=g({__name:"LoadingVariantDoc",setup(p){return(s,u)=>(n(),l(_,{code:be},{example:e(()=>[(n(),h(v,null,y(["double","usual double"],C=>t(a(d),{key:C,loading:C,color:"brown"},{default:e(()=>[t(a(o),{header:"Kristy"},{meta:e(()=>[we]),description:e(()=>[r(" Kristy is an art director living in New York. ")]),_:1}),t(a(o),{extra:""},{default:e(()=>[t(a(k),{name:"user"}),r(" 22 Friends ")]),_:1})]),_:2},1032,["loading"])),64))]),_:1}))}}),xe=`<template>
  <Grid :columns="3">
    <GridColumn v-for="item in items">
      <Card fluid>
        <Image :src="item.avatar" />
        <CardContent :header="item.header" />
      </Card>
    </GridColumn>
  </Grid>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardContent,
  Grid,
  GridColumn,
  Image,
} from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/daniel.jpg',
    header: 'Daniel Louise',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/helen.jpg',
    header: 'Helen Troy',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/elliot.jpg',
    header: 'Elliot Fu',
  },
])
<\/script>`,$e=g({__name:"FluidCardDoc",setup(p){const s=b([{avatar:"/vue-fomantic-ui/images/avatar/large/daniel.jpg",header:"Daniel Louise"},{avatar:"/vue-fomantic-ui/images/avatar/large/helen.jpg",header:"Helen Troy"},{avatar:"/vue-fomantic-ui/images/avatar/large/elliot.jpg",header:"Elliot Fu"}]);return(u,C)=>(n(),l(_,{label:"Fluid Card",code:xe},{description:e(()=>[r(" A fluid card takes up the width of its container ")]),example:e(()=>[t(a(G),{columns:3},{default:e(()=>[(n(!0),h(v,null,y(s.value,c=>(n(),l(a(M),null,{default:e(()=>[t(a(d),{fluid:""},{default:e(()=>[t(a(m),{src:c.avatar},null,8,["src"]),t(a(o),{header:c.header},null,8,["header"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),Fe=`<template>
  <Card centered>
    <Image src="/vue-fomantic-ui/images/avatar/large/elyse.png" />
    <CardContent header="Elyse" />
  </Card>
</template>`,De=g({__name:"CenteredDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Centered Card",code:Fe},{description:e(()=>[r(" A card can center itself inside its container ")]),example:e(()=>[t(a(d),{centered:""},{default:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/avatar/large/elyse.png"}),t(a(o),{header:"Elyse"})]),_:1})]),_:1}))}}),Ae=i("a",null,"Friends",-1),Ie=`<template>
  <Card horizontal>
    <Image wrapped src="/vue-fomantic-ui/images/avatar/large/matthew.png" />
    <CardContent header="Matt Giampietro">
      <template #meta>
        <a>Friends</a>
      </template>
      <template #description>
        Matthew is an interior designer living in New York.
      </template>
    </CardContent>
  </Card>
</template>`,je=g({__name:"HorizontalCardsDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Horizontal Cards",code:Ie},{description:e(()=>[r(" A card can display horizontally ")]),example:e(()=>[t(a(d),{horizontal:""},{default:e(()=>[t(a(m),{wrapped:"",src:"/vue-fomantic-ui/images/avatar/large/matthew.png"}),t(a(o),{header:"Matt Giampietro"},{meta:e(()=>[Ae]),description:e(()=>[r(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1})]),_:1}))}}),Ge=i("span",null,"2 days ago",-1),Me=i("a",null,"Animals",-1),ze={class:"right floated"},Ee=`<template>
  <Card raised>
    <CardContent header="Cute Dog">
      <template #meta>
        <span>2 days ago</span>
        <a>Animals</a>
      </template>
      <template #description>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </template>
    </CardContent>
    <CardContent extra>
      <div class="right floated">
        <Image avatar src="/vue-fomantic-ui/images/avatar/small/matt.jpg" />
        Matt
      </div>
    </CardContent>
  </Card>
</template>`,Ve=g({__name:"RaisedCardDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Raised Card",code:Ee},{description:e(()=>[r(" A card can contain content metadata ")]),example:e(()=>[t(a(d),{raised:""},{default:e(()=>[t(a(o),{header:"Cute Dog"},{meta:e(()=>[Ge,Me]),description:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),t(a(o),{extra:""},{default:e(()=>[i("div",ze,[t(a(m),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/matt.jpg"}),r(" Matt ")])]),_:1})]),_:1})]),_:1}))}}),Ne=i("span",null,"2 days ago",-1),Je=i("a",null,"Animals",-1),Be={class:"right floated"},Se=i("span",null,"2 days ago",-1),He=i("a",null,"Animals",-1),Ye={class:"right floated"},Pe=`<template>
  <Card href="https://dog.com">
    <CardContent header="Cute Dog">
      <template #meta>
        <span>2 days ago</span>
        <a>Animals</a>
      </template>
      <template #description>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </template>
    </CardContent>
    <CardContent extra>
      <div class="right floated">
        <Image avatar src="/vue-fomantic-ui/images/avatar/small/matt.jpg" />
        Matt
      </div>
    </CardContent>
  </Card>
  <Card link>
    <CardContent header="Cute Dog">
      <template #meta>
        <span>2 days ago</span>
        <a>Animals</a>
      </template>
      <template #description>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </template>
    </CardContent>
    <CardContent extra>
      <div class="right floated">
        <Image avatar src="/vue-fomantic-ui/images/avatar/small/matt.jpg" />
        Matt
      </div>
    </CardContent>
  </Card>
</template>`,Re=g({__name:"LinkCardDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Link Card",code:Pe},{description:e(()=>[r(" A card can be formatted so that the entire contents link to another page ")]),example:e(()=>[t(a(d),{href:"https://dog.com"},{default:e(()=>[t(a(o),{header:"Cute Dog"},{meta:e(()=>[Ne,Je]),description:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),t(a(o),{extra:""},{default:e(()=>[i("div",Be,[t(a(m),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/matt.jpg"}),r(" Matt ")])]),_:1})]),_:1}),t(a(d),{link:""},{default:e(()=>[t(a(o),{header:"Cute Dog"},{meta:e(()=>[Se,He]),description:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),t(a(o),{extra:""},{default:e(()=>[i("div",Ye,[t(a(m),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/matt.jpg"}),r(" Matt ")])]),_:1})]),_:1})]),_:1}))}}),Ke=i("span",{class:"right floated"},"2 days ago",-1),Te={class:"right floated"},Le=`<template>
  <Card>
    <CardContent header="Cute Dog">
      <template #meta>
        <span class="right floated">2 days ago</span>
        Animals
      </template>
      <template #description>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </template>
    </CardContent>
    <CardContent extra>
      <div class="right floated">
        <Image avatar src="/vue-fomantic-ui/images/avatar/small/matt.jpg" />
        Matt
      </div>
    </CardContent>
  </Card>
</template>`,Oe=g({__name:"FloatedContentDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Floated Content",code:Le},{description:e(()=>[r(" Any content element can be floated left or right ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(o),{header:"Cute Dog"},{meta:e(()=>[Ke,r(" Animals ")]),description:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),t(a(o),{extra:""},{default:e(()=>[i("div",Te,[t(a(m),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/matt.jpg"}),r(" Matt ")])]),_:1})]),_:1})]),_:1}))}}),Ue=i("div",{class:"center aligned"},"Jenny Hess",-1),qe=i("p",{class:"center aligned"},"Jenny is a student studying Media Management at the New School",-1),Qe={class:"center aligned"},We=`<template>
  <Card>
    <CardContent>
      <template #header>
        <div class="center aligned">Jenny Hess</div>
      </template>
      <template #description>
        <p class="center aligned">Jenny is a student studying Media Management at the New School</p>
      </template>
    </CardContent>
    <CardContent extra>
      <div class="center aligned">
        <Image avatar src="/vue-fomantic-ui/images/avatar/small/jenny.jpg" />
        Jenny
      </div>
    </CardContent>
  </Card>
</template>`,Xe=g({__name:"TextAlignmentDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Text Alignment",code:We},{description:e(()=>[r(" Any element inside a card can have its text alignment specified ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(o),null,{header:e(()=>[Ue]),description:e(()=>[qe]),_:1}),t(a(o),{extra:""},{default:e(()=>[i("div",Qe,[t(a(m),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/jenny.jpg"}),r(" Jenny ")])]),_:1})]),_:1})]),_:1}))}}),Ze=`<template>
  <Segment inverted>
    <CardGroup inverted>
      <Card v-for="item in items">
        <Image :src="item.avatar" />
        <CardContent :header="item.header">
          <template #meta>
            {{ item.meta }}
          </template>
          <template #description>
            {{ item.description }}
          </template>
        </CardContent>
      </Card>
    </CardGroup>
  </Segment>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardGroup,
  Image,
  Segment,
} from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/matthew.png',
    header: 'Matt Giampietro',
    meta: 'Friends',
    description: 'Matthew is an interior designer living in New York.',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/molly.png',
    header: 'Molly',
    meta: 'Coworker',
    description: 'Molly is a personal assistant living in Paris.',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/elyse.png',
    header: 'Elyse',
    meta: 'Coworker',
    description: 'Elyse is a copywriter working in New York.',
  }
])
<\/script>`,ea=g({__name:"InvertedDoc",setup(p){const s=b([{avatar:"/vue-fomantic-ui/images/avatar/large/matthew.png",header:"Matt Giampietro",meta:"Friends",description:"Matthew is an interior designer living in New York."},{avatar:"/vue-fomantic-ui/images/avatar/large/molly.png",header:"Molly",meta:"Coworker",description:"Molly is a personal assistant living in Paris."},{avatar:"/vue-fomantic-ui/images/avatar/large/elyse.png",header:"Elyse",meta:"Coworker",description:"Elyse is a copywriter working in New York."}]);return(u,C)=>(n(),l(_,{label:"Inverted",code:Ze},{description:e(()=>[r(" Card's colors can be inverted ")]),example:e(()=>[t(a(z),{inverted:""},{default:e(()=>[t(a(w),{inverted:""},{default:e(()=>[(n(!0),h(v,null,y(s.value,c=>(n(),l(a(d),null,{default:e(()=>[t(a(m),{src:c.avatar},null,8,["src"]),t(a(o),{header:c.header},{meta:e(()=>[r(f(c.meta),1)]),description:e(()=>[r(f(c.description),1)]),_:2},1032,["header"])]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}))}}),aa=`<template>
  <CardGroup :itemsPerRow="4">
    <Card v-for="color in colors" :color="color">
      <Image src="/vue-fomantic-ui/images/wireframe/white-image.png" />
    </Card>
  </CardGroup>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardGroup,
  Image,
} from 'vue-fomantic-ui'

const colors = ref([
  'primary',
  'secondary',
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
<\/script>`,ta=g({__name:"ColoredDoc",setup(p){const s=b(["primary","secondary","red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]);return(u,C)=>(n(),l(_,{label:"Colored",code:aa},{description:e(()=>[r(" A card can specify a color ")]),example:e(()=>[t(a(w),{itemsPerRow:4},{default:e(()=>[(n(!0),h(v,null,y(s.value,c=>(n(),l(a(d),{color:c},{default:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/white-image.png"})]),_:2},1032,["color"]))),256))]),_:1})]),_:1}))}}),ra=`<template>
  <CardGroup :itemsPerRow="4" basic>
    <Card v-for="color in colors" :color="color">
      <Image src="/vue-fomantic-ui/images/wireframe/white-image.png" style="opacity: 0.5;" />
    </Card>
  </CardGroup>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardGroup,
  Image,
} from 'vue-fomantic-ui'

const colors = ref([
  'primary',
  'secondary',
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
<\/script>`,na=g({__name:"BasicDoc",setup(p){const s=b(["primary","secondary","red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]);return(u,C)=>(n(),l(_,{label:"Basic",code:ra},{description:e(()=>[r(" A basic card does not have a border and also supports full color background ")]),example:e(()=>[t(a(w),{itemsPerRow:4,basic:""},{default:e(()=>[(n(!0),h(v,null,y(s.value,c=>(n(),l(a(d),{color:c},{default:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/white-image.png",style:{opacity:"0.5"}})]),_:2},1032,["color"]))),256))]),_:1})]),_:1}))}}),oa=`<template>
  <CardGroup :itemsPerRow="4">
    <Card>
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </Card>
    <Card>
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </Card>
    <Card>
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </Card>
    <Card>
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </Card>
  </CardGroup>
</template>`,ia=g({__name:"ColumnCountDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Column Count",code:oa},{description:e(()=>[r(" A group of cards can set how many cards should exist in a row ")]),example:e(()=>[t(a(w),{itemsPerRow:4},{default:e(()=>[t(a(d),null,{default:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(a(d),null,{default:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(a(d),null,{default:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(a(d),null,{default:e(()=>[t(a(m),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}}),sa=`<template>
  <CardGroup :itemsPerRow="3" stackable>
    <Card v-for="avatar in avatars">
      <Image :src="\`/vue-fomantic-ui/images/avatar/large/\${avatar}.jpg\`" />
    </Card>
  </CardGroup>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardGroup,
  Image,
} from 'vue-fomantic-ui'

const avatars = ref([
  'elliot',
  'helen',
  'jenny',
  'veronika',
  'stevie',
  'steve',
])
<\/script>`,la=g({__name:"StackableDoc",setup(p){const s=b(["elliot","helen","jenny","veronika","stevie","steve"]);return(u,C)=>(n(),l(_,{label:"Stackable",code:sa},{description:e(()=>[r(" A group of cards can automatically stack rows to a single columns on mobile devices ")]),example:e(()=>[t(a(w),{itemsPerRow:3,stackable:""},{default:e(()=>[(n(!0),h(v,null,y(s.value,c=>(n(),l(a(d),null,{default:e(()=>[t(a(m),{src:`/vue-fomantic-ui/images/avatar/large/${c}.jpg`},null,8,["src"])]),_:2},1024))),256))]),_:1})]),_:1}))}}),da=`<template>
  <CardGroup :itemsPerRow="6" doubling>
    <Card v-for="avatar in avatars">
      <Image :src="\`/vue-fomantic-ui/images/avatar/large/\${avatar}.jpg\`" />
    </Card>
  </CardGroup>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardGroup,
  Image,
} from 'vue-fomantic-ui'

const avatars = ref([
  'elliot',
  'helen',
  'jenny',
  'veronika',
  'stevie',
  'steve',
])
<\/script>`,ca=g({__name:"DoublingDoc",setup(p){const s=b(["elliot","helen","jenny","veronika","stevie","steve"]);return(u,C)=>(n(),l(_,{label:"Doubling",code:da},{description:e(()=>[r(" A group of cards can double its column width for mobile ")]),example:e(()=>[t(a(w),{itemsPerRow:6,doubling:""},{default:e(()=>[(n(!0),h(v,null,y(s.value,c=>(n(),l(a(d),null,{default:e(()=>[t(a(m),{src:`/vue-fomantic-ui/images/avatar/large/${c}.jpg`},null,8,["src"])]),_:2},1024))),256))]),_:1})]),_:1}))}}),ma=i("div",{class:"right floated author"}," Fomantic-UI ",-1),pa=i("div",{class:"right floated author"}," Fomantic-UI ",-1),ua=`<template>
  <CardGroup :itemsPerRow="3">
    <Card
      v-for="size in ['mini', 'tiny', 'small']"
      :key="size"
      :size="size"
    >
      <CardContent>
        <template #header>
          {{ size }}
        </template>
        <template #meta>
          Variant
        </template>
        <template #description>
          This is a {{ size }} card
        </template>
      </CardContent>
      <CardContent extra>
        <div class="right floated author">
          Fomantic-UI
        </div>
      </CardContent>
    </Card>
  </CardGroup>

  <CardGroup :itemsPerRow="2">
    <Card
      v-for="size in ['large', 'big']"
      :key="size"
      :size="size"
    >
      <CardContent>
        <template #header>
          {{ size }}
        </template>
        <template #meta>
          Variant
        </template>
        <template #description>
          This is a {{ size }} card
        </template>
      </CardContent>
      <CardContent extra>
        <div class="right floated author">
          Fomantic-UI
        </div>
      </CardContent>
    </Card>
  </CardGroup>
</template>`,ga=g({__name:"SizeDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Size",code:ua},{description:e(()=>[r(" A card text can vary in size ")]),example:e(()=>[t(a(w),{itemsPerRow:3},{default:e(()=>[(n(),h(v,null,y(["mini","tiny","small"],C=>t(a(d),{key:C,size:C},{default:e(()=>[t(a(o),null,{header:e(()=>[r(f(C),1)]),meta:e(()=>[r(" Variant ")]),description:e(()=>[r(" This is a "+f(C)+" card ",1)]),_:2},1024),t(a(o),{extra:""},{default:e(()=>[ma]),_:1})]),_:2},1032,["size"])),64))]),_:1}),t(a(w),{itemsPerRow:2},{default:e(()=>[(n(),h(v,null,y(["large","big"],C=>t(a(d),{key:C,size:C},{default:e(()=>[t(a(o),null,{header:e(()=>[r(f(C),1)]),meta:e(()=>[r(" Variant ")]),description:e(()=>[r(" This is a "+f(C)+" card ",1)]),_:2},1024),t(a(o),{extra:""},{default:e(()=>[pa]),_:1})]),_:2},1032,["size"])),64))]),_:1})]),_:1}))}}),fa={__name:"Card",setup(p){const s=[{id:"card",label:"Card",category:"Types",component:S},{id:"cards",label:"Cards",category:"Types",component:Y},{id:"content-block",label:"Content Block",category:"Content",component:U},{id:"header",label:"Header",category:"Content",component:Q},{id:"metadata",label:"Metadata",category:"Content",component:ee},{id:"buttons",label:"Buttons",category:"Content",component:te},{id:"approval",label:"Approval",category:"Content",component:ie},{id:"description",label:"Description",category:"Content",component:ce},{id:"extra-content",label:"Extra Content",category:"Content",component:ge},{id:"disabled",label:"Disabled",category:"States",component:fe},{id:"loading",label:"Loading",category:"States",component:[ye,ke]},{id:"fluid-card",label:"Fluid Card",category:"Variations",component:$e},{id:"centered",label:"Centered Card",category:"Variations",component:De},{id:"horizontal-cards",label:"Horizontal Cards",category:"Variations",component:je},{id:"raised-card",label:"Raised Card",category:"Variations",component:Ve},{id:"link-card",label:"Link Card",category:"Variations",component:Re},{id:"floated-content",label:"Floated Content",category:"Variations",component:Oe},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Xe},{id:"inverted",label:"Inverted",category:"Variations",component:ea},{id:"colored",label:"Colored",category:"Variations",component:ta},{id:"basic",label:"Basic",category:"Variations",component:na},{id:"column-count",label:"Column Count",category:"Variations",component:ia},{id:"stackable",label:"Stackable",category:"Variations",component:la},{id:"doubling",label:"Doubling",category:"Variations",component:ca},{id:"size",label:"Size",category:"Variations",component:ga}];return(u,C)=>(n(),l(E,{title:"Card",description:"A card displays site content in a manner similar to a playing card","component-docs":s}))}};export{fa as default};
