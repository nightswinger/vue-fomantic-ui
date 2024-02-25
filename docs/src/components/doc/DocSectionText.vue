<template>
  <SuiGridRow>
    <SuiGridColumn :width="15">
      <SuiHeader as="h3">
        {{ label }}
        <SuiHeaderSubheader>
          <slot></slot>
        </SuiHeaderSubheader>
      </SuiHeader>
    </SuiGridColumn>
    <SuiGridColumn textAlign="right" :width="1">
      <SuiIcon name="code" color="grey" link @click="onClick" />
    </SuiGridColumn>
  </SuiGridRow>
</template>

<script setup>
defineProps(['label', 'onClick'])
</script>
