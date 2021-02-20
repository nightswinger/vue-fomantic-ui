<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Label
            <sui-header-subheader>
              A label displays content classification
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
        title="Label"
        description="A label"
        :code="labelCode"
      >
        <sui-label>
          <sui-icon name="mail" /> 23
        </sui-label>
      </doc-example>

      <doc-example
        title="Image"
        description="A label can be formatted to emphasize an image"
        :code="imageCode"
      >
        <div>
          <sui-label as="a" image>
            <img src="/src/assets/avatar/small/joe.jpg" />
            Joe
          </sui-label>
          <sui-label as="a" image>
            <img src="/src/assets/avatar/small/elliot.jpg" />
            Elliot
          </sui-label>
          <sui-label as="a" image>
            <img src="/src/assets/avatar/small/stevie.jpg" />
            Stevie
          </sui-label>
        </div>
      </doc-example>

      <doc-example
        title="Pointing"
        description="A label can point to content next to it"
        :code="pointingCode"
      >
        <sui-form fluid>
          <sui-form-field>
            <input type="text" placeholder="First name" />
            <sui-label pointing>Please enter a value</sui-label>
          </sui-form-field>
          <sui-divider />

          <sui-form-field>
            <sui-label pointing="below">Please enter a value</sui-label>
            <input type="text" placeholder="Last name" />
          </sui-form-field>
          <sui-divider />

          <sui-form-field inline>
            <input type="text" placeholder="Username" />
            <sui-label pointing="left">That name is taken!</sui-label>
          </sui-form-field>
          <sui-divider />

          <sui-form-field inline>
            <sui-label pointing="right">Your password must be 6 characters or more</sui-label>
            <input type="password" placeholder="Password" />
          </sui-form-field>
        </sui-form>
      </doc-example>

      <doc-example
        title="Corner"
        description="A label can position itself in the corner of an element"
        :code="cornerCode"
      >
        <sui-grid :columns="2">
          <sui-grid-column>
            <sui-image
              fluid
              src="/src/assets/wireframe/image.png"
              :label="{ corner: 'left', icon: 'heart' }"
            />
          </sui-grid-column>
          <sui-grid-column>
            <sui-image
              fluid
              src="/src/assets/wireframe/image.png"
              :label="{ corner: 'right', icon: 'save', color: 'red' }"
            />
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Tag"
        description="A label can appear as a tag"
        :code="tagCode"
      >
        <div>
          <sui-label tag>New</sui-label>
          <sui-label tag color="red">Upcoming</sui-label>
          <sui-label tag color="teal">Featured</sui-label>
        </div>
      </doc-example>

      <doc-example
        title="Ribbon"
        description="A label can appear as a ribbon attaching itself to an element"
        :code="ribbonCode"
      >
        <sui-grid :columns="2">
          <sui-grid-column>
            <sui-segment raised>
              <sui-label as="a" ribbon color="red">Overview</sui-label>
              <span>Account Details</span>
              <sui-image src="/src/assets/paragraph.png" />

              <sui-label as="a" ribbon color="blue">Community</sui-label>
              <span>User Reviews</span>
              <sui-image src="/src/assets/paragraph.png" />
            </sui-segment>
          </sui-grid-column>

          <sui-grid-column>
            <sui-segment raised>
              <sui-label as="a" ribbon="right" color="orange">Specs</sui-label>
              <sui-image src="/src/assets/paragraph.png" />

              <sui-label as="a" ribbon="right" color="teal">Reviews</sui-label>
              <sui-image src="/src/assets/paragraph.png" />
            </sui-segment>
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Attached"
        description="A label can attach to a content segment"
        :code="attachedCode"
      >
        <sui-grid :columns="3">
          <sui-grid-row>
            <sui-grid-column>
              <sui-segment padded>
                <sui-label attached="top">HTML</sui-label>
                <sui-image src="/src/assets/paragraph.png" />
              </sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment padded>
                <sui-label attached="bottom">CSS</sui-label>
                <sui-image src="/src/assets/paragraph.png" />
              </sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment padded>
                <sui-label attached="top right">Code</sui-label>
                <sui-image src="/src/assets/paragraph.png" />
              </sui-segment>
            </sui-grid-column>
          </sui-grid-row>

          <sui-grid-row>
            <sui-grid-column>
              <sui-segment padded>
                <sui-label attached="top left">View</sui-label>
                <sui-image src="/src/assets/paragraph.png" />
              </sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment padded>
                <sui-label attached="bottom left">User View</sui-label>
                <sui-image src="/src/assets/paragraph.png" />
              </sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment padded>
                <sui-label attached="bottom right">Admin View</sui-label>
                <sui-image src="/src/assets/paragraph.png" />
              </sui-segment>
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Horizontal"
        description="A horizontal label is formatted to label content along-side it horizontally"
        :code="horizontalCode"
      >
        <sui-list divided selection>
          <sui-list-item>
            <sui-label color="red" horizontal>Fruit</sui-label>
            Kumquats
          </sui-list-item>
          <sui-list-item>
            <sui-label  color="purple" horizontal>Candy</sui-label>
            Ice Cream
          </sui-list-item>
          <sui-list-item>
            <sui-label color="red" horizontal>Fruit</sui-label>
            Orange
          </sui-list-item>
          <sui-list-item>
            <sui-label horizontal>Dog</sui-label>
            Poodle
          </sui-list-item>
        </sui-list>
      </doc-example>

      <doc-example
        title="Floating"
        description="A label can float above or below another element"
        :code="floatingCode"
      >
        <sui-menu compact>
          <sui-menu-item>
            <sui-icon name="mail" /> Messages
            <sui-label floating color="red">22</sui-label>
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon name="users" /> Friends
            <sui-label floating color="teal">22</sui-label>
          </sui-menu-item>
        </sui-menu>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Detail"
        description="A label can contain a detail"
        :code="detailCode"
      >
        <sui-label>
          Dogs
          <sui-label-detail>214</sui-label-detail>
        </sui-label>
      </doc-example>

      <doc-example
        title="Icon"
        description="A label can include an icon"
        :code="iconCode"
      >
        <div>
          <sui-label as="a">
            <sui-icon name="mail" />
            Mail
          </sui-label>
          <sui-label as="a">
            Tag
            <sui-icon name="delete" />
          </sui-label>
        </div>
      </doc-example>

      <doc-example
        title="Image"
        description="A label can include an image"
        :code="imageIncludeCode"
      >
        <div>
          <sui-label as="a">
            <sui-image avatar spaced="right" src="/src/assets/avatar/small/elliot.jpg" />
            Elliot
          </sui-label>
          <sui-label as="a">
            <img src="/src/assets/avatar/small/stevie.jpg" />
            Stevie
          </sui-label>
        </div>
      </doc-example>

      <doc-example
        title="Link"
        description="A label can be a link or contain an item that links"
        :code="linkCode"
      >
        <sui-label as="a" link>
          <sui-icon name="mail" /> 23
        </sui-label>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Circular"
        description="A label can be circular"
        :code="circularCode"
      >
        <div>
          <sui-label as="a" circular color="red">2</sui-label>
          <sui-label as="a" circular color="orange">2</sui-label>
          <sui-label as="a" circular color="yellow">2</sui-label>
          <sui-label as="a" circular color="olive">2</sui-label>
          <sui-label as="a" circular color="green">2</sui-label>
          <sui-label as="a" circular color="teal">2</sui-label>
          <sui-label as="a" circular color="blue">2</sui-label>
          <sui-label as="a" circular color="violet">2</sui-label>
          <sui-label as="a" circular color="purple">2</sui-label>
          <sui-label as="a" circular color="pink">2</sui-label>
          <sui-label as="a" circular color="brown">2</sui-label>
          <sui-label as="a" circular color="grey">2</sui-label>
          <sui-label as="a" circular color="black">2</sui-label>
        </div>
      </doc-example>

      <doc-example
        title="Basic"
        description="A label can reduce its complexity"
        :code="basicCode"
      >
        <div>
          <sui-label basic as="a">Basic</sui-label>
          <sui-label basic as="a" pointing>Pointing</sui-label>
          <sui-label basic as="a" image>
            <img src="/src/assets/avatar/small/elliot.jpg" />
            Elliot
          </sui-label>
          <sui-label basic as="a" pointing color="red">Red Pointing</sui-label>
          <sui-label basic as="a" color="blue">Blue</sui-label>
        </div>
      </doc-example>

      <doc-example
        title="Colored"
        description="A label can have different colors"
        :code="coloredCode"
      >
        <div>
          <sui-label as="a" color="primary">Primary</sui-label>
          <sui-label as="a" color="secondary">Secondary</sui-label>
          <sui-label as="a" color="red">Red</sui-label>
          <sui-label as="a" color="orange">Orange</sui-label>
          <sui-label as="a" color="yellow">Yellow</sui-label>
          <sui-label as="a" color="olive">Olive</sui-label>
          <sui-label as="a" color="green">Green</sui-label>
          <sui-label as="a" color="teal">Teal</sui-label>
          <sui-label as="a" color="blue">Blue</sui-label>
          <sui-label as="a" color="violet">Violet</sui-label>
          <sui-label as="a" color="purple">Purple</sui-label>
          <sui-label as="a" color="pink">Pink</sui-label>
          <sui-label as="a" color="brown">Brown</sui-label>
          <sui-label as="a" color="grey">Grey</sui-label>
          <sui-label as="a" color="black">Black</sui-label>
        </div>
      </doc-example>

      <doc-example
        title="Basic Tag"
        description=""
        :code="basicTagCode"
      >
        <div>
          <sui-label as="a" basic tag color="primary">Primary</sui-label>
          <sui-label as="a" basic tag color="secondary">Secondary</sui-label>
          <sui-label as="a" basic tag color="red">Red</sui-label>
          <sui-label as="a" basic tag color="orange">Orange</sui-label>
          <sui-label as="a" basic tag color="yellow">Yellow</sui-label>
          <sui-label as="a" basic tag color="olive">Olive</sui-label>
          <sui-label as="a" basic tag color="green">Green</sui-label>
          <sui-label as="a" basic tag color="teal">Teal</sui-label>
          <sui-label as="a" basic tag color="blue">Blue</sui-label>
          <sui-label as="a" basic tag color="violet">Violet</sui-label>
          <sui-label as="a" basic tag color="purple">Purple</sui-label>
          <sui-label as="a" basic tag color="pink">Pink</sui-label>
          <sui-label as="a" basic tag color="brown">Brown</sui-label>
          <sui-label as="a" basic tag color="grey">Grey</sui-label>
          <sui-label as="a" basic tag color="black">Black</sui-label>
        </div>
      </doc-example>

      <doc-example
        title="Size"
        description="A label can be small or large"
        :code="sizeCode"
      >
        <div>
          <sui-label size="mini">Mini</sui-label>
          <sui-label size="tiny">Tiny</sui-label>
          <sui-label size="small">Small</sui-label>
          <sui-label>Medium</sui-label>
          <sui-label size="large">Large</sui-label>
          <sui-label size="big">Big</sui-label>
          <sui-label size="huge">Huge</sui-label>
          <sui-label size="massive">Massive</sui-label>
        </div>
      </doc-example>

      <sui-header as="h2" dividing>Groups</sui-header>

      <doc-example
        title="Group Size"
        description="Labels can share sizes together"
        :code="groupSizeCode"
      >
        <sui-label-group size="huge">
          <sui-label>Fun</sui-label>
          <sui-label>Happy</sui-label>
          <sui-label>Smart</sui-label>
          <sui-label>Witty</sui-label>
        </sui-label-group>
      </doc-example>

      <doc-example
        title="Colored Group"
        description="Labels can share colors together"
        :code="coloredGroupCode"
      >
        <sui-label-group color="blue">
          <sui-label as="a">
            Fun <sui-icon name="close" />
          </sui-label>
          <sui-label as="a">
            Happy
            <sui-label-detail>22</sui-label-detail>
          </sui-label>
          <sui-label as="a">Smart</sui-label>
          <sui-label as="a">Insane</sui-label>
          <sui-label as="a">Exciting</sui-label>
        </sui-label-group>
      </doc-example>

      <doc-example
        title="Basic Group"
        description="Labels can share their style together"
        :code="basicGroupCode"
      >
        <sui-label-group basic>
          <sui-label as="a">
            Fun <sui-icon name="close" />
          </sui-label>
          <sui-label as="a">
            Happy
            <sui-label-detail>22</sui-label-detail>
          </sui-label>
          <sui-label as="a">Smart</sui-label>
          <sui-label as="a">Insane</sui-label>
          <sui-label as="a">Exciting</sui-label>
        </sui-label-group>
      </doc-example>

      <doc-example
        title="Tag Group"
        description="Labels can share tag formatting"
        :code="tagGroupCode"
      >
        <sui-label-group tag>
          <sui-label as="a">$10.00</sui-label>
          <sui-label as="a">$19.99</sui-label>
          <sui-label as="a">$24.99</sui-label>
          <sui-label as="a">$30.99</sui-label>
          <sui-label as="a">$10.25</sui-label>
        </sui-label-group>
      </doc-example>

      <doc-example
        title="CircularGroup"
        description="Labels can share shapes"
        :code="circularGroupCode"
      >
        <sui-label-group circular>
          <sui-label>11</sui-label>
          <sui-label>22</sui-label>
          <sui-label>33</sui-label>
          <sui-label>44</sui-label>
          <sui-label>141</sui-label>
        </sui-label-group>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'LabelDoc',
  components: { DocExample },
  setup() {
    const labelCode = `<sui-label>
  <sui-icon name="mail" /> 23
</sui-label>`

    const imageCode = `<div>
  <sui-label as="a" image>
    <img src="/src/assets/avatar/small/joe.jpg" />
    Joe
  </sui-label>
  <sui-label as="a" image>
    <img src="/src/assets/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label as="a" image>
    <img src="/src/assets/avatar/small/stevie.jpg" />
    Stevie
  </sui-label>
</div>`

    const pointingCode = `<sui-form fluid>
  <sui-form-field>
    <input type="text" placeholder="First name" />
    <sui-label pointing>Please enter a value</sui-label>
  </sui-form-field>
  <sui-divider />

  <sui-form-field>
    <sui-label pointing="below">Please enter a value</sui-label>
    <input type="text" placeholder="Last name" />
  </sui-form-field>
  <sui-divider />

  <sui-form-field inline>
    <input type="text" placeholder="Username" />
    <sui-label pointing="left">That name is taken!</sui-label>
  </sui-form-field>
  <sui-divider />

  <sui-form-field inline>
    <sui-label pointing="right">Your password must be 6 characters or more</sui-label>
    <input type="password" placeholder="Password" />
  </sui-form-field>
</sui-form>`

    const cornerCode = `<sui-grid :columns="2">
  <sui-grid-column>
    <sui-image
      fluid
      src="/src/assets/wireframe/image.png"
      :label="{ corner: 'left', icon: 'heart' }"
    />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image
      fluid
      src="/src/assets/wireframe/image.png"
      :label="{ corner: 'right', icon: 'save', color: 'red' }"
    />
  </sui-grid-column>
</sui-grid>`

    const tagCode = `<div>
  <sui-label tag>New</sui-label>
  <sui-label tag color="red">Upcoming</sui-label>
  <sui-label tag color="teal">Featured</sui-label>
</div>`

    const ribbonCode = `<sui-grid :columns="2">
  <sui-grid-column>
    <sui-segment raised>
      <sui-label as="a" ribbon color="red">Overview</sui-label>
      <span>Account Details</span>
      <sui-image src="/images/paragraph.png" />

      <sui-label as="a" ribbon color="blue">Community</sui-label>
      <span>User Reviews</span>
      <sui-image src="/images/paragraph.png" />
    </sui-segment>
  </sui-grid-column>

  <sui-grid-column>
    <sui-segment raised>
      <sui-label as="a" ribbon="right" color="orange">Specs</sui-label>
      <sui-image src="/images/paragraph.png" />

      <sui-label as="a" ribbon="right" color="teal">Reviews</sui-label>
      <sui-image src="/images/paragraph.png" />
    </sui-segment>
  </sui-grid-column>
</sui-grid>`

    const attachedCode = `<sui-grid :columns="3">
  <sui-grid-row>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top">HTML</sui-label>
        <sui-image src="/images/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom">CSS</sui-label>
        <sui-image src="/images/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top right">Code</sui-label>
        <sui-image src="/images/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top left">View</sui-label>
        <sui-image src="/images/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom left">User View</sui-label>
        <sui-image src="/images/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom right">Admin View</sui-label>
        <sui-image src="/images/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const horizontalCode = `<sui-list divided selection>
  <sui-list-item>
    <sui-label color="red" horizontal>Fruit</sui-label>
    Kumquats
  </sui-list-item>
  <sui-list-item>
    <sui-label  color="purple" horizontal>Candy</sui-label>
    Ice Cream
  </sui-list-item>
  <sui-list-item>
    <sui-label color="red" horizontal>Fruit</sui-label>
    Orange
  </sui-list-item>
  <sui-list-item>
    <sui-label horizontal>Dog</sui-label>
    Poodle
  </sui-list-item>
</sui-list>`

    const floatingCode = `<sui-menu compact>
  <sui-menu-item>
    <sui-icon name="mail" /> Messages
    <sui-label floating color="red">22</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="users" /> Friends
    <sui-label floating color="teal">22</sui-label>
  </sui-menu-item>
</sui-menu>`

    const detailCode = `<sui-label>
  Dogs
  <sui-label-detail>214</sui-label-detail>
</sui-label>`

    const iconCode = `<div>
  <sui-label as="a">
    <sui-icon name="mail" />
    Mail
  </sui-label>
  <sui-label as="a">
    Tag
    <sui-icon name="delete" />
  </sui-label>
</div>`

    const imageIncludeCode = `<div>
  <sui-label as="a">
    <sui-image avatar spaced="right" src="/src/assets/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label as="a">
    <img src="/src/assets/avatar/small/stevie.jpg" />
    Stevie
  </sui-label>
</div>`

    const linkCode = `<sui-label as="a" link>
  <sui-icon name="mail" /> 23
</sui-label>`

    const circularCode = `<div>
  <sui-label as="a" circular color="red">2</sui-label>
  <sui-label as="a" circular color="orange">2</sui-label>
  <sui-label as="a" circular color="yellow">2</sui-label>
  <sui-label as="a" circular color="olive">2</sui-label>
  <sui-label as="a" circular color="green">2</sui-label>
  <sui-label as="a" circular color="teal">2</sui-label>
  <sui-label as="a" circular color="blue">2</sui-label>
  <sui-label as="a" circular color="violet">2</sui-label>
  <sui-label as="a" circular color="purple">2</sui-label>
  <sui-label as="a" circular color="pink">2</sui-label>
  <sui-label as="a" circular color="brown">2</sui-label>
  <sui-label as="a" circular color="grey">2</sui-label>
  <sui-label as="a" circular color="black">2</sui-label>
</div>`

    const basicCode = `<div>
  <sui-label basic as="a">Basic</sui-label>
  <sui-label basic as="a" pointing>Pointing</sui-label>
  <sui-label basic as="a" image>
    <img src="/src/assets/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label basic as="a" pointing color="red">Red Pointing</sui-label>
  <sui-label basic as="a" color="blue">Blue</sui-label>
</div>`

    const coloredCode = `<div>
  <sui-label as="a" color="primary">Primary</sui-label>
  <sui-label as="a" color="secondary">Secondary</sui-label>
  <sui-label as="a" color="red">Red</sui-label>
  <sui-label as="a" color="orange">Orange</sui-label>
  <sui-label as="a" color="yellow">Yellow</sui-label>
  <sui-label as="a" color="olive">Olive</sui-label>
  <sui-label as="a" color="green">Green</sui-label>
  <sui-label as="a" color="teal">Teal</sui-label>
  <sui-label as="a" color="blue">Blue</sui-label>
  <sui-label as="a" color="violet">Violet</sui-label>
  <sui-label as="a" color="purple">Purple</sui-label>
  <sui-label as="a" color="pink">Pink</sui-label>
  <sui-label as="a" color="brown">Brown</sui-label>
  <sui-label as="a" color="grey">Grey</sui-label>
  <sui-label as="a" color="black">Black</sui-label>
</div>`

    const basicTagCode = `<div>
  <sui-label as="a" basic tag color="primary">Primary</sui-label>
  <sui-label as="a" basic tag color="secondary">Secondary</sui-label>
  <sui-label as="a" basic tag color="red">Red</sui-label>
  <sui-label as="a" basic tag color="orange">Orange</sui-label>
  <sui-label as="a" basic tag color="yellow">Yellow</sui-label>
  <sui-label as="a" basic tag color="olive">Olive</sui-label>
  <sui-label as="a" basic tag color="green">Green</sui-label>
  <sui-label as="a" basic tag color="teal">Teal</sui-label>
  <sui-label as="a" basic tag color="blue">Blue</sui-label>
  <sui-label as="a" basic tag color="violet">Violet</sui-label>
  <sui-label as="a" basic tag color="purple">Purple</sui-label>
  <sui-label as="a" basic tag color="pink">Pink</sui-label>
  <sui-label as="a" basic tag color="brown">Brown</sui-label>
  <sui-label as="a" basic tag color="grey">Grey</sui-label>
  <sui-label as="a" basic tag color="black">Black</sui-label>
</div>`

    const sizeCode = `<div>
  <sui-label size="mini">Mini</sui-label>
  <sui-label size="tiny">Tiny</sui-label>
  <sui-label size="small">Small</sui-label>
  <sui-label>Medium</sui-label>
  <sui-label size="large">Large</sui-label>
  <sui-label size="big">Big</sui-label>
  <sui-label size="huge">Huge</sui-label>
  <sui-label size="massive">Massive</sui-label>
</div>`

    const groupSizeCode = `<sui-label-group size="huge">
  <sui-label>Fun</sui-label>
  <sui-label>Happy</sui-label>
  <sui-label>Smart</sui-label>
  <sui-label>Witty</sui-label>
</sui-label-group>`

    const coloredGroupCode = `<sui-label-group color="blue">
  <sui-label as="a">
    Fun <sui-icon name="close" />
  </sui-label>
  <sui-label as="a">
    Happy
    <sui-label-detail>22</sui-label-detail>
  </sui-label>
  <sui-label as="a">Smart</sui-label>
  <sui-label as="a">Insane</sui-label>
  <sui-label as="a">Exciting</sui-label>
</sui-label-group>`

    const basicGroupCode = `<sui-label-group basic>
  <sui-label as="a">
    Fun <sui-icon name="close" />
  </sui-label>
  <sui-label as="a">
    Happy
    <sui-label-detail>22</sui-label-detail>
  </sui-label>
  <sui-label as="a">Smart</sui-label>
  <sui-label as="a">Insane</sui-label>
  <sui-label as="a">Exciting</sui-label>
</sui-label-group>`

    const tagGroupCode = `<sui-label-group tag>
  <sui-label as="a">$10.00</sui-label>
  <sui-label as="a">$19.99</sui-label>
  <sui-label as="a">$24.99</sui-label>
  <sui-label as="a">$30.99</sui-label>
  <sui-label as="a">$10.25</sui-label>
</sui-label-group>`

    const circularGroupCode = `<sui-label-group circular>
  <sui-label>11</sui-label>
  <sui-label>22</sui-label>
  <sui-label>33</sui-label>
  <sui-label>44</sui-label>
  <sui-label>141</sui-label>
</sui-label-group>`

    return {
      labelCode,
      imageCode,
      pointingCode,
      cornerCode,
      tagCode,
      ribbonCode,
      attachedCode,
      horizontalCode,
      floatingCode,
      detailCode,
      iconCode,
      imageIncludeCode,
      linkCode,
      circularCode,
      basicCode,
      coloredCode,
      basicTagCode,
      sizeCode,
      groupSizeCode,
      coloredGroupCode,
      basicGroupCode,
      tagGroupCode,
      circularGroupCode
    }
  }
})
</script>