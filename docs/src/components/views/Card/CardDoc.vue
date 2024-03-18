<template>
  <DocSection label="Card" :code="code">
    <template #description>
      A single card.
    </template>
    <template #example>
      <Card>
        <Image src="/vue-fomantic-ui/images/avatar/large/kristy.png" />
        <CardContent header="Kristy">
          <template #meta>
            <span>Joined in 2013</span>
          </template>
          <template #description>
            Kristy is an art director living in New York.
          </template>
        </CardContent>
        <CardContent extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Image avatar src="/vue-fomantic-ui/images/avatar/large/elliot.jpg" />
          Elliot
          <template #meta>
            <span class="right floated">14h</span>
          </template>
        </CardContent>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
        <CardContent>
          <span class="right floated">
            <Icon name="heart outline like" />
            17 likes
          </span>
          <Icon name="comment" />
          3 comments
        </CardContent>
        <CardContent extra>
          <Input
            icon="heart outline"
            iconPosition="left"
            size="large"
            transparent
            placeholder="Add Comment..."
          />
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
  Icon,
  Image,
  Input,
} from 'vue-fomantic-ui'

const code = `<template>
  <Card>
    <Image src="/vue-fomantic-ui/images/avatar/large/kristy.png" />
    <CardContent header="Kristy">
      <template #meta>
        <span>Joined in 2013</span>
      </template>
      <template #description>
        Kristy is an art director living in New York.
      </template>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <Image avatar src="/vue-fomantic-ui/images/avatar/large/elliot.jpg" />
      Elliot
      <template #meta>
        <span class="right floated">14h</span>
      </template>
    </CardContent>
    <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    <CardContent>
      <span class="right floated">
        <Icon name="heart outline like" />
        17 likes
      </span>
      <Icon name="comment" />
      3 comments
    </CardContent>
    <CardContent extra>
      <Input
        icon="heart outline"
        iconPosition="left"
        size="large"
        transparent
        placeholder="Add Comment..."
      />
    </CardContent>
  </Card>
<\/template>`
</script>
