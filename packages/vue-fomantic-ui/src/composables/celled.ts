import { computed, Prop } from "vue"

const celled = ['internally'] as const

type Celled = typeof celled[number]

export interface CelledProps {
  celled: Celled
}

export const useCelledProps = {
  celled: {
    type: String,
  } as Prop<Celled>
}

export function useCelledClass(props: CelledProps) {
  const celledClass = computed(() => {
    if (typeof props.celled === 'string' && props.celled.length === 0) return 'celled'
    if (!props.celled) return null

    return `${props.celled} celled`
  })

  return { celledClass }
}