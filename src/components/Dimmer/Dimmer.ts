import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    active: Boolean,
    inverted: Boolean,
    page: Boolean,
    simple: Boolean,
    verticalAlign: String,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.page, 'page'),
        computeKeyOnly(props.simple, 'simple'),
        computeKeyValue(props.verticalAlign, 'aligned'),
        'dimmer'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})