import { App, Plugin } from 'vue'
import Progress from './Progress'

export default {
  install(app: App) {
    app.component('SuiProgress', Progress)
  }
} as Plugin

export { Progress }