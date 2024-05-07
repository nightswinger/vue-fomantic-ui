import{e as u,o as m,c,w as a,a as t,b as s,u as l,an as d,ao as i,d as e,_ as g,ai as o,K as k,N as F,Y as $,D as b}from"./index-CCvpN2u5.js";import{_ as v}from"./jenny-C8JmaaC7.js";import{_ as y}from"./joe-CWv6CXVt.js";import{_ as p}from"./DocSection-CXw2CXfC.js";const h="/vue-fomantic-ui/images/avatar/small/helen.jpg",f="/vue-fomantic-ui/images/avatar/small/justen.jpg",w=e("img",{src:g},null,-1),E=e("a",{class:"user"}," Elliot Fu ",-1),x=e("div",{class:"date"}," 1 hour ago ",-1),L=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 4 Likes ")],-1),j=e("img",{src:h},null,-1),H=e("a",null,"Helen Troy",-1),T=e("a",null,"2 new illustrations",-1),I=e("div",{class:"date"}," 4 days ago ",-1),J=e("a",null,[e("img",{src:o})],-1),C=e("a",null,[e("img",{src:o})],-1),A=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 1 Like ")],-1),D=e("img",{src:v},null,-1),z=e("a",{class:"user"}," Jenny Hess ",-1),S=e("div",{class:"date"}," 2 days ago ",-1),Y=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 8 Likes ")],-1),K=e("img",{src:y},null,-1),N=e("a",null,"Joe Henderson",-1),V=e("div",{class:"date"}," 3 days ago ",-1),O=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 5 Likes ")],-1),R=e("img",{src:f},null,-1),W=e("a",null,"Justen Kitsune",-1),B=e("a",null,"2 new photos",-1),q=e("div",{class:"date"}," 4 days ago ",-1),G=e("a",null,[e("img",{src:o})],-1),M=e("a",null,[e("img",{src:o})],-1),P=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 41 Like ")],-1),Q=`<template>
  <Feed>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/elliot.jpg">
      </template>
      <template #summary>
        <a class="user">
          Elliot Fu
        </a> added you as a friend
        <div class="date">
          1 hour ago
        </div>
      </template>
      <template #meta>
        <a class="like">
          <i class="like icon"></i> 4 Likes
        </a>
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/helen.jpg">
      </template>
      <template #summary>
        <a>Helen Troy</a> added <a>2 new illustrations</a>
        <div class="date">
          4 days ago
        </div>
      </template>
      <template #extraImages>
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </template>
      <template #meta>
        <a class="like">
          <i class="like icon"></i> 1 Like
        </a>
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/jenny.jpg">
      </template>
      <template #summary>
        <a class="user">
          Jenny Hess
        </a> added you as a friend
        <div class="date">
          2 days ago
        </div>
      </template>
      <template #meta>
        <a class="like">
          <i class="like icon"></i> 8 Likes
        </a>
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/joe.jpg">
      </template>
      <template #summary>
        <a>Joe Henderson</a> posted on his page
        <div class="date">
          3 days ago
        </div>
      </template>
      <template #extraText>
        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
      </template>
      <template #meta>
        <a class="like">
          <i class="like icon"></i> 5 Likes
        </a>
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/justen.jpg">
      </template>
      <template #summary>
        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
        <div class="date">
          4 days ago
        </div>
      </template>
      <template #extraImages>
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </template>
      <template #meta>
        <a class="like">
          <i class="like icon"></i> 41 Like
        </a>
      </template>
    </FeedEvent>
  </Feed>
</template>`,U=u({__name:"FeedDoc",setup(r){return(n,_)=>(m(),c(p,{label:"Feed",code:Q},{description:a(()=>[t(" A feed ")]),example:a(()=>[s(l(d),null,{default:a(()=>[s(l(i),null,{label:a(()=>[w]),summary:a(()=>[E,t(" added you as a friend "),x]),meta:a(()=>[L]),_:1}),s(l(i),null,{label:a(()=>[j]),summary:a(()=>[H,t(" added "),T,I]),extraImages:a(()=>[J,C]),meta:a(()=>[A]),_:1}),s(l(i),null,{label:a(()=>[D]),summary:a(()=>[z,t(" added you as a friend "),S]),meta:a(()=>[Y]),_:1}),s(l(i),null,{label:a(()=>[K]),summary:a(()=>[N,t(" posted on his page "),V]),extraText:a(()=>[t(" Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon. ")]),meta:a(()=>[O]),_:1}),s(l(i),null,{label:a(()=>[R]),summary:a(()=>[W,t(" added "),B,t(" of you "),q]),extraImages:a(()=>[G,M]),meta:a(()=>[P]),_:1})]),_:1})]),_:1}))}}),X=e("img",{src:g},null,-1),Z=e("a",null,"Coworkers",-1),ee=e("a",null,"Stevie Feliciano's",-1),ae=e("div",{class:"date"},"Today",-1),te=`<template>
  <Feed>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/elliot.jpg">
      </template>
      <template #summary>
        You added Elliot Fu to the group <a>Coworkers</a>
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #label>
        <Icon name="pencil" />
      </template>
      <template #summary>
        You posted on your friend <a>Stevie Feliciano's</a> wall.
        <div class="date">Today</div>
      </template>
    </FeedEvent>
  </Feed>
</template>`,se=u({__name:"LabelDoc",setup(r){return(n,_)=>(m(),c(p,{label:"Label",code:te},{description:a(()=>[t(" An event label can contain an image, icon, text or label ")]),example:a(()=>[s(l(d),null,{default:a(()=>[s(l(i),null,{label:a(()=>[X]),summary:a(()=>[t(" You added Elliot Fu to the group "),Z]),_:1}),s(l(i),null,{label:a(()=>[s(l(k),{name:"pencil"})]),summary:a(()=>[t(" You posted on your friend "),ee,t(" wall. "),ae]),_:1})]),_:1})]),_:1}))}}),le=e("img",{src:v},null,-1),ie=e("a",null,"Jenny Hess",-1),oe=e("a",null,"coworker",-1),ne=e("div",{class:"date"}," 3 days ago ",-1),de=`<template>
  <Feed>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/jenny.jpg">
      </template>
      <template #summary>
        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
        <div class="date">
          3 days ago
        </div>
      </template>
    </FeedEvent>
  </Feed>
</template>`,me=u({__name:"DateDoc",setup(r){return(n,_)=>(m(),c(p,{label:"Date",code:de},{description:a(()=>[t(" An event or an event summary can contain a date ")]),example:a(()=>[s(l(d),null,{default:a(()=>[s(l(i),null,{label:a(()=>[le]),summary:a(()=>[t(" You added "),ie,t(" to your "),oe,t(" group. "),ne]),_:1})]),_:1})]),_:1}))}}),ce="/vue-fomantic-ui/images/avatar/small/laura.jpg",re=e("img",{src:h},null,-1),_e=e("a",null,"Helen Troy",-1),ue=e("div",{class:"date"}," 3 days ago ",-1),pe=e("a",null,[e("img",{src:o})],-1),ge=e("a",null,[e("img",{src:o})],-1),he=e("img",{src:ce},null,-1),ve=e("a",null,"Laura Faucet",-1),ye=e("div",{class:"date"}," 3 days ago ",-1),fe=`<template>
  <Feed>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/hellen.jpg">
      </template>
      <template #summary>
        <a>Helen Troy</a> added 2 photos
        <div class="date">
          3 days ago
        </div>
      </template>
      <template #extraImages>
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/laura.jpg">
      </template>
      <template #summary>
        <a>Laura Faucet</a> created a post
        <div class="date">
          3 days ago
        </div>
      </template>
      <template #extraText>
        Have you seen what's going on in Israel? Can you believe it.
      </template>
    </FeedEvent>
  </Feed>
</template>`,ke=u({__name:"AdditionalInformationDoc",setup(r){return(n,_)=>(m(),c(p,{label:"Additional information",code:fe},{description:a(()=>[t(" An event can contain additional information like a set of images or text ")]),example:a(()=>[s(l(d),null,{default:a(()=>[s(l(i),null,{label:a(()=>[re]),summary:a(()=>[_e,t(" added 2 photos "),ue]),extraImages:a(()=>[pe,ge]),_:1}),s(l(i),null,{label:a(()=>[he]),summary:a(()=>[ve,t(" created a post "),ye]),extraText:a(()=>[t(" Have you seen what's going on in Israel? Can you believe it. ")]),_:1})]),_:1})]),_:1}))}}),Fe=e("a",null,"Elliot Fu",-1),$e=e("a",null,"Jenny Hess",-1),be=e("a",null,"Stevie Feliciano",-1),we=e("a",null,"Elliot Fu",-1),Ee=e("a",null,"Helen Troy",-1),xe=e("a",null,"Christian Rocha",-1),Le=e("a",null,"Christian Rocha",-1),je=e("img",{src:g},null,-1),He=e("a",{class:"user"}," Elliot Fu ",-1),Te=e("div",{class:"date"}," 1 hour ago ",-1),Ie=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 4 Likes ")],-1),Je=e("img",{src:h},null,-1),Ce=e("a",null,"Helen Troy",-1),Ae=e("a",null,"2 new illustrations",-1),De=e("div",{class:"date"}," 4 days ago ",-1),ze=e("a",null,[e("img",{src:o})],-1),Se=e("a",null,[e("img",{src:o})],-1),Ye=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 1 Like ")],-1),Ke=`<template>
  <Feed size="mini">
    <Header as="h4">Followers Activity</Header>
    <FeedEvent>
      <template #summary>
        <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #summary>
        <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #summary>
        <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #summary>
        <a>Christian Rocha</a> signed up for the  site.
      </template>
    </FeedEvent>
  </Feed>
  <Feed size="large">
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/elliot.jpg">
      </template>
      <template #summary>
        <a class="user">
          Elliot Fu
        </a> added you as a friend
        <div class="date">
          1 hour ago
        </div>
      </template>
      <template #meta>
        <a class="like">
          <i class="like icon"></i> 4 Likes
        </a>
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/helen.jpg">
      </template>
      <template #summary>
        <a>Helen Troy</a> added <a>2 new illustrations</a>
        <div class="date">
          4 days ago
        </div>
      </template>
      <template #extraImages>
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </template>
      <template #meta>
        <a class="like">
          <i class="like icon"></i> 1 Like
        </a>
      </template>
    </FeedEvent>
  </Feed>
</template>`,Ne=u({__name:"SizeDoc",setup(r){return(n,_)=>(m(),c(p,{label:"Size",code:Ke},{description:a(()=>[t(" A feed can have different sizes ")]),example:a(()=>[s(l(d),{size:"mini"},{default:a(()=>[s(l(F),{as:"h4"},{default:a(()=>[t("Followers Activity")]),_:1}),s(l(i),null,{summary:a(()=>[Fe,t(" added "),$e,t(" as a friend ")]),_:1}),s(l(i),null,{summary:a(()=>[be,t(" added "),we,t(" as a friend ")]),_:1}),s(l(i),null,{summary:a(()=>[Ee,t(" added "),xe,t(" as a friend ")]),_:1}),s(l(i),null,{summary:a(()=>[Le,t(" signed up for the site. ")]),_:1})]),_:1}),s(l(d),{size:"large"},{default:a(()=>[s(l(i),null,{label:a(()=>[je]),summary:a(()=>[He,t(" added you as a friend "),Te]),meta:a(()=>[Ie]),_:1}),s(l(i),null,{label:a(()=>[Je]),summary:a(()=>[Ce,t(" added "),Ae,De]),extraImages:a(()=>[ze,Se]),meta:a(()=>[Ye]),_:1})]),_:1})]),_:1}))}}),Ve=e("img",{src:g},null,-1),Oe=e("a",{class:"user"}," Elliot Fu ",-1),Re=e("div",{class:"date"}," 1 hour ago ",-1),We=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 4 Likes ")],-1),Be=e("img",{src:h},null,-1),qe=e("a",null,"Helen Troy",-1),Ge=e("a",null,"2 new illustrations",-1),Me=e("div",{class:"date"}," 4 days ago ",-1),Pe=e("a",null,[e("img",{src:o})],-1),Qe=e("a",null,[e("img",{src:o})],-1),Ue=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 1 Like ")],-1),Xe=e("img",{src:v},null,-1),Ze=e("a",{class:"user"}," Jenny Hess ",-1),ea=e("div",{class:"date"}," 2 days ago ",-1),aa=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 8 Likes ")],-1),ta=e("img",{src:y},null,-1),sa=e("a",null,"Joe Henderson",-1),la=e("div",{class:"date"}," 3 days ago ",-1),ia=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 5 Likes ")],-1),oa=e("img",{src:f},null,-1),na=e("a",null,"Justen Kitsune",-1),da=e("a",null,"2 new photos",-1),ma=e("div",{class:"date"}," 4 days ago ",-1),ca=e("a",null,[e("img",{src:o})],-1),ra=e("a",null,[e("img",{src:o})],-1),_a=e("a",{class:"like"},[e("i",{class:"like icon"}),t(" 41 Like ")],-1),ua=`<template>
  <Segment inverted>
    <Feed inverted>
      <FeedEvent>
        <template #label>
          <img src="/images/avatar/small/elliot.jpg">
        </template>
        <template #summary>
          <a class="user">
            Elliot Fu
          </a> added you as a friend
          <div class="date">
            1 hour ago
          </div>
        </template>
        <template #meta>
          <a class="like">
            <i class="like icon"></i> 4 Likes
          </a>
        </template>
      </FeedEvent>
      <FeedEvent>
        <template #label>
          <img src="/images/avatar/small/helen.jpg">
        </template>
        <template #summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <div class="date">
            4 days ago
          </div>
        </template>
        <template #extraImages>
          <a><img src="/images/wireframe/image.png"></a>
          <a><img src="/images/wireframe/image.png"></a>
        </template>
        <template #meta>
          <a class="like">
            <i class="like icon"></i> 1 Like
          </a>
        </template>
      </FeedEvent>
      <FeedEvent>
        <template #label>
          <img src="/images/avatar/small/jenny.jpg">
        </template>
        <template #summary>
          <a class="user">
            Jenny Hess
          </a> added you as a friend
          <div class="date">
            2 days ago
          </div>
        </template>
        <template #meta>
          <a class="like">
            <i class="like icon"></i> 8 Likes
          </a>
        </template>
      </FeedEvent>
      <FeedEvent>
        <template #label>
          <img src="/images/avatar/small/joe.jpg">
        </template>
        <template #summary>
          <a>Joe Henderson</a> posted on his page
          <div class="date">
            3 days ago
          </div>
        </template>
        <template #extraText>
          Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
        </template>
        <template #meta>
          <a class="like">
            <i class="like icon"></i> 5 Likes
          </a>
        </template>
      </FeedEvent>
      <FeedEvent>
        <template #label>
          <img src="/images/avatar/small/justen.jpg">
        </template>
        <template #summary>
          <a>Justen Kitsune</a> added <a>2 new photos</a> of you
          <div class="date">
            4 days ago
          </div>
        </template>
        <template #extraImages>
          <a><img src="/images/wireframe/image.png"></a>
          <a><img src="/images/wireframe/image.png"></a>
        </template>
        <template #meta>
          <a class="like">
            <i class="like icon"></i> 41 Like
          </a>
        </template>
      </FeedEvent>
    </Feed>
  </Segment>
</template>`,pa=u({__name:"InvertedDoc",setup(r){return(n,_)=>(m(),c(p,{label:"Inverted",code:ua},{description:a(()=>[t(" A feed's color can be inverted ")]),example:a(()=>[s(l($),{inverted:""},{default:a(()=>[s(l(d),{inverted:""},{default:a(()=>[s(l(i),null,{label:a(()=>[Ve]),summary:a(()=>[Oe,t(" added you as a friend "),Re]),meta:a(()=>[We]),_:1}),s(l(i),null,{label:a(()=>[Be]),summary:a(()=>[qe,t(" added "),Ge,Me]),extraImages:a(()=>[Pe,Qe]),meta:a(()=>[Ue]),_:1}),s(l(i),null,{label:a(()=>[Xe]),summary:a(()=>[Ze,t(" added you as a friend "),ea]),meta:a(()=>[aa]),_:1}),s(l(i),null,{label:a(()=>[ta]),summary:a(()=>[sa,t(" posted on his page "),la]),extraText:a(()=>[t(" Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon. ")]),meta:a(()=>[ia]),_:1}),s(l(i),null,{label:a(()=>[oa]),summary:a(()=>[na,t(" added "),da,t(" of you "),ma]),extraImages:a(()=>[ca,ra]),meta:a(()=>[_a]),_:1})]),_:1})]),_:1})]),_:1}))}}),ka={__name:"Feed",setup(r){const n=[{id:"feed",label:"Feed",category:"Types",component:U},{id:"label",label:"Label",category:"Content",component:se},{id:"date",label:"Date",category:"Content",component:me},{id:"additional-information",label:"Additional information",category:"Content",component:ke},{id:"size",label:"Size",category:"Variations",component:Ne},{id:"inverted",label:"Inverted",category:"Variations",component:pa}];return(_,ga)=>(m(),c(b,{title:"Feed",description:"A feed presents user activity chronologically","component-docs":n}))}};export{ka as default};
