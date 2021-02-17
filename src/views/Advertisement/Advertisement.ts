import clsx from "clsx";
import { computed, defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiAdvertisement',
  props: {
    test: String,
    unit: String
  },
  setup(props) {
    const { test, unit } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        unit,
        test ? 'test' : null,
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