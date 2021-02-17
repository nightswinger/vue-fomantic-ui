import clsx from "clsx";
import { computed, defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFeed',
  props: {
    size: String
  },
  setup(props) {
    const { size } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        size,
        'feed'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})