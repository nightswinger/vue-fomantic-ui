import { App, Plugin } from 'vue'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import DropdownMenu from './DropdownMenu'

export default {
  install(app: App) {
    app.component('SuiDropdown', Dropdown)
    app.component('SuiDropdownItem', DropdownItem)
    app.component('SuiDropdownMenu', DropdownMenu)
  }
} as Plugin

export {
  Dropdown,
  DropdownItem,
  DropdownMenu
}