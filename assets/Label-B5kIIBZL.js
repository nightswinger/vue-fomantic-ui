import{o as r,c as u,w as e,a as i,b as a,u as l,A as t,e as m,B as S,d as b,_ as x,C as G,k as $,l as L,x as h,i as y,j as p,n as d,y as _,E as v,T as C,M as f,V as I,F as w,G as g,f as D}from"./index-DXf-rKoW.js";import{_ as s}from"./DocSection-C2fGI9ub.js";import{_ as k}from"./joe-CWv6CXVt.js";const F=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,z={__name:"LabelDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Label",code:F},{description:e(()=>[i(" A label ")]),example:e(()=>[a(l(t),null,{default:e(()=>[a(l(m),{name:"mail"}),i(" 23 ")]),_:1})]),_:1}))}},T=b("img",{src:k},null,-1),B=b("img",{src:x},null,-1),P=b("img",{src:G},null,-1),A=`<template>
  <SuiLabel as="a" image>
    <img src="/images/avatar/small/joe.jpg" />
    Joe
  </SuiLabel>
  <SuiLabel as="a" image color="blue">
    <img src="/images/avatar/small/veronika.jpg" />
    Veronika
    <SuiLabelDetail>Friend</SuiLabelDetail>
  </SuiLabel>
  <SuiLabel as="a" image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
    <SuiIcon name="delete" />
  </SuiLabel>
</template>`,V={__name:"ImageDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Image",code:A},{description:e(()=>[i(" A label can be formatted to emphasize an image ")]),example:e(()=>[a(l(t),{as:"a",image:""},{default:e(()=>[T,i(" Joe ")]),_:1}),a(l(t),{as:"a",image:"",color:"blue"},{default:e(()=>[B,i(" Veronika "),a(l(S),null,{default:e(()=>[i("Friend")]),_:1})]),_:1}),a(l(t),{as:"a",image:""},{default:e(()=>[P,i(" Elliot "),a(l(m),{name:"delete"})]),_:1})]),_:1}))}},M=b("input",{type:"text",placeholder:"First Name"},null,-1),R=b("input",{type:"text"},null,-1),O=b("input",{type:"text",placeholder:"Username"},null,-1),H=b("input",{type:"password"},null,-1),U=`<template>
  <SuiForm fluid>
    <SuiFormField>
      <input type="text" placeholder="First Name" />
      <SuiLabel pointing>Please enter a value</SuiLabel>
    </SuiFormField>
    <SuiDivider />
    <SuiFormField>
      <SuiLabel pointing="below">Please enter a value</SuiLabel>
      <input type="text" />
    </SuiFormField>
    <SuiDivider />
    <SuiFormField inline>
      <input type="text" placeholder="Username" />
      <SuiLabel pointing="left" color="red" basic>That name is taken!</SuiLabel>
    </SuiFormField>
    <SuiDivider />
    <SuiFormField inline>
      <SuiLabel pointing="right" color="red" basic>Your password must be 6 characters or more</SuiLabel>
      <input type="password" />
    </SuiFormField>
  </SuiForm>
</template>`,E={__name:"PointingDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Pointing",code:U},{description:e(()=>[i(" A label can point to content next to it ")]),example:e(()=>[a(l($),{fluid:""},{default:e(()=>[a(l(L),null,{default:e(()=>[M,a(l(t),{pointing:""},{default:e(()=>[i("Please enter a value")]),_:1})]),_:1}),a(l(h)),a(l(L),null,{default:e(()=>[a(l(t),{pointing:"below"},{default:e(()=>[i("Please enter a value")]),_:1}),R]),_:1}),a(l(h)),a(l(L),{inline:""},{default:e(()=>[O,a(l(t),{pointing:"left",color:"red",basic:""},{default:e(()=>[i("That name is taken!")]),_:1})]),_:1}),a(l(h)),a(l(L),{inline:""},{default:e(()=>[a(l(t),{pointing:"right",color:"red",basic:""},{default:e(()=>[i("Your password must be 6 characters or more")]),_:1}),H]),_:1})]),_:1})]),_:1}))}},j=`<template>
  <SuiGrid :columns="2">
    <SuiGridColumn>
      <SuiImage
        :label="{ as: 'a', corner: 'left', icon: 'heart' }"
        src="/images/wireframe/image.png"
      >
      </SuiImage>
    </SuiGridColumn>
    <SuiGridColumn>
      <SuiImage
        :label="{ as: 'a', color: 'red', corner: 'right', icon: 'save' }"
        src="/images/wireframe/image.png"
      >
      </SuiImage>
    </SuiGridColumn>
  </SuiGrid>
</template>`,Y={__name:"CornerDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Corner",code:j},{description:e(()=>[i(" A label can position itself in the corner of an element ")]),example:e(()=>[a(l(y),{columns:2},{default:e(()=>[a(l(p),null,{default:e(()=>[a(l(d),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),a(l(p),null,{default:e(()=>[a(l(d),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},N=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,q={__name:"TagDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Tag",code:N},{description:e(()=>[i(" A label can appear as a tag ")]),example:e(()=>[a(l(t),{as:"a",tag:""},{default:e(()=>[i("New")]),_:1}),a(l(t),{as:"a",tag:"",color:"red"},{default:e(()=>[i("Upcoming")]),_:1}),a(l(t),{as:"a",tag:"",color:"teal"},{default:e(()=>[i("Featured")]),_:1})]),_:1}))}},W=b("span",null,"Account Details",-1),J=b("span",null,"User Reviews",-1),K=b("span",null,"Technical Specifications",-1),Q=b("span",null,"User Reviews",-1),X=`<template>
  <SuiGrid :columns="2">
    <SuiGridColumn>
      <SuiSegment raised>
        <SuiLabel as="a" ribbon color="red">Overview</SuiLabel>
        <span>Account Details</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />

        <SuiLabel as="a" ribbon color="blue">Community</SuiLabel>
        <span>User Reviews</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </SuiSegment>
    </SuiGridColumn>
    <SuiGridColumn>
      <SuiSegment raised>
        <SuiLabel as="a" ribbon="right" color="orange">Specs</SuiLabel>
        <span>Technical Specifications</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />

        <SuiLabel as="a" ribbon="right" color="teal">Reviews</SuiLabel>
        <span>User Reviews</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </SuiSegment>
    </SuiGridColumn>
  </SuiGrid>
</template>`,Z={__name:"RibbonDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Ribbon",code:X},{description:e(()=>[i(" A label can appear as a ribbon attaching itself to an element. ")]),example:e(()=>[a(l(y),{columns:2},{default:e(()=>[a(l(p),null,{default:e(()=>[a(l(_),{raised:""},{default:e(()=>[a(l(t),{as:"a",ribbon:"",color:"red"},{default:e(()=>[i("Overview")]),_:1}),W,a(l(d),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),a(l(t),{as:"a",ribbon:"",color:"blue"},{default:e(()=>[i("Community")]),_:1}),J,a(l(d),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),a(l(p),null,{default:e(()=>[a(l(_),{raised:""},{default:e(()=>[a(l(t),{as:"a",ribbon:"right",color:"orange"},{default:e(()=>[i("Specs")]),_:1}),K,a(l(d),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),a(l(t),{as:"a",ribbon:"right",color:"teal"},{default:e(()=>[i("Reviews")]),_:1}),Q,a(l(d),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},ee=`<template>
  <SuiGrid :columns="3">
    <SuiGridRow>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="top">HTML</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="bottom">CSS</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="top right">Code</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
    </SuiGridRow>

    <SuiGridRow>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="top left">View</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="bottom left">User View</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="bottom right">Admin View</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
    </SuiGridRow>
  </SuiGrid>
</template>`,ae={__name:"AttachedDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Attached",code:ee},{description:e(()=>[i(" A label can attach to a content segment ")]),example:e(()=>[a(l(y),{columns:3},{default:e(()=>[a(l(v),null,{default:e(()=>[a(l(p),null,{default:e(()=>[a(l(_),{padded:""},{default:e(()=>[a(l(t),{attached:"top"},{default:e(()=>[i("HTML")]),_:1}),a(l(d),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),a(l(p),null,{default:e(()=>[a(l(_),{padded:""},{default:e(()=>[a(l(t),{attached:"bottom"},{default:e(()=>[i("CSS")]),_:1}),a(l(d),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),a(l(p),null,{default:e(()=>[a(l(_),{padded:""},{default:e(()=>[a(l(t),{attached:"top right"},{default:e(()=>[i("Code")]),_:1}),a(l(d),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),a(l(v),null,{default:e(()=>[a(l(p),null,{default:e(()=>[a(l(_),{padded:""},{default:e(()=>[a(l(t),{attached:"top left"},{default:e(()=>[i("View")]),_:1}),a(l(d),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),a(l(p),null,{default:e(()=>[a(l(_),{padded:""},{default:e(()=>[a(l(t),{attached:"bottom left"},{default:e(()=>[i("User View")]),_:1}),a(l(d),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),a(l(p),null,{default:e(()=>[a(l(_),{padded:""},{default:e(()=>[a(l(t),{attached:"bottom right"},{default:e(()=>[i("Admin View")]),_:1}),a(l(d),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},le=`<template>
  <SuiList divided selection>
    <SuiListItem>
      <SuiLabel color="red" horizontal>Fruit</SuiLabel>
      Kumquats
    </SuiListItem>
    <SuiListItem>
      <SuiLabel color="purple" horizontal>Candy</SuiLabel>
      Ice Cream
    </SuiListItem>
    <SuiListItem>
      <SuiLabel color="red" horizontal>Fruit</SuiLabel>
      Orange
    </SuiListItem>
    <SuiListItem>
      <SuiLabel horizontal>Dog</SuiLabel>
      Poodle
    </SuiListItem>
  </SuiList>
</template>`,ie={__name:"HorizontalDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Horizontal",code:le},{description:e(()=>[i(" A horizontal label is formatted to label content along-side it horizontally ")]),example:e(()=>[a(l(C),{divided:"",selection:""},{default:e(()=>[a(l(f),null,{default:e(()=>[a(l(t),{color:"red",horizontal:""},{default:e(()=>[i("Fruit")]),_:1}),i(" Kumquats ")]),_:1}),a(l(f),null,{default:e(()=>[a(l(t),{color:"purple",horizontal:""},{default:e(()=>[i("Candy")]),_:1}),i(" Ice Cream ")]),_:1}),a(l(f),null,{default:e(()=>[a(l(t),{color:"red",horizontal:""},{default:e(()=>[i("Fruit")]),_:1}),i(" Orange ")]),_:1}),a(l(f),null,{default:e(()=>[a(l(t),{horizontal:""},{default:e(()=>[i("Dog")]),_:1}),i(" Poodle ")]),_:1})]),_:1})]),_:1}))}},te=`<template>
  <SuiMenu compact>
    <SuiMenuItem>
      <SuiIcon name="mail" /> Messages
      <SuiLabel floating color="red">22</SuiLabel>
    </SuiMenuItem>
    <SuiMenuItem>
      <SuiIcon name="users" /> Friends
      <SuiLabel floating color="teal">22</SuiLabel>
    </SuiMenuItem>
  </SuiMenu>
</template>`,oe={__name:"FloatingDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Floating",code:te},{description:e(()=>[i(" A label can float above or below another element ")]),example:e(()=>[a(l(I),{compact:""},{default:e(()=>[a(l(w),null,{default:e(()=>[a(l(m),{name:"mail"}),i(" Messages "),a(l(t),{floating:"",color:"red"},{default:e(()=>[i("22")]),_:1})]),_:1}),a(l(w),null,{default:e(()=>[a(l(m),{name:"users"}),i(" Friends "),a(l(t),{floating:"",color:"teal"},{default:e(()=>[i("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},re=`<template>
  <SuiSegment inverted>
    <SuiLabel as="a" inverted primary>Primary</SuiLabel>
    <SuiLabel as="a" inverted secondary>Secondary</SuiLabel>
    <SuiLabel as="a" inverted color="red">Red</SuiLabel>
    <SuiLabel as="a" inverted color="orange">Orange</SuiLabel>
    <SuiLabel as="a" inverted color="yellow">Yellow</SuiLabel>
    <SuiLabel as="a" basic inverted color="olive">Olive</SuiLabel>
    <SuiLabel as="a" basic inverted color="green">Green</SuiLabel>
    <SuiLabel as="a" basic inverted color="teal">Teal</SuiLabel>
    <SuiLabel as="a" basic inverted color="blue">Blue</SuiLabel>
    <SuiLabel as="a" basic inverted color="violet">Violet</SuiLabel>
    <SuiLabel as="a" tag inverted color="purple">Purple</SuiLabel>
    <SuiLabel as="a" tag inverted color="pink">Pink</SuiLabel>
    <SuiLabel as="a" tag inverted color="brown">Brown</SuiLabel>
    <SuiLabel as="a" tag inverted color="grey">Grey</SuiLabel>
    <SuiLabel as="a" tag inverted color="black">Black</SuiLabel>
  </SuiSegment>
</template>`,ue={__name:"InvertedDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Inverted",code:re},{description:e(()=>[i(" All Variants of Label can be inverted ")]),example:e(()=>[a(l(_),{inverted:""},{default:e(()=>[a(l(t),{as:"a",inverted:"",primary:""},{default:e(()=>[i("Primary")]),_:1}),a(l(t),{as:"a",inverted:"",secondary:""},{default:e(()=>[i("Secondary")]),_:1}),a(l(t),{as:"a",inverted:"",color:"red"},{default:e(()=>[i("Red")]),_:1}),a(l(t),{as:"a",inverted:"",color:"orange"},{default:e(()=>[i("Orange")]),_:1}),a(l(t),{as:"a",inverted:"",color:"yellow"},{default:e(()=>[i("Yellow")]),_:1}),a(l(t),{as:"a",basic:"",inverted:"",color:"olive"},{default:e(()=>[i("Olive")]),_:1}),a(l(t),{as:"a",basic:"",inverted:"",color:"green"},{default:e(()=>[i("Green")]),_:1}),a(l(t),{as:"a",basic:"",inverted:"",color:"teal"},{default:e(()=>[i("Teal")]),_:1}),a(l(t),{as:"a",basic:"",inverted:"",color:"blue"},{default:e(()=>[i("Blue")]),_:1}),a(l(t),{as:"a",basic:"",inverted:"",color:"violet"},{default:e(()=>[i("Violet")]),_:1}),a(l(t),{as:"a",tag:"",inverted:"",color:"purple"},{default:e(()=>[i("Purple")]),_:1}),a(l(t),{as:"a",tag:"",inverted:"",color:"pink"},{default:e(()=>[i("Pink")]),_:1}),a(l(t),{as:"a",tag:"",inverted:"",color:"brown"},{default:e(()=>[i("Brown")]),_:1}),a(l(t),{as:"a",tag:"",inverted:"",color:"grey"},{default:e(()=>[i("Grey")]),_:1}),a(l(t),{as:"a",tag:"",inverted:"",color:"black"},{default:e(()=>[i("Black")]),_:1})]),_:1})]),_:1}))}},ce=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,ne={__name:"DetailDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Detail",code:ce},{description:e(()=>[i(" A label can contain a detail ")]),example:e(()=>[a(l(t),null,{default:e(()=>[i(" Dogs "),a(l(S),null,{default:e(()=>[i("214")]),_:1})]),_:1})]),_:1}))}},se=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    Mail
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="checkmark" />
    Test Passed
  </SuiLabel>
  <SuiLabel icon="dog" />
  <SuiLabel icon="cat" />
</template>`,de={__name:"IconDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Icon",code:se},{description:e(()=>[i(" A label can include an icon ")]),example:e(()=>[a(l(t),null,{default:e(()=>[a(l(m),{name:"mail"}),i(" Mail ")]),_:1}),a(l(t),null,{default:e(()=>[a(l(m),{name:"checkmark"}),i(" Test Passed ")]),_:1}),a(l(t),{icon:"dog"}),a(l(t),{icon:"cat"})]),_:1}))}},be=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,pe={__name:"LinkDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Link",code:be},{description:e(()=>[i(" A label can be a link or contain an item that links ")]),example:e(()=>[a(l(t),{as:"a"},{default:e(()=>[a(l(m),{name:"mail"}),i(" 23 ")]),_:1}),a(l(t),null,{default:e(()=>[a(l(m),{name:"mail"}),i(" 23 "),a(l(S),null,{default:e(()=>[i("View Mail")]),_:1})]),_:1})]),_:1}))}},me=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,_e={__name:"DisabledDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Disabled",code:me},{description:e(()=>[i(" A label can show it is currently unable to be interacted with ")]),example:e(()=>[a(l(t),{disabled:""},{default:e(()=>[i("Disabled Label")]),_:1})]),_:1}))}},Se=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,ge={__name:"FluidDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Fluid",code:Se},{description:e(()=>[i(" A label can take the width of its container ")]),example:e(()=>[a(l(t),{fluid:""},{default:e(()=>[i("Fits container")]),_:1})]),_:1}))}},Le=`<template>
  <SuiLabel circular color="red">2</SuiLabel>
  <SuiLabel circular color="orange">2</SuiLabel>
  <SuiLabel circular color="yellow">2</SuiLabel>
  <SuiLabel circular color="olive">2</SuiLabel>
  <SuiLabel circular color="green">2</SuiLabel>
  <SuiLabel circular color="teal">2</SuiLabel>
  <SuiLabel circular color="blue">2</SuiLabel>
  <SuiLabel circular color="violet">2</SuiLabel>
  <SuiLabel circular color="purple">2</SuiLabel>
  <SuiLabel circular color="pink">2</SuiLabel>
  <SuiLabel circular color="brown">2</SuiLabel>
  <SuiLabel circular color="grey">2</SuiLabel>
  <SuiLabel circular color="black">2</SuiLabel>
</template>`,fe={__name:"CircularDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Circular",code:Le},{description:e(()=>[i(" A label can be circular ")]),example:e(()=>[a(l(t),{circular:"",color:"red"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"orange"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"yellow"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"olive"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"green"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"teal"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"blue"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"violet"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"purple"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"pink"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"brown"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"grey"},{default:e(()=>[i("2")]),_:1}),a(l(t),{circular:"",color:"black"},{default:e(()=>[i("2")]),_:1})]),_:1}))}},he=b("img",{src:G},null,-1),ye=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,ve={__name:"BasicDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Basic",code:ye},{description:e(()=>[i(" A label can reduce its complexity ")]),example:e(()=>[a(l(t),{as:"a",basic:""},{default:e(()=>[i("Basic")]),_:1}),a(l(t),{as:"a",basic:"",pointing:""},{default:e(()=>[i("Pointing")]),_:1}),a(l(t),{as:"a",basic:"",image:""},{default:e(()=>[he,i(" Elliot ")]),_:1}),a(l(t),{as:"a",basic:"",pointing:"",color:"red"},{default:e(()=>[i("Red Pointing")]),_:1}),a(l(t),{as:"a",basic:"",color:"blue"},{default:e(()=>[i("Blue")]),_:1})]),_:1}))}},we=`<template>
  <SuiLabel as="a" primary>Primary</SuiLabel>
  <SuiLabel as="a" secondary>Secondary</SuiLabel>
  <SuiLabel as="a" color="red">Red</SuiLabel>
  <SuiLabel as="a" color="orange">Orange</SuiLabel>
  <SuiLabel as="a" color="yellow">Yellow</SuiLabel>
  <SuiLabel as="a" color="olive">Olive</SuiLabel>
  <SuiLabel as="a" color="green">Green</SuiLabel>
  <SuiLabel as="a" color="teal">Teal</SuiLabel>
  <SuiLabel as="a" color="blue">Blue</SuiLabel>
  <SuiLabel as="a" color="violet">Violet</SuiLabel>
  <SuiLabel as="a" color="purple">Purple</SuiLabel>
  <SuiLabel as="a" color="pink">Pink</SuiLabel>
  <SuiLabel as="a" color="brown">Brown</SuiLabel>
  <SuiLabel as="a" color="grey">Grey</SuiLabel>
  <SuiLabel as="a" color="black">Black</SuiLabel>
</template>`,Ge={__name:"ColoredDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Colored",code:we},{description:e(()=>[i(" A label can have different colors ")]),example:e(()=>[a(l(t),{as:"a",primary:""},{default:e(()=>[i("Primary")]),_:1}),a(l(t),{as:"a",secondary:""},{default:e(()=>[i("Secondary")]),_:1}),a(l(t),{as:"a",color:"red"},{default:e(()=>[i("Red")]),_:1}),a(l(t),{as:"a",color:"orange"},{default:e(()=>[i("Orange")]),_:1}),a(l(t),{as:"a",color:"yellow"},{default:e(()=>[i("Yellow")]),_:1}),a(l(t),{as:"a",color:"olive"},{default:e(()=>[i("Olive")]),_:1}),a(l(t),{as:"a",color:"green"},{default:e(()=>[i("Green")]),_:1}),a(l(t),{as:"a",color:"teal"},{default:e(()=>[i("Teal")]),_:1}),a(l(t),{as:"a",color:"blue"},{default:e(()=>[i("Blue")]),_:1}),a(l(t),{as:"a",color:"violet"},{default:e(()=>[i("Violet")]),_:1}),a(l(t),{as:"a",color:"purple"},{default:e(()=>[i("Purple")]),_:1}),a(l(t),{as:"a",color:"pink"},{default:e(()=>[i("Pink")]),_:1}),a(l(t),{as:"a",color:"brown"},{default:e(()=>[i("Brown")]),_:1}),a(l(t),{as:"a",color:"grey"},{default:e(()=>[i("Grey")]),_:1}),a(l(t),{as:"a",color:"black"},{default:e(()=>[i("Black")]),_:1})]),_:1}))}},xe=`<template>
  <SuiLabel as="a" basic tag primary>Primary</SuiLabel>
  <SuiLabel as="a" basic tag secondary>Secondary</SuiLabel>
  <SuiLabel as="a" basic tag color="red">Red</SuiLabel>
  <SuiLabel as="a" basic tag color="orange">Orange</SuiLabel>
  <SuiLabel as="a" basic tag color="yellow">Yellow</SuiLabel>
  <SuiLabel as="a" basic tag color="olive">Olive</SuiLabel>
  <SuiLabel as="a" basic tag color="green">Green</SuiLabel>
  <SuiLabel as="a" basic tag color="teal">Teal</SuiLabel>
  <SuiLabel as="a" basic tag color="blue">Blue</SuiLabel>
  <SuiLabel as="a" basic tag color="violet">Violet</SuiLabel>
  <SuiLabel as="a" basic tag color="purple">Purple</SuiLabel>
  <SuiLabel as="a" basic tag color="pink">Pink</SuiLabel>
  <SuiLabel as="a" basic tag color="brown">Brown</SuiLabel>
  <SuiLabel as="a" basic tag color="grey">Grey</SuiLabel>
  <SuiLabel as="a" basic tag color="black">Black</SuiLabel>
</template>`,$e={__name:"BasicTagDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Basic Tag",code:xe},{description:e(()=>[]),example:e(()=>[a(l(t),{as:"a",basic:"",tag:"",primary:""},{default:e(()=>[i("Primary")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",secondary:""},{default:e(()=>[i("Secondary")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"red"},{default:e(()=>[i("Red")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"orange"},{default:e(()=>[i("Orange")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"yellow"},{default:e(()=>[i("Yellow")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"olive"},{default:e(()=>[i("Olive")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"green"},{default:e(()=>[i("Green")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"teal"},{default:e(()=>[i("Teal")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"blue"},{default:e(()=>[i("Blue")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"violet"},{default:e(()=>[i("Violet")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"purple"},{default:e(()=>[i("Purple")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"pink"},{default:e(()=>[i("Pink")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"brown"},{default:e(()=>[i("Brown")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"grey"},{default:e(()=>[i("Grey")]),_:1}),a(l(t),{as:"a",basic:"",tag:"",color:"black"},{default:e(()=>[i("Black")]),_:1})]),_:1}))}},Ce=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,Ie={__name:"SizeDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Size",code:Ce},{description:e(()=>[i(" A label can be small or large ")]),example:e(()=>[a(l(t),{size:"mini"},{default:e(()=>[i("Mini")]),_:1}),a(l(t),{size:"tiny"},{default:e(()=>[i("Tiny")]),_:1}),a(l(t),{size:"small"},{default:e(()=>[i("Small")]),_:1}),a(l(t),null,{default:e(()=>[i("Medium")]),_:1}),a(l(t),{size:"large"},{default:e(()=>[i("Large")]),_:1}),a(l(t),{size:"big"},{default:e(()=>[i("Big")]),_:1}),a(l(t),{size:"huge"},{default:e(()=>[i("Huge")]),_:1}),a(l(t),{size:"massive"},{default:e(()=>[i("Massive")]),_:1})]),_:1}))}},De=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,ke={__name:"GroupSizeDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Group Size",code:De},{description:e(()=>[i(" Labels can share sizes together ")]),example:e(()=>[a(l(g),{size:"huge"},{default:e(()=>[a(l(t),null,{default:e(()=>[i("Fun")]),_:1}),a(l(t),null,{default:e(()=>[i("Happy")]),_:1}),a(l(t),null,{default:e(()=>[i("Smart")]),_:1}),a(l(t),null,{default:e(()=>[i("Witty")]),_:1})]),_:1})]),_:1}))}},Fe=`<template>
  <SuiLabelGroup color="blue">
    <SuiLabel>
      Fun
      <SuiIcon name="close" />
    </SuiLabel>
    <SuiLabel>
      Happy
      <SuiLabelDetail>Smart</SuiLabelDetail>
    </SuiLabel>
    <SuiLabel>Insane</SuiLabel>
    <SuiLabel>Exciting</SuiLabel>
  </SuiLabelGroup>
</template>`,ze={__name:"ColoredGroupDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Clored Group",code:Fe},{description:e(()=>[i(" Labels can share colors together ")]),example:e(()=>[a(l(g),{color:"blue"},{default:e(()=>[a(l(t),null,{default:e(()=>[i(" Fun "),a(l(m),{name:"close"})]),_:1}),a(l(t),null,{default:e(()=>[i(" Happy "),a(l(S),null,{default:e(()=>[i("Smart")]),_:1})]),_:1}),a(l(t),null,{default:e(()=>[i("Insane")]),_:1}),a(l(t),null,{default:e(()=>[i("Exciting")]),_:1})]),_:1})]),_:1}))}},Te=`<template>
  <SuiLabelGroup basic>
    <SuiLabel>
      Fun
      <SuiIcon name="close" />
    </SuiLabel>
    <SuiLabel>
      Happy
      <SuiLabelDetail>Smart</SuiLabelDetail>
    </SuiLabel>
    <SuiLabel>Insane</SuiLabel>
    <SuiLabel>Exciting</SuiLabel>
  </SuiLabelGroup>
</template>`,Be={__name:"BasicGroupDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Basic Group",code:Te},{description:e(()=>[i(" Labels can share their style together ")]),example:e(()=>[a(l(g),{basic:""},{default:e(()=>[a(l(t),null,{default:e(()=>[i(" Fun "),a(l(m),{name:"close"})]),_:1}),a(l(t),null,{default:e(()=>[i(" Happy "),a(l(S),null,{default:e(()=>[i("Smart")]),_:1})]),_:1}),a(l(t),null,{default:e(()=>[i("Insane")]),_:1}),a(l(t),null,{default:e(()=>[i("Exciting")]),_:1})]),_:1})]),_:1}))}},Pe=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Ae={__name:"TagGroupDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Tag Group",code:Pe},{description:e(()=>[i(" Labels can share tag formatting ")]),example:e(()=>[a(l(g),{tag:""},{default:e(()=>[a(l(t),{as:"a"},{default:e(()=>[i("$10.00")]),_:1}),a(l(t),{as:"a"},{default:e(()=>[i("$19.99")]),_:1}),a(l(t),{as:"a"},{default:e(()=>[i("$24.99")]),_:1}),a(l(t),{as:"a"},{default:e(()=>[i("$10.25")]),_:1})]),_:1})]),_:1}))}},Ve=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,Me={__name:"CircularGroupDoc",setup(c){return(o,n)=>(r(),u(s,{label:"Circular Group",code:Ve},{description:e(()=>[i(" Labels can share shapes ")]),example:e(()=>[a(l(g),{circular:""},{default:e(()=>[a(l(t),{as:"a"},{default:e(()=>[i("1")]),_:1}),a(l(t),{as:"a"},{default:e(()=>[i("3")]),_:1}),a(l(t),{as:"a"},{default:e(()=>[i("4")]),_:1}),a(l(t),{as:"a"},{default:e(()=>[i("14")]),_:1}),a(l(t),{as:"a"},{default:e(()=>[i("16")]),_:1}),a(l(t),{as:"a"},{default:e(()=>[i("34")]),_:1})]),_:1})]),_:1}))}},Ee={__name:"Label",setup(c){const o=[{id:"label",label:"Label",category:"Types",component:z},{id:"image",label:"Image",category:"Types",component:V},{id:"pointing",label:"Pointing",category:"Types",component:E},{id:"corner",label:"Corner",category:"Types",component:Y},{id:"tag",label:"Tag",category:"Types",component:q},{id:"ribbon",label:"Ribbon",category:"Types",component:Z},{id:"attached",label:"Attached",category:"Types",component:ae},{id:"horizontal",label:"Horizontal",category:"Types",component:ie},{id:"floating",label:"Floating",category:"Types",component:oe},{id:"inverted",label:"Inverted",category:"Types",component:ue},{id:"detail",label:"Detail",category:"Content",component:ne},{id:"icon",label:"Icon",category:"Content",component:de},{id:"link",label:"Link",category:"Content",component:pe},{id:"disabled",label:"Disabled",category:"States",component:_e},{id:"fluid",label:"Fluid",category:"Variations",component:ge},{id:"circular",label:"Circular",category:"Variations",component:fe},{id:"basic",label:"Basic",category:"Variations",component:ve},{id:"colored",label:"Colored",category:"Variations",component:Ge},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:$e},{id:"size",label:"Size",category:"Variations",component:Ie},{id:"group-size",label:"Group Size",category:"Groups",component:ke},{id:"colored-group",label:"Colored Group",category:"Groups",component:ze},{id:"basic-group",label:"Basic Group",category:"Groups",component:Be},{id:"tag-group",label:"Tag Group",category:"Groups",component:Ae},{id:"circular-group",label:"Circular Group",category:"Groups",component:Me}];return(n,Re)=>(r(),u(D,{title:"Label",description:"A label displays content classification","component-docs":o}))}};export{Ee as default};
