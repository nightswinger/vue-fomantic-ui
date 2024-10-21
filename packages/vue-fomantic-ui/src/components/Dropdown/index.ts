import { App, Plugin } from 'vue'
import Dropdown from './Dropdown'

export default {
  install(app: App) {
    app.component('SuiDropdown', Dropdown)
  }
} as Plugin

export { Dropdown }
