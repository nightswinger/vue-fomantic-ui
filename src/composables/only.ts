import { computed, Prop } from "vue"

type Only = string

export interface OnlyProps {
  only: Only
}

export const useOnlyProps = {
  only: {
    type: String,
  } as Prop<Only>
}

export function useOnlyClass(props: OnlyProps) {
  const onlyClass = computed(() => {
    if (!props.only) return null

    return props.only
      .replace('large screen', 'large-screen')
      .split(' ')
      .map((prop) => `${prop.replace('-', ' ')} only`)
      .join(' ')
  })

  return { onlyClass }
}