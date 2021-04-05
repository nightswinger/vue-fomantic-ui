<template>
  <div>
    <doc-page-header
      title="Feed"
      sub="A feed presents user activity chronologically"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Feed"
        description="A feed"
        :code="feedCode"
      >
        <sui-feed>
          <sui-feed-event>
            <sui-feed-label>
              <img src="/images/avatar/small/elliot.jpg">
            </sui-feed-label>
            <sui-feed-content>
              <sui-feed-summary>
                <sui-feed-user>Elliot Fu</sui-feed-user> added you as a friend
                <sui-feed-date>1 Hour Ago</sui-feed-date>
              </sui-feed-summary>
              <sui-feed-meta>
                <sui-feed-like>
                  <sui-icon name="like" /> 4 Likes
                </sui-feed-like>
              </sui-feed-meta>
            </sui-feed-content>
          </sui-feed-event>
        </sui-feed>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Label"
        description="An event can contain an image or icon label"
        :code="labelCode"
      >
        <sui-feed>
          <sui-feed-event>
            <sui-feed-label>
              <img src="/images/avatar/small/elliot.jpg">
            </sui-feed-label>
            <sui-feed-content>
              You added Elliot Fu to the group <a>Coworkers</a>
            </sui-feed-content>
          </sui-feed-event>
        </sui-feed>
      </doc-example>

      <doc-example
        title="Date"
        description="An event or an event summary can contain a date"
        :code="dateCode"
      >
        <sui-feed>
          <sui-feed-event>
            <sui-feed-label>
              <img src="/images/avatar/small/jenny.jpg">
            </sui-feed-label>
            <sui-feed-content>
              <sui-feed-date>
                3 days ago
              </sui-feed-date>
              <sui-feed-summary>
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
              </sui-feed-summary>
            </sui-feed-content>
          </sui-feed-event>
        </sui-feed>
      </doc-example>

      <doc-example
        title="Additional information"
        description="An event can contain additional information like a set of images or text"
        :code="additionalInfoCode"
      >
        <sui-feed>
          <sui-feed-event>
            <sui-feed-label>
              <img src="/images/avatar/small/helen.jpg">
            </sui-feed-label>
            <sui-feed-content>
              <sui-feed-date>
                3 days ago
              </sui-feed-date>
              <sui-feed-summary>
                <a>Helen Troy</a> added 2 photos
              </sui-feed-summary>
              <sui-feed-extra images>
                <a><img src="/images/wireframe/image.png"></a>
                <a><img src="/images/wireframe/image.png"></a>
              </sui-feed-extra>
            </sui-feed-content>
          </sui-feed-event>
        </sui-feed>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Size"
        description="A feed can have different sizes"
        :code="sizeCode"
      >
        <sui-feed size="small">
          <sui-header as="h4">Followers Activity</sui-header>
          <sui-feed-event>
            <sui-feed-content>
              <sui-feed-summary>
                <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
              </sui-feed-summary>
            </sui-feed-content>
          </sui-feed-event>
          <sui-feed-event>
            <sui-feed-content>
              <sui-feed-summary>
                <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
              </sui-feed-summary>
            </sui-feed-content>
          </sui-feed-event>
          <sui-feed-event>
            <sui-feed-content>
              <sui-feed-summary>
                <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
              </sui-feed-summary>
            </sui-feed-content>
          </sui-feed-event>
        </sui-feed>
      </doc-example>

      <doc-example
        title="Inverted"
        description="A feed's color can be inverted"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-feed inverted>
            <sui-feed-event>
              <sui-feed-label>
                <img src="/images/avatar/small/elliot.jpg">
              </sui-feed-label>
              <sui-feed-content>
                <div class="date">Just now</div>
                <sui-feed-summary>
                  <a class="user">Elliot Fu</a> posted on his page
                </sui-feed-summary>
                <sui-feed-extra text>
                  Hey there !
                </sui-feed-extra>
              </sui-feed-content>
            </sui-feed-event>
          </sui-feed>
        </sui-segment>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'FeedDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const feedCode = `<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/elliot.jpg">
    </sui-feed-label>
    <sui-feed-content>
      <sui-feed-summary>
        <sui-feed-user>Elliot Fu</sui-feed-user> added you as a friend
        <sui-feed-date>1 Hour Ago</sui-feed-date>
      </sui-feed-summary>
      <sui-feed-meta>
        <sui-feed-like>
          <sui-icon name="like" /> 4 Likes
        </sui-feed-like>
      </sui-feed-meta>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`

    const labelCode = `<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/elliot.jpg">
    </sui-feed-label>
    <sui-feed-content>
      You added Elliot Fu to the group <a>Coworkers</a>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`

    const dateCode = `<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/jenny.jpg">
    </sui-feed-label>
    <sui-feed-content>
      <sui-feed-date>
        3 days ago
      </sui-feed-date>
      <sui-feed-summary>
        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`

    const additionalInfoCode = `<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/helen.jpg">
    </sui-feed-label>
    <sui-feed-content>
      <sui-feed-date>
        3 days ago
      </sui-feed-date>
      <sui-feed-summary>
        <a>Helen Troy</a> added 2 photos
      </sui-feed-summary>
      <sui-feed-extra images>
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </sui-feed-extra>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`

    const sizeCode = `<sui-feed size="small">
  <sui-header as="h4">Followers Activity</sui-header>
  <sui-feed-event>
    <sui-feed-content>
      <sui-feed-summary>
        <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
  <sui-feed-event>
    <sui-feed-content>
      <sui-feed-summary>
        <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
  <sui-feed-event>
    <sui-feed-content>
      <sui-feed-summary>
        <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`

    return {
      feedCode,
      labelCode,
      dateCode,
      additionalInfoCode,
      sizeCode
    }
  }
})
</script>