import { App, Plugin } from 'vue'
import Progress from './Progress'

export default {
  install(app: App) {
    app.component(Progress.name, Progress)
  }
} as Plugin

export { Progress }