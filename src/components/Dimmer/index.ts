import { App, Plugin } from 'vue'
import Dimmer from './Dimmer'
import DimmerDimmable from './DimmerDimmable'

export default {
  install(app: App) {
    app.component('SuiDimmer', Dimmer)
    app.component('SuiDimmerDimmable', DimmerDimmable)
  }
} as Plugin

export {
  Dimmer,
  DimmerDimmable
}