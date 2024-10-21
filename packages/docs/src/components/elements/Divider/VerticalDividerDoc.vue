<template>
  <DocSection label="Vertical Divider" :code="code">
    <template #description>
      A divider can segment content vertically.
    </template>
    <template #example>
      <SuiSegment placeholder>
        <SuiGrid columns="equal">
          <SuiGridColumn>
            <SuiForm>
              <SuiFormField>
                <label>Username</label>
                <input type="text" placeholder="Username" />
              </SuiFormField>
              <SuiFormField>
                <label>Password</label>
                <input type="password" placeholder="Password" />
              </SuiFormField>
              <SuiButton primary>Login</SuiButton>
            </SuiForm>
          </SuiGridColumn>
          <SuiGridColumn textAlign="middle">
            <SuiButton secondary icon="signup" content="Sign Up" />
          </SuiGridColumn>
        </SuiGrid>
        <SuiDivider vertical>Or</SuiDivider>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiDivider,
  SuiButton,
  SuiForm,
  SuiFormField,
  SuiGrid,
  SuiGridColumn,
  SuiSegment,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment placeholder>
    <SuiGrid columns="equal">
      <SuiGridColumn>
        <SuiForm>
          <SuiFormField>
            <label>Username</label>
            <input type="text" placeholder="Username" />
          </SuiFormField>
          <SuiFormField>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </SuiFormField>
          <SuiButton primary>Login</SuiButton>
        </SuiForm>
      </SuiGridColumn>
      <SuiGridColumn textAlign="middle">
        <SuiButton secondary icon="signup" content="Sign Up" />
      </SuiGridColumn>
    </SuiGrid>
    <SuiDivider vertical>Or</SuiDivider>
  </SuiSegment>
</template>`
</script>
