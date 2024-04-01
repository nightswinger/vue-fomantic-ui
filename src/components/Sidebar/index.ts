import { App, Plugin } from 'vue'
import Sidebar from './Sidebar'

export default {
  install: (app: App) => {
    app.component('SuiSidebar', Sidebar)
  }
} as Plugin

export {
  Sidebar
}
