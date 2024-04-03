import{o as n,c as l,w as e,a as i,b as a,u as t,T as p,M as s,J as A,d as g,e as C,K as u,L as o,N as _,n as v,O as S,r as I,P as h,Q as y,R as b,t as f,y as j,f as k}from"./index-BtqR3fgc.js";import{_ as L}from"./DocSection-Bplbrfto.js";const w=`<template>
  <SuiList>
    <SuiListItem>Apples</SuiListItem>
    <SuiListItem>Oranges</SuiListItem>
    <SuiListItem>Bananas</SuiListItem>
  </SuiList>
</template>`,$={__name:"ListDoc",setup(d){return(r,c)=>(n(),l(L,{label:"List",code:w},{description:e(()=>[i(" A list groups related content ")]),example:e(()=>[a(t(p),null,{default:e(()=>[a(t(s),null,{default:e(()=>[i("Apples")]),_:1}),a(t(s),null,{default:e(()=>[i("Oranges")]),_:1}),a(t(s),null,{default:e(()=>[i("Bananas")]),_:1})]),_:1})]),_:1}))}},T=`<template>
  <SuiList bulleted>
    <SuiListItem>Gaining Access</SuiListItem>
    <SuiListItem>Inviting Friends</SuiListItem>
    <SuiListItem>
      Benefits
      <SuiListList>
        <SuiListItem>Link to somewhere</SuiListItem>
        <SuiListItem>Rebates</SuiListItem>
        <SuiListItem>Discounts</SuiListItem>
      </SuiListList>
      <SuiListItem>Warranty</SuiListItem>
    </SuiListItem>
  </SuiList>
</template>`,z={__name:"BulletedDoc",setup(d){return(r,c)=>(n(),l(L,{label:"Bulleted",code:T},{description:e(()=>[i(" A list can mark items with a bullet ")]),example:e(()=>[a(t(p),{bulleted:""},{default:e(()=>[a(t(s),null,{default:e(()=>[i("Gaining Access")]),_:1}),a(t(s),null,{default:e(()=>[i("Inviting Friends")]),_:1}),a(t(s),null,{default:e(()=>[i(" Benefits "),a(t(A),null,{default:e(()=>[a(t(s),null,{default:e(()=>[i("Link to somewhere")]),_:1}),a(t(s),null,{default:e(()=>[i("Rebates")]),_:1}),a(t(s),null,{default:e(()=>[i("Discounts")]),_:1})]),_:1})]),_:1}),a(t(s),null,{default:e(()=>[i("Warranty")]),_:1})]),_:1})]),_:1}))}},F=g("a",null,"Languages",-1),B=`<template>
  <SuiList ordered>
    <SuiListItem as="a">Getting Started</SuiListItem>
    <SuiListItem as="a">Introduction</SuiListItem>
    <SuiListItem>
      <a>Languages</a>
      <SuiListList>
        <SuiListItem as="a">HTML</SuiListItem>
        <SuiListItem as="a">Javascript</SuiListItem>
        <SuiListItem as="a">CSS</SuiListItem>
      </SuiListList>
      <SuiListItem as="a">Review</SuiListItem>
    </SuiListItem>
  </SuiList>
</template>`,P={__name:"OrderedDoc",setup(d){return(r,c)=>(n(),l(L,{label:"Ordered",code:B},{description:e(()=>[i(" A list can be ordered numerically ")]),example:e(()=>[a(t(p),{ordered:""},{default:e(()=>[a(t(s),{as:"a"},{default:e(()=>[i("Getting Started")]),_:1}),a(t(s),{as:"a"},{default:e(()=>[i("Introduction")]),_:1}),a(t(s),null,{default:e(()=>[F,a(t(A),null,{default:e(()=>[a(t(s),{as:"a"},{default:e(()=>[i("HTML")]),_:1}),a(t(s),{as:"a"},{default:e(()=>[i("Javascript")]),_:1}),a(t(s),{as:"a"},{default:e(()=>[i("CSS")]),_:1})]),_:1})]),_:1}),a(t(s),{as:"a"},{default:e(()=>[i("Review")]),_:1})]),_:1})]),_:1}))}},V=`<template>
  <List link>
    <ListItem active>Home</ListItem>
    <ListItem as="a">About</ListItem>
    <ListItem as="a">Jobs</ListItem>
    <ListItem as="a">Team</ListItem>
  </List>
</template>`,R={__name:"LinkDoc",setup(d){return(r,c)=>(n(),l(L,{label:"Link",code:V},{description:e(()=>[i(" A list can be specially formatted for navigation links ")]),example:e(()=>[a(t(p),{link:""},{default:e(()=>[a(t(s),{active:""},{default:e(()=>[i("Home")]),_:1}),a(t(s),{as:"a"},{default:e(()=>[i("About")]),_:1}),a(t(s),{as:"a"},{default:e(()=>[i("Jobs")]),_:1}),a(t(s),{as:"a"},{default:e(()=>[i("Team")]),_:1})]),_:1})]),_:1}))}},J=`<template>
  <SuiList>
    <SuiListItem as="a">
      <SuiIcon name="help" />
      <SuiListContent>
        <SuiListHeader>Floated Icon</SuiListHeader>
        <SuiListDescription>
          This text will always have a left margin to make sure it sits alongside your icon
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem as="a">
      <SuiIcon name="right triangle" />
      <SuiListContent>
        <SuiListHeader>Icon Alignment</SuiListHeader>
        <SuiListDescription>
          Floated icons are by default top aligned. To have an icon top aligned try this example.
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem>
      <SuiIcon name="help" />
        Inline Text
    </SuiListItem>
  </SuiList>
</template>`,G={__name:"IconDoc",setup(d){return(r,c)=>(n(),l(L,{label:"Icon",code:J},{description:e(()=>[i(" A list item can contain an icon ")]),example:e(()=>[a(t(p),null,{default:e(()=>[a(t(s),{as:"a"},{default:e(()=>[a(t(C),{name:"help"}),a(t(u),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i("Floated Icon")]),_:1}),a(t(_),null,{default:e(()=>[i(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),a(t(s),{as:"a"},{default:e(()=>[a(t(C),{name:"right triangle"}),a(t(u),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i("Icon Alignment")]),_:1}),a(t(_),null,{default:e(()=>[i(" Floated icons are by default top aligned. To have an icon top aligned try this example. ")]),_:1})]),_:1})]),_:1}),a(t(s),null,{default:e(()=>[a(t(C),{name:"help"}),i(" Inline Text ")]),_:1})]),_:1})]),_:1}))}},M=g("a",null,[g("b",null,"Arrested Development")],-1),O=g("a",null,[g("b",null,"Bob's Burgers")],-1),q=g("a",null,[g("b",null,"The Godfather Part 2")],-1),N=g("a",null,[g("b",null,"Twin Peaks")],-1),E=`<template>
  <SuiList>
    <SuiListItem>
      <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/rachel.png" />
      <SuiListContent>
        <SuiListHeader as="a">Rachel</SuiListHeader>
        <SuiListDescription>
          Last seen watching <a><b>Arrested Development</b></a> just now.
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem>
      <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/lindsay.png" />
      <SuiListContent>
        <SuiListHeader as="a">Lindsay</SuiListHeader>
        <SuiListDescription>
          Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem>
      <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/matthew.png" />
      <SuiListContent>
        <SuiListHeader as="a">Matthew</SuiListHeader>
        <SuiListDescription>
          Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem>
      <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/jenny.jpg" />
      <SuiListContent>
        <SuiListHeader as="a">Jenny Hess</SuiListHeader>
        <SuiListDescription>
          Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem>
      <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/veronika.jpg" />
      <SuiListContent>
        <SuiListHeader as="a">Veronika Ossi</SuiListHeader>
        <SuiListDescription>
          Has not watched anything recently
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
</template>`,W={__name:"ImageDoc",setup(d){return(r,c)=>(n(),l(L,{label:"Image",code:E},{description:e(()=>[i(" A list item can contain an image ")]),example:e(()=>[a(t(p),null,{default:e(()=>[a(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/rachel.png"}),a(t(u),null,{default:e(()=>[a(t(o),{as:"a"},{default:e(()=>[i("Rachel")]),_:1}),a(t(_),null,{default:e(()=>[i(" Last seen watching "),M,i(" just now. ")]),_:1})]),_:1})]),_:1}),a(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/lindsay.png"}),a(t(u),null,{default:e(()=>[a(t(o),{as:"a"},{default:e(()=>[i("Lindsay")]),_:1}),a(t(_),null,{default:e(()=>[i(" Last seen watching "),O,i(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),a(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/matthew.png"}),a(t(u),null,{default:e(()=>[a(t(o),{as:"a"},{default:e(()=>[i("Matthew")]),_:1}),a(t(_),null,{default:e(()=>[i(" Last seen watching "),q,i(" yesterday. ")]),_:1})]),_:1})]),_:1}),a(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/jenny.jpg"}),a(t(u),null,{default:e(()=>[a(t(o),{as:"a"},{default:e(()=>[i("Jenny Hess")]),_:1}),a(t(_),null,{default:e(()=>[i(" Last seen watching "),N,i(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),a(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/veronika.jpg"}),a(t(u),null,{default:e(()=>[a(t(o),{as:"a"},{default:e(()=>[i("Veronika Ossi")]),_:1}),a(t(_),null,{default:e(()=>[i(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},K=`<template>
  <List>
    <ListItem>
      <ListHeader>New York City</ListHeader>
      A lovely city
    </ListItem>
    <ListItem>
      <ListHeader>Chicago</ListHeader>
      Also quite a lovely city
    </ListItem>
    <ListItem>
      <ListHeader>Los Angeles</ListHeader>
      Sometimes can be a lovely city
    </ListItem>
    <ListItem>
      <ListHeader>San Francisco</ListHeader>
      What a lovely city
    </ListItem>
  </List>
</template>`,Y=S({__name:"HeaderDoc",setup(d){return(r,c)=>(n(),l(L,{label:"Hedaer",code:K},{description:e(()=>[i(" A list item can contain a header ")]),example:e(()=>[a(t(p),null,{default:e(()=>[a(t(s),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i("New York City")]),_:1}),i(" A lovely city ")]),_:1}),a(t(s),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i("Chicago")]),_:1}),i(" Also quite a lovely city ")]),_:1}),a(t(s),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i("Los Angeles")]),_:1}),i(" Sometimes can be a lovely city ")]),_:1}),a(t(s),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i("San Francisco")]),_:1}),i(" What a lovely city ")]),_:1})]),_:1})]),_:1}))}}),U=`<template>
  <List>
    <ListItem>
      <Icon name="map marker" />
      <ListContent>
        <ListHeader as="a">Krolewskie Jadlo</ListHeader>
        <ListDescription>
          An excellent polish restaurant, quick delivery and hearty, filling meals.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Icon name="map marker" />
      <ListContent>
        <ListHeader as="a">Xian Famous Foods</ListHeader>
        <ListDescription>
          A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Icon name="map marker" />
      <ListContent>
        <ListHeader as="a">Sapporo Haru</ListHeader>
        <ListDescription>
          Greenpoint's best choice for quick and delicious sushi.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Icon name="map marker" />
      <ListContent>
        <ListHeader as="a">Enid's</ListHeader>
        <ListDescription>
          At night a bar, during the day a delicious brunch spot.
        </ListDescription>
      </ListContent>
    </ListItem>
  </List>
</template>`,X=S({__name:"DescriptionDoc",setup(d){return(r,c)=>(n(),l(L,{label:"Description",code:U},{description:e(()=>[i(" A list item can contain a description ")]),example:e(()=>[a(t(p),null,{default:e(()=>[a(t(s),null,{default:e(()=>[a(t(C),{name:"map marker"}),a(t(u),null,{default:e(()=>[a(t(o),{as:"a"},{default:e(()=>[i("Krolewskie Jadlo")]),_:1}),a(t(_),null,{default:e(()=>[i(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),a(t(s),null,{default:e(()=>[a(t(C),{name:"map marker"}),a(t(u),null,{default:e(()=>[a(t(o),{as:"a"},{default:e(()=>[i("Xian Famous Foods")]),_:1}),a(t(_),null,{default:e(()=>[i(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),a(t(s),null,{default:e(()=>[a(t(C),{name:"map marker"}),a(t(u),null,{default:e(()=>[a(t(o),{as:"a"},{default:e(()=>[i("Sapporo Haru")]),_:1}),a(t(_),null,{default:e(()=>[i(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),a(t(s),null,{default:e(()=>[a(t(C),{name:"map marker"}),a(t(u),null,{default:e(()=>[a(t(o),{as:"a"},{default:e(()=>[i("Enid's")]),_:1}),a(t(_),null,{default:e(()=>[i(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Q=`<template>
  <List horizontal>
    <ListItem v-for="item in items">
      <Image avatar :src="item.avatar" />
      <ListContent>
        <ListHeader>{{ item.name }}</ListHeader>
        {{ item.description }}
      </ListContent>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import {
  List,
  ListItem,
  ListContent,
  ListHeader,
  Image,
} from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/images/avatar/small/tom.jpg',
    name: 'Tom',
    description: 'Top Contributor',
  },
  {
    avatar: '/images/avatar/small/christian.jpg',
    name: 'Christian Rocha',
    description: 'Admin',
  },
  {
    avatar: '/images/avatar/small/matt.jpg',
    name: 'Matt',
    description: 'Top Rated User',
  },
])
<\/script>`,Z=S({__name:"HorizontalDoc",setup(d){const r=I([{avatar:"/vue-fomantic-ui/images/avatar/small/tom.jpg",name:"Tom",description:"Top Contributor"},{avatar:"/vue-fomantic-ui/images/avatar/small/christian.jpg",name:"Christian Rocha",description:"Admin"},{avatar:"/vue-fomantic-ui/images/avatar/small/matt.jpg",name:"Matt",description:"Top Rated User"}]);return(c,H)=>(n(),l(L,{label:"Horizontal",code:Q},{description:e(()=>[i(" A list can be formatted to have items appear horizontally ")]),example:e(()=>[a(t(p),{horizontal:""},{default:e(()=>[(n(!0),h(y,null,b(r.value,m=>(n(),l(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:m.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i(f(m.name),1)]),_:2},1024),i(" "+f(m.description),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),ee=`<template>
  <Segment inverted>
    <List inverted relaxed divided>
      <ListItem v-for="item in items">
        <ListContent>
          <ListHeader>{{ item.name }}</ListHeader>
          {{ item.description }}
        </ListContent>
      </ListItem>
    </List>
  </Segment>
</template>

<script setup>
import { ref } from 'vue'
import {
  List,
  ListItem,
  ListContent,
  ListHeader,
  Segment,
} from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'Snickerdoodle',
    description: 'An excellent companion',
  },
  {
    name: 'Poodle',
    description: 'A poodle, its pretty basic',
  },
  {
    name: 'Paulo',
    description: 'He\\'s also a dog',
  },
])
<\/script>`,te=S({__name:"InvertedDoc",setup(d){const r=I([{name:"Snickerdoodle",description:"An excellent companion"},{name:"Poodle",description:"A poodle, its pretty basic"},{name:"Paulo",description:"He's also a dog"}]);return(c,H)=>(n(),l(L,{label:"Inverted",code:ee},{description:e(()=>[i(" A list can be formatted to have items appear horizontally ")]),example:e(()=>[a(t(j),{inverted:""},{default:e(()=>[a(t(p),{inverted:"",relaxed:"",divided:""},{default:e(()=>[(n(!0),h(y,null,b(r.value,m=>(n(),l(t(s),null,{default:e(()=>[a(t(u),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i(f(m.name),1)]),_:2},1024),i(" "+f(m.description),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}))}}),ae=`<template>
  <List selection vertical-align="middle">
    <ListItem v-for="item in items">
      <Image avatar :src="item.avatar" />
      <ListContent>
        <ListHeader>{{ item.name }}</ListHeader>
        {{ item.description }}
      </ListContent>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import { List, ListItem, ListContent, ListHeader, Image } from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/helen.jpg',
    name: 'Helen',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/christian.jpg',
    name: 'Christian',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/daniel.jpg',
    name: 'Daniel',
  },
])
<\/script>`,ie=S({__name:"SelectionDoc",setup(d){const r=I([{avatar:"/vue-fomantic-ui/images/avatar/small/helen.jpg",name:"Helen"},{avatar:"/vue-fomantic-ui/images/avatar/small/christian.jpg",name:"Christian"},{avatar:"/vue-fomantic-ui/images/avatar/small/daniel.jpg",name:"Daniel"}]);return(c,H)=>(n(),l(L,{label:"Selection",code:ae},{description:e(()=>[i(" A selection list formats list items as possible choices ")]),example:e(()=>[a(t(p),{selection:"","vertical-align":"middle"},{default:e(()=>[(n(!0),h(y,null,b(r.value,m=>(n(),l(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:m.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i(f(m.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),se=`<template>
  <List animated vertical-align="middle">
    <ListItem v-for="item in items">
      <Image avatar :src="item.avatar" />
      <ListContent>
        <ListHeader>{{ item.name }}</ListHeader>
        {{ item.description }}
      </ListContent>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import { List, ListItem, ListContent, ListHeader, Image } from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/helen.jpg',
    name: 'Helen',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/christian.jpg',
    name: 'Christian',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/daniel.jpg',
    name: 'Daniel',
  },
])
<\/script>`,ne=S({__name:"AnimatedDoc",setup(d){const r=I([{avatar:"/vue-fomantic-ui/images/avatar/small/helen.jpg",name:"Helen"},{avatar:"/vue-fomantic-ui/images/avatar/small/christian.jpg",name:"Christian"},{avatar:"/vue-fomantic-ui/images/avatar/small/daniel.jpg",name:"Daniel"}]);return(c,H)=>(n(),l(L,{label:"Animated",code:se},{description:e(()=>[i(" A list can animate to set the current item apart from the list ")]),example:e(()=>[a(t(p),{animated:"","vertical-align":"middle"},{default:e(()=>[(n(!0),h(y,null,b(r.value,m=>(n(),l(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:m.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i(f(m.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),le=`<template>
  <List divided vertical-align="middle">
    <ListItem v-for="item in items">
      <Image avatar :src="item.avatar" />
      <ListContent>
        <ListHeader as="a">{{ item.name }}</ListHeader>
      </ListContent>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import { List, ListItem, ListContent, ListHeader, Image } from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/daniel.jpg',
    name: 'Daniel Louise',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/stevie.jpg',
    name: 'Stevie Feliciano',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/elliot.jpg',
    name: 'Elliot Fu',
  },
])
<\/script>`,re=S({__name:"DividedDoc",setup(d){const r=I([{avatar:"/vue-fomantic-ui/images/avatar/small/daniel.jpg",name:"Daniel Louise"},{avatar:"/vue-fomantic-ui/images/avatar/small/stevie.jpg",name:"Stevie Feliciano"},{avatar:"/vue-fomantic-ui/images/avatar/small/elliot.jpg",name:"Elliot Fu"}]);return(c,H)=>(n(),l(L,{label:"Divided",code:le},{description:e(()=>[i(" A list can show divisions between content ")]),example:e(()=>[a(t(p),{divided:"","vertical-align":"middle"},{default:e(()=>[(n(!0),h(y,null,b(r.value,m=>(n(),l(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:m.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(o),{as:"a"},{default:e(()=>[i(f(m.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),oe=`<template>
  <List celled>
    <ListItem v-for="item in items">
      <Image avatar :src="item.avatar" />
      <ListContent>
        <ListHeader>{{ item.name }}</ListHeader>
        {{ item.description }}
      </ListContent>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import {
  List,
  ListItem,
  ListContent,
  ListHeader,
  Segment,
} from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/images/avatar/small/helen.jpg',
    name: 'Snickerdoodle',
    description: 'An excellent companion',
  },
  {
    avatar: '/images/avatar/small/christian.jpg',
    name: 'Poodle',
    description: 'A poodle, its pretty basic',
  },
  {
    avatar: '/images/avatar/small/daniel.jpg',
    name: 'Paulo',
    description: 'He\\'s also a dog',
  },
])
<\/script>`,me=S({__name:"CelledDoc",setup(d){const r=I([{avatar:"/vue-fomantic-ui/images/avatar/small/helen.jpg",name:"Snickerdoodle",description:"An excellent companion"},{avatar:"/vue-fomantic-ui/images/avatar/small/christian.jpg",name:"Poodle",description:"A poodle, its pretty basic"},{avatar:"/vue-fomantic-ui/images/avatar/small/daniel.jpg",name:"Paulo",description:"He's also a dog"}]);return(c,H)=>(n(),l(L,{label:"Celled",code:oe},{description:e(()=>[i(" A list can divide its items into cells ")]),example:e(()=>[a(t(p),{celled:""},{default:e(()=>[(n(!0),h(y,null,b(r.value,m=>(n(),l(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:m.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i(f(m.name),1)]),_:2},1024),i(" "+f(m.description),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),ue=`<template>
  <List v-for="size in sizes" :size="size" horizontal divided>
    <ListItem v-for="item in items">
      <Image avatar :src="item.avatar" />
      <ListContent>
        <ListHeader>{{ item.name }}</ListHeader>
      </ListContent>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import { List, ListItem, ListContent, ListHeader, Image } from 'vue-fomantic-ui'

const sizes = ref(['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'])

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/helen.jpg',
    name: 'Helen',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/christian.jpg',
    name: 'Christian',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/daniel.jpg',
    name: 'Daniel',
  },
])
<\/script>`,ce=S({__name:"SizeDoc",setup(d){const r=I(["mini","tiny","small","large","big","huge","massive"]),c=I([{avatar:"/vue-fomantic-ui/images/avatar/small/helen.jpg",name:"Helen"},{avatar:"/vue-fomantic-ui/images/avatar/small/christian.jpg",name:"Christian"},{avatar:"/vue-fomantic-ui/images/avatar/small/daniel.jpg",name:"Daniel"}]);return(H,m)=>(n(),l(L,{label:"Size",code:ue},{description:e(()=>[i(" A list can vary in size ")]),example:e(()=>[(n(!0),h(y,null,b(r.value,x=>(n(),l(t(p),{size:x,horizontal:"",divided:""},{default:e(()=>[(n(!0),h(y,null,b(c.value,D=>(n(),l(t(s),null,{default:e(()=>[a(t(v),{avatar:"",src:D.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(o),null,{default:e(()=>[i(f(D.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:2},1032,["size"]))),256))]),_:1}))}}),Le={__name:"List",setup(d){const r=[{id:"list",label:"List",category:"Types",component:$},{id:"bulleted",label:"Bulleted",category:"Types",component:z},{id:"ordered",label:"Ordered",category:"Types",component:P},{id:"link",label:"Link",category:"Types",component:R},{id:"icon",label:"Icon",category:"Content",component:G},{id:"image",label:"Image",category:"Content",component:W},{id:"header",label:"Header",category:"Content",component:Y},{id:"description",label:"Description",category:"Content",component:X},{id:"horizontal",label:"Horizontal",category:"Variations",component:Z},{id:"inverted",label:"Inverted",category:"Variations",component:te},{id:"selection",label:"Selection",category:"Variations",component:ie},{id:"animated",label:"Animated",category:"Variations",component:ne},{id:"divided",label:"Divided",category:"Variations",component:re},{id:"celled",label:"Celled",category:"Variations",component:me},{id:"size",label:"Size",category:"Variations",component:ce}];return(c,H)=>(n(),l(k,{title:"List",description:"A table displays a collections of data grouped into rows","component-docs":r}))}};export{Le as default};
