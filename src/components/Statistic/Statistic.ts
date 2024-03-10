import clsx from "clsx";
import { computed, defineComponent, h, inject } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";
import StatisticLabel from "./StatisticLabel"
import StatisticValue from "./StatisticValue"

export default defineComponent({
  components: { StatisticLabel, StatisticValue },
  props: {
    color: String,
    floated: [Boolean, String],
    horizontal: Boolean,
    inverted: Boolean,
    label: String,
    size: String,
    text: Boolean,
    value: String
  },
  setup(props) {
    const ui = inject('ui', true)

    const computedClass = computed(() => {
      return clsx(
        ui && 'ui',
        props.color,
        props.size,
        computeKeyOnly(props.horizontal, 'horizontal'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.text, 'text'),
        computeKeyOrKeyValue(props.floated, 'floated'),
        'statistic'
      )
    })

    return { computedClass }
  },
  render() {
    let children = []

    if (this.$props.value) {
      children.push(h(StatisticValue, { content: this.$props.value }, this.$slots.default?.()))
    }

    if (this.$props.label) {
      children.push(h(StatisticLabel, { content: this.$props.label }, this.$slots.default?.()))
    }

    return h(
      'div',
      { class: this.computedClass }, 
      children.length > 0 ? children : this.$slots.default?.()
    )
  }
})