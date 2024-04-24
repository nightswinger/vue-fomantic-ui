import{o as r,c as n,w as t,a as o,b as e,u as a,g as m,F as l,a5 as F,O as d,a6 as b,a7 as _,a8 as p,D as S}from"./index-CkjYuHEF.js";import{_ as u}from"./DocSection-CsIhdegC.js";const h=`<template>
  <SuiForm>
    <SuiFormField
      label="First Name"
      placeholder="First Name"
    />
    <SuiFormField
      label="Last Name"
      placeholder="Last Name"
    />
    <SuiFormField>
      <SuiCheckbox label="I agree to the Terms and Conditions" />
    </SuiFormField>
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,f={__name:"FormDoc",setup(s){return(i,c)=>(r(),n(u,{label:"Form",code:h},{description:t(()=>[o(" A Form ")]),example:t(()=>[e(a(m),null,{default:t(()=>[e(a(l),{label:"First Name",placeholder:"First Name"}),e(a(l),{label:"Last Name",placeholder:"Last Name"}),e(a(l),null,{default:t(()=>[e(a(F),{label:"I agree to the Terms and Conditions"})]),_:1}),e(a(d),{type:"submit"},{default:t(()=>[o("Submit")]),_:1})]),_:1})]),_:1}))}},y=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,g={__name:"FieldDoc",setup(s){return(i,c)=>(r(),n(u,{label:"Field",code:y},{description:t(()=>[o(" A field is a form element containing a label and an input ")]),example:t(()=>[e(a(m),null,{default:t(()=>[e(a(l),{label:"User Input"})]),_:1})]),_:1}))}},x=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,w={__name:"FieldsDoc",setup(s){return(i,c)=>(r(),n(u,{label:"Fields",code:x},{description:t(()=>[o(" A set of fields can appear grouped together ")]),example:t(()=>[e(a(m),null,{default:t(()=>[e(a(b),null,{default:t(()=>[e(a(l),{label:"First Name"}),e(a(l),{label:"Middle Name"}),e(a(l),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},$=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,D={__name:"TextAreaDoc",setup(s){return(i,c)=>(r(),n(u,{label:"TextArea",code:$},{description:t(()=>[o(" A textarea can be used to allow for extended user input. ")]),example:t(()=>[e(a(m),null,{default:t(()=>[e(a(_),{label:"Text"}),e(a(_),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},N=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,T={__name:"LoadingDoc",setup(s){return(i,c)=>(r(),n(u,{label:"Loading",code:N},{description:t(()=>[o(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:t(()=>[e(a(m),{loading:""},{default:t(()=>[e(a(l),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),e(a(d),{type:"submit"},{default:t(()=>[o("Submit")]),_:1})]),_:1})]),_:1}))}},k=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,B={__name:"SuccessDoc",setup(s){return(i,c)=>(r(),n(u,{label:"Success",code:k},{description:t(()=>[o(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:t(()=>[e(a(m),{success:""},{default:t(()=>[e(a(l),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),e(a(p),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),e(a(d),{type:"submit"},{default:t(()=>[o("Submit")]),_:1})]),_:1})]),_:1}))}},C=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,E={__name:"ErrorDoc",setup(s){return(i,c)=>(r(),n(u,{label:"Error",code:C},{description:t(()=>[o(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:t(()=>[e(a(m),{error:""},{default:t(()=>[e(a(l),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),e(a(p),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),e(a(d),{type:"submit"},{default:t(()=>[o("Submit")]),_:1})]),_:1})]),_:1}))}},L=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,A={__name:"WarningDoc",setup(s){return(i,c)=>(r(),n(u,{label:"Warning",code:L},{description:t(()=>[o(" If a form is in warning state, it will automatically show any warning message block. ")]),example:t(()=>[e(a(m),{warning:""},{default:t(()=>[e(a(l),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),e(a(p),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),e(a(d),{type:"submit"},{default:t(()=>[o("Submit")]),_:1})]),_:1})]),_:1}))}},I=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,j={__name:"DisabledDoc",setup(s){return(i,c)=>(r(),n(u,{label:"Disabled",code:I},{description:t(()=>[o(" Individual fields may be disabled ")]),example:t(()=>[e(a(m),null,{default:t(()=>[e(a(b),null,{default:t(()=>[e(a(l),{disabled:"",label:"First name",placeholder:"Read only"}),e(a(l),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},Y={__name:"Form",setup(s){const i=[{id:"form",label:"Form",category:"Types",component:f},{id:"field",label:"Field",category:"Content",component:g},{id:"fields",label:"Fields",category:"Content",component:w},{id:"textarea",label:"TextArea",category:"Content",component:D},{id:"loading",label:"Loading",category:"Form States",component:T},{id:"success",label:"Success",category:"Form States",component:B},{id:"error",label:"Error",category:"Form States",component:E},{id:"warning",label:"Warning",category:"Form States",component:A},{id:"disabled",label:"Disabled",category:"Field States",component:j}];return(c,v)=>(r(),n(S,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":i}))}};export{Y as default};
