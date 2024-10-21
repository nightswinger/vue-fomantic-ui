import { computed } from 'vue';
import type { Prop } from 'vue';

const floated = ['left', 'right']

type Floated = typeof floated[number]

export interface FloatedProps {
  floated: Floated
}

export const useFloatedProps = {
  floated: {
    type: String,
    validator: (value: string) => floated.includes(value)
  } as Prop<Floated>
}

export function useFloatedClass(props: FloatedProps) {
  const floatedClass = computed(() => {
    if (!props.floated) return null
    if ((props.floated === 'left') || (props.floated === 'right')) {
      return `${props.floated} floated`
    } else {
      return null
    }
  })

  return { floatedClass }
}