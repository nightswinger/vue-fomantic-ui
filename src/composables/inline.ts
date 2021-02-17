import { computed, Prop } from 'vue'

const inlines = ['default', 'center']

type Inline = typeof inlines[number]

export interface InlineProps {
  inline: Inline
}

export const useInlineProps = {
  inline: {
    type: String,
    default: 'default',
    validator: (value: string) => inlines.includes(value)
  } as Prop<Inline>
}

export function useInlineClass(props: InlineProps) {
  const inlineClass = computed(() => {
    if (props.inline === 'default') return 'inline'
    if (props.inline === 'centered') return 'centered inline'

    return null
  })

  return { inlineClass }
}