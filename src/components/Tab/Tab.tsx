import clsx from "clsx";
import { computed, defineComponent, isVNode, ref, watch } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";
import TabPanel from "./TabPanel";

export default defineComponent({
  emits: ['update:activeIndex', 'tab-change', 'tab-click'],
  props: {
    activeIndex: { type: Number, default: 0 },
    pointing: Boolean,
    secondary: Boolean,
    text: Boolean
  },
  setup(props, { emit, slots }) {
    const tabIndex = ref(props.activeIndex)

    watch(() => props.activeIndex, (newValue) => {
      tabIndex.value = newValue
    })

    const onClick = (event: any, i: number) => {
      if (tabIndex.value !== i) {
        tabIndex.value = i
        emit('update:activeIndex', i)
        emit('tab-change', { event, index: i })
      }

      emit('tab-click', { event, index: i })
    }

    const onKeyDown = (event: KeyboardEvent, i: number) => {
      if (event.key === 'Enter') {
        onClick(event, i)
      }
    }

    const tabs = computed(() => {
      let tabs: any = []
      if (slots.default?.()) {
        slots.default?.().forEach((child: any) => {
          if (isVNode(child)) tabs.push(child)
        })
      }

      return tabs
    })

    const isDefaultMenu = computed(() => !props.secondary && !props.pointing && !props.text)

    const tabMenuClass = computed(() => {
      return clsx(
        'ui menu',
        computeKeyOnly(isDefaultMenu.value, 'tabular attached'),
        computeKeyOnly(props.pointing, 'pointing'),
        computeKeyOnly(props.secondary, 'secondary'),
        computeKeyOnly(props.text, 'text')
      )
    })

    return {
      onClick,
      onKeyDown,
      tabIndex,
      tabs,
      tabMenuClass,
      isDefaultMenu
    }
  },
  render() {
    const renderMenuItems = () => {
      return this.tabs.map((tab: any, i: number) => {
        return <a
          class={`item ${this.tabIndex === i && 'active'}`}
          onClick={(event) => this.onClick(event, i)}
          onKeydown={(event) => this.onKeyDown(event, i)}
          tabindex={0}
        >
          {tab.props.header}
        </a>
      })
    }

    const renderTabPanels = () => {
      return this.tabs.map((tab: any, i: number) => {
        return <TabPanel
          {...tab.props}
          active={this.tabIndex === i}
          attached={this.isDefaultMenu ? 'bottom' : false}
        >
          {tab.children.default?.()}
        </TabPanel>
      })
    }

    return (
      <>
        <div class={this.tabMenuClass}>
          {renderMenuItems()}
        </div>
        {renderTabPanels()}
      </>
    )
  }
})