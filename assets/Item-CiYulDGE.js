import{e as u,o as m,c as p,w as e,a as i,b as t,u as a,at as c,au as r,d as n,ai as v,av as f,y,A as w,C,q as s,aw as l,t as b,N as I,K as x,O as $,U as k,Y as A,D}from"./index-DuTVbzB3.js";import{_}from"./DocSection-DD-a-yqL.js";const z=n("img",{src:v},null,-1),G=n("img",{src:f},null,-1),H=n("img",{src:v},null,-1),S=n("img",{src:f},null,-1),V=`<template>
  <ItemGroup>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        Header
      </template>
      <template #metadata>
        Description
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        Additional Details
      </template>
    </Item>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        Header
      </template>
      <template #metadata>
        Description
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        Additional Details
      </template>
    </Item>
  </ItemGroup>
</template>`,j=u({__name:"ItemsDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Items",code:V},{description:e(()=>[i(" A group of items. ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{image:e(()=>[z]),header:e(()=>[i(" Header ")]),metadata:e(()=>[i(" Description ")]),description:e(()=>[G]),extra:e(()=>[i(" Additional Details ")]),_:1}),t(a(r),null,{image:e(()=>[H]),header:e(()=>[i(" Header ")]),metadata:e(()=>[i(" Description ")]),description:e(()=>[S]),extra:e(()=>[i(" Additional Details ")]),_:1})]),_:1})]),_:1}))}}),M=n("img",{src:v},null,-1),B=`<template>
  <ItemGroup divided>
    <Item v-for="i in [1,2,3]">
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
    </Item>
  </ItemGroup>
</template>`,N=u({__name:"ImageDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Image",code:B},{description:e(()=>[i(" An item can contain an image ")]),example:e(()=>[t(a(c),{divided:""},{default:e(()=>[(m(),y(w,null,C([1,2,3],h=>t(a(r),null,{image:e(()=>[M]),_:1})),64))]),_:1})]),_:1}))}}),Y=`<template>
  <ItemGroup divided>
    <Item v-for="v in ['A','B','C']">
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        Content {{ v }}
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,F=u({__name:"ContentDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Content",code:Y},{description:e(()=>[i(" An item can contain content ")]),example:e(()=>[t(a(c),{divided:""},{default:e(()=>[(m(),y(w,null,C(["A","B","C"],h=>t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{default:e(()=>[i(" Content "+b(h),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}}),O=`<template>
  <ItemGroup>
    <Item v-for="text in ['12 Years a Slave', 'My Neighbor Totoro', 'Watchmen']">
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        <template #header>
          {{ text }}
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,L=u({__name:"HeaderDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Header",code:O},{description:e(()=>[i(" An item can contain a header ")]),example:e(()=>[t(a(c),null,{default:e(()=>[(m(),y(w,null,C(["12 Years a Slave","My Neighbor Totoro","Watchmen"],h=>t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[i(b(h),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}}),T=n("span",{class:"price"},"$1200",-1),W=n("span",{class:"stay"},"1 Month",-1),J=n("img",{src:f},null,-1),R=`<template>
  <ItemGroup>
    <Item>
      <Image wrapped size="small" src="/vue-fomantic-ui/wireframe/image.png" />
      <ItemContent>
        <template #header>
          Arrowhead Valley Camp
        </template>
        <template #metadata>
          <span class="price">$1200</span>
          <span class="stay">1 Month</span>
        </template>
        <template #description>
          <img src="/images/wireframe/short-paragraph.png">
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,U=u({__name:"MetadataDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Metadata",code:R},{description:e(()=>[i(" An item can contain content metadata ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),null,{header:e(()=>[i(" Arrowhead Valley Camp ")]),metadata:e(()=>[T,W]),description:e(()=>[J]),_:1})]),_:1})]),_:1})]),_:1}))}}),q=n("p",null,[i("Stevie Feliciano is a "),n("a",null,"library scientist"),i(" living in New York City. She likes to spend her time reading, running, and writing.")],-1),E=n("p",null,[i("Veronika Ossi is a set designer living in New York who "),n("a",null,"enjoys"),i(" kittens, music, and partying.")],-1),K=n("p",null,[i("Jenny is a student studying Media Management at "),n("a",null,"the New School"),i(".")],-1),X=`<template>
  <ItemGroup>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/stevie.jpg" />
      <ItemContent>
        <Header as="a">Stevie Feliciano</Header>
        <template #description>
          <p>Stevie Feliciano is a <a>library scientist</a> living in New York City. She likes to spend her time reading, running, and writing.</p>
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/veronika.jpg" />
      <ItemContent>
        <Header as="a">Veronika Ossi</Header>
        <template #description>
          <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/jenny.jpg" />
      <ItemContent>
        <Header as="a">Jenny Hess</Header>
        <template #description>
          <p>Jenny is a student studying Media Management at <a>the New School</a>.</p>
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,P=u({__name:"LinkDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Link",code:X},{description:e(()=>[i(" An item can contain links as images, headers, or inside content ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"}),t(a(l),null,{description:e(()=>[q]),default:e(()=>[t(a(I),{as:"a"},{default:e(()=>[i("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/veronika.jpg"}),t(a(l),null,{description:e(()=>[E]),default:e(()=>[t(a(I),{as:"a"},{default:e(()=>[i("Veronika Ossi")]),_:1})]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/jenny.jpg"}),t(a(l),null,{description:e(()=>[K]),default:e(()=>[t(a(I),{as:"a"},{default:e(()=>[i("Jenny Hess")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Q=n("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),Z=n("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),ee=`<template>
  <ItemGroup>
    <Item>
      <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent>
        <template #header>
          Cute Dog
        </template>
        <template #description>
          <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
          <p>Many people also have their own barometers for what makes a cute dog.</p>
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,te=u({__name:"DescriptionDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Description",code:ee},{description:e(()=>[i(" An item can contain a description with a single or multiple paragraphs ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),null,{description:e(()=>[Q,Z]),default:e(()=>[t(a(I),{as:"a"},{default:e(()=>[i("Cute Dog")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),ae=n("img",{src:f},null,-1),ie=n("i",{class:"green check icon"},null,-1),ne=`<template>
  <ItemGroup>
    <Item>
      <template #header>
        Cute Dog
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        <i class="green check icon"></i>
        121 Votes
      </template>
    </Item>
  </ItemGroup>
</template>`,re=u({__name:"ExtraContentDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Extra Content",code:ne},{description:e(()=>[i(" An item can contain extra content meant to be formatted separately from the main content ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{header:e(()=>[i(" Cute Dog ")]),description:e(()=>[ae]),extra:e(()=>[ie,i(" 121 Votes ")]),_:1})]),_:1})]),_:1}))}}),me=`<template>
  <ItemGroup>
    <Item>
      <Image wrapped size="tiny" src="/vue-fomantic-ui/images/avatar/large/jenny.jpg" />
      <ItemContent verticalAlign="middle">
        <template #header>
          <Icon name="like" />
          Veronika Ossi
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image wrapped size="tiny" src="/vue-fomantic-ui/images/avatar/large/justen.jpg" />
      <ItemContent verticalAlign="middle">
        <template #header>
          <Icon name="favorite" />
          Justen Kitsune
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,se=u({__name:"RatingDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Rating",code:me},{description:e(()=>[i(" An item can contain icons signifying a 'like' or 'favorite' action ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/jenny.jpg"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[t(a(x),{name:"like"}),i(" Veronika Ossi ")]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/justen.jpg"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[t(a(x),{name:"favorite"}),i(" Justen Kitsune ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),le=n("p",null,[i("Veronika Ossi is a set designer living in New York who "),n("a",null,"enjoys"),i(" kittens, music, and partying.")],-1),oe=`<template>
  <ItemGroup>
    <Item disabled>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/veronika.jpg" />
      <ItemContent>
        <Header as="a">Veronika Ossi</Header>
        <template #description>
          <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,ce=u({__name:"DisabledDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Disabled",code:oe},{description:e(()=>[i(" An item can be disabled ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),{disabled:""},{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/veronika.jpg"}),t(a(l),null,{description:e(()=>[le]),default:e(()=>[t(a(I),{as:"a"},{default:e(()=>[i("Veronika Ossi")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),pe=n("img",{src:v},null,-1),de=n("img",{src:f},null,-1),ge=n("img",{src:v},null,-1),ue=n("img",{src:f},null,-1),_e=`<template>
  <ItemGroup unstackable>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        Header
      </template>
      <template #metadata>
        Description
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        Additional Details
      </template>
    </Item>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        Header
      </template>
      <template #metadata>
        Description
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        Additional Details
      </template>
    </Item>
  </ItemGroup>
</template>`,fe=u({__name:"StackingDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Stacking",code:_e},{description:e(()=>[i(" A table can specify how it stacks items responsively ")]),example:e(()=>[t(a(c),{unstackable:""},{default:e(()=>[t(a(r),null,{image:e(()=>[pe]),header:e(()=>[i(" Header ")]),metadata:e(()=>[i(" Description ")]),description:e(()=>[de]),extra:e(()=>[i(" Additional Details ")]),_:1}),t(a(r),null,{image:e(()=>[ge]),header:e(()=>[i(" Header ")]),metadata:e(()=>[i(" Description ")]),description:e(()=>[ue]),extra:e(()=>[i(" Additional Details ")]),_:1})]),_:1})]),_:1}))}}),he=n("img",{src:v},null,-1),Ie=n("span",{class:"cinema"},"Union Square 14",-1),ve=n("img",{src:f},null,-1),ye=n("div",{class:"ui label"},"IMAX",-1),we=n("div",{class:"ui label"},[n("i",{class:"globe icon"}),i(" Additional Languages")],-1),Ce=n("img",{src:v},null,-1),be=n("span",{class:"cinema"},"IFC Cinema",-1),xe=n("img",{src:f},null,-1),$e=n("img",{src:v},null,-1),ke=n("span",{class:"cinema"},"IFC",-1),Ae=n("img",{src:f},null,-1),De=`<template>
  <ItemGroup divided>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        12 Years a Slave
      </template>
      <template #metadata>
        <span class="cinema">Union Square 14</span>
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        <div class="ui label">IMAX</div>
        <div class="ui label"><i class="globe icon"></i> Additional Languages</div>
      </template>
    </Item>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        My Neighbor Totoro
      </template>
      <template #metadata>
        <span class="cinema">IFC Cinema</span>
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        <Button primary floated="right">
          Buy tickets
          <Icon name="right chevron" />
        </Button>
        <Label>Limited</Label>
      </template>
    </Item>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        Watchmen
      </template>
      <template #metadata>
        <span class="cinema">IFC</span>
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        <Button primary floated="right">
          Buy tickets
          <Icon name="right chevron" />
        </Button>
      </template>
    </Item>
  </ItemGroup>
</template>`,ze=u({__name:"DividedDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Divided",code:De},{description:e(()=>[i(" Items can be divided to better distinguish between grouped content ")]),example:e(()=>[t(a(c),{divided:""},{default:e(()=>[t(a(r),null,{image:e(()=>[he]),header:e(()=>[i(" 12 Years a Slave ")]),metadata:e(()=>[Ie]),description:e(()=>[ve]),extra:e(()=>[ye,we]),_:1}),t(a(r),null,{image:e(()=>[Ce]),header:e(()=>[i(" My Neighbor Totoro ")]),metadata:e(()=>[be]),description:e(()=>[xe]),extra:e(()=>[t(a($),{primary:"",floated:"right"},{default:e(()=>[i(" Buy tickets "),t(a(x),{name:"right chevron"})]),_:1}),t(a(k),null,{default:e(()=>[i("Limited")]),_:1})]),_:1}),t(a(r),null,{image:e(()=>[$e]),header:e(()=>[i(" Watchmen ")]),metadata:e(()=>[ke]),description:e(()=>[Ae]),extra:e(()=>[t(a($),{primary:"",floated:"right"},{default:e(()=>[i(" Buy tickets "),t(a(x),{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ge=`<template>
  <ItemGroup relaxed>
    <Item v-for="text in ['12 Years a Slave', 'My Neighbor Totoro', 'Watchmen']">
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        <template #header>
          {{ text }}
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
  <ItemGroup relaxed="very">
    <Item v-for="text in ['12 Years a Slave', 'My Neighbor Totoro', 'Watchmen']">
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        <template #header>
          {{ text }}
        </template>
      </ItemContent>
    </Item>
</template>`,He=u({__name:"RelaxedDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Relaxed",code:Ge},{description:e(()=>[i(" A group of items can relax its padding to provide more negative space ")]),example:e(()=>[t(a(c),{relaxed:""},{default:e(()=>[(m(),y(w,null,C(["12 Years a Slave","My Neighbor Totoro","Watchmen"],h=>t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[i(b(h),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),t(a(c),{relaxed:"very"},{default:e(()=>[(m(),y(w,null,C(["12 Years a Slave","My Neighbor Totoro","Watchmen"],h=>t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[i(b(h),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}}),Se=n("img",{src:f},null,-1),Ve=n("img",{src:f},null,-1),je=n("img",{src:f},null,-1),Me=`<template>
  <ItemGroup link>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/stevie.jpg" />
      <ItemContent>
        <Header as="a">Stevie Feliciano</Header>
        <template #description>
          <img src="/images/wireframe/short-paragraph.png">
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/veronika.jpg" />
      <ItemContent>
        <Header as="a">Veronika Ossi</Header>
        <template #description>
          <img src="/images/wireframe/short-paragraph.png">
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/jenny.jpg" />
      <ItemContent>
        <Header as="a">Jenny Hess</Header>
        <template #description>
          <img src="/images/wireframe/short-paragraph.png">
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,Be=u({__name:"LinkItemDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Link Item",code:Me},{description:e(()=>[i(" An item can be formatted so that the entire contents link to another page ")]),example:e(()=>[t(a(c),{link:""},{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"}),t(a(l),null,{description:e(()=>[Se]),default:e(()=>[t(a(I),{as:"a"},{default:e(()=>[i("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/veronika.jpg"}),t(a(l),null,{description:e(()=>[Ve]),default:e(()=>[t(a(I),{as:"a"},{default:e(()=>[i("Veronika Ossi")]),_:1})]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/jenny.jpg"}),t(a(l),null,{description:e(()=>[je]),default:e(()=>[t(a(I),{as:"a"},{default:e(()=>[i("Jenny Hess")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ne=`<template>
  <ItemGroup>
    <Item>
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent>
        <template #header>
          Top Aligned
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        <template #header>
          Middle Aligned
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="bottom">
        <template #header>
          Bottom Aligned
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,Ye=u({__name:"VerticalAlignmentDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Vertical Alignment",code:Ne},{description:e(()=>[i(" Content can specify its vertical alignment ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),null,{header:e(()=>[i(" Top Aligned ")]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[i(" Middle Aligned ")]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"bottom"},{header:e(()=>[i(" Bottom Aligned ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),Fe=n("img",{src:f},null,-1),Oe=`<template>
  <ItemGroup>
    <Item v-for="text in ['A', 'B', 'C']">
      <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        <template #header>
          Content {{ text }}
        </template>
        <template #description>
          <img src="/images/wireframe/short-paragraph.png">
        </template>
        <template #extra>
          <Button floated="right">Action</Button>
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,Le=u({__name:"FloatedContentDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Floated Content",code:Oe},{description:e(()=>[i(" Any content element can be floated left or right ")]),example:e(()=>[t(a(c),null,{default:e(()=>[(m(),y(w,null,C(["A","B","C"],h=>t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[i(" Content "+b(h),1)]),description:e(()=>[Fe]),extra:e(()=>[t(a($),{floated:"right"},{default:e(()=>[i("Action")]),_:1})]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}}),Te=n("span",{class:"price"},"$1200",-1),We=n("span",{class:"stay"},"1 Month",-1),Je=n("img",{src:f},null,-1),Re=n("span",{class:"price"},"$1000",-1),Ue=n("span",{class:"stay"},"2 Week",-1),qe=n("img",{src:f},null,-1),Ee=`<template>
  <Segment inverted>
    <ItemGroup inverted>
      <Item>
        <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
        <ItemContent>
          <template #header>
            Arrowhead Valley Camp
          </template>
          <template #metadata>
            <span class="price">$1200</span>
            <span class="stay">1 Month</span>
          </template>
          <template #description>
            <img src="/images/wireframe/short-paragraph.png">
          </template>
        </ItemContent>
      </Item>
      <Item>
        <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
        <ItemContent>
          <template #header>
            Buck's Homebrew Stayaway
          </template>
          <template #metadata>
            <span class="price">$1000</span>
            <span class="stay">2 Week</span>
          </template>
          <template #description>
            <img src="/images/wireframe/short-paragraph.png">
          </template>
        </ItemContent>
      </Item>
    </ItemGroup>
  </Segment>
</template>`,Ke=u({__name:"InvertedDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Inverted",code:Ee},{description:e(()=>[i(" An item can be inverted to appear on a dark background ")]),example:e(()=>[t(a(A),{inverted:""},{default:e(()=>[t(a(c),{inverted:""},{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),null,{header:e(()=>[i(" Arrowhead Valley Camp ")]),metadata:e(()=>[Te,We]),description:e(()=>[Je]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),null,{header:e(()=>[i(" Buck's Homebrew Stayaway ")]),metadata:e(()=>[Re,Ue]),description:e(()=>[qe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Qe={__name:"Item",setup(d){const o=[{id:"item",label:"Item",category:"Types",component:j},{id:"image",label:"Image",category:"Content",component:N},{id:"content",label:"Content",category:"Content",component:F},{id:"header",label:"Header",category:"Content",component:L},{id:"metadata",label:"Metadata",category:"Content",component:U},{id:"link",label:"Link",category:"Content",component:P},{id:"description",label:"Description",category:"Content",component:te},{id:"extra-content",label:"Extra Content",category:"Content",component:re},{id:"rating",label:"Rating",category:"Content",component:se},{id:"disabled",label:"Disabled",category:"States",component:ce},{id:"stacking",label:"Stacking",category:"Variations",component:fe},{id:"divided",label:"Divided",category:"Variations",component:ze},{id:"relaxed",label:"Relaxed",category:"Variations",component:He},{id:"link-item",label:"Link Item",category:"Variations",component:Be},{id:"vertical-alignment",label:"Vertical Alignment",category:"Variations",component:Ye},{id:"floated-content",label:"Floated Content",category:"Variations",component:Le},{id:"inverted",label:"Inverted",category:"Variations",component:Ke}];return(g,h)=>(m(),p(D,{title:"Item",description:"An item view presents large collections of site content for display","component-docs":o}))}};export{Qe as default};
