import { computed, Prop } from "vue"

const positions = ['right', 'left']

type Position = typeof positions[number]

export interface PositionProps {
  position: Position
}

export const usePositionProps = {
  position: {
    type: String,
    validator: (value: string) => positions.includes(value)
  } as Prop<Position>
}

export function usePositionClass(props: PositionProps) {
  const positionClass = computed(() => {
    if (positions.includes(props.position)) {
      return props.position
    }

    return null
  })

  return { positionClass }
}