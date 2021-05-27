import { defineComponent, InjectionKey, provide, watch } from "vue";
import clickOutside from "../../directives/click-outside";
import CalendarBody from "./CalendarBody";
import CalendarInput from "./CalendarInput";
import { useCalendar } from "./useCalendar";

export const CalendarKey: InjectionKey<useCalendar> = Symbol('useCalendar')

export default defineComponent({
  name: 'SuiCalendar',
  directives: { clickoutside: clickOutside },
  emits: ['update:modelValue'],
  props: {
    modelValue: null,
    placeholder: String
  },
  setup(_, { emit }) {
    const calendar = useCalendar()
    provide(CalendarKey, calendar)

    const { updateVisible, selectedDate } = calendar

    watch(selectedDate, (newValue) => {
      emit('update:modelValue', newValue)
    })

    return { updateVisible }
  },
  render() {
    return (
      <div class="ui calendar" v-clickoutside={() => this.updateVisible(false)}>
        <div class="ui input left icon">
          <CalendarBody />
          <i class="calendar icon"></i>
          <CalendarInput placeholder={this.placeholder} value={this.modelValue} />
        </div>
      </div>
    )
  }
})