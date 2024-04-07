import { defineComponent, inject } from 'vue'

import { getMonthsAgo, getMonthsSince } from './hooks/dates'
import { UseCalendar, UseCalendarKey } from './hooks/useCalendar'

import WeekDays from './WeekDays'
import Days from './Days'
import Navigation from './Navigation'

export default defineComponent({
  props: {
    localeFirstDayOfYear: Number,
  },
  setup(props) {
    const {
      activeStartDate,
      updateActiveStartDate,
      drillUpView,
      format,
    } = inject(UseCalendarKey) as UseCalendar

    return () => (
      <table class='ui celled center aligned unstackable table day seven column'>
        <thead>
          <Navigation
            label={format(activeStartDate.value, { month: 'long', year: 'numeric' })}
            onLabelClick={drillUpView}
            onPrev={() => updateActiveStartDate(getMonthsAgo(activeStartDate.value, 1))}
            onNext={() => updateActiveStartDate(getMonthsSince(activeStartDate.value, 1))}
          />
          <WeekDays localeFirstDayOfYear={props.localeFirstDayOfYear} />
        </thead>
        <tbody>
          <Days
            activeStartDate={activeStartDate.value}
            localeFirstDayOfYear={props.localeFirstDayOfYear}
          />
        </tbody>
      </table>
    )
  },
})
