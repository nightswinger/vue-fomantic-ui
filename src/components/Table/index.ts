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
    app.component(Table.name, Table)
    app.component(TableBody.name, TableBody)
    app.component(TableCell.name, TableCell)
    app.component(TableFooter.name, TableFooter)
    app.component(TableHeader.name, TableHeader)
    app.component(TableHeaderCell.name, TableHeaderCell)
    app.component(TableRow.name, TableRow)
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