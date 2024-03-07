import clsx from "clsx";
import { computed, defineComponent, h } from "vue";

import { makeSizeProps, useSize } from "@/composables/size";

export default defineComponent({
  name: 'SuiFlag',
  props: {
    name: String,
    ...makeSizeProps(),
  },
  setup(props) {
    const { sizeClass } = useSize(props)

    const classes = computed(() => {
      return clsx(
        sizeClass.value,
        props.name,
        'flag'
      )
    })

    return { classes }
  },
  render() {
    return h('i', { class: this.classes })
  }
})
