import { App, Plugin } from "vue"
import List from "./List"
import ListItem from "./ListItem"
import ListIcon from "./ListIcon"
import ListContent from "./ListContent"
import ListHeader from "./ListHeader"
import ListDescription from "./ListDescription"

export default {
  install(app: App) {
    app.component(List.name, List)
    app.component(ListItem.name, ListItem)
    app.component(ListIcon.name, ListIcon)
    app.component(ListContent.name, ListContent)
    app.component(ListHeader.name, ListHeader)
    app.component(ListDescription.name, ListDescription)
  }
} as Plugin

export {
  List,
  ListItem,
  ListIcon,
  ListContent,
  ListHeader,
  ListDescription
}