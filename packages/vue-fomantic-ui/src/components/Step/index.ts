import { App, Plugin } from 'vue'
import Step from "./Step"
import StepGroup from "./StepGroup"
import StepContent from "./StepContent"
import StepTitle from "./StepTitle"
import StepDescription from "./StepDescription"

export default {
  install(app: App) {
    app.component('SuiStep', Step)
    app.component('SuiStepGroup', StepGroup)
    app.component('SuiStepContent', StepContent)
    app.component('SuiStepTitle', StepTitle)
    app.component('SuiStepDescription', StepDescription)
  }
} as Plugin

export {
  Step,
  StepGroup,
  StepContent,
  StepTitle,
  StepDescription
}