import { App, Plugin } from 'vue'
import Rating from './Rating'

export default {
  install(app: App) {
    app.component('SuiRating', Rating)
  }
} as Plugin

export {
  Rating
}