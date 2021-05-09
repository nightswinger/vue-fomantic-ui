<template>
  <div>
    <doc-page-header
      title="Modal"
      sub="A modal displays content that temporarily blocks interactions with the main view of a site"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Modal"
        description="A standard modal"
        :code="modalCode"
      >
        <div>
          <sui-button @click="modal1 = true">Show Modal</sui-button>
          <sui-modal v-model="modal1">
            <sui-modal-header>Select a Photo</sui-modal-header>
            <sui-modal-content image>
              <sui-image
                wrapped
                size="medium"
                src="/images/avatar/large/rachel.png"
              />
              <sui-modal-description>
                <sui-header>Default Profile Image</sui-header>
                <p>
                  We've found the following gravatar image associated with your e-mail
                  address.
                </p>
                <p>Is it okay to use this photo?</p>
              </sui-modal-description>
            </sui-modal-content>
            <sui-modal-actions>
              <sui-button positive @click="modal1 = false">OK</sui-button>
            </sui-modal-actions>
          </sui-modal>
        </div>
      </doc-example>

      <doc-example
        title="Basic"
        description="A modal can reduce its complexity"
        :code="basicCode"
      >
        <div>
          <sui-button @click="basicModal = true">Basic Modal</sui-button>
          <sui-modal basic v-model="basicModal">
            <sui-modal-header icon>
              <sui-icon name="archive" />
              Archive Old Messages
            </sui-modal-header>
            <sui-modal-content>
              <p>
                Your inbox is getting full, would you like us to enable automatic
                archiving of old messages?
              </p>
            </sui-modal-content>
            <sui-modal-actions>
              <sui-button basic color="red" inverted @click="basicModal = false">
                <sui-icon name="remove" /> No
              </sui-button>
              <sui-button basic color="green">
                <sui-icon name="checkmark" /> Yes
              </sui-button>
            </sui-modal-actions>
          </sui-modal>
        </div>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'ModalDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const modalCode = `<div>
  <sui-button @click="modal1 = true">Show Modal</sui-button>
  <sui-modal v-model="modal1">
    <sui-modal-header>Select a Photo</sui-modal-header>
    <sui-modal-content image>
      <sui-image
        wrapped
        size="medium"
        src="/images/avatar/large/rachel.png"
      />
      <sui-modal-description>
        <sui-header>Default Profile Image</sui-header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button positive @click="modal1 = false">OK</sui-button>
    </sui-modal-actions>
  </sui-modal>
</div>`
    const modal1 = ref(false)

    const basicModal = ref(false)
    const basicCode = `<div>
  <sui-button @click="basicModal = true">Basic Modal</sui-button>
  <sui-modal basic v-model="basicModal">
    <sui-modal-header icon>
      <sui-icon name="archive" />
      Archive Old Messages
    </sui-modal-header>
    <sui-modal-content>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button basic color="red" inverted @click="basicModal = false">
        <sui-icon name="remove" /> No
      </sui-button>
      <sui-button basic color="green">
        <sui-icon name="checkmark" /> Yes
      </sui-button>
    </sui-modal-actions>
  </sui-modal>
</div>`

    return {
      modalCode,
      modal1,
      basicModal,
      basicCode
    }
  }
})
</script>