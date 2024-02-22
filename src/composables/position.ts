import { computed } from "vue";

import type { PropType } from "vue";

const positionValues = [
  'top right',
  'top center',
  'top left',
  'bottom right',
  'bottom center',
  'bottom left',
  'centered'
] as const;

export type Position = typeof positionValues[number];

export interface PositionProps {
  position?: Position;
};

export const makePositionProps = ({ defaultValue }: { defaultValue?: string } = {}) => {
  return {
    position: {
      type: String as PropType<Position>,
      validator: (v: any) => positionValues.includes(v),
      default: defaultValue,
    }
  };
};

export const usePosition = (props: PositionProps) => {
  const positionClasses = computed(() => props.position || '');

  return { positionClasses };
};
