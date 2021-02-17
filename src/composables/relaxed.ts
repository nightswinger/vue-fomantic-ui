import { computed, Prop } from "vue"

const relaxed = ['very'] as const

type Relaxed = typeof relaxed[number]

export interface RelaxedProps {
  relaxed: Relaxed
}

export const useRelaxedProps = {
  relaxed: {
    type: String,
  } as Prop<Relaxed>
}

export function useRelaxedClass(props: RelaxedProps) {
  const relaxedClass = computed(() => {
    if (typeof props.relaxed === 'string' && props.relaxed.length === 0) return 'relaxed'
    if (!props.relaxed) return null

    return `${props.relaxed} relaxed`
  })

  return { relaxedClass }
}