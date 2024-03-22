import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly, computeKeyOrKeyValue } from "@/utils/classNameHelper"

import Icon from "../Icon/Icon"

export default defineComponent({
  props: {
    attached: [Boolean, String],
    color: String,
    compact: Boolean,
    content: String,
    header: String,
    error: Boolean,
    floating: Boolean,
    hidden: Boolean,
    icon: [Boolean, String],
    info: Boolean,
    negative: Boolean,
    positive: Boolean,
    size: String,
    success: Boolean,
    visible: Boolean,
    warning: Boolean,
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.floating, 'floating'),
        computeKeyOnly(props.hidden, 'hidden'),
        computeKeyOnly(!!props.icon, 'icon'),
        computeKeyOnly(props.info, 'info'),
        computeKeyOnly(props.negative, 'negative'),
        computeKeyOnly(props.positive, 'positive'),
        computeKeyOnly(props.success, 'success'),
        computeKeyOnly(props.visible, 'visible'),
        computeKeyOnly(props.warning, 'warning'),
        computeKeyOrKeyValue(props.attached, 'attached'),
        'message'
      )
    })

    return () => (
      <div class={classes.value}>
        {typeof props.icon === 'string' && <Icon name={props.icon} />}
        {slots.default?.()}
        {
          (props.content || slots.content || props.header) &&
          <div class="content">
            {props.header && <div class="header">{props.header}</div>}
            {props.content && <p>{props.content}</p>}
            {slots.content?.()}
          </div>
        }
      </div>
    )
  },
})
