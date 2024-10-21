<template>
  <DocSection label="Divided" :code="code">
    <template #description>
      Items can be divided to better distinguish between grouped content
    </template>
    <template #example>
      <ItemGroup divided>
        <Item>
          <template #image>
            <img src="/images/wireframe/image.png">
          </template>
          <template #header>
            12 Years a Slave
          </template>
          <template #metadata>
            <span class="cinema">Union Square 14</span>
          </template>
          <template #description>
            <img src="/images/wireframe/short-paragraph.png">
          </template>
          <template #extra>
            <div class="ui label">IMAX</div>
            <div class="ui label"><i class="globe icon"></i> Additional Languages</div>
          </template>
        </Item>
        <Item>
          <template #image>
            <img src="/images/wireframe/image.png">
          </template>
          <template #header>
            My Neighbor Totoro
          </template>
          <template #metadata>
            <span class="cinema">IFC Cinema</span>
          </template>
          <template #description>
            <img src="/images/wireframe/short-paragraph.png">
          </template>
          <template #extra>
            <Button primary floated="right">
              Buy tickets
              <Icon name="right chevron" />
            </Button>
            <Label>Limited</Label>
          </template>
        </Item>
        <Item>
          <template #image>
            <img src="/images/wireframe/image.png">
          </template>
          <template #header>
            Watchmen
          </template>
          <template #metadata>
            <span class="cinema">IFC</span>
          </template>
          <template #description>
            <img src="/images/wireframe/short-paragraph.png">
          </template>
          <template #extra>
            <Button primary floated="right">
              Buy tickets
              <Icon name="right chevron" />
            </Button>
          </template>
        </Item>
      </ItemGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Item, ItemGroup, Button, Label, Icon } from 'vue-fomantic-ui'

const code = `<template>
  <ItemGroup divided>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        12 Years a Slave
      </template>
      <template #metadata>
        <span class="cinema">Union Square 14</span>
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        <div class="ui label">IMAX</div>
        <div class="ui label"><i class="globe icon"></i> Additional Languages</div>
      </template>
    </Item>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        My Neighbor Totoro
      </template>
      <template #metadata>
        <span class="cinema">IFC Cinema</span>
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        <Button primary floated="right">
          Buy tickets
          <Icon name="right chevron" />
        </Button>
        <Label>Limited</Label>
      </template>
    </Item>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        Watchmen
      </template>
      <template #metadata>
        <span class="cinema">IFC</span>
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        <Button primary floated="right">
          Buy tickets
          <Icon name="right chevron" />
        </Button>
      </template>
    </Item>
  </ItemGroup>
<\/template>`
</script>
