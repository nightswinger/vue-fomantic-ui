import { computed } from "vue"
import type { PropType } from "vue"

const sizeValues = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'] as const

export type Size = typeof sizeValues[number]

export interface SizeProps {
  size?: Size;
}

export const makeSizeProps = () => {
  return {
    size: {
      type: String as PropType<Size>,
      validator: (value: string) => sizeValues.includes(value as Size)
    }
  }
}

export const useSize = (props: SizeProps) => {
  const sizeClass = computed(() => props.size)

  return { sizeClass }
}
