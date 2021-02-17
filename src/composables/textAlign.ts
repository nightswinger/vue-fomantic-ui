import { computed } from 'vue';
import type { Prop } from 'vue';

const alignment = ['left', 'center', 'right', 'justified']

type Align = typeof alignment[number];

export interface TextAlignProps {
  textAlign: Align,
}

export const useTextAlignProps = {
  textAlign: {
    type: String,
    validator: (value: string) => alignment.includes(value)
  } as Prop<Align>
}

export function useTextAlignClass(props: TextAlignProps) {
    const textAlignClass = computed(() => {
      if (!props.textAlign) return null;
      if (props.textAlign === 'justified') return 'justified'

      return `${props.textAlign} aligned`
    });

    return { textAlignClass }
}