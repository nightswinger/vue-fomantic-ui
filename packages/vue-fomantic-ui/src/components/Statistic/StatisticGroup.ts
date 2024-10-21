import clsx from "clsx"
import { computed, defineComponent, h, provide } from "vue"

import { computeKeyOnly, computeWidthProp } from "@/utils/classNameHelper"

export default defineComponent({
  props: {
    color: String,
    horizontal: Boolean,
    inverted: Boolean,
    size: String,
    stackable: Boolean,
    widths: Number
  },
  setup(props) {
    provide('ui', false)

    const classes = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.horizontal, 'horizontal'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.stackable, 'stackable'),
        computeWidthProp(props.widths, ''),
        'statistics'
      )
    })

    return { classes }
  },
  render() {
    return h(
      'div',
      { class: this.classes },
      this.$slots.default?.()
    )
  }
})
