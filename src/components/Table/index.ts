import { App, Plugin } from 'vue'
import Table from './Table'
import TableBody from "./TableBody"
import TableCell from "./TableCell"
import TableFooter from "./TableFooter"
import TableHeader from "./TableHeader"
import TableHeaderCell from "./TableHeaderCell"
import TableRow from "./TableRow"

export default {
  install(app: App) {
    app.component('SuiTable', Table)
    app.component('SuiTableBody', TableBody)
    app.component('SuiTableCell', TableCell)
    app.component('SuiTableFooter', TableFooter)
    app.component('SuiTableHeader', TableHeader)
    app.component('SuiTableHeaderCell', TableHeaderCell)
    app.component('SuiTableRow', TableRow)
  }
} as Plugin

export {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow
}