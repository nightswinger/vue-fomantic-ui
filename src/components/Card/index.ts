import { App, Plugin } from 'vue'
import Card from "./Card"
import CardContent from "./CardContent"
import CardDescription from "./CardDescription"
import CardGroup from "./CardGroup"
import CardHeader from "./CardHeader"
import CardMeta from "./CardMeta"

export default {
  install(app: App) {
    app.component('SuiCard', Card)
    app.component('SuiCardContent', CardContent)
    app.component('SuiCardDescription', CardDescription)
    app.component('SuiCardGroup', CardGroup)
    app.component('SuiCardHeader', CardHeader)
    app.component('SuiCardMeta', CardMeta)
  }
} as Plugin

export {
  Card,
  CardContent,
  CardDescription,
  CardGroup,
  CardHeader,
  CardMeta
}