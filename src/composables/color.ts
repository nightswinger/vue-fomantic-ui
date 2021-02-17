import { computed } from 'vue';
import type { Prop } from 'vue';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'purple',
  'violet',
  'pink',
  'brown',
  'grey'
]

type Color = typeof colors[number]

export interface ColorProps {
  color: Color
}

export const useColorProps = {
  color: {
    type: String,
    validator: (value: string) => colors.includes(value)
  } as Prop<Color>
}

export function useColorClass(props: ColorProps) {
  const colorClass = computed(() => {
    if(!props.color) return null

    return props.color
  })

  return { colorClass }
}