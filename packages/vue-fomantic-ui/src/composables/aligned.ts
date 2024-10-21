import clsx from 'clsx'
import { computed } from 'vue'
import type { PropType }  from 'vue'

const AlignedValues = ['top', 'middle', 'bottom'] as const

export type Aligned = typeof AlignedValues[number]

export interface AlignedProps {
  aligned?: Aligned
}

export const makeAlignedProps = () => {
  return {
    aligned: {
      type: String as PropType<Aligned>,
      validator: (v: any) => AlignedValues.includes(v)
    }
  }
}

export const useAligned = (props: AlignedProps) => {
  const alignedClasses = computed(() => {
    return clsx(props.aligned, { aligned: props.aligned })
  })

  return { alignedClasses }
}
