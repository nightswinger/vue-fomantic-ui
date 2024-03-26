import { defineComponent } from "vue"

export default defineComponent({
  name: 'Column',
  props: {
    active: Function,
    field: String,
    header: String,
    error: Function,
    color: Function,
    negative: Function,
    positive: Function,
    marked: Function,
    selectable: [Boolean, Function],
    warning: Function,
  },
})
