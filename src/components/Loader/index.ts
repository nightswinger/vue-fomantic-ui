import { App, Plugin } from 'vue'
import Loader from "./Loader"

export default {
  install(app: App) {
    app.component(Loader.name, Loader)
  }
} as Plugin

export { Loader }