import{e as n,o as s,c as u,w as a,a as i,b as e,u as t,ax as l,ay as m,az as p,aA as b,K as _,z as S,d as v,L as f,D as h}from"./index-B2sz39O7.js";import{_ as d}from"./DocSection-LsN_yblw.js";const g=`<template>
  <Statistic value="5,550" label="Downloads" />
  <Statistic>
    <StatisticLabel>Views</StatisticLabel>
    <StatisticValue>40,509</StatisticValue>
  </Statistic>
</template>`,V=n({__name:"StatisticDoc",setup(r){return(o,c)=>(s(),u(d,{label:"Statistic",code:g},{description:a(()=>[i(" A statistic can display a value with a label above or below it. ")]),example:a(()=>[e(t(l),{value:"5,550",label:"Downloads"}),e(t(l),null,{default:a(()=>[e(t(m),null,{default:a(()=>[i("Views")]),_:1}),e(t(p),null,{default:a(()=>[i("40,509")]),_:1})]),_:1})]),_:1}))}}),w=`<template>
  <StatisticGroup>
    <Statistic value="22" label="Faves" />
    <Statistic value="31,200" label="Views" />
    <Statistic value="22" label="Members" />
  </StatisticGroup>
</template>`,x=n({__name:"StatisticGroupDoc",setup(r){return(o,c)=>(s(),u(d,{label:"Statistic Group",code:w},{description:a(()=>[i(" A group of statistics ")]),example:a(()=>[e(t(b),null,{default:a(()=>[e(t(l),{value:"22",label:"Faves"}),e(t(l),{value:"31,200",label:"Views"}),e(t(l),{value:"22",label:"Members"})]),_:1})]),_:1}))}}),y=v("br",null,null,-1),q=`<template>
  <StatisticGroup>
    <Statistic value="22" label="Faves" />
    <Statistic>
      <StatisticValue text>
        Three<br>
        Thousand
      </StatisticValue>
      <StatisticLabel>Signups</StatisticLabel>
    </Statistic>
    <Statistic>
      <StatisticValue>
        <Icon name="plane" /> 5
      </StatisticValue>
      <StatisticLabel>Flights</StatisticLabel>
    </Statistic>
    <Statistic>
      <StatisticValue>
        <Image circular inline src="/images/avatar/small/joe.jpg" />
        42
      </StatisticValue>
      <StatisticLabel>Team Members</StatisticLabel>
    </Statistic>
  </StatisticGroup>
</template>`,z=n({__name:"ValueDoc",setup(r){return(o,c)=>(s(),u(d,{label:"Value",code:q},{description:a(()=>[i(" A statistic can contain a numeric, icon, image, or text value ")]),example:a(()=>[e(t(b),null,{default:a(()=>[e(t(l),{value:"22",label:"Faves"}),e(t(l),null,{default:a(()=>[e(t(p),{text:""},{default:a(()=>[i(" Three"),y,i(" Thousand ")]),_:1}),e(t(m),null,{default:a(()=>[i("Signups")]),_:1})]),_:1}),e(t(l),null,{default:a(()=>[e(t(p),null,{default:a(()=>[e(t(_),{name:"plane"}),i(" 5 ")]),_:1}),e(t(m),null,{default:a(()=>[i("Flights")]),_:1})]),_:1}),e(t(l),null,{default:a(()=>[e(t(p),null,{default:a(()=>[e(t(S),{circular:"",inline:"",src:"/vue-fomantic-ui/images/avatar/small/joe.jpg"}),i(" 42 ")]),_:1}),e(t(m),null,{default:a(()=>[i("Team Members")]),_:1})]),_:1})]),_:1})]),_:1}))}}),T=`<template>
  <Statistic value="2,204" label="Views" />
</template>`,G=n({__name:"LabelDoc",setup(r){return(o,c)=>(s(),u(d,{label:"Label",code:T},{description:a(()=>[i(" A statistic can contain a label to help provide context for the presented value ")]),example:a(()=>[e(t(l),{value:"2,204",label:"Views"})]),_:1}))}}),$=`<template>
  <Statistic horizontal>
    <StatisticLabel>Views</StatisticLabel>
    <StatisticValue>40,509</StatisticValue>
  </Statistic>
  <StatisticGroup horizontal>
    <Statistic value="2,204" label="Views" />
    <Statistic value="3,322" label="Downloads" />
    <Statistic value="22" label="Tasks" />
  </StatisticGroup>
</template>`,L=n({__name:"HorizontalStatisticDoc",setup(r){return(o,c)=>(s(),u(d,{label:"Horizontal Statistic",code:$},{description:a(()=>[i(" A statistic can present its measurement horizontally ")]),example:a(()=>[e(t(l),{horizontal:""},{default:a(()=>[e(t(m),null,{default:a(()=>[i("Views")]),_:1}),e(t(p),null,{default:a(()=>[i("40,509")]),_:1})]),_:1}),e(t(b),{horizontal:""},{default:a(()=>[e(t(l),{value:"2,204",label:"Views"}),e(t(l),{value:"3,322",label:"Downloads"}),e(t(l),{value:"22",label:"Tasks"})]),_:1})]),_:1}))}}),D=`<template>
  <StatisticGroup>
    <Statistic color="red" value="27" label="Red" />
    <Statistic color="orange" value="8" label="Orange" />
    <Statistic color="yellow" value="28" label="Yellow" />
    <Statistic color="olive" value="7" label="Olive" />
    <Statistic color="green" value="14" label="Green" />
    <Statistic color="teal" value="82" label="Teal" />
    <Statistic color="blue" value="1" label="Blue" />
    <Statistic color="violet" value="22" label="Violet" />
    <Statistic color="purple" value="23" label="Purple" />
    <Statistic color="pink" value="15" label="Pink" />
    <Statistic color="brown" value="36" label="Brown" />
    <Statistic color="grey" value="49" label="Grey" />
  </StatisticGroup>
</template>`,A=n({__name:"ColoredDoc",setup(r){return(o,c)=>(s(),u(d,{label:"Colored",code:D},{description:a(()=>[i(" A statistic can be formatted to be different colors ")]),example:a(()=>[e(t(b),null,{default:a(()=>[e(t(l),{color:"red",value:"27",label:"Red"}),e(t(l),{color:"orange",value:"8",label:"Orange"}),e(t(l),{color:"yellow",value:"28",label:"Yellow"}),e(t(l),{color:"olive",value:"7",label:"Olive"}),e(t(l),{color:"green",value:"14",label:"Green"}),e(t(l),{color:"teal",value:"82",label:"Teal"}),e(t(l),{color:"blue",value:"1",label:"Blue"}),e(t(l),{color:"violet",value:"22",label:"Violet"}),e(t(l),{color:"purple",value:"23",label:"Purple"}),e(t(l),{color:"pink",value:"15",label:"Pink"}),e(t(l),{color:"brown",value:"36",label:"Brown"}),e(t(l),{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1}))}}),F=`<template>
  <Segment inverted>
    <StatisticGroup inverted>
      <Statistic color="red" value="27" label="Red" />
      <Statistic color="orange" value="8" label="Orange" />
      <Statistic color="yellow" value="28" label="Yellow" />
      <Statistic color="olive" value="7" label="Olive" />
      <Statistic color="green" value="14" label="Green" />
      <Statistic color="teal" value="82" label="Teal" />
      <Statistic color="blue" value="1" label="Blue" />
      <Statistic color="violet" value="22" label="Violet" />
      <Statistic color="purple" value="23" label="Purple" />
      <Statistic color="pink" value="15" label="Pink" />
      <Statistic color="brown" value="36" label="Brown" />
      <Statistic color="grey" value="49" label="Grey" />
    </StatisticGroup>
  </Segment>
</template>`,I=n({__name:"InvertedDoc",setup(r){return(o,c)=>(s(),u(d,{label:"Inverted",code:F},{description:a(()=>[i(" A statistic can be formatted to be different colors ")]),example:a(()=>[e(t(f),{inverted:""},{default:a(()=>[e(t(b),{inverted:""},{default:a(()=>[e(t(l),{color:"red",value:"27",label:"Red"}),e(t(l),{color:"orange",value:"8",label:"Orange"}),e(t(l),{color:"yellow",value:"28",label:"Yellow"}),e(t(l),{color:"olive",value:"7",label:"Olive"}),e(t(l),{color:"green",value:"14",label:"Green"}),e(t(l),{color:"teal",value:"82",label:"Teal"}),e(t(l),{color:"blue",value:"1",label:"Blue"}),e(t(l),{color:"violet",value:"22",label:"Violet"}),e(t(l),{color:"purple",value:"23",label:"Purple"}),e(t(l),{color:"pink",value:"15",label:"Pink"}),e(t(l),{color:"brown",value:"36",label:"Brown"}),e(t(l),{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1}))}}),k=v("br",null,null,-1),B=`<template>
  <StatisticGroup :widths="4">
    <Statistic value="22" label="Faves" />
    <Statistic>
      <StatisticValue text>
        Three<br>
        Thousand
      </StatisticValue>
      <StatisticLabel>Signups</StatisticLabel>
    </Statistic>
    <Statistic>
      <StatisticValue>
        <Icon name="plane" /> 5
      </StatisticValue>
      <StatisticLabel>Flights</StatisticLabel>
    </Statistic>
    <Statistic>
      <StatisticValue>
        <Image circular inline src="/vue-fomantic-ui/images/avatar/small/joe.jpg" />
        42
      </StatisticValue>
      <StatisticLabel>Team Members</StatisticLabel>
    </Statistic>
  </StatisticGroup>
</template>`,C=n({__name:"EvenlyDividedDoc",setup(r){return(o,c)=>(s(),u(d,{label:"Evenly Divided",code:B},{description:a(()=>[i(" A statistic group can have its items divided evenly ")]),example:a(()=>[e(t(b),{widths:4},{default:a(()=>[e(t(l),{value:"22",label:"Faves"}),e(t(l),null,{default:a(()=>[e(t(p),{text:""},{default:a(()=>[i(" Three"),k,i(" Thousand ")]),_:1}),e(t(m),null,{default:a(()=>[i("Signups")]),_:1})]),_:1}),e(t(l),null,{default:a(()=>[e(t(p),null,{default:a(()=>[e(t(_),{name:"plane"}),i(" 5 ")]),_:1}),e(t(m),null,{default:a(()=>[i("Flights")]),_:1})]),_:1}),e(t(l),null,{default:a(()=>[e(t(p),null,{default:a(()=>[e(t(S),{circular:"",inline:"",src:"/vue-fomantic-ui/images/avatar/small/joe.jpg"}),i(" 42 ")]),_:1}),e(t(m),null,{default:a(()=>[i("Team Members")]),_:1})]),_:1})]),_:1})]),_:1}))}}),M=v("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),P=v("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),j=v("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),O=v("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),Q=`<template>
  <Segment>
    <Statistic floated="right" value="2,204" label="Views" />
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <Statistic floated="left" value="2,204" label="Views" />
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
  </Segment>
</template>`,E=n({__name:"FloatedDoc",setup(r){return(o,c)=>(s(),u(d,{label:"Floated",code:Q},{description:a(()=>[i(" An statistic can sit to the left or right of other content ")]),example:a(()=>[e(t(f),null,{default:a(()=>[e(t(l),{floated:"right",value:"2,204",label:"Views"}),M,P,e(t(l),{floated:"left",value:"2,204",label:"Views"}),j,O]),_:1})]),_:1}))}}),R=`<template>
  <Statistic size="mini" value="2,204" label="Views" />
  <Statistic size="tiny" value="2,204" label="Views" />
  <Statistic size="small" value="2,204" label="Views" />
  <Statistic value="2,204" label="Views" />
  <Statistic size="large" value="2,204" label="Views" />
  <Statistic size="huge" value="2,204" label="Views" />
</template>`,Y=n({__name:"SizeDoc",setup(r){return(o,c)=>(s(),u(d,{label:"Size",code:R},{description:a(()=>[i(" A statistic can vary in size ")]),example:a(()=>[e(t(l),{size:"mini",value:"2,204",label:"Views"}),e(t(l),{size:"tiny",value:"2,204",label:"Views"}),e(t(l),{size:"small",value:"2,204",label:"Views"}),e(t(l),{value:"2,204",label:"Views"}),e(t(l),{size:"large",value:"2,204",label:"Views"}),e(t(l),{size:"huge",value:"2,204",label:"Views"})]),_:1}))}}),K={__name:"Statistic",setup(r){const o=[{id:"statistic",label:"Statistic",category:"Types",component:V},{id:"statistic-group",label:"Statistic Group",category:"Types",component:x},{id:"value",label:"Value",category:"Content",component:z},{id:"label",label:"Label",category:"Content",component:G},{id:"horizontal-statistic",label:"Horizontal Statistic",category:"Variations",component:L},{id:"colored",label:"Colored",category:"Variations",component:A},{id:"inverted",label:"Inverted",category:"Variations",component:I},{id:"evenly-divided",label:"Evenly Divided",category:"Variations",component:C},{id:"floated",label:"Floated",category:"Variations",component:E},{id:"size",label:"Size",category:"Variations",component:Y}];return(c,H)=>(s(),u(h,{title:"Statistic",description:"A statistic emphasizes the current value of an attribute","component-docs":o}))}};export{K as default};
