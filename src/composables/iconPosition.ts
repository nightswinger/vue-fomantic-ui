import { computed } from "vue"
import type { Prop } from 'vue'

const iconPositions = ['left']

type IconPosition = typeof iconPositions[number]

export interface IconPositionProps {
  iconPosition: IconPosition
}

export const useIconPositionProps = {
  iconPosition: {
    type: String,
    validator: (value: string) => iconPositions.includes(value)
  } as Prop<IconPosition>
}

export function useIconPositionClass(props: IconPositionProps) {
  const iconPositionClass = computed(() => {
    if (!props.iconPosition) return null
    if (iconPositions.includes(props.iconPosition)) {
      return `${props.iconPosition} icon`
    }
  })

  return { iconPositionClass }
}