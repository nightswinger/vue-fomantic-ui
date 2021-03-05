<template>
  <div>
    <doc-page-header
     title="Menu"
     sub="A menu displays grouped navigation actions"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Menu"
        description="A menu"
        :code="menuCode"
      >
        <sui-menu>
          <sui-menu-item>Editorials</sui-menu-item>
          <sui-menu-item>Reviews</sui-menu-item>
          <sui-menu-item>Upcoming Events</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Secondary Menu"
        description="A menu can adjust its appearance to de-emphasize its contents"
        :code="secondaryMenuCode"
      >
        <sui-menu secondary>
          <sui-menu-item active>Home</sui-menu-item>
          <sui-menu-item>Messages</sui-menu-item>
          <sui-menu-item>Friends</sui-menu-item>
          <sui-menu-menu position="right">
            <sui-menu-item>
              <sui-input icon="search" placeholder="Search..." />
            </sui-menu-item>
            <sui-menu-item>logout</sui-menu-item>
          </sui-menu-menu>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Pointing"
        description="A menu can point to show its relationship to nearby content"
        :code="pointingCode"
      >
        <sui-menu pointing>
          <sui-menu-item active>Home</sui-menu-item>
          <sui-menu-item>Messages</sui-menu-item>
          <sui-menu-item>Friends</sui-menu-item>
          <sui-menu-menu position="right">
            <sui-menu-item>
              <sui-input transparent icon="search" placeholder="Search..." />
            </sui-menu-item>
          </sui-menu-menu>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Tabular"
        description="A menu can be formatted to show tabs of information"
        :code="tabularCode"
      >
        <sui-menu tabular>
          <sui-menu-item active>Bio</sui-menu-item>
          <sui-menu-item>Photos</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Text"
        description="A menu can be formatted for text content"
        :code="textCode"
      >
        <sui-menu text>
          <sui-menu-item header>Sort By</sui-menu-item>
          <sui-menu-item active>Closest</sui-menu-item>
          <sui-menu-item>Most Comments</sui-menu-item>
          <sui-menu-item>Most Popular</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Vertical Menu"
        description="A vertical menu displays elements vertically"
        :code="verticalMenuCode"
      >
        <sui-menu vertical>
          <sui-menu-item active color="teal">
            Inbox
            <sui-label color="teal" pointing="left">1</sui-label>
          </sui-menu-item>
          <sui-menu-item>
            Spam
            <sui-label>51</sui-label>
          </sui-menu-item>
          <sui-menu-item>
            Updates
            <sui-label>1</sui-label>
          </sui-menu-item>
          <sui-menu-item>
            <sui-input transparent icon="search" placeholder="Search mail..." />
          </sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Pagination"
        description="A pagination menu is specially formatted to present links to pages of content"
        :code="paginationCode"
      >
        <sui-menu pagination>
          <sui-menu-item active>1</sui-menu-item>
          <sui-menu-item disabled>...</sui-menu-item>
          <sui-menu-item>10</sui-menu-item>
          <sui-menu-item>11</sui-menu-item>
          <sui-menu-item>12</sui-menu-item>
        </sui-menu>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Header"
        description="A menu item may include a header or may itself be a header"
        :code="headerCode"
      >
        <sui-menu>
          <sui-menu-item header>Our Company</sui-menu-item>
          <sui-menu-item>About us</sui-menu-item>
          <sui-menu-item>Jobs</sui-menu-item>
          <sui-menu-item>Locations</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="textContentCode"
        description="A vertical menu item can include any type of text content"
        :code="textContentCode"
      >
        <sui-menu vertical>
          <sui-menu-item>
            <sui-header as="h4">Promotions</sui-header>
            <p>Check out our new promotions</p>
          </sui-menu-item>
          <sui-menu-item>
            <sui-header as="h4">Coupons</sui-header>
            <p>Check out our collection of coupons</p>
          </sui-menu-item>
          <sui-menu-item>
            <sui-header as="h4">Rebates</sui-header>
            <p>Visit our rebate forum for information on claiming rebates</p>
          </sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Input"
        description="A menu item can contain an input inside of it"
        :code="inputCode"
      >
        <sui-menu>
          <sui-menu-item as="div">
            <sui-input icon="search" placeholder="Search..." />
          </sui-menu-item>
          <sui-menu-item position="right" as="div">
            <sui-input placeholder="Navigate to ..." />
          </sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Button"
        description="A menu item can contain a button inside of it"
        :code="buttonCode"
      >
        <sui-menu>
          <sui-menu-item as="div">
            <sui-button color="primary">Sign up</sui-button>
          </sui-menu-item>
          <sui-menu-item as="div">
            <sui-button>Log in</sui-button>
          </sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Link Item"
        description="A menu may contain a link item, or an item formatted as if it is a link"
        :code="linkItemCode"
      >
        <sui-menu vertical>
          <sui-menu-item href="https://google.com">Visit Google</sui-menu-item>
          <sui-menu-item link as="div">Javascript Link</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Dropdown Item"
        description="An item may contain a nested menu in a dropdown"
        :code="dropdownItemCode"
      >
        <sui-menu vertical>
          <sui-dropdown item text="Categories">
            <sui-dropdown-menu>
              <sui-dropdown-item text="Electoronics" />
              <sui-dropdown-item text="Automotive" />
              <sui-dropdown-item text="Home" />
            </sui-dropdown-menu>
          </sui-dropdown>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Menu"
        description="A menu may contain another menu group in the same level as menu items"
        :code="menuContentCode"
      >
        <sui-menu>
          <sui-menu-item>Browse</sui-menu-item>
          <sui-menu-item>Submit</sui-menu-item>
          <sui-menu-menu position="right">
            <sui-menu-item>Sign up</sui-menu-item>
            <sui-menu-item>Help</sui-menu-item>
          </sui-menu-menu>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Sub Menu"
        description="A menu item may contain another menu nested inside that acts as a grouped sub-menu"
        :code=subMenuCode
      >
        <sui-menu vertical>
          <sui-menu-item as="div">
            <sui-input placeholder="Search..." />
          </sui-menu-item>
          <sui-menu-item as="div">
            Home
            <sui-menu-menu>
              <sui-menu-item>Search</sui-menu-item>
              <sui-menu-item>Add</sui-menu-item>
              <sui-menu-item>Remove</sui-menu-item>
            </sui-menu-menu>
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon name="grid layout" />
            Browse
          </sui-menu-item>
          <sui-menu-item>Messages</sui-menu-item>
          <sui-dropdown item text="More">
            <sui-dropdown-menu>
              <sui-dropdown-item icon="edit" text="Edit Profile" />
              <sui-dropdown-item icon="globe" text="Choose Language" />
              <sui-dropdown-item icon="settings" text="Account Settings" />
            </sui-dropdown-menu>
          </sui-dropdown>
        </sui-menu>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Hover"
        description="A menu item can be hovered"
        :code="hoverCode"
      >
        <sui-menu compact>
          <sui-menu-item>A link</sui-menu-item>
          <sui-menu-item as="div" link>div Link</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Active"
        description="A menu item can be active"
        :code="activeCode"
      >
        <sui-menu compact>
          <sui-menu-item active>Link</sui-menu-item>
        </sui-menu>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Stackable"
        description="A menu can stack at mobile resolutions"
        :code="stackableCode"
      >
        <sui-menu stackable>
          <sui-menu-item as="div">
            <img src="/images/logo.png">
          </sui-menu-item>
          <sui-menu-item>Features</sui-menu-item>
          <sui-menu-item>Testimonials</sui-menu-item>
          <sui-menu-item>Sign in</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Inverted"
        description="A menu may have its colors inverted to show greater contrast"
        :code="invertedCode"
      >
        <sui-menu inverted>
          <sui-menu-item active>Home</sui-menu-item>
          <sui-menu-item>Messages</sui-menu-item>
          <sui-menu-item>Friends</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Colored"
        description="Additional colors can be specified"
        :code="coloredCode"
      >
        <sui-menu>
          <sui-menu-item active color="red">Red</sui-menu-item>
          <sui-menu-item color="orange">Orange</sui-menu-item>
          <sui-menu-item color="yellow">Yellow</sui-menu-item>
          <sui-menu-item color="olive">Olive</sui-menu-item>
          <sui-menu-item color="green">Green</sui-menu-item>
          <sui-menu-item color="teal">Teal</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Icons"
        description="A menu may have just icons"
        :code="iconsCode"
      >
        <sui-menu icon>
          <sui-menu-item>
            <sui-icon name="gamepad" />
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon name="video camera" />
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon name="video play" />
          </sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Labeled Icon"
        description="A menu may have labeled icons"
        :code="labeledIconCode"
      >
        <sui-menu icon="labeled">
          <sui-menu-item>
            <sui-icon name="gamepad" />
            Games
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon name="video camera" />
            Channels
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon name="video play" />
            Videos
          </sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Fluid"
        description="A vertical menu may take the size of its container"
        :code="fluidCode"
      >
        <sui-menu fluid vertical>
          <sui-menu-item>Run</sui-menu-item>
          <sui-menu-item>Walk</sui-menu-item>
          <sui-menu-item>Bike</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Compact"
        description="A menu can take up only the space necessary to fit its content"
        :code="compactCode"
      >
        <sui-menu compact>
          <sui-menu-item>
            <sui-icon name="gamepad" />
            Games
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon name="video camera" />
            Channels
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon name="video play" />
            Videos
          </sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Evenly Divided"
        description="A menu may divide its items evenly"
        :code="evenlyDividedCode"
      >
        <sui-menu fluid :widths="3">
          <sui-menu-item>Buy</sui-menu-item>
          <sui-menu-item>Sell</sui-menu-item>
          <sui-menu-item>Rent</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Attached"
        description="A menu may be attached to other content segments"
        :code="attachedCode"
      >
        <div>
          <sui-menu attached="top" tabular>
            <sui-menu-item active>tab1</sui-menu-item>
            <sui-menu-item>tab2</sui-menu-item>
          </sui-menu>

          <sui-segment attached="bottom">
             There are many variations of passages of Lorem Ipsum available, but
             the majority have suffered alteration in some form, by injected
             humour, or randomised words which don't look even slightly believable.
             If you are going to use a passage of Lorem Ipsum, you need to be sure
             there isn't anything embarrassing hidden in the middle of text. All
             the Lorem Ipsum generators on the Internet tend to repeat predefined
             chunks as necessary, making this the first true generator on the
             Internet. It uses a dictionary of over 200 Latin words, combined with
             a handful of model sentence structures, to generate Lorem Ipsum which
             looks reasonable. The generated Lorem Ipsum is therefore always free
             from repetition, injected humour, or non-characteristic words etc.
          </sui-segment>
        </div>
      </doc-example>

      <doc-example
        title="Size"
        description="A menu can vary in size"
        :code="sizeCode"
      >
        <sui-menu size="mini">
          <sui-menu-item active>Home</sui-menu-item>
          <sui-menu-item>Messages</sui-menu-item>
          <sui-menu-menu position="right">
            <sui-dropdown item text="Language">
              <sui-dropdown-menu>
                <sui-dropdown-item>English</sui-dropdown-item>
                <sui-dropdown-item>Russian</sui-dropdown-item>
                <sui-dropdown-item>Spanish</sui-dropdown-item>
              </sui-dropdown-menu>
            </sui-dropdown>
            <sui-menu-item as="div">
              <sui-button color="primary">Sign up</sui-button>
            </sui-menu-item>
          </sui-menu-menu>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Fitted"
        description="A menu item or menu can remove element padding, vertically or horizontally"
        :code="fittedCode"
      >
        <sui-menu>
          <sui-menu-item fitted>No padding whatsoever</sui-menu-item>
          <sui-menu-item fitted="horizontally">No horizontal padding</sui-menu-item>
          <sui-menu-item fitted="vertically">No vertical padding</sui-menu-item>
        </sui-menu>
      </doc-example>

      <doc-example
        title="Borderless"
        description="A menu item or menu can have no borders"
        :code="borderlessCode"
      >
        <sui-menu borderless>
          <sui-menu-item>1</sui-menu-item>
          <sui-menu-item>2</sui-menu-item>
          <sui-menu-item>3</sui-menu-item>
          <sui-menu-item>4</sui-menu-item>
          <sui-menu-item>5</sui-menu-item>
          <sui-menu-item>6</sui-menu-item>
        </sui-menu>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'MenuDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const menuCode = `<sui-menu>
  <sui-menu-item>Editorials</sui-menu-item>
  <sui-menu-item>Reviews</sui-menu-item>
  <sui-menu-item>Upcoming Events</sui-menu-item>
</sui-menu>`

    const secondaryMenuCode = `<sui-menu secondary>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-menu-item>
      <sui-input icon="search" placeholder="Search..." />
    </sui-menu-item>
    <sui-menu-item>logout</sui-menu-item>
  </sui-menu-menu>
</sui-menu>`

    const pointingCode = `<sui-menu pointing>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-menu-item>
      <sui-input transparent icon="search" placeholder="Search..." />
    </sui-menu-item>
  </sui-menu-menu>
</sui-menu>`

    const tabularCode = `<sui-menu tabular>
  <sui-menu-item active>Bio</sui-menu-item>
  <sui-menu-item>Photos</sui-menu-item>
</sui-menu>`

    const textCode = `<sui-menu text>
  <sui-menu-item header>Sort By</sui-menu-item>
  <sui-menu-item active>Closest</sui-menu-item>
  <sui-menu-item>Most Comments</sui-menu-item>
  <sui-menu-item>Most Popular</sui-menu-item>
</sui-menu>`

    const verticalMenuCode = `<sui-menu vertical>
  <sui-menu-item active color="teal">
    Inbox
    <sui-label color="teal" pointing="left">1</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    Spam
    <sui-label>51</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    Updates
    <sui-label>1</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    <sui-input transparent icon="search" placeholder="Search mail..." />
  </sui-menu-item>
</sui-menu>`

    const paginationCode = `<sui-menu pagination>
  <sui-menu-item active>1</sui-menu-item>
  <sui-menu-item disabled>...</sui-menu-item>
  <sui-menu-item>10</sui-menu-item>
  <sui-menu-item>11</sui-menu-item>
  <sui-menu-item>12</sui-menu-item>
</sui-menu>`

    const headerCode = `<sui-menu>
  <sui-menu-item header>Our Company</sui-menu-item>
  <sui-menu-item>About us</sui-menu-item>
  <sui-menu-item>Jobs</sui-menu-item>
  <sui-menu-item>Locations</sui-menu-item>
</sui-menu>`

    const textContentCode = `<sui-menu vertical>
  <sui-menu-item>
    <sui-header as="h4">Promotions</sui-header>
    <p>Check out our new promotions</p>
  </sui-menu-item>
  <sui-menu-item>
    <sui-header as="h4">Coupons</sui-header>
    <p>Check out our collection of coupons</p>
  </sui-menu-item>
  <sui-menu-item>
    <sui-header as="h4">Rebates</sui-header>
    <p>Visit our rebate forum for information on claiming rebates</p>
  </sui-menu-item>
</sui-menu>`

    const inputCode = `<sui-menu>
  <sui-menu-item as="div">
    <sui-input icon="search" placeholder="Search..." />
  </sui-menu-item>
  <sui-menu-item position="right" as="div">
    <sui-input placeholder="Navigate to ..." />
  </sui-menu-item>
</sui-menu>`

    const buttonCode = `<sui-menu>
  <sui-menu-item as="div">
    <sui-button color="primary">Sign up</sui-button>
  </sui-menu-item>
  <sui-menu-item as="div">
    <sui-button>Log in</sui-button>
  </sui-menu-item>
</sui-menu>`

    const linkItemCode = `<sui-menu vertical>
  <sui-menu-item href="https://google.com">Visit Google</sui-menu-item>
  <sui-menu-item link as="div">Javascript Link</sui-menu-item>
</sui-menu>`

    const dropdownItemCode = `<sui-menu vertical>
  <sui-dropdown item text="Categories">
    <sui-dropdown-menu>
      <sui-dropdown-item text="Electoronics" />
      <sui-dropdown-item text="Automotive" />
      <sui-dropdown-item text="Home" />
    </sui-dropdown-menu>
  </sui-dropdown>
</sui-menu>`

    const menuContentCode = `<sui-menu>
  <sui-menu-item>Browse</sui-menu-item>
  <sui-menu-item>Submit</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-menu-item>Sign up</sui-menu-item>
    <sui-menu-item>Help</sui-menu-item>
  </sui-menu-menu>
</sui-menu>`

    const subMenuCode = `<sui-menu vertical>
  <sui-menu-item as="div">
    <sui-input placeholder="Search..." />
  </sui-menu-item>
  <sui-menu-item as="div">
    Home
    <sui-menu-menu>
      <sui-menu-item>Search</sui-menu-item>
      <sui-menu-item>Add</sui-menu-item>
      <sui-menu-item>Remove</sui-menu-item>
    </sui-menu-menu>
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="grid layout" />
    Browse
  </sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-dropdown item text="More">
    <sui-dropdown-menu>
      <sui-dropdown-item icon="edit" text="Edit Profile" />
      <sui-dropdown-item icon="globe" text="Choose Language" />
      <sui-dropdown-item icon="settings" text="Account Settings" />
    </sui-dropdown-menu>
  </sui-dropdown>
</sui-menu>`

    const hoverCode = `<sui-menu compact>
  <sui-menu-item>A link</sui-menu-item>
  <sui-menu-item as="div" link>div Link</sui-menu-item>
</sui-menu>`

    const activeCode = `<sui-menu compact>
  <sui-menu-item active>Link</sui-menu-item>
</sui-menu>`

    const stackableCode = `<sui-menu stackable>
  <sui-menu-item as="div">
    <img src="/images/logo.png">
  </sui-menu-item>
  <sui-menu-item>Features</sui-menu-item>
  <sui-menu-item>Testimonials</sui-menu-item>
  <sui-menu-item>Sign in</sui-menu-item>
</sui-menu>`

    const invertedCode = `<sui-menu inverted>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
</sui-menu>`

    const coloredCode = `<sui-menu>
  <sui-menu-item active color="red">Red</sui-menu-item>
  <sui-menu-item color="orange">Orange</sui-menu-item>
  <sui-menu-item color="yellow">Yellow</sui-menu-item>
  <sui-menu-item color="olive">Olive</sui-menu-item>
  <sui-menu-item color="green">Green</sui-menu-item>
  <sui-menu-item color="teal">Teal</sui-menu-item>
</sui-menu>`

    const iconsCode = `<sui-menu icon>
  <sui-menu-item>
    <sui-icon name="gamepad" />
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video camera" />
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video play" />
  </sui-menu-item>
</sui-menu>`

    const labeledIconCode = `<sui-menu icon="labeled">
  <sui-menu-item>
    <sui-icon name="gamepad" />
    Games
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video camera" />
    Channels
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video play" />
    Videos
  </sui-menu-item>
</sui-menu>`

    const fluidCode = `<sui-menu fluid vertical>
  <sui-menu-item>Run</sui-menu-item>
  <sui-menu-item>Walk</sui-menu-item>
  <sui-menu-item>Bike</sui-menu-item>
</sui-menu>`

    const compactCode = `<sui-menu compact>
  <sui-menu-item>
    <sui-icon name="gamepad" />
    Games
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video camera" />
    Channels
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video play" />
    Videos
  </sui-menu-item>
</sui-menu>`

    const evenlyDividedCode = `<sui-menu fluid :widths="3">
  <sui-menu-item>Buy</sui-menu-item>
  <sui-menu-item>Sell</sui-menu-item>
  <sui-menu-item>Rent</sui-menu-item>
</sui-menu>`

    const attachedCode = `<div>
  <sui-menu attached="top" tabular>
    <sui-menu-item active>tab1</sui-menu-item>
    <sui-menu-item>tab2</sui-menu-item>
  </sui-menu>

  <sui-segment attached="bottom">
      There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly believable.
      If you are going to use a passage of Lorem Ipsum, you need to be sure
      there isn't anything embarrassing hidden in the middle of text. All
      the Lorem Ipsum generators on the Internet tend to repeat predefined
      chunks as necessary, making this the first true generator on the
      Internet. It uses a dictionary of over 200 Latin words, combined with
      a handful of model sentence structures, to generate Lorem Ipsum which
      looks reasonable. The generated Lorem Ipsum is therefore always free
      from repetition, injected humour, or non-characteristic words etc.
  </sui-segment>
</div>`

    const sizeCode = `<sui-menu size="mini">
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-dropdown item text="Language">
      <sui-dropdown-menu>
        <sui-dropdown-item>English</sui-dropdown-item>
        <sui-dropdown-item>Russian</sui-dropdown-item>
        <sui-dropdown-item>Spanish</sui-dropdown-item>
      </sui-dropdown-menu>
    </sui-dropdown>
    <sui-menu-item as="div">
      <sui-button color="primary">Sign up</sui-button>
    </sui-menu-item>
  </sui-menu-menu>
</sui-menu>`

    const fittedCode = `<sui-menu>
  <sui-menu-item fitted>No padding whatsoever</sui-menu-item>
  <sui-menu-item fitted="horizontally">No horizontal padding</sui-menu-item>
  <sui-menu-item fitted="vertically">No vertical padding</sui-menu-item>
</sui-menu>`

    const borderlessCode = `<sui-menu borderless>
  <sui-menu-item>1</sui-menu-item>
  <sui-menu-item>2</sui-menu-item>
  <sui-menu-item>3</sui-menu-item>
  <sui-menu-item>4</sui-menu-item>
  <sui-menu-item>5</sui-menu-item>
  <sui-menu-item>6</sui-menu-item>
</sui-menu>`

    return {
      menuCode,
      secondaryMenuCode,
      pointingCode,
      tabularCode,
      textCode,
      verticalMenuCode,
      paginationCode,
      headerCode,
      textContentCode,
      inputCode,
      buttonCode,
      linkItemCode,
      dropdownItemCode,
      menuContentCode,
      subMenuCode,
      hoverCode,
      activeCode,
      stackableCode,
      invertedCode,
      coloredCode,
      iconsCode,
      labeledIconCode,
      fluidCode,
      compactCode,
      evenlyDividedCode,
      attachedCode,
      sizeCode,
      fittedCode,
      borderlessCode
    }
  }
})
</script>