import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"

export default defineComponent({
  props: {
    disabled: Boolean,
  },
  setup(props, { slots }) {
    const classes = computed(() => (
      clsx(
        computeKeyOnly(props.disabled, 'disabled'),
        'event'
      )
    ))

    return () => <div class={classes.value}>
      {slots.label && <div class="label">{slots.label()}</div>}
      {
        (slots.summary || slots.meta) &&
        <div class="content">
          {slots.summary && <div class="summary">{slots.summary()}</div>}
          {slots.extraText && <div class="extra text">{slots.extraText()}</div>}
          {slots.extraImages && <div class="extra images">{slots.extraImages()}</div>}
          {slots.meta && <div class="meta">{slots.meta()}</div>}
        </div>
      }
      {slots.default?.()}
    </div>
  }
})
