import clsx from "clsx";
import { computed, defineComponent, inject, onMounted, onUnmounted, Ref, ref } from "vue";
import { CalendarKey } from "./Calendar";
import { useAnimation } from "./useAnimation";
import CalendarDateTable from "./CalendarDateTable";
import CalendarMonthTable from "./CalendarMonthTable";
import CalendarYearTable from "./CalendarYearTable";
import CalendarHourTable from "./CalendarHourTable";
import CalendarMinuteTable from "./CalendarMinuteTable";

export default defineComponent({
  name: 'SuiCalendarBody',
  setup() {
    const rootRef: Ref<HTMLElement|null> = ref(null)

    const {
      visible,
      selectMode
    } = inject(CalendarKey) as any

    const {
      setupAnimation,
      removeAnimation,
      computeAnimationClass
    } = useAnimation(visible)

    onMounted(() => setupAnimation(rootRef.value as HTMLElement))
    onUnmounted(() => removeAnimation(rootRef.value as HTMLElement))

    const computedClass = computed(() => {
      return clsx(
        'ui popup calendar',
        'bottom left',
        'transition',
        computeAnimationClass.value
      )
    })

    return {
      rootRef,
      computedClass,
      selectMode
    }
  },
  render() {
    const renderCalendarTable = () => {
      switch (this.selectMode) {
        case 'day':
          return (<CalendarDateTable />)
        case 'month':
          return (<CalendarMonthTable />)
        case 'year':
          return (<CalendarYearTable />)
        case 'hour':
          return (<CalendarHourTable />)
        case 'minute':
          return (<CalendarMinuteTable />)
      }
    }

    return (
      <div
        ref={(ref) => this.rootRef = ref as HTMLElement}
        class={this.computedClass}
        style="inset: 38px auto auto 0px;"
      >
        {renderCalendarTable()}
      </div>
    )
  }
})