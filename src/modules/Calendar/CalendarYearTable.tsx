import { computed, defineComponent, inject, withModifiers } from "vue";
import { CalendarKey } from "./Calendar";
import CalendarTableCell from "./CalendarTableCell";

export default defineComponent({
  name: 'SuiCalendarYearTable',
  setup(p) {
    const {
      state,
      set,
      add,
      subtract,
      selectedDate,
      updateSelectMode
    } = inject(CalendarKey) as any

    const moveNextTwelveYears = () => add(10, 'years')
    const movePrevTwelveYears = () => subtract(10, 'years')

    const headerStartYear = computed(() => {
      return Math.round(state.year/10) * 10 + 1
    })

    const isActive = (year: number) => {
      if (!selectedDate.value) return false

      return year === selectedDate.value.getFullYear()
    }

    const isThisYear = (year: number) => {
      let today = new Date()

      return year === today.getFullYear()
    }

    const onClickCell = (value: number) => {
      set(value, 'years')
      updateSelectMode('day')
    }

    return {
      updateSelectMode,
      moveNextTwelveYears,
      movePrevTwelveYears,
      headerStartYear,
      isActive,
      isThisYear,
      onClickCell
    }
  },
  render() {
    return (
      <table class="ui celled center aligned unstackable table year three column">
        <thead>
          <tr>
            <th colspan={3}>
              <span class="link" onClick={withModifiers(() => this.updateSelectMode('day'), ['stop'])}>
                {this.headerStartYear} - {this.headerStartYear + 11}
              </span>
              <span class="prev link" onClick={this.movePrevTwelveYears}><i class="chevron left icon"></i></span>
              <span class="next link" onClick={this.moveNextTwelveYears}><i class="chevron right icon"></i></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <CalendarTableCell
              value={this.headerStartYear}
              active={this.isActive(this.headerStartYear)}
              today={this.isThisYear(this.headerStartYear)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear}
            </CalendarTableCell>
            <CalendarTableCell
              value={this.headerStartYear+1}
              active={this.isActive(this.headerStartYear+1)}
              today={this.isThisYear(this.headerStartYear+1)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+1}
            </CalendarTableCell>
            <CalendarTableCell
              value={this.headerStartYear+2}
              active={this.isActive(this.headerStartYear+2)}
              today={this.isThisYear(this.headerStartYear+2)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+2}
            </CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell
              value={this.headerStartYear+3}
              active={this.isActive(this.headerStartYear+3)}
              today={this.isThisYear(this.headerStartYear+3)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+3}
            </CalendarTableCell>
            <CalendarTableCell
              value={this.headerStartYear+4}
              active={this.isActive(this.headerStartYear+4)}
              today={this.isThisYear(this.headerStartYear+4)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+4}
            </CalendarTableCell>
            <CalendarTableCell
              value={this.headerStartYear+5}
              active={this.isActive(this.headerStartYear+5)}
              today={this.isThisYear(this.headerStartYear+5)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+5}
            </CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell
              value={this.headerStartYear+6}
              active={this.isActive(this.headerStartYear+6)}
              today={this.isThisYear(this.headerStartYear+6)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+6}
            </CalendarTableCell>
            <CalendarTableCell
              value={this.headerStartYear+7}
              active={this.isActive(this.headerStartYear+7)}
              today={this.isThisYear(this.headerStartYear+7)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+7}
            </CalendarTableCell>
            <CalendarTableCell
              value={this.headerStartYear+8}
              active={this.isActive(this.headerStartYear+8)}
              today={this.isThisYear(this.headerStartYear+8)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+8}
            </CalendarTableCell>
          </tr>
          <tr>
            <CalendarTableCell
              value={this.headerStartYear+9}
              active={this.isActive(this.headerStartYear+9)}
              today={this.isThisYear(this.headerStartYear+9)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+9}
            </CalendarTableCell>
            <CalendarTableCell
              value={this.headerStartYear+10}
              active={this.isActive(this.headerStartYear+10)}
              today={this.isThisYear(this.headerStartYear+10)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+10}
            </CalendarTableCell>
            <CalendarTableCell
              value={this.headerStartYear+11}
              active={this.isActive(this.headerStartYear+11)}
              today={this.isThisYear(this.headerStartYear+11)}
              onClickCell={this.onClickCell}
            >
              {this.headerStartYear+11}
            </CalendarTableCell>
          </tr>
        </tbody>
      </table>
    )
  }
})