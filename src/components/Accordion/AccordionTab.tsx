import { computed, defineComponent, inject } from "vue"
import clsx from "clsx"

import { computeKeyOnly } from "@/utils/classNameHelper"

import AccordionContent from "./AccordionContent"
import Icon from "../Icon/Icon"

export default defineComponent({
  props: {
    compact: Boolean,
    index: Number,
    title: String,
    styled: Boolean,
  },
  setup(props) {
    const isTabActive: any = inject('isTabActive')
    const updateActiveIndex: any = inject('updateActiveIndex')

    const titleClass = computed(() => {
      return clsx(
        computeKeyOnly(isTabActive(props.index), 'active'),
        'title'
      )
    })

    return {
      isTabActive,
      updateActiveIndex,
      titleClass
    }
  },
  render() {
    return (
      <>
        <div class={this.titleClass}
          onClick={() => this.updateActiveIndex(this.index)}
        >
          <Icon name="dropdown" />
            {this.title}
          </div>
        <AccordionContent
          active={this.isTabActive(this.index)}
          compact={this.compact}
          styled={this.styled}
        >
          {this.$slots.default?.()}
        </AccordionContent>
      </>
    )
  }
})
