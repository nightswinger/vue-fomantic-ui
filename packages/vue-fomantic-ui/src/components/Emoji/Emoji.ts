import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    disabled: Boolean,
    link: Boolean,
    loading: Boolean,
    name: String,
    size: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        props.size,
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.link, 'link'),
        computeKeyOnly(props.loading, 'loading')
      )
    })

    return { computedClass }
  },
  render() {
    if (this.computedClass) {
      return h(
        'em',
        {
          class: this.computedClass,
          'data-emoji': this.$props.name
        }
      )
    }
    
    return h('em', { 'data-emoji': this.$props.name })
  }
})