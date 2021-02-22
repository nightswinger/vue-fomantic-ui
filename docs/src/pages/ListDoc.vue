<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">List
            <sui-header-subheader>
              A list is used to group related content
            </sui-header-subheader>
          </sui-header>

          <sui-divider hidden />

          <sui-menu floated="right">
            <sui-menu-item as="a" icon>
              <sui-icon name="edit"></sui-icon>
            </sui-menu-item>
            <sui-menu-item as="a" icon>
              <sui-icon name="github"></sui-icon>
            </sui-menu-item>
          </sui-menu>
        </div>
      </sui-container>
    </sui-segment>

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="List"
        description="A list groups related content"
        :code="listCode"
      >
        <sui-list>
          <sui-list-item>Apples</sui-list-item>
          <sui-list-item>Pears</sui-list-item>
          <sui-list-item>Oranges</sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Bulleted"
        description="A list can mark items with a bullet"
        :code="bulletedCode"
      >
        <sui-list bulleted>
          <sui-list-item>Gaining Access</sui-list-item>
          <sui-list-item>Inviting Friends</sui-list-item>
          <sui-list-item>
            <div>Benefits</div>
            <div class="list">
              <sui-list-item as="a">Link to somewhere</sui-list-item>
              <sui-list-item>Rebates</sui-list-item>
              <sui-list-item>Discounts</sui-list-item>
            </div>
          </sui-list-item>
          <sui-list-item>Warranty</sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Ordered"
        description="A list can be ordered numerically"
        :code="orderedCode"
      >
        <sui-list ordered>
          <sui-list-item as="a">Getting Started</sui-list-item>
          <sui-list-item as="a">Introduction</sui-list-item>
          <sui-list-item>
            <a>Languages</a>
            <sui-list-list>
              <sui-list-item as="a">HTML</sui-list-item>
              <sui-list-item as="a">Javascript</sui-list-item>
              <sui-list-item as="a">CSS</sui-list-item>
            </sui-list-list>
          </sui-list-item>
          <sui-list-item as="a">Review</sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Link"
        description="A list can be specially formatted for navigation links"
        :code="linkCode"
      >
        <sui-list link>
          <sui-list-item active>Home</sui-list-item>
          <sui-list-item as="a">About</sui-list-item>
          <sui-list-item as="a">Jobs</sui-list-item>
          <sui-list-item as="a">Team</sui-list-item>
        </sui-list>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Item"
        description="A list item can contain a set of items"
        :code="itemCode"
      >
        <sui-list>
          <sui-list-item>1</sui-list-item>
          <sui-list-item>2</sui-list-item>
          <sui-list-item>3</sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Icon"
        description="A list item can contain an icon"
        :code="iconCode"
      >
        <sui-list>
          <sui-list-item as="a">
            <sui-icon name="help" />
            <sui-list-content>
              <sui-list-header>Floated Icon</sui-list-header>
              <sui-list-description>
                This text will always have a left margin to make sure it sits alongside your icon
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item as="a">
            <sui-icon name="right triangle" />
            <sui-list-content>
              <sui-list-header>Icon Alignment</sui-list-header>
              <sui-list-description>
                Floated icons are by default top aligned. To have an icon top aligned try this example
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-icon name="help" />
            Inline Text
          </sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Image"
        description="A list can contain an image"
        :code="imageContentCode"
      >
        <sui-list>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/rachel.png" />
            <sui-list-content>
              <sui-list-header>Rachel</sui-list-header>
              <sui-list-description>
                Last seen watching <a><b>Arrested Development</b></a> just now.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/lindsay.png" />
            <sui-list-content>
              <sui-list-header>Lindsay</sui-list-header>
              <sui-list-description>
                Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/matthew.png" />
            <sui-list-content>
              <sui-list-header>Matthew</sui-list-header>
              <sui-list-description>
                Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/jenny.jpg" />
            <sui-list-content>
              <sui-list-header>Jenny Hess</sui-list-header>
              <sui-list-description>
                Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/veronika.jpg" />
            <sui-list-content>
              <sui-list-header>Veronika Ossi</sui-list-header>
              <sui-list-description>
                Has not watched anything recently
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Link"
        description="A list can contain links"
        :code="linkContentCode"
      >
        <sui-list>
          <sui-list-item as="a">What is a FAQ?</sui-list-item>
          <sui-list-item as="a">Who is our user?</sui-list-item>
          <sui-list-item as="a">Where is our office located?</sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="header"
        description="A list item can contain a header"
        :code="headerContentCode"
      >
        <sui-list>
          <sui-list-item>
            <sui-list-header>New York City</sui-list-header>
            A lovely city
          </sui-list-item>
          <sui-list-item>
            <sui-list-header>Chicago</sui-list-header>
            Also quite a lovely city
          </sui-list-item>
          <sui-list-item>
            <sui-list-header>Los Angeles</sui-list-header>
            Sometimes can be a lovely city
          </sui-list-item>
          <sui-list-item>
            <sui-list-header>San Francisco</sui-list-header>
            What a lovely city
          </sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Description"
        description="A list item can contain a description"
        :code="descriptionContentCode"
      >
        <sui-list>
          <sui-list-item>
            <sui-icon name="map marker" />
            <sui-list-content>
              <sui-list-header as="a">Krolewskie Jadlo</sui-list-header>
              <sui-list-description>
                An excellent polish restaurant, quick delivery and hearty, filling meals.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-icon name="map marker" />
            <sui-list-content>
              <sui-list-header as="a">Xian Famous Foods</sui-list-header>
              <sui-list-description>
                A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-icon name="map marker" />
            <sui-list-content>
              <sui-list-header as="a">Sapporo Haru</sui-list-header>
              <sui-list-description>
                Greenpoint's best choice for quick and delicious sushi.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-icon name="map marker" />
            <sui-list-content>
              <sui-list-header as="a">Enid's</sui-list-header>
              <sui-list-description>
                At night a bar, during the day a delicious brunch spot.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Horizontal"
        description="A list can be formatted to have items appear horizontally"
        :code="horizontalVarCode"
      >
        <sui-list horizontal>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/tom.jpg" />
            <sui-list-content>
              <sui-list-header>Tom</sui-list-header>
              Top Contributor
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/christian.jpg" />
            <sui-list-content>
              <sui-list-header>Christian Rocha</sui-list-header>
              Admin
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/matt.jpg" />
            <sui-list-content>
              <sui-list-header>Matt</sui-list-header>
              Top Rated User
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Inverted"
        description="A list can be inverted to appear on a dark background"
        :code="invertedVarCode"
      >
        <sui-segment inverted>
          <sui-list inverted relaxed divided>
            <sui-list-item>
              <sui-list-content>
                <sui-list-header>Snickerdoodle</sui-list-header>
                An excellent companion
              </sui-list-content>
            </sui-list-item>
            <sui-list-item>
              <sui-list-content>
                <sui-list-header>Poodle</sui-list-header>
                A poodle, its pretty basic
              </sui-list-content>
            </sui-list-item>
            <sui-list-item>
              <sui-list-content>
                <sui-list-header>Paulo</sui-list-header>
                He's also a dog
              </sui-list-content>
            </sui-list-item>
          </sui-list>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Selection"
        description="A selection list formats list items as possible choices"
        :code="selectionVarCode"
      >
        <sui-list selection verticalAlign="middle">
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/helen.jpg" />
            <sui-list-content>
              <sui-list-header>Helen</sui-list-header>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/christian.jpg" />
            <sui-list-content>
              <sui-list-header>Christian</sui-list-header>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/daniel.jpg" />
            <sui-list-content>
              <sui-list-header>Daniel</sui-list-header>
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </doc-example>
      
      <doc-example
        title="Animated"
        description="A list can animate to set the current item apart from the list"
        :code="animatedVarCode"
      >
        <sui-list animated verticalAlign="middle">
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/helen.jpg" />
            <sui-list-content>
              <sui-list-header>Helen</sui-list-header>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/christian.jpg" />
            <sui-list-content>
              <sui-list-header>Christian</sui-list-header>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/daniel.jpg" />
            <sui-list-content>
              <sui-list-header>Daniel</sui-list-header>
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Relaxed"
        description="A list can relax its padding to provide more negative space"
        :code="relaxedVarCode"
      >
        <sui-list relaxed>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/daniel.jpg" />
            <sui-list-content>
              <sui-list-header as="a">Daniel Louise</sui-list-header>
              <sui-list-description>
                Last seen watching <a><b>Arrested Development</b></a> just now.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/stevie.jpg" />
            <sui-list-content>
              <sui-list-header as="a">Stevie Feliciano</sui-list-header>
              <sui-list-description>
                Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/elliot.jpg" />
            <sui-list-content>
              <sui-list-header as="a">Elliot Fu</sui-list-header>
              <sui-list-description>
                Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
              </sui-list-description>
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Divided"
        description="A list can show divisions between content"
        :code="dividedVarCode"
      >
        <sui-list divided verticalAlign="middle">
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/daniel.jpg" />
            <sui-list-content>
              <sui-list-header as="a">Daniel Louise</sui-list-header>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/stevie.jpg" />
            <sui-list-content>
              <sui-list-header as="a">Stevie Feliciano</sui-list-header>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/elliot.jpg" />
            <sui-list-content>
              <sui-list-header as="a">Elliot Fu</sui-list-header>
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Celled"
        description="A list can divide its items into cells"
        :code="celledVarCode"
      >
        <sui-list celled>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/helen.jpg" />
            <sui-list-content>
              <sui-list-header>Snickerdoodle</sui-list-header>
              An excellent companion
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/daniel.jpg" />
            <sui-list-content>
              <sui-list-header>Poodle</sui-list-header>
              A poodle, its pretty basic
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/daniel.jpg" />
            <sui-list-content>
              <sui-list-header>Paulo</sui-list-header>
              He's also a dog
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Size"
        description="A list can vary in size"
        :code="sizeCode"
      >
        <sui-list horizontal divided size="mini">
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/helen.jpg" />
            <sui-list-content>
              <sui-list-header>Helen</sui-list-header>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/christian.jpg" />
            <sui-list-content>
              <sui-list-header>Christian</sui-list-header>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/avatar/small/daniel.jpg" />
            <sui-list-content>
              <sui-list-header>Daniel</sui-list-header>
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </doc-example>

      <sui-header as="h2" dividing>Content Variations</sui-header>

      <doc-example
        title="Vertical Aligned"
        description="An element inside a list can be vertically aligned"
        :code="verticalAlignedCode"
      >
        <sui-list horizontal>
          <sui-list-item>
            <sui-image avatar src="/images/wireframe/square-image.png" />
            <sui-list-content verticalAlign="top">
              Top Aligned
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/wireframe/square-image.png" />
            <sui-list-content verticalAlign="middle">
              Middle
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-image avatar src="/images/wireframe/square-image.png" />
            <sui-list-content verticalAlign="bottom">
              Bottom
            </sui-list-content>
          </sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Floated"
        description="An list, or an element inside a list can be floated left or right"
        :code="floatedCode"
      >
        <div>
          <sui-list floated="right" horizontal>
            <sui-list-item disabled>© GitHub, Inc.</sui-list-item>
            <sui-list-item as="a">Terms</sui-list-item>
            <sui-list-item as="a">Privacy</sui-list-item>
            <sui-list-item as="a">Contact</sui-list-item>
          </sui-list>
          <sui-list horizontal>
            <sui-list-item as="a">About Us</sui-list-item>
            <sui-list-item as="a">Jobs</sui-list-item>
          </sui-list>
        </div>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'ListDoc',
  components: { DocExample },
  setup() {
    const listCode = `<sui-list>
  <sui-list-item>Apples</sui-list-item>
  <sui-list-item>Pears</sui-list-item>
  <sui-list-item>Oranges</sui-list-item>
</sui-list>`

    const bulletedCode = `<sui-list bulleted>
  <sui-list-item>Gaining Access</sui-list-item>
  <sui-list-item>Inviting Friends</sui-list-item>
  <sui-list-item>
    <div>Benefits</div>
    <div class="list">
      <sui-list-item as="a">Link to somewhere</sui-list-item>
      <sui-list-item>Rebates</sui-list-item>
      <sui-list-item>Discounts</sui-list-item>
    </div>
  </sui-list-item>
  <sui-list-item>Warranty</sui-list-item>
</sui-list>`

    const orderedCode = `<sui-list ordered>
  <sui-list-item as="a">Getting Started</sui-list-item>
  <sui-list-item as="a">Introduction</sui-list-item>
  <sui-list-item>
    <a>Languages</a>
    <sui-list-list>
      <sui-list-item as="a">HTML</sui-list-item>
      <sui-list-item as="a">Javascript</sui-list-item>
      <sui-list-item as="a">CSS</sui-list-item>
    </sui-list-list>
  </sui-list-item>
  <sui-list-item as="a">Review</sui-list-item>
</sui-list>`

    const linkCode = `<sui-list link>
  <sui-list-item active>Home</sui-list-item>
  <sui-list-item as="a">About</sui-list-item>
  <sui-list-item as="a">Jobs</sui-list-item>
  <sui-list-item as="a">Team</sui-list-item>
</sui-list>`

    const itemCode = `<sui-list>
  <sui-list-item>1</sui-list-item>
  <sui-list-item>2</sui-list-item>
  <sui-list-item>3</sui-list-item>
</sui-list>`

    const iconCode = `<sui-list>
  <sui-list-item as="a">
    <sui-icon name="help" />
    <sui-list-content>
      <sui-list-header>Floated Icon</sui-list-header>
      <sui-list-description>
        This text will always have a left margin to make sure it sits alongside your icon
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item as="a">
    <sui-icon name="right triangle" />
    <sui-list-content>
      <sui-list-header>Icon Alignment</sui-list-header>
      <sui-list-description>
        Floated icons are by default top aligned. To have an icon top aligned try this example
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="help" />
    Inline Text
  </sui-list-item>
</sui-list>`

    const imageContentCode = `<sui-list>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/rachel.png" />
    <sui-list-content>
      <sui-list-header>Rachel</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Arrested Development</b></a> just now.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/lindsay.png" />
    <sui-list-content>
      <sui-list-header>Lindsay</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/matthew.png" />
    <sui-list-content>
      <sui-list-header>Matthew</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/jenny.jpg" />
    <sui-list-content>
      <sui-list-header>Jenny Hess</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/veronika.jpg" />
    <sui-list-content>
      <sui-list-header>Veronika Ossi</sui-list-header>
      <sui-list-description>
        Has not watched anything recently
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</sui-list>`

    const linkContentCode = `<sui-list>
  <sui-list-item as="a">What is a FAQ?</sui-list-item>
  <sui-list-item as="a">Who is our user?</sui-list-item>
  <sui-list-item as="a">Where is our office located?</sui-list-item>
</sui-list>`

    const headerContentCode = `<sui-list>
  <sui-list-item>
    <sui-list-header>New York City</sui-list-header>
    A lovely city
  </sui-list-item>
  <sui-list-item>
    <sui-list-header>Chicago</sui-list-header>
    Also quite a lovely city
  </sui-list-item>
  <sui-list-item>
    <sui-list-header>Los Angeles</sui-list-header>
    Sometimes can be a lovely city
  </sui-list-item>
  <sui-list-item>
    <sui-list-header>San Francisco</sui-list-header>
    What a lovely city
  </sui-list-item>
</sui-list>`

    const descriptionContentCode = `<sui-list>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Krolewskie Jadlo</sui-list-header>
      <sui-list-description>
        An excellent polish restaurant, quick delivery and hearty, filling meals.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Xian Famous Foods</sui-list-header>
      <sui-list-description>
        A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Sapporo Haru</sui-list-header>
      <sui-list-description>
        Greenpoint's best choice for quick and delicious sushi.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Enid's</sui-list-header>
      <sui-list-description>
        At night a bar, during the day a delicious brunch spot.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</sui-list>`

    const horizontalVarCode = `<sui-list horizontal>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/tom.jpg" />
    <sui-list-content>
      <sui-list-header>Tom</sui-list-header>
      Top Contributor
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian Rocha</sui-list-header>
      Admin
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/matt.jpg" />
    <sui-list-content>
      <sui-list-header>Matt</sui-list-header>
      Top Rated User
    </sui-list-content>
  </sui-list-item>
</sui-list>`

    const invertedVarCode = `<sui-segment inverted>
  <sui-list inverted relaxed divided>
    <sui-list-item>
      <sui-list-content>
        <sui-list-header>Snickerdoodle</sui-list-header>
        An excellent companion
      </sui-list-content>
    </sui-list-item>
    <sui-list-item>
      <sui-list-content>
        <sui-list-header>Poodle</sui-list-header>
        A poodle, its pretty basic
      </sui-list-content>
    </sui-list-item>
    <sui-list-item>
      <sui-list-content>
        <sui-list-header>Paulo</sui-list-header>
        He's also a dog
      </sui-list-content>
    </sui-list-item>
  </sui-list>
</sui-segment>`

    const selectionVarCode = `<sui-list selection verticalAlign="middle">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Helen</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Daniel</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`

    const animatedVarCode = `<sui-list animated verticalAlign="middle">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Helen</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Daniel</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`

    const relaxedVarCode = `<sui-list relaxed>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Daniel Louise</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Arrested Development</b></a> just now.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/stevie.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Stevie Feliciano</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/elliot.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Elliot Fu</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</sui-list>`

    const dividedVarCode = `<sui-list divided verticalAlign="middle">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Daniel Louise</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/stevie.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Stevie Feliciano</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/elliot.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Elliot Fu</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`

    const celledVarCode = `<sui-list celled>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Snickerdoodle</sui-list-header>
      An excellent companion
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Poodle</sui-list-header>
      A poodle, its pretty basic
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Paulo</sui-list-header>
      He's also a dog
    </sui-list-content>
  </sui-list-item>
</sui-list>`

    const sizeCode = `<sui-list horizontal divided size="mini">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Helen</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Daniel</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`

    const verticalAlignedCode = `<sui-list horizontal>
  <sui-list-item>
    <sui-image avatar src="/images/wireframe/square-image.png" />
    <sui-list-content verticalAlign="top">
      Top Aligned
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/wireframe/square-image.png" />
    <sui-list-content verticalAlign="middle">
      Middle
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/wireframe/square-image.png" />
    <sui-list-content verticalAlign="bottom">
      Bottom
    </sui-list-content>
  </sui-list-item>
</sui-list>`

    const floatedCode = `<div>
  <sui-list floated="right" horizontal>
    <sui-list-item disabled>© GitHub, Inc.</sui-list-item>
    <sui-list-item as="a">Terms</sui-list-item>
    <sui-list-item as="a">Privacy</sui-list-item>
    <sui-list-item as="a">Contact</sui-list-item>
  </sui-list>
  <sui-list horizontal>
    <sui-list-item as="a">About Us</sui-list-item>
    <sui-list-item as="a">Jobs</sui-list-item>
  </sui-list>
</div>`

    return {
      listCode,
      bulletedCode,
      orderedCode,
      linkCode,
      itemCode,
      iconCode,
      imageContentCode,
      linkContentCode,
      headerContentCode,
      descriptionContentCode,
      horizontalVarCode,
      invertedVarCode,
      selectionVarCode,
      animatedVarCode,
      relaxedVarCode,
      dividedVarCode,
      celledVarCode,
      sizeCode,
      verticalAlignedCode,
      floatedCode
    }
  }
})
</script>