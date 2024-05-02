import{e as d,r as m,o as u,c as s,w as o,a as r,b as n,u as i,ac as v,I as g,O as f,D as b}from"./index-CFQxuMLK.js";import{_ as x}from"./DocSection-bYVctxpZ.js";const h=`<template>
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
<\/script>`,_=d({__name:"DropdownDoc",setup(c){const e=m(),a=[{text:"New"},{text:"Open...",description:"ctrl + o"},{text:"Save as...",description:"ctrl + s"},{text:"Rename",description:"ctrl + r"},{text:"Make a copy"},{text:"Move to folder",icon:"folder"},{text:"Move to trash",icon:"trash"},{divider:!0},{text:"Download as..."},{text:"Publish To Web",icon:"dropdown",children:[{text:"Google Docs"},{text:"Google Drive"},{text:"Dropbox"},{text:"Adobe Creative Cloud"},{text:"Private FTP"},{text:"Another Service..."}]},{text:"E-mail Collaborators"}];return(p,t)=>(u(),s(x,{label:"Dropdown",code:h},{description:o(()=>[r(" A dropdown ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),text:"File",options:a},null,8,["modelValue"])]),_:1}))}}),D=`<template>
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
<\/script>`,w=d({__name:"SelectionDoc",setup(c){const e=m(),a=["Cat","Dog","Bird","Rabbit","Squirrel","Horse","Turtle","Parrot"];return(p,t)=>(u(),s(x,{label:"Selection",code:D},{description:o(()=>[r(" A dropdown can be used to select between choices in a form ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,selection:"",placeholder:"Pet"},null,8,["modelValue"])]),_:1}))}}),y=`<template>
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
<\/script>`,S=d({__name:"SearchSelectionDoc",setup(c){const e=m(),a=[{text:"Cat",value:1},{text:"Dog",value:2},{text:"Bird",value:3},{text:"Rabbit",value:4},{text:"Squirrel",value:5},{text:"Horse",value:6},{text:"Turtle",value:7},{text:"Parrot",value:8}];return(p,t)=>(u(),s(x,{label:"Search Selection",code:y},{description:o(()=>[r(" A selection dropdown can allow a user to search through a large list of choices ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,search:"",selection:"",fluid:"",placeholder:"Pet"},null,8,["modelValue"])]),_:1}))}}),F=`<template>
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
<\/script>`,C=d({__name:"ClearableSelectionDoc",setup(c){const e=m({text:"English",value:3}),a=[{text:"Arabic",value:0},{text:"Chinese",value:1},{text:"Dutch",value:2},{text:"English",value:3},{text:"French",value:4},{text:"German",value:5},{text:"Italian",value:6},{text:"Japanese",value:7},{text:"Korean",value:8},{text:"Portuguese",value:9},{text:"Russian",value:10},{text:"Spanish",value:11},{text:"Thai",value:12},{text:"Turkish",value:13}];return(p,t)=>(u(),s(x,{label:"Clearable Selection",code:F},{description:o(()=>[r(" A clearable selection dropdown can allow a user to cancel to cancel a previous selection ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,clearable:"",selection:"",placeholder:"Select Language"},null,8,["modelValue"])]),_:1}))}}),V=`<template>
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
<\/script>`,A=d({__name:"MultipleSelectionDoc",setup(c){const e=m([]),a=[{text:"Angular",value:"angular"},{text:"CSS",value:"css"},{text:"Graphic Design",value:"design"},{text:"Ember",value:"ember"},{text:"HTML",value:"html"},{text:"Information Architecture",value:"ia"},{text:"Javascript",value:"javascript"},{text:"Mechanical Engineering",value:"mech"},{text:"Meteor",value:"meteor"},{text:"NodeJS",value:"node"},{text:"Plumbing",value:"plumbing"},{text:"Python",value:"python"},{text:"Rails",value:"rails"},{text:"React",value:"react"},{text:"Kitchen Repair",value:"repair"},{text:"Ruby",value:"ruby"},{text:"UI Design",value:"ui"},{text:"User Experience",value:"ux"}];return(p,t)=>(u(),s(x,{label:"Multiple Selection",code:V},{description:o(()=>[r(" A selection dropdown can allow multiple selections ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,multiple:"",selection:"",fluid:"",placeholder:"Skills"},null,8,["modelValue"])]),_:1}))}}),M=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    multiple
    search
    selection
    fluid
    placeholder="State"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref([])
const options = [
  { text: 'Alabama', value: 0 },
  { text: 'Alaska', value: 1 },
  { text: 'Arizona', value: 2 },
  { text: 'Arkansas', value: 3 },
  { text: 'California', value: 4 },
  { text: 'Colorado', value: 5 },
  { text: 'Connecticut', value: 6 },
  { text: 'Delaware', value: 7 },
  { text: 'Florida', value: 8 },
  { text: 'Georgia', value: 9 },
  { text: 'Hawaii', value: 10 },
  { text: 'Idaho', value: 11 },
  { text: 'Illinois', value: 12 },
  { text: 'Indiana', value: 13 },
  { text: 'Iowa', value: 14 },
  { text: 'Kansas', value: 15 },
  { text: 'Kentucky', value: 16 },
  { text: 'Louisiana', value: 17 },
  { text: 'Maine', value: 18 },
  { text: 'Maryland', value: 19 },
  { text: 'Massachusetts', value: 20 },
  { text: 'Michigan', value: 21 },
  { text: 'Minnesota', value: 22 },
  { text: 'Mississippi', value: 23 },
  { text: 'Missouri', value: 24 },
  { text: 'Montana', value: 25 },
  { text: 'Nebraska', value: 26 },
  { text: 'Nevada', value: 27 },
  { text: 'New Hampshire', value: 28 },
  { text: 'New Jersey', value: 29 },
  { text: 'New Mexico', value: 30 },
  { text: 'New York', value: 31 },
  { text: 'North Carolina', value: 32 },
  { text: 'North Dakota', value: 33 },
  { text: 'Ohio', value: 34 },
  { text: 'Oklahoma', value: 35 },
  { text: 'Oregon', value: 36 },
  { text: 'Pennsylvania', value: 37 },
  { text: 'Rhode Island', value: 38 },
  { text: 'South Carolina', value: 39 },
  { text: 'South Dakota', value: 40 },
  { text: 'Tennessee', value: 41 },
  { text: 'Texas', value: 42 },
  { text: 'Utah', value: 43 },
  { text: 'Vermont', value: 44 },
  { text: 'Virginia', value: 45 },
  { text: 'Washington', value: 46 },
  { text: 'West Virginia', value: 47 },
  { text: 'Wisconsin', value: 48 },
  { text: 'Wyoming', value: 49 },
]
<\/script>`,I=d({__name:"MultipleSearchSelectionDoc",setup(c){const e=m([]),a=[{text:"Alabama",value:0},{text:"Alaska",value:1},{text:"Arizona",value:2},{text:"Arkansas",value:3},{text:"California",value:4},{text:"Colorado",value:5},{text:"Connecticut",value:6},{text:"Delaware",value:7},{text:"Florida",value:8},{text:"Georgia",value:9},{text:"Hawaii",value:10},{text:"Idaho",value:11},{text:"Illinois",value:12},{text:"Indiana",value:13},{text:"Iowa",value:14},{text:"Kansas",value:15},{text:"Kentucky",value:16},{text:"Louisiana",value:17},{text:"Maine",value:18},{text:"Maryland",value:19},{text:"Massachusetts",value:20},{text:"Michigan",value:21},{text:"Minnesota",value:22},{text:"Mississippi",value:23},{text:"Missouri",value:24},{text:"Montana",value:25},{text:"Nebraska",value:26},{text:"Nevada",value:27},{text:"New Hampshire",value:28},{text:"New Jersey",value:29},{text:"New Mexico",value:30},{text:"New York",value:31},{text:"North Carolina",value:32},{text:"North Dakota",value:33},{text:"Ohio",value:34},{text:"Oklahoma",value:35},{text:"Oregon",value:36},{text:"Pennsylvania",value:37},{text:"Rhode Island",value:38},{text:"South Carolina",value:39},{text:"South Dakota",value:40},{text:"Tennessee",value:41},{text:"Texas",value:42},{text:"Utah",value:43},{text:"Vermont",value:44},{text:"Virginia",value:45},{text:"Washington",value:46},{text:"West Virginia",value:47},{text:"Wisconsin",value:48},{text:"Wyoming",value:49}];return(p,t)=>(u(),s(x,{label:"Multiple Search Selection",code:M},{description:o(()=>[r(" A selection dropdown can allow multiple search selections ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,multiple:"",search:"",selection:"",fluid:"",placeholder:"State"},null,8,["modelValue"])]),_:1}))}}),P=`<template>
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
<\/script>`,T=d({__name:"SearchDropdownDoc",setup(c){const e=m(),a=[{text:"Arabic"},{text:"Chinese"},{text:"Dutch"},{text:"English"},{text:"French"},{text:"German"},{text:"Italian"},{text:"Japanese"},{text:"Korean"},{text:"Portuguese"},{text:"Russian"},{text:"Spanish"},{text:"Thai"},{text:"Turkish"}];return(p,t)=>(u(),s(x,{label:"Search Dropdown",code:P},{description:o(()=>[r(" A dropdown can be searchable ")]),example:o(()=>[n(i(v),{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),text:"Select Language",options:a},null,8,["modelValue"])]),_:1}))}}),k=`<template>
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
<\/script>`,$=d({__name:"SearchInMenuDoc",setup(c){const e=m(),a=[{text:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",label:{color:"green",empty:!0,circular:!0}}];return(p,t)=>(u(),s(x,{label:"Search In-Menu",code:k},{description:o(()=>[r(" A dropdown can include a search prompt inside its menu ")]),example:o(()=>[n(i(v),{button:"",floating:"",labeled:"","search-in-menu":"",selectable:"",icon:"world",modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),text:"Filter Posts",options:a},null,8,["modelValue"])]),_:1}))}}),U=`<template>
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
<\/script>`,j=d({__name:"InlineDoc",setup(c){const e=[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/christian.jpg"}}],a=m(e[1]);return(p,t)=>(u(),s(x,{label:"Inline",code:U},{description:o(()=>[r(" A dropdown can be formatted to appear inline in other content ")]),example:o(()=>[r(" Show me posts by "),n(i(v),{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),options:e,inline:""},null,8,["modelValue"])]),_:1}))}}),E=`<template>
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
<\/script>`,N=d({__name:"PointingDoc",setup(c){const e=m(),a=[{header:"DISPLAY DENSITY"},{text:"Comfortable"},{text:"Save as..."},{text:"Cozy"},{text:"Make a copy"},{text:"Compact"},{divider:!0},{text:"Settings"},{text:"Upload Settings",icon:"dropdown",children:[{text:"Convert Updated Files to PDF",icon:"check"},{text:"Digitize Text from Uploaded Files",icon:"check"}]},{text:"Manage Apps"},{text:"Keyboard Shortcuts"},{text:"Help"}];return(p,t)=>(u(),s(x,{label:"Pointing",code:E},{description:o(()=>[r(" A dropdown can be formatted so that its menu is pointing ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,button:"",icon:"wrench",pointing:"top left"},null,8,["modelValue"])]),_:1}))}}),H=`<template>
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
<\/script>`,J=d({__name:"FloatingDoc",setup(c){const e=m(),a=[{text:"Edit Post",icon:"edit"},{text:"Remove Post",icon:"delete"},{text:"Hide Post",icon:"hide"}];return(p,t)=>(u(),s(x,{label:"Floating",code:H},{description:o(()=>[r(" A dropdown menu can appear to be floating below an element ")]),example:o(()=>[n(i(g),{color:"teal"},{default:o(()=>[n(i(f),null,{default:o(()=>[r("Save")]),_:1}),n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,button:"",icon:"dropdown",floating:""},null,8,["modelValue"])]),_:1})]),_:1}))}}),R=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    button
    floating
    labeled
    icon="filter"
    text="Filter"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { header: 'Filter by tag', icon: 'tags' },
  { text: 'Important' },
  { text: 'Announcement' },
  { text: 'Discussion' },
]
<\/script>`,K=d({__name:"HeaderDoc",setup(c){const e=m(),a=[{header:"Filter by tag",icon:"tags"},{text:"Important"},{text:"Announcement"},{text:"Discussion"}];return(p,t)=>(u(),s(x,{label:"Header",code:R},{description:o(()=>[r(" A dropdown menu can contain a header ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,button:"",floating:"",labeled:"",icon:"filter",text:"Filter"},null,8,["modelValue"])]),_:1}))}}),G=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    button
    floating
    labeled
    icon="filter"
    text="Filter"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { header: 'Filter by tag', icon: 'tags' },
  { divider: true },
  { text: 'Important' },
  { text: 'Announcement' },
  { text: 'Discussion' },
]
<\/script>`,L=d({__name:"DividerDoc",setup(c){const e=m(),a=[{header:"Filter by tag",icon:"tags"},{divider:!0},{text:"Important"},{text:"Announcement"},{text:"Discussion"}];return(p,t)=>(u(),s(x,{label:"Divider",code:G},{description:o(()=>[r(" A dropdown menu can contain dividers to separate related content ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,button:"",floating:"",labeled:"",icon:"filter",text:"Filter"},null,8,["modelValue"])]),_:1}))}}),O=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    button
    floating
    labeled
    icon="filter"
    text="Filter"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { header: 'Filter by tag', icon: 'tags' },
  { divider: true },
  { text: 'Important', icon: 'attention' },
  { text: 'Announcement', icon: 'comment' },
  { text: 'Discussion', icon: 'conversation' },
]
<\/script>`,B=d({__name:"IconDoc",setup(c){const e=m(),a=[{header:"Filter by tag",icon:"tags"},{divider:!0},{text:"Important",icon:"attention"},{text:"Announcement",icon:"comment"},{text:"Discussion",icon:"conversation"}];return(p,t)=>(u(),s(x,{label:"Icon",code:O},{description:o(()=>[r(" A dropdown menu can contain an icon. ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,button:"",floating:"",labeled:"",icon:"filter",text:"Filter"},null,8,["modelValue"])]),_:1}))}}),W=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    button
    floating
    labeled
    icon="filter"
    text="Filter"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { header: 'Filter by tag', icon: 'tags' },
  {
    text: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    text: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    text: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]
<\/script>`,Y=d({__name:"LabelDoc",setup(c){const e=m(),a=[{header:"Filter by tag",icon:"tags"},{text:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Discussion",label:{color:"green",empty:!0,circular:!0}}];return(p,t)=>(u(),s(x,{label:"Label",code:W},{description:o(()=>[r(" A dropdown menu can contain an label. ")]),example:o(()=>[n(i(v),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),options:a,button:"",floating:"",labeled:"",icon:"filter",text:"Filter"},null,8,["modelValue"])]),_:1}))}}),z=`<template>
  <Dropdown
    v-model="selected"
    :options="options"
    button
    floating
    labeled
    icon="add user"
    text="Add User"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const options = [
{ header: 'People You Might Know' },
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
  { header: 'Your Friends' Friends' },
  {
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/christian.jpg' },
  },
  {
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/matt.jpg' },
  },
  {
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/justen.jpg' },
  },
]
const selected = ref()
<\/script>`,q=d({__name:"ImageDoc",setup(c){const e=[{header:"People You Might Know"},{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/stevie.jpg"}},{header:"Your Friends' Friends"},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/christian.jpg"}},{text:"Matt",value:"Matt",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/matt.jpg"}},{text:"Justen Kitsune",value:"Justen Kitsune",image:{avatar:!0,src:"/vue-fomantic-ui/images/avatar/small/justen.jpg"}}],a=m();return(p,t)=>(u(),s(x,{label:"Image",code:z},{description:o(()=>[r(" A dropdown menu can contain an image ")]),example:o(()=>[n(i(v),{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),options:e,button:"",floating:"",labeled:"",icon:"add user",text:"Add User"},null,8,["modelValue"])]),_:1}))}}),Z={__name:"Dropdown",setup(c){const e=[{id:"dropdown",label:"Dropdown",category:"Types",component:_},{id:"selection",label:"Selection",category:"Types",component:w},{id:"search-selection",label:"Search Selection",category:"Types",component:S},{id:"clearable-selection",label:"Clearable Selection",category:"Types",component:C},{id:"multiple-selection",label:"Multiple Selection",category:"Types",component:A},{id:"multiple-search-selection",label:"Multiple Search Selection",category:"Types",component:I},{id:"search-dropdown",label:"Search Dropdown",category:"Types",component:T},{id:"search-in-menu",label:"Search In-Menu",category:"Types",component:$},{id:"inline",label:"Inline",category:"Types",component:j},{id:"pointing",label:"Pointing",category:"Types",component:N},{id:"floating",label:"Floating",category:"Types",component:J},{id:"header",label:"Header",category:"Content",component:K},{id:"divider",label:"Divider",category:"Content",component:L},{id:"icon",label:"Icon",category:"Content",component:B},{id:"label",label:"Label",category:"Content",component:Y},{id:"image",label:"Image",category:"Content",component:q}];return(a,p)=>(u(),s(b,{title:"Dropdown",description:"A dropdown allows a user to select a value from a series of options","component-docs":e}))}};export{Z as default};
