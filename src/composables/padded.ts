import { computed, Prop } from "vue"

const paddings = ['very', 'vertically', 'horizontally']

type Padded = typeof paddings[number]

export interface PaddedProps {
  padded: Padded
}

export const usePaddedProps = {
  padded: {
    type: String,
    validator: (value: string) => paddings.includes(value) || value.length === 0
  } as Prop<Padded>
}

export function usePaddedClass(props: PaddedProps) {
  const paddedClass = computed(() => {
    if ((typeof props.padded === 'string') && (props.padded.length === 0)) return 'padded'
    if (paddings.includes(props.padded)) return `${props.padded} padded`

    return null
  })

  return { paddedClass }
}

