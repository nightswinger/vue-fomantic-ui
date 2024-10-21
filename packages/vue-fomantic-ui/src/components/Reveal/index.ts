import { App, Plugin } from 'vue'
import Reveal from "./Reveal"
import RevealContent from "./RevealContent"

export default {
  install(app: App) {
    app.component('SuiReveal', Reveal)
    app.component('SuiRevealContent', RevealContent)
  }
} as Plugin

export { Reveal, RevealContent }