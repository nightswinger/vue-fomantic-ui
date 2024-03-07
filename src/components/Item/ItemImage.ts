import clsx from "clsx";
import { computed, defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiItemImage',
  props: {
    size: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        props.size,
        'image'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})