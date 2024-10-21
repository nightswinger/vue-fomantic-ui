import { defineComponent, inject } from 'vue'

import { getDaysAgo, getDaysSince } from './hooks/dates'
import { UseCalendar, UseCalendarKey } from './hooks/useCalendar'

import Navigation from './Navigation'
import Minutes from './Minutes'

export default defineComponent({
  setup() {
    const {
      activeStartDate,
      updateActiveStartDate,
      updateView,
      format,
    } = inject(UseCalendarKey) as UseCalendar

    return () => (
      <table class='ui celled center aligned unstackable table minute three column'>
        <thead>
          <Navigation
            label={format(activeStartDate.value, { day: 'numeric', month: 'long', year: 'numeric' })}
            onLabelClick={() => updateView('month')}
            onPrev={() => updateActiveStartDate(getDaysAgo(activeStartDate.value, 1))}
            onNext={() => updateActiveStartDate(getDaysSince(activeStartDate.value, 1))}
          />
        </thead>
        <tbody>
          <Minutes activeStartDate={activeStartDate.value} />
        </tbody>
      </table>
    )
  }
})
