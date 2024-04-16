import clsx from 'clsx'
import { computed, defineComponent } from 'vue'

import Label from '../Label/Label'

import type { PropType } from 'vue'

export default defineComponent({
  props: {
    filtered: Boolean,
    icon: {
      type: String,
      default: 'dropdown'
    },
    label: Object as PropType<InstanceType<typeof Label>['$props']>,
  },
  setup(props, { slots }) {
    const classes = computed(() => clsx(
      'text',
      props.filtered && 'filtered',
    ))

    return () => (
      <>
        <div class={classes.value}>
          {props.label && <Label {...props.label} />}
          {slots.default?.()}
        </div>
        <i class={clsx(props.icon, 'icon')}></i>
      </>
    )
  }
})
