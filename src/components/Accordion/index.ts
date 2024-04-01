import { App, Plugin } from 'vue'
import Accordion from './Accordion'
import AccordionAccordion from './AccordionAccordion'
import AccordionContent from './AccordionContent'
import AccordionTab from './AccordionTab'
import AccordionTitle from './AccordionTitle'

export default {
  install(app: App) {
    app.component('SuiAccordion', Accordion)
    app.component('SuiAccordionAccordion', AccordionAccordion)
    app.component('SuiAccordionContent', AccordionContent)
    app.component('SuiAccordionTab', AccordionTab)
    app.component('SuiAccordionTitle', AccordionTitle)
  }
} as Plugin

export {
  Accordion,
  AccordionAccordion,
  AccordionContent,
  AccordionTab,
  AccordionTitle
}