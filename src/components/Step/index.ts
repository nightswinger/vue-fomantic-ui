import { App, Plugin } from 'vue'
import Step from "./Step"
import StepGroup from "./StepGroup"
import StepContent from "./StepContent"
import StepTitle from "./StepTitle"
import StepDescription from "./StepDescription"

export default {
  install(app: App) {
    app.component(Step.name, Step)
    app.component(StepGroup.name, StepGroup)
    app.component(StepContent.name, StepContent)
    app.component(StepTitle.name, StepTitle)
    app.component(StepDescription.name, StepDescription)
  }
} as Plugin

export {
  Step,
  StepGroup,
  StepContent,
  StepTitle,
  StepDescription
}