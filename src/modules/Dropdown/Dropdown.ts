import clsx from "clsx";
import { computed, defineComponent, h, provide, Ref, ref, withDirectives } from "vue";
import clickOutside from "../../directives/click-outside";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiDropdown',
  props: {
    compact: Boolean,
    floating: Boolean,
    fluid: Boolean,
    inline: Boolean,
    item: Boolean,
    pointing: [Boolean, String],
    scrolling: Boolean,
    selection: Boolean,
    serach: Boolean,
    simple: Boolean,
    text: String,
  },
  setup(props) {
    let open: Ref<boolean> = ref(false)

    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.floating, 'floating'),
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.inline, 'inline'),
        computeKeyOnly(props.item, 'item'),
        computeKeyOnly(props.scrolling, 'scrolling'),
        computeKeyOnly(props.selection, 'selection'),
        computeKeyOnly(props.serach, 'search'),
        computeKeyOnly(props.simple, 'simple'),
        computeKeyOrKeyValue(props.pointing, 'pointing'),
        'dropdown',
        computeKeyOnly(open.value, 'active visible')
      )
    })

    const openMenu = () => {
      open.value = !open.value
    }

    const closeMenu = () => {
      if (open.value) open.value = false
    }

    provide('open', open)
    provide('selection', props.selection)

    return {
      computedClass,
      openMenu,
      closeMenu
    }
  },
  render() {
    return withDirectives(h(
      'div',
      {
        class: this.computedClass,
        onClick: this.openMenu,
      },
      [
        h('div', { class: 'text' }, this.text),
        h('i', { class: 'dropdown icon' }),
        this.$slots.default?.()
      ]
    ), [[clickOutside, this.closeMenu]])
  }
})