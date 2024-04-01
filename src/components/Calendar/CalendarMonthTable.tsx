import { defineComponent, inject, withModifiers } from "vue";
import { CalendarKey } from "./Calendar";
import CalendarTableCell from "./CalendarTableCell";

export default defineComponent({
  name: 'SuiCalendarMonthTable',
  setup() {
    const {
      state,
      set,
      add,
      subtract,
      selectedDate,
      updateSelectMode
    } = inject(CalendarKey) as any

    const isActive = (month: number) => {
      if (!selectedDate.value) return false

      return (state.year === selectedDate.value.getFullYear()) &&
        (state.month === month)
    }

    const isThisMonth = (month: number) => {
      let today = new Date()

      return month === today.getMonth() && state.year === today.getFullYear()
    }

    const onClickCell = (value: number) => {
      set(value, 'months')
      updateSelectMode('day')
    }

    return {
      state,
      add,
      subtract,
      updateSelectMode,
      isActive,
      isThisMonth,
      onClickCell
    }
  },
  render() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const renderMonths = () => {
      return Array(4).fill(0).map((_, i) => {
        return (
          <tr>
            <CalendarTableCell
              value={i*3}
              active={this.isActive(i*3)}
              today={this.isThisMonth(i*3)}
              onClickCell={this.onClickCell}
            >
              {months[i*3]}
            </CalendarTableCell>
            <CalendarTableCell
              value={i*3+1}
              active={this.isActive(i*3+1)}
              today={this.isThisMonth(i*3+1)}
              onClickCell={this.onClickCell}
            >
              {months[i*3+1]}
            </CalendarTableCell>
            <CalendarTableCell
              value={i*3+2}
              active={this.isActive(i*3+2)}
              today={this.isThisMonth(i*3+2)}
              onClickCell={this.onClickCell}
            >
              {months[i*3+2]}
            </CalendarTableCell>
          </tr>
        )
      })
    }

    return (
      <table class="ui celled center aligned unstackable table month three column">
        <thead>
          <tr>
            <th colspan={3}>
              <span class="link" onClick={withModifiers(() =>this.updateSelectMode('year'), ['stop'])}>{this.state.year}</span>
              <span class="prev link" onClick={() => this.subtract(1, 'years')}><i class="chevron left icon"></i></span>
              <span class="next link" onClick={() => this.add(1, 'years')}><i class="chevron right icon"></i></span>
            </th>
          </tr>
        </thead>
        <tbody>
          {renderMonths()}
        </tbody>
      </table>
    )
  }
})