import clsx from 'clsx'
import { computed, defineComponent } from 'vue'

import Label from '../Label/Label'
import Image from '../Image/Image'

import type { PropType } from 'vue'

export default defineComponent({
  props: {
    filtered: Boolean,
    icon: {
      type: String,
      default: 'dropdown'
    },
    label: Object as PropType<InstanceType<typeof Label>['$props']>,
    image: Object as PropType<InstanceType<typeof Image>['$props']>,
    selectable: Boolean,
  },
  setup(props, { slots }) {
    const classes = computed(() => clsx(
      'text',
      props.filtered && 'filtered',
    ))

    return () => (
      <>
        <div class={classes.value}>
          {props.selectable && props.label && <Label {...props.label} />}
          {props.selectable && props.image && <Image {...props.image} />}
          {slots.default?.()}
        </div>
        <i class={clsx(props.icon, 'icon')}></i>
      </>
    )
  }
})
