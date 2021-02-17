import clsx from "clsx";
import { computed, defineComponent, h, inject, ref, Ref } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiDropdownMenu',
  setup() {
    const openState: Ref<boolean> = inject('open', ref(false))

    const computedClass = computed(() => {
      return clsx(
        'menu',
        computeKeyOnly(openState.value, 'transition visible')
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})