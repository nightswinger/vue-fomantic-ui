import{O as u,r as _,o as c,c as m,w as e,a as o,b as t,u as n,V as r,F as i,m as g,y as b,d as y,a1 as A,a9 as k,aa as h,ab as v,A as x,D as I,ac as w,ad as D,ae as f,af as $,e as L,f as C}from"./index-BtqR3fgc.js";import{_ as p}from"./DocSection-Bplbrfto.js";const T=`<template>
  <Menu
    :items="items"
    :widths="items.length"
    @selected="(v) => console.log(v)"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(["Editorials", "Reviews", "Upcoming Events"])
<\/script>`,B=u({__name:"MenuDoc",setup(l){const a=_(["Editorials","Reviews","Upcoming Events"]);return(s,d)=>(c(),m(p,{label:"Menu",code:T},{description:e(()=>[o(" A menu ")]),example:e(()=>[t(n(r),{items:a.value,widths:a.value.length,onSelected:d[0]||(d[0]=M=>console.log(M))},null,8,["items","widths"])]),_:1}))}}),V=`<template>
  <Menu secondary :items="items">
    <template #right>
      <MenuItem as="div">
        <Input icon="search" placeholder="Search..." />
      </MenuItem>
      <MenuItem>Logout</MenuItem>
    </template>
  </Menu>

  <Menu vertical secondary :items="items" />
</template>

<script setup>
import { ref } from 'vue'
import { Menu, MenuItem, Input } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])
<\/script>`,H=u({__name:"SecondaryMenuDoc",setup(l){const a=_(["Home","Messages","Friends"]);return(s,d)=>(c(),m(p,{label:"Secondary Menu",code:V},{description:e(()=>[o(" A menu can adjust its appearance to de-emphasize its contents ")]),example:e(()=>[t(n(r),{secondary:"",items:a.value},{right:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(g),{icon:"search",placeholder:"Search..."})]),_:1}),t(n(i),null,{default:e(()=>[o("Logout")]),_:1})]),_:1},8,["items"]),t(n(r),{vertical:"",secondary:"",items:a.value},null,8,["items"])]),_:1}))}}),R=y("img",{src:A},null,-1),F=y("img",{src:k},null,-1),z=`<template>
  <Menu pointing :items="items">
    <template #right>
      <MenuItem as="div">
        <Input icon="search" placeholder="Search..." />
      </MenuItem>
    </template>
  </Menu>
  <Segment>
    <img src="/images/wireframe/paragraph.png" />
  </Segment>

  <Menu secondary pointing :items="items">
    <template #right>
      <MenuItem>
        Logout
      </MenuItem>
    </template>
  </Menu>
  <Segment>
    <img src="/images/wireframe/media-paragraph.png" />
  </Segment>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, MenuItem, Input, Segment } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])
<\/script>`,E=u({__name:"PointingDoc",setup(l){const a=_(["Home","Messages","Friends"]);return(s,d)=>(c(),m(p,{label:"Pointing",code:z},{description:e(()=>[o(" A menu can point to show its relationship to nearby content ")]),example:e(()=>[t(n(r),{pointing:"",items:a.value},{right:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(g),{icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["items"]),t(n(b),null,{default:e(()=>[R]),_:1}),t(n(r),{secondary:"",pointing:"",items:a.value},{right:e(()=>[t(n(i),null,{default:e(()=>[o(" Logout ")]),_:1})]),_:1},8,["items"]),t(n(b),null,{default:e(()=>[F]),_:1})]),_:1}))}}),P=`<template>
  <Menu
    tabular
    :items="['Bio', 'Photos']"
  />
</template>`,N=u({__name:"TabularDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Tabular",code:P},{description:e(()=>[o(" A menu can be formatted to show tabs of information ")]),example:e(()=>[t(n(r),{tabular:"",items:["Bio","Photos"]})]),_:1}))}}),j=`<template>
  <Menu text :items="items" />
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { text: "SORT BY", header: true },
  { text: "Closest" },
  { text: "Most Comments" },
  { text: "Most Popular" },
])
<\/script>`,G=u({__name:"TextDoc",setup(l){const a=_([{text:"SORT BY",header:!0},{text:"Closest"},{text:"Most Comments"},{text:"Most Popular"}]);return(s,d)=>(c(),m(p,{label:"Text",code:j},{description:e(()=>[o(" A menu can be formatted for text content ")]),example:e(()=>[t(n(r),{text:"",items:a.value},null,8,["items"])]),_:1}))}}),U=`<template>
  <Menu vertical :items="items" />
</template>

<script setup>
import { ref } from 'vue'
import { Menu, Label, Input } from 'vue-fomantic-ui'

const items = ref([
  { text: [h(Text, 'Inbox'), h(Label, { color: 'teal' , pointing: 'left' }, () => 1)], color: 'teal' },
  { text: [h(Text, 'Spam'), h(Label, {}, () => 51)] },
  { text: [h(Text, 'Updates'), h(Label, {}, () => 1)] },
  { text: [h(Input, { icon: 'search', placeholder: 'Search mail...', transparent: true })], as: 'div' },
])
<\/script>`,O=u({__name:"VerticalMenuDoc",setup(l){const a=_([{text:[h(v,"Inbox"),h(x,{color:"teal",pointing:"left"},()=>1)],color:"teal"},{text:[h(v,"Spam"),h(x,{},()=>51)]},{text:[h(v,"Updates"),h(x,{},()=>1)]},{text:[h(g,{icon:"search",placeholder:"Search mail...",transparent:!0})],as:"div"}]);return(s,d)=>(c(),m(p,{label:"Vertical Menu",code:U},{description:e(()=>[o(" A vertical menu displays elements vertically. ")]),example:e(()=>[t(n(r),{vertical:"",items:a.value},null,8,["items"])]),_:1}))}}),Y=`<template>
  <Menu pagination>
    <MenuItem>1</MenuItem>
    <MenuItem disabled>...</MenuItem>
    <MenuItem>10</MenuItem>
    <MenuItem>11</MenuItem>
    <MenuItem>12</MenuItem>
  </Menu>
</template>`,J=u({__name:"PaginationDoc",setup(l){return _(["Home","Messages","Friends"]),(a,s)=>(c(),m(p,{label:"Pagination",code:Y},{description:e(()=>[o(" A pagination menu is specially formatted to present links to pages of content ")]),example:e(()=>[t(n(r),{pagination:""},{default:e(()=>[t(n(i),null,{default:e(()=>[o("1")]),_:1}),t(n(i),{disabled:""},{default:e(()=>[o("...")]),_:1}),t(n(i),null,{default:e(()=>[o("10")]),_:1}),t(n(i),null,{default:e(()=>[o("11")]),_:1}),t(n(i),null,{default:e(()=>[o("12")]),_:1})]),_:1})]),_:1}))}}),q=`<template>
  <Menu :items="items" />
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { text: 'Our Company', header: true },
  { text: 'About Us' },
  { text: 'Jobs' },
  { text: 'Locations' },
])
<\/script>`,W=u({__name:"HeaderDoc",setup(l){const a=_([{text:"Our Company",header:!0},{text:"About Us"},{text:"Jobs"},{text:"Locations"}]);return(s,d)=>(c(),m(p,{label:"Header",code:q},{description:e(()=>[o(" A menu item may include a header or may itself be a header ")]),example:e(()=>[t(n(r),{items:a.value},null,8,["items"])]),_:1}))}}),K=`<template>
  <Menu>
    <MenuItem as="div">
      <Input icon="search" placeholder="Search..." />
    </MenuItem>
    <template #right>
      <MenuItem as="div">
        <Input placeholder="Navigate to..." action="Go" />
      </MenuItem>
    </template>
  </Menu>
</template>`,Q=u({__name:"InputDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Input",code:K},{description:e(()=>[o(" A menu item can contain an input inside of it ")]),example:e(()=>[t(n(r),null,{right:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(g),{placeholder:"Navigate to...",action:"Go"})]),_:1})]),default:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(g),{icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1}))}}),X=`<template>
  <Menu>
    <MenuItem as="div">
      <Button primary>Sign up</Button>
    </MenuItem>
    <MenuItem as="div">
      <Button>Log in</Button>
    </MenuItem>
  </Menu>
</template>`,Z=u({__name:"ButtonDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Button",code:X},{description:e(()=>[o(" A menu item can contain a button inside of it ")]),example:e(()=>[t(n(r),null,{default:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(I),{primary:""},{default:e(()=>[o("Sign up")]),_:1})]),_:1}),t(n(i),{as:"div"},{default:e(()=>[t(n(I),null,{default:e(()=>[o("Log in")]),_:1})]),_:1})]),_:1})]),_:1}))}}),ee=`<template>
  <Menu>
    <MenuItem link href="https://google.com" target="_blank">
      Visit Google
    </MenuItem>
    <MenuItem link>
      Javascript Link
    </MenuItem>
  </Menu>
</template>`,te=u({__name:"LinkItemDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Link Item",code:ee},{description:e(()=>[o(" A menu may contain a link item, or an item formatted as if it is a link. ")]),example:e(()=>[t(n(r),null,{default:e(()=>[t(n(i),{link:"",href:"https://google.com",target:"_blank"},{default:e(()=>[o(" Visit Google ")]),_:1}),t(n(i),{link:""},{default:e(()=>[o(" Javascript Link ")]),_:1})]),_:1})]),_:1}))}}),ne=`<template>
  <Menu vertical>
    <Dropdown item text="Categories">
      <DropdownMenu>
        <DropdownItem text="Electoronics" />
        <DropdownItem text="Automotive" />
        <DropdownItem text="Home" />
      </DropdownMenu>
    </Dropdown>
  </Menu>
</template>`,oe=u({__name:"DropdownItemDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Dropdown Item",code:ne},{description:e(()=>[o(" An item may contain a nested menu in a dropdown ")]),example:e(()=>[t(n(r),{vertical:""},{default:e(()=>[t(n(w),{item:"",text:"Categories"},{default:e(()=>[t(n(D),null,{default:e(()=>[t(n(f),{text:"Electoronics"}),t(n(f),{text:"Automotive"}),t(n(f),{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),ae=`<template>
  <Menu :items="items">
    <template #right>
      <MenuItem>Sign Up</MenuItem>
      <MenuItem>Help</MenuItem>
    </template>
  </Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, MenuItem } from 'vue-fomantic-ui'

const items = ref(['Browse', 'Submit'])
<\/script>`,ie=u({__name:"RightMenuDoc",setup(l){const a=_(["Browse","Submit"]);return(s,d)=>(c(),m(p,{label:"Right Menu",code:ae},{description:e(()=>[o(" A menu may contain another menu group in the same level as menu items. ")]),example:e(()=>[t(n(r),{items:a.value},{right:e(()=>[t(n(i),null,{default:e(()=>[o("Sign Up")]),_:1}),t(n(i),null,{default:e(()=>[o("Help")]),_:1})]),_:1},8,["items"])]),_:1}))}}),se=`<template>
  <Menu vertical>
    <MenuItem as="div">
      <Input placeholder="Search..." />
    </MenuItem>
    <MenuItem as="div">
      Home
      <MenuMenu>
        <MenuItem>Search</MenuItem>
        <MenuItem>Add</MenuItem>
        <MenuItem>Remove</MenuItem>
      </MenuMenu>
    </MenuItem>
    <MenuItem>
      <Icon name="grid layout" />
      Browse
    </MenuItem>
    <MenuItem>Messages</MenuItem>
    <Dropdown item text="More">
      <DropdownMenu>
        <DropdownItem icon="edit" text="Edit Profile" />
        <DropdownItem icon="globe" text="Choose Language" />
        <DropdownItem icon="settings" text="Account Settings" />
      </DropdownMenu>
    </Dropdown>
  </Menu>
</template>`,re=u({__name:"SubMenuDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Sub Menu",code:se},{description:e(()=>[o(" A menu item may contain another menu nested inside that acts as a grouped sub-menu. ")]),example:e(()=>[t(n(r),{vertical:""},{default:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(g),{placeholder:"Search..."})]),_:1}),t(n(i),{as:"div"},{default:e(()=>[o(" Home "),t(n($),null,{default:e(()=>[t(n(i),null,{default:e(()=>[o("Search")]),_:1}),t(n(i),null,{default:e(()=>[o("Add")]),_:1}),t(n(i),null,{default:e(()=>[o("Remove")]),_:1})]),_:1})]),_:1}),t(n(i),null,{default:e(()=>[t(n(L),{name:"grid layout"}),o(" Browse ")]),_:1}),t(n(i),null,{default:e(()=>[o("Messages")]),_:1}),t(n(w),{item:"",text:"More"},{default:e(()=>[t(n(D),null,{default:e(()=>[t(n(f),{icon:"edit",text:"Edit Profile"}),t(n(f),{icon:"globe",text:"Choose Language"}),t(n(f),{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),ce=`<template>
  <Menu compact>
    <MenuItem>A link</MenuItem>
    <MenuItem as="div" link>div Link</MenuItem>
  </Menu>
</template>`,me=u({__name:"HoverDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Hover",code:ce},{description:e(()=>[o(" A menu item can be hovered ")]),example:e(()=>[t(n(r),{compact:""},{default:e(()=>[t(n(i),null,{default:e(()=>[o("A link")]),_:1}),t(n(i),{as:"div",link:""},{default:e(()=>[o("div Link")]),_:1})]),_:1})]),_:1}))}}),le=`<template>
  <Menu compact>
    <MenuItem active>Link</MenuItem>
  </Menu>
</template>`,ue=u({__name:"ActiveDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Active",code:le},{description:e(()=>[o(" A menu item can be active ")]),example:e(()=>[t(n(r),{compact:""},{default:e(()=>[t(n(i),{active:""},{default:e(()=>[o("Link")]),_:1})]),_:1})]),_:1}))}}),pe="/vue-fomantic-ui/images/logo.png",de=y("img",{src:pe},null,-1),_e=`<template>
  <Menu stackable>
    <MenuItem as="div">
      <img src="/images/logo.png">
    </MenuItem>
    <MenuItem>Features</MenuItem>
    <MenuItem>Testimonials</MenuItem>
    <MenuItem>Sign in</MenuItem>
  </Menu>
</template>`,fe=u({__name:"StackableDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Stackable",code:_e},{description:e(()=>[o(" A menu can stack at mobile resolutions ")]),example:e(()=>[t(n(r),{stackable:""},{default:e(()=>[t(n(i),{as:"div"},{default:e(()=>[de]),_:1}),t(n(i),null,{default:e(()=>[o("Features")]),_:1}),t(n(i),null,{default:e(()=>[o("Testimonials")]),_:1}),t(n(i),null,{default:e(()=>[o("Sign in")]),_:1})]),_:1})]),_:1}))}}),he=`<template>
  <Menu inverted :items="items"></Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])
<\/script>`,ge=u({__name:"InvertedDoc",setup(l){const a=_(["Home","Messages","Friends"]);return(s,d)=>(c(),m(p,{label:"Inverted",code:he},{description:e(()=>[o(" A menu may have its colors inverted to show greater contrast ")]),example:e(()=>[t(n(r),{inverted:"",items:a.value},null,8,["items"])]),_:1}))}}),Me=`<template>
  <Menu
    :items="items"
    v-model:active-index="active"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { text: 'Red', color: 'red' },
  { text: 'Orange', color: 'orange' },
  { text: 'Yellow', color: 'yellow' },
  { text: 'Green', color: 'green' },
  { text: 'Teal', color: 'teal' },
])
const active = ref(0)
<\/script>`,ve=u({__name:"ColoredDoc",setup(l){const a=_([{text:"Red",color:"red"},{text:"Orange",color:"orange"},{text:"Yellow",color:"yellow"},{text:"Green",color:"green"},{text:"Teal",color:"teal"}]),s=_(0);return(d,M)=>(c(),m(p,{label:"Colored",code:Me},{description:e(()=>[o(" Additional colors can be specified ")]),example:e(()=>[t(n(r),{items:a.value,"active-index":s.value,"onUpdate:activeIndex":M[0]||(M[0]=S=>s.value=S)},null,8,["items","active-index"])]),_:1}))}}),xe=`<template>
  <Menu icon :items="items"></Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { icon: 'gamepad' },
  { icon: 'video camera' },
  { icon: 'video play' },
])
<\/script>`,be=u({__name:"IconsDoc",setup(l){const a=_([{icon:"gamepad"},{icon:"video camera"},{icon:"video play"}]);return(s,d)=>(c(),m(p,{label:"Icons",code:xe},{description:e(()=>[o(" A menu may have just icons ")]),example:e(()=>[t(n(r),{icon:"",items:a.value},null,8,["items"])]),_:1}))}}),Ie=`<template>
  <Menu icon="labeled" :items="items"></Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { icon: 'gamepad', text: 'Games' },
  { icon: 'video camera', text: 'Channels' },
  { icon: 'video play', text: 'Videos' },
])
<\/script>`,ye=u({__name:"LabeledIconDoc",setup(l){const a=_([{icon:"gamepad",text:"Games"},{icon:"video camera",text:"Channels"},{icon:"video play",text:"Videos"}]);return(s,d)=>(c(),m(p,{label:"Labeled Icon",code:Ie},{description:e(()=>[o(" A menu may have labeled icons ")]),example:e(()=>[t(n(r),{icon:"labeled",items:a.value},null,8,["items"])]),_:1}))}}),we=`<template>
  <Menu fluid vertical :items="items"></Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Run', 'Walk', 'Bike'])
<\/script>`,De=u({__name:"FluidDoc",setup(l){const a=_(["Run","Walk","Bike"]);return(s,d)=>(c(),m(p,{label:"Fluid",code:we},{description:e(()=>[o(" A vertical menu may take the size of its container ")]),example:e(()=>[t(n(r),{fluid:"",vertical:"",items:a.value},null,8,["items"])]),_:1}))}}),$e=`<template>
  <Menu compact :items="items"></Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { icon: 'gamepad', text: 'Games' },
  { icon: 'video camera', text: 'Channels' },
  { icon: 'video play', text: 'Videos' },
])
<\/script>`,Se=u({__name:"CompactDoc",setup(l){const a=_([{icon:"gamepad",text:"Games"},{icon:"video camera",text:"Channels"},{icon:"video play",text:"Videos"}]);return(s,d)=>(c(),m(p,{label:"Compact",code:$e},{description:e(()=>[o(" A menu can take up only the space necessary to fit its content ")]),example:e(()=>[t(n(r),{compact:"",items:a.value},null,8,["items"])]),_:1}))}}),Ae=`<template>
  <Menu :widths="3" :items="items"></Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Buy', 'Sell', 'Rent'])
<\/script>`,ke=u({__name:"EvenlyDividedDoc",setup(l){const a=_(["Buy","Sell","Rent"]);return(s,d)=>(c(),m(p,{label:"Evenly Divided",code:Ae},{description:e(()=>[o(" A menu may divide its items evenly ")]),example:e(()=>[t(n(r),{widths:3,items:a.value},null,8,["items"])]),_:1}))}}),Le=`<template>
  <Menu attached="top" tabular>
    <MenuItem active>tab1</MenuItem>
    <MenuItem>tab2</MenuItem>
  </Menu>

  <Segment attached="bottom">
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
  </Segment>
</template>`,Ce=u({__name:"AttachedDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Attached",code:Le},{description:e(()=>[o(" A menu may be attached to other content segments ")]),example:e(()=>[t(n(r),{attached:"top",tabular:""},{default:e(()=>[t(n(i),{active:""},{default:e(()=>[o("tab1")]),_:1}),t(n(i),null,{default:e(()=>[o("tab2")]),_:1})]),_:1}),t(n(b),{attached:"bottom"},{default:e(()=>[o(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})]),_:1}))}}),Te=`<template>
  <Menu size="mini">
    <MenuItem active>Home</MenuItem>
    <MenuItem>Messages</MenuItem>
    <MenuMenu position="right">
      <Dropdown item text="Language">
        <DropdownMenu>
          <DropdownItem text="English" />
          <DropdownItem text="Russian" />
          <DropdownItem text="Spanish" />
        </DropdownMenu>
      </Dropdown>
      <MenuItem as="div">
        <Button color="primary">Sign up</Button>
      </MenuItem>
    </MenuMenu>
  </Menu>
</template>`,Be=u({__name:"SizeDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Size",code:Te},{description:e(()=>[o(" A menu can vary in size ")]),example:e(()=>[t(n(r),{size:"mini"},{default:e(()=>[t(n(i),{active:""},{default:e(()=>[o("Home")]),_:1}),t(n(i),null,{default:e(()=>[o("Messages")]),_:1}),t(n($),{position:"right"},{default:e(()=>[t(n(w),{item:"",text:"Language"},{default:e(()=>[t(n(D),null,{default:e(()=>[t(n(f),{text:"English"}),t(n(f),{text:"Russian"}),t(n(f),{text:"Spanish"})]),_:1})]),_:1}),t(n(i),{as:"div"},{default:e(()=>[t(n(I),{color:"primary"},{default:e(()=>[o("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ve=`<template>
  <Menu>
    <MenuItem fitted>No padding whatsoever</MenuItem>
    <MenuItem fitted="horizontally">No horizontal padding</MenuItem>
    <MenuItem fitted="vertically">No vertical padding</MenuItem>
  </Menu>
</template>`,He=u({__name:"FittedDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Fitted",code:Ve},{description:e(()=>[o(" A menu item or menu can remove element padding, vertically or horizontally ")]),example:e(()=>[t(n(r),null,{default:e(()=>[t(n(i),{fitted:""},{default:e(()=>[o("No padding whatsoever")]),_:1}),t(n(i),{fitted:"horizontally"},{default:e(()=>[o("No horizontal padding")]),_:1}),t(n(i),{fitted:"vertically"},{default:e(()=>[o("No vertical padding")]),_:1})]),_:1})]),_:1}))}}),Re=`<template>
  <Menu borderless :items="['1','2','3','4','5','6']" />
</template>`,Fe=u({__name:"BorderlessDoc",setup(l){return(a,s)=>(c(),m(p,{label:"Borderless",code:Re},{description:e(()=>[o(" A menu item or menu can have no borders ")]),example:e(()=>[t(n(r),{borderless:"",items:["1","2","3","4","5","6"]})]),_:1}))}}),Pe={__name:"Menu",setup(l){const a=[{id:"menu",label:"Menu",category:"Types",component:B},{id:"secondary-menu",label:"Secondary Menu",category:"Types",component:H},{id:"pointing",label:"Pointing",category:"Types",component:E},{id:"tabular",label:"Tabular",category:"Types",component:N},{id:"text",label:"Text",category:"Types",component:G},{id:"vertical-menu",label:"Vertical Menu",category:"Types",component:O},{id:"pagination",label:"Pagination",category:"Types",component:J},{id:"header",label:"Header",category:"Content",component:W},{id:"input",label:"Input",category:"Content",component:Q},{id:"button",label:"Button",category:"Content",component:Z},{id:"link-item",label:"Link Item",category:"Content",component:te},{id:"dropdown-item",label:"Dropdown Item",category:"Content",component:oe},{id:"right-menu",label:"Right Menu",category:"Content",component:ie},{id:"sub-menu",label:"Sub Menu",category:"Content",component:re},{id:"hover",label:"Hover",category:"States",component:me},{id:"active",label:"Active",category:"States",component:ue},{id:"stackable",label:"Stackable",category:"Variations",component:fe},{id:"inverted",label:"Inverted",category:"Variations",component:ge},{id:"colored",label:"Colored",category:"Variations",component:ve},{id:"icons",label:"Icons",category:"Variations",component:be},{id:"labeled-icon",label:"Labeled Icon",category:"Variations",component:ye},{id:"fluid",label:"Fluid",category:"Variations",component:De},{id:"compact",label:"Compact",category:"Variations",component:Se},{id:"evenly-divided",label:"Evenly Divided",category:"Variations",component:ke},{id:"attached",label:"Attached",category:"Variations",component:Ce},{id:"size",label:"Size",category:"Variations",component:Be},{id:"fitted",label:"Fitted",category:"Variations",component:He},{id:"borderless",label:"Borderless",category:"Variations",component:Fe}];return(s,d)=>(c(),m(C,{title:"Menu",description:"A menu displays grouped navigation actions","component-docs":a}))}};export{Pe as default};
