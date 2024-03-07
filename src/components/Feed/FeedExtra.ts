import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiFeedExtra',
  props: {
    images: Boolean,
    text: Boolean
  },
  setup(props) {
    const { images, text } = props

    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(images, 'images'),
        computeKeyOnly(text, 'text'),
        'extra'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})