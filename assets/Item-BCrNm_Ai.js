import{F as u,o as m,c as p,w as e,a as i,b as t,u as a,av as c,aw as r,f as n,ak as I,ax as f,H as y,I as w,K as C,V as s,ay as l,t as x,g as v,J as b,d as $,j as A,x as k,D}from"./index-BienhS53.js";import{_}from"./DocSection-BCb0rW96.js";const z=n("img",{src:I},null,-1),G=n("img",{src:f},null,-1),H=n("img",{src:I},null,-1),S=n("img",{src:f},null,-1),V=`<template>
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
</template>`,j=u({__name:"ItemsDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Items",code:V},{description:e(()=>[i(" A group of items. ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{image:e(()=>[z]),header:e(()=>[i(" Header ")]),metadata:e(()=>[i(" Description ")]),description:e(()=>[G]),extra:e(()=>[i(" Additional Details ")]),_:1}),t(a(r),null,{image:e(()=>[H]),header:e(()=>[i(" Header ")]),metadata:e(()=>[i(" Description ")]),description:e(()=>[S]),extra:e(()=>[i(" Additional Details ")]),_:1})]),_:1})]),_:1}))}}),M=n("img",{src:I},null,-1),B=`<template>
  <ItemGroup divided>
    <Item v-for="i in [1,2,3]">
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
    </Item>
  </ItemGroup>
</template>`,N=u({__name:"ImageDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Image",code:B},{description:e(()=>[i(" An item can contain an image ")]),example:e(()=>[t(a(c),{divided:""},{default:e(()=>[(m(),y(w,null,C([1,2,3],h=>t(a(r),null,{image:e(()=>[M]),_:1})),64))]),_:1})]),_:1}))}}),F=`<template>
  <ItemGroup divided>
    <Item v-for="v in ['A','B','C']">
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        Content {{ v }}
      </ItemContent>
    </Item>
  </ItemGroup>
</template>`,L=u({__name:"ContentDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Content",code:F},{description:e(()=>[i(" An item can contain content ")]),example:e(()=>[t(a(c),{divided:""},{default:e(()=>[(m(),y(w,null,C(["A","B","C"],h=>t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{default:e(()=>[i(" Content "+x(h),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}}),T=`<template>
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
</template>`,Y=u({__name:"HeaderDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Header",code:T},{description:e(()=>[i(" An item can contain a header ")]),example:e(()=>[t(a(c),null,{default:e(()=>[(m(),y(w,null,C(["12 Years a Slave","My Neighbor Totoro","Watchmen"],h=>t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[i(x(h),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}}),W=n("span",{class:"price"},"$1200",-1),J=n("span",{class:"stay"},"1 Month",-1),O=n("img",{src:f},null,-1),R=`<template>
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
</template>`,E=u({__name:"MetadataDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Metadata",code:R},{description:e(()=>[i(" An item can contain content metadata ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),null,{header:e(()=>[i(" Arrowhead Valley Camp ")]),metadata:e(()=>[W,J]),description:e(()=>[O]),_:1})]),_:1})]),_:1})]),_:1}))}}),K=n("p",null,[i("Stevie Feliciano is a "),n("a",null,"library scientist"),i(" living in New York City. She likes to spend her time reading, running, and writing.")],-1),q=n("p",null,[i("Veronika Ossi is a set designer living in New York who "),n("a",null,"enjoys"),i(" kittens, music, and partying.")],-1),U=n("p",null,[i("Jenny is a student studying Media Management at "),n("a",null,"the New School"),i(".")],-1),X=`<template>
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
</template>`,P=u({__name:"LinkDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Link",code:X},{description:e(()=>[i(" An item can contain links as images, headers, or inside content ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"}),t(a(l),null,{description:e(()=>[K]),default:e(()=>[t(a(v),{as:"a"},{default:e(()=>[i("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/veronika.jpg"}),t(a(l),null,{description:e(()=>[q]),default:e(()=>[t(a(v),{as:"a"},{default:e(()=>[i("Veronika Ossi")]),_:1})]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/jenny.jpg"}),t(a(l),null,{description:e(()=>[U]),default:e(()=>[t(a(v),{as:"a"},{default:e(()=>[i("Jenny Hess")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Q=n("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),Z=n("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),ee=`<template>
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
</template>`,te=u({__name:"DescriptionDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Description",code:ee},{description:e(()=>[i(" An item can contain a description with a single or multiple paragraphs ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),null,{description:e(()=>[Q,Z]),default:e(()=>[t(a(v),{as:"a"},{default:e(()=>[i("Cute Dog")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),ae=n("img",{src:f},null,-1),ie=n("i",{class:"green check icon"},null,-1),ne=`<template>
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
</template>`,se=u({__name:"RatingDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Rating",code:me},{description:e(()=>[i(" An item can contain icons signifying a 'like' or 'favorite' action ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/jenny.jpg"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[t(a(b),{name:"like"}),i(" Veronika Ossi ")]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/justen.jpg"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[t(a(b),{name:"favorite"}),i(" Justen Kitsune ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),le=n("img",{src:I},null,-1),oe=n("img",{src:f},null,-1),ce=n("img",{src:I},null,-1),pe=n("img",{src:f},null,-1),de=`<template>
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
</template>`,ge=u({__name:"StackingDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Stacking",code:de},{description:e(()=>[i(" A table can specify how it stacks items responsively ")]),example:e(()=>[t(a(c),{unstackable:""},{default:e(()=>[t(a(r),null,{image:e(()=>[le]),header:e(()=>[i(" Header ")]),metadata:e(()=>[i(" Description ")]),description:e(()=>[oe]),extra:e(()=>[i(" Additional Details ")]),_:1}),t(a(r),null,{image:e(()=>[ce]),header:e(()=>[i(" Header ")]),metadata:e(()=>[i(" Description ")]),description:e(()=>[pe]),extra:e(()=>[i(" Additional Details ")]),_:1})]),_:1})]),_:1}))}}),ue=n("img",{src:I},null,-1),_e=n("span",{class:"cinema"},"Union Square 14",-1),fe=n("img",{src:f},null,-1),he=n("div",{class:"ui label"},"IMAX",-1),Ie=n("div",{class:"ui label"},[n("i",{class:"globe icon"}),i(" Additional Languages")],-1),ve=n("img",{src:I},null,-1),ye=n("span",{class:"cinema"},"IFC Cinema",-1),we=n("img",{src:f},null,-1),Ce=n("img",{src:I},null,-1),xe=n("span",{class:"cinema"},"IFC",-1),be=n("img",{src:f},null,-1),$e=`<template>
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
</template>`,Ae=u({__name:"DividedDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Divided",code:$e},{description:e(()=>[i(" Items can be divided to better distinguish between grouped content ")]),example:e(()=>[t(a(c),{divided:""},{default:e(()=>[t(a(r),null,{image:e(()=>[ue]),header:e(()=>[i(" 12 Years a Slave ")]),metadata:e(()=>[_e]),description:e(()=>[fe]),extra:e(()=>[he,Ie]),_:1}),t(a(r),null,{image:e(()=>[ve]),header:e(()=>[i(" My Neighbor Totoro ")]),metadata:e(()=>[ye]),description:e(()=>[we]),extra:e(()=>[t(a($),{primary:"",floated:"right"},{default:e(()=>[i(" Buy tickets "),t(a(b),{name:"right chevron"})]),_:1}),t(a(A),null,{default:e(()=>[i("Limited")]),_:1})]),_:1}),t(a(r),null,{image:e(()=>[Ce]),header:e(()=>[i(" Watchmen ")]),metadata:e(()=>[xe]),description:e(()=>[be]),extra:e(()=>[t(a($),{primary:"",floated:"right"},{default:e(()=>[i(" Buy tickets "),t(a(b),{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1}))}}),ke=`<template>
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
</template>`,De=u({__name:"RelaxedDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Relaxed",code:ke},{description:e(()=>[i(" A group of items can relax its padding to provide more negative space ")]),example:e(()=>[t(a(c),{relaxed:""},{default:e(()=>[(m(),y(w,null,C(["12 Years a Slave","My Neighbor Totoro","Watchmen"],h=>t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[i(x(h),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),t(a(c),{relaxed:"very"},{default:e(()=>[(m(),y(w,null,C(["12 Years a Slave","My Neighbor Totoro","Watchmen"],h=>t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[i(x(h),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}}),ze=n("img",{src:f},null,-1),Ge=n("img",{src:f},null,-1),He=n("img",{src:f},null,-1),Se=`<template>
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
</template>`,Ve=u({__name:"LinkItemDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Link Item",code:Se},{description:e(()=>[i(" An item can be formatted so that the entire contents link to another page ")]),example:e(()=>[t(a(c),{link:""},{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"}),t(a(l),null,{description:e(()=>[ze]),default:e(()=>[t(a(v),{as:"a"},{default:e(()=>[i("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/veronika.jpg"}),t(a(l),null,{description:e(()=>[Ge]),default:e(()=>[t(a(v),{as:"a"},{default:e(()=>[i("Veronika Ossi")]),_:1})]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{as:"a",size:"tiny",src:"/vue-fomantic-ui/images/avatar/large/jenny.jpg"}),t(a(l),null,{description:e(()=>[He]),default:e(()=>[t(a(v),{as:"a"},{default:e(()=>[i("Jenny Hess")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),je=`<template>
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
</template>`,Me=u({__name:"VerticalAlignmentDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Vertical Alignment",code:je},{description:e(()=>[i(" Content can specify its vertical alignment ")]),example:e(()=>[t(a(c),null,{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),null,{header:e(()=>[i(" Top Aligned ")]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[i(" Middle Aligned ")]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"bottom"},{header:e(()=>[i(" Bottom Aligned ")]),_:1})]),_:1})]),_:1})]),_:1}))}}),Be=n("img",{src:f},null,-1),Ne=`<template>
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
</template>`,Fe=u({__name:"FloatedContentDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Floated Content",code:Ne},{description:e(()=>[i(" Any content element can be floated left or right ")]),example:e(()=>[t(a(c),null,{default:e(()=>[(m(),y(w,null,C(["A","B","C"],h=>t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),{verticalAlign:"middle"},{header:e(()=>[i(" Content "+x(h),1)]),description:e(()=>[Be]),extra:e(()=>[t(a($),{floated:"right"},{default:e(()=>[i("Action")]),_:1})]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}}),Le=n("span",{class:"price"},"$1200",-1),Te=n("span",{class:"stay"},"1 Month",-1),Ye=n("img",{src:f},null,-1),We=n("span",{class:"price"},"$1000",-1),Je=n("span",{class:"stay"},"2 Week",-1),Oe=n("img",{src:f},null,-1),Re=`<template>
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
</template>`,Ee=u({__name:"InvertedDoc",setup(d){return(o,g)=>(m(),p(_,{label:"Inverted",code:Re},{description:e(()=>[i(" An item can be inverted to appear on a dark background ")]),example:e(()=>[t(a(k),{inverted:""},{default:e(()=>[t(a(c),{inverted:""},{default:e(()=>[t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),null,{header:e(()=>[i(" Arrowhead Valley Camp ")]),metadata:e(()=>[Le,Te]),description:e(()=>[Ye]),_:1})]),_:1}),t(a(r),null,{default:e(()=>[t(a(s),{wrapped:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(a(l),null,{header:e(()=>[i(" Buck's Homebrew Stayaway ")]),metadata:e(()=>[We,Je]),description:e(()=>[Oe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ue={__name:"Item",setup(d){const o=[{id:"item",label:"Item",category:"Types",component:j},{id:"image",label:"Image",category:"Content",component:N},{id:"content",label:"Content",category:"Content",component:L},{id:"header",label:"Header",category:"Content",component:Y},{id:"metadata",label:"Metadata",category:"Content",component:E},{id:"link",label:"Link",category:"Content",component:P},{id:"description",label:"Description",category:"Content",component:te},{id:"extra-content",label:"Extra Content",category:"Content",component:re},{id:"rating",label:"Rating",category:"Content",component:se},{id:"stacking",label:"Stacking",category:"Variations",component:ge},{id:"divided",label:"Divided",category:"Variations",component:Ae},{id:"relaxed",label:"Relaxed",category:"Variations",component:De},{id:"link-item",label:"Link Item",category:"Variations",component:Ve},{id:"vertical-alignment",label:"Vertical Alignment",category:"Variations",component:Me},{id:"floated-content",label:"Floated Content",category:"Variations",component:Fe},{id:"inverted",label:"Inverted",category:"Variations",component:Ee}];return(g,h)=>(m(),p(D,{title:"Item",description:"An item view presents large collections of site content for display","component-docs":o}))}};export{Ue as default};
