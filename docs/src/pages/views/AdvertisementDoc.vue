<template>
  <div>
    <doc-page-header
      title="Advertisement"
      sub="An ad displays third-party promotional content"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Ad"
        description="A standard ad"
        :code="adCode"
      >
        <sui-advertisement unit="medium rectangle">
          <img src="/images/wireframe/image.png" />
        </sui-advertisement>
      </doc-example>

      <doc-example
        title="Common Units"
        description="An advertisement can appear in common ad unit sizes"
        :code="commonUnitsCode"
      >
        <div>
          <sui-advertisement unit="medium rectangle" test="Medium Rectangle" />
          <sui-advertisement unit="banner" test="Banner" />
          <sui-advertisement unit="leaderboard" test="Leaderboard" />
          <sui-advertisement unit="large rectangle" test="Large Rectangle" />
          <sui-advertisement unit="half page" test="Half Page" />
        </div>
      </doc-example>

      <doc-example
        title="Mobile"
        description="An ad can use common mobile ad sizes"
        :code="mobileCode"
      >
        <div>
          <sui-advertisement unit="mobile banner" test="Mobile Banner" />
          <sui-advertisement unit="mobile leaderboard" test="Mobile Leaderboard" />
        </div>
      </doc-example>

      <doc-example
        title="Rectangle"
        description="An ad can use a common rectangle ad unit size"
        :code="rectangleCode"
      >
        <sui-advertisement unit="medium rectangle" test="Medium Rectangle" />
      </doc-example>

      <doc-example
        title="Button"
        description="An ad can use button ad unit size"
        :code="buttonCode"
      >
        <div>
          <sui-advertisement unit="button" test="Button"  />
          <sui-advertisement unit="square button" test="Square Button"  />
          <sui-advertisement unit="small button" test="Small Button"  />
        </div>
      </doc-example>

      <doc-example
        title="Skyscraper"
        description="An ad can use skyscraper ad unit size"
        :code="skyscraperCode"
      >
        <div>
          <sui-advertisement unit="skyscraper" test="Skyscraper"  />
          <br />
          <sui-advertisement unit="wide skyscraper" test="Wide Skyscraper"  />
        </div>
      </doc-example>

      <doc-example
        title="Banner"
        description="An ad can use banner ad unit size"
        :code="bannerCode"
      >
        <div>
          <sui-advertisement unit="banner" test="Banner" />
          <sui-advertisement unit="vertical banner" test="Vertical Banner" />
          <sui-advertisement unit="top banner" test="Top Banner" />
          <sui-advertisement unit="half banner" test="Half Banner" />
        </div> 
      </doc-example>

      <doc-example
        title="Leaderboard"
        description="An ad can use leaderboard ad unit size"
        :code="leaderboardCode"
      >
        <div>
          <sui-advertisement unit="leaderboard" test="Leaderboard" />
          <sui-advertisement unit="large leaderboard" test="Large Leaderboard" />
          <sui-advertisement unit="billboard" test="Billboard" />
        </div>
      </doc-example>

      <doc-example
        title="Panorama"
        description="An ad can use panorama ad unit size"
        :code="panoramaCode"
      >
        <sui-advertisement unit="panorama" test="Panorama" />
      </doc-example>

      <doc-example
        title="Netboard"
        description="An ad can use netboard ad unit size"
        :code="netboardCode"
      >
        <sui-advertisement unit="netboard" test="Netboard" />
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Centered"
        description="An advertisement can appear centered"
        :code="centeredCode"
      >
        <sui-advertisement centered unit="banner" test="Centered" /> 
      </doc-example>

      <doc-example
        title="Test"
        description="A advertisement can be formatted to help verify placement"
        :code="testCode"
      >
        <sui-advertisement unit="medium rectangle" test="Ad Unit 1" />
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'AdvertisementDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const adCode = `<sui-advertisement unit="medium rectangle">
  <img src="/images/wireframe/image.png" />
</sui-advertisement>`

    const commonUnitsCode = `<div>
  <sui-advertisement unit="medium rectangle" test="Medium Rectangle" />
  <sui-advertisement unit="banner" test="Banner" />
  <sui-advertisement unit="leaderboard" test="Leaderboard" />
  <sui-advertisement unit="large rectangle" test="Large Rectangle" />
  <sui-advertisement unit="half page" test="Half Page" />
</div>`

    const mobileCode = `<div>
  <sui-advertisement unit="mobile banner" test="Mobile Banner" />
  <sui-advertisement unit="mobile leaderboard" test="Mobile Leaderboard" />
</div>`

    const rectangleCode = `<sui-advertisement unit="medium rectangle" test="Medium Rectangle" />`

    const buttonCode = `<div>
  <sui-advertisement unit="button" test="Button"  />
  <sui-advertisement unit="square button" test="Square Button"  />
  <sui-advertisement unit="small button" test="Small Button"  />
</div>`

    const skyscraperCode = `<div>
  <sui-advertisement unit="skyscraper" test="Skyscraper"  />
  <br />
  <sui-advertisement unit="wide skyscraper" test="Wide Skyscraper"  />
</div>`

    const bannerCode = `<div>
  <sui-advertisement unit="banner" test="Banner" />
  <sui-advertisement unit="vertical banner" test="Vertical Banner" />
  <sui-advertisement unit="top banner" test="Top Banner" />
  <sui-advertisement unit="half banner" test="Half Banner" />
</div>`

    const leaderboardCode = `<div>
  <sui-advertisement unit="leaderboard" test="Leaderboard" />
  <sui-advertisement unit="large leaderboard" test="Large Leaderboard" />
  <sui-advertisement unit="billboard" test="Billboard" />
</div>`

    const panoramaCode = `<sui-advertisement unit="panorama" test="Panorama" />`
    const netboardCode = `<sui-advertisement unit="netboard" test="Netboard" />`
    const centeredCode = `<sui-advertisement centered unit="banner" test="Centered" /> `
    const testCode = `<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />`

    return {
      adCode,
      commonUnitsCode,
      mobileCode,
      rectangleCode,
      buttonCode,
      skyscraperCode,
      bannerCode,
      leaderboardCode,
      panoramaCode,
      netboardCode,
      centeredCode,
      testCode
    }
  }
})
</script>