<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Image
            <sui-header-subheader>
              An image is a graphic representation of something
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
        title="Image"
        description="An image"
        :code="imageCode"
      >
        <sui-image src="/images/wireframe/image.png" size="small" />
      </doc-example>

      <doc-example
        title="Image Link"
        description="An image can be formatted to link to other content"
        :code="imageLinkCode"
      >
        <sui-image
          as="a"
          size="medium"
          src="/images/wireframe/image-text.png"
          href="https://google.com"
          target="_blank"
        />
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Hidden"
        description="An image can be hidden"
        :code="hiddenCode"
      >
        <sui-image hidden src="/images/wireframe/image.png" size="small" />
      </doc-example>

      <doc-example
        title="Disabled"
        description="An image can show that it is disabled and cannot be selected"
        :code="disabledCode"
      >
        <sui-image disabled src="/images/wireframe/image.png" size="small" />
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Avatar"
        description="An image may be formatted to appear inline with text as an avatar"
        :code="avatarCode"
      >
        <div>
          <sui-image avatar src="/images/wireframe/image.png" />
          <span>Username</span>
        </div>
      </doc-example>

      <doc-example
        title="Bordered"
        description="An image may include a border to emphasize the edges of white or transparent content"
        :code="borderedCode"
      >
        <sui-image bordered size="medium" src="/images/wireframe/white-image.png" />
      </doc-example>

      <doc-example
        title="Fluid"
        description="An image can take up the width of its container"
        :code="fluidCode"
      >
        <sui-image fluid src="/images/wireframe/image.png" />
      </doc-example>

      <doc-example
        title="Rounded"
        description="An image may appear rounded"
        :code="roundedCode"
      >
        <sui-image rounded size="medium" src="/images/wireframe/image.png" />
      </doc-example>

      <doc-example
        title="Circular"
        description="An image may appear circular"
        :code="circularCode"
      >
        <sui-image circular size="medium" src="/images/wireframe/square-image.png" />
      </doc-example>

      <doc-example
        title="Vertically Aligned"
        description="An image can specify its vertical alignment"
        :code="verticallyAlignedCode"
      >
        <div>
          <sui-image verticalAlign="top" size="tiny" src="/images/wireframe/square-image.png" />
          <span>Top Aligned</span>
          <sui-divider />
          <sui-image verticalAlign="middle" size="tiny" src="/images/wireframe/square-image.png" />
          <span>Middle Aligned</span>
          <sui-divider />
          <sui-image verticalAlign="bottom" size="tiny" src="/images/wireframe/square-image.png" />
          <span>Bottom Aligned</span>
        </div>
      </doc-example>

      <doc-example
        title="Centered"
        description="An image can appear centered in a content block"
        :code="centeredCode"
      >
        <sui-segment>
          <sui-image centered size="medium" src="/images/wireframe/image.png" />
          <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
          <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
          <sui-image centered size="small" src="/images/wireframe/image-text.png" />
          <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Spaced"
        description="An image can specify that it needs an additional spacing to separate it from nearby content"
        :code="spacedCode"
      >
        <sui-segment>
          <p>Te eum doming eirmod, nominati pertinacia 
          <sui-image spaced size="mini" src="/images/wireframe/image.png" />
           argumentum ad his. Ex eam alia facete scriptorem, 
           est autem aliquip detraxit at. Usu ocurreret referrentur at, 
           cu epicurei appellantur vix. Cum ea laoreet recteque electram, 
           eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Floated"
        description="An image can sit to the left or right of other content"
        :code="floatedCode"
      >
        <sui-segment>
          <sui-image floated="left" size="small" src="/images/wireframe/image-text.png" />
          <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. 
            Ex eam alia facete scriptorem, est autem aliquip detraxit at. 
            Usu ocurreret referrentur at, cu epicurei appellantur vix. 
            Cum ea laoreet recteque electram, eos choro alterum definiebas in. 
            Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
          <sui-image floated="right" size="small" src="/images/wireframe/image-text.png" />
          <p>Audiam quaerendum eu sea, pro omittam definiebas ex. 
            Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, 
            his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, 
            vim vivendum maiestatis in.</p>
          <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. 
            Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. 
            Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, 
            wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, 
            quas minimum postulant per id.</p>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Size"
        description="An image may appear at different sizes"
        :code="sizeCode"
      >
        <div>
          <sui-image size="mini" src="/images/wireframe/image.png" />
          <sui-divider hidden />
          <sui-image size="tiny" src="/images/wireframe/image.png" />
          <sui-divider hidden />
          <sui-image size="medium" src="/images/wireframe/image.png" />
          <sui-divider hidden />
          <sui-image size="large" src="/images/wireframe/image.png" />
        </div>
      </doc-example>

      <sui-header as="h2" dividing>Groups</sui-header>

      <doc-example
        title="Size"
        description="A group of images can be formatted to have the same size"
        :code="sizeGroupCode"
      >
        <sui-image-group size="tiny">
          <sui-image src="/images/wireframe/image.png" />
          <sui-image src="/images/wireframe/image.png" />
          <sui-image src="/images/wireframe/image.png" />
          <sui-image src="/images/wireframe/image.png" />
        </sui-image-group>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'ImageDoc',
  components: { DocExample },
  setup() {
    const imageCode = `<sui-image src="/images/image.png" size="small" />`
    const imageLinkCode = `<sui-image
  as="a"
  size="medium"
  src="/images/image-text.png"
  href="https://google.com"
  target="_blank"
/>`

    const hiddenCode = `<sui-image hidden src="/images/image.png" size="small" />`
    const disabledCode = `<sui-image disabled src="/images/image.png" size="small" />`

    const avatarCode = `<div>
  <sui-image avatar src="/images/image.png" />
  <span>Username</span>
</div>`

    const borderedCode = `<sui-image bordered size="medium" src="/images/white-image.png" />`
    const fluidCode = `<sui-image fluid src="/images/image.png" />`
    const roundedCode = `<sui-image rounded size="medium" src="/images/image.png" />`
    const circularCode = `<sui-image circular size="medium" src="/images/square-image.png" />`

    const verticallyAlignedCode = `<div>
  <sui-image verticalAlign="top" size="tiny" src="/images/square-image.png" />
  <span>Top Aligned</span>
  <sui-divider />
  <sui-image verticalAlign="middle" size="tiny" src="/images/square-image.png" />
  <span>Middle Aligned</span>
  <sui-divider />
  <sui-image verticalAlign="bottom" size="tiny" src="/images/square-image.png" />
  <span>Bottom Aligned</span>
</div>`

    const centeredCode = `<sui-segment>
  <sui-image centered size="medium" src="/images/wireframe/image.png" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
  <sui-image centered size="small" src="/images/wireframe/image-text.png" />
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</sui-segment>`

    const spacedCode = `<sui-segment>
  <p>Te eum doming eirmod, nominati pertinacia 
  <sui-image spaced size="mini" src="/images/image.png" />
    argumentum ad his. Ex eam alia facete scriptorem, 
    est autem aliquip detraxit at. Usu ocurreret referrentur at, 
    cu epicurei appellantur vix. Cum ea laoreet recteque electram, 
    eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
</sui-segment>`

    const floatedCode = `<sui-segment>
  <sui-image floated="left" size="small" src="/images/image-text.png" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. 
    Ex eam alia facete scriptorem, est autem aliquip detraxit at. 
    Usu ocurreret referrentur at, cu epicurei appellantur vix. 
    Cum ea laoreet recteque electram, eos choro alterum definiebas in. 
    Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <sui-image floated="right" size="small" src="/images/image-text.png" />
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. 
    Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, 
    his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, 
    vim vivendum maiestatis in.</p>
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. 
    Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. 
    Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, 
    wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, 
    quas minimum postulant per id.</p>
</sui-segment>`

    const sizeCode = `<div>
  <sui-image size="mini" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="tiny" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="medium" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="large" src="/images/image.png" />
</div>`

    const sizeGroupCode = `<sui-image-group size="tiny">
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
</sui-image-group>`

    return {
      imageCode,
      imageLinkCode,
      hiddenCode,
      disabledCode,
      avatarCode,
      borderedCode,
      fluidCode,
      roundedCode,
      circularCode,
      verticallyAlignedCode,
      centeredCode,
      spacedCode,
      floatedCode,
      sizeCode,
      sizeGroupCode
    }
  }
})
</script>