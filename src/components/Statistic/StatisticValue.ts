import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    content: String,
    text: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.text, 'text'),
        'value'
      )
    })

    return { computedClass }
  },
  render() {
    if (this.$props.content) {
      return h(
        'div',
        { class: this.computedClass },
        this.$props.content
      )
    }

    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})