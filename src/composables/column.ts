import { computed, Prop } from "vue"

const columns = [
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
  'sixteen',
  'equal'
]

export const useColumnProps = {
  columns: {
    type: [Number, String],
  }
}

export function useColumnClass(props: any) {
  const columnClass = computed(() => {
    if (props.columns === 'equal') return 'equal width'

    if (Number(props.columns) > 0) {
      return `${columns[Number(props.columns) - 1]} column`
    }

    if (typeof props.columns === 'string' || columns.includes(props.columns)) {
      return `${props.columns} column`
    }

    return null
  })

  return { columnClass }
}