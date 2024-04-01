import { App, Plugin } from 'vue'
import Grid from "./Grid"
import GridColumn from "./GridColumn"
import GridRow from "./GridRow"

export default {
  install(app: App) {
    app.component('SuiGrid', Grid)
    app.component('SuiGridColumn', GridColumn)
    app.component('SuiGridRow', GridRow)
  }
} as Plugin

export {
  Grid,
  GridColumn,
  GridRow
}