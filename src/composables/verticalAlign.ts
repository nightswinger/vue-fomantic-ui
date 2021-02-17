import { computed } from 'vue';
import type { Prop } from 'vue';

const alignments = ['top', 'middle', 'bottom']

type VerticalAlign = typeof alignments[number]

export interface VerticalAlignProps {
  verticalAlign: VerticalAlign
}

export const useVerticalAlignProps = {
  verticalAlign: {
    type: String,
    validator: (value: string) => alignments.includes(value)
  } as Prop<VerticalAlign>
}

export function useVerticalAlignClass(props: VerticalAlignProps) {
  const verticalAlignClass = computed(() => {
    if (!props.verticalAlign) return null

    if (alignments.includes(props.verticalAlign)) {
      return `${props.verticalAlign} aligned`
    } else {
      return null
    }
  })

  return { verticalAlignClass }
}