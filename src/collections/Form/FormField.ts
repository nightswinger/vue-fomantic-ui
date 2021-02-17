import clsx from "clsx";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFormField',
  props: {
    error: Boolean,
    inline: Boolean,
    required: Boolean,
  },
  setup(props, { slots }) {
    const { error, inline, required } = props

    const computedClass = clsx(
      error && 'error',
      inline && 'inline',
      required && 'required',
      'field'
    )

    return () => (
      h('div', {
        class: computedClass
      }, slots.default?.())
    )
  }
})