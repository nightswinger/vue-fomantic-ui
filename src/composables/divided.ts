import { computed, Prop } from "vue"

const divided = ['vertically'] as const

type Divided = typeof divided[number]

export interface DividedProps {
  divided: Divided
}

export const useDividedProps = {
  divided: {
    type: String,
  } as Prop<Divided>
}

export function useDividedClass(props: DividedProps) {
  const dividedClass = computed(() => {
    if (typeof props.divided === 'string' && props.divided.length === 0) return 'divided'
    if (!props.divided) return null
    
    return `${props.divided} divided`
  })

  return { dividedClass }
}