import { defineComponent, inject } from 'vue'

import { getMonthsAgo, getMonthsSince } from './hooks/dates'
import { UseCalendar, UseCalendarKey } from './hooks/useCalendar'

import Navigation from './Navigation'
import Months from './Months'

export default defineComponent({
  setup() {
    const {
      activeStartDate,
      updateActiveStartDate,
      drillUpView,
      format,
    } = inject(UseCalendarKey) as UseCalendar

    return () => (
      <table class='ui celled center aligned unstackable table month three column'>
        <thead>
          <Navigation
            label={format(activeStartDate.value, { year: 'numeric' })}
            onLabelClick={drillUpView}
            onPrev={() => updateActiveStartDate(getMonthsAgo(activeStartDate.value, 12))}
            onNext={() => updateActiveStartDate(getMonthsSince(activeStartDate.value, 12))}
          />
        </thead>
        <tbody>
          <Months activeStartDate={activeStartDate.value} />
        </tbody>
      </table>
    )
  }
})
