import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly, computeWidthProp } from "@/utils/classNameHelper"

export default defineComponent({
  props: {
    centered: Boolean,
    doubling: Boolean,
    horizontal: Boolean,
    inverted: Boolean,
    itemsPerRow: Number,
    stackable: Boolean
  },
  setup(props) {
    const classes = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.centered, 'centered'),
        computeKeyOnly(props.doubling, 'doubling'),
        computeKeyOnly(props.horizontal, 'horizontal'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.stackable, 'stackable'),
        computeWidthProp(props.itemsPerRow, ''),
        'cards'
      )
    })

    return { classes }
  },
  render() {
    return (
      <div class={this.classes}>
        {this.$slots.default?.()}
      </div>
    )
  }
})
