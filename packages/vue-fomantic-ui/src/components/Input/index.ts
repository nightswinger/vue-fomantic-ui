import { App, Plugin } from 'vue'
import Input from './Input'

export default {
  install(app: App) {
    app.component('SuiInput', Input)
  }
} as Plugin

export { Input }