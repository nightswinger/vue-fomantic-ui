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
import RailDoc from './pages/RailDoc.vue'
import RevealDoc from './pages/RevealDoc.vue'
import SegmentDoc from './pages/SegmentDoc.vue'
import StepDoc from './pages/StepDoc.vue'

import Breadcrumb from './pages/collections/BreadcrumbDoc.vue'
import FormDoc from './pages/collections/FormDoc.vue'
import GridDoc from './pages/collections/GridDoc.vue'
import MenuDoc from './pages/collections/MenuDoc.vue'

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
      { path: 'elements/loader', component: LoaderDoc },
      { path: 'elements/rail', component: RailDoc },
      { path: 'elements/reveal', component: RevealDoc },
      { path: 'elements/segment', component: SegmentDoc },
      { path: 'elements/step', component: StepDoc },

      { path: 'collections/breadcrumb', component: Breadcrumb },
      { path: 'collections/form', component: FormDoc },
      { path: 'collections/grid', component: GridDoc },
      { path: 'collections/menu', component: MenuDoc }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/vue-fomantic-ui/'),
  routes,
})

export default router