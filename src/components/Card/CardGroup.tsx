import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    centered: Boolean,
    doubling: Boolean,
    inverted: Boolean,
    itemsPerRow: Number,
    stackable: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.centered, 'centered'),
        computeKeyOnly(props.doubling, 'doubling'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.stackable, 'stackable'),
        computeWidthProp(props.itemsPerRow, ''),
        'cards'
      )
    })

    return { computedClass }
  },
  render() {
    return (
      <div class={this.computedClass}>
        {this.$slots.default?.()}
      </div>
    )
  }
})