import{e as g,o as n,c as l,w as e,a as r,b as t,u as a,al as d,z as c,am as i,d as o,K as k,Y as D,r as h,an as v,p as y,F as w,s as b,t as f,B as F,C as x,ao as A,R as j,ap as M,aq as $,V as I,f as G,L as E,D as V}from"./index-C5UtasSn.js";import{_}from"./DocSection-DNwpJszJ.js";const N=o("span",null,"Joined in 2013",-1),B=o("span",{class:"right floated"},"14h",-1),H={class:"right floated"},J=`<template>
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
</template>`,z=g({__name:"CardDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Card",code:J},{description:e(()=>[r(" A single card. ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/avatar/large/kristy.png"}),t(a(i),{header:"Kristy"},{meta:e(()=>[N]),description:e(()=>[r(" Kristy is an art director living in New York. ")]),_:1}),t(a(i),{extra:""},{default:e(()=>[o("a",null,[t(a(k),{name:"user"}),r(" 22 Friends ")])]),_:1})]),_:1}),t(a(d),null,{default:e(()=>[t(a(i),null,{meta:e(()=>[B]),default:e(()=>[t(a(c),{avatar:"",src:"/vue-fomantic-ui/images/avatar/large/elliot.jpg"}),r(" Elliot ")]),_:1}),t(a(c),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(i),null,{default:e(()=>[o("span",H,[t(a(k),{name:"heart outline like"}),r(" 17 likes ")]),t(a(k),{name:"comment"}),r(" 3 comments ")]),_:1}),t(a(i),{extra:""},{default:e(()=>[t(a(D),{icon:"heart outline",iconPosition:"left",size:"large",transparent:"",placeholder:"Add Comment..."})]),_:1})]),_:1})]),_:1}))}}),S=`<template>
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
<\/script>`,Y=g({__name:"CardsDoc",setup(p){const s=h([{header:"Elliot Fu",avatar:"/vue-fomantic-ui/images/avatar/large/elliot.jpg",meta:"Friends of Veronika",description:"Elliot requested permission to view your contact details"},{header:"Jenny Hess",avatar:"/vue-fomantic-ui/images/avatar/large/jenny.jpg",meta:"New Member",description:"Jenny wants to add you to the group best friends"}]);return(u,C)=>(n(),l(_,{label:"Cards",code:S},{description:e(()=>[r(" A group of cards. ")]),example:e(()=>[t(a(v),null,{default:e(()=>[(n(!0),y(w,null,b(s.value,m=>(n(),l(a(d),null,{default:e(()=>[t(a(i),null,{header:e(()=>[r(f(m.header)+" ",1),t(a(c),{size:"mini",floated:"right",src:m.avatar},null,8,["src"])]),meta:e(()=>[r(f(m.meta),1)]),description:e(()=>[r(f(m.description),1)]),_:2},1024),t(a(i),{extra:""},{default:e(()=>[t(a(F),{widths:2},{default:e(()=>[t(a(x),{basic:"",color:"green"},{default:e(()=>[r("Approve")]),_:1}),t(a(x),{basic:"",color:"red"},{default:e(()=>[r("Decline")]),_:1})]),_:1})]),_:1})]),_:2},1024))),256))]),_:1})]),_:1}))}}),P=o("a",null,"Elliot Fu",-1),R=o("a",null,"Jenny Hess",-1),T=o("a",null,"Stevie Feliciano",-1),L=o("a",null,"Administrator",-1),O=o("a",null,"Helen Troy",-1),K=`<template>
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
</template>`,q=g({__name:"ContentBlockDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Content Block",code:K},{description:e(()=>[r(" A card can contain blocks of content ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(i),null,{default:e(()=>[t(a(A),null,{default:e(()=>[r("Project Timeline")]),_:1})]),_:1}),t(a(i),null,{default:e(()=>[t(a(j),{sub:""},{default:e(()=>[r("Activity")]),_:1}),t(a(M),{size:"small"},{default:e(()=>[t(a($),null,{summary:e(()=>[P,r(" added "),R,r(" to the project ")]),_:1}),t(a($),null,{summary:e(()=>[T,r(" was added as an "),L]),_:1}),t(a($),null,{summary:e(()=>[O,r(" added two pictures ")]),_:1})]),_:1})]),_:1}),t(a(i),{extra:""},{default:e(()=>[t(a(x),{as:"button"},{default:e(()=>[r("Join Project")]),_:1})]),_:1})]),_:1})]),_:1}))}}),Q=`<template>
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
<\/script>`,U=g({__name:"HeaderDoc",setup(p){const s=h([{header:"Elliot Fu",meta:"Friend",description:"Elliot Fu is a film-maker from New York."},{header:"Veronika Ossi",meta:"Friend",description:"Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying."},{header:"Jenny Hess",meta:"Friend",description:"Jenny is a student studying Media Management at the New School"}]);return(u,C)=>(n(),l(_,{label:"Header",code:Q},{description:e(()=>[r(" A card can contain a header ")]),example:e(()=>[t(a(v),null,{default:e(()=>[(n(!0),y(w,null,b(s.value,m=>(n(),l(a(d),null,{default:e(()=>[t(a(i),null,{header:e(()=>[r(f(m.header),1)]),meta:e(()=>[r(f(m.meta),1)]),description:e(()=>[r(f(m.description),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),W=o("span",null,"2 days ago",-1),X=o("a",null,"Animals",-1),Z=`<template>
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
</template>`,ee=g({__name:"MetadataDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Metadata",code:Z},{description:e(()=>[r(" A card can contain content metadata ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(i),{header:"Cute Dog"},{meta:e(()=>[W,X]),description:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}))}}),ae=`<template>
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
<\/script>`,te=g({__name:"ButtonsDoc",setup(p){const s=h([{header:"Elliot Fu",description:"Elliot Fu is a film-maker from New York."},{header:"Veronika Ossi",description:"Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying."},{header:"Jenny Hess",description:"Jenny is a student studying Media Management at the New School"}]);return(u,C)=>(n(),l(_,{label:"Buttons",code:ae},{description:e(()=>[r(" A card can contain buttons ")]),example:e(()=>[t(a(v),null,{default:e(()=>[(n(!0),y(w,null,b(s.value,m=>(n(),l(a(d),null,{default:e(()=>[t(a(i),null,{header:e(()=>[r(f(m.header),1)]),description:e(()=>[r(f(m.description),1)]),_:2},1024),t(a(x),{icon:"plus",content:"Add Friend"})]),_:2},1024))),256))]),_:1})]),_:1}))}}),re=o("span",{class:"left floated like"},[o("i",{class:"like icon"}),r(" Like ")],-1),ne=o("span",{class:"right floated star"},[o("i",{class:"star icon"}),r(" Favorite ")],-1),oe=`<template>
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
</tempalte>`,ie=g({__name:"ApprovalDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Approval",code:oe},{description:e(()=>[r(" A card can contain a like or star action. ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(i),null,{header:e(()=>[r(" Cute Dog ")]),description:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),t(a(i),{extra:""},{default:e(()=>[re,ne]),_:1})]),_:1})]),_:1}))}}),se=o("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),le=o("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),de=`<template>
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
</template>`,ce=g({__name:"DescriptionDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Description",code:de},{description:e(()=>[r(" A card can contain a description with one or more paragraphs ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(i),{header:"Cute Dog"},{meta:e(()=>[r(" 2 days ago ")]),description:e(()=>[se,le]),_:1})]),_:1})]),_:1}))}}),me=o("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),pe=o("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),ue=`<template>
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
</template>`,ge=g({__name:"ExtraContentDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Extra Content",code:ue},{description:e(()=>[r(" A card can contain extra content meant to be formatted separately from the main content ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(i),{header:"Cute Dog"},{meta:e(()=>[r(" 2 days ago ")]),description:e(()=>[me,pe]),_:1}),t(a(i),{extra:""},{default:e(()=>[t(a(k),{name:"check"}),r(" 121 Votes ")]),_:1})]),_:1})]),_:1}))}}),_e=`<template>
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
<\/script>`,fe=g({__name:"FluidCardDoc",setup(p){const s=h([{avatar:"/vue-fomantic-ui/images/avatar/large/daniel.jpg",header:"Daniel Louise"},{avatar:"/vue-fomantic-ui/images/avatar/large/helen.jpg",header:"Helen Troy"},{avatar:"/vue-fomantic-ui/images/avatar/large/elliot.jpg",header:"Elliot Fu"}]);return(u,C)=>(n(),l(_,{label:"Fluid Card",code:_e},{description:e(()=>[r(" A fluid card takes up the width of its container ")]),example:e(()=>[t(a(I),{columns:3},{default:e(()=>[(n(!0),y(w,null,b(s.value,m=>(n(),l(a(G),null,{default:e(()=>[t(a(d),{fluid:""},{default:e(()=>[t(a(c),{src:m.avatar},null,8,["src"]),t(a(i),{header:m.header},null,8,["header"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),Ce=`<template>
  <Card centered>
    <Image src="/vue-fomantic-ui/images/avatar/large/elyse.png" />
    <CardContent header="Elyse" />
  </Card>
</template>`,he=g({__name:"CenteredDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Centered Card",code:Ce},{description:e(()=>[r(" A card can center itself inside its container ")]),example:e(()=>[t(a(d),{centered:""},{default:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/avatar/large/elyse.png"}),t(a(i),{header:"Elyse"})]),_:1})]),_:1}))}}),ve=o("a",null,"Friends",-1),ye=`<template>
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
</template>`,we=g({__name:"HorizontalCardsDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Horizontal Cards",code:ye},{description:e(()=>[r(" A card can display horizontally ")]),example:e(()=>[t(a(d),{horizontal:""},{default:e(()=>[t(a(c),{wrapped:"",src:"/vue-fomantic-ui/images/avatar/large/matthew.png"}),t(a(i),{header:"Matt Giampietro"},{meta:e(()=>[ve]),description:e(()=>[r(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1})]),_:1}))}}),be=o("span",null,"2 days ago",-1),ke=o("a",null,"Animals",-1),xe={class:"right floated"},$e=`<template>
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
</template>`,De=g({__name:"RaisedCardDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Raised Card",code:$e},{description:e(()=>[r(" A card can contain content metadata ")]),example:e(()=>[t(a(d),{raised:""},{default:e(()=>[t(a(i),{header:"Cute Dog"},{meta:e(()=>[be,ke]),description:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),t(a(i),{extra:""},{default:e(()=>[o("div",xe,[t(a(c),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/matt.jpg"}),r(" Matt ")])]),_:1})]),_:1})]),_:1}))}}),Fe=o("span",null,"2 days ago",-1),Ae=o("a",null,"Animals",-1),je={class:"right floated"},Me=o("span",null,"2 days ago",-1),Ie=o("a",null,"Animals",-1),Ge={class:"right floated"},Ee=`<template>
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
</template>`,Ve=g({__name:"LinkCardDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Link Card",code:Ee},{description:e(()=>[r(" A card can be formatted so that the entire contents link to another page ")]),example:e(()=>[t(a(d),{href:"https://dog.com"},{default:e(()=>[t(a(i),{header:"Cute Dog"},{meta:e(()=>[Fe,Ae]),description:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),t(a(i),{extra:""},{default:e(()=>[o("div",je,[t(a(c),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/matt.jpg"}),r(" Matt ")])]),_:1})]),_:1}),t(a(d),{link:""},{default:e(()=>[t(a(i),{header:"Cute Dog"},{meta:e(()=>[Me,Ie]),description:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),t(a(i),{extra:""},{default:e(()=>[o("div",Ge,[t(a(c),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/matt.jpg"}),r(" Matt ")])]),_:1})]),_:1})]),_:1}))}}),Ne=o("span",{class:"right floated"},"2 days ago",-1),Be={class:"right floated"},He=`<template>
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
</template>`,Je=g({__name:"FloatedContentDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Floated Content",code:He},{description:e(()=>[r(" Any content element can be floated left or right ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(i),{header:"Cute Dog"},{meta:e(()=>[Ne,r(" Animals ")]),description:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),t(a(i),{extra:""},{default:e(()=>[o("div",Be,[t(a(c),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/matt.jpg"}),r(" Matt ")])]),_:1})]),_:1})]),_:1}))}}),ze=o("div",{class:"center aligned"},"Jenny Hess",-1),Se=o("p",{class:"center aligned"},"Jenny is a student studying Media Management at the New School",-1),Ye={class:"center aligned"},Pe=`<template>
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
</template>`,Re=g({__name:"TextAlignmentDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Text Alignment",code:Pe},{description:e(()=>[r(" Any element inside a card can have its text alignment specified ")]),example:e(()=>[t(a(d),null,{default:e(()=>[t(a(i),null,{header:e(()=>[ze]),description:e(()=>[Se]),_:1}),t(a(i),{extra:""},{default:e(()=>[o("div",Ye,[t(a(c),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/jenny.jpg"}),r(" Jenny ")])]),_:1})]),_:1})]),_:1}))}}),Te=`<template>
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
<\/script>`,Le=g({__name:"InvertedDoc",setup(p){const s=h([{avatar:"/vue-fomantic-ui/images/avatar/large/matthew.png",header:"Matt Giampietro",meta:"Friends",description:"Matthew is an interior designer living in New York."},{avatar:"/vue-fomantic-ui/images/avatar/large/molly.png",header:"Molly",meta:"Coworker",description:"Molly is a personal assistant living in Paris."},{avatar:"/vue-fomantic-ui/images/avatar/large/elyse.png",header:"Elyse",meta:"Coworker",description:"Elyse is a copywriter working in New York."}]);return(u,C)=>(n(),l(_,{label:"Inverted",code:Te},{description:e(()=>[r(" Card's colors can be inverted ")]),example:e(()=>[t(a(E),{inverted:""},{default:e(()=>[t(a(v),{inverted:""},{default:e(()=>[(n(!0),y(w,null,b(s.value,m=>(n(),l(a(d),null,{default:e(()=>[t(a(c),{src:m.avatar},null,8,["src"]),t(a(i),{header:m.header},{meta:e(()=>[r(f(m.meta),1)]),description:e(()=>[r(f(m.description),1)]),_:2},1032,["header"])]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}))}}),Oe=`<template>
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
<\/script>`,Ke=g({__name:"ColoredDoc",setup(p){const s=h(["primary","secondary","red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]);return(u,C)=>(n(),l(_,{label:"Colored",code:Oe},{description:e(()=>[r(" A card can specify a color ")]),example:e(()=>[t(a(v),{itemsPerRow:4},{default:e(()=>[(n(!0),y(w,null,b(s.value,m=>(n(),l(a(d),{color:m},{default:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/white-image.png"})]),_:2},1032,["color"]))),256))]),_:1})]),_:1}))}}),qe=`<template>
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
</template>`,Qe=g({__name:"ColumnCountDoc",setup(p){return(s,u)=>(n(),l(_,{label:"Column Count",code:qe},{description:e(()=>[r(" A group of cards can set how many cards should exist in a row ")]),example:e(()=>[t(a(v),{itemsPerRow:4},{default:e(()=>[t(a(d),null,{default:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(a(d),null,{default:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(a(d),null,{default:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(a(d),null,{default:e(()=>[t(a(c),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}}),Ue=`<template>
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
<\/script>`,We=g({__name:"StackableDoc",setup(p){const s=h(["elliot","helen","jenny","veronika","stevie","steve"]);return(u,C)=>(n(),l(_,{label:"Stackable",code:Ue},{description:e(()=>[r(" A group of cards can automatically stack rows to a single columns on mobile devices ")]),example:e(()=>[t(a(v),{itemsPerRow:3,stackable:""},{default:e(()=>[(n(!0),y(w,null,b(s.value,m=>(n(),l(a(d),null,{default:e(()=>[t(a(c),{src:`/vue-fomantic-ui/images/avatar/large/${m}.jpg`},null,8,["src"])]),_:2},1024))),256))]),_:1})]),_:1}))}}),Xe=`<template>
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
<\/script>`,Ze=g({__name:"DoublingDoc",setup(p){const s=h(["elliot","helen","jenny","veronika","stevie","steve"]);return(u,C)=>(n(),l(_,{label:"Doubling",code:Xe},{description:e(()=>[r(" A group of cards can double its column width for mobile ")]),example:e(()=>[t(a(v),{itemsPerRow:6,doubling:""},{default:e(()=>[(n(!0),y(w,null,b(s.value,m=>(n(),l(a(d),null,{default:e(()=>[t(a(c),{src:`/vue-fomantic-ui/images/avatar/large/${m}.jpg`},null,8,["src"])]),_:2},1024))),256))]),_:1})]),_:1}))}}),ta={__name:"Card",setup(p){const s=[{id:"card",label:"Card",category:"Types",component:z},{id:"cards",label:"Cards",category:"Types",component:Y},{id:"content-block",label:"Content Block",category:"Content",component:q},{id:"header",label:"Header",category:"Content",component:U},{id:"metadata",label:"Metadata",category:"Content",component:ee},{id:"buttons",label:"Buttons",category:"Content",component:te},{id:"approval",label:"Approval",category:"Content",component:ie},{id:"description",label:"Description",category:"Content",component:ce},{id:"extra-content",label:"Extra Content",category:"Content",component:ge},{id:"fluid-card",label:"Fluid Card",category:"Variations",component:fe},{id:"centered",label:"Centered Card",category:"Variations",component:he},{id:"horizontal-cards",label:"Horizontal Cards",category:"Variations",component:we},{id:"raised-card",label:"Raised Card",category:"Variations",component:De},{id:"link-card",label:"Link Card",category:"Variations",component:Ve},{id:"floated-content",label:"Floated Content",category:"Variations",component:Je},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Re},{id:"inverted",label:"Inverted",category:"Variations",component:Le},{id:"colored",label:"Colored",category:"Variations",component:Ke},{id:"column-count",label:"Column Count",category:"Variations",component:Qe},{id:"stackable",label:"Stackable",category:"Variations",component:We},{id:"doubling",label:"Doubling",category:"Variations",component:Ze}];return(u,C)=>(n(),l(V,{title:"Card",description:"A card displays site content in a manner similar to a playing card","component-docs":s}))}};export{ta as default};
