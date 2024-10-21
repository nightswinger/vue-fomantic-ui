import { computed, defineComponent } from 'vue'

import { getBeginOfMonth, getDayOfWeek } from './hooks/dates'

import Day from './Day'
import TileGroup from './TileGroup'

export default defineComponent({
  props: {
    activeStartDate: {
      type: Date,
      required: true,
    },
    localeFirstDayOfYear: Number,
  },
  setup(props) {
    const year = computed(() => props.activeStartDate.getFullYear())
    const month = computed(() => props.activeStartDate.getMonth())

    const dateTransform = (day: number) => {
      const date = new Date()
      date.setFullYear(year.value!, month.value, day)
      date.setHours(0, 0, 0, 0)

      return date
    }

    const dayOfWeek = computed(() => getDayOfWeek(getBeginOfMonth(props.activeStartDate), props.localeFirstDayOfYear))

    const start = computed(() => 1 - dayOfWeek.value)
    const end = computed(() => 42 + start.value)

    return () => (
      <TileGroup
        rows={7}
        cols={6}
        start={start.value}
        end={end.value}
        dateTransform={dateTransform}
        tile={Day}
      />
    )
  },
})
