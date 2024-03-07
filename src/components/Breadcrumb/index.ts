import { App, Plugin } from 'vue'
import Breadcrumb from "./Breadcrumb"
import BreadcrumbDivider from "./BreadcrumbDivider"
import BreadcrumbSection from './BreadcrumbSection'

export default {
  install(app: App) {
    app.component(Breadcrumb.name, Breadcrumb)
    app.component(BreadcrumbDivider.name, BreadcrumbDivider)
    app.component(BreadcrumbSection.name, BreadcrumbSection)
  }
} as Plugin

export {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbSection
}