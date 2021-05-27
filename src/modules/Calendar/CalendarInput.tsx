import { defineComponent, inject } from "vue";
import { CalendarKey } from "./Calendar";

export default defineComponent({
  name: 'SuiCalendarInput',
  props: {
    placeholder: String,
    value: null
  },
  setup(props) {
    const {
      visible,
      updateVisible,
      updateSelectMode,
      set,
      state,
      formatCalendarDate
    } = inject(CalendarKey) as any

    const onClick = () => {
      if (!visible.value) {
        updateSelectMode('day')

        if (props.value) {
          set(props.value.getFullYear(), 'years')
          set(props.value.getMonth(), 'months')
        }
      }
      updateVisible(!visible.value)
    }

    return {
      visible,
      formatCalendarDate,
      onClick
    }
  },
  render() {
    return (
      <input
        type="text"
        placeholder={this.placeholder}
        value={this.formatCalendarDate(this.value)}
        onClick={() => this.onClick()}
      ></input>
    )
  }
})