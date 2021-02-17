import { computed } from 'vue';
import type { Prop } from 'vue';

const sizes = ['huge', 'large', 'medium', 'small', 'tiny'];

type Size = typeof sizes[number];

export interface SizeProps {
  size: Size
}

export const useSizeProps = {
  size: {
    type: String,
    validator: (value: string) => sizes.includes(value)
  } as Prop<Size>,
}
