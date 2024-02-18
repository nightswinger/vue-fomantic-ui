import clsx from "clsx";
import { computed } from "vue";

import type { PropType } from "vue";

const colorValues = [
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
] as const;

export type Color = typeof colorValues[number];

export interface ColorProps {
  color?: Color
}

export const makeColorProps = () => {
  return {
    color: {
      type: String as PropType<Color>,
      validator: (v: any) => colorValues.includes(v)
    }
  }
};

export const useColor = (props: ColorProps) => {
  const colorClasses = computed(() => clsx(props.color));

  return { colorClasses };
};
