import{d as h,r as p,o as r,c as m,w as a,a as c,b as t,u as e,H as u,s as n,x as D,t as T,v as S,f as d,B as N,_ as g,q as x,D as A,k as _,C as y,R,F as k,G as w,I as j,l as E}from"./index-MO8VB4d8.js";const $={class:"content"},P={class:"sub header"},q=`<template>
  <Table celled :items="items">
    <Column field="name" header="Name" />
    <Column field="age" header="Age" />
    <Column field="job" header="Job" />
  </Table>

  <Divider hidden />

  <Table basic="very" collapsing celled :items="data">
    <Column field="name" header="Employee">
      <template #body="{ data }">
        <Header as="h4">
          <Image :src="data.image" size="mini" rounded />
          <div class="content">
            {{ data.name }}
            <div class="sub header">{{ data.job }}</div>
          </div>
        </Header>
      </template>
    </Column>
    <Column field="correctGuesses" header="Correct Guesses" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Divider, Header, Image } from 'vue-fomantic-ui'

const items = ref([
  { name: 'James', age: 24, job: 'Engineer' },
  { name: 'Jill', age: 26, job: 'Engineer' },
  { name: 'Elyse', age: 24, job: 'Designer' },
])

const data = ref([
  { name: 'Lena', job: 'Human Resources', correctGuesses: 22, image: '/vue-fomantic-ui/images/avatar/small/lena.png' },
  { name: 'Matthew', job: 'Fabric Design', correctGuesses: 15, image: '/vue-fomantic-ui/images/avatar/small/matthew.png' },
  { name: 'Lindsay', job: 'Entertainment', correctGuesses: 12, image: '/vue-fomantic-ui/images/avatar/small/lindsay.png' },
  { name: 'Mark', job: 'Executive', correctGuesses: 11, image: '/vue-fomantic-ui/images/avatar/small/mark.png' },
])
<\/script>`,I=h({__name:"TableDoc",setup(f){const o=p([{name:"James",age:24,job:"Engineer"},{name:"Jill",age:26,job:"Engineer"},{name:"Elyse",age:24,job:"Designer"}]),i=p([{name:"Lena",job:"Human Resources",correctGuesses:22,image:"/vue-fomantic-ui/images/avatar/small/lena.png"},{name:"Matthew",job:"Fabric Design",correctGuesses:15,image:"/vue-fomantic-ui/images/avatar/small/matthew.png"},{name:"Lindsay",job:"Entertainment",correctGuesses:12,image:"/vue-fomantic-ui/images/avatar/small/lindsay.png"},{name:"Mark",job:"Executive",correctGuesses:11,image:"/vue-fomantic-ui/images/avatar/small/mark.png"}]);return(l,s)=>(r(),m(g,{label:"Table",code:q},{description:a(()=>[c(" A standard table ")]),example:a(()=>[t(e(u),{celled:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"age",header:"Age"}),t(e(n),{field:"job",header:"Job"})]),_:1},8,["items"]),t(e(D),{hidden:""}),t(e(u),{basic:"very",collapsing:"",celled:"",items:i.value},{default:a(()=>[t(e(n),{field:"name",header:"Employee"},{body:a(({data:b})=>[t(e(T),{as:"h4"},{default:a(()=>[t(e(S),{src:b.image,size:"mini",rounded:""},null,8,["src"]),d("div",$,[c(N(b.name)+" ",1),d("div",P,N(b.job),1)])]),_:2},1024)]),_:1}),t(e(n),{field:"correctGuesses",header:"Correct Guesses"})]),_:1},8,["items"])]),_:1}))}}),V=d("th",null,null,-1),L={colspan:"4"},B=`<template>
  <Table :items="items" definitionClass="collapsing">
    <template #definition>
      <Checkbox fitted slider />
    </template>
    <Column field="arguments" header="Arguments" />
    <Column field="description" header="Description" />
  </Table>

  <Divider hidden />

  <Table celled definition :items="data" definitionClass="collapsing">
    <template #definition>
      <Checkbox fitted slider />
    </template>

    <Column field="name" header="Name" />
    <Column field="registrationDate" header="Registration Date" />
    <Column field="email" header="E-mail address" />
    <Column field="premiumPlan" header="Premium Plan" />

    <template #footer>
      <tr>
        <th></th>
        <th colspan="4">
          <Button primary labeled icon="user" size="small" floated="right" content="Add User" />
          <Button content="Approve" size="small" />
          <Button content="Approve All" size="small" disabled />
        </th>
      </tr>
    </template>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Button, Checkbox, Divider } from 'vue-fomantic-ui'

const items = ref([
  { text: 'reset rating', arguments: 'None', description: 'Resets rating to default value' },
  { text: 'set rating', arguments: 'rating (integer)', description: 'Sets the current star rating to specified value' },
])

const data = ref([
  { name: 'John Lilki', registrationDate: 'September 14, 2013', email: 'jhlilk22@yahoo.com', premiumPlan: 'No' },
  { name: 'Jamie Harington', registrationDate: 'January 11, 2014', email: 'jamieharingonton@yahoo.com', premiumPlan: 'Yes' },
  { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', premiumPlan: 'Yes' },
])
<\/script>`,U=h({__name:"DefinitionDoc",setup(f){const o=p([{text:"reset rating",arguments:"None",description:"Resets rating to default value"},{text:"set rating",arguments:"rating (integer)",description:"Sets the current star rating to specified value"}]),i=p([{name:"John Lilki",registrationDate:"September 14, 2013",email:"jhlilk22@yahoo.com",premiumPlan:"No"},{name:"Jamie Harington",registrationDate:"January 11, 2014",email:"jamieharingonton@yahoo.com",premiumPlan:"Yes"},{name:"Jill Lewis",registrationDate:"May 11, 2014",email:"jilsewris22@yahoo.com",premiumPlan:"Yes"}]);return(l,s)=>(r(),m(g,{label:"Definition",code:B},{description:a(()=>[c(" A table may be formatted to emphasize a first column that defines a rows content ")]),example:a(()=>[t(e(u),{celled:"",definition:"",items:o.value},{default:a(()=>[t(e(n),{field:"text"}),t(e(n),{field:"arguments",header:"Arguments"}),t(e(n),{field:"description",header:"Description"})]),_:1},8,["items"]),t(e(D),{hidden:""}),t(e(u),{celled:"",definition:"",items:i.value,definitionClass:"collapsing"},{definition:a(()=>[t(e(x),{fitted:"",slider:""})]),footer:a(()=>[d("tr",null,[V,d("th",L,[t(e(A),{primary:"",labeled:"",icon:"user",size:"small",floated:"right",content:"Add User"}),t(e(A),{content:"Approve",size:"small"}),t(e(A),{content:"Approve All",size:"small",disabled:""})])])]),default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"registrationDate",header:"Registration Date"}),t(e(n),{field:"email",header:"E-mail address"}),t(e(n),{field:"premiumPlan",header:"Premium Plan"})]),_:1},8,["items"])]),_:1}))}}),z=d("tr",null,[d("th",{rowspan:"2"},"Name"),d("th",{rowspan:"2"},"Type"),d("th",{rowspan:"2"},"Files"),d("th",{colspan:"3"},"Languages")],-1),H=d("tr",null,[d("th",null,"Ruby"),d("th",null,"JavaScript"),d("th",null,"Python")],-1),F=`<template>
  <Table celled structured :items="items" rowsGroupBy="name">
    <template #header>
      <tr>
        <th rowspan="2">Name</th>
        <th rowspan="2">Type</th>
        <th rowspan="2">Files</th>
        <th colspan="3">Languages</th>
      </tr>
      <tr>
        <th>Ruby</th>
        <th>JavaScript</th>
        <th>Python</th>
      </tr>
    </template>
    <Column field="name" header="Name" />
    <Column field="type" header="Type" />
    <Column field="files" header="Files" :cellClass="() => 'right aligned'" />
    <Column field="languages" :cellClass="() => 'center aligned'">
      <template #body="{ data }">
        <template v-if="data.languages === 'Ruby'">
          <Icon name="checkmark" size="large" color="green" />
        </template>
      </template>
    </Column>
    <Column field="languages" :cellClass="() => 'center aligned'">
      <template #body="{ data }">
        <template v-if="data.languages === 'Javascript'">
          <Icon name="checkmark" size="large" color="green" />
        </template>
      </template>
    </Column>
    <Column field="languages">
      <template #body="{ data }">
        <template v-if="data.languages === 'Python'">
          <Icon name="checkmark" size="large" color="green" />
        </template>
      </template>
    </Column>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'Alpha Team', type: 'Project 1', files: 2, languages: 'Ruby' },
  { name: 'Beta Team', type: 'Project 1', files: 52, languages: 'Ruby' },
  { name: 'Beta Team', type: 'Project 2', files: 12, languages: 'Javascript' },
  { name: 'Beta Team', type: 'Project 3', files: 21, languages: 'Ruby' },
])
<\/script>`,W=h({__name:"StructuredDoc",setup(f){const o=p([{name:"Alpha Team",type:"Project 1",files:2,languages:"Ruby"},{name:"Beta Team",type:"Project 1",files:52,languages:"Ruby"},{name:"Beta Team",type:"Project 2",files:12,languages:"Javascript"},{name:"Beta Team",type:"Project 3",files:21,languages:"Ruby"}]);return(i,l)=>(r(),m(g,{label:"Structured",code:F},{description:a(()=>[c(" A table can be formatted to display complex structured data ")]),example:a(()=>[t(e(u),{celled:"",structured:"",items:o.value,rowsGroupBy:"name"},{header:a(()=>[z,H]),default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"type",header:"Type"}),t(e(n),{field:"files",header:"Files",cellClass:()=>"right aligned"}),t(e(n),{field:"languages",cellClass:()=>"center aligned"},{body:a(({data:s})=>[s.languages==="Ruby"?(r(),m(e(_),{key:0,name:"checkmark",size:"large",color:"green"})):y("",!0)]),_:1}),t(e(n),{field:"languages",cellClass:()=>"center aligned"},{body:a(({data:s})=>[s.languages==="Javascript"?(r(),m(e(_),{key:0,name:"checkmark",size:"large",color:"green"})):y("",!0)]),_:1}),t(e(n),{field:"languages"},{body:a(({data:s})=>[s.languages==="Python"?(r(),m(e(_),{key:0,name:"checkmark",size:"large",color:"green"})):y("",!0)]),_:1})]),_:1},8,["items"])]),_:1}))}}),M=`<template>
  <Table
    celled
    :items="items"
    :rowPositive="rowPositive"
    :rowNegative="rowNegative"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Icon name="checkmark" v-if="data.status === 'Approved'" />
        {{ data.status }}
      </template>
    </Column>
    <Column field="notes" header="Notes" :positive="colPositive" :negative="colNegative">
      <template #body="{ data }">
        <Icon name="close" v-if="data.notes === 'Requires call'" />
        {{ data.notes }}
      </template>
    </Column>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'No Name Specified', status: 'Unknown', notes: 'None' },
  { name: 'Jimmy', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Unknown', notes: 'Requires call' },
  { name: 'Jill', status: 'Unknown', notes: 'None' },
])

const rowPositive = ({ index }) => index === 1
const colPositive = ({ value }) => value === 'Requires call'

const rowNegative = ({ index }) => index === 3
const colNegative = ({ value, index }) => index === 0 && value === 'None'
<\/script>`,G=h({__name:"PositiveNegativeDoc",setup(f){const o=p([{name:"No Name Specified",status:"Unknown",notes:"None"},{name:"Jimmy",status:"Approved",notes:"None"},{name:"Jamie",status:"Unknown",notes:"Requires call"},{name:"Jill",status:"Unknown",notes:"None"}]),i=({index:v})=>v===1,l=({value:v})=>v==="Requires call",s=({index:v})=>v===3,b=({value:v,index:C})=>C===0&&v==="None";return(v,C)=>(r(),m(g,{label:"Positive / Negative",code:M},{description:a(()=>[c(" A cell or row may let a user know whether a value is good or bad ")]),example:a(()=>[t(e(u),{celled:"",items:o.value,rowPositive:i,rowNegative:s},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"},{body:a(({data:J})=>[J.status==="Approved"?(r(),m(e(_),{key:0,name:"checkmark"})):y("",!0),c(" "+N(J.status),1)]),_:1}),t(e(n),{field:"notes",header:"Notes",positive:l,negative:b},{body:a(({data:J})=>[J.notes==="Requires call"?(r(),m(e(_),{key:0,name:"close"})):y("",!0),c(" "+N(J.notes),1)]),_:1})]),_:1},8,["items"])]),_:1}))}}),Y=`<template>
  <Table
    celled
    :items="items"
    :rowError="rowError"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" :error="colError">
      <template #body="{ data }">
        <Icon name="attention" v-if="data.notes === 'Classified'" />
        {{ data.notes }}
      </template>
    </Column>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'No Name Specified', status: 'Approved', notes: 'None' },
  { name: 'Jimmy', status: 'Cannot pull data', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Classified' },
  { name: 'Jill', status: 'Approved', notes: 'None' },
])

const rowError = ({ data }) => data.name === 'Jimmy'
const colError = ({ value }) => value === 'Classified'
<\/script>`,O=h({__name:"ErrorDoc",setup(f){const o=p([{name:"No Name Specified",status:"Approved",notes:"None"},{name:"Jimmy",status:"Cannot pull data",notes:"None"},{name:"Jamie",status:"Approved",notes:"Classified"},{name:"Jill",status:"Approved",notes:"None"}]),i=({data:s})=>s.name==="Jimmy",l=({value:s})=>s==="Classified";return(s,b)=>(r(),m(g,{label:"Error",code:Y},{description:a(()=>[c(" A cell or row may call attention to an error or a negative value ")]),example:a(()=>[t(e(u),{celled:"",items:o.value,rowError:i},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes",error:l},{body:a(({data:v})=>[v.notes==="Classified"?(r(),m(e(_),{key:0,name:"attention"})):y("",!0),c(" "+N(v.notes),1)]),_:1})]),_:1},8,["items"])]),_:1}))}}),Z=`<template>
  <Table
    celled
    :items="items"
    :rowWarning="rowWarning"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Icon name="attention" v-if="data.status === 'Requires Action'" />
        {{ data.status }}
      </template>
    </Column>
    <Column field="notes" header="Notes" :warning="colWarning">
      <template #body="{ data }">
        <Icon name="attention" v-if="data.notes === 'Hostile'" />
        {{ data.notes }}
      </template>
    </Column>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'No Name Specified', status: 'Unknown', notes: 'None' },
  { name: 'Jimmy', status: 'Requires Action', notes: 'None' },
  { name: 'Jamie', status: 'Unknown', notes: 'Hostile' },
  { name: 'Jill', status: 'Unknown', notes: 'None' },
])

const rowWarning = ({ data }) => data.name === 'Jimmy'
const colWarning = ({ value }) => value === 'Hostile'
<\/script>`,K=h({__name:"WarningDoc",setup(f){const o=p([{name:"No Name Specified",status:"Unknown",notes:"None"},{name:"Jimmy",status:"Requires Action",notes:"None"},{name:"Jamie",status:"Unknown",notes:"Hostile"},{name:"Jill",status:"Unknown",notes:"None"}]),i=({data:s})=>s.name==="Jimmy",l=({value:s})=>s==="Hostile";return(s,b)=>(r(),m(g,{label:"Warning",code:Z},{description:a(()=>[c(" A cell or row may warn a user ")]),example:a(()=>[t(e(u),{celled:"",items:o.value,rowWarning:i},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"},{body:a(({data:v})=>[v.status==="Requires Action"?(r(),m(e(_),{key:0,name:"attention"})):y("",!0),c(" "+N(v.status),1)]),_:1}),t(e(n),{field:"notes",header:"Notes",warning:l},{body:a(({data:v})=>[v.notes==="Hostile"?(r(),m(e(_),{key:0,name:"attention"})):y("",!0),c(" "+N(v.notes),1)]),_:1})]),_:1},8,["items"])]),_:1}))}}),Q=`<template>
  <Table
    celled
    :items="items"
    :rowActive="rowActive"
  >
    <Column field="name" header="Name" :active="colActive" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'John', status: 'Requires Action', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Approved', notes: 'None' },
])

const rowActive = ({ data }) => data.name === 'John'
const colActive = ({ value }) => value === 'Jill'
<\/script>`,X=h({__name:"ActiveDoc",setup(f){const o=p([{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"John",status:"Requires Action",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Approved",notes:"None"}]),i=({data:s})=>s.name==="John",l=({value:s})=>s==="Jill";return(s,b)=>(r(),m(g,{label:"Active",code:Q},{description:a(()=>[c(" A cell or row can be active or selected by a user ")]),example:a(()=>[t(e(u),{celled:"",items:o.value,rowActive:i},{default:a(()=>[t(e(n),{field:"name",header:"Name",active:l}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),ee=`<template>
  <Table
    celled
    :items="items"
    :rowDisabled="rowDisabled"
  >
    <Column field="name" header="Name" :disabled="colDisabled" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'John', status: 'Requires Action', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Approved', notes: 'None' },
])

const rowDisabled = ({ index }) => index === 0
const colDisabled = ({ value }) => value === 'Jill'
<\/script>`,te=h({__name:"DisabledDoc",setup(f){const o=p([{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"John",status:"Requires Action",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Approved",notes:"None"}]),i=({index:s})=>s===0,l=({value:s})=>s==="Jill";return(s,b)=>(r(),m(g,{label:"Disabled",code:ee},{description:a(()=>[c(" A cell can be disabled ")]),example:a(()=>[t(e(u),{celled:"",items:o.value,rowDisabled:i},{default:a(()=>[t(e(n),{field:"name",header:"Name",disabled:l}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),ae=`<template>
  <Table
    celled
    :items="items"
    :rowColor="rowColor"
  >
    <Column field="name" header="Name" :color="colColor" />
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Icon name="microphone" v-if="data.status === 'Recording session'" />
        {{ data.status }}
      </template>
    </Column>
    <Column field="notes" header="Notes" :color="colColor">
      <template #body="{ data }">
        <Icon name="child" v-if="data.notes === 'Baby Party'" />
        {{ data.notes }}
      </template>
    </Column>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'No Name Specified', status: 'Unknown', notes: 'None' },
  { name: 'Jimmy', status: 'Recording session', notes: 'None' },
  { name: 'Jamie', status: 'Unknown', notes: 'Baby Party' },
  { name: 'Jill', status: 'Unknown', notes: 'Vacation' },
])

const rowColor = ({ data }) => data.name === 'Jimmy' ? 'blue': undefined
const colColor = ({ value }) => {
  if (value === 'No Name Specified') return 'orange'
  if (value === 'Baby Party') return 'pink'
  if (value === 'Vacation') return 'green'
}
<\/script>`,ne=h({__name:"ColoredCellsDoc",setup(f){const o=p([{name:"No Name Specified",status:"Unknown",notes:"None"},{name:"Jimmy",status:"Recording session",notes:"None"},{name:"Jamie",status:"Unknown",notes:"Baby Party"},{name:"Jill",status:"Unknown",notes:"Vacation"}]),i=({data:s})=>s.name==="Jimmy"?"blue":void 0,l=({value:s})=>{if(s==="No Name Specified")return"orange";if(s==="Baby Party")return"pink";if(s==="Vacation")return"green"};return(s,b)=>(r(),m(g,{label:"Colored Cells",code:ae},{description:a(()=>[c(" A cell can be styled by the central color palette colors ")]),example:a(()=>[t(e(u),{celled:"",items:o.value,rowColor:i},{default:a(()=>[t(e(n),{field:"name",header:"Name",color:l}),t(e(n),{field:"status",header:"Status"},{body:a(({data:v})=>[v.status==="Recording session"?(r(),m(e(_),{key:0,name:"microphone"})):y("",!0),c(" "+N(v.status),1)]),_:1}),t(e(n),{field:"notes",header:"Notes",color:l},{body:a(({data:v})=>[v.notes==="Baby Party"?(r(),m(e(_),{key:0,name:"child"})):y("",!0),c(" "+N(v.notes),1)]),_:1})]),_:1},8,["items"])]),_:1}))}}),oe=`<template>
  <Table
    celled
    :items="items"
    :rowColor="rowColor"
  >
    <Column field="name" header="Name" :marked="marked" />
    <Column field="status" header="Status" :marked="marked">
      <template #body="{ data }">
        <Icon name="microphone" v-if="data.status === 'Recording session'" />
        {{ data.status }}
      </template>
    </Column>
    <Column field="notes" header="Notes" :marked="marked">
      <template #body="{ data }">
        <Icon name="child" v-if="data.notes === 'Baby Party'" />
        {{ data.notes }}
      </template>
    </Column>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'No Name Specified', status: 'Unknown', notes: 'None' },
  { name: 'Jimmy', status: 'Recording session', notes: 'None' },
  { name: 'Jamie', status: 'Unknown', notes: 'Baby Party' },
  { name: 'Jill', status: 'Unknown', notes: 'Vacation' },
])

const marked = ({ data, value }) => {
  if (value === 'No Name Specified') return 'right blue'
  if (data.name === 'No Name Specified' && value === 'Unknown') return 'left red'
  if (value === 'Jimmy') return 'left green'
  if (data.name === 'Jamie' && value === 'Unknown') return 'right orange'
  if (value === 'Vacation') return 'right purple'
}
<\/script>`,se=h({__name:"MarkedDoc",setup(f){const o=p([{name:"No Name Specified",status:"Unknown",notes:"None"},{name:"Jimmy",status:"Recording session",notes:"None"},{name:"Jamie",status:"Unknown",notes:"Baby Party"},{name:"Jill",status:"Unknown",notes:"Vacation"}]),i=({data:l,value:s})=>{if(s==="No Name Specified")return"right blue";if(l.name==="No Name Specified"&&s==="Unknown")return"left red";if(s==="Jimmy")return"left green";if(l.name==="Jamie"&&s==="Unknown")return"right orange";if(s==="Vacation")return"right purple"};return(l,s)=>(r(),m(g,{label:"Marked",code:oe},{description:a(()=>[c(" A cell or row can be marked by a colored left or right border ")]),example:a(()=>[t(e(u),{celled:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name",marked:i}),t(e(n),{field:"status",header:"Status",marked:i},{body:a(({data:b})=>[b.status==="Recording session"?(r(),m(e(_),{key:0,name:"microphone"})):y("",!0),c(" "+N(b.status),1)]),_:1}),t(e(n),{field:"notes",header:"Notes",marked:i},{body:a(({data:b})=>[b.notes==="Baby Party"?(r(),m(e(_),{key:0,name:"child"})):y("",!0),c(" "+N(b.notes),1)]),_:1})]),_:1},8,["items"])]),_:1}))}}),ie=`<template>
  <Table
    single-line
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="registrationDate" header="Registration Date" />
    <Column field="email" header="E-mail address" />
    <Column field="premiumPlan" header="Premium Plan" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John Lilki', registrationDate: 'September 14, 2013', email: 'jhlilk22@yahoo.com', premiumPlan: 'No' },
  { name: 'Jamie Harington', registrationDate: 'January 11, 2014', email: 'jamieharingonton@yahoo.com', premiumPlan: 'Yes' },
  { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', premiumPlan: 'Yes' },
])
<\/script>`,le=h({__name:"SingleLineDoc",setup(f){const o=p([{name:"John Lilki",registrationDate:"September 14, 2013",email:"jhlilk22@yahoo.com",premiumPlan:"No"},{name:"Jamie Harington",registrationDate:"January 11, 2014",email:"jamieharingonton@yahoo.com",premiumPlan:"Yes"},{name:"Jill Lewis",registrationDate:"May 11, 2014",email:"jilsewris22@yahoo.com",premiumPlan:"Yes"}]);return(i,l)=>(r(),m(g,{label:"Single Line",code:ie},{description:a(()=>[c(" A table can specify that its cell contents should remain on a single line, and not wrap. ")]),example:a(()=>[t(e(u),{singleLine:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"registrationDate",header:"Registration Date"}),t(e(n),{field:"email",header:"E-mail address"}),t(e(n),{field:"premiumPlan",header:"Premium Plan"})]),_:1},8,["items"])]),_:1}))}}),re=`<template>
  <Table
    fixed
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="description" header="Description" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'John',
    status: 'Approved',
    description: 'John is an interesting boy but sometimes you don\\'t really have enough room to describe everything you\\'d like',
  },
  {
    name: 'Jamie',
    status: 'Approved',
    description: 'Jamie is a kind girl but sometimes you don\\'t really have enough room to describe everything you\\'d like',
  },
  {
    name: 'Jill',
    status: 'Denied',
    description: 'Jill is an alright girl but sometimes you don\\'t really have enough room to describe everything you\\'d like',
  },
])
<\/script>`,me=h({__name:"FixedDoc",setup(f){const o=p([{name:"John",status:"Approved",description:"John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like"},{name:"Jamie",status:"Approved",description:"Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like"},{name:"Jill",status:"Denied",description:"Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like"}]);return(i,l)=>(r(),m(g,{label:"Fixed",code:re},{description:a(()=>[c(" A table can use table-layout: fixed a special faster form of table rendering that does not resize table cells based on content. ")]),example:a(()=>[t(e(u),{fixed:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"description",header:"Description"})]),_:1},8,["items"])]),_:1}))}}),de=`<template>
  <Table
    fixed
    single-line
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="description" header="Description" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'John',
    status: 'Approved',
    description: 'This is much too long to fit I\\'m sorry about that',
  },
  {
    name: 'Jamie',
    status: 'Approved',
    description: 'Shorter description',
  },
  {
    name: 'Jill',
    status: 'Denied',
    description: 'Shorter description',
  },
])
<\/script>`,ce=h({__name:"FixedSingleLineDoc",setup(f){const o=p([{name:"John",status:"Approved",description:"This is much too long to fit I'm sorry about that"},{name:"Jamie",status:"Approved",description:"Shorter description"},{name:"Jill",status:"Denied",description:"Shorter description"}]);return(i,l)=>(r(),m(g,{code:de},{description:a(()=>[t(e(R),{info:""},{default:a(()=>[c(' Fixed single line tables will automatically ensure content that does not fit in a single line will receive "..." ellipsis ')]),_:1})]),example:a(()=>[t(e(u),{fixed:"","single-line":"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"description",header:"Description"})]),_:1},8,["items"])]),_:1}))}}),ue=`<template>
  <Table
    unstackable
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" :cellClass="() => 'right aligned'" />
  </Table>

  <Table
    stackable
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" :cellClass="() => 'right aligned'" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,pe=h({__name:"StackingDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{label:"Stacking",code:ue},{description:a(()=>[c(" A table can specify how it stacks table content responsively ")]),example:a(()=>[t(e(u),{unstackable:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes",cellClass:()=>"right aligned"})]),_:1},8,["items"]),t(e(u),{stackable:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes",cellClass:()=>"right aligned"})]),_:1},8,["items"])]),_:1}))}}),fe=`<template>
  <Table
    :items="items"
    :rowWarning="rowWarning"
    @row:select="(e) => console.log(e.data)"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" :warning="colWarning" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'No Action', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
  { name: 'John', status: 'No Action', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])

const rowWarning = ({ index }) => index === 3
const colWarning = ({ value, index }) => value === 'Requires call' && index === 4
<\/script>`,he=h({__name:"SelectableRowDoc",setup(f){const o=p([{name:"John",status:"No Action",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"},{name:"John",status:"No Action",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]),i=({index:s})=>s===3,l=({value:s,index:b})=>s==="Requires call"&&b===4;return(s,b)=>(r(),m(g,{label:"Selectable Row",code:fe},{description:a(()=>[c(" A table can have its rows appear selectable ")]),example:a(()=>[t(e(u),{celled:"",selectable:"",items:o.value,rowWarning:i,"onRow:select":b[0]||(b[0]=v=>console.log(v.data))},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes",warning:l})]),_:1},8,["items"])]),_:1}))}}),ge=`<template>
  <Table
    inverted
    selectable
    :items="items"
    @row:select="(e) => console.log(e.data)"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" :cellClass="() => 'right aligned'" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,be=h({__name:"SelectableRowInvertedDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{code:ge},{example:a(()=>[t(e(u),{celled:"",inverted:"",selectable:"",items:o.value,"onRow:select":l[0]||(l[0]=s=>console.log(s.data))},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes",cellClass:()=>"right aligned"})]),_:1},8,["items"])]),_:1}))}}),ve=`<template>
  <Table
    :items="dataSource"
    :rowWarning="rowWarning"
    v-bind="args"
    @cell:select="(e) => console.log(e.value)"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" :positive="colPositive" :negative="colNegative" />
    <Column field="edit" header="Notes" selectable :positive="colPositive" :negative="colNegative" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'No Action', edit: 'Edit' },
  { name: 'Jamie', status: 'Approved', edit: 'Edit' },
  { name: 'Jill', status: 'Denied', edit: 'Edit' },
  { name: 'John', status: 'No Action', edit: 'Requires change' },
  { name: 'Jamie', status: 'Approved', edit: 'Approve' },
  { name: 'Jill', status: 'Denied', edit: 'Remove' },
])
<\/script>`,_e=h({__name:"SelectableCellDoc",setup(f){const o=p([{name:"John",status:"No Action",edit:"Edit"},{name:"Jamie",status:"Approved",edit:"Edit"},{name:"Jill",status:"Denied",edit:"Edit"},{name:"John",status:"No Action",edit:"Requires change"},{name:"Jamie",status:"Approved",edit:"Approve"},{name:"Jill",status:"Denied",edit:"Remove"}]),i=({index:b})=>b===3,l=({index:b})=>b===4,s=({index:b})=>b===5;return(b,v)=>(r(),m(g,{label:"Selectable Cell",code:ve},{description:a(()=>[c(" A table cell can be selectable ")]),example:a(()=>[t(e(u),{celled:"",items:o.value,rowWarning:i,"onCell:select":v[0]||(v[0]=C=>console.log(C.value))},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status",positive:l,negative:s}),t(e(n),{field:"edit",header:"Notes",selectable:"",positive:l,negative:s})]),_:1},8,["items"])]),_:1}))}}),Ne=d("br",null,null,-1),ye=d("br",null,null,-1),Je=d("br",null,null,-1),Ce=`<template>
  <Table
    striped
    :items="items"
    :rowClass="rowClass"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" :cellClass="colClass" />
    <Column field="notes" header="Notes">
      <template #body="{ data }">
        {{ data.notes }}<br>
        1<br>
        2<br>
      </template>
    </Column>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'Notes' },
  { name: 'Jamie', status: 'Approved', notes: 'Notes' },
])

const rowClass = ({ index }) => index === 0 ? 'top aligned' : null
const colClass = ({ index }) => index === 1 ? 'bottom aligned' : null
<\/script>`,Ae=h({__name:"VerticalAlignmentDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"Notes"},{name:"Jamie",status:"Approved",notes:"Notes"}]),i=({index:s})=>s===0?"top aligned":null,l=({index:s})=>s===1?"bottom aligned":null;return(s,b)=>(r(),m(g,{label:"Vertical Alignment",code:Ce},{description:a(()=>[c(" A table header, row, or cell can adjust its vertical alignment ")]),example:a(()=>[t(e(u),{striped:"",items:o.value,rowClass:i},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status",cellClass:l}),t(e(n),{field:"notes",header:"Notes"},{body:a(({data:v})=>[c(N(v.notes),1),Ne,c(" 1"),ye,c(" 2"),Je]),_:1})]),_:1},8,["items"])]),_:1}))}}),De=`<template>
  <Table
    striped
    :items="items"
    :rowClass="rowClass"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" :cellClass="colClass">
    </Column>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])

const rowClass = ({ index }) => index === 0 ? 'center aligned' : null
const colClass = () => 'right aligned'
<\/script>`,ke=h({__name:"TextAlignmentDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]),i=({index:s})=>s===0?"center aligned":null,l=()=>"right aligned";return(s,b)=>(r(),m(g,{label:"Text Alignment",code:De},{description:a(()=>[c(" A table header, row, or cell can adjust its text alignment ")]),example:a(()=>[t(e(u),{striped:"",items:o.value,rowClass:i},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes",cellClass:l})]),_:1},8,["items"])]),_:1}))}}),we=`<template>
  <Table
    striped
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="joined" header="Date Joined" />
    <Column field="email" header="E-mail" />
    <Column field="called" header="Called" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
  {
    name: 'Jamie Harington',
    joined: 'January 11, 2014',
    email: 'jamieharingonton@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'Jill Lewis',
    joined: 'May 11, 2014',
    email: 'jilsewris22@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
  {
    name: 'Jamie Harington',
    joined: 'January 11, 2014',
    email: 'jamieharingonton@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'Jill Lewis',
    joined: 'May 11, 2014',
    email: 'jilsewris22@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
])
<\/script>`,je=h({__name:"StripedDoc",setup(f){const o=p([{name:"John Lilki",joined:"September 14, 2013",email:"jhlilk22@yahoo.com",called:"No"},{name:"Jamie Harington",joined:"January 11, 2014",email:"jamieharingonton@yahoo.com",called:"Yes"},{name:"Jill Lewis",joined:"May 11, 2014",email:"jilsewris22@yahoo.com",called:"Yes"},{name:"John Lilki",joined:"September 14, 2013",email:"jhlilk22@yahoo.com",called:"No"},{name:"John Lilki",joined:"September 14, 2013",email:"jhlilk22@yahoo.com",called:"No"},{name:"Jamie Harington",joined:"January 11, 2014",email:"jamieharingonton@yahoo.com",called:"Yes"},{name:"Jill Lewis",joined:"May 11, 2014",email:"jilsewris22@yahoo.com",called:"Yes"},{name:"John Lilki",joined:"September 14, 2013",email:"jhlilk22@yahoo.com",called:"No"}]);return(i,l)=>(r(),m(g,{label:"Striped",code:we},{description:a(()=>[c(" A table can stripe alternate rows of content with a darker color to increase contrast ")]),example:a(()=>[t(e(u),{striped:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"joined",header:"Date Joined"}),t(e(n),{field:"email",header:"E-mail"}),t(e(n),{field:"called",header:"Called"})]),_:1},8,["items"])]),_:1}))}}),Te=d("tr",null,[d("th",null,"3 People"),d("th",null,"2 Approved"),d("th")],-1),Se=`<template>
  <Table
    celled
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
    <template #footer>
      <tr>
        <th>3 People</th>
        <th>2 Approved</th>
        <th></th>
      </tr>
    </template>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,xe=h({__name:"CelledDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{label:"Celled",code:Se},{description:a(()=>[c(" A table may be divided each row into separate cells ")]),example:a(()=>[t(e(u),{celled:"",items:o.value},{footer:a(()=>[Te]),default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),Re=`<template>
  <Table
    basic
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,Ee=h({__name:"BasicDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{label:"Basic",code:Re},{description:a(()=>[c(" A table can reduce its complexity to increase readability. ")]),example:a(()=>[t(e(u),{basic:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),$e=`<template>
  <Table
    basic="very"
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,Pe=h({__name:"BasicVeryDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{code:$e},{example:a(()=>[t(e(u),{basic:"very",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),qe=`<template>
  <Table :items="items">
    <Column field="name" collapsing>
      <template #body="{ data }">
        <Icon name="folder" />
        {{ data.name }}
      </template>
    </Column>
    <Column field="message" />
    <Column field="time" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'node_modules', message: 'Initial commit', time: '10 hours ago' },
  { name: 'test', message: 'Initial commit', time: '10 hours ago' },
  { name: 'build', message: 'Initial commit', time: '10 hours ago' },
])
<\/script>`,Ie=h({__name:"CollapsingCellDoc",setup(f){const o=p([{name:"node_modules",message:"Initial commit",time:"10 hours ago"},{name:"test",message:"Initial commit",time:"10 hours ago"},{name:"build",message:"Initial commit",time:"10 hours ago"}]);return(i,l)=>(r(),m(g,{label:"Collapisng Cell",code:qe},{description:a(()=>[c(" A cell can be collapsing so that it only uses as much space as required ")]),example:a(()=>[t(e(u),{items:o.value,hideHeader:""},{default:a(()=>[t(e(n),{field:"name",collapsing:""},{body:a(({data:s})=>[t(e(_),{name:"folder"}),c(" "+N(s.name),1)]),_:1}),t(e(n),{field:"message"}),t(e(n),{field:"time"})]),_:1},8,["items"])]),_:1}))}}),Ve=d("tr",null,[d("th",null,"3 People"),d("th",null,"2 Approved"),d("th"),d("th"),d("th")],-1),Le=`<template>
  <Table :items="items" :columns="5">
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="age" header="Age" />
    <Column field="gender" header="Gender" />
    <Column field="notes" header="Notes" />
    <template #footer>
      <tr>
        <th>3 People</th>
        <th>2 Approved</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </template>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', age: 22, gender: 'Male', notes: 'None' },
  { name: 'Jamie', status: 'Approved', age: 32, gender: 'Male', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', age: 22, gender: 'Female', notes: 'None' },
])
<\/script>`,Be=h({__name:"ColumnCountDoc",setup(f){const o=p([{name:"John",status:"Approved",age:22,gender:"Male",notes:"None"},{name:"Jamie",status:"Approved",age:32,gender:"Male",notes:"Requires call"},{name:"Jill",status:"Denied",age:22,gender:"Female",notes:"None"}]);return(i,l)=>(r(),m(g,{label:"Column Count",code:Le},{description:a(()=>[c(" A table can specify its column count to divide its content evenly ")]),example:a(()=>[t(e(u),{items:o.value,columns:5},{footer:a(()=>[Ve]),default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"age",header:"Age"}),t(e(n),{field:"gender",header:"Gender"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),Ue=`<template>
  <Table
    collapsing
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,ze=h({__name:"CollapsingDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{label:"Collapsing",code:Ue},{description:a(()=>[c(" A table can be collapsing, taking up only as much space as its rows. ")]),example:a(()=>[t(e(u),{collapsing:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),He=`<template>
  <Table
    v-for="color in colors"
    :color="color"
    :key="color"
    :items="items"
  >
    <Column field="food" header="Food" />
    <Column field="calories" header="Calories" />
    <Column field="protein" header="Protein" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { food: 'Apple', calories: 200, protein: '0g' },
  { food: 'Orange', calories: 62, protein: '0g' },
])

const colors = [
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
]
<\/script>`,Fe=h({__name:"ColoredDoc",setup(f){const o=p([{food:"Apple",calories:200,protein:"0g"},{food:"Orange",calories:62,protein:"0g"}]),i=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"];return(l,s)=>(r(),m(g,{label:"Colored",code:He},{description:a(()=>[c(" A table can be given a color to distinguish it from other tables. ")]),example:a(()=>[(r(),k(w,null,j(i,b=>t(e(u),{color:b,key:b,items:o.value},{default:a(()=>[t(e(n),{field:"food",header:"Food"}),t(e(n),{field:"calories",header:"Calories"}),t(e(n),{field:"protein",header:"Protein"})]),_:2},1032,["color","items"])),64))]),_:1}))}}),We=d("tr",null,[d("th",null,"3 People"),d("th",null,"2 Approved"),d("th")],-1),Me=`<template>
  <Table
    inverted
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
    <template #footer>
      <tr>
        <th>3 People</th>
        <th>2 Approved</th>
        <th></th>
      </tr>
    </template>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,Ge=h({__name:"InvertedDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{label:"Inverted",code:Me},{description:a(()=>[c(" A table's colors can be inverted ")]),example:a(()=>[t(e(u),{inverted:"",items:o.value},{footer:a(()=>[We]),default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),Ye=`<template>
  <Table
    v-for="color in colors"
    :color="color"
    :key="color"
    inverted
    :items="items"
  >
    <Column field="food" header="Food" />
    <Column field="calories" header="Calories" />
    <Column field="protein" header="Protein" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { food: 'Apple', calories: 200, protein: '0g' },
  { food: 'Orange', calories: 62, protein: '0g' },
])

const colors = [
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
]
<\/script>`,Oe=h({__name:"InvertedColoredDoc",setup(f){const o=p([{food:"Apple",calories:200,protein:"0g"},{food:"Orange",calories:62,protein:"0g"}]),i=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"];return(l,s)=>(r(),m(g,{code:Ye},{example:a(()=>[(r(),k(w,null,j(i,b=>t(e(u),{color:b,key:b,inverted:"",items:o.value},{default:a(()=>[t(e(n),{field:"food",header:"Food"}),t(e(n),{field:"calories",header:"Calories"}),t(e(n),{field:"protein",header:"Protein"})]),_:2},1032,["color","items"])),64))]),_:1}))}}),Ze=`<template>
  <Table
    padded
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'John',
    status: 'Approved',
    notes: 'He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.'
  },
  {
    name: 'Jamie',
    status: 'Approved',
    notes: 'Jamie was not interested in purchasing our product.'
  },
])
<\/script>`,Ke=h({__name:"PaddedDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again."},{name:"Jamie",status:"Approved",notes:"Jamie was not interested in purchasing our product."}]);return(i,l)=>(r(),m(g,{label:"Padded",code:Ze},{description:a(()=>[c(" A table may sometimes need to be more padded for legibility ")]),example:a(()=>[t(e(u),{padded:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),Qe=`<template>
  <Table
    padded="very"
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'John',
    status: 'Approved',
    notes: 'He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.'
  },
  {
    name: 'Jamie',
    status: 'Approved',
    notes: 'Jamie was not interested in purchasing our product.'
  },
])
<\/script>`,Xe=h({__name:"PaddedVeryDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again."},{name:"Jamie",status:"Approved",notes:"Jamie was not interested in purchasing our product."}]);return(i,l)=>(r(),m(g,{code:Qe},{example:a(()=>[t(e(u),{padded:"very",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),et=`<template>
  <Table
    compact
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,tt=h({__name:"CompactDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"},{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"},{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{label:"Compact",code:et},{description:a(()=>[c(" A table may sometimes need to be more compact to make more rows visible at a time ")]),example:a(()=>[t(e(u),{compact:"",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),at=`<template>
  <Table
    compact="very"
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,nt=h({__name:"CompactVeryDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"},{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"},{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{code:at},{example:a(()=>[t(e(u),{compact:"very",items:o.value},{default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),ot=d("tr",null,[d("th",null,"3 People"),d("th",null,"2 Approved"),d("th")],-1),st=`<template>
  <Table
    size="small"
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
    <template #footer>
      <tr>
        <th>3 People</th>
        <th>2 Approved</th>
        <th></th>
      </tr>
    </template>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,it=h({__name:"SizeDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{label:"Size",code:st},{description:a(()=>[c(" A table can also be small or large ")]),example:a(()=>[t(e(u),{size:"small",items:o.value},{footer:a(()=>[ot]),default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),lt=d("tr",null,[d("th",null,"3 People"),d("th",null,"2 Approved"),d("th")],-1),rt=`<template>
  <Table
    size="large"
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
    <template #footer>
      <tr>
        <th>3 People</th>
        <th>2 Approved</th>
        <th></th>
      </tr>
    </template>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`,mt=h({__name:"SizeLargeDoc",setup(f){const o=p([{name:"John",status:"Approved",notes:"None"},{name:"Jamie",status:"Approved",notes:"Requires call"},{name:"Jill",status:"Denied",notes:"None"}]);return(i,l)=>(r(),m(g,{code:rt},{example:a(()=>[t(e(u),{size:"large",items:o.value},{footer:a(()=>[lt]),default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"status",header:"Status"}),t(e(n),{field:"notes",header:"Notes"})]),_:1},8,["items"])]),_:1}))}}),dt=d("tr",null,[d("td",null,"18 Entries"),d("td",null,"Average age: 25"),d("td",null,"2 Job-Types")],-1),ct=`<template>
  <Table
    unstackable
    celled
    scrolling
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="age" header="Age" />
    <Column field="job" header="Job" />

    <template #footer>
      <tr>
        <td>18 Entries</td>
        <td>Average age: 25</td>
        <td>2 Job-Types</td>
      </tr>
    </template>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'James', age: 24, job: 'Engineer' },
  { name: 'Jill', age: 26, job: 'Engineer' },
  { name: 'Elyse', age: 24, job: 'Designer' },
  { name: 'Daphne', age: 24, job: 'Engineer' },
  { name: 'Zoe', age: 26, job: 'Engineer' },
  { name: 'Kirk', age: 24, job: 'Designer' },
  { name: 'Doug', age: 24, job: 'Engineer' },
  { name: 'Francis', age: 26, job: 'Engineer' },
  { name: 'Claire', age: 24, job: 'Designer' },
  { name: 'Thomas', age: 27, job: 'Engineer' },
  { name: 'Clint', age: 31, job: 'Engineer' },
  { name: 'Alison', age: 21, job: 'Designer' },
  { name: 'Rachel', age: 19, job: 'Engineer' },
  { name: 'Dave', age: 23, job: 'Engineer' },
  { name: 'Oliver', age: 29, job: 'Designer' },
  { name: 'Sue', age: 23, job: 'Engineer' },
  { name: 'Jennifer', age: 22, job: 'Engineer' },
  { name: 'Zak', age: 27, job: 'Designer' },
])
<\/script>`,ut=h({__name:"ScrollingDoc",setup(f){const o=p([{name:"James",age:24,job:"Engineer"},{name:"Jill",age:26,job:"Engineer"},{name:"Elyse",age:24,job:"Designer"},{name:"Daphne",age:24,job:"Engineer"},{name:"Zoe",age:26,job:"Engineer"},{name:"Kirk",age:24,job:"Designer"},{name:"Doug",age:24,job:"Engineer"},{name:"Francis",age:26,job:"Engineer"},{name:"Claire",age:24,job:"Designer"},{name:"Thomas",age:27,job:"Engineer"},{name:"Clint",age:31,job:"Engineer"},{name:"Alison",age:21,job:"Designer"},{name:"Rachel",age:19,job:"Engineer"},{name:"Dave",age:23,job:"Engineer"},{name:"Oliver",age:29,job:"Designer"},{name:"Sue",age:23,job:"Engineer"},{name:"Jennifer",age:22,job:"Engineer"},{name:"Zak",age:27,job:"Designer"}]);return(i,l)=>(r(),m(g,{label:"Scrolling",code:ct},{description:a(()=>[c(" A table body can scroll vertically. ")]),example:a(()=>[t(e(u),{unstackable:"",celled:"",scrolling:!0,items:o.value},{footer:a(()=>[dt]),default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"age",header:"Age"}),t(e(n),{field:"job",header:"Job"})]),_:1},8,["items"])]),_:1}))}}),pt=d("tr",null,[d("td",null,"18 Entries"),d("td",null,"Average age: 25"),d("td",null,"2 Job-Types")],-1),ft=`<template>
  <Table
    unstackable
    celled
    scrolling="long"
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="age" header="Age" />
    <Column field="job" header="Job" />

    <template #footer>
      <tr>
        <td>18 Entries</td>
        <td>Average age: 25</td>
        <td>2 Job-Types</td>
      </tr>
    </template>
  </Table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'James', age: 24, job: 'Engineer' },
  { name: 'Jill', age: 26, job: 'Engineer' },
  { name: 'Elyse', age: 24, job: 'Designer' },
  { name: 'Daphne', age: 24, job: 'Engineer' },
  { name: 'Zoe', age: 26, job: 'Engineer' },
  { name: 'Kirk', age: 24, job: 'Designer' },
  { name: 'Doug', age: 24, job: 'Engineer' },
  { name: 'Francis', age: 26, job: 'Engineer' },
  { name: 'Claire', age: 24, job: 'Designer' },
  { name: 'Thomas', age: 27, job: 'Engineer' },
  { name: 'Clint', age: 31, job: 'Engineer' },
  { name: 'Alison', age: 21, job: 'Designer' },
  { name: 'Rachel', age: 19, job: 'Engineer' },
  { name: 'Dave', age: 23, job: 'Engineer' },
  { name: 'Oliver', age: 29, job: 'Designer' },
  { name: 'Sue', age: 23, job: 'Engineer' },
  { name: 'Jennifer', age: 22, job: 'Engineer' },
  { name: 'Zak', age: 27, job: 'Designer' },
])
<\/script>`,ht=h({__name:"ScrollingLongDoc",setup(f){const o=p([{name:"James",age:24,job:"Engineer"},{name:"Jill",age:26,job:"Engineer"},{name:"Elyse",age:24,job:"Designer"},{name:"Daphne",age:24,job:"Engineer"},{name:"Zoe",age:26,job:"Engineer"},{name:"Kirk",age:24,job:"Designer"},{name:"Doug",age:24,job:"Engineer"},{name:"Francis",age:26,job:"Engineer"},{name:"Claire",age:24,job:"Designer"},{name:"Thomas",age:27,job:"Engineer"},{name:"Clint",age:31,job:"Engineer"},{name:"Alison",age:21,job:"Designer"},{name:"Rachel",age:19,job:"Engineer"},{name:"Dave",age:23,job:"Engineer"},{name:"Oliver",age:29,job:"Designer"},{name:"Sue",age:23,job:"Engineer"},{name:"Jennifer",age:22,job:"Engineer"},{name:"Zak",age:27,job:"Designer"}]);return(i,l)=>(r(),m(g,{code:ft},{description:a(()=>[c(" A scrolling table optionally supports predefined heights long, very long, short and very short ")]),example:a(()=>[t(e(u),{unstackable:"",celled:"",scrolling:"long",items:o.value},{footer:a(()=>[pt]),default:a(()=>[t(e(n),{field:"name",header:"Name"}),t(e(n),{field:"age",header:"Age"}),t(e(n),{field:"job",header:"Job"})]),_:1},8,["items"])]),_:1}))}}),bt={__name:"Table",setup(f){const o=[{id:"table",label:"Table",category:"Types",component:I},{id:"definition",label:"Definition",category:"Types",component:U},{id:"structured",label:"Structured",category:"Types",component:W},{id:"positive-negative",label:"Positive / Negative",category:"States",component:G},{id:"error",label:"Error",category:"States",component:O},{id:"warning",label:"Warning",category:"States",component:K},{id:"active",label:"Active",category:"States",component:X},{id:"disabled",label:"Disabled",category:"States",component:te},{id:"colored-cells",label:"Colored Cells",category:"States",component:ne},{id:"marked",label:"Marked",category:"States",component:se},{id:"single-line",label:"Single Line",category:"Variations",component:le},{id:"fixed",label:"Fixed",category:"Variations",component:[me,ce]},{id:"stacking",label:"Stacking",category:"Variations",component:pe},{id:"selectable-row",label:"Selectable Row",category:"Variations",component:[he,be]},{id:"selectable-cell",label:"Selectable Cell",category:"Variations",component:_e},{id:"vertical-alignment",label:"Vertical Alignment",category:"Variations",component:Ae},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:ke},{id:"striped",label:"Striped",category:"Variations",component:je},{id:"celled",label:"Celled",category:"Variations",component:xe},{id:"basic",label:"Basic",category:"Variations",component:[Ee,Pe]},{id:"collapsing-cell",label:"Collapsing Cell",category:"Variations",component:Ie},{id:"column-count",label:"Column Count",category:"Variations",component:Be},{id:"collapsing",label:"Collapsing",category:"Variations",component:ze},{id:"colored",label:"Colored",category:"Variations",component:Fe},{id:"inverted",label:"Inverted",category:"Variations",component:[Ge,Oe]},{id:"padded",label:"Padded",category:"Variations",component:[Ke,Xe]},{id:"compact",label:"Compact",category:"Variations",component:[tt,nt]},{id:"size",label:"Size",category:"Variations",component:[it,mt]},{id:"scrolling",label:"Scrolling",category:"Variations",component:[ut,ht]}];return(i,l)=>(r(),m(E,{title:"Table",description:"A table displays a collections of data grouped into rows","component-docs":o}))}};export{bt as default};
