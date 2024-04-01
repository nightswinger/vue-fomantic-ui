import { App, Plugin } from 'vue'
import Item from './Item'
import ItemContent from './ItemContent'
import ItemDescription from './ItemDescription'
import ItemExtra from './ItemExtra'
import ItemGroup from './ItemGroup'
import ItemHeader from './ItemHeader'
import ItemImage from './ItemImage'
import ItemMeta from './ItemMeta'

export default {
  install(app: App) {
    app.component('SuiItem', Item)
    app.component('SuiItemContent', ItemContent)
    app.component('SuiItemDescription', ItemDescription)
    app.component('SuiItemExtra', ItemExtra)
    app.component('SuiItemGroup', ItemGroup)
    app.component('SuiItemHeader', ItemHeader)
    app.component('SuiItemImage', ItemImage)
    app.component('SuiItemMeta', ItemMeta)
  }
} as Plugin

export {
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemImage,
  ItemMeta
}