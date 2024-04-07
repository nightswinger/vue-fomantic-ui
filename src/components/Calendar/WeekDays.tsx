import { defineComponent, inject } from 'vue'

import { getBeginOfMonth, getDayOfWeek } from './hooks/dates'
import { UseCalendar, UseCalendarKey } from './hooks/useCalendar'

export default defineComponent({
  props: {
    localeFirstDayOfYear: Number,
  },
  setup(props) {
    const { format } = inject(UseCalendarKey) as UseCalendar

    const date = new Date()
    const beginOfMonth = getBeginOfMonth(date)
    const year = beginOfMonth.getFullYear()
    const month = beginOfMonth.getMonth()

    const weekDate = (i: number) => new Date(year, month, i - getDayOfWeek(beginOfMonth, props.localeFirstDayOfYear))
    const weekDates = Array.from({ length: 7 }, (_, i) => weekDate(i + 1))

    return () => (
      <tr>
        {
          weekDates.map((date, i) => (
            <th key={i}>
              {format(date, { weekday: 'narrow' })}
            </th>
          ))
        }
      </tr>
    )
  }
})
