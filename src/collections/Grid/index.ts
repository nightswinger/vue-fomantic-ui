import { App, Plugin } from 'vue'
import Grid from "./Grid"
import GridColumn from "./GridColumn"
import GridRow from "./GridRow"

export default {
  install(app: App) {
    app.component(Grid.name, Grid)
    app.component(GridColumn.name, GridColumn)
    app.component(GridRow.name, GridRow)
  }
} as Plugin

export {
  Grid,
  GridColumn,
  GridRow
}