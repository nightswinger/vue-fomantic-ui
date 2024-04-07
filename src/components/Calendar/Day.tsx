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
      currentMonth,
      drillDownView,
      selectedDate,
      updateSelectedDate,
      updateActiveStartDate,
    } = inject(UseCalendarKey) as UseCalendar

    const isCurrentMonth = computed(() => props.date.getMonth() === currentMonth.value)
    const isToday = computed(() => {
      const today = new Date()
      return props.date.getDate() === today.getDate() &&
        props.date.getMonth() === today.getMonth() &&
        props.date.getFullYear() === today.getFullYear()
    })

    const isActive = computed(() => {
      return props.date.getFullYear() === selectedDate.value?.getFullYear() &&
        props.date.getMonth() === selectedDate.value?.getMonth() &&
        props.date.getDate() === selectedDate.value?.getDate()
    })

    const classes = computed(() => {
      return [
        'link',
        { today: isToday.value },
        { active: isActive.value },
        { disabled: !isCurrentMonth.value },
      ]
    })

    const onClick = () => {
      if (!isCurrentMonth.value) return

      updateActiveStartDate(props.date)

      if (selectedDate.value) {
        const newDate = new Date(selectedDate.value)
        newDate.setDate(props.date.getDate())

        updateSelectedDate(newDate)
      }

      drillDownView()
    }

    return () => (
      <Tile
        class={classes.value}
        disabled={!isCurrentMonth.value}
        onClick={() => onClick()}
      >
        {props.date.getDate()}
      </Tile>
    )
  }
})
