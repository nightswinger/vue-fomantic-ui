import { App, Plugin } from "vue"
import Statistic from "./Statistic"
import StatisticGroup from "./StatisticGroup"
import StatisticLabel from "./StatisticLabel"
import StatisticValue from "./StatisticValue"

export default {
  install(app: App) {
    app.component(Statistic.name, Statistic)
    app.component(StatisticGroup.name, StatisticGroup)
    app.component(StatisticLabel.name, StatisticLabel)
    app.component(StatisticValue.name, StatisticValue)
  }
} as Plugin

export {
  Statistic,
  StatisticGroup,
  StatisticLabel,
  StatisticValue
}