<template>
  <div>
    <doc-page-header
     title="Breadcrumb"
     sub="A breadcrumb is used to show hierarchy between content"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Breadcrumb"
        description="A standard breadcrumb"
        :code="breadcrumbCode"
      >
        <sui-breadcrumb>
          <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
          <sui-breadcrumb-section link>Store</sui-breadcrumb-section>
          <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
          <sui-breadcrumb-section active>T-Shirt</sui-breadcrumb-section>
        </sui-breadcrumb>
      </doc-example>

      <doc-example
        description="You can do the same using shorthands"
        :code="breadcrumbCode2"
      >
        <sui-breadcrumb
          :sections="[
            { content: 'Home', link: true },
            { content: 'Store', link: true },
            { content: 'T-Shirt', active: true }
          ]"
          icon="right angle"
        />
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Divider"
        description="A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text"
        :code="dividerCode"
      >
        <sui-breadcrumb>
          <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider icon="right chevron" />
          <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
          <sui-breadcrumb-divider icon="right arrow" />
          <sui-breadcrumb-section active>Personal Information</sui-breadcrumb-section>
        </sui-breadcrumb>
      </doc-example>

      <doc-example
        title="Section"
        description="A breadcrumb can contain sections that can either be formatted as a link or text"
        :code="sectionCode"
      >
        <sui-breadcrumb>
          <sui-breadcrumb-section>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
          <sui-breadcrumb-section active>Search</sui-breadcrumb-section>
        </sui-breadcrumb>
      </doc-example>

      <doc-example
        title="Link"
        description="A section may be linkable or contain a link"
        :code="linkCode"
      >
        <sui-breadcrumb>
          <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
          <sui-breadcrumb-section active>Search</sui-breadcrumb-section>
        </sui-breadcrumb>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Active"
        description="A section can be active"
        :code="activeCode"
      >
        <sui-breadcrumb>
          <sui-breadcrumb-section link>Product</sui-breadcrumb-section>
          <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
          <sui-breadcrumb-section active>Paper Towels</sui-breadcrumb-section>
        </sui-breadcrumb>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Inverted"
        description="A breadcrumb can be inverted"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-breadcrumb inverted>
            <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
            <sui-breadcrumb-divider icon="right chevron" />
            <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
            <sui-breadcrumb-divider icon="right chevron" />
            <sui-breadcrumb-section active>Personal Information</sui-breadcrumb-section>
          </sui-breadcrumb>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Size"
        description="A breadcrumb can vary in size"
        :code="sizeCode"
      >
        <sui-breadcrumb size="mini">
          <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider icon="right chevron" />
          <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
          <sui-breadcrumb-divider icon="right chevron" />
          <sui-breadcrumb-section>Personal Information</sui-breadcrumb-section>
        </sui-breadcrumb>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'BreadcrumbDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const breadcrumbCode = `<sui-breadcrumb>
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section link>Store</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>T-Shirt</sui-breadcrumb-section>
</sui-breadcrumb>`

    const breadcrumbCode2 = `<sui-breadcrumb
  :sections="[
    { content: 'Home', link: true },
    { content: 'Store', link: true },
    { content: 'T-Shirt', active: true }
  ]"
  icon="right angle"
/>`

    const dividerCode = `<sui-breadcrumb>
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right chevron" />
  <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right arrow" />
  <sui-breadcrumb-section active>Personal Information</sui-breadcrumb-section>
</sui-breadcrumb>`

    const sectionCode = `<sui-breadcrumb>
  <sui-breadcrumb-section>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>Search</sui-breadcrumb-section>
</sui-breadcrumb>`

    const linkCode = `<sui-breadcrumb>
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>Search</sui-breadcrumb-section>
</sui-breadcrumb>`

    const activeCode = `<sui-breadcrumb>
  <sui-breadcrumb-section link>Product</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>Paper Towels</sui-breadcrumb-section>
</sui-breadcrumb>`

    const invertedCode = `<sui-segment inverted>
  <sui-breadcrumb inverted>
    <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
    <sui-breadcrumb-divider icon="right chevron" />
    <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
    <sui-breadcrumb-divider icon="right chevron" />
    <sui-breadcrumb-section active>Personal Information</sui-breadcrumb-section>
  </sui-breadcrumb>
</sui-segment>`

    const sizeCode = `<sui-breadcrumb size="mini">
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right chevron" />
  <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right chevron" />
  <sui-breadcrumb-section>Personal Information</sui-breadcrumb-section>
</sui-breadcrumb>`

    return {
      breadcrumbCode,
      breadcrumbCode2,
      dividerCode,
      sectionCode,
      linkCode,
      activeCode,
      invertedCode,
      sizeCode
    }
  }
})
</script>