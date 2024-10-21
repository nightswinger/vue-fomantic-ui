import { App, Plugin } from "vue"
import List from "./List"
import ListItem from "./ListItem"
import ListIcon from "./ListIcon"
import ListContent from "./ListContent"
import ListHeader from "./ListHeader"
import ListDescription from "./ListDescription"
import ListList from "./ListList"

export default {
  install(app: App) {
    app.component('SuiList', List)
    app.component('SuiListItem', ListItem)
    app.component('SuiListIcon', ListIcon)
    app.component('SuiListContent', ListContent)
    app.component('SuiListHeader', ListHeader)
    app.component('SuiListDescription', ListDescription)
    app.component('SuiListList', ListList)
  }
} as Plugin

export {
  List,
  ListItem,
  ListIcon,
  ListContent,
  ListHeader,
  ListDescription,
  ListList
}