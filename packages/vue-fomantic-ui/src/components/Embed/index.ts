import { App, Plugin } from 'vue'
import Embed from './Embed'

export default {
  install(app: App) {
    app.component('SuiEmbed', Embed)
  }
} as Plugin

export {
  Embed
}