import { App, Plugin } from 'vue'
import Accordion from './Accordion'
import AccordionAccordion from './AccordionAccordion'
import AccordionContent from './AccordionContent'
import AccordionTab from './AccordionTab'
import AccordionTitle from './AccordionTitle'

export default {
  install(app: App) {
    app.component(Accordion.name, Accordion)
    app.component(AccordionAccordion.name, AccordionAccordion)
    app.component(AccordionContent.name, AccordionContent)
    app.component(AccordionTab.name, AccordionTab)
    app.component(AccordionTitle.name, AccordionTitle)
  }
} as Plugin

export {
  Accordion,
  AccordionAccordion,
  AccordionContent,
  AccordionTab,
  AccordionTitle
}