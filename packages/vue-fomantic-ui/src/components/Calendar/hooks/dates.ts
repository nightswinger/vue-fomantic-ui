export function getBeginOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

export function getBeginOfDecadeYear (date: Date) {
  const year = date.getFullYear()
  const decadeYear = year + ((-year + 1) % 10)

  const newDate = new Date()
  newDate.setFullYear(decadeYear, 0, 1)
  newDate.setHours(0, 0, 0, 0)

  return newDate
}

export function getDayOfWeek(date: Date, i: number = 0) {
  const day = date.getDay()
  return (day + i) % 7
}

export function getDaysInMonth(date: Date) {
  return getEndOfMonth(date).getDate()
}

export function getDaysSince (date: Date, n: number) {
  const result = new Date(date.getTime())
  result.setDate(result.getDate() + n)

  return result
}

export function getDaysAgo (date: Date, n: number) {
  return getDaysSince(date, -n)
}

export function getEndOfMonth(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const beginOfNextMonth = new Date(year, month, 1, 0, 0, 0, 0)

  return new Date(beginOfNextMonth.getTime() - 1)
}

export function getMonthsSince (date: Date, n: number) {
  const result = new Date(date.getTime())
  const month = result.getMonth()
  result.setMonth(month + n)

  return result
}

export function getMonthsAgo (date: Date, n: number) {
  return getMonthsSince(date, -n)
}
