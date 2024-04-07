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
      updateSelectedDate,
      format,
    } = inject(UseCalendarKey) as UseCalendar

    const isActive = computed(() => {
      return props.date.getFullYear() === selectedDate.value?.getFullYear() &&
        props.date.getMonth() === selectedDate.value?.getMonth() &&
        props.date.getDate() === selectedDate.value?.getDate() &&
        props.date.getHours() === selectedDate.value?.getHours()
    })

    const classes = computed(() => {
      return [
        'link',
        { active: isActive.value }
      ]
    })

    const onClick = () => {
      updateActiveStartDate(props.date)
      updateSelectedDate(props.date)

      drillDownView()
    }

    return () => (
      <Tile
        class={classes.value}
        onClick={() => onClick()}
      >
        {format(props.date, { hour: 'numeric', minute: 'numeric' })}
      </Tile>
    )
  }
})
