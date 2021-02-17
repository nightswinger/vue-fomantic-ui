import { computed } from 'vue';
import type { Prop } from 'vue';

const attached = ['top', 'bottom']

type Attached = typeof attached[number]

export interface AttachedProps {
  attached: Attached
}

export const useAttachedProps = {
  attached: {
    type: String,
    validator: (value: string) => attached.includes(value)
  } as Prop<Attached>
}

export function useAttachedClass(props: AttachedProps) {
  const attachedClass = computed(() => {
    if (!props.attached) return null
    if ((props.attached === 'top') || (props.attached === 'bottom')) return `${props.attached} attached`

    return 'attached'
  })

  return { attachedClass }
}