<template>
  <DocSection label="Content Block" :code="code">
    <template #description>
      A card can contain blocks of content
    </template>
    <template #example>
      <Card>
        <CardContent>
          <CardHeader>Project Timeline</CardHeader>
        </CardContent>
        <CardContent>
          <Header sub>Activity</Header>
          <Feed size="small">
            <FeedEvent>
              <template #summary>
                <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
              </template>
            </FeedEvent>
            <FeedEvent>
              <template #summary>
                <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
              </template>
            </FeedEvent>
            <FeedEvent>
              <template #summary>
                <a>Helen Troy</a> added two pictures
              </template>
            </FeedEvent>
          </Feed>
        </CardContent>
        <CardContent extra>
          <Button as="button">Join Project</Button>
        </CardContent>
      </Card>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Header,
  Feed,
  FeedEvent,
} from 'vue-fomantic-ui'

const code = `<template>
  <Card>
    <CardContent>
      <CardHeader>Project Timeline</CardHeader>
    </CardContent>
    <CardContent>
      <Header sub>Activity</Header>
      <Feed size="small">
        <FeedEvent>
          <template #summary>
            <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #summary>
            <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #summary>
            <a>Helen Troy</a> added two pictures
          </template>
        </FeedEvent>
      </Feed>
    </CardContent>
    <CardContent extra>
      <Button as="button">Join Project</Button>
    </CardContent>
  </Card>
<\/template>`
</script>
