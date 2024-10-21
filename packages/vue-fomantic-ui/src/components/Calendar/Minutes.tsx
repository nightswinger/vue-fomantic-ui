import { computed, defineComponent } from 'vue'

import Minute from './Minute'
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
    const hour = computed(() => props.activeStartDate.getHours())

    const dateTransform = (minute: number) => {
      const date = new Date()
      date.setFullYear(year.value!, month.value, day.value)
      date.setHours(hour.value!, minute, 0, 0)

      return date
    }

    return () => (
      <TileGroup
        rows={3}
        cols={4}
        start={0}
        end={11}
        step={5}
        dateTransform={dateTransform}
        tile={Minute}
      />
    )
  }
})
