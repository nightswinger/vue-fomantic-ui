import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCard',
  props: {
    color: String,
    fluid: Boolean,
    href: String,
    link: Boolean,
    raised: Boolean
  },
  setup(props) {
    const {
      color,
      fluid,
      link,
      raised
    } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        color,
        computeKeyOnly(fluid, 'fluid'),
        computeKeyOnly(link, 'link'),
        computeKeyOnly(raised, 'raised'),
        'card'
      )
    })

    return { computedClass }
  },
  render() {
    if (this.$props.href || this.$props.link) {
      return h(
        'a',
        {
          class: this.computedClass,
          href: this.$slots.href
        },
        this.$slots.default?.()
      )
    }

    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})