import clsx from "clsx";
import { computed, defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiDivider',
  props: {
    clearing: Boolean,
    fitted: Boolean,
    hidden: Boolean,
    horizontal: Boolean,
    inverted: Boolean,
    section: Boolean,
    vertical: Boolean
  },
  setup(props) {
    const {
      clearing,
      fitted,
      hidden,
      horizontal,
      inverted,
      section,
      vertical
    } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        {
          clearing,
          fitted,
          hidden,
          horizontal,
          inverted,
          section,
          vertical
        },
        'divider'
      )
    })

    return { computedClass }
  },
  render() {
    return h(
      'div',
      { class: this.computedClass },
      this.$slots.default?.()
    )
  }
})