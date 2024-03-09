import { App, Plugin } from 'vue'
import Advertisement from "./Advertisement"

export default {
  install(app: App) {
    app.component('SuiAdvertisement', Advertisement)
  }
} as Plugin

export { Advertisement }