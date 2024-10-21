import { computed, defineComponent } from 'vue'

import Month from './Month'
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

    const dateTransform = (month: number) => {
      const date = new Date()
      date.setFullYear(year.value, month, 1)
      date.setHours(0, 0, 0, 0)
    
      return date
    }

    return () => (
      <TileGroup
        rows={3}
        cols={4}
        start={0}
        end={12}
        dateTransform={dateTransform}
        tile={Month}
      />
    )
  }
})
