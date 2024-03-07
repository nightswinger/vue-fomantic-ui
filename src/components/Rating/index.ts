import { App, Plugin } from 'vue'
import Rating from './Rating'

export default {
  install(app: App) {
    app.component(Rating.name, Rating)
  }
} as Plugin

export {
  Rating
}