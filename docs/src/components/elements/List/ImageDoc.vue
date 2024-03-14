<template>
  <DocSection label="Image" :code="code">
    <template #description>
      A list item can contain an image
    </template>
    <template #example>
      <SuiList>
        <SuiListItem>
          <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/rachel.png" />
          <SuiListContent>
            <SuiListHeader as="a">Rachel</SuiListHeader>
            <SuiListDescription>
              Last seen watching <a><b>Arrested Development</b></a> just now.
            </SuiListDescription>
          </SuiListContent>
        </SuiListItem>
        <SuiListItem>
          <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/lindsay.png" />
          <SuiListContent>
            <SuiListHeader as="a">Lindsay</SuiListHeader>
            <SuiListDescription>
              Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
            </SuiListDescription>
          </SuiListContent>
        </SuiListItem>
        <SuiListItem>
          <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/matthew.png" />
          <SuiListContent>
            <SuiListHeader as="a">Matthew</SuiListHeader>
            <SuiListDescription>
              Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
            </SuiListDescription>
          </SuiListContent>
        </SuiListItem>
        <SuiListItem>
          <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/jenny.jpg" />
          <SuiListContent>
            <SuiListHeader as="a">Jenny Hess</SuiListHeader>
            <SuiListDescription>
              Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.
            </SuiListDescription>
          </SuiListContent>
        </SuiListItem>
        <SuiListItem>
          <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/veronika.jpg" />
          <SuiListContent>
            <SuiListHeader as="a">Veronika Ossi</SuiListHeader>
            <SuiListDescription>
              Has not watched anything recently
            </SuiListDescription>
          </SuiListContent>
        </SuiListItem>
      </SuiList>
    </template>
  </DocSection>
</template>
  
<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiList,
  SuiListItem,
  SuiListContent,
  SuiListHeader,
  SuiListDescription,
  SuiImage,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiList>
    <SuiListItem>
      <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/rachel.png" />
      <SuiListContent>
        <SuiListHeader as="a">Rachel</SuiListHeader>
        <SuiListDescription>
          Last seen watching <a><b>Arrested Development</b></a> just now.
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem>
      <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/lindsay.png" />
      <SuiListContent>
        <SuiListHeader as="a">Lindsay</SuiListHeader>
        <SuiListDescription>
          Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem>
      <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/matthew.png" />
      <SuiListContent>
        <SuiListHeader as="a">Matthew</SuiListHeader>
        <SuiListDescription>
          Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem>
      <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/jenny.jpg" />
      <SuiListContent>
        <SuiListHeader as="a">Jenny Hess</SuiListHeader>
        <SuiListDescription>
          Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem>
      <SuiImage avatar src="/vue-fomantic-ui/images/avatar/small/veronika.jpg" />
      <SuiListContent>
        <SuiListHeader as="a">Veronika Ossi</SuiListHeader>
        <SuiListDescription>
          Has not watched anything recently
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
<\/template>`
</script>
