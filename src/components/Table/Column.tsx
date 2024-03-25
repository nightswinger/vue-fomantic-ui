import { defineComponent } from "vue"

export default defineComponent({
  name: 'Column',
  props: {
    active: Function,
    field: String,
    header: String,
    error: Function,
    warning: Function,
  },
})
