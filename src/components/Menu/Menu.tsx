import clsx from "clsx"
import { computed, defineComponent, ref } from "vue"
import type { PropType, VNode } from "vue"

import { computeKeyOnly, computeKeyOrKeyValue, computeWidthProp } from "@/utils/classNameHelper"

import MenuItem from "./MenuItem"

type MenuItemOption = string | {
  header?: boolean;
  text?: string | VNode[];
  [key: string]: any;
};

export default defineComponent({
  props: {
    attached: [Boolean, String],
    borderless: Boolean,
    color: Boolean,
    compact: Boolean,
    fixed: Boolean,
    floated: [Boolean, String],
    fluid: Boolean,
    icon: [Boolean, String],
    inverted: Boolean,
    items: Array as PropType<MenuItemOption[]>,
    pagination: Boolean,
    pointing: Boolean,
    secondary: Boolean,
    size: String,
    stackable: Boolean,
    tabular: [Boolean, String],
    text: Boolean,
    vertical: Boolean,
    widths: Number
  },
  setup(props, { slots }) {
    const activeIndex = ref(-1)

    const classes = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.borderless, 'borderless'),
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.fixed, 'fixed'),
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.pagination, 'pagination'),
        computeKeyOnly(props.pointing, 'pointing'),
        computeKeyOnly(props.secondary, 'secondary'),
        computeKeyOnly(props.stackable, 'stackable'),
        computeKeyOnly(props.text, 'text'),
        computeKeyOnly(props.vertical, 'vertical'),
        computeKeyOrKeyValue(props.attached, 'attached'),
        computeKeyOrKeyValue(props.floated, 'floated'),
        computeKeyOrKeyValue(props.icon, 'icon'),
        computeKeyOrKeyValue(props.tabular, 'tabular'),
        computeWidthProp(props.widths, 'item'),
        'menu'
      )
    })

    const getText = (item: MenuItemOption) => {
      if (typeof item === 'string') {
        return item
      }
      return item.text
    }

    const getValueByKey = (item: MenuItemOption, key: string) => {
      if (typeof item === 'string') {
        return item
      }
      return item[key]
    }

    return () => (
      <div class={classes.value}>
        {slots.default && slots.default()}
        {props.items && props.items.map((item, index) => (
          <MenuItem
            index={index}
            active={index === activeIndex.value}
            color={getValueByKey(item, 'color')}
            header={typeof item !== 'string' && item.header}
            onSelected={() => activeIndex.value = index}
          >
            {getText(item)}
          </MenuItem>
        ))}
      </div>
    )
  },
})
