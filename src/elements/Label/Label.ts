import { computed, defineComponent, h } from 'vue'
import clsx from 'clsx'

import { computeKeyOnly, computeKeyOrKeyValue, computeKeyValue } from '../../utils/classNameHelper'
import { Icon } from '../Icon'

export default defineComponent({
  name: 'SuiLabel',
  props: {
    as: String,
    attached: String,
    basic: Boolean,
    circular: Boolean,
    color: String,
    corner: String,
    empty: Boolean,
    floating: Boolean,
    horizontal: Boolean,
    icon: String,
    image: Boolean,
    inverted: Boolean,
    pointing: [Boolean, String],
    prompt: Boolean,
    ribbon: [Boolean, String],
    size: String,
    tag: Boolean
  },
  setup(props, { slots }) {
    const labelClasses = computed(() => {
      return clsx(
        'ui',
        props.size,
        props.color,
        computeKeyOnly(props.basic, 'basic'),
        computeKeyOnly(props.circular, 'circular'),
        computeKeyOnly(props.empty, 'empty'),
        computeKeyOnly(props.floating, 'floating'),
        computeKeyOnly(props.horizontal, 'horizontal'),
        computeKeyOnly(!!props.icon && slots.default === undefined, 'icon'), 
        computeKeyOnly(props.image, 'image'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.prompt, 'prompt'),
        computeKeyOnly(props.tag, 'tag'),
        computeKeyValue(props.attached, 'attached'),
        computeKeyValue(props.corner, 'corner'),
        computeKeyOrKeyValue(props.pointing, 'pointing'),
        computeKeyOrKeyValue(props.ribbon, 'ribbon'),
        'label'
      )
    })

    let elementType = props.as || 'div'

    if (props.icon) {
      return () => (
        h(elementType, {
          class: labelClasses.value
        }, [
          h(Icon, { name: props.icon }),
          slots.default?.(),
        ])
      )
    }

    return () => (
      h(elementType, {
        class: labelClasses.value
      }, slots.default?.())
    )
  }
})