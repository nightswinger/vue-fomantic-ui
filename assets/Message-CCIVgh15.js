import{o as i,c as r,w as a,a as s,b as e,u as t,a8 as o,e as d,K as p,L as u,k as h,a6 as _,T as g,a5 as b,C as y,d as f,D as w}from"./index-BLRrc4sh.js";import{_ as m}from"./DocSection-Da03Tz-a.js";const v=`<template>
  <Message
    header="Changes in Service"
    content="We updated our privacy policy here to better service our customers. We recommend reviewing the changes."
  />
</template>`,M={__name:"MessageDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Message",code:v},{description:a(()=>[s(" A basic message ")]),example:a(()=>[e(t(o),{header:"Changes in Service",content:"We updated our privacy policy here to better service our customers. We recommend reviewing the changes."})]),_:1}))}},x=`<template>
  <Message
    header="New Site Features"
    :list="[
      'You can now have cover images on blog pages',
      'Drafts will now auto-save while writing'
    ]"
  />
</template>`,$=d({__name:"ListMessageDoc",setup(l){return(c,n)=>(i(),r(m,{label:"List Message",code:x},{description:a(()=>[s(" A message with a list ")]),example:a(()=>[e(t(o),{header:"New Site Features",list:["You can now have cover images on blog pages","Drafts will now auto-save while writing"]})]),_:1}))}}),T=`<template>
  <Message
    icon="inbox"
    header="Have you heard about our mailing list?"
    content="Get the best news in your e-mail every day."
  />
  <Message
    icon
    header="Just one second"
    content="We're fetching that content for you.">
    <Icon name="notched circle loading" />
  </Message>
</template>`,F=d({__name:"IconMessageDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Icon Message",code:T},{description:a(()=>[s(" A message can contain an icon. ")]),example:a(()=>[e(t(o),{icon:"inbox",header:"Have you heard about our mailing list?",content:"Get the best news in your e-mail every day."}),e(t(o),{icon:"",header:"Just one second",content:"We're fetching that content for you."},{default:a(()=>[e(t(p),{name:"notched circle loading"})]),_:1})]),_:1}))}}),A=`<template>
  <Message
    header="Welcome back!"
    content="This is a special notification which you can dismiss if you're bored with it."
    closable
    @close="() => console.log('Message closed')"
  />
</template>`,D=d({__name:"DismissableBlockDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Dismissable Block",code:A},{description:a(()=>[s(" A message that the user can choose to hide ")]),example:a(()=>[e(t(o),{header:"Welcome back!",content:"This is a special notification which you can dismiss if you're bored with it.",closable:"",onClose:n[0]||(n[0]=()=>console.log("Message closed"))})]),_:1}))}}),V=`<template>
  <Message
    hidden
    content="You can't see me"
  />
</template>`,W=d({__name:"HiddenDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Hidden",code:V},{description:a(()=>[s(" A message can be hidden ")]),example:a(()=>[e(t(o),{hidden:"",content:"You can't see me"})]),_:1}))}}),k=`<template>
  <Message
    visible
    content="You can always see me"
  />
</template>`,N=d({__name:"VisibleDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Visible",code:k},{description:a(()=>[s(" A message can be set to visible to force itself to be shown. ")]),example:a(()=>[e(t(o),{visible:"",content:"You can always see me"})]),_:1}))}}),Y=`<template>
  <Message
    aligned="center"
    hedaer="New Version is available!"
    content="When are you going to update?"
  />
  <Message
    aligned="right"
    hedaer="New Version is available!"
    content="When are you going to update?"
  />
</template>`,z=d({__name:"AlignedDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Aligned",code:Y},{description:a(()=>[s(" A message can be displayed center or right aligned ")]),example:a(()=>[e(t(o),{aligned:"center",header:"New Version is available!",content:"When are you going to update?"}),e(t(o),{aligned:"right",header:"New Version is available!",content:"When are you going to update?"})]),_:1}))}}),S=`<template>
  <Message
    floating
    content="Way to go!"
  />
</template>`,C=d({__name:"FloatingDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Floating",code:S},{description:a(()=>[s(" A message can float above content that it is related to ")]),example:a(()=>[e(t(o),{floating:"",content:"Way to go!"})]),_:1}))}}),B=`<template>
  <Message
    compact
    content="Get all the best inventions in your e-mail every day. Sign up now!"
  />
</template>`,G=d({__name:"CompactDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Compact",code:B},{description:a(()=>[s(" A message can only take up the width of its content. ")]),example:a(()=>[e(t(o),{compact:"",content:"Get all the best inventions in your e-mail every day. Sign up now!"})]),_:1}))}}),I=f("a",{href:"#"},"Login here",-1),L=`<template>
  <Message
    attached
    header="Welcome to our site!"
    content="Fill out the form below to sign-up for a new account"
  />
  <Segment attached>
    <Form>
      <FormGroup widths="equal">
        <FormField label="First Name" placeholder="First Name" />
        <FormField label="Last Name" placeholder="Last Name" />
      </FormGroup>
      <FormField label="Username" placeholder="Username" />
      <FormField label="Password" type="password" placeholder="Password" />
      <FormField>
        <Checkbox label="I agree to the Terms and Conditions" />
      </FormField>
      <Button primary>Submit</Button>
    </Form>
  </Segment>
  <Message warning attached="bottom">
    <Icon name="help" />
    Already signed up? <a href="#">Login here</a> instead.
  </Message>
</template>`,P=d({__name:"AttachedDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Attached",code:L},{description:a(()=>[s(" A message can be formatted to attach itself to other content ")]),example:a(()=>[e(t(o),{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),e(t(u),{attached:""},{default:a(()=>[e(t(h),null,{default:a(()=>[e(t(_),{widths:"equal"},{default:a(()=>[e(t(g),{label:"First Name",placeholder:"First Name"}),e(t(g),{label:"Last Name",placeholder:"Last Name"})]),_:1}),e(t(g),{label:"Username",placeholder:"Username"}),e(t(g),{label:"Password",type:"password",placeholder:"Password"}),e(t(g),null,{default:a(()=>[e(t(b),{label:"I agree to the Terms and Conditions"})]),_:1}),e(t(y),{primary:""},{default:a(()=>[s("Submit")]),_:1})]),_:1})]),_:1}),e(t(o),{warning:"",attached:"bottom"},{default:a(()=>[e(t(p),{name:"help"}),s(" Already signed up? "),I,s(" instead. ")]),_:1})]),_:1}))}}),H=`<template>
  <Message
    warning
    header="You must register before you can do that!"
    content="Visit our registration page, then try again"
    closable
  />
</template>`,O=d({__name:"WarningDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Warning",code:H},{description:a(()=>[s(" A message may be formatted to display warning messages. ")]),example:a(()=>[e(t(o),{warning:"",header:"You must register before you can do that!",content:"Visit our registration page, then try again",closable:""})]),_:1}))}}),U=`<template>
  <Message
    info
    header="Was this what you wanted?"
    :list="[
      'It's good to see you again.',
      'Did you know it's been a while?'
    ]"
    closable
  />
</template>`,E=d({__name:"InfoDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Info",code:U},{description:a(()=>[s(" A message may be formatted to display information. ")]),example:a(()=>[e(t(o),{info:"",header:"Was this what you wanted?",list:["It's good to see you again.","Did you know it's been a while?"],closable:""},null,8,["list"])]),_:1}))}}),q=`<template>
  <Message
    positive
    header="You are eligible for a reward"
    content="Go to your special offers page to see now."
    closable
  />
  <Message
    success
    header="Your user registration was successful."
    content="You may now log-in with the username you have chosen"
    closable
  />
</template>`,J=d({__name:"PositiveSuccessDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Positive / Success",code:q},{description:a(()=>[s(" A message may be formatted to display a positive message. ")]),example:a(()=>[e(t(o),{positive:"",header:"You are eligible for a reward",content:"Go to your special offers page to see now.",closable:""}),e(t(o),{success:"",header:"Your user registration was successful.",content:"You may now log-in with the username you have chosen",closable:""})]),_:1}))}}),R=`<template>
  <Message
    negative
    header="We're sorry we can't apply that discount"
    content="That offer has expired"
    closable
  />
  <Message
    error
    header="There were some errors with your submission"
    :list="[
      'You must include both a upper and lower case letters in your password.',
      'You need to select your home country.'
    ]"
    closable
  />
</template>`,K=d({__name:"NegativeErrorDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Negative / Error",code:R},{description:a(()=>[s(" A message may be formatted to display a negative message. ")]),example:a(()=>[e(t(o),{negative:"",header:"We're sorry we can't apply that discount",content:"That offer has expired",closable:""}),e(t(o),{error:"",header:"There were some errors with your submission",list:["You must include both a upper and lower case letters in your password.","You need to select your home country."],closable:""},null,8,["list"])]),_:1}))}}),j=`<template>
  <Message color="red" content="Red"/>
  <Message color="orange" content="Orange"/>
  <Message color="yellow" content="Yellow"/>
  <Message color="olive" content="Olive"/>
  <Message color="green" content="Green"/>
  <Message color="teal" content="Teal"/>
  <Message color="blue" content="Blue"/>
  <Message color="violet" content="Violet"/>
  <Message color="purple" content="Purple"/>
  <Message color="pink" content="Pink"/>
  <Message color="brown" content="Brown"/>
  <Message color="grey" content="Grey"/>
  <Message color="black" content="Black"/>
</template>`,Q=d({__name:"ColoredDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Colored",code:j},{description:a(()=>[s(" A message can be formatted to be different colors ")]),example:a(()=>[e(t(o),{color:"red",content:"Red"}),e(t(o),{color:"orange",content:"Orange"}),e(t(o),{color:"yellow",content:"Yellow"}),e(t(o),{color:"olive",content:"Olive"}),e(t(o),{color:"green",content:"Green"}),e(t(o),{color:"teal",content:"Teal"}),e(t(o),{color:"blue",content:"Blue"}),e(t(o),{color:"violet",content:"Violet"}),e(t(o),{color:"purple",content:"Purple"}),e(t(o),{color:"pink",content:"Pink"}),e(t(o),{color:"brown",content:"Brown"}),e(t(o),{color:"grey",content:"Grey"}),e(t(o),{color:"black",content:"Black"})]),_:1}))}}),X=`<template>
  <Message size="mini" content="This is a mini message." />
  <Message size="tiny" content="This is a tiny message." />
  <Message size="small" content="This is a small message." />
  <Message size="large" content="This is a large message." />
  <Message size="big" content="This is a big message." />
  <Message size="huge" content="This is a huge message." />
  <Message size="massive" content="This is a massive message." />
</template>`,Z=d({__name:"SizeDoc",setup(l){return(c,n)=>(i(),r(m,{label:"Size",code:X},{description:a(()=>[s(" A message can have different sizes ")]),example:a(()=>[e(t(o),{size:"mini",content:"This is a mini message."}),e(t(o),{size:"tiny",content:"This is a tiny message."}),e(t(o),{size:"small",content:"This is a small message."}),e(t(o),{size:"large",content:"This is a large message."}),e(t(o),{size:"big",content:"This is a big message."}),e(t(o),{size:"huge",content:"This is a huge message."}),e(t(o),{size:"massive",content:"This is a massive message."})]),_:1}))}}),ae={__name:"Message",setup(l){const c=[{id:"message",label:"Message",category:"Types",component:M},{id:"list-message",label:"List Message",category:"Types",component:$},{id:"icon-message",label:"Icon Message",category:"Types",component:F},{id:"dismissable-block",label:"Dismissable Block",category:"Types",component:D},{id:"hidden",label:"Hidden",category:"States",component:W},{id:"visible",label:"Visible",category:"States",component:N},{id:"aligned",label:"Aligned",category:"Variations",component:z},{id:"floating",label:"Floating",category:"Variations",component:C},{id:"compact",label:"Compact",category:"Variations",component:G},{id:"attached",label:"Attached",category:"Variations",component:P},{id:"warning",label:"Warning",category:"Variations",component:O},{id:"info",label:"Info",category:"Variations",component:E},{id:"positive-success",label:"Positive / Success",category:"Variations",component:J},{id:"negative-error",label:"Negative / Error",category:"Variations",component:K},{id:"colored",label:"Colored",category:"Variations",component:Q},{id:"size",label:"Size",category:"Variations",component:Z}];return(n,ee)=>(i(),r(w,{title:"Message",description:"A message displays information that explains nearby content","component-docs":c}))}};export{ae as default};
