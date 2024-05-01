import clsx from "clsx"
import { computed, defineComponent, h } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"

export default defineComponent({
  props: {
    connected: Boolean,
    disabled: Boolean,
    inverted: Boolean,
    size: String
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return clsx(
        'ui',
        props.size,
        computeKeyOnly(props.connected, 'connected'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.inverted, 'inverted'),
        'feed'
      )
    })

    return () => h('div', { class: classes.value }, slots.default?.())
  },
})
