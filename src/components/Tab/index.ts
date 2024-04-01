import { App, Plugin } from 'vue'
import Tab from './Tab'
import TabPanel from './TabPanel'

export default {
  install(app: App) {
    app.component('SuiTab', Tab)
    app.component('SuiTabPanel', TabPanel)
  }
} as Plugin

export {
  Tab,
  TabPanel
}