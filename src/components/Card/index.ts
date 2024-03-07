import { App, Plugin } from 'vue'
import Card from "./Card"
import CardContent from "./CardContent"
import CardDescription from "./CardDescription"
import CardGroup from "./CardGroup"
import CardHeader from "./CardHeader"
import CardMeta from "./CardMeta"

export default {
  install(app: App) {
    app.component(Card.name, Card)
    app.component(CardContent.name, CardContent)
    app.component(CardDescription.name, CardDescription)
    app.component(CardGroup.name, CardGroup)
    app.component(CardHeader.name, CardHeader)
    app.component(CardMeta.name, CardMeta)
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