import { App, Plugin } from 'vue'
import Modal from './Modal'
import ModalActions from './ModalActions'
import ModalContent from './ModalContent'
import ModalDescription from './ModalDescription'
import ModalHeader from './ModalHeader'

export default {
  install(app: App) {
    app.component('SuiModal', Modal)
    app.component('SuiModalActions', ModalActions)
    app.component('SuiModalContent', ModalContent)
    app.component('SuiModalDescription', ModalDescription)
    app.component('SuiModalHeader', ModalHeader)
  }
} as Plugin
