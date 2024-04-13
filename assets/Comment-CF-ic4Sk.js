import{o as p,c as i,w as t,a,b as l,u as s,ar as m,as as o,d as e,at as h,_ as d,au as g,L as v,D as C}from"./index-C5UtasSn.js";import{_ as y}from"./jenny-C8JmaaC7.js";import{_}from"./joe-CWv6CXVt.js";import{_ as u}from"./DocSection-DNwpJszJ.js";const $=e("img",{src:h},null,-1),f=e("span",null,"Today at 5:42PM",-1),x=e("a",null,"Reply",-1),w=e("img",{src:d},null,-1),R=e("span",null,"Yesterday at 12:30AM",-1),T=e("a",null,"Reply",-1),b=e("img",{src:y},null,-1),j=e("span",null,"Just now",-1),M=e("a",null,"Reply",-1),G=e("img",{src:_},null,-1),H=e("span",null,"5 days ago",-1),k=e("a",null,"Reply",-1),J=`<template>
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
</template>`,A={__name:"CommentsDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Comments",code:J},{description:t(()=>[a(" A basic list of comments ")]),example:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[$]),author:t(()=>[a(" Matt ")]),metadata:t(()=>[f]),text:t(()=>[a(" How artistic! ")]),actions:t(()=>[x]),_:1}),l(s(o),null,{avatar:t(()=>[w]),author:t(()=>[a(" Elliot Fu ")]),metadata:t(()=>[R]),text:t(()=>[a(" This has been very useful for my research. Thanks as well! ")]),actions:t(()=>[T]),default:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[b]),author:t(()=>[a(" Jenny Hess ")]),metadata:t(()=>[j]),text:t(()=>[a(" Elliot you are always so right :) ")]),actions:t(()=>[M]),_:1})]),_:1})]),_:1}),l(s(o),null,{avatar:t(()=>[G]),author:t(()=>[a(" Joe Henderson ")]),metadata:t(()=>[H]),text:t(()=>[a(" Dude, this is awesome. Thanks so much ")]),actions:t(()=>[k]),_:1})]),_:1})]),_:1}))}},D=e("img",{src:d},null,-1),E=`<template>
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
</template>`,F={__name:"AvatarDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Avatar",code:E},{description:t(()=>[a(" A comment can contain an image or avatar ")]),example:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[D]),author:t(()=>[a(" Elliot Fu ")]),_:1})]),_:1})]),_:1}))}},I=e("img",{src:g},null,-1),P=e("div",{class:"date"},"2 days ago",-1),Y=e("div",null,[e("i",{class:"star icon"}),a(" 5 Faves ")],-1),S=`<template>
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
</template>`,V={__name:"MetadataDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Metadata",code:S},{description:t(()=>[a(" A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined. ")]),example:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[I]),author:t(()=>[a(" Stevie Feliciano ")]),metadata:t(()=>[P,Y]),text:t(()=>[a(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1}))}},L=e("img",{src:_},null,-1),N=e("a",{class:"reply"},"Reply",-1),B=e("a",{class:"save"},"Save",-1),U=e("a",{class:"hide"},"Hide",-1),O=e("a",null,[e("i",{class:"expand icon"}),a(" Full-screen ")],-1),q=`<template>
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
</template>`,z={__name:"ActionsDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Actions",code:q},{description:t(()=>[a(" A comment can contain an list of actions a user may perform related to this comment. ")]),example:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[L]),author:t(()=>[a(" Tom Lukic ")]),text:t(()=>[a(" This will be great for business reports. I will definitely download this. ")]),actions:t(()=>[N,B,U,O]),_:1})]),_:1})]),_:1}))}},K="/vue-fomantic-ui/images/avatar/small/christian.jpg",Q=e("img",{src:K},null,-1),W=e("a",{class:"reply"},"Reply",-1),X=e("img",{src:d},null,-1),Z=e("a",{class:"reply"},"Reply",-1),tt=`<template>
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
</template>`,et={__name:"CollapsedDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Collapsed",code:tt},{description:t(()=>[a(" Comments can be collapsed, or hidden from view ")]),example:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[Q]),author:t(()=>[a("Christian Rocha")]),metadata:t(()=>[a("2 days ago")]),text:t(()=>[a(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),actions:t(()=>[W]),default:t(()=>[l(s(m),{collapsed:""},{default:t(()=>[l(s(o),null,{avatar:t(()=>[X]),author:t(()=>[a("Elliot Fu")]),metadata:t(()=>[a("1 days ago")]),text:t(()=>[a(" No, it wont ")]),actions:t(()=>[Z]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},at=e("img",{src:h},null,-1),lt=e("span",null,"Today at 5:42PM",-1),st=e("a",null,"Reply",-1),ot=e("img",{src:d},null,-1),mt=e("span",null,"Yesterday at 12:30AM",-1),nt=e("a",null,"Reply",-1),pt=e("img",{src:y},null,-1),it=e("span",null,"Just now",-1),rt=e("a",null,"Reply",-1),ct=e("img",{src:_},null,-1),ut=e("span",null,"5 days ago",-1),dt=e("a",null,"Reply",-1),_t=`<template>
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
</template>`,ht={__name:"ThreadedDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Threaded",code:_t},{description:t(()=>[a(" A comment list can be threaded to showing the relationship between conversations ")]),example:t(()=>[l(s(m),{threaded:""},{default:t(()=>[l(s(o),null,{avatar:t(()=>[at]),author:t(()=>[a(" Matt ")]),metadata:t(()=>[lt]),text:t(()=>[a(" How artistic! ")]),actions:t(()=>[st]),_:1}),l(s(o),null,{avatar:t(()=>[ot]),author:t(()=>[a(" Elliot Fu ")]),metadata:t(()=>[mt]),text:t(()=>[a(" This has been very useful for my research. Thanks as well! ")]),actions:t(()=>[nt]),default:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[pt]),author:t(()=>[a(" Jenny Hess ")]),metadata:t(()=>[it]),text:t(()=>[a(" Elliot you are always so right :) ")]),actions:t(()=>[rt]),_:1})]),_:1})]),_:1}),l(s(o),null,{avatar:t(()=>[ct]),author:t(()=>[a(" Joe Henderson ")]),metadata:t(()=>[ut]),text:t(()=>[a(" Dude, this is awesome. Thanks so much ")]),actions:t(()=>[dt]),_:1})]),_:1})]),_:1}))}},yt=e("img",{src:h},null,-1),gt=e("span",null,"Today at 5:42PM",-1),vt=e("a",null,"Reply",-1),Ct=e("img",{src:d},null,-1),$t=e("span",null,"Yesterday at 12:30AM",-1),ft=e("a",null,"Reply",-1),xt=e("img",{src:y},null,-1),wt=e("span",null,"Just now",-1),Rt=e("a",null,"Reply",-1),Tt=e("img",{src:_},null,-1),bt=e("span",null,"5 days ago",-1),jt=e("a",null,"Reply",-1),Mt=`<template>
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
</template>`,Gt={__name:"MinimalDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Minimal",code:Mt},{description:t(()=>[a(" Comments can hide extra information unless a user shows intent to interact with a comment. ")]),example:t(()=>[l(s(m),{minimal:""},{default:t(()=>[l(s(o),null,{avatar:t(()=>[yt]),author:t(()=>[a(" Matt ")]),metadata:t(()=>[gt]),text:t(()=>[a(" How artistic! ")]),actions:t(()=>[vt]),_:1}),l(s(o),null,{avatar:t(()=>[Ct]),author:t(()=>[a(" Elliot Fu ")]),metadata:t(()=>[$t]),text:t(()=>[a(" This has been very useful for my research. Thanks as well! ")]),actions:t(()=>[ft]),default:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[xt]),author:t(()=>[a(" Jenny Hess ")]),metadata:t(()=>[wt]),text:t(()=>[a(" Elliot you are always so right :) ")]),actions:t(()=>[Rt]),_:1})]),_:1})]),_:1}),l(s(o),null,{avatar:t(()=>[Tt]),author:t(()=>[a(" Joe Henderson ")]),metadata:t(()=>[bt]),text:t(()=>[a(" Dude, this is awesome. Thanks so much ")]),actions:t(()=>[jt]),_:1})]),_:1})]),_:1}))}},Ht=e("img",{src:h},null,-1),kt=e("span",null,"Today at 5:42PM",-1),Jt=e("a",null,"Reply",-1),At=e("img",{src:d},null,-1),Dt=e("span",null,"Yesterday at 12:30AM",-1),Et=e("a",null,"Reply",-1),Ft=e("img",{src:y},null,-1),It=e("span",null,"Just now",-1),Pt=e("a",null,"Reply",-1),Yt=e("img",{src:_},null,-1),St=e("span",null,"5 days ago",-1),Vt=e("a",null,"Reply",-1),Lt=`<template>
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
</template>`,Nt={__name:"InvertedDoc",setup(r){return(n,c)=>(p(),i(u,{label:"Inverted",code:Lt},{description:t(()=>[a(" Comments' colors can be inverted ")]),example:t(()=>[l(s(v),{inverted:""},{default:t(()=>[l(s(m),{inverted:"",threaded:""},{default:t(()=>[l(s(o),null,{avatar:t(()=>[Ht]),author:t(()=>[a(" Matt ")]),metadata:t(()=>[kt]),text:t(()=>[a(" How artistic! ")]),actions:t(()=>[Jt]),_:1}),l(s(o),null,{avatar:t(()=>[At]),author:t(()=>[a(" Elliot Fu ")]),metadata:t(()=>[Dt]),text:t(()=>[a(" This has been very useful for my research. Thanks as well! ")]),actions:t(()=>[Et]),default:t(()=>[l(s(m),null,{default:t(()=>[l(s(o),null,{avatar:t(()=>[Ft]),author:t(()=>[a(" Jenny Hess ")]),metadata:t(()=>[It]),text:t(()=>[a(" Elliot you are always so right :) ")]),actions:t(()=>[Pt]),_:1})]),_:1})]),_:1}),l(s(o),null,{avatar:t(()=>[Yt]),author:t(()=>[a(" Joe Henderson ")]),metadata:t(()=>[St]),text:t(()=>[a(" Dude, this is awesome. Thanks so much ")]),actions:t(()=>[Vt]),_:1})]),_:1})]),_:1})]),_:1}))}},Kt={__name:"Comment",setup(r){const n=[{id:"comments",label:"Comments",category:"Types",component:A},{id:"avatar",label:"Avatar",category:"Content",component:F},{id:"metadata",label:"Metadata",category:"Content",component:V},{id:"actions",label:"Actions",category:"Content",component:z},{id:"collapsed",label:"Collapsed",category:"States",component:et},{id:"threaded",label:"Threaded",category:"Variations",component:ht},{id:"minimal",label:"Minimal",category:"Variations",component:Gt},{id:"inverted",label:"Inverted",category:"Variations",component:Nt}];return(c,Bt)=>(p(),i(C,{title:"Comment",description:"A comment displays user feedback to site content","component-docs":n}))}};export{Kt as default};
