import { computed } from "vue"
import type { PropType } from "vue"

import clsx from "clsx"

const scrollingValues = [
  'long',
  'very long',
  'short',
  'very short',
] as const

export type Scrolling = typeof scrollingValues[number] | boolean

export interface ScrollingProps {
  scrolling?: Scrolling
}

export const makeScrollingProps = ({ defaultValue }: { defaultValue?: string } = {}) => {
  return {
    scrolling: {
      type: String as PropType<Scrolling>,
      validator: (v: any) => scrollingValues.includes(v),
      default: defaultValue,
    }
  }
}

export const useScrolling = (props: ScrollingProps) => {
  const scrollingClasses = computed(() => clsx(
    props.scrolling,
    !!props.scrolling && 'scrolling',
  ))

  return { scrollingClasses }
}
