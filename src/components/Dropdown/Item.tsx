import { computed, defineComponent, ref } from 'vue'
import { useElementBounding, useWindowSize } from '@vueuse/core'

import Label from '../Label/Label'

import ItemGroup from './ItemGroup'

import type { PropType } from 'vue'

export type DropdownItem = string | {
  text: string;
  icon?: string;
  description?: string;
  label?: InstanceType<typeof Label>['$props'];
  children?: DropdownItem[];
  divider?: boolean;
}

const Item = defineComponent({
  props: {
    item: [String, Object] as PropType<DropdownItem>,
  },
  emits: ['select'],
  setup(props, { emit }) {
    const el = ref<HTMLDivElement>()
    const hovering = ref(false)

    const direction = ref<'up' | 'down'>('down')

    const text = computed(() => typeof props.item === 'string' ? props.item : props.item?.text)
    const divider = computed(() => typeof props.item === 'object' && props.item.divider)
    
    const onMouseenter = () => {
      if (!el.value || typeof props.item !== 'object') return
      if (!props.item.children) return

      const { height } = useWindowSize()
      const { top, height: elementHeight } = useElementBounding(el)
      
      const spaceAtBottom = height.value - top.value
      const childrenHeight = props.item?.children?.length * elementHeight.value

      direction.value = spaceAtBottom < childrenHeight ? 'up' : 'down'

      hovering.value = true
    }

    return () => (
      <>
        {
          divider.value ?
          <div class="divider"></div> :
          <div
            ref={el}
            class="item"
            onClick={() => emit('select', props.item)}
            onMouseenter={onMouseenter}
            onMouseleave={() => hovering.value = false}
          >
            {
              typeof props.item === 'object' && props.item.icon &&
              <i class={`${props.item.icon} icon`}></i>
            }
            {
              typeof props.item === 'object' && props.item.description &&
              <span class="description">{props.item?.description}</span>
            }
            {
              typeof props.item === 'object' && props.item.label &&
              <Label {...props.item.label} />
            }
            {text.value}
            {
              typeof props.item === 'object' && props.item.children &&
              <ItemGroup
                active={hovering.value}
                direction={direction.value}
              >
                {
                  props.item.children.map((item) => (
                    <Item item={item} />
                  ))
                }
              </ItemGroup>
            }
          </div>
        }
      </>
    )
  }
})

export default Item
