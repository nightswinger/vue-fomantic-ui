import { computed, defineComponent } from 'vue'
import clsx from 'clsx'

import type { PropType } from 'vue'

import { computeKeyOnly, computeKeyOrKeyValue, computeKeyValue } from '@/utils/classNameHelper'

import { Icon } from '../Icon'
import Component from '../Component/Component'

export default defineComponent({
  props: {
    as: String,
    attached: String,
    basic: Boolean,
    circular: Boolean,
    color: String,
    content: String,
    corner: String,
    empty: Boolean,
    floating: Boolean,
    horizontal: Boolean,
    icon: String,
    iconPos: String as PropType<'right'>,
    image: Boolean,
    inverted: Boolean,
    pointing: [Boolean, String],
    prompt: Boolean,
    ribbon: [Boolean, String],
    size: String,
    tag: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return clsx(
        'ui',
        props.size,
        props.color,
        computeKeyOnly(props.basic, 'basic'),
        computeKeyOnly(props.circular, 'circular'),
        computeKeyOnly(props.empty, 'empty'),
        computeKeyOnly(props.floating, 'floating'),
        computeKeyOnly(props.horizontal, 'horizontal'),
        computeKeyOnly(!!props.icon && !props.content && !slots.default, 'icon'), 
        computeKeyOnly(props.iconPos === 'right', 'right icon'),
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

    const tag = props.as || 'div'

    return () => (
      <Component is={tag} class={classes.value}>
        {props.icon && props.iconPos !== 'right' && <Icon name={props.icon} />}
        {props.content}
        {slots.default?.()}
        {props.icon && props.iconPos === 'right' && <Icon name={props.icon} />}
      </Component>
    )
  }
})
