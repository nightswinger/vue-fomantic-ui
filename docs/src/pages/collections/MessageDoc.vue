<template>
  <div>
    <doc-page-header
     title="Message"
     sub="A message displays information that explains nearby content"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Message"
        description="A basic message"
        :code="messageCode"
      >
        <sui-message>
          <sui-message-header>Changes in Service</sui-message-header>
          <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
        </sui-message>
      </doc-example>

      <doc-example
        title="List Message"
        description="A message with a list"
        :code="listMessageCode"
      >
        <sui-message>
          <sui-message-header>New Site Features</sui-message-header>
          <sui-message-list>
            <sui-message-item>You can now have cover images on blog pages</sui-message-item>
            <sui-message-item>Drafts will now auto-save while writing</sui-message-item>
          </sui-message-list>
        </sui-message>
      </doc-example>

      <doc-example
        title="Icon Message"
        description="A message can contain an icon"
        :code="iconMessageCode"
      >
        <sui-message icon>
          <sui-icon name="inbox" />
          <sui-message-content>
            <sui-message-header>
              Have you heard about our mailing list?
            </sui-message-header>
            <p>Get the best news in your e-mail every day.</p>
          </sui-message-content>
        </sui-message>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Hidden"
        description="A message can be hidden"
        :code="hiddenCode"
      >
        <sui-message hidden>
          <p>You can't see me</p>
        </sui-message>
      </doc-example>

      <doc-example
        title="Visible"
        description="A message can be set to visible to force itself to be shown"
        :code="visibleCode"
      >
        <sui-message visible>
          <p>You can always see me</p>
        </sui-message>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Floating"
        description="A message can float above content that it is related to"
        :code="floatingCode"
      >
        <sui-message floating>
          <p>Way to go!</p>
        </sui-message>
      </doc-example>

      <doc-example
        title="Compact"
        description="A message can only take up the width of its content"
        :code="compactCode"
      >
        <sui-message compact>
          <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
        </sui-message>
      </doc-example>

      <doc-example
        title="Attached"
        description="A message can be formatted to attach itself to other content"
        :code="attachedCode"
      >
        <div>
          <sui-message
            attached
            header="Welcome to our site!"
            content="Fill out the form below to sign-up for a new account"
          />
          <sui-form class="attached fluid segment">
            <sui-form-group widths="equal">
              <sui-form-field
                label="First Name"
                placeholder="First Name"
              />
              <sui-form-field
                label="Last Name"
                placeholder="Last Name"
              />
            </sui-form-group>
            <sui-form-field label="Username" placeholder="Username" />
            <sui-form-field label="Password" placeholder="Password" />
            <sui-button color="primary">Submit</sui-button>
          </sui-form>
          <sui-message attached="bottom" warning>
            <sui-icon name="help" />
            Already signed up? <a href="#">Login here</a> instead.
          </sui-message>
        </div>
      </doc-example>

      <doc-example
        title="Warning"
        description="A message may be formatted to display warning messages"
        :code="warningCode"
      >
        <sui-message warning>
          <sui-icon name="close" />
          <sui-message-header>
            You must register before you can do that!
          </sui-message-header>
          Visit our registration page, then try again
        </sui-message>
      </doc-example>

      <doc-example
        title="Info"
        description="A message may be formatted to display information"
        :code="infoCode"
      >
        <sui-message info>
          <sui-message-header>Was this what you wanted?</sui-message-header>
          <sui-message-list>It's good to see you again.</sui-message-list>
          <sui-message-list>Did you know it's been a while?</sui-message-list>
        </sui-message>
      </doc-example>

      <doc-example
        title="Positive / Success"
        description="A message may be formatted to display a positive message"
        :code="positiveSuccessCode"
      >
        <sui-message positive>
          <sui-message-header>You are eligible for a reward</sui-message-header>
          <p>Go to your <b>special offers</b> page to see now.</p>
        </sui-message>
      </doc-example>

      <doc-example
        title="Negative / Error"
        description="A message may be formatted to display a negative message"
        :code="negativeErrorCode"
      >
        <sui-message negative>
          <sui-icon name="close" />
          <sui-message-header>We're sorry we can't apply that discount</sui-message-header>
          <p>That offer has expired</p>
        </sui-message>
      </doc-example>

      <doc-example
        title="Colored"
        description="A message can be formatted to be different colors"
        :code="coloredCode"
      >
        <div>
          <sui-message color="red">Red</sui-message>
          <sui-message color="orange">Orange</sui-message>
          <sui-message color="yellow">Yellow</sui-message>
          <sui-message color="olive">Olive</sui-message>
          <sui-message color="green">Green</sui-message>
          <sui-message color="teal">Teal</sui-message>
          <sui-message color="blue">Blue</sui-message>
          <sui-message color="violet">Violet</sui-message>
          <sui-message color="purple">Purple</sui-message>
          <sui-message color="pink">Pink</sui-message>
          <sui-message color="brown">Brown</sui-message>
          <sui-message color="black">Black</sui-message>
        </div>
      </doc-example>

      <doc-example
        title="Size"
        description="A message can have different sizes"
        :code="sizeCode"
      >
        <div>
          <sui-message size="mini">This is a mini message.</sui-message>
          <sui-message size="large">This is a large message.</sui-message>
          <sui-message size="massive">This is a massive message.</sui-message>
        </div>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'MessageDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const messageCode = `<sui-message>
  <sui-message-header>Changes in Service</sui-message-header>
  <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
</sui-message>`

    const listMessageCode = `<sui-message>
  <sui-message-header>New Site Features</sui-message-header>
  <sui-message-list>
    <sui-message-item>You can now have cover images on blog pages</sui-message-item>
    <sui-message-item>Drafts will now auto-save while writing</sui-message-item>
  </sui-message-list>
</sui-message>`

    const iconMessageCode = `<sui-message icon>
  <sui-icon name="inbox" />
  <sui-message-content>
    <sui-message-header>
      Have you heard about our mailing list?
    </sui-message-header>
    <p>Get the best news in your e-mail every day.</p>
  </sui-message-content>
</sui-message>`

    const hiddenCode = `<sui-message hidden>
  <p>You can't see me</p>
</sui-message>`

    const visibleCode = `<sui-message visible>
  <p>You can always see me</p>
</sui-message>`

    const floatingCode = `<sui-message floating>
  <p>Way to go!</p>
</sui-message>`

    const compactCode = `<sui-message compact>
  <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
</sui-message>`

    const attachedCode = `<div>
  <sui-message
    attached
    header="Welcome to our site!"
    content="Fill out the form below to sign-up for a new account"
  />
  <sui-form class="attached fluid segment">
    <sui-form-group widths="equal">
      <sui-form-field
        label="First Name"
        placeholder="First Name"
      />
      <sui-form-field
        label="Last Name"
        placeholder="Last Name"
      />
    </sui-form-group>
    <sui-form-field label="Username" placeholder="Username" />
    <sui-form-field label="Password" placeholder="Password" />
    <sui-button color="primary">Submit</sui-button>
  </sui-form>
  <sui-message attached="bottom" warning>
    <sui-icon name="help" />
    Already signed up? <a href="#">Login here</a> instead.
  </sui-message>
</div>`

    const warningCode = `<sui-message warning>
  <sui-icon name="close" />
  <sui-message-header>
    You must register before you can do that!
  </sui-message-header>
  Visit our registration page, then try again
</sui-message>`

    const infoCode = `<sui-message info>
  <sui-message-header>Was this what you wanted?</sui-message-header>
  <sui-message-list>It's good to see you again.</sui-message-list>
  <sui-message-list>Did you know it's been a while?</sui-message-list>
</sui-message>`

    const positiveSuccessCode = `<sui-message positive>
  <sui-message-header>You are eligible for a reward</sui-message-header>
  <p>Go to your <b>special offers</b> page to see now.</p>
</sui-message>`

    const negativeErrorCode = `<sui-message negative>
  <sui-icon name="close" />
  <sui-message-header>We're sorry we can't apply that discount</sui-message-header>
  <p>That offer has expired</p>
</sui-message>`

    const coloredCode = `<div>
  <sui-message color="red">Red</sui-message>
  <sui-message color="orange">Orange</sui-message>
  <sui-message color="yellow">Yellow</sui-message>
  <sui-message color="olive">Olive</sui-message>
  <sui-message color="green">Green</sui-message>
  <sui-message color="teal">Teal</sui-message>
  <sui-message color="blue">Blue</sui-message>
  <sui-message color="violet">Violet</sui-message>
  <sui-message color="purple">Purple</sui-message>
  <sui-message color="pink">Pink</sui-message>
  <sui-message color="brown">Brown</sui-message>
  <sui-message color="black">Black</sui-message>
</div>`

    const sizeCode = `<div>
  <sui-message size="mini">This is a mini message.</sui-message>
  <sui-message size="large">This is a large message.</sui-message>
  <sui-message size="massive">This is a massive message.</sui-message>
</div>`

    return {
      messageCode,
      listMessageCode,
      iconMessageCode,
      hiddenCode,
      visibleCode,
      floatingCode,
      compactCode,
      attachedCode,
      warningCode,
      infoCode,
      positiveSuccessCode,
      negativeErrorCode,
      coloredCode,
      sizeCode
    }
  }
})
</script>