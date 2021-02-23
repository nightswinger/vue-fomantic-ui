<template>
  <div>
    <doc-page-header
      title="Form"
      sub="A form displays a set of related user input fields in a structured way"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Form"
        description="A form"
        :code="formCode"
      >
        <sui-form>
          <sui-form-field
            label="First Name"
            placeholder="First Name"
          />
          <sui-form-field
            label="Last Name"
            placeholder="Last Name"
          />
          <sui-form-field>
            <sui-checkbox label="I agree to the Terms and Conditions" />
          </sui-form-field>
          <sui-button>Submit</sui-button>
        </sui-form>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Field"
        description="A field is a form element containing a label and an input"
        :code="fieldCode"
      >
        <sui-form>
          <sui-form-field
            label="Enter Password"
            type="password"
          />
        </sui-form>
      </doc-example>

      <doc-example
        title="Fields"
        description="A set of fields can appear grouped together"
        :code="fieldsCode"
      >
        <sui-form>
          <sui-form-group>
            <sui-form-field
              label="First name"
              placeholder="First Name"
            />
            <sui-form-field
              label="Middle name"
              placeholder="Middle Name"
            />
            <sui-form-field
              label="Last name"
              placeholder="Last Name"
            />
          </sui-form-group>
        </sui-form>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'FormDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const formCode = `<sui-form>
  <sui-form-field
    label="First Name"
    placeholder="First Name"
  />
  <sui-form-field
    label="Last Name"
    placeholder="Last Name"
  />
  <sui-form-field>
    <sui-checkbox label="I agree to the Terms and Conditions" />
  </sui-form-field>
  <sui-button>Submit</sui-button>
</sui-form>`

    const fieldCode = `<sui-form>
  <sui-form-field
    label="Enter Password"
    type="password"
  />
</sui-form>`

    const fieldsCode = `<sui-form>
  <sui-form-group>
    <sui-form-field
      label="First name"
      placeholder="First Name"
    />
    <sui-form-field
      label="Middle name"
      placeholder="Middle Name"
    />
    <sui-form-field
      label="Last name"
      placeholder="Last Name"
    />
  </sui-form-group>
</sui-form>`

    return {
      formCode,
      fieldCode,
      fieldsCode
    }
  }
})
</script>