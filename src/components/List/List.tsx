import clsx from "clsx"
import { computed, defineComponent } from "vue"
import type { PropType } from "vue"

import { makeSizeProps, useSize } from "@/composables/size"
import { computeKeyOnly, computeKeyValue } from "@/utils/classNameHelper"

import Component from "./Component"
import ListItem from "./ListItem"

export default defineComponent({
  props: {
    animated: Boolean,
    as: String,
    bulleted: Boolean,
    celled: Boolean,
    divided: Boolean,
    floated: String,
    horizontal: Boolean,
    inverted: Boolean,
    items: Array as PropType<string[] | { [key: string]: any }[]>,
    ordered: Boolean,
    relaxed: Boolean,
    link: Boolean,
    selection: Boolean,
    verticalAlign: String,
    ...makeSizeProps(),
  },
  setup: (props, { slots }) => {
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

    const tag = props.as || 'div'

    return () => (
      <Component is={tag} class={classes.value}>
        {
          props.items?.map((item, index) => (
            typeof item === 'string' ?
              (
                <ListItem key={index}>
                  {item}
                </ListItem>
              ) :
              <ListItem key={index} {...item} />
          ))
        }
        {slots.default?.()}
      </Component>
    )
  },
})
