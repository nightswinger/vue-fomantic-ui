import { computed, defineComponent } from 'vue'

import { getBeginOfDecadeYear } from './hooks/dates'

import Year from './Year'
import TileGroup from './TileGroup'

export default defineComponent({
  props: {
    activeStartDate: {
      type: Date,
      required: true,
    },
  },
  setup(props) {
    const start = computed(() => {
      const date = getBeginOfDecadeYear(props.activeStartDate)
      return date.getFullYear()
    })
    const end = computed(() => start.value + 11)
    
    const dateTransform = (year: number) => {
      const date = new Date()
      date.setFullYear(year, 0, 1)
      date.setHours(0, 0, 0, 0)
    
      return date
    }

    return () => (
      <TileGroup
        rows={3}
        cols={4}
        start={start.value}
        end={end.value}
        dateTransform={dateTransform}
        tile={Year}
      />
    )
  }
})
