import clsx from "clsx";
import { computed, defineComponent, h } from "vue";

import { makeSizeProps, useSize } from "@/composables/size";
import { computeKeyOnly, computeKeyValue } from "@/utils/classNameHelper";


export default defineComponent({
  name: 'SuiDivider',
  props: {
    clearing: Boolean,
    fitted: Boolean,
    hidden: Boolean,
    horizontal: Boolean,
    inverted: Boolean,
    section: Boolean,
    textAlign: String,
    vertical: Boolean,
    ...makeSizeProps(),
  },
  setup(props) {
    const { sizeClass } = useSize(props)

    const classes = computed(() => {
      return clsx(
        'ui',
        sizeClass.value,
        computeKeyOnly(props.clearing, 'clearing'),
        computeKeyOnly(props.fitted, 'fitted'),
        computeKeyOnly(props.hidden, 'hidden'),
        computeKeyOnly(props.horizontal, 'horizontal'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.section, 'section'),
        computeKeyOnly(props.vertical, 'vertical'),
        computeKeyValue(props.textAlign, 'aligned'),
        'divider'
      )
    })

    return { classes }
  },
  render() {
    return h(
      'div',
      { class: this.classes },
      this.$slots.default?.()
    )
  }
})
