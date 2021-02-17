import { App, Plugin } from 'vue'
import Reveal from "./Reveal"
import RevealContent from "./RevealContent"

export default {
  install(app: App) {
    app.component(Reveal.name, Reveal)
    app.component(RevealContent.name, RevealContent)
  }
} as Plugin

export { Reveal, RevealContent }