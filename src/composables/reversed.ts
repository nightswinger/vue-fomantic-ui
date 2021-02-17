import { computed, Prop } from "vue"

type Reversed = string

export interface ReversedProps {
  reversed: Reversed
}

export const useReversedProps = {
  reversed: {
    type: String,
  } as Prop<Reversed>
}

export function useReversedClass(props: ReversedProps) {
  const reversedClass = computed(() => {
    if (!props.reversed) return null

    return props.reversed
      .replace(/ vertically/g, '-vertically')
      .split(' ')
      .map((prop) => `${prop.replace('-', ' ')} reversed`)
      .join(' ')
  })

  return { reversedClass }
}