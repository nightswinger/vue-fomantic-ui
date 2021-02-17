import { App, Plugin } from 'vue'
import Menu from "./Menu"
import MenuHeader from './MenuHeader'
import MenuItem from "./MenuItem"
import MenuMenu from "./MenuMenu"

export default {
  install(app :App) {
    app.component(Menu.name, Menu)
    app.component(MenuHeader.name, MenuHeader)
    app.component(MenuItem.name, MenuItem)
    app.component(MenuMenu.name, MenuMenu)
  }
} as Plugin

export {
  Menu,
  MenuHeader,
  MenuItem,
  MenuMenu
}