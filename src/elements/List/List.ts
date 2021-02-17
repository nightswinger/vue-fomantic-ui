import clsx from "clsx";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiList',
  props: {
    as: {
      type: String,
      default: 'div',
      validator: (value: string) => ['div', 'ul', 'ol'].includes(value)
    },
    bulleted: Boolean,
    divided: Boolean,
    horizontal: Boolean,
    ordered: Boolean,
    relaxed: Boolean,
    link: Boolean,
  },
  setup(props, { slots }) {
    const listClasses = clsx(
      'ui',
      {
        bulleted: props.bulleted,
        divided: props.divided,
        horizontal: props.horizontal,
        ordered: props.ordered,
        relaxed: props.relaxed,
        link: props.link
      },
      'list'
    )

    return () => (
      h(props.as, {
        class: listClasses
      }, slots.default?.())
    )
  }
})