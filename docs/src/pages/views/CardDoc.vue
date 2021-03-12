<template>
  <div>
    <doc-page-header
      title="Card"
      sub="A card displays site content in a manner similar to a playing card"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Card"
        description="A single card"
        :code="cardCode"
      >
        <sui-card>
          <sui-image src="/images/avatar/large/kristy.png" wrapped />
          <sui-card-content>
            <sui-card-header>Kristy</sui-card-header>
            <sui-card-meta>
              <span class="date">Joined in 2013</span>
            </sui-card-meta>
            <sui-card-description>
              Kristy is an art director living in New York.
            </sui-card-description>
          </sui-card-content>
          <sui-card-content extra>
            <a>
              <sui-icon name="user" />
              22 Friends
            </a>
          </sui-card-content>
        </sui-card>
      </doc-example>

      <doc-example
        title="Cards"
        description="A group of cards"
        :code="cardsCode"
      >
        <sui-card-group>
          <sui-card>
            <sui-card-content>
              <sui-image src="/images/avatar/small/elliot.jpg" floated="right" size="mini" />
              <sui-card-header>Elliot Fu</sui-card-header>
              <sui-card-meta>Friends of Veronika</sui-card-meta>
              <sui-card-description>Elliot requested permission to view your contact details</sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-button-group :widths="2">
                <sui-button basic color="green">Approve</sui-button>
                <sui-button basic color="red">Decline</sui-button>
              </sui-button-group>
            </sui-card-content>
          </sui-card>
          <sui-card>
            <sui-card-content>
              <sui-image src="/images/avatar/small/jenny.jpg" floated="right" size="mini" />
              <sui-card-header>Jenny Hess</sui-card-header>
              <sui-card-meta>New Member</sui-card-meta>
              <sui-card-description>Jenny wants to add you to the group best friends</sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-button-group :widths="2">
                <sui-button basic color="green">Approve</sui-button>
                <sui-button basic color="red">Decline</sui-button>
              </sui-button-group>
            </sui-card-content>
          </sui-card>
        </sui-card-group>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Content Block"
        description="A card can contain blocks of content"
        :code="contentBlockCode"
      >
        <sui-card>
          <sui-card-content>
            <sui-card-header>Project Timeline</sui-card-header>
          </sui-card-content>
          <sui-card-content>
            <sui-header sub>Activity</sui-header>
            <sui-feed size="small">
              <sui-feed-event>
                <sui-feed-content>
                  <sui-feed-summary>
                    <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
                  </sui-feed-summary>
                </sui-feed-content>
              </sui-feed-event>
              <sui-feed-event>
                <sui-feed-content>
                  <sui-feed-summary>
                    <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
                  </sui-feed-summary>
                </sui-feed-content>
              </sui-feed-event>
              <sui-feed-event>
                <sui-feed-content>
                  <sui-feed-summary>
                    <a>Helen Troy</a> added two pictures
                  </sui-feed-summary>
                </sui-feed-content>
              </sui-feed-event>
            </sui-feed>
          </sui-card-content>
          <sui-card-content extra>
            <sui-button as="button">Join Project</sui-button>
          </sui-card-content>
        </sui-card>
      </doc-example>

      <doc-example
        title="Image"
        description="A card can contain an image"
        :code="imageCode"
      >
        <sui-card>
          <sui-image src="/images/avatar/large/kristy.png" wrapped />
          <sui-card-content>
            <sui-card-header>Kristy</sui-card-header>
            <sui-card-meta>
              <span class="date">Joined in 2013</span>
            </sui-card-meta>
            <sui-card-description>
              Kristy is an art director living in New York.
            </sui-card-description>
          </sui-card-content>
          <sui-card-content extra>
            <a>
              <sui-icon name="user" />
              22 Friends
            </a>
          </sui-card-content>
        </sui-card>
      </doc-example>

      <doc-example
        title="Header"
        description="A card can contain a header"
        :code="headerCode"
      >
        <sui-card-group>
          <sui-card>
            <sui-card-content>
              <sui-card-header>Elliot Fu</sui-card-header>
              <sui-card-meta>Friend</sui-card-meta>
              <sui-card-description>
                Elliot Fu is a film-maker from New York.
              </sui-card-description>
            </sui-card-content>
          </sui-card>
          <sui-card>
            <sui-card-content>
              <sui-card-header>Veronika Ossi</sui-card-header>
              <sui-card-meta>Friend</sui-card-meta>
              <sui-card-description>
                Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
              </sui-card-description>
            </sui-card-content>
          </sui-card>
          <sui-card>
            <sui-card-content>
              <sui-card-header>Jenny Hess</sui-card-header>
              <sui-card-meta>Friend</sui-card-meta>
              <sui-card-description>
                Jenny is a student studying Media Management at the New School
              </sui-card-description>
            </sui-card-content>
          </sui-card>
        </sui-card-group>
      </doc-example>

      <doc-example
        title="Metadata"
        description="A card can contain content metadata"
        :code="metadataCode"
      >
        <sui-card>
          <sui-card-content>
            <sui-card-header>Cute Dog</sui-card-header>
            <sui-card-meta>
              <span>2 days ago</span>
              <a>Animals</a>
            </sui-card-meta>
            <sui-card-description>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-card-description>
          </sui-card-content>
        </sui-card>
      </doc-example>

      <doc-example
        title="Buttons"
        description="A card can contain buttons"
        :code="buttonsCode"
      >
        <sui-card-group>
          <sui-card>
            <sui-card-content>
              <sui-card-header>Elliot Fu</sui-card-header>
              <sui-card-description>
                Elliot Fu is a film-maker from New York.
              </sui-card-description>
            </sui-card-content>
            <sui-button attached="bottom">
              <sui-icon name="add" />
              Add Friend
            </sui-button>
          </sui-card>
          <sui-card>
            <sui-card-content>
              <sui-card-header>Veronika Ossi</sui-card-header>
              <sui-card-description>
                Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
              </sui-card-description>
            </sui-card-content>
            <sui-button attached="bottom">
              <sui-icon name="add" />
              Add Friend
            </sui-button>
          </sui-card>
        </sui-card-group>
      </doc-example>

      <doc-example
        title="Description"
        description="A card can contain a description with one or more paragraphs"
        :code="descriptionCode"
      >
        <sui-card>
          <sui-card-content>
            <sui-card-header>Cute Dog</sui-card-header>
            <sui-card-meta>2 days ago</sui-card-meta>
            <sui-card-description>
              <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
              <p>Many people also have their own barometers for what makes a cute dog.</p>
            </sui-card-description>
          </sui-card-content>
        </sui-card>
      </doc-example>

      <doc-example
        title="Extra Content"
        description="A card can contain extra content meant to be formatted separately from the main content"
        :code="extraContentCode"
      >
        <sui-card>
          <sui-card-content>
            <sui-card-header>Cute Dog</sui-card-header>
            <sui-card-meta>2 days ago</sui-card-meta>
            <sui-card-description>
              <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
              <p>Many people also have their own barometers for what makes a cute dog.</p>
            </sui-card-description>
          </sui-card-content>
          <sui-card-content extra>
            <sui-icon name="check" />
            121 Votes
          </sui-card-content>
        </sui-card>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Fluid Card"
        description="A fluid card takes up the width of its container"
        :code="fluidCardCode"
      >
        <sui-grid :columns="3">
          <sui-grid-column>
            <sui-card fluid>
              <sui-image src="/images/avatar/large/daniel.jpg" />
              <sui-card-content>
                <sui-card-header>Daniel Louise</sui-card-header>
              </sui-card-content>
            </sui-card>
          </sui-grid-column>
          <sui-grid-column>
            <sui-card fluid>
              <sui-image src="/images/avatar/large/helen.jpg" />
              <sui-card-content>
                <sui-card-header>Helen Troy</sui-card-header>
              </sui-card-content>
            </sui-card>
          </sui-grid-column>
          <sui-grid-column>
            <sui-card fluid>
              <sui-image src="/images/avatar/large/elliot.jpg" />
              <sui-card-content>
                <sui-card-header>Elliot Fu</sui-card-header>
              </sui-card-content>
            </sui-card>
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Centered Card"
        description="A card can center itself inside its container"
        :code="centeredCardCode"
      >
        <sui-card centered>
          <sui-image src="/images/avatar/large/elyse.png" />
          <sui-card-content>
            <sui-card-header>Elyse</sui-card-header>
          </sui-card-content>
        </sui-card>
      </doc-example>

      <doc-example
        title="Horizontal Cards"
        description="A card can display horizontally"
        :code="horizontalCardsCode"
      >
        <sui-card horizontal>
          <sui-image src="/images/avatar/large/elyse.png" />
          <sui-card-content>
            <sui-card-header>Cute Dog</sui-card-header>
            <sui-card-meta>
              <span class="category">Animals</span>
            </sui-card-meta>
            <sui-card-description>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-card-description>
          </sui-card-content>
        </sui-card>
      </doc-example>

      <doc-example
        title="Raised Card"
        description="A card may be formatted to raise above the page"
        :code="raisedCode"
      >
        <sui-card raised>
          <sui-card-content>
            <sui-card-header>Cute Dog</sui-card-header>
            <sui-card-meta>
              <span class="category">Animals</span>
            </sui-card-meta>
            <sui-card-description>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-card-description>
          </sui-card-content>
          <sui-card-content extra>
            <div class="right floated author">
              <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
            </div>
          </sui-card-content>
        </sui-card>
      </doc-example>

      <doc-example
        title="Link Card"
        description="A card can be formatted so that the entire contents link to another page"
        :code="linkCardCode"
      >
        <sui-card href="#" raised>
          <sui-card-content>
            <sui-card-header>Cute Dog</sui-card-header>
            <sui-card-meta>
              <span class="category">Animals</span>
            </sui-card-meta>
            <sui-card-description>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-card-description>
          </sui-card-content>
          <sui-card-content extra>
            <div class="right floated author">
              <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
            </div>
          </sui-card-content>
        </sui-card>
      </doc-example>

      <doc-example
        title="Text Alignment"
        description="Any element inside a card can have its text alignment specified"
        :code="textAlignCode"
      >
        <sui-card>
          <sui-card-content>
            <sui-card-header textAlign="center">Jenny Hess</sui-card-header>
            <sui-card-description textAlign="center">
              <p>Jenny is a student studying Media Management at the New School</p>
            </sui-card-description>
          </sui-card-content>
          <sui-card-content extra>
            <div class="center aligned author">
              <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"> Jenny
            </div>
          </sui-card-content>
        </sui-card>
      </doc-example>

      <doc-example
        title="Inverted"
        description="Card's colors can be inverted"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-card-group inverted>
            <sui-card>
              <sui-image src="/images/avatar/large/matthew.png" />
              <sui-card-content>
                <sui-card-header>Matt Giampietro</sui-card-header>
                <sui-card-meta>
                  <a>Friends</a>
                </sui-card-meta>
                <sui-card-description>
                  Matthew is an interior designer living in New York.
                </sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <span class="right floated">
                  Joined in 2013
                </span>
                <a>
                  <i class="user icon"></i>
                  75 Friends
                </a>
              </sui-card-content>
            </sui-card>
            <sui-card>
              <sui-image src="/images/avatar/large/molly.png" />
              <sui-card-content>
                <sui-card-header>Molly</sui-card-header>
                <sui-card-meta>
                  <a>Coworker</a>
                </sui-card-meta>
                <sui-card-description>
                  Molly is a personal assistant living in Paris.
                </sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <span class="right floated">
                  Joined in 2011
                </span>
                <a>
                  <i class="user icon"></i>
                  35 Friends
                </a>
              </sui-card-content>
            </sui-card>
            <sui-card>
              <sui-image src="/images/avatar/large/elyse.png" />
              <sui-card-content>
                <sui-card-header>Elyse</sui-card-header>
                <sui-card-meta>
                  <a>Coworker</a>
                </sui-card-meta>
                <sui-card-description>
                  Elyse is a copywriter working in New York.
                </sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <span class="right floated">
                  Joined in 2014
                </span>
                <a>
                  <i class="user icon"></i>
                  151 Friends
                </a>
              </sui-card-content>
            </sui-card>
          </sui-card-group>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Colored"
        description="A card can specify a color"
        :code="coloredCode"
      >
        <sui-card-group :itemsPerRow="4">
          <sui-card color="primary" href="#">
            <sui-image src="/images/wireframe/white-image.png" />
          </sui-card>
          <sui-card color="secondary" href="#">
            <sui-image src="/images/wireframe/white-image.png" />
          </sui-card>
          <sui-card color="red" href="#">
            <sui-image src="/images/wireframe/white-image.png" />
          </sui-card>
          <sui-card color="orange" href="#">
            <sui-image src="/images/wireframe/white-image.png" />
          </sui-card>
        </sui-card-group>
      </doc-example>

      <doc-example
        title="Column Count"
        description="A group of cards can set how many cards should exist in a row"
        :code="columnCountCode"
      >
        <sui-card-group :itemsPerRow="4">
          <sui-card>
            <sui-image src="/images/wireframe/image.png" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/wireframe/image.png" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/wireframe/image.png" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/wireframe/image.png" />
          </sui-card>
        </sui-card-group>
      </doc-example>

      <doc-example
        title="Stackable"
        description="A group of cards can automatically stack rows to a single columns on mobile devices"
        :code="stackableCode"
      >
        <sui-card-group :itemsPerRow="3" stackable>
          <sui-card>
            <sui-image src="/images/avatar/large/elliot.jpg" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/avatar/large/helen.jpg" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/avatar/large/jenny.jpg" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/avatar/large/veronika.jpg" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/avatar/large/stevie.jpg" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/avatar/large/steve.jpg" />
          </sui-card>
        </sui-card-group>
      </doc-example>

      <doc-example
        title="Doubling"
        description="A group of cards can double its column width for mobile"
        :code="doublingCode"
      >
        <sui-card-group :itemsPerRow="6" doubling>
          <sui-card>
            <sui-image src="/images/avatar/large/elliot.jpg" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/avatar/large/helen.jpg" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/avatar/large/jenny.jpg" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/avatar/large/veronika.jpg" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/avatar/large/stevie.jpg" />
          </sui-card>
          <sui-card>
            <sui-image src="/images/avatar/large/steve.jpg" />
          </sui-card>
        </sui-card-group>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'CardDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const cardCode = `<sui-card>
  <sui-image src="/images/avatar/large/kristy.png" wrapped />
  <sui-card-content>
    <sui-card-header>Kristy</sui-card-header>
    <sui-card-meta>
      <span class="date">Joined in 2013</span>
    </sui-card-meta>
    <sui-card-description>
      Kristy is an art director living in New York.
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <a>
      <sui-icon name="user" />
      22 Friends
    </a>
  </sui-card-content>
</sui-card>`

    const cardsCode = `<sui-card-group>
  <sui-card>
    <sui-card-content>
      <sui-image src="/images/avatar/small/elliot.jpg" floated="right" size="mini" />
      <sui-card-header>Elliot Fu</sui-card-header>
      <sui-card-meta>Friends of Veronika</sui-card-meta>
      <sui-card-description>Elliot requested permission to view your contact details</sui-card-description>
    </sui-card-content>
    <sui-card-content extra>
      <sui-button-group :widths="2">
        <sui-button basic color="green">Approve</sui-button>
        <sui-button basic color="red">Decline</sui-button>
      </sui-button-group>
    </sui-card-content>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-image src="/images/avatar/small/jenny.jpg" floated="right" size="mini" />
      <sui-card-header>Jenny Hess</sui-card-header>
      <sui-card-meta>New Member</sui-card-meta>
      <sui-card-description>Jenny wants to add you to the group best friends</sui-card-description>
    </sui-card-content>
    <sui-card-content extra>
      <sui-button-group :widths="2">
        <sui-button basic color="green">Approve</sui-button>
        <sui-button basic color="red">Decline</sui-button>
      </sui-button-group>
    </sui-card-content>
  </sui-card>
</sui-card-group>`

    const contentBlockCode = `<sui-card>
  <sui-card-content>
    <sui-card-header>Project Timeline</sui-card-header>
  </sui-card-content>
  <sui-card-content>
    <sui-header sub>Activity</sui-header>
    <sui-feed size="small">
      <sui-feed-event>
        <sui-feed-content>
          <sui-feed-summary>
            <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
          </sui-feed-summary>
        </sui-feed-content>
      </sui-feed-event>
      <sui-feed-event>
        <sui-feed-content>
          <sui-feed-summary>
            <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
          </sui-feed-summary>
        </sui-feed-content>
      </sui-feed-event>
      <sui-feed-event>
        <sui-feed-content>
          <sui-feed-summary>
            <a>Helen Troy</a> added two pictures
          </sui-feed-summary>
        </sui-feed-content>
      </sui-feed-event>
    </sui-feed>
  </sui-card-content>
  <sui-card-content extra>
    <sui-button as="button">Join Project</sui-button>
  </sui-card-content>
</sui-card>`

    const imageCode = `<sui-card>
  <sui-image src="/images/avatar/large/kristy.png" wrapped />
  <sui-card-content>
    <sui-card-header>Kristy</sui-card-header>
    <sui-card-meta>
      <span class="date">Joined in 2013</span>
    </sui-card-meta>
    <sui-card-description>
      Kristy is an art director living in New York.
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <a>
      <sui-icon name="user" />
      22 Friends
    </a>
  </sui-card-content>
</sui-card>`

    const headerCode = `<sui-card-group>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Elliot Fu</sui-card-header>
      <sui-card-meta>Friend</sui-card-meta>
      <sui-card-description>
        Elliot Fu is a film-maker from New York.
      </sui-card-description>
    </sui-card-content>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Veronika Ossi</sui-card-header>
      <sui-card-meta>Friend</sui-card-meta>
      <sui-card-description>
        Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
      </sui-card-description>
    </sui-card-content>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Jenny Hess</sui-card-header>
      <sui-card-meta>Friend</sui-card-meta>
      <sui-card-description>
        Jenny is a student studying Media Management at the New School
      </sui-card-description>
    </sui-card-content>
  </sui-card>
</sui-card-group>`

    const metadataCode = `<sui-card>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span>2 days ago</span>
      <a>Animals</a>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
</sui-card>`

    const buttonsCode = `<sui-card-group>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Elliot Fu</sui-card-header>
      <sui-card-description>
        Elliot Fu is a film-maker from New York.
      </sui-card-description>
    </sui-card-content>
    <sui-button attached="bottom">
      <sui-icon name="add" />
      Add Friend
    </sui-button>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Veronika Ossi</sui-card-header>
      <sui-card-description>
        Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
      </sui-card-description>
    </sui-card-content>
    <sui-button attached="bottom">
      <sui-icon name="add" />
      Add Friend
    </sui-button>
  </sui-card>
</sui-card-group>`

    const descriptionCode = `<sui-card>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>2 days ago</sui-card-meta>
    <sui-card-description>
      <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
      <p>Many people also have their own barometers for what makes a cute dog.</p>
    </sui-card-description>
  </sui-card-content>
</sui-card>`

    const extraContentCode = `<sui-card>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>2 days ago</sui-card-meta>
    <sui-card-description>
      <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
      <p>Many people also have their own barometers for what makes a cute dog.</p>
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <sui-icon name="check" />
    121 Votes
  </sui-card-content>
</sui-card>`

    const fluidCardCode = `<sui-grid :columns="3">
  <sui-grid-column>
    <sui-card fluid>
      <sui-image src="/images/avatar/large/daniel.jpg" />
      <sui-card-content>
        <sui-card-header>Daniel Louise</sui-card-header>
      </sui-card-content>
    </sui-card>
  </sui-grid-column>
  <sui-grid-column>
    <sui-card fluid>
      <sui-image src="/images/avatar/large/helen.jpg" />
      <sui-card-content>
        <sui-card-header>Helen Troy</sui-card-header>
      </sui-card-content>
    </sui-card>
  </sui-grid-column>
  <sui-grid-column>
    <sui-card fluid>
      <sui-image src="/images/avatar/large/elliot.jpg" />
      <sui-card-content>
        <sui-card-header>Elliot Fu</sui-card-header>
      </sui-card-content>
    </sui-card>
  </sui-grid-column>
</sui-grid>`

    const centeredCardCode = `<sui-card centered>
  <sui-image src="/images/avatar/large/elyse.png" />
  <sui-card-content>
    <sui-card-header>Elyse</sui-card-header>
  </sui-card-content>
</sui-card>`

    const horizontalCardsCode = `<sui-card horizontal>
  <sui-image src="/images/avatar/large/elyse.png" />
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span class="category">Animals</span>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
</sui-card>`

    const raisedCode = `<sui-card raised>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span class="category">Animals</span>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <div class="right floated author">
      <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
    </div>
  </sui-card-content>
</sui-card>`

    const linkCardCode = `<sui-card href="#" raised>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span class="category">Animals</span>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <div class="right floated author">
      <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
    </div>
  </sui-card-content>
</sui-card>`

    const textAlignCode = `<sui-card>
  <sui-card-content>
    <sui-card-header textAlign="center">Jenny Hess</sui-card-header>
    <sui-card-description textAlign="center">
      <p>Jenny is a student studying Media Management at the New School</p>
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <div class="center aligned author">
      <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"> Jenny
    </div>
  </sui-card-content>
</sui-card>`

    const invertedCode = `<sui-segment inverted>
  <sui-card-group inverted>
    <sui-card>
      <sui-image src="/images/avatar/large/matthew.png" />
      <sui-card-content>
        <sui-card-header>Matt Giampietro</sui-card-header>
        <sui-card-meta>
          <a>Friends</a>
        </sui-card-meta>
        <sui-card-description>
          Matthew is an interior designer living in New York.
        </sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <span class="right floated">
          Joined in 2013
        </span>
        <a>
          <i class="user icon"></i>
          75 Friends
        </a>
      </sui-card-content>
    </sui-card>
    <sui-card>
      <sui-image src="/images/avatar/large/molly.png" />
      <sui-card-content>
        <sui-card-header>Molly</sui-card-header>
        <sui-card-meta>
          <a>Coworker</a>
        </sui-card-meta>
        <sui-card-description>
          Molly is a personal assistant living in Paris.
        </sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <span class="right floated">
          Joined in 2011
        </span>
        <a>
          <i class="user icon"></i>
          35 Friends
        </a>
      </sui-card-content>
    </sui-card>
    <sui-card>
      <sui-image src="/images/avatar/large/elyse.png" />
      <sui-card-content>
        <sui-card-header>Elyse</sui-card-header>
        <sui-card-meta>
          <a>Coworker</a>
        </sui-card-meta>
        <sui-card-description>
          Elyse is a copywriter working in New York.
        </sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <span class="right floated">
          Joined in 2014
        </span>
        <a>
          <i class="user icon"></i>
          151 Friends
        </a>
      </sui-card-content>
    </sui-card>
  </sui-card-group>
</sui-segment>`

    const coloredCode = `<sui-card-group :itemsPerRow="4">
  <sui-card color="primary" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
  <sui-card color="secondary" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
  <sui-card color="red" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
  <sui-card color="orange" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
</sui-card-group>`

    const columnCountCode = `<sui-card-group :itemsPerRow="4">
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
</sui-card-group>`

    const stackableCode = `<sui-card-group :itemsPerRow="3" stackable>
  <sui-card>
    <sui-image src="/images/avatar/large/elliot.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/helen.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/jenny.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/veronika.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/stevie.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/steve.jpg" />
  </sui-card>
</sui-card-group>`

    const doublingCode = `<sui-card-group :itemsPerRow="6" doubling>
  <sui-card>
    <sui-image src="/images/avatar/large/elliot.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/helen.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/jenny.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/veronika.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/stevie.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/steve.jpg" />
  </sui-card>
</sui-card-group>`

    return {
      cardCode,
      cardsCode,
      contentBlockCode,
      imageCode,
      headerCode,
      metadataCode,
      buttonsCode,
      descriptionCode,
      extraContentCode,
      fluidCardCode,
      centeredCardCode,
      horizontalCardsCode,
      raisedCode,
      linkCardCode,
      textAlignCode,
      invertedCode,
      coloredCode,
      columnCountCode,
      stackableCode,
      doublingCode
    }
  }
})
</script>