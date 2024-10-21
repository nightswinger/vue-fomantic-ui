<template>
  <DocSection label="Collapsed" :code="code">
    <template #description>
      Comments can be collapsed, or hidden from view
    </template>
    <template #example>
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/christian.jpg">
          </template>
          <template #author>Christian Rocha</template>
          <template #metadata>2 days ago</template>
          <template #text>
            I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
          </template>
          <template #actions>
            <a class="reply">Reply</a>
          </template>
          <CommentGroup collapsed>
            <Comment>
              <template #avatar>
                <img src="/images/avatar/small/elliot.jpg">
              </template>
              <template #author>Elliot Fu</template>
              <template #metadata>1 days ago</template>
              <template #text>
                No, it wont
              </template>
              <template #actions>
                <a class="reply">Reply</a>
              </template>
            </Comment>
          </CommentGroup>
        </Comment>
      </CommentGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { CommentGroup, Comment } from 'vue-fomantic-ui'

const code = `<template>
  <CommentGroup>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/christian.jpg">
      </template>
      <template #author>Christian Rocha</template>
      <template #metadata>2 days ago</template>
      <template #text>
        I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
      </template>
      <template #actions>
        <a class="reply">Reply</a>
      </template>
      <CommentGroup collapsed>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/elliot.jpg">
          </template>
          <template #author>Elliot Fu</template>
          <template #metadata>1 days ago</template>
          <template #text>
            No, it wont
          </template>
          <template #actions>
            <a class="reply">Reply</a>
          </template>
        </Comment>
      </CommentGroup>
    </Comment>
  </CommentGroup>
<\/template>`
</script>
