import { App, Plugin } from 'vue'
import Search from './Search'

export default {
  install(app: App) {
    app.component('SuiSearch', Search)
  }
} as Plugin

export { Search }