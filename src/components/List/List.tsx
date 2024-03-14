import clsx from "clsx"
import { computed, defineComponent, h } from "vue"

import { makeSizeProps, useSize } from "@/composables/size"
import { computeKeyOnly, computeKeyValue } from "@/utils/classNameHelper"

export default defineComponent((props, { slots }) => {
  const { sizeClass } = useSize(props)

  const classes = computed(() => {
    return clsx(
      'ui',
      computeKeyOnly(props.animated, 'animated'),
      computeKeyOnly(props.bulleted, 'bulleted'),
      computeKeyOnly(props.celled, 'celled'),
      computeKeyOnly(props.divided, 'divided'),
      computeKeyOnly(props.horizontal, 'horizontal'),
      computeKeyOnly(props.inverted, 'inverted'),
      computeKeyOnly(props.link, 'link'),
      computeKeyOnly(props.ordered, 'ordered'),
      computeKeyOnly(props.relaxed, 'relaxed'),
      computeKeyOnly(props.selection, 'selection'),
      computeKeyValue(props.verticalAlign, 'aligned'),
      computeKeyValue(props.floated, 'floated'),
      sizeClass.value,
      'list'
    )
  })

  let elementType = props.as || 'div'

  return () => (
    h(elementType, {
      class: classes.value
    }, slots.default?.())
  )
},
{
  props: {
    animated: Boolean,
    as: String,
    bulleted: Boolean,
    celled: Boolean,
    divided: Boolean,
    floated: String,
    horizontal: Boolean,
    inverted: Boolean,
    ordered: Boolean,
    relaxed: Boolean,
    link: Boolean,
    selection: Boolean,
    verticalAlign: String,
    ...makeSizeProps(),
  },
})
