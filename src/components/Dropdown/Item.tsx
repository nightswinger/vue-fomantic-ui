import { computed, defineComponent, onMounted, ref, watch } from 'vue'

import type { PropType } from 'vue'
import ItemGroup from './ItemGroup';

export type DropdownItem = string | {
  text: string;
  icon?: string;
  description?: string;
  children?: DropdownItem[];
  divider?: boolean;
}

const Item = defineComponent({
  props: {
    item: [String, Object] as PropType<DropdownItem>,
  },
  setup(props) {
    const hovering = ref(false)

    const text = computed(() => typeof props.item === 'string' ? props.item : props.item?.text)
    const divider = computed(() => typeof props.item === 'object' && props.item.divider)

    return () => (
      <>
        {
          divider.value ?
          <div class="divider"></div> :
          <div
            class="item"
            onMouseenter={() => hovering.value = true}
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
            {text.value}
            {
              typeof props.item === 'object' && props.item.children &&
              <ItemGroup
                active={hovering.value}
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
