import{e as g,r as I,o as s,c as r,w as e,a as i,b as a,u as t,p,y as f,A as S,C as b,s as n,t as _,K as C,G as m,L as v,M as k,d as H,P as u,q as h,Y as A,D as j}from"./index-CFQxuMLK.js";import{_ as L}from"./DocSection-bYVctxpZ.js";const w=`<template>
  <List :items="items" />
</template>

<script setup>
import { ref } from 'vue'
import { List } from 'vue-fomantic-ui'

const items = ref(['Apples', 'Pears', 'Oranges'])
<\/script>`,$=g({__name:"ListDoc",setup(d){const o=I(["Apples","Pears","Oranges"]);return(c,y)=>(s(),r(L,{label:"List",code:w},{description:e(()=>[i(" A list groups related content ")]),example:e(()=>[a(t(p),{items:o.value},null,8,["items"])]),_:1}))}}),F=["href"],T=["href"],z=`<template>
  <List>
    <ListItem
      v-for="item in items"
      :key="item.content"
      :icon="item.icon"
    >
      <template v-if="item.icon === 'mail'">
        <a :href="'mailto:' + item.content">{{ item.content }}</a>
      </template>
      <template v-else-if="item.icon === 'linkify'">
        <a :href="'https://' + item.content">{{ item.content }}</a>
      </template>
      <template v-else>
        {{ item.content }}
      </template>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import { List, ListItem } from 'vue-fomantic-ui'

const items = ref([
  { icon: 'users', content: 'Fomantic UI' },
  { icon: 'marker', content: 'Worldwide' },
  { icon: 'mail', content: 'contact@fomantic-ui.com' },
  { icon: 'linkify', content: 'fomantic-ui.com' },
])
<\/script>`,U=g({__name:"ListWithIconDoc",setup(d){const o=I([{icon:"users",content:"Fomantic UI"},{icon:"marker",content:"Worldwide"},{icon:"mail",content:"contact@fomantic-ui.com"},{icon:"linkify",content:"fomantic-ui.com"}]);return(c,y)=>(s(),r(L,{code:z},{example:e(()=>[a(t(p),null,{default:e(()=>[(s(!0),f(S,null,b(o.value,l=>(s(),r(t(n),{key:l.content,icon:l.icon},{default:e(()=>[l.icon==="mail"?(s(),f("a",{key:0,href:"mailto:"+l.content},_(l.content),9,F)):l.icon==="linkify"?(s(),f("a",{key:1,href:"https://"+l.content},_(l.content),9,T)):(s(),f(S,{key:2},[i(_(l.content),1)],64))]),_:2},1032,["icon"]))),128))]),_:1})]),_:1}))}}),P=`<template>
  <List relaxed divided>
    <ListItem
      v-for="item in items"
      :key="item.header"
    >
      <template #prepend>
        <Icon name="github" size="large" aligned="middle" />
      </template>

      <ListHeader as="a">{{ item.header }}</ListHeader>
      <ListDescription>{{ item.description }}</ListDescription>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import { List, ListItem, ListHeader, ListDescription, Icon } from 'vue-fomantic-ui'

const items = ref([
  { header: 'fomantic/Fomantic-UI', description: 'Updated 10 mins ago', as: 'a' },
  { header: 'fomantic/Fomantic-UI-Docs', description: 'Updated 22 mins ago', as: 'a' },
  { header: 'fomantic/Fomantic-UI-LESS', description: 'Updated 34 mins ago', as: 'a' },
])
<\/script>`,B=g({__name:"ListWithHeaderDescriptionDoc",setup(d){const o=I([{header:"fomantic/Fomantic-UI",description:"Updated 10 mins ago",as:"a"},{header:"fomantic/Fomantic-UI-Docs",description:"Updated 22 mins ago",as:"a"},{header:"fomantic/Fomantic-UI-LESS",description:"Updated 34 mins ago",as:"a"}]);return(c,y)=>(s(),r(L,{code:P},{example:e(()=>[a(t(p),{relaxed:"",divided:""},{default:e(()=>[(s(!0),f(S,null,b(o.value,l=>(s(),r(t(n),{key:l.header},{prepend:e(()=>[a(t(C),{name:"github",size:"large",aligned:"middle"})]),default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i(_(l.header),1)]),_:2},1024),a(t(v),null,{default:e(()=>[i(_(l.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}}),V=`<template>
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
</template>`,R={__name:"BulletedDoc",setup(d){return(o,c)=>(s(),r(L,{label:"Bulleted",code:V},{description:e(()=>[i(" A list can mark items with a bullet ")]),example:e(()=>[a(t(p),{bulleted:""},{default:e(()=>[a(t(n),null,{default:e(()=>[i("Gaining Access")]),_:1}),a(t(n),null,{default:e(()=>[i("Inviting Friends")]),_:1}),a(t(n),null,{default:e(()=>[i(" Benefits "),a(t(k),null,{default:e(()=>[a(t(n),null,{default:e(()=>[i("Link to somewhere")]),_:1}),a(t(n),null,{default:e(()=>[i("Rebates")]),_:1}),a(t(n),null,{default:e(()=>[i("Discounts")]),_:1})]),_:1})]),_:1}),a(t(n),null,{default:e(()=>[i("Warranty")]),_:1})]),_:1})]),_:1}))}},G=H("a",null,"Languages",-1),q=`<template>
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
</template>`,J={__name:"OrderedDoc",setup(d){return(o,c)=>(s(),r(L,{label:"Ordered",code:q},{description:e(()=>[i(" A list can be ordered numerically ")]),example:e(()=>[a(t(p),{ordered:""},{default:e(()=>[a(t(n),{as:"a"},{default:e(()=>[i("Getting Started")]),_:1}),a(t(n),{as:"a"},{default:e(()=>[i("Introduction")]),_:1}),a(t(n),null,{default:e(()=>[G,a(t(k),null,{default:e(()=>[a(t(n),{as:"a"},{default:e(()=>[i("HTML")]),_:1}),a(t(n),{as:"a"},{default:e(()=>[i("Javascript")]),_:1}),a(t(n),{as:"a"},{default:e(()=>[i("CSS")]),_:1})]),_:1})]),_:1}),a(t(n),{as:"a"},{default:e(()=>[i("Review")]),_:1})]),_:1})]),_:1}))}},W=`<template>
  <List link>
    <ListItem active>Home</ListItem>
    <ListItem as="a">About</ListItem>
    <ListItem as="a">Jobs</ListItem>
    <ListItem as="a">Team</ListItem>
  </List>
</template>`,E={__name:"LinkDoc",setup(d){return(o,c)=>(s(),r(L,{label:"Link",code:W},{description:e(()=>[i(" A list can be specially formatted for navigation links ")]),example:e(()=>[a(t(p),{link:""},{default:e(()=>[a(t(n),{active:""},{default:e(()=>[i("Home")]),_:1}),a(t(n),{as:"a"},{default:e(()=>[i("About")]),_:1}),a(t(n),{as:"a"},{default:e(()=>[i("Jobs")]),_:1}),a(t(n),{as:"a"},{default:e(()=>[i("Team")]),_:1})]),_:1})]),_:1}))}},M=`<template>
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
</template>`,O={__name:"IconDoc",setup(d){return(o,c)=>(s(),r(L,{label:"Icon",code:M},{description:e(()=>[i(" A list item can contain an icon ")]),example:e(()=>[a(t(p),null,{default:e(()=>[a(t(n),{as:"a"},{default:e(()=>[a(t(C),{name:"help"}),a(t(u),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i("Floated Icon")]),_:1}),a(t(v),null,{default:e(()=>[i(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),a(t(n),{as:"a"},{default:e(()=>[a(t(C),{name:"right triangle"}),a(t(u),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i("Icon Alignment")]),_:1}),a(t(v),null,{default:e(()=>[i(" Floated icons are by default top aligned. To have an icon top aligned try this example. ")]),_:1})]),_:1})]),_:1}),a(t(n),null,{default:e(()=>[a(t(C),{name:"help"}),i(" Inline Text ")]),_:1})]),_:1})]),_:1}))}},N=H("a",null,[H("b",null,"Arrested Development")],-1),Y=H("a",null,[H("b",null,"Bob's Burgers")],-1),K=H("a",null,[H("b",null,"The Godfather Part 2")],-1),X=H("a",null,[H("b",null,"Twin Peaks")],-1),Q=`<template>
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
</template>`,Z={__name:"ImageDoc",setup(d){return(o,c)=>(s(),r(L,{label:"Image",code:Q},{description:e(()=>[i(" A list item can contain an image ")]),example:e(()=>[a(t(p),null,{default:e(()=>[a(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/rachel.png"}),a(t(u),null,{default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i("Rachel")]),_:1}),a(t(v),null,{default:e(()=>[i(" Last seen watching "),N,i(" just now. ")]),_:1})]),_:1})]),_:1}),a(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/lindsay.png"}),a(t(u),null,{default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i("Lindsay")]),_:1}),a(t(v),null,{default:e(()=>[i(" Last seen watching "),Y,i(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),a(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/matthew.png"}),a(t(u),null,{default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i("Matthew")]),_:1}),a(t(v),null,{default:e(()=>[i(" Last seen watching "),K,i(" yesterday. ")]),_:1})]),_:1})]),_:1}),a(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/jenny.jpg"}),a(t(u),null,{default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i("Jenny Hess")]),_:1}),a(t(v),null,{default:e(()=>[i(" Last seen watching "),X,i(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),a(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:"/vue-fomantic-ui/images/avatar/small/veronika.jpg"}),a(t(u),null,{default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i("Veronika Ossi")]),_:1}),a(t(v),null,{default:e(()=>[i(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ee=`<template>
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
</template>`,te=g({__name:"HeaderDoc",setup(d){return(o,c)=>(s(),r(L,{label:"Hedaer",code:ee},{description:e(()=>[i(" A list item can contain a header ")]),example:e(()=>[a(t(p),null,{default:e(()=>[a(t(n),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i("New York City")]),_:1}),i(" A lovely city ")]),_:1}),a(t(n),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i("Chicago")]),_:1}),i(" Also quite a lovely city ")]),_:1}),a(t(n),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i("Los Angeles")]),_:1}),i(" Sometimes can be a lovely city ")]),_:1}),a(t(n),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i("San Francisco")]),_:1}),i(" What a lovely city ")]),_:1})]),_:1})]),_:1}))}}),ae=`<template>
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
</template>`,ie=g({__name:"DescriptionDoc",setup(d){return(o,c)=>(s(),r(L,{label:"Description",code:ae},{description:e(()=>[i(" A list item can contain a description ")]),example:e(()=>[a(t(p),null,{default:e(()=>[a(t(n),null,{default:e(()=>[a(t(C),{name:"map marker"}),a(t(u),null,{default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i("Krolewskie Jadlo")]),_:1}),a(t(v),null,{default:e(()=>[i(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),a(t(n),null,{default:e(()=>[a(t(C),{name:"map marker"}),a(t(u),null,{default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i("Xian Famous Foods")]),_:1}),a(t(v),null,{default:e(()=>[i(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),a(t(n),null,{default:e(()=>[a(t(C),{name:"map marker"}),a(t(u),null,{default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i("Sapporo Haru")]),_:1}),a(t(v),null,{default:e(()=>[i(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),a(t(n),null,{default:e(()=>[a(t(C),{name:"map marker"}),a(t(u),null,{default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i("Enid's")]),_:1}),a(t(v),null,{default:e(()=>[i(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),ne=`<template>
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
<\/script>`,se=g({__name:"HorizontalDoc",setup(d){const o=I([{avatar:"/vue-fomantic-ui/images/avatar/small/tom.jpg",name:"Tom",description:"Top Contributor"},{avatar:"/vue-fomantic-ui/images/avatar/small/christian.jpg",name:"Christian Rocha",description:"Admin"},{avatar:"/vue-fomantic-ui/images/avatar/small/matt.jpg",name:"Matt",description:"Top Rated User"}]);return(c,y)=>(s(),r(L,{label:"Horizontal",code:ne},{description:e(()=>[i(" A list can be formatted to have items appear horizontally ")]),example:e(()=>[a(t(p),{horizontal:""},{default:e(()=>[(s(!0),f(S,null,b(o.value,l=>(s(),r(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:l.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i(_(l.name),1)]),_:2},1024),i(" "+_(l.description),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),le=`<template>
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
<\/script>`,oe=g({__name:"InvertedDoc",setup(d){const o=I([{name:"Snickerdoodle",description:"An excellent companion"},{name:"Poodle",description:"A poodle, its pretty basic"},{name:"Paulo",description:"He's also a dog"}]);return(c,y)=>(s(),r(L,{label:"Inverted",code:le},{description:e(()=>[i(" A list can be formatted to have items appear horizontally ")]),example:e(()=>[a(t(A),{inverted:""},{default:e(()=>[a(t(p),{inverted:"",relaxed:"",divided:""},{default:e(()=>[(s(!0),f(S,null,b(o.value,l=>(s(),r(t(n),null,{default:e(()=>[a(t(u),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i(_(l.name),1)]),_:2},1024),i(" "+_(l.description),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}))}}),re=`<template>
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
<\/script>`,me=g({__name:"SelectionDoc",setup(d){const o=I([{avatar:"/vue-fomantic-ui/images/avatar/small/helen.jpg",name:"Helen"},{avatar:"/vue-fomantic-ui/images/avatar/small/christian.jpg",name:"Christian"},{avatar:"/vue-fomantic-ui/images/avatar/small/daniel.jpg",name:"Daniel"}]);return(c,y)=>(s(),r(L,{label:"Selection",code:re},{description:e(()=>[i(" A selection list formats list items as possible choices ")]),example:e(()=>[a(t(p),{selection:"","vertical-align":"middle"},{default:e(()=>[(s(!0),f(S,null,b(o.value,l=>(s(),r(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:l.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i(_(l.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),ce=`<template>
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
<\/script>`,ue=g({__name:"AnimatedDoc",setup(d){const o=I([{avatar:"/vue-fomantic-ui/images/avatar/small/helen.jpg",name:"Helen"},{avatar:"/vue-fomantic-ui/images/avatar/small/christian.jpg",name:"Christian"},{avatar:"/vue-fomantic-ui/images/avatar/small/daniel.jpg",name:"Daniel"}]);return(c,y)=>(s(),r(L,{label:"Animated",code:ce},{description:e(()=>[i(" A list can animate to set the current item apart from the list ")]),example:e(()=>[a(t(p),{animated:"","vertical-align":"middle"},{default:e(()=>[(s(!0),f(S,null,b(o.value,l=>(s(),r(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:l.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i(_(l.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),de=`<template>
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
<\/script>`,pe=g({__name:"DividedDoc",setup(d){const o=I([{avatar:"/vue-fomantic-ui/images/avatar/small/daniel.jpg",name:"Daniel Louise"},{avatar:"/vue-fomantic-ui/images/avatar/small/stevie.jpg",name:"Stevie Feliciano"},{avatar:"/vue-fomantic-ui/images/avatar/small/elliot.jpg",name:"Elliot Fu"}]);return(c,y)=>(s(),r(L,{label:"Divided",code:de},{description:e(()=>[i(" A list can show divisions between content ")]),example:e(()=>[a(t(p),{divided:"","vertical-align":"middle"},{default:e(()=>[(s(!0),f(S,null,b(o.value,l=>(s(),r(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:l.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(m),{as:"a"},{default:e(()=>[i(_(l.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),Le=`<template>
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
<\/script>`,_e=g({__name:"CelledDoc",setup(d){const o=I([{avatar:"/vue-fomantic-ui/images/avatar/small/helen.jpg",name:"Snickerdoodle",description:"An excellent companion"},{avatar:"/vue-fomantic-ui/images/avatar/small/christian.jpg",name:"Poodle",description:"A poodle, its pretty basic"},{avatar:"/vue-fomantic-ui/images/avatar/small/daniel.jpg",name:"Paulo",description:"He's also a dog"}]);return(c,y)=>(s(),r(L,{label:"Celled",code:Le},{description:e(()=>[i(" A list can divide its items into cells ")]),example:e(()=>[a(t(p),{celled:""},{default:e(()=>[(s(!0),f(S,null,b(o.value,l=>(s(),r(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:l.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i(_(l.name),1)]),_:2},1024),i(" "+_(l.description),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),fe=`<template>
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
<\/script>`,ve=g({__name:"SizeDoc",setup(d){const o=I(["mini","tiny","small","large","big","huge","massive"]),c=I([{avatar:"/vue-fomantic-ui/images/avatar/small/helen.jpg",name:"Helen"},{avatar:"/vue-fomantic-ui/images/avatar/small/christian.jpg",name:"Christian"},{avatar:"/vue-fomantic-ui/images/avatar/small/daniel.jpg",name:"Daniel"}]);return(y,l)=>(s(),r(L,{label:"Size",code:fe},{description:e(()=>[i(" A list can vary in size ")]),example:e(()=>[(s(!0),f(S,null,b(o.value,x=>(s(),r(t(p),{size:x,horizontal:"",divided:""},{default:e(()=>[(s(!0),f(S,null,b(c.value,D=>(s(),r(t(n),null,{default:e(()=>[a(t(h),{avatar:"",src:D.avatar},null,8,["src"]),a(t(u),null,{default:e(()=>[a(t(m),null,{default:e(()=>[i(_(D.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:2},1032,["size"]))),256))]),_:1}))}}),Ie={__name:"List",setup(d){const o=[{id:"list",label:"List",category:"Types",component:[$,U,B]},{id:"bulleted",label:"Bulleted",category:"Types",component:R},{id:"ordered",label:"Ordered",category:"Types",component:J},{id:"link",label:"Link",category:"Types",component:E},{id:"icon",label:"Icon",category:"Content",component:O},{id:"image",label:"Image",category:"Content",component:Z},{id:"header",label:"Header",category:"Content",component:te},{id:"description",label:"Description",category:"Content",component:ie},{id:"horizontal",label:"Horizontal",category:"Variations",component:se},{id:"inverted",label:"Inverted",category:"Variations",component:oe},{id:"selection",label:"Selection",category:"Variations",component:me},{id:"animated",label:"Animated",category:"Variations",component:ue},{id:"divided",label:"Divided",category:"Variations",component:pe},{id:"celled",label:"Celled",category:"Variations",component:_e},{id:"size",label:"Size",category:"Variations",component:ve}];return(c,y)=>(s(),r(j,{title:"List",description:"A table displays a collections of data grouped into rows","component-docs":o}))}};export{Ie as default};
