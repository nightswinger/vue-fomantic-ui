import clsx from 'clsx'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    filtered: Boolean,
    icon: {
      type: String,
      default: 'dropdown'
    }
  },
  setup(props, { slots }) {
    const classes = computed(() => clsx(
      'text',
      props.filtered && 'filtered',
    ))

    return () => (
      <>
        <div class={classes.value}>
          {slots.default?.()}
        </div>
        <i class={clsx(props.icon, 'icon')}></i>
      </>
    )
  }
})
