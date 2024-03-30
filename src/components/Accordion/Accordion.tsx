import clsx from "clsx"
import { computed, defineComponent, provide, ref } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"

import AccordionTab from "./AccordionTab"

export default defineComponent({
  props: {
    basic: Boolean,
    fluid: Boolean,
    inverted: Boolean,
    multiple: Boolean,
    styled: Boolean
  },
  setup(props, { slots }) {
    const activeIndex: any = props.multiple ? ref([]) : ref(-1)
    const isTabActive = (index: number) => {
      if (props.multiple) {
        return activeIndex.value.includes(index)
      }

      return activeIndex.value === index
    }
    const updateActiveIndex = (value: number) => {
      const active = isTabActive(value)

      if (props.multiple) {
        if (active) {
          activeIndex.value = activeIndex.value.filter((i: number) => i !== value)
        } else {
          activeIndex.value.push(value)
        }
      } else {
        activeIndex.value = active ? -1 : value
      }
    }

    provide('isTabActive', isTabActive)
    provide('updateActiveIndex', updateActiveIndex)

    const classes = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.basic, 'basic'),
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.styled, 'styled'),
        'accordion'
      )
    })

    const tabs = computed(() => {
      const children = slots.default?.() || []
      return children.map((vnode, index) => {
        return {
          ...vnode,
          props: {
            ...vnode.props,
            index,
          },
          slots: vnode.children
        }
      })
    })

    return () => (
      <div class={classes.value}>
        {
          tabs.value.map((tab) => (
            <AccordionTab
              styled={props.styled}
              {...tab.props}
              v-slots={tab.slots}
            />
          ))
        }
      </div>
    )
  },
})
