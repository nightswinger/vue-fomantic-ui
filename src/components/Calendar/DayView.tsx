import { defineComponent, inject } from 'vue'

import { getDaysAgo, getDaysSince } from './hooks/dates'
import { UseCalendar, UseCalendarKey } from './hooks/useCalendar'

import Navigation from './Navigation'
import Hours from './Hours'


export default defineComponent({
  setup() {
    const {
      activeStartDate,
      updateActiveStartDate,
      drillUpView,
      format,
    } = inject(UseCalendarKey) as UseCalendar

    return () => (
      <table class='ui celled center aligned unstackable table hour four column'>
        <thead>
          <Navigation
            label={format(activeStartDate.value, { day: 'numeric', month: 'long', year: 'numeric' })}
            onLabelClick={() => drillUpView()}
            onPrev={() => updateActiveStartDate(getDaysAgo(activeStartDate.value, 1))}
            onNext={() => updateActiveStartDate(getDaysSince(activeStartDate.value, 1))}
          />
        </thead>
        <tbody>
          <Hours activeStartDate={activeStartDate.value} />
        </tbody>
      </table>
    )
  }
})
