import { computed, defineComponent } from 'vue'

import Hour from './Hour'
import TileGroup from './TileGroup'

export default defineComponent({
  props: {
    activeStartDate: {
      type: Date,
      required: true,
    },
  },
  setup(props) {
    const year = computed(() => props.activeStartDate.getFullYear())
    const month = computed(() => props.activeStartDate.getMonth())
    const day = computed(() => props.activeStartDate.getDate())

    const dateTransform = (hour: number) => {
      const date = new Date()
      date.setFullYear(year.value!, month.value, day.value)
      date.setHours(hour, 0, 0, 0)

      return date
    }

    return () => (
      <TileGroup
        rows={4}
        cols={6}
        start={0}
        end={24}
        dateTransform={dateTransform}
        tile={Hour}
      />
    )
  }
})
