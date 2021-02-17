import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiRevealContent',
  props: {
    visible: Boolean,
    hidden: Boolean
  },
  setup(props, { slots }) {
    return () => (
      h('div', {
        class: [
          'ui',
          props.visible && 'visible',
          props.hidden && 'hidden',
          'content'
        ]
      }, slots.default?.())
    )
  }
})