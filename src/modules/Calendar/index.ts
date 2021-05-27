import { App, Plugin } from 'vue'
import Calendar from './Calendar'

export default {
  install: (app: App) => {
    app.component(Calendar.name, Calendar)
  }
} as Plugin

export {
  Calendar
}