import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly, computeKeyValue, computeTextAlignProp } from "@/utils/classNameHelper"

export default defineComponent({
  props: {
    active: Boolean,
    className: String,
    collapsing: Boolean,
    color: String,
    disabled: Boolean,
    error: Boolean,
    marked: String,
    negative: Boolean,
    positive: Boolean,
    rowspan: Number,
    selectable: Boolean,
    singleLine: Boolean,
    textAlign: String,
    verticalAlign: String,
    warning: Boolean
  },
  setup(props, { emit, slots }) {
    const classes = computed(() => {
      return clsx(
        props.color,
        props.className,
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.collapsing, 'collapsing'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.negative, 'negative'),
        computeKeyOnly(props.positive, 'positive'),
        computeKeyOnly(props.selectable, 'selectable'),
        computeKeyOnly(props.singleLine, 'single line'),
        computeKeyOnly(props.warning, 'warning'),
        computeKeyValue(props.verticalAlign, 'aligned'),
        computeKeyValue(props.marked, 'marked'),
        computeTextAlignProp(props.textAlign)
      )
    })

    const handleClick = () => {
      if (!props.selectable) return
      emit('click-cell')
    }

    return () => (
      <td
        class={classes.value}
        rowspan={props.rowspan}
        onClick={handleClick}
      >
        {
          props.selectable ?
            <a>{slots.default?.()}</a> :
            slots.default?.()
        }
      </td>
    )
  },
})
