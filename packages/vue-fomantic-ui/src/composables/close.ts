import { computed, Prop } from "vue"

const closes = ['very']

type Close = typeof closes[number]

export interface CloseProps {
  close: Close,
}

export const useCloseProps = {
  close: {
    type: String,
    validator: (value: string) => closes.includes(value) || value.length === 0
  } as Prop<Close>
}

export function useCloseClass(props: CloseProps) {
  const closeClass = computed(() => {
    if ((typeof props.close === 'string') && (props.close.length === 0)) return 'close'
    if (props.close === 'very') return `${props.close} close`

    return null
  })

  return { closeClass }
}