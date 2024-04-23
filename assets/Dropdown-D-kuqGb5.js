import{e as d,r as m,o as c,c as s,w as o,a as i,b as n,u as r,ac as x,I as g,O as b,D as f}from"./index-BAoWpg3S.js";import{_ as v}from"./DocSection-DtS0Ek9r.js";const h=`<template>
  <Dropdown
    v-model="selected"
    text="File"
    :options="options"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { text: "New" },
  { text: "Open...", description: "ctrl + o" },
  { text: "Save as...", description: "ctrl + s" },
  { text: "Rename", description: "ctrl + r" },
  { text: "Make a copy" },
  { text: "Move to folder", icon: "folder" },
  { text: "Move to trash", icon: "trash" },
  { divider: true },
  { text: "Download as..." },
  {
    text: "Publish To Web",
    icon: "dropdown",
    children: [
      { text: "Google Docs" },
      { text: "Google Drive" },
      { text: "Dropbox" },
      { text: "Adobe Creative Cloud" },
      { text: "Private FTP" },
      { text: "Another Service..." },
    ],
  },
  { text: "E-mail Collaborators" },
]
<\/script>`,_=d({__name:"DropdownDoc",setup(u){const e=m(),l=[{text:"New"},{text:"Open...",description:"ctrl + o"},{text:"Save as...",description:"ctrl + s"},{text:"Rename",description:"ctrl + r"},{text:"Make a copy"},{text:"Move to folder",icon:"folder"},{text:"Move to trash",icon:"trash"},{divider:!0},{text:"Download as..."},{text:"Publish To Web",icon:"dropdown",children:[{text:"Google Docs"},{text:"Google Drive"},{text:"Dropbox"},{text:"Adobe Creative Cloud"},{text:"Private FTP"},{text:"Another Service..."}]},{text:"E-mail Collaborators"}];return(p,t)=>(c(),s(v,{label:"Dropdown",code:h},{description:o(()=>[i(" A dropdown ")]),example:o(()=>[n(r(x),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),text:"File",options:l},null,8,["modelValue"])]),_:1}))}}),D=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    selection
    placeholder="Pet"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  'Cat',
  'Dog',
  'Bird',
  'Rabbit',
  'Squirrel',
  'Horse',
  'Turtle',
  'Parrot',
]
<\/script>`,w=d({__name:"SelectionDoc",setup(u){const e=m(),l=["Cat","Dog","Bird","Rabbit","Squirrel","Horse","Turtle","Parrot"];return(p,t)=>(c(),s(v,{label:"Selection",code:D},{description:o(()=>[i(" A dropdown can be used to select between choices in a form ")]),example:o(()=>[n(r(x),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),options:l,selection:"",placeholder:"Pet"},null,8,["modelValue"])]),_:1}))}}),S=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    search
    selection
    fluid
    placeholder="Pet"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { text: 'Cat', value: 1 },
  { text: 'Dog', value: 2 },
  { text: 'Bird', value: 3 },
  { text: 'Rabbit', value: 4 },
  { text: 'Squirrel', value: 5 },
  { text: 'Horse', value: 6 },
  { text: 'Turtle', value: 7 },
  { text: 'Parrot', value: 8 },
]
<\/script>`,y=d({__name:"SearchSelectionDoc",setup(u){const e=m(),l=[{text:"Cat",value:1},{text:"Dog",value:2},{text:"Bird",value:3},{text:"Rabbit",value:4},{text:"Squirrel",value:5},{text:"Horse",value:6},{text:"Turtle",value:7},{text:"Parrot",value:8}];return(p,t)=>(c(),s(v,{label:"Search Selection",code:S},{description:o(()=>[i(" A selection dropdown can allow a user to search through a large list of choices ")]),example:o(()=>[n(r(x),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),options:l,search:"",selection:"",fluid:"",placeholder:"Pet"},null,8,["modelValue"])]),_:1}))}}),C=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    clearable
    selection
    placeholder="Select Language"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref({ text: 'English', value: 3 })
const options = [
  { text: 'Arabic', value: 0 },
  { text: 'Chinese', value: 1 },
  { text: 'Dutch', value: 2 },
  { text: 'English', value: 3 },
  { text: 'French', value: 4 },
  { text: 'German', value: 5 },
  { text: 'Italian', value: 6 },
  { text: 'Japanese', value: 7 },
  { text: 'Korean', value: 8 },
  { text: 'Portuguese', value: 9 },
  { text: 'Russian', value: 10 },
  { text: 'Spanish', value: 11 },
  { text: 'Thai', value: 12 },
  { text: 'Turkish', value: 13 },
]
<\/script>`,P=d({__name:"ClearableSelectionDoc",setup(u){const e=m({text:"English",value:3}),l=[{text:"Arabic",value:0},{text:"Chinese",value:1},{text:"Dutch",value:2},{text:"English",value:3},{text:"French",value:4},{text:"German",value:5},{text:"Italian",value:6},{text:"Japanese",value:7},{text:"Korean",value:8},{text:"Portuguese",value:9},{text:"Russian",value:10},{text:"Spanish",value:11},{text:"Thai",value:12},{text:"Turkish",value:13}];return(p,t)=>(c(),s(v,{label:"Clearable Selection",code:C},{description:o(()=>[i(" A clearable selection dropdown can allow a user to cancel to cancel a previous selection ")]),example:o(()=>[n(r(x),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),options:l,clearable:"",selection:"",placeholder:"Select Language"},null,8,["modelValue"])]),_:1}))}}),T=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    multiple
    selection
    fluid
    placeholder="Skills"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref([])
const options = [
  { text: 'Angular', value: 'angular' },
  { text: 'CSS', value: 'css' },
  { text: 'Graphic Design', value: 'design' },
  { text: 'Ember', value: 'ember' },
  { text: 'HTML', value: 'html' },
  { text: 'Information Architecture', value: 'ia' },
  { text: 'Javascript', value: 'javascript' },
  { text: 'Mechanical Engineering', value: 'mech' },
  { text: 'Meteor', value: 'meteor' },
  { text: 'NodeJS', value: 'node' },
  { text: 'Plumbing', value: 'plumbing' },
  { text: 'Python', value: 'python' },
  { text: 'Rails', value: 'rails' },
  { text: 'React', value: 'react' },
  { text: 'Kitchen Repair', value: 'repair' },
  { text: 'Ruby', value: 'ruby' },
  { text: 'UI Design', value: 'ui' },
  { text: 'User Experience', value: 'ux' },
]
<\/script>`,V=d({__name:"MultipleSelectionDoc",setup(u){const e=m([]),l=[{text:"Angular",value:"angular"},{text:"CSS",value:"css"},{text:"Graphic Design",value:"design"},{text:"Ember",value:"ember"},{text:"HTML",value:"html"},{text:"Information Architecture",value:"ia"},{text:"Javascript",value:"javascript"},{text:"Mechanical Engineering",value:"mech"},{text:"Meteor",value:"meteor"},{text:"NodeJS",value:"node"},{text:"Plumbing",value:"plumbing"},{text:"Python",value:"python"},{text:"Rails",value:"rails"},{text:"React",value:"react"},{text:"Kitchen Repair",value:"repair"},{text:"Ruby",value:"ruby"},{text:"UI Design",value:"ui"},{text:"User Experience",value:"ux"}];return(p,t)=>(c(),s(v,{label:"Multiple Selection",code:T},{description:o(()=>[i(" A selection dropdown can allow multiple selections ")]),example:o(()=>[n(r(x),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),options:l,multiple:"",selection:"",fluid:"",placeholder:"Skills"},null,8,["modelValue"])]),_:1}))}}),A=`<template>
  <Dropdown
    button
    floating
    labeled
    search
    icon="world"
    v-model="selected"
    text="Select Language"
    :options="options"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { text: 'Arabic' },
  { text: 'Chinese' },
  { text: 'Dutch' },
  { text: 'English' },
  { text: 'French' },
  { text: 'German' },
  { text: 'Italian' },
  { text: 'Japanese' },
  { text: 'Korean' },
  { text: 'Portuguese' },
  { text: 'Russian' },
  { text: 'Spanish' },
  { text: 'Thai' },
  { text: 'Turkish' },
]
<\/script>`,F=d({__name:"SearchDropdownDoc",setup(u){const e=m(),l=[{text:"Arabic"},{text:"Chinese"},{text:"Dutch"},{text:"English"},{text:"French"},{text:"German"},{text:"Italian"},{text:"Japanese"},{text:"Korean"},{text:"Portuguese"},{text:"Russian"},{text:"Spanish"},{text:"Thai"},{text:"Turkish"}];return(p,t)=>(c(),s(v,{label:"Search Dropdown",code:A},{description:o(()=>[i(" A dropdown can be searchable ")]),example:o(()=>[n(r(x),{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),text:"Select Language",options:l},null,8,["modelValue"])]),_:1}))}}),E=`<template>
  <Dropdown
    button
    floating
    labeled
    search-in-menu
    selectable
    icon="world"
    v-model="selected"
    text="Filter Posts"
    :options="options"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  {
    text: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    text: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    text: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    text: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    text: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    text: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    text: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    text: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    text: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]
<\/script>`,I=d({__name:"SearchInMenuDoc",setup(u){const e=m(),l=[{text:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",label:{color:"green",empty:!0,circular:!0}}];return(p,t)=>(c(),s(v,{label:"Search In-Menu",code:E},{description:o(()=>[i(" A dropdown can include a search prompt inside its menu ")]),example:o(()=>[n(r(x),{button:"",floating:"",labeled:"","search-in-menu":"",selectable:"",icon:"world",modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),text:"Filter Posts",options:l},null,8,["modelValue"])]),_:1}))}}),M=`<template>
  Show me posts by
  <Dropdown
    v-model="selected"
    :options="options"
    inline
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const options = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/jenny.jpg' },
  },
  {
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/elliot.jpg' },
  },
  {
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/stevie.jpg' },
  },
  {
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/christian.jpg' },
  },
]
const selected = ref(options[1])
<\/script>`,k=d({__name:"InlineDoc",setup(u){const e=[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/christian.jpg"}}],l=m(e[1]);return(p,t)=>(c(),s(v,{label:"Inline",code:M},{description:o(()=>[i(" A dropdown can be formatted to appear inline in other content ")]),example:o(()=>[i(" Show me posts by "),n(r(x),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a),options:e,inline:""},null,8,["modelValue"])]),_:1}))}}),R=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    button
    icon="wrench"
    pointing="top left"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { header: "DISPLAY DENSITY" },
  { text: "Comfortable" },
  { text: "Save as..." },
  { text: "Cozy" },
  { text: "Make a copy" },
  { text: "Compact" },
  { divider: true },
  { text: "Settings" },
  {
    text: "Upload Settings",
    icon: "dropdown",
    children: [
      { text: "Convert Updated Files to PDF", icon: "check" },
      { text: "Digitize Text from Uploaded Files", icon: "check" },
    ],
  },
  { text: "Manage Apps" },
  { text: "Keyboard Shortcuts" },
  { text: "Help" },
]
<\/script>`,U=d({__name:"PointingDoc",setup(u){const e=m(),l=[{header:"DISPLAY DENSITY"},{text:"Comfortable"},{text:"Save as..."},{text:"Cozy"},{text:"Make a copy"},{text:"Compact"},{divider:!0},{text:"Settings"},{text:"Upload Settings",icon:"dropdown",children:[{text:"Convert Updated Files to PDF",icon:"check"},{text:"Digitize Text from Uploaded Files",icon:"check"}]},{text:"Manage Apps"},{text:"Keyboard Shortcuts"},{text:"Help"}];return(p,t)=>(c(),s(v,{label:"Pointing",code:R},{description:o(()=>[i(" A dropdown can be formatted so that its menu is pointing ")]),example:o(()=>[n(r(x),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),options:l,button:"",icon:"wrench",pointing:"top left"},null,8,["modelValue"])]),_:1}))}}),$=`<template>
  <ButtonGroup color="teal">
    <Button>Save</Button>
    <Dropdown
      v-model="selected"
      :options="options"
      button
      floating
    />
  </ButtonGroup>
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { text: "Edit Post", icon: "edit" },
  { text: "Remove Post", icon: "delete" },
  { text: "Hide Post", icon: "hide" },
]
<\/script>`,H=d({__name:"FloatingDoc",setup(u){const e=m(),l=[{text:"Edit Post",icon:"edit"},{text:"Remove Post",icon:"delete"},{text:"Hide Post",icon:"hide"}];return(p,t)=>(c(),s(v,{label:"Floating",code:$},{description:o(()=>[i(" A dropdown menu can appear to be floating below an element ")]),example:o(()=>[n(r(g),{color:"teal"},{default:o(()=>[n(r(b),null,{default:o(()=>[i("Save")]),_:1}),n(r(x),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),options:l,button:"",icon:"dropdown",floating:""},null,8,["modelValue"])]),_:1})]),_:1}))}}),J={__name:"Dropdown",setup(u){const e=[{id:"dropdown",label:"Dropdown",category:"Types",component:_},{id:"selection",label:"Selection",category:"Types",component:w},{id:"search-selection",label:"Search Selection",category:"Types",component:y},{id:"clearable-selection",label:"Clearable Selection",category:"Types",component:P},{id:"multiple-selection",label:"Multiple Selection",category:"Types",component:V},{id:"search-dropdown",label:"Search Dropdown",category:"Types",component:F},{id:"search-in-menu",label:"Search In-Menu",category:"Types",component:I},{id:"inline",label:"Inline",category:"Types",component:k},{id:"pointing",label:"Pointing",category:"Types",component:U},{id:"floating",label:"Floating",category:"Types",component:H}];return(l,p)=>(c(),s(f,{title:"Dropdown",description:"A dropdown allows a user to select a value from a series of options","component-docs":e}))}};export{J as default};
