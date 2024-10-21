<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A feed's color can be inverted
    </template>
    <template #example>
      <Segment inverted>
        <Feed inverted>
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
          <FeedEvent>
            <template #label>
              <img src="/images/avatar/small/jenny.jpg">
            </template>
            <template #summary>
              <a class="user">
                Jenny Hess
              </a> added you as a friend
              <div class="date">
                2 days ago
              </div>
            </template>
            <template #meta>
              <a class="like">
                <i class="like icon"></i> 8 Likes
              </a>
            </template>
          </FeedEvent>
          <FeedEvent>
            <template #label>
              <img src="/images/avatar/small/joe.jpg">
            </template>
            <template #summary>
              <a>Joe Henderson</a> posted on his page
              <div class="date">
                3 days ago
              </div>
            </template>
            <template #extraText>
              Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
            </template>
            <template #meta>
              <a class="like">
                <i class="like icon"></i> 5 Likes
              </a>
            </template>
          </FeedEvent>
          <FeedEvent>
            <template #label>
              <img src="/images/avatar/small/justen.jpg">
            </template>
            <template #summary>
              <a>Justen Kitsune</a> added <a>2 new photos</a> of you
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
                <i class="like icon"></i> 41 Like
              </a>
            </template>
          </FeedEvent>
        </Feed>
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  Feed,
  FeedEvent,
  Segment,
} from 'vue-fomantic-ui'

const code = `<template>
  <Segment inverted>
    <Feed inverted>
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
      <FeedEvent>
        <template #label>
          <img src="/images/avatar/small/jenny.jpg">
        </template>
        <template #summary>
          <a class="user">
            Jenny Hess
          </a> added you as a friend
          <div class="date">
            2 days ago
          </div>
        </template>
        <template #meta>
          <a class="like">
            <i class="like icon"></i> 8 Likes
          </a>
        </template>
      </FeedEvent>
      <FeedEvent>
        <template #label>
          <img src="/images/avatar/small/joe.jpg">
        </template>
        <template #summary>
          <a>Joe Henderson</a> posted on his page
          <div class="date">
            3 days ago
          </div>
        </template>
        <template #extraText>
          Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
        </template>
        <template #meta>
          <a class="like">
            <i class="like icon"></i> 5 Likes
          </a>
        </template>
      </FeedEvent>
      <FeedEvent>
        <template #label>
          <img src="/images/avatar/small/justen.jpg">
        </template>
        <template #summary>
          <a>Justen Kitsune</a> added <a>2 new photos</a> of you
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
            <i class="like icon"></i> 41 Like
          </a>
        </template>
      </FeedEvent>
    </Feed>
  </Segment>
<\/template>`
</script>
