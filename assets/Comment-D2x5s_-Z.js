import{o as p,c as i,w as t,a,b as l,u as s,ap as m,aq as o,d as e,ar as h,_ as d,as as g,e as v,Y as C,D as $}from"./index-CCvpN2u5.js";import{_ as y}from"./jenny-C8JmaaC7.js";import{_}from"./joe-CWv6CXVt.js";import{_ as u}from"./DocSection-CXw2CXfC.js";const f=e("img",{src:h},null,-1),x=e("span",null,"Today at 5:42PM",-1),w=e("a",null,"Reply",-1),R=e("img",{src:d},null,-1),T=e("span",null,"Yesterday at 12:30AM",-1),b=e("a",null,"Reply",-1),j=e("img",{src:y},null,-1),M=e("span",null,"Just now",-1),H=e("a",null,"Reply",-1),G=e("img",{src:_},null,-1),k=e("span",null,"5 days ago",-1),J=e("a",null,"Reply",-1),A=`<template>
  <CommentGroup>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/matt.jpg" />
      </template>
      <template #author>
        Matt
      </template>
      <template #metadata>
        <span>Today at 5:42PM</span>
      </template>
      <template #text>
        How artistic!
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
    </Comment>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/elliot.jpg" />
      </template>
      <template #author>
        Elliot Fu
      </template>
      <template #metadata>
        <span>Yesterday at 12:30AM</span>
      </template>
      <template #text>
        This has been very useful for my research. Thanks as well!
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/jenny.jpg" />
          </template>
          <template #author>
            Jenny Hess
          </template>
          <template #metadata>
            <span>Just now</span>
          </template>
          <template #text>
            Elliot you are always so right :)
          </template>
          <template #actions>
            <a>Reply</a>
          </template>
        </Comment>
      </CommentGroup>
    </Comment>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/joe.jpg" />
      </template>
      <template #author>
        Joe Henderson
      </template>
      <template #metadata>
        <span>5 days ago</span>
      </template>
      <template #text>
        Dude, this is awesome. Thanks so much
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
    </Comment>
  </CommentGroup>
</template>`,D={__name:"CommentsDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Comments",code:A},{description:t(()=>[a(" A basic list of comments ")]),example:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[f]),author:t(()=>[a(" Matt ")]),metadata:t(()=>[x]),text:t(()=>[a(" How artistic! ")]),actions:t(()=>[w]),_:1}),l(s(o),null,{avatar:t(()=>[R]),author:t(()=>[a(" Elliot Fu ")]),metadata:t(()=>[T]),text:t(()=>[a(" This has been very useful for my research. Thanks as well! ")]),actions:t(()=>[b]),default:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[j]),author:t(()=>[a(" Jenny Hess ")]),metadata:t(()=>[M]),text:t(()=>[a(" Elliot you are always so right :) ")]),actions:t(()=>[H]),_:1})]),_:1})]),_:1}),l(s(o),null,{avatar:t(()=>[G]),author:t(()=>[a(" Joe Henderson ")]),metadata:t(()=>[k]),text:t(()=>[a(" Dude, this is awesome. Thanks so much ")]),actions:t(()=>[J]),_:1})]),_:1})]),_:1}))}},E=e("img",{src:d},null,-1),F=`<template>
  <CommentGroup>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/elliot.jpg" />
      </template>
      <template #author>
        Elliot Fu
      </template>
    </Comment>
  </CommentGroup>
</template>`,P={__name:"AvatarDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Avatar",code:F},{description:t(()=>[a(" A comment can contain an image or avatar ")]),example:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[E]),author:t(()=>[a(" Elliot Fu ")]),_:1})]),_:1})]),_:1}))}},Y=e("img",{src:g},null,-1),I=e("div",{class:"date"},"2 days ago",-1),S=e("div",null,[e("i",{class:"star icon"}),a(" 5 Faves ")],-1),V=`<template>
  <CommentGroup>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/stevie.jpg" />
      </template>
      <template #author>
        Stevie Feliciano
      </template>
      <template #metadata>
        <div class="date">2 days ago</div>
        <div>
          <i class="star icon"></i>
          5 Faves
        </div>
      </template>
      <template #text>
        Hey guys, I hope this example comment is helping you read this documentation.
      </template>
    </Comment>
  </CommentGroup>
</template>`,z={__name:"MetadataDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Metadata",code:V},{description:t(()=>[a(" A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined. ")]),example:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[Y]),author:t(()=>[a(" Stevie Feliciano ")]),metadata:t(()=>[I,S]),text:t(()=>[a(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1}))}},N=e("img",{src:_},null,-1),B=e("a",{class:"reply"},"Reply",-1),L=e("a",{class:"save"},"Save",-1),U=e("a",{class:"hide"},"Hide",-1),q=e("a",null,[e("i",{class:"expand icon"}),a(" Full-screen ")],-1),K=`<template>
  <CommentGroup>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/stevie.jpg" />
      </template>
      <template #author>
        Stevie Feliciano
      </template>
      <template #metadata>
        <div class="date">2 days ago</div>
        <div>
          <i class="star icon"></i>
          5 Faves
        </div>
      </template>
      <template #text>
        Hey guys, I hope this example comment is helping you read this documentation.
      </template>
    </Comment>
  </CommentGroup>
</template>`,O={__name:"ActionsDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Actions",code:K},{description:t(()=>[a(" A comment can contain an list of actions a user may perform related to this comment. ")]),example:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[N]),author:t(()=>[a(" Tom Lukic ")]),text:t(()=>[a(" This will be great for business reports. I will definitely download this. ")]),actions:t(()=>[B,L,U,q]),_:1})]),_:1})]),_:1}))}},Q="/vue-fomantic-ui/images/avatar/small/christian.jpg",W=e("img",{src:Q},null,-1),X=e("a",{class:"reply"},"Reply",-1),Z=e("img",{src:d},null,-1),tt=e("a",{class:"reply"},"Reply",-1),et=`<template>
  <CommentGroup>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/christian.jpg">
      </template>
      <template #author>Christian Rocha</template>
      <template #metadata>2 days ago</template>
      <template #text>
        I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
      </template>
      <template #actions>
        <a class="reply">Reply</a>
      </template>
      <CommentGroup collapsed>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/elliot.jpg">
          </template>
          <template #author>Elliot Fu</template>
          <template #metadata>1 days ago</template>
          <template #text>
            No, it wont
          </template>
          <template #actions>
            <a class="reply">Reply</a>
          </template>
        </Comment>
      </CommentGroup>
    </Comment>
  </CommentGroup>
</template>`,at={__name:"CollapsedDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Collapsed",code:et},{description:t(()=>[a(" Comments can be collapsed, or hidden from view ")]),example:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[W]),author:t(()=>[a("Christian Rocha")]),metadata:t(()=>[a("2 days ago")]),text:t(()=>[a(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),actions:t(()=>[X]),default:t(()=>[l(s(m),{collapsed:""},{default:t(()=>[l(s(o),null,{avatar:t(()=>[Z]),author:t(()=>[a("Elliot Fu")]),metadata:t(()=>[a("1 days ago")]),text:t(()=>[a(" No, it wont ")]),actions:t(()=>[tt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},lt=e("img",{src:h},null,-1),st=e("span",null,"Today at 5:42PM",-1),ot=e("a",null,"Reply",-1),mt=e("img",{src:d},null,-1),nt=e("span",null,"Yesterday at 12:30AM",-1),pt=e("a",null,"Reply",-1),it=e("img",{src:y},null,-1),rt=e("span",null,"Just now",-1),ct=e("a",null,"Reply",-1),ut=e("img",{src:_},null,-1),dt=e("span",null,"5 days ago",-1),_t=e("a",null,"Reply",-1),ht=`<template>
  <CommentGroup threaded>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/matt.jpg" />
      </template>
      <template #author>
        Matt
      </template>
      <template #metadata>
        <span>Today at 5:42PM</span>
      </template>
      <template #text>
        How artistic!
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
    </Comment>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/elliot.jpg" />
      </template>
      <template #author>
        Elliot Fu
      </template>
      <template #metadata>
        <span>Yesterday at 12:30AM</span>
      </template>
      <template #text>
        This has been very useful for my research. Thanks as well!
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/jenny.jpg" />
          </template>
          <template #author>
            Jenny Hess
          </template>
          <template #metadata>
            <span>Just now</span>
          </template>
          <template #text>
            Elliot you are always so right :)
          </template>
          <template #actions>
            <a>Reply</a>
          </template>
        </Comment>
      </CommentGroup>
    </Comment>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/joe.jpg" />
      </template>
      <template #author>
        Joe Henderson
      </template>
      <template #metadata>
        <span>5 days ago</span>
      </template>
      <template #text>
        Dude, this is awesome. Thanks so much
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
    </Comment>
  </CommentGroup>
</template>`,yt={__name:"ThreadedDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Threaded",code:ht},{description:t(()=>[a(" A comment list can be threaded to showing the relationship between conversations ")]),example:t(()=>[l(s(m),{threaded:""},{default:t(()=>[l(s(o),null,{avatar:t(()=>[lt]),author:t(()=>[a(" Matt ")]),metadata:t(()=>[st]),text:t(()=>[a(" How artistic! ")]),actions:t(()=>[ot]),_:1}),l(s(o),null,{avatar:t(()=>[mt]),author:t(()=>[a(" Elliot Fu ")]),metadata:t(()=>[nt]),text:t(()=>[a(" This has been very useful for my research. Thanks as well! ")]),actions:t(()=>[pt]),default:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[it]),author:t(()=>[a(" Jenny Hess ")]),metadata:t(()=>[rt]),text:t(()=>[a(" Elliot you are always so right :) ")]),actions:t(()=>[ct]),_:1})]),_:1})]),_:1}),l(s(o),null,{avatar:t(()=>[ut]),author:t(()=>[a(" Joe Henderson ")]),metadata:t(()=>[dt]),text:t(()=>[a(" Dude, this is awesome. Thanks so much ")]),actions:t(()=>[_t]),_:1})]),_:1})]),_:1}))}},gt=e("img",{src:h},null,-1),vt=e("span",null,"Today at 5:42PM",-1),Ct=e("a",null,"Reply",-1),$t=e("img",{src:d},null,-1),ft=e("span",null,"Yesterday at 12:30AM",-1),xt=e("a",null,"Reply",-1),wt=e("img",{src:y},null,-1),Rt=e("span",null,"Just now",-1),Tt=e("a",null,"Reply",-1),bt=e("img",{src:_},null,-1),jt=e("span",null,"5 days ago",-1),Mt=e("a",null,"Reply",-1),Ht=`<template>
  <CommentGroup minimal>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/matt.jpg" />
      </template>
      <template #author>
        Matt
      </template>
      <template #metadata>
        <span>Today at 5:42PM</span>
      </template>
      <template #text>
        How artistic!
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
    </Comment>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/elliot.jpg" />
      </template>
      <template #author>
        Elliot Fu
      </template>
      <template #metadata>
        <span>Yesterday at 12:30AM</span>
      </template>
      <template #text>
        This has been very useful for my research. Thanks as well!
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/jenny.jpg" />
          </template>
          <template #author>
            Jenny Hess
          </template>
          <template #metadata>
            <span>Just now</span>
          </template>
          <template #text>
            Elliot you are always so right :)
          </template>
          <template #actions>
            <a>Reply</a>
          </template>
        </Comment>
      </CommentGroup>
    </Comment>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/joe.jpg" />
      </template>
      <template #author>
        Joe Henderson
      </template>
      <template #metadata>
        <span>5 days ago</span>
      </template>
      <template #text>
        Dude, this is awesome. Thanks so much
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
    </Comment>
  </CommentGroup>
</template>`,Gt={__name:"MinimalDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Minimal",code:Ht},{description:t(()=>[a(" Comments can hide extra information unless a user shows intent to interact with a comment. ")]),example:t(()=>[l(s(m),{minimal:""},{default:t(()=>[l(s(o),null,{avatar:t(()=>[gt]),author:t(()=>[a(" Matt ")]),metadata:t(()=>[vt]),text:t(()=>[a(" How artistic! ")]),actions:t(()=>[Ct]),_:1}),l(s(o),null,{avatar:t(()=>[$t]),author:t(()=>[a(" Elliot Fu ")]),metadata:t(()=>[ft]),text:t(()=>[a(" This has been very useful for my research. Thanks as well! ")]),actions:t(()=>[xt]),default:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[wt]),author:t(()=>[a(" Jenny Hess ")]),metadata:t(()=>[Rt]),text:t(()=>[a(" Elliot you are always so right :) ")]),actions:t(()=>[Tt]),_:1})]),_:1})]),_:1}),l(s(o),null,{avatar:t(()=>[bt]),author:t(()=>[a(" Joe Henderson ")]),metadata:t(()=>[jt]),text:t(()=>[a(" Dude, this is awesome. Thanks so much ")]),actions:t(()=>[Mt]),_:1})]),_:1})]),_:1}))}},kt=e("img",{src:h},null,-1),Jt=e("span",null,"Today at 5:42PM",-1),At=e("a",null,"Reply",-1),Dt=e("img",{src:d},null,-1),Et=e("span",null,"Yesterday at 12:30AM",-1),Ft=e("a",null,"Reply",-1),Pt=e("img",{src:y},null,-1),Yt=e("span",null,"Just now",-1),It=e("a",null,"Reply",-1),St=e("img",{src:_},null,-1),Vt=e("span",null,"5 days ago",-1),zt=e("a",null,"Reply",-1),Nt=`<template>
  <CommentGroup size="small">
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/matt.jpg" />
      </template>
      <template #author>
        Matt
      </template>
      <template #metadata>
        <span>Today at 5:42PM</span>
      </template>
      <template #text>
        How artistic!
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
    </Comment>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/elliot.jpg" />
      </template>
      <template #author>
        Elliot Fu
      </template>
      <template #metadata>
        <span>Yesterday at 12:30AM</span>
      </template>
      <template #text>
        This has been very useful for my research. Thanks as well!
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/jenny.jpg" />
          </template>
          <template #author>
            Jenny Hess
          </template>
          <template #metadata>
            <span>Just now</span>
          </template>
          <template #text>
            Elliot you are always so right :)
          </template>
          <template #actions>
            <a>Reply</a>
          </template>
        </Comment>
      </CommentGroup>
    </Comment>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/joe.jpg" />
      </template>
      <template #author>
        Joe Henderson
      </template>
      <template #metadata>
        <span>5 days ago</span>
      </template>
      <template #text>
        Dude, this is awesome. Thanks so much
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
    </Comment>
  </CommentGroup>
</template>`,Bt=v({__name:"SizeDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Size",code:Nt},{description:t(()=>[a(" Comments can have different sizes ")]),example:t(()=>[l(s(m),{size:"small"},{default:t(()=>[l(s(o),null,{avatar:t(()=>[kt]),author:t(()=>[a(" Matt ")]),metadata:t(()=>[Jt]),text:t(()=>[a(" How artistic! ")]),actions:t(()=>[At]),_:1}),l(s(o),null,{avatar:t(()=>[Dt]),author:t(()=>[a(" Elliot Fu ")]),metadata:t(()=>[Et]),text:t(()=>[a(" This has been very useful for my research. Thanks as well! ")]),actions:t(()=>[Ft]),default:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[Pt]),author:t(()=>[a(" Jenny Hess ")]),metadata:t(()=>[Yt]),text:t(()=>[a(" Elliot you are always so right :) ")]),actions:t(()=>[It]),_:1})]),_:1})]),_:1}),l(s(o),null,{avatar:t(()=>[St]),author:t(()=>[a(" Joe Henderson ")]),metadata:t(()=>[Vt]),text:t(()=>[a(" Dude, this is awesome. Thanks so much ")]),actions:t(()=>[zt]),_:1})]),_:1})]),_:1}))}}),Lt=e("img",{src:h},null,-1),Ut=e("span",null,"Today at 5:42PM",-1),qt=e("a",null,"Reply",-1),Kt=e("img",{src:d},null,-1),Ot=e("span",null,"Yesterday at 12:30AM",-1),Qt=e("a",null,"Reply",-1),Wt=e("img",{src:y},null,-1),Xt=e("span",null,"Just now",-1),Zt=e("a",null,"Reply",-1),te=e("img",{src:_},null,-1),ee=e("span",null,"5 days ago",-1),ae=e("a",null,"Reply",-1),le=`<template>
  <Segment inverted>
    <CommentGroup inverted threaded>
      <Comment>
        <template #avatar>
          <img src="/vue-fomantic-ui/images/avatar/small/matt.jpg" />
        </template>
        <template #author>
          Matt
        </template>
        <template #metadata>
          <span>Today at 5:42PM</span>
        </template>
        <template #text>
          How artistic!
        </template>
        <template #actions>
          <a>Reply</a>
        </template>
      </Comment>
      <Comment>
        <template #avatar>
          <img src="/vue-fomantic-ui/images/avatar/small/elliot.jpg" />
        </template>
        <template #author>
          Elliot Fu
        </template>
        <template #metadata>
          <span>Yesterday at 12:30AM</span>
        </template>
        <template #text>
          This has been very useful for my research. Thanks as well!
        </template>
        <template #actions>
          <a>Reply</a>
        </template>
        <CommentGroup>
          <Comment>
            <template #avatar>
              <img src="/vue-fomantic-ui/images/avatar/small/jenny.jpg" />
            </template>
            <template #author>
              Jenny Hess
            </template>
            <template #metadata>
              <span>Just now</span>
            </template>
            <template #text>
              Elliot you are always so right :)
            </template>
            <template #actions>
              <a>Reply</a>
            </template>
          </Comment>
        </CommentGroup>
      </Comment>
      <Comment>
        <template #avatar>
          <img src="/vue-fomantic-ui/images/avatar/small/joe.jpg" />
        </template>
        <template #author>
          Joe Henderson
        </template>
        <template #metadata>
          <span>5 days ago</span>
        </template>
        <template #text>
          Dude, this is awesome. Thanks so much
        </template>
        <template #actions>
          <a>Reply</a>
        </template>
      </Comment>
    </CommentGroup>
  </Segment>
</template>`,se={__name:"InvertedDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Inverted",code:le},{description:t(()=>[a(" Comments' colors can be inverted ")]),example:t(()=>[l(s(C),{inverted:""},{default:t(()=>[l(s(m),{inverted:"",threaded:""},{default:t(()=>[l(s(o),null,{avatar:t(()=>[Lt]),author:t(()=>[a(" Matt ")]),metadata:t(()=>[Ut]),text:t(()=>[a(" How artistic! ")]),actions:t(()=>[qt]),_:1}),l(s(o),null,{avatar:t(()=>[Kt]),author:t(()=>[a(" Elliot Fu ")]),metadata:t(()=>[Ot]),text:t(()=>[a(" This has been very useful for my research. Thanks as well! ")]),actions:t(()=>[Qt]),default:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[Wt]),author:t(()=>[a(" Jenny Hess ")]),metadata:t(()=>[Xt]),text:t(()=>[a(" Elliot you are always so right :) ")]),actions:t(()=>[Zt]),_:1})]),_:1})]),_:1}),l(s(o),null,{avatar:t(()=>[te]),author:t(()=>[a(" Joe Henderson ")]),metadata:t(()=>[ee]),text:t(()=>[a(" Dude, this is awesome. Thanks so much ")]),actions:t(()=>[ae]),_:1})]),_:1})]),_:1})]),_:1}))}},re={__name:"Comment",setup(r){const n=[{id:"comments",label:"Comments",category:"Types",component:D},{id:"avatar",label:"Avatar",category:"Content",component:P},{id:"metadata",label:"Metadata",category:"Content",component:z},{id:"actions",label:"Actions",category:"Content",component:O},{id:"collapsed",label:"Collapsed",category:"States",component:at},{id:"threaded",label:"Threaded",category:"Variations",component:yt},{id:"minimal",label:"Minimal",category:"Variations",component:Gt},{id:"size",label:"Size",category:"Variations",component:Bt},{id:"inverted",label:"Inverted",category:"Variations",component:se}];return(c,oe)=>(p(),i($,{title:"Comment",description:"A comment displays user feedback to site content","component-docs":n}))}};export{re as default};
