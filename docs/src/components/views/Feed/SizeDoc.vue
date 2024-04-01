<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A feed can have different sizes
    </template>
    <template #example>
      <Feed size="mini">
        <Header as="h4">Followers Activity</Header>
        <FeedEvent>
          <template #summary>
            <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #summary>
            <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #summary>
            <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #summary>
            <a>Christian Rocha</a> signed up for the  site.
          </template>
        </FeedEvent>
      </Feed>
      <Feed size="large">
        <FeedEvent>
          <template #label>
            <img src="/images/avatar/small/elliot.jpg">
          </template>
          <template #summary>
            <a class="user">
              Elliot Fu
            </a> added you as a friend
            <div class="date">
              1 hour ago
            </div>
          </template>
          <template #meta>
            <a class="like">
              <i class="like icon"></i> 4 Likes
            </a>
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #label>
            <img src="/images/avatar/small/helen.jpg">
          </template>
          <template #summary>
            <a>Helen Troy</a> added <a>2 new illustrations</a>
            <div class="date">
              4 days ago
            </div>
          </template>
          <template #extraImages>
            <a><img src="/images/wireframe/image.png"></a>
            <a><img src="/images/wireframe/image.png"></a>
          </template>
          <template #meta>
            <a class="like">
              <i class="like icon"></i> 1 Like
            </a>
          </template>
        </FeedEvent>
      </Feed>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  Feed,
  FeedEvent,
  Header,
} from 'vue-fomantic-ui'

const code = `<template>
  <Feed size="mini">
    <Header as="h4">Followers Activity</Header>
    <FeedEvent>
      <template #summary>
        <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #summary>
        <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #summary>
        <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #summary>
        <a>Christian Rocha</a> signed up for the  site.
      </template>
    </FeedEvent>
  </Feed>
  <Feed size="large">
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/elliot.jpg">
      </template>
      <template #summary>
        <a class="user">
          Elliot Fu
        </a> added you as a friend
        <div class="date">
          1 hour ago
        </div>
      </template>
      <template #meta>
        <a class="like">
          <i class="like icon"></i> 4 Likes
        </a>
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/helen.jpg">
      </template>
      <template #summary>
        <a>Helen Troy</a> added <a>2 new illustrations</a>
        <div class="date">
          4 days ago
        </div>
      </template>
      <template #extraImages>
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </template>
      <template #meta>
        <a class="like">
          <i class="like icon"></i> 1 Like
        </a>
      </template>
    </FeedEvent>
  </Feed>
<\/template>`
</script>
