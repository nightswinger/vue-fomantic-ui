import { App, Plugin } from 'vue'
import Calendar from './Calendar'

export default {
  install: (app: App) => {
    app.component('SuiCalendar', Calendar)
  }
} as Plugin

export {
  Calendar
}