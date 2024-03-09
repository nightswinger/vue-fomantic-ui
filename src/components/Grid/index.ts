import { App, Plugin } from 'vue'
import Grid from "./Grid"
import GridColumn from "./GridColumn"
import GridRow from "./GridRow"

export default {
  install(app: App) {
    app.component('Grid', Grid)
    app.component('GridColumn', GridColumn)
    app.component('GridRow', GridRow)
  }
} as Plugin

export {
  Grid,
  GridColumn,
  GridRow
}