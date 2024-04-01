import { App, Plugin } from "vue"
import Statistic from "./Statistic"
import StatisticGroup from "./StatisticGroup"
import StatisticLabel from "./StatisticLabel"
import StatisticValue from "./StatisticValue"

export default {
  install(app: App) {
    app.component('SuiStatistic', Statistic)
    app.component('SuiStatisticGroup', StatisticGroup)
    app.component('SuiStatisticLabel', StatisticLabel)
    app.component('SuiStatisticValue', StatisticValue)
  }
} as Plugin

export {
  Statistic,
  StatisticGroup,
  StatisticLabel,
  StatisticValue
}