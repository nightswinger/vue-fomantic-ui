import { App, Plugin } from 'vue'
import Breadcrumb from "./Breadcrumb"
import BreadcrumbDivider from "./BreadcrumbDivider"
import BreadcrumbSection from './BreadcrumbSection'

export default {
  install(app: App) {
    app.component("SuiBreadcrumb", Breadcrumb)
    app.component("SuiBreadcrumbDivider", BreadcrumbDivider)
    app.component("SuiBreadcrumbSection", BreadcrumbSection)
  }
} as Plugin

export {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbSection
}