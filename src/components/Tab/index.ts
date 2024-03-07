import { App, Plugin } from 'vue'
import Tab from './Tab'
import TabPanel from './TabPanel'

export default {
  install(app: App) {
    app.component(Tab.name, Tab)
    app.component(TabPanel.name, TabPanel)
  }
} as Plugin

export {
  Tab,
  TabPanel
}