import { computed, Prop } from "vue"

const widths = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen'
]

export const useWidthProps = {
  width: {
    type: [Number, String],
  }
}

export function useWidthClass(props: any) {
  const widthClass = computed(() => {
    if (Number(props.width) > 0) {
      return `${widths[Number(props.width) - 1]} wide`
    }

    if (typeof props.width === 'string' || widths.includes(props.width)) {
      return `${props.width} wide`
    }

    return null
  })

  return { widthClass }
}