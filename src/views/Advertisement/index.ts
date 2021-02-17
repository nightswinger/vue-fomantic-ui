import { App, Plugin } from 'vue'
import Advertisement from "./Advertisement"

export default {
  install(app: App) {
    app.component(Advertisement.name, Advertisement)
  }
} as Plugin

export { Advertisement }