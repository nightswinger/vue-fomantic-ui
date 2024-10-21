import { computed, defineComponent, inject } from 'vue'

import { getBeginOfDecadeYear, getMonthsAgo, getMonthsSince } from './hooks/dates'
import { UseCalendar, UseCalendarKey } from './hooks/useCalendar'

import Navigation from './Navigation'
import Years from './Years'

export default defineComponent({
  setup() {
    const {
      activeStartDate,
      updateActiveStartDate,
      drillUpView,
    } = inject(UseCalendarKey) as UseCalendar

    const beginOfDecadeDate = computed(() => getBeginOfDecadeYear(activeStartDate.value))

    const label = computed(() => {
      const startYear = beginOfDecadeDate.value.getFullYear()
      const endYear = startYear + 11
      return `${startYear} - ${endYear}`
    })

    return () => (
      <table class='ui celled center aligned unstackable table year three column'>
        <thead>
          <Navigation
            label={label.value}
            onLabelClick={drillUpView}
            onPrev={() => updateActiveStartDate(getMonthsAgo(activeStartDate.value, 120))}
            onNext={() => updateActiveStartDate(getMonthsSince(activeStartDate.value, 120))}
          />
        </thead>
        <tbody>
          <Years activeStartDate={beginOfDecadeDate.value} />
        </tbody>
      </table>
    )
  }
})
