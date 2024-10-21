import { App, Plugin } from "vue"
import Checkbox from "./Checkbox"

export default {
  install(app: App) {
    app.component('SuiCheckbox', Checkbox)
  }
} as Plugin

export { Checkbox }