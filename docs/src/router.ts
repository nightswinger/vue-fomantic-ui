import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import GettingStarted from './pages/GettingStarted.vue'
import ButtonDoc from './pages/ButtonDoc.vue'
import ContainerDoc from './pages/ContainerDoc.vue'
import DividerDoc from './pages/DividerDoc.vue'
import EmojiDoc from './pages/EmojiDoc.vue'
import FlagDoc from './pages/FlagDoc.vue'
import HeaderDoc from './pages/HeaderDoc.vue'

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
      { path: 'elements/Header', component: HeaderDoc }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router