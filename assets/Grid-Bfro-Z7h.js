import{e as s,o as r,c,w as e,a as t,b as i,u as a,E as p,y as _,A as w,C as v,f as n,d as C,a8 as x,z as f,q as l,Y as G,t as b,v as y,D as k}from"./index-CFQxuMLK.js";import{_ as g}from"./DocSection-bYVctxpZ.js";const A=`<template>
  <Grid>
    <GridColumn
      v-for="i in 16"
      :key="i"
    >
      <div
        :style="{
          backgroundColor: 'rgba(86, 61, 124, 0.1)',
          boxShadow: '0 0 0 1px rgba(86, 61, 124, 0.2) inset',
          display: 'block',
          minHeight: '50px',
        }"
      ></div>
    </GridColumn>
  </Grid>
</template>`,R=s({__name:"GridDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Grid",code:A},{description:e(()=>[t(" A basic grid ")]),example:e(()=>[i(a(p),null,{default:e(()=>[(r(),_(w,null,v(16,o=>i(a(n),{key:o},{default:e(()=>[C("div",{style:x({backgroundColor:"rgba(86, 61, 124, 0.1)",boxShadow:"0 0 0 1px rgba(86, 61, 124, 0.2) inset",display:"block",minHeight:"50px"})},null,4)]),_:2},1024)),64))]),_:1})]),_:1}))}}),S=`<template>
  <Grid :columns="3" divided>
    <GridRow
      v-for="i in 2"
      :key="i"
    >
      <GridColumn
        v-for="j in 3"
        :key="j"
      >
        <Image src="/vue-fomantic-ui/images/wireframe/media-paragraph.png" />
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,$=s({__name:"DividedDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Divided",code:S},{description:e(()=>[t(" A grid can have dividers between its columns ")]),example:e(()=>[i(a(p),{columns:3,divided:""},{default:e(()=>[(r(),_(w,null,v(2,o=>i(a(f),{key:o},{default:e(()=>[(r(),_(w,null,v(3,h=>i(a(n),{key:h},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/media-paragraph.png"})]),_:2},1024)),64))]),_:2},1024)),64))]),_:1})]),_:1}))}}),I=`<template>
  <Grid divided="vertically">
    <GridRow :columns="2">
      <GridColumn
        v-for="i in 2"
        :key="i"
      >
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
    </GridRow>
    <GridRow :columns="3">
      <GridColumn
        v-for="i in 3"
        :key="i"
      >
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,D=s({__name:"VerticallyDividedDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Vertically Divided",code:I},{description:e(()=>[t(" A grid can have dividers between rows ")]),example:e(()=>[i(a(p),{divided:"vertically"},{default:e(()=>[i(a(f),{columns:2},{default:e(()=>[(r(),_(w,null,v(2,o=>i(a(n),{key:o},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:2},1024)),64))]),_:1}),i(a(f),{columns:3},{default:e(()=>[(r(),_(w,null,v(3,o=>i(a(n),{key:o},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}}),V=`<template>
  <Grid celled>
    <GridRow>
      <GridColumn :width="3">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn :width="13">
        <Image src="/vue-fomantic-ui/images/wireframe/centered-paragraph.png" />
      </GridColumn>
    </GridRow>

    <GridRow>
      <GridColumn :width="3">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn :width="10">
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
      <GridColumn :width="3">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,z=s({__name:"CelledDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Celled",code:V},{description:e(()=>[t(" A grid can have rows divided into cells ")]),example:e(()=>[i(a(p),{celled:""},{default:e(()=>[i(a(f),null,{default:e(()=>[i(a(n),{width:3},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(a(n),{width:13},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/centered-paragraph.png"})]),_:1})]),_:1}),i(a(f),null,{default:e(()=>[i(a(n),{width:3},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(a(n),{width:10},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),i(a(n),{width:3},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),T=`<template>
  <Grid celled="internally">
    <GridRow>
      <GridColumn :width="3">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn :width="10">
        <Image src="/vue-fomantic-ui/images/wireframe/centered-paragraph.png" />
      </GridColumn>
      <GridColumn :width="3">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>

    <GridRow>
      <GridColumn :width="3">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn :width="10">
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
      <GridColumn :width="3">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,W=s({__name:"InternallyCelledDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Internally Celled",code:T},{description:e(()=>[t(" A grid can have rows divisions only between internal rows ")]),example:e(()=>[i(a(p),{celled:"internally"},{default:e(()=>[i(a(f),null,{default:e(()=>[i(a(n),{width:3},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(a(n),{width:10},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/centered-paragraph.png"})]),_:1}),i(a(n),{width:3},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}),i(a(f),null,{default:e(()=>[i(a(n),{width:3},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(a(n),{width:10},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),i(a(n),{width:3},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),q=`<template>
  <Grid :columns="3">
    <GridRow>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,M=s({__name:"RowsDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Rows",code:q},{description:e(()=>[t(" A row is a horizontal grouping of columns ")]),example:e(()=>[i(a(p),{columns:3},{default:e(()=>[i(a(f),null,{default:e(()=>[i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),i(a(f),null,{default:e(()=>[i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),E=`<template>
  <Grid>
    <GridColumn :width="8" v-for="i in 4" :key="i">
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
  </Grid>
</template>`,P=s({__name:"ColumnsDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Columns",code:E},{description:e(()=>[t(" Columns each contain gutters giving them equal spacing from other columns ")]),example:e(()=>[i(a(p),null,{default:e(()=>[(r(),_(w,null,v(4,o=>i(a(n),{width:8,key:o},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:2},1024)),64))]),_:1})]),_:1}))}}),j=`<template>
  <Grid>
    <GridColumn :width="5" floated="left">
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
    <GridColumn :width="5" floated="right">
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
  </Grid>
</template>`,B=s({__name:"FloatedDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Floated",code:j},{description:e(()=>[t(" A column can sit flush against the left or right edge of a row ")]),example:e(()=>[i(a(p),null,{default:e(()=>[i(a(n),{width:5,floated:"left"},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),i(a(n),{width:5,floated:"right"},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}))}}),F=`<template>
  <Grid>
    <GridColumn :width="4">
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </GridColumn>
    <GridColumn :width="9">
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
    <GridColumn :width="3">
      <Image src="/vue-fomantic-ui/images/wireframe/media-paragraph.png" />
    </GridColumn>
  </Grid>
</template>`,L=s({__name:"ColumnWidthDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Column Width",code:F},{description:e(()=>[t(" A column can vary in width taking up more than a single grid column ")]),example:e(()=>[i(a(p),null,{default:e(()=>[i(a(n),{width:4},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(a(n),{width:9},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),i(a(n),{width:3},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/media-paragraph.png"})]),_:1})]),_:1})]),_:1}))}}),N=`<template>
  <Grid>
    <GridRow :columns="3">
      <GridColumn v-for="i in 3" :key="i">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
    <GridRow :columns="4">
      <GridColumn v-for="i in 4" :key="i">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,H=s({__name:"ColumnCountDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Column Count",code:N},{description:e(()=>[t(" A grid can have a different number of columns per row ")]),example:e(()=>[i(a(p),null,{default:e(()=>[i(a(f),{columns:3},{default:e(()=>[(r(),_(w,null,v(3,o=>i(a(n),{key:o},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:2},1024)),64))]),_:1}),i(a(f),{columns:4},{default:e(()=>[(r(),_(w,null,v(4,o=>i(a(n),{key:o},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}}),Y=`<template>
  <Grid columns="equal">
    <GridColumn>
      <Segment>1</Segment>
    </GridColumn>
    <GridColumn :width="8">
      <Segment>2</Segment>
    </GridColumn>
    <GridColumn>
      <Segment>3</Segment>
    </GridColumn>
  </Grid>
</template>`,J=s({__name:"EqualWidthDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Equal Width",code:Y},{description:e(()=>[t(" A row can automatically resize all elements to split the available width evenly. ")]),example:e(()=>[i(a(p),{columns:"equal"},{default:e(()=>[i(a(n),null,{default:e(()=>[i(a(G),null,{default:e(()=>[t("1")]),_:1})]),_:1}),i(a(n),{width:8},{default:e(()=>[i(a(G),null,{default:e(()=>[t("2")]),_:1})]),_:1}),i(a(n),null,{default:e(()=>[i(a(G),null,{default:e(()=>[t("3")]),_:1})]),_:1})]),_:1})]),_:1}))}}),K=`<template>
  <Grid :columns="3" divided>
    <GridRow stretched>
      <GridColumn>
        <Segment>1</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,O=s({__name:"StretchedDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Stretched",code:K},{description:e(()=>[t(" A row can stretch its contents to take up the entire column height ")]),example:e(()=>[i(a(p),{columns:3,divided:""},{default:e(()=>[i(a(f),{stretched:""},{default:e(()=>[i(a(n),null,{default:e(()=>[i(a(G),null,{default:e(()=>[t("1")]),_:1})]),_:1}),i(a(n),null,{default:e(()=>[i(a(G),null,{default:e(()=>[t("1")]),_:1}),i(a(G),null,{default:e(()=>[t("2")]),_:1})]),_:1}),i(a(n),null,{default:e(()=>[i(a(G),null,{default:e(()=>[t("1")]),_:1}),i(a(G),null,{default:e(()=>[t("2")]),_:1}),i(a(G),null,{default:e(()=>[t("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Q=C("p",null," The following grid has vertical and horizontal gutters. ",-1),U=`<template>
  <p>
    The following grid has vertical and horizontal gutters.
  </p>
  <Grid :columns="2" padded>
    <GridColumn>
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
    <GridColumn>
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
  </Grid>
</template>`,X=s({__name:"PaddedDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Padded",code:U},{description:e(()=>[t(" A grid can preserve its vertical and horizontal gutters on first and last columns. ")]),example:e(()=>[Q,i(a(p),{columns:2,padded:""},{default:e(()=>[i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1}),i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}))}}),Z=`<template>
  <Grid>
    <GridRow :columns="3">
      <GridColumn v-for="i in 3" :key="i">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
    <GridRow :columns="4">
      <GridColumn v-for="i in 4" :key="i">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,ee=s({__name:"RelaxedDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Relaxed",code:Z},{description:e(()=>[t(" A grid can increase its gutters to allow for more negative space ")]),example:e(()=>[i(a(p),{relaxed:"",columns:4},{default:e(()=>[(r(),_(w,null,v(4,o=>i(a(n),{key:o},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:2},1024)),64))]),_:1})]),_:1}))}}),ie=`<template>
  <Grid padded :columns="5">
    <GridColumn v-for="color in colors" :key="color" :color="color">
      {{ color }}
    </GridColumn>
  </Grid>
</template>

<script setup>
import { Grid, GridColumn } from 'vue-fomantic-ui'

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
<\/script>`,ae=s({__name:"ColoredDoc",setup(u){const d=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"];return(m,o)=>(r(),c(g,{label:"Colored",code:ie},{description:e(()=>[t(" A row or column can be colored ")]),example:e(()=>[i(a(p),{padded:"",columns:5},{default:e(()=>[(r(),_(w,null,v(d,h=>i(a(n),{key:h,color:h},{default:e(()=>[t(b(h),1)]),_:2},1032,["color"])),64))]),_:1})]),_:1}))}}),ne=`<template>
  <Grid centered :columns="2">
    <GridColumn>
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </GridColumn>
    <GridRow centered :columns="4">
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,re=s({__name:"CenteredDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Centered",code:ne},{description:e(()=>[t(" A grid can have its columns centered ")]),example:e(()=>[i(a(p),{centered:"",columns:2},{default:e(()=>[i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(a(f),{centered:"",columns:4},{default:e(()=>[i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),te=`<template>
  <Grid textAlign="center" :columns="3">
    <GridRow>
      <GridColumn>
        <Menu
          vertical
          fluid
          :items="[{ header: true, text: 'Cats' }]"
        />
      </GridColumn>
      <GridColumn>
        <Menu
          vertical
          fluid
          :items="[
            { header: true, text: 'Dogs' },
            { text: 'Poodle' },
            { text: 'Cockerspaniel' },
          ]"
        />
      </GridColumn>
      <GridColumn>
        <Menu
          vertical
          fluid
          :items="[{ header: true, text: 'Monkey' }]"
        />
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,le=s({__name:"TextAlignmentDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Text Alignment",code:te},{description:e(()=>[t(" A grid, row, or column can specify its text alignment ")]),example:e(()=>[i(a(p),{textAlign:"center",columns:3},{default:e(()=>[i(a(f),null,{default:e(()=>[i(a(n),null,{default:e(()=>[i(a(y),{vertical:"",fluid:"",items:[{header:!0,text:"Cats"}]})]),_:1}),i(a(n),null,{default:e(()=>[i(a(y),{vertical:"",fluid:"",items:[{header:!0,text:"Dogs"},{text:"Poodle"},{text:"Cockerspaniel"}]})]),_:1}),i(a(n),null,{default:e(()=>[i(a(y),{vertical:"",fluid:"",items:[{header:!0,text:"Monkey"}]})]),_:1})]),_:1})]),_:1})]),_:1}))}}),oe=C("br",null,null,-1),de=`<template>
  <Grid verticalAlign="middle" :columns="4" centered>
    <GridRow>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
        <br />
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,me=s({__name:"VerticalAlignmentDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Vertical Alignment",code:de},{description:e(()=>[t(" A grid, row, or column can specify its vertical alignment to have all its columns vertically centered ")]),example:e(()=>[i(a(p),{verticalAlign:"middle",columns:4,centered:""},{default:e(()=>[i(a(f),null,{default:e(()=>[i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),oe,i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),i(a(n),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),ce=`<template>
  <Grid doubling :columns="5">
    <GridColumn v-for="i in 5" :key="i">
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </GridColumn>
  </Grid>
</template>`,ue=s({__name:"DoublingDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Doubling",code:ce},{description:e(()=>[t(" A grid can double its column width on tablet and mobile sizes ")]),example:e(()=>[i(a(p),{doubling:"",columns:5},{default:e(()=>[(r(),_(w,null,v(5,o=>i(a(n),{key:o},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:2},1024)),64))]),_:1})]),_:1}))}}),se=`<template>
  <Grid stackable :columns="2">
    <GridColumn v-for="i in 2" :key="i">
      <Segment>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </Segment>
    </GridColumn>
  </Grid>
</template>`,pe=s({__name:"StackableDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Stackable",code:se},{description:e(()=>[t(" A grid can have its columns stack on-top of each other after reaching mobile breakpoints ")]),example:e(()=>[i(a(p),{stackable:"",columns:2},{default:e(()=>[(r(),_(w,null,v(2,o=>i(a(n),{key:o},{default:e(()=>[i(a(G),null,{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:2},1024)),64))]),_:1})]),_:1}))}}),ge=`<template>
  <Grid>
    <GridRow v-for="i in 3" :key="i">
      <GridColumn>
        Computer Row {{ i }}
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,fe=s({__name:"ReversedDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Reversed",code:ge},{description:e(()=>[t(" A grid or row can specify that its columns should reverse order at different device sizes ")]),example:e(()=>[i(a(p),{reversed:"computer vertically"},{default:e(()=>[(r(),_(w,null,v(3,o=>i(a(f),{key:o},{default:e(()=>[i(a(n),null,{default:e(()=>[t(" Computer Row "+b(o),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}}),_e=`<template>
  <Grid>
    <GridRow only="large screen" :columns="2">
      <GridColumn v-for="i in 2" :key="i">
        <Segment>Large Screen</Segment>
      </GridColumn>
    </GridRow>
    <GridRow only="widescreen" :columns="2">
      <GridColumn v-for="i in 2" :key="i">
        <Segment>WideScreen</Segment>
      </GridColumn>
    </GridRow>
    <GridRow only="mobile" :columns="2">
      <GridColumn v-for="i in 2" :key="i">
        <Segment>Mobile</Segment>
      </GridColumn>
    </GridRow>
    <GridRow :columns="3">
      <GridColumn only="computer">
        <Segment>Computer</Segment>
      </GridColumn>
      <GridColumn only="mobile">
        <Segment>Tablet and Mobile</Segment>
      </GridColumn>
      <GridColumn v-for="i in 2" :key="i">
        <Segment>All Sizes</Segment>
      </GridColumn>
    </GridRow>
    <GridRow only="computer" :columns="4">
      <GridColumn v-for="i in 4" :key="i">
        <Segment>Computer</Segment>
      </GridColumn>
    </GridRow>
    <GridRow only="tablet" :columns="3">
      <GridColumn v-for="i in 3" :key="i">
        <Segment>Tablet</Segment>
      </GridColumn>
    </GridRow>
  </Grid>
</template>`,we=s({__name:"DeviceVisibilityDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Device Visibility",code:_e},{description:e(()=>[t(" A columns or row can appear only for a specific device, or screen sizes ")]),example:e(()=>[i(a(p),null,{default:e(()=>[i(a(f),{only:"large screen",columns:2},{default:e(()=>[(r(),_(w,null,v(2,o=>i(a(n),{key:o},{default:e(()=>[i(a(G),null,{default:e(()=>[t("Large Screen")]),_:1})]),_:2},1024)),64))]),_:1}),i(a(f),{only:"widescreen",columns:2},{default:e(()=>[(r(),_(w,null,v(2,o=>i(a(n),{key:o},{default:e(()=>[i(a(G),null,{default:e(()=>[t("WideScreen")]),_:1})]),_:2},1024)),64))]),_:1}),i(a(f),{only:"mobile",columns:2},{default:e(()=>[(r(),_(w,null,v(2,o=>i(a(n),{key:o},{default:e(()=>[i(a(G),null,{default:e(()=>[t("Mobile")]),_:1})]),_:2},1024)),64))]),_:1}),i(a(f),{columns:3},{default:e(()=>[i(a(n),{only:"computer"},{default:e(()=>[i(a(G),null,{default:e(()=>[t("Computer")]),_:1})]),_:1}),i(a(n),{only:"mobile"},{default:e(()=>[i(a(G),null,{default:e(()=>[t("Tablet and Mobile")]),_:1})]),_:1}),(r(),_(w,null,v(2,o=>i(a(n),{key:o},{default:e(()=>[i(a(G),null,{default:e(()=>[t("All Sizes")]),_:1})]),_:2},1024)),64))]),_:1}),i(a(f),{only:"computer",columns:4},{default:e(()=>[(r(),_(w,null,v(4,o=>i(a(n),{key:o},{default:e(()=>[i(a(G),null,{default:e(()=>[t("Computer")]),_:1})]),_:2},1024)),64))]),_:1}),i(a(f),{only:"tablet",columns:3},{default:e(()=>[(r(),_(w,null,v(3,o=>i(a(n),{key:o},{default:e(()=>[i(a(G),null,{default:e(()=>[t("Tablet")]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}}),ve=`<template>
  <Grid>
    <GridColumn
      v-for="i in 5"
      :key="i"
      :mobile="16"
      :tablet="8"
      :computer="4"
    >
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
  </Grid>
</template>`,Ge=s({__name:"ResponsiveWidthDoc",setup(u){return(d,m)=>(r(),c(g,{label:"Responsive Width",code:ve},{description:e(()=>[t(" A column can specify a width for a specific device ")]),example:e(()=>[i(a(p),null,{default:e(()=>[(r(),_(w,null,v(5,o=>i(a(n),{key:o,mobile:16,tablet:8,computer:4},{default:e(()=>[i(a(l),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:2},1024)),64))]),_:1})]),_:1}))}}),Ce={__name:"Grid",setup(u){const d=[{id:"grid",label:"Grid",category:"Types",component:R},{id:"divided",label:"Divided",category:"Types",component:$},{id:"vertically-divided",label:"Vertically Divided",category:"Types",component:D},{id:"celled",label:"Celled",category:"Types",component:z},{id:"internally-celled",label:"Internally Celled",category:"Types",component:W},{id:"rows",label:"Rows",category:"Content",component:M},{id:"columns",label:"Columns",category:"Content",component:P},{id:"floated",label:"Floated",category:"Variations",component:B},{id:"column-width",label:"Column Width",category:"Variations",component:L},{id:"column-count",label:"Column Count",category:"Variations",component:H},{id:"equal-width",label:"Equal Width",category:"Variations",component:J},{id:"stretched",label:"Stretched",category:"Variations",component:O},{id:"padded",label:"Padded",category:"Variations",component:X},{id:"relaxed",label:"Relaxed",category:"Variations",component:ee},{id:"colored",label:"Colored",category:"Variations",component:ae},{id:"centered",label:"Centered",category:"Variations",component:re},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:le},{id:"vertical-alignment",label:"Vertical Alignment",category:"Variations",component:me},{id:"doubling",label:"Doubling",category:"Responsive Variations",component:ue},{id:"stackable",label:"Stackable",category:"Responsive Variations",component:pe},{id:"reversed",label:"Reversed",category:"Responsive Variations",component:fe},{id:"device-visibility",label:"Device Visibility",category:"Responsive Variations",component:we},{id:"responsive-width",label:"Responsive Width",category:"Responsive Variations",component:Ge}],m={Grid:{props:[{name:"celled",type:"boolean|string",default:"false",description:"A grid can have rows divided into cells."},{name:"centered",type:"boolean",default:"false",description:"A grid can have its columns centered."},{name:"columns",type:"number|string",default:"undefined",description:"Represents column count per row in Grid."},{name:"container",type:"boolean",default:"false",description:"A grid can be combined with a container to use the available layout and alignment."},{name:"divided",type:"boolean|string",default:"false",description:"A grid can have dividers between its columns."},{name:"doubling",type:"boolean",default:"false",description:"A grid can double its column width on tablet and mobile sizes."},{name:"inverted",type:"boolean",default:"false",description:"A grid's colors can be inverted."},{name:"padded",type:"boolean|string",default:"false",description:"A grid can preserve its vertical and horizontal gutters on first and last columns."},{name:"relaxed",type:"boolean|string",default:"false",description:"A grid can increase its gutters to allow for more negative space."},{name:"reversed",type:"string",default:"undefined",description:"A grid can specify that its columns should reverse order at different device sizes."},{name:"stackable",type:"boolean",default:"false",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints."},{name:"stretched",type:"boolean",default:"false",description:"A grid can stretch its contents to take up the entire grid height."},{name:"textAlign",type:"string",default:"undefined",description:"A grid can specify its text alignment."},{name:"verticalAlign",type:"string",default:"undefined",description:"A grid can specify its vertical alignment to have all its columns vertically centered."}]},GridRow:{props:[{name:"centered",type:"boolean",default:"false",description:"A row can have its columns centered."},{name:"color",type:"string",default:"undefined",description:"A grid row can be colored. "},{name:"divided",type:"boolean",default:"false",description:"A row can have dividers between its columns."},{name:"only",type:"string",default:"undefined",description:"A row can appear only for a specific device, or screen sizes."},{name:"reversed",type:"string",default:"undefined",description:"A row can specify that its columns should reverse order at different device sizes."},{name:"stretched",type:"boolean",default:"false",description:"A row can stretch its contents to take up the entire column height."},{name:"textAlign",type:"string",default:"undefined",description:"A row can specify its text alignment. "},{name:"verticalAlign",type:"string",default:"undefined",description:"A row can specify its vertical alignment to have all its columns vertically centered. "}]},GridColumn:{props:[{name:"color",type:"string",default:"undefined",description:"A grid column can be colored. "},{name:"computer",type:"number",default:"undefined",description:"A column can specify a width for a computer."},{name:"floated",type:"string",default:"undefined",description:"A column can sit flush against the left or right edge of a row. "},{name:"largeScreen",type:"number",default:"undefined",description:"A column can specify a width for a large screen device."},{name:"mobile",type:"number",default:"undefined",description:"A column can specify a width for a mobile device."},{name:"only",type:"string",default:"undefined",description:"A column can appear only for a specific device, or screen sizes."},{name:"stretched",type:"boolean",default:"false",description:"A column can stretch its contents to take up the entire grid or row height."},{name:"tablet",type:"number",default:"undefined",description:"A column can specify a width for a tablet device."},{name:"textAlign",type:"string",default:"undefined",description:"A column can specify its text alignment. "},{name:"verticalAlign",type:"string",default:"undefined",description:"A column can specify its vertical alignment to have all its columns vertically centered. "},{name:"widescreen",type:"number",default:"undefined",description:"A column can specify a width for a wide screen device."},{name:"width",type:"number",default:"undefined",description:"Represents width of column."}]}};return(o,h)=>(r(),c(k,{title:"Grid",description:"A grid is used to harmonize negative space in a layout","component-docs":d,"api-docs":m}))}};export{Ce as default};
