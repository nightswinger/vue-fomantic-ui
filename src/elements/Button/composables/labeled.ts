import { computed } from "vue";

import type { PropType } from "vue";

const LabeledValues = ['right', 'left'];
type Labeled = boolean | typeof LabeledValues[number];

export interface LabeledProps {
  labeled?: Labeled | boolean;
};

export const makeLabeledProps = () => {
  return {
    labeled: [Boolean, String] as PropType<Labeled | boolean>,
  };
};

export const useLabeled = (props: LabeledProps) => {
  const labeledClasses = computed(() => {
    if (typeof props.labeled === 'boolean' && props.labeled) return 'labeled';
    if (LabeledValues.includes(props.labeled as string)) return `${props.labeled} labeled`;

    return '';
  });

  return { labeledClasses };
};
