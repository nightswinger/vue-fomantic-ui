import clsx from "clsx";
import { computed, defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFlag',
  props: {
    name: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(props.name, 'flag')
    })

    return { computedClass }
  },
  render() {
    return h('i', { class: this.computedClass })
  }
})