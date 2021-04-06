<template>
  <div>
    <doc-page-header
      title="Statistic"
      sub="A statistic emphasizes the current value of an attribute"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Statistic"
        description="A statistic can display a value with a label above or below it"
        :code="statisticCode"
      >
        <sui-statistic value="5,550" label="Downloads" />
      </doc-example>

      <doc-example
        title="Statistic Group"
        description="A group of statistics"
        :code="groupCode"
      >
        <sui-statistic-group>
          <sui-statistic value="22" label="Faves" />
          <sui-statistic value="31,200" label="Views" />
          <sui-statistic value="22" label="Members" />
        </sui-statistic-group>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Value"
        description="A statistic can contain a numeric, icon, image, or text value"
        :code="valueCode"
      >
        <sui-statistic-group>
          <sui-statistic value="22" label="Faves" />
          <sui-statistic>
            <sui-statistic-value text>
              Three<br>
              Thousand
            </sui-statistic-value>
            <sui-statistic-label>Signups</sui-statistic-label>
          </sui-statistic>
          <sui-statistic>
            <sui-statistic-value>
              <sui-icon name="plane" /> 5
            </sui-statistic-value>
            <sui-statistic-label>Flights</sui-statistic-label>
          </sui-statistic>
          <sui-statistic>
            <sui-statistic-value>
              <sui-image circular inline src="/images/avatar/small/joe.jpg" />
              42
            </sui-statistic-value>
            <sui-statistic-label>Team Members</sui-statistic-label>
          </sui-statistic>
        </sui-statistic-group>
      </doc-example>

      <doc-example
        title="Label"
        description="A statistic can contain a label to help provide context for the presented value"
        :code="labelCode"
      >
        <sui-statistic value="2,204" label="Views" />
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Horizontal Statistic"
        description="A statistic can present its measurement horizontally"
        :code="horizontalCode"
      >
        <sui-statistic horizontal value="2,204" label="Views" />
      </doc-example>

      <doc-example
        title="Colored"
        description="A statistic can be formatted to be different colors"
        :code="coloredCode"
      >
        <sui-statistic-group>
          <sui-statistic color="red" value="27" label="Red" />
          <sui-statistic color="orange" value="8" label="Orange" />
          <sui-statistic color="yellow" value="28" label="Yellow" />
          <sui-statistic color="olive" value="7" label="Olive" />
          <sui-statistic color="green" value="14" label="Green" />
          <sui-statistic color="teal" value="82" label="Teal" />
          <sui-statistic color="blue" value="1" label="Blue" />
          <sui-statistic color="violet" value="22" label="Violet" />
          <sui-statistic color="purple" value="23" label="Purple" />
          <sui-statistic color="pink" value="15" label="Pink" />
          <sui-statistic color="brown" value="36" label="Brown" />
          <sui-statistic color="grey" value="49" label="Grey" />
        </sui-statistic-group>
      </doc-example>

      <doc-example
        title="Inverted"
        description="A statistic can be formatted to fit on a dark background"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-statistic-group inverted>
            <sui-statistic color="red" value="27" label="Red" />
            <sui-statistic color="orange" value="8" label="Orange" />
            <sui-statistic color="yellow" value="28" label="Yellow" />
            <sui-statistic color="olive" value="7" label="Olive" />
            <sui-statistic color="green" value="14" label="Green" />
            <sui-statistic color="teal" value="82" label="Teal" />
            <sui-statistic color="blue" value="1" label="Blue" />
            <sui-statistic color="violet" value="22" label="Violet" />
            <sui-statistic color="purple" value="23" label="Purple" />
            <sui-statistic color="pink" value="15" label="Pink" />
            <sui-statistic color="brown" value="36" label="Brown" />
            <sui-statistic color="grey" value="49" label="Grey" />
          </sui-statistic-group>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Stackable"
        description="A statistic can automatically stack rows to a single columns on mobile devices"
        :code="stackableCode"
      >
        <sui-statistic-group stackable>
          <sui-statistic color="red" value="27" label="Red" />
          <sui-statistic color="orange" value="8" label="Orange" />
          <sui-statistic color="yellow" value="28" label="Yellow" />
          <sui-statistic color="olive" value="7" label="Olive" />
          <sui-statistic color="green" value="14" label="Green" />
          <sui-statistic color="teal" value="82" label="Teal" />
          <sui-statistic color="blue" value="1" label="Blue" />
          <sui-statistic color="violet" value="22" label="Violet" />
          <sui-statistic color="purple" value="23" label="Purple" />
          <sui-statistic color="pink" value="15" label="Pink" />
          <sui-statistic color="brown" value="36" label="Brown" />
          <sui-statistic color="grey" value="49" label="Grey" />
        </sui-statistic-group>
      </doc-example>

      <doc-example
        title="Evenly Divided"
        description="A statistic group can have its items divided evenly"
        :code="evenlyDividedCode"
      >
        <sui-statistic-group :widths="4">
          <sui-statistic value="22" label="Faves" />
          <sui-statistic>
            <sui-statistic-value text>
              Three<br>
              Thousand
            </sui-statistic-value>
            <sui-statistic-label>Signups</sui-statistic-label>
          </sui-statistic>
          <sui-statistic>
            <sui-statistic-value>
              <sui-icon name="plane" /> 5
            </sui-statistic-value>
            <sui-statistic-label>Flights</sui-statistic-label>
          </sui-statistic>
          <sui-statistic>
            <sui-statistic-value>
              <sui-image circular inline src="/images/avatar/small/joe.jpg" />
              42
            </sui-statistic-value>
            <sui-statistic-label>Team Members</sui-statistic-label>
          </sui-statistic>
        </sui-statistic-group>
      </doc-example>

      <doc-example
        title="Floated"
        description="An statistic can sit to the left or right of other content"
        :code="floatedCode"
      >
        <sui-segment>
          <sui-statistic floated="right" value="2,204" label="Views" />
          <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
          <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
          <sui-statistic floated="left" value="2,204" label="Views" />
          <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
          <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Size"
        description="A statistic can vary in size"
        :code="sizeCode"
      >
        <sui-statistic size="mini" value="2,204" label="Views" />
        <sui-statistic size="tiny" value="2,204" label="Views" />
        <sui-statistic size="small" value="2,204" label="Views" />
        <sui-statistic value="2,204" label="Views" />
        <sui-statistic size="large" value="2,204" label="Views" />
        <sui-statistic size="huge" value="2,204" label="Views" />
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'StatisticDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const statisticCode = `<sui-statistic value="5,550" label="Downloads" />`

    const groupCode = `<sui-statistic-group>
  <sui-statistic value="22" label="Faves" />
  <sui-statistic value="31,200" label="Views" />
  <sui-statistic value="22" label="Members" />
</sui-statistic-group>`

    const valueCode = `<sui-statistic-group>
  <sui-statistic value="22" label="Faves" />
  <sui-statistic>
    <sui-statistic-value text>
      Three<br>
      Thousand
    </sui-statistic-value>
    <sui-statistic-label>Signups</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-icon name="plane" /> 5
    </sui-statistic-value>
    <sui-statistic-label>Flights</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-image circular inline src="/images/avatar/small/joe.jpg" />
      42
    </sui-statistic-value>
    <sui-statistic-label>Team Members</sui-statistic-label>
  </sui-statistic>
</sui-statistic-group>`

    const labelCode = `<sui-statistic value="2,204" label="Views" />`
    const horizontalCode = `<sui-statistic horizontal value="2,204" label="Views" />`

    const coloredCode = `<sui-statistic-group>
  <sui-statistic color="red" value="27" label="Red" />
  <sui-statistic color="orange" value="8" label="Orange" />
  <sui-statistic color="yellow" value="28" label="Yellow" />
  <sui-statistic color="olive" value="7" label="Olive" />
  <sui-statistic color="green" value="14" label="Green" />
  <sui-statistic color="teal" value="82" label="Teal" />
  <sui-statistic color="blue" value="1" label="Blue" />
  <sui-statistic color="violet" value="22" label="Violet" />
  <sui-statistic color="purple" value="23" label="Purple" />
  <sui-statistic color="pink" value="15" label="Pink" />
  <sui-statistic color="brown" value="36" label="Brown" />
  <sui-statistic color="grey" value="49" label="Grey" />
</sui-statistic-group>`

    const invertedCode = `<sui-segment inverted>
  <sui-statistic-group inverted>
    <sui-statistic color="red" value="27" label="Red" />
    <sui-statistic color="orange" value="8" label="Orange" />
    <sui-statistic color="yellow" value="28" label="Yellow" />
    <sui-statistic color="olive" value="7" label="Olive" />
    <sui-statistic color="green" value="14" label="Green" />
    <sui-statistic color="teal" value="82" label="Teal" />
    <sui-statistic color="blue" value="1" label="Blue" />
    <sui-statistic color="violet" value="22" label="Violet" />
    <sui-statistic color="purple" value="23" label="Purple" />
    <sui-statistic color="pink" value="15" label="Pink" />
    <sui-statistic color="brown" value="36" label="Brown" />
    <sui-statistic color="grey" value="49" label="Grey" />
  </sui-statistic-group>
</sui-segment>`

    const stackableCode = `<sui-statistic-group stackable>
  <sui-statistic color="red" value="27" label="Red" />
  <sui-statistic color="orange" value="8" label="Orange" />
  <sui-statistic color="yellow" value="28" label="Yellow" />
  <sui-statistic color="olive" value="7" label="Olive" />
  <sui-statistic color="green" value="14" label="Green" />
  <sui-statistic color="teal" value="82" label="Teal" />
  <sui-statistic color="blue" value="1" label="Blue" />
  <sui-statistic color="violet" value="22" label="Violet" />
  <sui-statistic color="purple" value="23" label="Purple" />
  <sui-statistic color="pink" value="15" label="Pink" />
  <sui-statistic color="brown" value="36" label="Brown" />
  <sui-statistic color="grey" value="49" label="Grey" />
</sui-statistic-group>`

    const evenlyDividedCode = `<sui-statistic-group :widths="4">
  <sui-statistic value="22" label="Faves" />
  <sui-statistic>
    <sui-statistic-value text>
      Three<br>
      Thousand
    </sui-statistic-value>
    <sui-statistic-label>Signups</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-icon name="plane" /> 5
    </sui-statistic-value>
    <sui-statistic-label>Flights</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-image circular inline src="/images/avatar/small/joe.jpg" />
      42
    </sui-statistic-value>
    <sui-statistic-label>Team Members</sui-statistic-label>
  </sui-statistic>
</sui-statistic-group>`

    const floatedCode = `<sui-segment>
  <sui-statistic floated="right" value="2,204" label="Views" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
  <sui-statistic floated="left" value="2,204" label="Views" />
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
</sui-segment>`

    const sizeCode = `<sui-statistic size="mini" value="2,204" label="Views" />
<sui-statistic size="tiny" value="2,204" label="Views" />
<sui-statistic size="small" value="2,204" label="Views" />
<sui-statistic value="2,204" label="Views" />
<sui-statistic size="large" value="2,204" label="Views" />
<sui-statistic size="huge" value="2,204" label="Views" />`

    return {
      statisticCode,
      groupCode,
      valueCode,
      labelCode,
      horizontalCode,
      coloredCode,
      invertedCode,
      stackableCode,
      evenlyDividedCode,
      floatedCode,
      sizeCode
    }
  }
})
</script>