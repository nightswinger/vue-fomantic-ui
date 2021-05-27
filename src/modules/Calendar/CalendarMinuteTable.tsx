import { defineComponent, inject, withModifiers } from "vue";
import { CalendarKey } from "./Calendar";
import CalendarTableCell from "./CalendarTableCell";

export default defineComponent({
  name: 'SuiCalendarMinuteTable',
  setup() {
    const {
      state,
      set,
      add,
      subtract,
      formatDate,
      updateSelectMode,
      updateVisible,
      selectedDate
    } = inject(CalendarKey) as any

    const getTimeLabel = (minute: number) => {
      let hour = state.hour % 12
      let hourStr = state.hour > 12 ? 'PM' : 'AM'
      let minuteStr = minute.toString().padStart(2, '0')

      if (state.hour === 0) return `12:${minuteStr} AM`
      if (state.hour === 12) return `12:${minuteStr} PM`

      return `${hour}:${minuteStr} ${hourStr}`
    }

    const onClickCell = (value: number) => {
      set(value, 'minutes')
      selectedDate.value = new Date(state.year, state.month, state.day, state.hour, state.minute)
      updateVisible(false)
    }

    const isActive = (minValue: number) => {
      if (!selectedDate.value) return false

      let year = selectedDate.value.getFullYear()
      let month = selectedDate.value.getMonth()
      let day = selectedDate.value.getDate()
      let hour = selectedDate.value.getHours()
      let min = selectedDate.value.getMinutes()

      return (state.year === year) &&
        (state.month === month) &&
        (state.day === day) &&
        (state.hour === hour) &&
        (minValue === min)
    }

    return {
      add,
      subtract,
      formatDate,
      updateSelectMode,
      getTimeLabel,
      onClickCell,
      isActive
    }
  },
  render() {
    return (
      <table class="ui celled center aligned unstackable table minute three column">
        <thead>
          <tr>
            <th colspan={3}>
              <span class="link" onClick={withModifiers(() => this.updateSelectMode('day'), ['stop'])}>
                {this.formatDate()}
              </span>
              <span class="prev link" onClick={() => this.subtract(1, 'days')}>
                <i class="chevron left icon"></i>
              </span>
              <span class="next link" onClick={() => this.add(1, 'days')}>
                <i class="chevron right icon"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <CalendarTableCell active={this.isActive(0)} value={0} onClickCell={this.onClickCell}>{this.getTimeLabel(0)}</CalendarTableCell>
            <CalendarTableCell active={this.isActive(5)} value={5} onClickCell={this.onClickCell}>{this.getTimeLabel(5)}</CalendarTableCell>
            <CalendarTableCell active={this.isActive(10)} value={10} onClickCell={this.onClickCell}>{this.getTimeLabel(10)}</CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell active={this.isActive(15)} value={15} onClickCell={this.onClickCell}>{this.getTimeLabel(15)}</CalendarTableCell>
            <CalendarTableCell active={this.isActive(20)} value={20} onClickCell={this.onClickCell}>{this.getTimeLabel(20)}</CalendarTableCell>
            <CalendarTableCell active={this.isActive(25)} value={25} onClickCell={this.onClickCell}>{this.getTimeLabel(25)}</CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell active={this.isActive(30)} value={30} onClickCell={this.onClickCell}>{this.getTimeLabel(30)}</CalendarTableCell>
            <CalendarTableCell active={this.isActive(35)} value={35} onClickCell={this.onClickCell}>{this.getTimeLabel(35)}</CalendarTableCell>
            <CalendarTableCell active={this.isActive(40)} value={40} onClickCell={this.onClickCell}>{this.getTimeLabel(40)}</CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell active={this.isActive(45)} value={45} onClickCell={this.onClickCell}>{this.getTimeLabel(45)}</CalendarTableCell>
            <CalendarTableCell active={this.isActive(50)} value={50} onClickCell={this.onClickCell}>{this.getTimeLabel(50)}</CalendarTableCell>
            <CalendarTableCell active={this.isActive(55)} value={55} onClickCell={this.onClickCell}>{this.getTimeLabel(55)}</CalendarTableCell>
          </tr>
        </tbody>
      </table>
    )
  }
})