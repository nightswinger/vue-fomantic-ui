import { App, Plugin } from 'vue'
import Popup from './Popup'

export default {
  install(app: App) {
    app.component('SuiPopup', Popup)
  }
} as Plugin

export { Popup }