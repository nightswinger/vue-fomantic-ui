import { App, Plugin } from 'vue'
import Rail from './Rail'

export default {
  install(app: App) {
    app.component('SuiRail', Rail)
  }
} as Plugin

export { Rail }