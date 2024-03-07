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
    app.component(Item.name, Item)
    app.component(ItemContent.name, ItemContent)
    app.component(ItemDescription.name, ItemDescription)
    app.component(ItemExtra.name, ItemExtra)
    app.component(ItemGroup.name, ItemGroup)
    app.component(ItemHeader.name, ItemHeader)
    app.component(ItemImage.name, ItemImage)
    app.component(ItemMeta.name, ItemMeta)
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