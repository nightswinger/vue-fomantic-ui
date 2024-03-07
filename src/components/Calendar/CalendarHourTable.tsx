import { defineComponent, inject, withModifiers } from "vue";
import { CalendarKey } from "./Calendar";
import CalendarTableCell from "./CalendarTableCell";

export default defineComponent({
  name: 'SuiCalendarHourTable',
  setup() {
    const {
      updateSelectMode,
      state,
      set,
      add,
      subtract,
      formatDate,
      selectedDate
    } = inject(CalendarKey) as any

    const onPrevClick = () => subtract(1, 'days')
    const onNextClick = () => add(1, 'days')

    const onClickCell = (value: number) => {
      set(value, 'hours')
      updateSelectMode('minute')
    }

    const isActive = (hourValue: number) => {
      if (!selectedDate.value) return false

      let year = selectedDate.value.getFullYear()
      let month = selectedDate.value.getMonth()
      let day = selectedDate.value.getDate()
      let hour = selectedDate.value.getHours()

      return (state.year === year) &&
        (state.month === month) &&
        (state.day === day) &&
        (hourValue === hour)
    }

    return {
      updateSelectMode,
      formatDate,
      onPrevClick,
      onNextClick,
      onClickCell,
      isActive
    }
  },
  render() {
    return (
      <table class="ui celled center aligned unstackable table hour four column">
        <thead>
          <tr>
            <th colspan={4}>
              <span class="link" onClick={withModifiers(() => this.updateSelectMode('day'), ['stop'])}>
                {this.formatDate()}
              </span>
              <span class="prev link" onClick={this.onPrevClick}>
                <i class="chevron left icon"></i>
              </span>
              <span class="next link" onClick={this.onNextClick}>
                <i class="chevron right icon"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <CalendarTableCell active={this.isActive(0)} value={0} onClickCell={this.onClickCell}>12:00 AM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(1)} value={1} onClickCell={this.onClickCell}>1:00 AM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(2)} value={2} onClickCell={this.onClickCell}>2:00 AM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(3)} value={3} onClickCell={this.onClickCell}>3:00 AM</CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell active={this.isActive(4)} value={4} onClickCell={this.onClickCell}>4:00 AM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(5)} value={5} onClickCell={this.onClickCell}>5:00 AM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(6)} value={6} onClickCell={this.onClickCell}>6:00 AM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(7)} value={7} onClickCell={this.onClickCell}>7:00 AM</CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell active={this.isActive(8)} value={8} onClickCell={this.onClickCell}>8:00 AM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(9)} value={9} onClickCell={this.onClickCell}>9:00 AM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(10)} value={10} onClickCell={this.onClickCell}>10:00 AM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(11)} value={11} onClickCell={this.onClickCell}>11:00 AM</CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell active={this.isActive(12)} value={12} onClickCell={this.onClickCell}>12:00 PM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(13)} value={13} onClickCell={this.onClickCell}>1:00 PM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(14)} value={14} onClickCell={this.onClickCell}>2:00 PM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(15)} value={15} onClickCell={this.onClickCell}>3:00 PM</CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell active={this.isActive(16)} value={16} onClickCell={this.onClickCell}>4:00 PM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(17)} value={17} onClickCell={this.onClickCell}>5:00 PM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(18)} value={18} onClickCell={this.onClickCell}>6:00 PM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(19)} value={19} onClickCell={this.onClickCell}>7:00 PM</CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell active={this.isActive(20)} value={20} onClickCell={this.onClickCell}>8:00 PM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(21)} value={21} onClickCell={this.onClickCell}>9:00 PM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(22)} value={22} onClickCell={this.onClickCell}>10:00 PM</CalendarTableCell>
            <CalendarTableCell active={this.isActive(23)} value={23} onClickCell={this.onClickCell}>11:00 PM</CalendarTableCell>
          </tr>
        </tbody>
      </table>
    )
  }
})