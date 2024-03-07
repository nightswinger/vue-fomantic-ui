import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { Segment } from "@/components/Segment"
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiDimmerDimmable',
  components: { Segment },
  props: {
    blurring: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.blurring, 'blurring'),
        'dimmable'
      )
    })

    return { computedClass }
  },
  render() {
    return h(Segment, { class: this.computedClass }, this.$slots.default?.())
  }
})