import { computed, defineComponent, h } from 'vue'
import type { Component, PropType } from 'vue'

export default defineComponent({
  props: {
    rows: {
      type: Number,
      required: true,
    },
    cols: {
      type: Number,
      required: true,
    },
    start: {
      type: Number,
      required: true,
    },
    end: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      default: 1,
    },
    dateTransform: Function as PropType<(i: number) => Date>,
    tile: Object as PropType<Component>,
  },
  setup(props) {
    const range = computed(() => {
      const result = []
      for (let i = props.start; i <= props.end * props.step; i += props.step) {
        result.push(i)
      }
      return result
    })

    return () => (
      <>
        {Array.from({ length: props.cols }, (_, i) => (
          <tr key={i}>
            {
              Array.from({ length: props.rows }).map((_, j) => (
                h(props.tile!, { date: props.dateTransform!(range.value[i * props.rows + j]) })
              ))
            }
          </tr>
        ))}
      </>
    )
  }
})
