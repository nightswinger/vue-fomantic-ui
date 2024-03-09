import clsx from "clsx";
import { computed, defineComponent, h } from "vue";

export default defineComponent({
  props: {
    position: String
  },
  setup(props) {
    const { position } = props

    const computedClass = computed(() => {
      return clsx(position, 'menu')
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})