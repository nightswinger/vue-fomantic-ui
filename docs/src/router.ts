import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import GettingStarted from './pages/GettingStarted.vue'

// Elements
import RailDoc from './pages/RailDoc.vue'

// Collections
import GridDoc from './pages/collections/GridDoc.vue'

// Modules
import CalendarDoc from './pages/modules/CalendarDoc.vue'
import CheckboxDoc from './pages/modules/CheckboxDoc.vue'
import DimmerDoc from './pages/modules/DimmerDoc.vue'
import DropdownDoc from './pages/modules/DropdownDoc.vue'
import EmbedDoc from './pages/modules/EmbedDoc.vue'
import PopupDoc from './pages/modules/PopupDoc.vue'
import RatingDoc from './pages/modules/RatingDoc.vue'
import SidebarDoc from './pages/modules/SidebarDoc.vue'
import SliderDoc from './pages/modules/SliderDoc.vue'
import TabDoc from './pages/modules/TabDoc.vue'

const routes: any = [
  {
    path: '/', component: Home,
    children: [
      { path: '/', component: GettingStarted },
      { path: 'elements/button', component: () => import('./pages/elements/Button.vue') },
      { path: 'elements/container', component: () => import('./pages/elements/Container.vue') },
      { path: 'elements/divider', component: () => import('./pages/elements/Divider.vue') },
      { path: 'elements/emoji', component: () => import('./pages/elements/Emoji.vue') },
      { path: 'elements/flag', component: () => import('./pages/elements/Flag.vue') },
      { path: 'elements/header', component: () => import('./pages/elements/Header.vue') },
      { path: 'elements/icon', component: () => import('./pages/elements/Icon.vue') },
      { path: 'elements/image', component: () => import('./pages/elements/Image.vue') },
      { path: 'elements/input', component: () => import('./pages/elements/Input.vue') },
      { path: 'elements/label', component: () => import('./pages/elements/Label.vue') },
      { path: 'elements/list', component: () => import('./pages/elements/List.vue') },
      { path: 'elements/loader', component: () => import('./pages/elements/Loader.vue') },
      { path: 'elements/rail', component: RailDoc },
      { path: 'elements/reveal', component: () => import('./pages/elements/Reveal.vue') },
      { path: 'elements/segment', component: () => import('./pages/elements/Segment.vue') },
      { path: 'elements/step', component: () => import('./pages/elements/Step.vue') },

      { path: 'collections/breadcrumb', component: () => import('./pages/collections/Breadcrumb.vue') },
      { path: 'collections/form', component: () => import('./pages/collections/Form.vue') },
      { path: 'collections/grid', component: GridDoc },
      { path: 'collections/menu', component: () => import('./pages/collections/Menu.vue') },
      { path: 'collections/message', component: () => import('./pages/collections/Message.vue') },
      { path: 'collections/table', component: () => import('./pages/collections/Table.vue') },

      { path: 'views/advertisement', component: () => import('./pages/views/Advertisement.vue') },
      { path: 'views/card', component: () => import('./pages/views/Card.vue') },
      { path: 'views/comment', component: () => import('./pages/views/Comment.vue') },
      { path: 'views/feed', component: () => import('./pages/views/Feed.vue') },
      { path: 'views/item', component: () => import('./pages/views/Item.vue') },
      { path: 'views/statistic', component: () => import('./pages/views/Statistic.vue') },

      { path: 'modules/accordion', component: () => import('./pages/modules/Accordion.vue') },
      { path: 'modules/calendar', component: CalendarDoc },
      { path: 'modules/checkbox', component: CheckboxDoc },
      { path: 'modules/dimmer', component: DimmerDoc },
      { path: 'modules/dropdown', component: DropdownDoc },
      { path: 'modules/embed', component: EmbedDoc },
      { path: 'modules/modal', component: () => import('./pages/modules/Modal.vue') },
      { path: 'modules/popup', component: PopupDoc },
      { path: 'modules/progress', component: () => import('./pages/modules/Progress.vue') },
      { path: 'modules/rating', component: RatingDoc },
      { path: 'modules/sidebar', component: SidebarDoc },
      { path: 'modules/slider', component: SliderDoc },
      { path: 'modules/tab', component: TabDoc },
      { path: 'modules/toast', component: () => import('./pages/modules/Toast.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/vue-fomantic-ui/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return

    document.querySelector('.article')?.scrollTo(0, 0)
  },
})

export default router
