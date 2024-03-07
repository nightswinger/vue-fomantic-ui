import { App, Plugin } from 'vue'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import DropdownMenu from './DropdownMenu'

export default {
  install(app: App) {
    app.component(Dropdown.name, Dropdown)
    app.component(DropdownItem.name, DropdownItem)
    app.component(DropdownMenu.name, DropdownMenu)
  }
} as Plugin

export {
  Dropdown,
  DropdownItem,
  DropdownMenu
}