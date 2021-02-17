import { App, Plugin } from 'vue'
import Modal from './Modal'
import ModalActions from './ModalActions'
import ModalContent from './ModalContent'
import ModalDescription from './ModalDescription'
import ModalHeader from './ModalHeader'

export default {
  install(app: App) {
    app.component(Modal.name, Modal)
    app.component(ModalActions.name, ModalActions)
    app.component(ModalContent.name, ModalContent)
    app.component(ModalDescription.name, ModalDescription)
    app.component(ModalHeader.name, ModalHeader)
  }
} as Plugin
