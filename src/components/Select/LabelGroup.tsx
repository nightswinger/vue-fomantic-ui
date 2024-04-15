import { defineComponent, ref } from 'vue'
import { onClickOutside, useParentElement } from '@vueuse/core'

import Label from './Label'

import type { PropType } from 'vue'
import type { OptionItem } from './Item'

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<OptionItem[]>,
      required: true
    }
  },
  emits: ['remove'],
  setup(props, { emit }) {
    const activeIndex = ref(-1)

    const parentEl = useParentElement()
    onClickOutside(parentEl, () => activeIndex.value = -1)

    return () => props.items.map((item, i) => (
      <Label
        key={i}
        active={i === activeIndex.value}
        option={item}
        onClick={() => activeIndex.value = i}
        onRemove={(option) => {
          activeIndex.value = -1
          emit('remove', option)
        }}
      />
    ))
  }
})
