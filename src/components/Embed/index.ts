import { App, Plugin } from 'vue'
import Embed from './Embed'

export default {
  install(app: App) {
    app.component(Embed.name, Embed)
  }
} as Plugin

export {
  Embed
}