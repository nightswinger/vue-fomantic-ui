import clsx from "clsx"
import { computed, defineComponent, ref } from "vue"
import type { PropType } from "vue"

import { computeKeyOnly, computeKeyOrKeyValue, computeKeyValue } from "@/utils/classNameHelper"

import Icon from "../Icon/Icon"

export default defineComponent({
  props: {
    attached: [Boolean, String],
    aligned: String as PropType<'center' | 'right'>,
    color: String,
    closable: Boolean,
    compact: Boolean,
    content: String,
    header: String,
    error: Boolean,
    floating: Boolean,
    hidden: Boolean,
    icon: [Boolean, String],
    info: Boolean,
    list: Array,
    negative: Boolean,
    positive: Boolean,
    size: String,
    success: Boolean,
    visible: Boolean,
    warning: Boolean,
  },
  emits: ['close'],
  setup(props, { emit, slots }) {
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
        computeKeyValue(props.aligned, 'aligned'),
        computeKeyOrKeyValue(props.attached, 'attached'),
        'message'
      )
    })

    const el = ref<HTMLDivElement>()

    const onClose = () => {
      const animation = el.value?.animate([
        { opacity: 1 },
        { opacity: 0 },
      ], 200)

      if (!animation) return
      animation.onfinish = () => el.value?.classList.add('hidden')
      emit('close')
    }

    return () => (
      <div ref={el} class={classes.value}>
        {props.closable && <i class="close icon" onClick={onClose} />}
        {typeof props.icon === 'string' && <Icon name={props.icon} />}
        {slots.default?.()}
        {
          (props.content || slots.content || props.header || props.list) &&
          <div class="content">
            {props.header && <div class="header">{props.header}</div>}
            {props.content && <p>{props.content}</p>}
            {slots.content?.()}
            {
              Array.isArray(props.list) &&
              <ul class="list">
                {props.list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            }
          </div>
        }
      </div>
    )
  },
})
