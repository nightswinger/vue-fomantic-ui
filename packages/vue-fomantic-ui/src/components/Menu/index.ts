import { App, Plugin } from 'vue'
import Menu from "./Menu"
import MenuHeader from './MenuHeader'
import MenuItem from "./MenuItem"
import MenuMenu from "./MenuMenu"

export default {
  install(app :App) {
    app.component('SuiMenu', Menu)
    app.component('SuiMenuHeader', MenuHeader)
    app.component('SuiMenuItem', MenuItem)
    app.component('SuiMenuMenu', MenuMenu)
  }
} as Plugin

export {
  Menu,
  MenuHeader,
  MenuItem,
  MenuMenu
}