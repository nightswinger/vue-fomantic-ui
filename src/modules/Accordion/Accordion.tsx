import clsx from "clsx";
import { computed, defineComponent, provide, Ref, ref } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiAccordion',
  props: {
    fluid: Boolean,
    inverted: Boolean,
    multiple: Boolean,
    styled: Boolean
  },
  setup(props) {
    const activeIndex: any = props.multiple ? ref([]) : ref(-1)
    const isTabActive = (index: number) => {
      if (props.multiple) {
        return activeIndex.value.includes(index)
      }

      return activeIndex.value === index
    }
    const updateActiveIndex = (value: number) => {
      const active = isTabActive(value)

      if (props.multiple) {
        if (active) {
          activeIndex.value = activeIndex.value.filter((i: number) => i !== value)
        } else {
          activeIndex.value.push(value)
        }
      } else {
        activeIndex.value = active ? -1 : value
      }
    }

    provide('isTabActive', isTabActive)
    provide('updateActiveIndex', updateActiveIndex)

    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.styled, 'styled'),
        'accordion'
      )
    })

    return { computedClass }
  },
  render() {
    const renderTabs = (tabs: any) => {
      tabs.forEach((tab: any, i: number) => {
        tab.props.index = i
      })
      return tabs
    }
    return (
      <div class={this.computedClass}>
        {renderTabs(this.$slots.default?.())}
      </div>
    )
  }
})