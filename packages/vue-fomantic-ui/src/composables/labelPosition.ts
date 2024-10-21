import { computed } from "vue"
import type { Prop } from 'vue'

const labelPositions = ['right']

type LabelPosition = typeof labelPositions[number]

export interface LabelPositionProps {
  labelPosition: LabelPosition
}

export const useLabelPositionProps = {
  labelPosition: {
    type: String,
    validator: (value: string) => labelPositions.includes(value)
  } as Prop<LabelPosition>
}

export function useLabelPositionClass(props: LabelPositionProps) {
  const labelPositionClass = computed(() => {
    if (!props.labelPosition) return null
    if (labelPositions.includes(props.labelPosition)) {
      return `${props.labelPosition} labeled`
    }
  })

  return { labelPositionClass }
}