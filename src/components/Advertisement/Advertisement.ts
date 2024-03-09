import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    centered: Boolean,
    test: String,
    unit: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.unit,
        computeKeyOnly(props.centered, 'centered'),
        computeKeyOnly(!!props.test, 'test'),
        'ad'
      )
    })

    return { computedClass }
  },
  render() {
    if (this.$props.test) {
      return h(
        'div',
        {
          class: this.computedClass,
          'data-text': this.$props.test
        },
        this.$slots.default?.()
      )
    }

    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})