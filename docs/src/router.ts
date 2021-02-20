import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import GettingStarted from './pages/GettingStarted.vue'
import ButtonDoc from './pages/ButtonDoc.vue'
import ContainerDoc from './pages/ContainerDoc.vue'
import DividerDoc from './pages/DividerDoc.vue'
import EmojiDoc from './pages/EmojiDoc.vue'
import FlagDoc from './pages/FlagDoc.vue'
import HeaderDoc from './pages/HeaderDoc.vue'
import IconDoc from './pages/IconDoc.vue'
import ImageDoc from './pages/ImageDoc.vue'
import InputDoc from './pages/InputDoc.vue'
import LabelDoc from './pages/LabelDoc.vue'
import ListDoc from './pages/ListDoc.vue'
import LoaderDoc from './pages/LoaderDoc.vue'

const routes: any = [
  {
    path: '/', component: Home,
    children: [
      { path: '/', component: GettingStarted },
      { path: 'elements/button', component: ButtonDoc },
      { path: 'elements/container', component: ContainerDoc },
      { path: 'elements/divider', component: DividerDoc },
      { path: 'elements/emoji', component: EmojiDoc },
      { path: 'elements/flag', component: FlagDoc },
      { path: 'elements/header', component: HeaderDoc },
      { path: 'elements/icon', component: IconDoc },
      { path: 'elements/image', component: ImageDoc },
      { path: 'elements/input', component: InputDoc },
      { path: 'elements/label', component: LabelDoc },
      { path: 'elements/list', component: ListDoc },
      { path: 'elements/loader', component: LoaderDoc }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router