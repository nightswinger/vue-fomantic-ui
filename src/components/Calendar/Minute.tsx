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
      selectedDate,
      updateSelectedDate,
      dateSelected,
      format,
    } = inject(UseCalendarKey) as UseCalendar

    const isActive = computed(() => props.date.getTime() === selectedDate.value?.getTime())

    const classes = computed(() => {
      return [
        'link',
        { active: isActive.value }
      ]
    })

    const onClick = () => {
      updateSelectedDate(props.date)
      dateSelected(props.date)
    }

    return () => (
      <Tile
        class={classes.value}
        onClick={onClick}
      >
        {format(props.date, { hour: 'numeric', minute: 'numeric' })}
      </Tile>
    )
  }
})
