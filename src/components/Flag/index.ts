import { App, Plugin } from "vue"
import Flag from "./Flag"

export default {
  install(app: App) {
    app.component('SuiFlag', Flag)
  }
} as Plugin;

export { Flag }
