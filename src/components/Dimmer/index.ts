import { App, Plugin } from 'vue'
import Dimmer from './Dimmer'
import DimmerDimmable from './DimmerDimmable'

export default {
  install(app: App) {
    app.component(Dimmer.name, Dimmer)
    app.component(DimmerDimmable.name, DimmerDimmable)
  }
} as Plugin

export {
  Dimmer,
  DimmerDimmable
}