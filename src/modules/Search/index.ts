import { App, Plugin } from 'vue'
import Search from './Search'

export default {
  install(app: App) {
    app.component(Search.name, Search)
  }
} as Plugin

export { Search }