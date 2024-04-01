import { App, Plugin } from "vue"
import Slider from "./Slider"

export default {
  install(app: App) {
    app.component('SuiSlider', Slider)
  }
} as Plugin

export {
  Slider
}