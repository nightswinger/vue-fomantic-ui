import clsx from "clsx";
import { defineComponent, h } from "vue";
import { useSizeProps } from "../../composables/size";

export default defineComponent({
  name: 'SuiForm',
  props: {
    error: Boolean,
    inverted: Boolean,
    loading: Boolean,
    success: Boolean,
    unstackable: Boolean,
    warning: Boolean,
    ...useSizeProps
  },
  setup(props, { slots }) {
    const {
      error,
      inverted,
      loading,
      size,
      success,
      unstackable,
      warning
    } = props

    const computedClass = clsx(
      'ui',
      error && 'error',
      inverted && 'inverted',
      loading && 'loading',
      size && size,
      success && 'success',
      unstackable && 'unstackable',
      warning && 'warning',
      'form'
    )

    return () => (
      h('form', {
        class: computedClass
      }, slots.default?.())
    )
  }
})