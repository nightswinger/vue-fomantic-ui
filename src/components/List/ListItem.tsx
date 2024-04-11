import clsx from "clsx"
import { computed, defineComponent } from "vue"
import type { PropType } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"

import Component from "../Component/Component"
import ListHeader from "./ListHeader"

import Icon from "../Icon/Icon"

const ListItem = defineComponent({
  props: {
    active: Boolean,
    as: String,
    children: Array as PropType<any[]>,
    content: String,
    description: String,
    disabled: Boolean,
    header: String,
    icon: String,
    text: String,
  },
  setup: (props, { slots }) => {
    const classes = computed(() => {
      return clsx(
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.disabled, 'disabled'),
        'item'
      )
    })

    const tag = props.as || 'div'

    return () => (
      <Component
        is={tag}
        class={classes.value}
      >
        {slots.prepend && slots.prepend()}
        {props.icon && <Icon name={props.icon} />}
        {props.text && props.text}
        <div class="content">
          {props.header && <ListHeader>{props.header}</ListHeader>}
          {props.description && <div class="description">{props.description}</div>}
          {props.content}
          {slots.content && slots.content()}
          {
            props.children && (
              <div class="list">
                {props.children.map((child, index) => (
                  <ListItem key={index} {...child} />
                ))}
              </div>
            )
          }
          {slots.default?.()}
        </div>
      </Component>
    )
  },
})

export default ListItem
