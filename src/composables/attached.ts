import clsx from "clsx";
import { computed } from "vue";

import type { PropType } from "vue";

const attachedValues = ['top', 'bottom', 'left'] as const;

export type Attached = typeof attachedValues[number];

export interface AttachedProps {
  attached?: Attached;
};

export const makeAttachedProps = () => {
  return {
    attached: {
      type: String as PropType<Attached>,
      validator: (v: any) => attachedValues.includes(v)
    }
  };
};

export const useAttached = (props: AttachedProps) => {
  const attachedClasses = computed(() => {
    return clsx(props.attached, { attached: props.attached });
  });

  return { attachedClasses };
};
