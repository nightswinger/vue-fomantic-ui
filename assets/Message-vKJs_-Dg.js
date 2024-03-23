import{o as i,c as r,w as a,a as s,b as e,u as t,V as o,_ as d,d as m,e as p,v as u,J as h,t as _,f as g,g as b,A as y,h as f,D as w}from"./index-fNAjED_P.js";const v=`<template>
  <Message
    header="Changes in Service"
    content="We updated our privacy policy here to better service our customers. We recommend reviewing the changes."
  />
</template>`,M={__name:"MessageDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Message",code:v},{description:a(()=>[s(" A basic message ")]),example:a(()=>[e(t(o),{header:"Changes in Service",content:"We updated our privacy policy here to better service our customers. We recommend reviewing the changes."})]),_:1}))}},x=`<template>
  <Message
    header="New Site Features"
    :list="[
      'You can now have cover images on blog pages',
      'Drafts will now auto-save while writing'
    ]"
  />
</template>`,$=m({__name:"ListMessageDoc",setup(l){return(c,n)=>(i(),r(d,{label:"List Message",code:x},{description:a(()=>[s(" A message with a list ")]),example:a(()=>[e(t(o),{header:"New Site Features",list:["You can now have cover images on blog pages","Drafts will now auto-save while writing"]})]),_:1}))}}),T=`<template>
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
</template>`,A=m({__name:"IconMessageDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Icon Message",code:T},{description:a(()=>[s(" A message can contain an icon. ")]),example:a(()=>[e(t(o),{icon:"inbox",header:"Have you heard about our mailing list?",content:"Get the best news in your e-mail every day."}),e(t(o),{icon:"",header:"Just one second",content:"We're fetching that content for you."},{default:a(()=>[e(t(p),{name:"notched circle loading"})]),_:1})]),_:1}))}}),F=`<template>
  <Message
    header="Welcome back!"
    content="This is a special notification which you can dismiss if you're bored with it."
    closable
    @close="() => console.log('Message closed')"
  />
</template>`,V=m({__name:"DismissableBlockDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Dismissable Block",code:F},{description:a(()=>[s(" A message that the user can choose to hide ")]),example:a(()=>[e(t(o),{header:"Welcome back!",content:"This is a special notification which you can dismiss if you're bored with it.",closable:"",onClose:n[0]||(n[0]=()=>console.log("Message closed"))})]),_:1}))}}),D=`<template>
  <Message
    hidden
    content="You can't see me"
  />
</template>`,W=m({__name:"HiddenDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Hidden",code:D},{description:a(()=>[s(" A message can be hidden ")]),example:a(()=>[e(t(o),{hidden:"",content:"You can't see me"})]),_:1}))}}),k=`<template>
  <Message
    visible
    content="You can always see me"
  />
</template>`,N=m({__name:"VisibleDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Visible",code:k},{description:a(()=>[s(" A message can be set to visible to force itself to be shown. ")]),example:a(()=>[e(t(o),{visible:"",content:"You can always see me"})]),_:1}))}}),Y=`<template>
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
</template>`,z=m({__name:"AlignedDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Aligned",code:Y},{description:a(()=>[s(" A message can be displayed center or right aligned ")]),example:a(()=>[e(t(o),{aligned:"center",header:"New Version is available!",content:"When are you going to update?"}),e(t(o),{aligned:"right",header:"New Version is available!",content:"When are you going to update?"})]),_:1}))}}),S=`<template>
  <Message
    floating
    content="Way to go!"
  />
</template>`,C=m({__name:"FloatingDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Floating",code:S},{description:a(()=>[s(" A message can float above content that it is related to ")]),example:a(()=>[e(t(o),{floating:"",content:"Way to go!"})]),_:1}))}}),B=`<template>
  <Message
    compact
    content="Get all the best inventions in your e-mail every day. Sign up now!"
  />
</template>`,G=m({__name:"CompactDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Compact",code:B},{description:a(()=>[s(" A message can only take up the width of its content. ")]),example:a(()=>[e(t(o),{compact:"",content:"Get all the best inventions in your e-mail every day. Sign up now!"})]),_:1}))}}),I=f("a",{href:"#"},"Login here",-1),P=`<template>
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
</template>`,L=m({__name:"AttachedDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Attached",code:P},{description:a(()=>[s(" A message can be formatted to attach itself to other content ")]),example:a(()=>[e(t(o),{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),e(t(u),{attached:""},{default:a(()=>[e(t(h),null,{default:a(()=>[e(t(_),{widths:"equal"},{default:a(()=>[e(t(g),{label:"First Name",placeholder:"First Name"}),e(t(g),{label:"Last Name",placeholder:"Last Name"})]),_:1}),e(t(g),{label:"Username",placeholder:"Username"}),e(t(g),{label:"Password",type:"password",placeholder:"Password"}),e(t(g),null,{default:a(()=>[e(t(b),{label:"I agree to the Terms and Conditions"})]),_:1}),e(t(y),{primary:""},{default:a(()=>[s("Submit")]),_:1})]),_:1})]),_:1}),e(t(o),{warning:"",attached:"bottom"},{default:a(()=>[e(t(p),{name:"help"}),s(" Already signed up? "),I,s(" instead. ")]),_:1})]),_:1}))}}),H=`<template>
  <Message
    warning
    header="You must register before you can do that!"
    content="Visit our registration page, then try again"
    closable
  />
</template>`,J=m({__name:"WarningDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Warning",code:H},{description:a(()=>[s(" A message may be formatted to display warning messages. ")]),example:a(()=>[e(t(o),{warning:"",header:"You must register before you can do that!",content:"Visit our registration page, then try again",closable:""})]),_:1}))}}),O=`<template>
  <Message
    info
    header="Was this what you wanted?"
    :list="[
      'It's good to see you again.',
      'Did you know it's been a while?'
    ]"
    closable
  />
</template>`,U=m({__name:"InfoDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Info",code:O},{description:a(()=>[s(" A message may be formatted to display information. ")]),example:a(()=>[e(t(o),{info:"",header:"Was this what you wanted?",list:["It's good to see you again.","Did you know it's been a while?"],closable:""},null,8,["list"])]),_:1}))}}),E=`<template>
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
</template>`,q=m({__name:"PositiveSuccessDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Positive / Success",code:E},{description:a(()=>[s(" A message may be formatted to display a positive message. ")]),example:a(()=>[e(t(o),{positive:"",header:"You are eligible for a reward",content:"Go to your special offers page to see now.",closable:""}),e(t(o),{success:"",header:"Your user registration was successful.",content:"You may now log-in with the username you have chosen",closable:""})]),_:1}))}}),R=`<template>
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
</template>`,j=m({__name:"NegativeErrorDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Negative / Error",code:R},{description:a(()=>[s(" A message may be formatted to display a negative message. ")]),example:a(()=>[e(t(o),{negative:"",header:"We're sorry we can't apply that discount",content:"That offer has expired",closable:""}),e(t(o),{error:"",header:"There were some errors with your submission",list:["You must include both a upper and lower case letters in your password.","You need to select your home country."],closable:""},null,8,["list"])]),_:1}))}}),K=`<template>
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
</template>`,Q=m({__name:"ColoredDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Colored",code:K},{description:a(()=>[s(" A message can be formatted to be different colors ")]),example:a(()=>[e(t(o),{color:"red",content:"Red"}),e(t(o),{color:"orange",content:"Orange"}),e(t(o),{color:"yellow",content:"Yellow"}),e(t(o),{color:"olive",content:"Olive"}),e(t(o),{color:"green",content:"Green"}),e(t(o),{color:"teal",content:"Teal"}),e(t(o),{color:"blue",content:"Blue"}),e(t(o),{color:"violet",content:"Violet"}),e(t(o),{color:"purple",content:"Purple"}),e(t(o),{color:"pink",content:"Pink"}),e(t(o),{color:"brown",content:"Brown"}),e(t(o),{color:"grey",content:"Grey"}),e(t(o),{color:"black",content:"Black"})]),_:1}))}}),X=`<template>
  <Message size="mini" content="This is a mini message." />
  <Message size="tiny" content="This is a tiny message." />
  <Message size="small" content="This is a small message." />
  <Message size="large" content="This is a large message." />
  <Message size="big" content="This is a big message." />
  <Message size="huge" content="This is a huge message." />
  <Message size="massive" content="This is a massive message." />
</template>`,Z=m({__name:"SizeDoc",setup(l){return(c,n)=>(i(),r(d,{label:"Size",code:X},{description:a(()=>[s(" A message can have different sizes ")]),example:a(()=>[e(t(o),{size:"mini",content:"This is a mini message."}),e(t(o),{size:"tiny",content:"This is a tiny message."}),e(t(o),{size:"small",content:"This is a small message."}),e(t(o),{size:"large",content:"This is a large message."}),e(t(o),{size:"big",content:"This is a big message."}),e(t(o),{size:"huge",content:"This is a huge message."}),e(t(o),{size:"massive",content:"This is a massive message."})]),_:1}))}}),oe={__name:"Message",setup(l){const c=[{id:"message",label:"Message",category:"Types",component:M},{id:"list-message",label:"List Message",category:"Types",component:$},{id:"icon-message",label:"Icon Message",category:"Types",component:A},{id:"dismissable-block",label:"Dismissable Block",category:"Types",component:V},{id:"hidden",label:"Hidden",category:"States",component:W},{id:"visible",label:"Visible",category:"States",component:N},{id:"aligned",label:"Aligned",category:"Variations",component:z},{id:"floating",label:"Floating",category:"Variations",component:C},{id:"compact",label:"Compact",category:"Variations",component:G},{id:"attached",label:"Attached",category:"Variations",component:L},{id:"warning",label:"Warning",category:"Variations",component:J},{id:"info",label:"Info",category:"Variations",component:U},{id:"positive-success",label:"Positive / Success",category:"Variations",component:q},{id:"negative-error",label:"Negative / Error",category:"Variations",component:j},{id:"colored",label:"Colored",category:"Variations",component:Q},{id:"size",label:"Size",category:"Variations",component:Z}];return(n,ee)=>(i(),r(w,{title:"Message",description:"A message displays information that explains nearby content","component-docs":c}))}};export{oe as default};
