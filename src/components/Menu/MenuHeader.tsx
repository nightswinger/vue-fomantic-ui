import { defineComponent } from "vue";

export default defineComponent({
  props: {
    as: String,
    content: String
  },
  setup(props, { slots }) {
    let elementType = props.as || 'div'

    return () => (
      <elementType
        class="header"
      >
        {props.content || slots.default?.()}
      </elementType>
    )
  }
})