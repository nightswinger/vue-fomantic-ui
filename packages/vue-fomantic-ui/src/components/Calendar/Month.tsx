import { computed, defineComponent, inject } from 'vue'

import { UseCalendar, UseCalendarKey } from './hooks/useCalendar'

import Tile from './Tile'

export default defineComponent({
  props: {
    date: {
      type: Date,
      required: true,
    },
  },
  setup(props) {
    const {
      drillDownView,
      updateActiveStartDate,
      selectedDate,
      format,
    } = inject(UseCalendarKey) as UseCalendar

    const isActive = computed(() => {
      return props.date.getFullYear() === selectedDate.value?.getFullYear() &&
        props.date.getMonth() === selectedDate.value?.getMonth()
    })

    const isToday = computed(() => {
      const today = new Date()
      return props.date.getMonth() === today.getMonth() &&
        props.date.getFullYear() === today.getFullYear()
    })

    const classes = computed(() => {
      return [
        'link',
        { today: isToday.value }
      ]
    })

    const onClick = () => {
      updateActiveStartDate(props.date)
      drillDownView()
    }

    return () => (
      <Tile
        class={classes.value}
        active={isActive.value}
        onClick={() => onClick()}
      >
        {format(props.date, { month: 'short' })}
      </Tile>
    )
  }
})
