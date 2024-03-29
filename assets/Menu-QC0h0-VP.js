import{d as u,r as _,o as r,c,w as e,a as o,b as t,u as n,V as s,_ as p,Y as i,v as h,C as I,e as x,f as S,g as k,h as M,T as g,i as v,j as b,O as y,L as w,F as f,P as $,k as A,D as L}from"./index-RtEKpQy5.js";const C=`<template>
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
<\/script>`,T=u({__name:"MenuDoc",setup(m){const a=_(["Editorials","Reviews","Upcoming Events"]);return(l,d)=>(r(),c(p,{label:"Menu",code:C},{description:e(()=>[o(" A menu ")]),example:e(()=>[t(n(s),{items:a.value,widths:a.value.length,onSelected:d[0]||(d[0]=D=>console.log(D))},null,8,["items","widths"])]),_:1}))}}),B=`<template>
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
<\/script>`,V=u({__name:"SecondaryMenuDoc",setup(m){const a=_(["Home","Messages","Friends"]);return(l,d)=>(r(),c(p,{label:"Secondary Menu",code:B},{description:e(()=>[o(" A menu can adjust its appearance to de-emphasize its contents ")]),example:e(()=>[t(n(s),{secondary:"",items:a.value},{right:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(h),{icon:"search",placeholder:"Search..."})]),_:1}),t(n(i),null,{default:e(()=>[o("Logout")]),_:1})]),_:1},8,["items"]),t(n(s),{vertical:"",secondary:"",items:a.value},null,8,["items"])]),_:1}))}}),H=x("img",{src:S},null,-1),F=x("img",{src:k},null,-1),R=`<template>
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
<\/script>`,z=u({__name:"PointingDoc",setup(m){const a=_(["Home","Messages","Friends"]);return(l,d)=>(r(),c(p,{label:"Pointing",code:R},{description:e(()=>[o(" A menu can point to show its relationship to nearby content ")]),example:e(()=>[t(n(s),{pointing:"",items:a.value},{right:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(h),{icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["items"]),t(n(I),null,{default:e(()=>[H]),_:1}),t(n(s),{secondary:"",pointing:"",items:a.value},{right:e(()=>[t(n(i),null,{default:e(()=>[o(" Logout ")]),_:1})]),_:1},8,["items"]),t(n(I),null,{default:e(()=>[F]),_:1})]),_:1}))}}),P=`<template>
  <Menu
    tabular
    :items="['Bio', 'Photos']"
  />
</template>`,E=u({__name:"TabularDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Tabular",code:P},{description:e(()=>[o(" A menu can be formatted to show tabs of information ")]),example:e(()=>[t(n(s),{tabular:"",items:["Bio","Photos"]})]),_:1}))}}),j=`<template>
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
<\/script>`,N=u({__name:"TextDoc",setup(m){const a=_([{text:"SORT BY",header:!0},{text:"Closest"},{text:"Most Comments"},{text:"Most Popular"}]);return(l,d)=>(r(),c(p,{label:"Text",code:j},{description:e(()=>[o(" A menu can be formatted for text content ")]),example:e(()=>[t(n(s),{text:"",items:a.value},null,8,["items"])]),_:1}))}}),G=`<template>
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
<\/script>`,O=u({__name:"VerticalMenuDoc",setup(m){const a=_([{text:[M(g,"Inbox"),M(v,{color:"teal",pointing:"left"},()=>1)],color:"teal"},{text:[M(g,"Spam"),M(v,{},()=>51)]},{text:[M(g,"Updates"),M(v,{},()=>1)]},{text:[M(h,{icon:"search",placeholder:"Search mail...",transparent:!0})],as:"div"}]);return(l,d)=>(r(),c(p,{label:"Vertical Menu",code:G},{description:e(()=>[o(" A vertical menu displays elements vertically. ")]),example:e(()=>[t(n(s),{vertical:"",items:a.value},null,8,["items"])]),_:1}))}}),U=`<template>
  <Menu pagination>
    <MenuItem>1</MenuItem>
    <MenuItem disabled>...</MenuItem>
    <MenuItem>10</MenuItem>
    <MenuItem>11</MenuItem>
    <MenuItem>12</MenuItem>
  </Menu>
</template>`,Y=u({__name:"PaginationDoc",setup(m){return _(["Home","Messages","Friends"]),(a,l)=>(r(),c(p,{label:"Pagination",code:U},{description:e(()=>[o(" A pagination menu is specially formatted to present links to pages of content ")]),example:e(()=>[t(n(s),{pagination:""},{default:e(()=>[t(n(i),null,{default:e(()=>[o("1")]),_:1}),t(n(i),{disabled:""},{default:e(()=>[o("...")]),_:1}),t(n(i),null,{default:e(()=>[o("10")]),_:1}),t(n(i),null,{default:e(()=>[o("11")]),_:1}),t(n(i),null,{default:e(()=>[o("12")]),_:1})]),_:1})]),_:1}))}}),J=`<template>
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
<\/script>`,q=u({__name:"HeaderDoc",setup(m){const a=_([{text:"Our Company",header:!0},{text:"About Us"},{text:"Jobs"},{text:"Locations"}]);return(l,d)=>(r(),c(p,{label:"Header",code:J},{description:e(()=>[o(" A menu item may include a header or may itself be a header ")]),example:e(()=>[t(n(s),{items:a.value},null,8,["items"])]),_:1}))}}),W=`<template>
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
</template>`,K=u({__name:"InputDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Input",code:W},{description:e(()=>[o(" A menu item can contain an input inside of it ")]),example:e(()=>[t(n(s),null,{right:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(h),{placeholder:"Navigate to...",action:"Go"})]),_:1})]),default:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(h),{icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1}))}}),Q=`<template>
  <Menu>
    <MenuItem as="div">
      <Button primary>Sign up</Button>
    </MenuItem>
    <MenuItem as="div">
      <Button>Log in</Button>
    </MenuItem>
  </Menu>
</template>`,X=u({__name:"ButtonDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Button",code:Q},{description:e(()=>[o(" A menu item can contain a button inside of it ")]),example:e(()=>[t(n(s),null,{default:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(b),{primary:""},{default:e(()=>[o("Sign up")]),_:1})]),_:1}),t(n(i),{as:"div"},{default:e(()=>[t(n(b),null,{default:e(()=>[o("Log in")]),_:1})]),_:1})]),_:1})]),_:1}))}}),Z=`<template>
  <Menu>
    <MenuItem link href="https://google.com" target="_blank">
      Visit Google
    </MenuItem>
    <MenuItem link>
      Javascript Link
    </MenuItem>
  </Menu>
</template>`,ee=u({__name:"LinkItemDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Link Item",code:Z},{description:e(()=>[o(" A menu may contain a link item, or an item formatted as if it is a link. ")]),example:e(()=>[t(n(s),null,{default:e(()=>[t(n(i),{link:"",href:"https://google.com",target:"_blank"},{default:e(()=>[o(" Visit Google ")]),_:1}),t(n(i),{link:""},{default:e(()=>[o(" Javascript Link ")]),_:1})]),_:1})]),_:1}))}}),te=`<template>
  <Menu vertical>
    <Dropdown item text="Categories">
      <DropdownMenu>
        <DropdownItem text="Electoronics" />
        <DropdownItem text="Automotive" />
        <DropdownItem text="Home" />
      </DropdownMenu>
    </Dropdown>
  </Menu>
</template>`,ne=u({__name:"DropdownItemDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Dropdown Item",code:te},{description:e(()=>[o(" An item may contain a nested menu in a dropdown ")]),example:e(()=>[t(n(s),{vertical:""},{default:e(()=>[t(n(y),{item:"",text:"Categories"},{default:e(()=>[t(n(w),null,{default:e(()=>[t(n(f),{text:"Electoronics"}),t(n(f),{text:"Automotive"}),t(n(f),{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),oe=`<template>
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
<\/script>`,ae=u({__name:"RightMenuDoc",setup(m){const a=_(["Browse","Submit"]);return(l,d)=>(r(),c(p,{label:"Right Menu",code:oe},{description:e(()=>[o(" A menu may contain another menu group in the same level as menu items. ")]),example:e(()=>[t(n(s),{items:a.value},{right:e(()=>[t(n(i),null,{default:e(()=>[o("Sign Up")]),_:1}),t(n(i),null,{default:e(()=>[o("Help")]),_:1})]),_:1},8,["items"])]),_:1}))}}),ie=`<template>
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
</template>`,se=u({__name:"SubMenuDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Sub Menu",code:ie},{description:e(()=>[o(" A menu item may contain another menu nested inside that acts as a grouped sub-menu. ")]),example:e(()=>[t(n(s),{vertical:""},{default:e(()=>[t(n(i),{as:"div"},{default:e(()=>[t(n(h),{placeholder:"Search..."})]),_:1}),t(n(i),{as:"div"},{default:e(()=>[o(" Home "),t(n($),null,{default:e(()=>[t(n(i),null,{default:e(()=>[o("Search")]),_:1}),t(n(i),null,{default:e(()=>[o("Add")]),_:1}),t(n(i),null,{default:e(()=>[o("Remove")]),_:1})]),_:1})]),_:1}),t(n(i),null,{default:e(()=>[t(n(A),{name:"grid layout"}),o(" Browse ")]),_:1}),t(n(i),null,{default:e(()=>[o("Messages")]),_:1}),t(n(y),{item:"",text:"More"},{default:e(()=>[t(n(w),null,{default:e(()=>[t(n(f),{icon:"edit",text:"Edit Profile"}),t(n(f),{icon:"globe",text:"Choose Language"}),t(n(f),{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),re=`<template>
  <Menu compact>
    <MenuItem>A link</MenuItem>
    <MenuItem as="div" link>div Link</MenuItem>
  </Menu>
</template>`,ce=u({__name:"HoverDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Hover",code:re},{description:e(()=>[o(" A menu item can be hovered ")]),example:e(()=>[t(n(s),{compact:""},{default:e(()=>[t(n(i),null,{default:e(()=>[o("A link")]),_:1}),t(n(i),{as:"div",link:""},{default:e(()=>[o("div Link")]),_:1})]),_:1})]),_:1}))}}),me=`<template>
  <Menu compact>
    <MenuItem active>Link</MenuItem>
  </Menu>
</template>`,le=u({__name:"ActiveDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Active",code:me},{description:e(()=>[o(" A menu item can be active ")]),example:e(()=>[t(n(s),{compact:""},{default:e(()=>[t(n(i),{active:""},{default:e(()=>[o("Link")]),_:1})]),_:1})]),_:1}))}}),ue="/vue-fomantic-ui/images/logo.png",pe=x("img",{src:ue},null,-1),de=`<template>
  <Menu stackable>
    <MenuItem as="div">
      <img src="/images/logo.png">
    </MenuItem>
    <MenuItem>Features</MenuItem>
    <MenuItem>Testimonials</MenuItem>
    <MenuItem>Sign in</MenuItem>
  </Menu>
</template>`,_e=u({__name:"StackableDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Stackable",code:de},{description:e(()=>[o(" A menu can stack at mobile resolutions ")]),example:e(()=>[t(n(s),{stackable:""},{default:e(()=>[t(n(i),{as:"div"},{default:e(()=>[pe]),_:1}),t(n(i),null,{default:e(()=>[o("Features")]),_:1}),t(n(i),null,{default:e(()=>[o("Testimonials")]),_:1}),t(n(i),null,{default:e(()=>[o("Sign in")]),_:1})]),_:1})]),_:1}))}}),fe=`<template>
  <Menu inverted :items="items"></Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])
<\/script>`,Me=u({__name:"InvertedDoc",setup(m){const a=_(["Home","Messages","Friends"]);return(l,d)=>(r(),c(p,{label:"Inverted",code:fe},{description:e(()=>[o(" A menu may have its colors inverted to show greater contrast ")]),example:e(()=>[t(n(s),{inverted:"",items:a.value},null,8,["items"])]),_:1}))}}),he=`<template>
  <Menu>
    <MenuItem active color="red">Red</MenuItem>
    <MenuItem color="orange">Orange</MenuItem>
    <MenuItem color="yellow">Yellow</MenuItem>
    <MenuItem color="olive">Olive</MenuItem>
    <MenuItem color="green">Green</MenuItem>
    <MenuItem color="teal">Teal</MenuItem>
  </Menu>
</template>`,ge=u({__name:"ColoredDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Colored",code:he},{description:e(()=>[o(" Additional colors can be specified ")]),example:e(()=>[t(n(s),null,{default:e(()=>[t(n(i),{active:"",color:"red"},{default:e(()=>[o("Red")]),_:1}),t(n(i),{color:"orange"},{default:e(()=>[o("Orange")]),_:1}),t(n(i),{color:"yellow"},{default:e(()=>[o("Yellow")]),_:1}),t(n(i),{color:"olive"},{default:e(()=>[o("Olive")]),_:1}),t(n(i),{color:"green"},{default:e(()=>[o("Green")]),_:1}),t(n(i),{color:"teal"},{default:e(()=>[o("Teal")]),_:1})]),_:1})]),_:1}))}}),ve=`<template>
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
<\/script>`,Ie=u({__name:"IconsDoc",setup(m){const a=_([{icon:"gamepad"},{icon:"video camera"},{icon:"video play"}]);return(l,d)=>(r(),c(p,{label:"Icons",code:ve},{description:e(()=>[o(" A menu may have just icons ")]),example:e(()=>[t(n(s),{icon:"",items:a.value},null,8,["items"])]),_:1}))}}),be=`<template>
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
<\/script>`,xe=u({__name:"LabeledIconDoc",setup(m){const a=_([{icon:"gamepad",text:"Games"},{icon:"video camera",text:"Channels"},{icon:"video play",text:"Videos"}]);return(l,d)=>(r(),c(p,{label:"Labeled Icon",code:be},{description:e(()=>[o(" A menu may have labeled icons ")]),example:e(()=>[t(n(s),{icon:"labeled",items:a.value},null,8,["items"])]),_:1}))}}),ye=`<template>
  <Menu fluid vertical :items="items"></Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Run', 'Walk', 'Bike'])
<\/script>`,we=u({__name:"FluidDoc",setup(m){const a=_(["Run","Walk","Bike"]);return(l,d)=>(r(),c(p,{label:"Fluid",code:ye},{description:e(()=>[o(" A vertical menu may take the size of its container ")]),example:e(()=>[t(n(s),{fluid:"",vertical:"",items:a.value},null,8,["items"])]),_:1}))}}),$e=`<template>
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
<\/script>`,De=u({__name:"CompactDoc",setup(m){const a=_([{icon:"gamepad",text:"Games"},{icon:"video camera",text:"Channels"},{icon:"video play",text:"Videos"}]);return(l,d)=>(r(),c(p,{label:"Compact",code:$e},{description:e(()=>[o(" A menu can take up only the space necessary to fit its content ")]),example:e(()=>[t(n(s),{compact:"",items:a.value},null,8,["items"])]),_:1}))}}),Se=`<template>
  <Menu :widths="3" :items="items"></Menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Buy', 'Sell', 'Rent'])
<\/script>`,ke=u({__name:"EvenlyDividedDoc",setup(m){const a=_(["Buy","Sell","Rent"]);return(l,d)=>(r(),c(p,{label:"Evenly Divided",code:Se},{description:e(()=>[o(" A menu may divide its items evenly ")]),example:e(()=>[t(n(s),{widths:3,items:a.value},null,8,["items"])]),_:1}))}}),Ae=`<template>
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
</template>`,Le=u({__name:"AttachedDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Attached",code:Ae},{description:e(()=>[o(" A menu may be attached to other content segments ")]),example:e(()=>[t(n(s),{attached:"top",tabular:""},{default:e(()=>[t(n(i),{active:""},{default:e(()=>[o("tab1")]),_:1}),t(n(i),null,{default:e(()=>[o("tab2")]),_:1})]),_:1}),t(n(I),{attached:"bottom"},{default:e(()=>[o(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})]),_:1}))}}),Ce=`<template>
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
</template>`,Te=u({__name:"SizeDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Size",code:Ce},{description:e(()=>[o(" A menu can vary in size ")]),example:e(()=>[t(n(s),{size:"mini"},{default:e(()=>[t(n(i),{active:""},{default:e(()=>[o("Home")]),_:1}),t(n(i),null,{default:e(()=>[o("Messages")]),_:1}),t(n($),{position:"right"},{default:e(()=>[t(n(y),{item:"",text:"Language"},{default:e(()=>[t(n(w),null,{default:e(()=>[t(n(f),{text:"English"}),t(n(f),{text:"Russian"}),t(n(f),{text:"Spanish"})]),_:1})]),_:1}),t(n(i),{as:"div"},{default:e(()=>[t(n(b),{color:"primary"},{default:e(()=>[o("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Be=`<template>
  <Menu>
    <MenuItem fitted>No padding whatsoever</MenuItem>
    <MenuItem fitted="horizontally">No horizontal padding</MenuItem>
    <MenuItem fitted="vertically">No vertical padding</MenuItem>
  </Menu>
</template>`,Ve=u({__name:"FittedDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Fitted",code:Be},{description:e(()=>[o(" A menu item or menu can remove element padding, vertically or horizontally ")]),example:e(()=>[t(n(s),null,{default:e(()=>[t(n(i),{fitted:""},{default:e(()=>[o("No padding whatsoever")]),_:1}),t(n(i),{fitted:"horizontally"},{default:e(()=>[o("No horizontal padding")]),_:1}),t(n(i),{fitted:"vertically"},{default:e(()=>[o("No vertical padding")]),_:1})]),_:1})]),_:1}))}}),He=`<template>
  <Menu borderless :items="['1','2','3','4','5','6']" />
</template>`,Fe=u({__name:"BorderlessDoc",setup(m){return(a,l)=>(r(),c(p,{label:"Borderless",code:He},{description:e(()=>[o(" A menu item or menu can have no borders ")]),example:e(()=>[t(n(s),{borderless:"",items:["1","2","3","4","5","6"]})]),_:1}))}}),ze={__name:"Menu",setup(m){const a=[{id:"menu",label:"Menu",category:"Types",component:T},{id:"secondary-menu",label:"Secondary Menu",category:"Types",component:V},{id:"pointing",label:"Pointing",category:"Types",component:z},{id:"tabular",label:"Tabular",category:"Types",component:E},{id:"text",label:"Text",category:"Types",component:N},{id:"vertical-menu",label:"Vertical Menu",category:"Types",component:O},{id:"pagination",label:"Pagination",category:"Types",component:Y},{id:"header",label:"Header",category:"Content",component:q},{id:"input",label:"Input",category:"Content",component:K},{id:"button",label:"Button",category:"Content",component:X},{id:"link-item",label:"Link Item",category:"Content",component:ee},{id:"dropdown-item",label:"Dropdown Item",category:"Content",component:ne},{id:"right-menu",label:"Right Menu",category:"Content",component:ae},{id:"sub-menu",label:"Sub Menu",category:"Content",component:se},{id:"hover",label:"Hover",category:"States",component:ce},{id:"active",label:"Active",category:"States",component:le},{id:"stackable",label:"Stackable",category:"Variations",component:_e},{id:"inverted",label:"Inverted",category:"Variations",component:Me},{id:"colored",label:"Colored",category:"Variations",component:ge},{id:"icons",label:"Icons",category:"Variations",component:Ie},{id:"labeled-icon",label:"Labeled Icon",category:"Variations",component:xe},{id:"fluid",label:"Fluid",category:"Variations",component:we},{id:"compact",label:"Compact",category:"Variations",component:De},{id:"evenly-divided",label:"Evenly Divided",category:"Variations",component:ke},{id:"attached",label:"Attached",category:"Variations",component:Le},{id:"size",label:"Size",category:"Variations",component:Te},{id:"fitted",label:"Fitted",category:"Variations",component:Ve},{id:"borderless",label:"Borderless",category:"Variations",component:Fe}];return(l,d)=>(r(),c(L,{title:"Menu",description:"A menu displays grouped navigation actions","component-docs":a}))}};export{ze as default};
