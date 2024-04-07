import { InjectionKey, computed, reactive, ref } from 'vue'

import { getBeginOfMonth } from './dates'

type UseCalendarProps = {
  activeStartDate?: Date,
  modelValue?: Date,
  defaultView?: View,
  locale?: string,
}

const viewValues = ['decade', 'year', 'month', 'day', 'hour'] as const
export type View = typeof viewValues[number]

const defaultView: View = 'month'

export type UseCalendar = ReturnType<typeof useCalendar>

export const UseCalendarKey: InjectionKey<UseCalendar> = Symbol('UseCalendar')

export function useCalendar(props: UseCalendarProps) {
  const state = reactive({
    activeStartDate: getBeginOfMonth(props.activeStartDate || new Date()),
    selectedDate: props.modelValue,
    view: props.defaultView || defaultView,
  })

  const activeStartDate = computed(() => state.activeStartDate)
  const updateActiveStartDate = (date: Date) => (state.activeStartDate = date)

  const selectedDate = computed(() => state.selectedDate)
  const updateSelectedDate = (date: Date) => (state.selectedDate = date)

  const currentView = computed(() => state.view)
  const updateView = (view: View) => (state.view = view)
  const drillUpView = () => {
    const viewIndex = viewValues.indexOf(state.view)
    viewIndex > 0 ?
      state.view = viewValues[viewIndex - 1] :
      state.view = props.defaultView || defaultView
  }

  const drillDownView = () => {
    const viewIndex = viewValues.indexOf(state.view)
    if (viewIndex < viewValues.length - 1) state.view = viewValues[viewIndex + 1]
  }

  const onDateSelectedCallbacks = ref<((date: Date) => void)[]>([])
  const onDateSelected = (callback: (date: Date) => void) => {
    onDateSelectedCallbacks.value.push(callback)
  }

  const dateSelected = (date: Date) => {
    if (!date) return
    onDateSelectedCallbacks.value.forEach(callback => callback(date))
    state.view = props.defaultView || defaultView
  }

  const currentMonth = computed(() => activeStartDate.value.getMonth())

  const locale = computed(() => props.locale ? props.locale : new Intl.DateTimeFormat().resolvedOptions().locale)

  function format(date: Date, options: Intl.DateTimeFormatOptions | undefined = undefined) {
    return new Intl.DateTimeFormat(locale.value, options).format(date)
  }

  return {
    activeStartDate,
    updateActiveStartDate,
    selectedDate,
    dateSelected,
    onDateSelected,
    updateSelectedDate,
    currentView,
    updateView,
    drillUpView,
    drillDownView,
    currentMonth,
    format,
  }
}
