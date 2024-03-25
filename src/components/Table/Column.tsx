import { defineComponent } from "vue"

export default defineComponent({
  name: 'Column',
  props: {
    field: String,
    header: String,
    error: Function,
    warning: Function,
  },
})
