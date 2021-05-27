import { defineComponent, inject, withModifiers } from "vue";
import { CalendarKey } from "./Calendar";
import CalendarDay from "./CalendarDay"

export default defineComponent({
  name: 'SuiCalendarDateTable',
  setup() {
    const {
      calendarDays,
      updateSelectMode,
      set,
      add,
      subtract,
      selectedDate,
      setSelectedDate,
      selectType,
      updateVisible,
      formatDate
    } = inject(CalendarKey) as any

    const isEqualDay = (date: any) => {
      if (!selectedDate.value) return false

      const target = selectedDate.value

      return (target.getFullYear() === date.year) &&
        (target.getMonth() === date.month) &&
        (target.getDate() === date.day)
    }

    const onSelectDay = (event: any) => {
      set(event.year, 'years')
      set(event.month, 'months')
      set(event.day, 'days')

      if (selectType.value === 'date') {
        let newDate = new Date(event.year, event.month, event.day)
        setSelectedDate(newDate)
        updateVisible(false)
        return
      }

      updateSelectMode('hour')
    }

    return {
      calendarDays,
      isEqualDay,
      onSelectDay,
      updateSelectMode,
      formatDate,
      add,
      subtract
    }
  },
  render() {
    const renderCalendarDays = () => {
      return this.calendarDays.map((week: any, i: number) => {
        return (<tr>
          {week.map((date: any) => {
            return (
              <CalendarDay
                active={this.isEqualDay(date)}
                date={date}
                disabled={!date.currentMonth}
                onSelectDay={this.onSelectDay}
              >
                {date.day}
              </CalendarDay>
            )
          })}
        </tr>)
      })
    }

    return (
      <table class="ui celled center aligned unstackable table day seven column">
        <thead>
          <tr>
            <th colspan={7}>
              <span
                class="link"
                onClick={withModifiers(() => this.updateSelectMode('month'), ['stop'])}
              >
                {this.formatDate('date')}
              </span>
              <span class="prev link" onClick={() => this.subtract(1, 'months')}>
                <i class="chevron left icon"></i>
              </span>
              <span class="next link" onClick={() => this.add(1, 'months')}>
                <i class="chevron right icon"></i>
              </span>
            </th>
          </tr>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          {renderCalendarDays()}
        </tbody>
      </table>
    )
  }
})