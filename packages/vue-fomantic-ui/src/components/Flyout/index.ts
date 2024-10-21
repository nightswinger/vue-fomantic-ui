import { App, Plugin } from 'vue'
import Flyout from './Flyout'

export default {
  install(app: App) {
    app.component('SuiFlyout', Flyout)
  }
} as Plugin

export { Flyout }
