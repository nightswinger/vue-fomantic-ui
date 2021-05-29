import { App, Plugin } from 'vue'
import Sidebar from './Sidebar'

export default {
  install: (app: App) => {
    app.component(Sidebar.name, Sidebar)
  }
} as Plugin

export {
  Sidebar
}
