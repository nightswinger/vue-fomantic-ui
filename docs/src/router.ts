import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import GettingStarted from './pages/GettingStarted.vue'

// Elements
import Button from './pages/elements/Button.vue'
import Container from './pages/elements/Container.vue'
import Divider from './pages/elements/Divider.vue'
import Emoji from './pages/elements/Emoji.vue'
import Flag from './pages/elements/Flag.vue'
import Header from './pages/elements/Header.vue'
import Icon from './pages/elements/Icon.vue'
import Image from './pages/elements/Image.vue'
import Input from './pages/elements/Input.vue'
import Label from './pages/elements/Label.vue'
import ListDoc from './pages/ListDoc.vue'
import Loader from './pages/elements/Loader.vue'
import RailDoc from './pages/RailDoc.vue'
import Reveal from './pages/elements/Reveal.vue'
import Segment from './pages/elements/Segment.vue'
import StepDoc from './pages/StepDoc.vue'

// Collections
import Breadcrumb from './pages/collections/Breadcrumb.vue'
import Form from './pages/collections/Form.vue'
import GridDoc from './pages/collections/GridDoc.vue'
import MenuDoc from './pages/collections/MenuDoc.vue'
import MessageDoc from './pages/collections/MessageDoc.vue'
import TableDoc from './pages/collections/TableDoc.vue'

import CardDoc from './pages/views/CardDoc.vue'
import FeedDoc from './pages/views/FeedDoc.vue'
import ItemDoc from './pages/views/ItemDoc.vue'

// Modules
import AccordionDoc from './pages/modules/AccordionDoc.vue'
import CalendarDoc from './pages/modules/CalendarDoc.vue'
import CheckboxDoc from './pages/modules/CheckboxDoc.vue'
import DimmerDoc from './pages/modules/DimmerDoc.vue'
import DropdownDoc from './pages/modules/DropdownDoc.vue'
import EmbedDoc from './pages/modules/EmbedDoc.vue'
import Modal from './pages/modules/Modal.vue'
import PopupDoc from './pages/modules/PopupDoc.vue'
import ProgressDoc from './pages/modules/ProgressDoc.vue'
import RatingDoc from './pages/modules/RatingDoc.vue'
import SidebarDoc from './pages/modules/SidebarDoc.vue'
import SliderDoc from './pages/modules/SliderDoc.vue'
import TabDoc from './pages/modules/TabDoc.vue'
import Toast from './pages/modules/Toast.vue'

const routes: any = [
  {
    path: '/', component: Home,
    children: [
      { path: '/', component: GettingStarted },
      { path: 'elements/button', component: Button },
      { path: 'elements/container', component: Container },
      { path: 'elements/divider', component: Divider },
      { path: 'elements/emoji', component: Emoji },
      { path: 'elements/flag', component: Flag },
      { path: 'elements/header', component: Header },
      { path: 'elements/icon', component: Icon },
      { path: 'elements/image', component: Image },
      { path: 'elements/input', component: Input },
      { path: 'elements/label', component: Label },
      { path: 'elements/list', component: ListDoc },
      { path: 'elements/loader', component: Loader },
      { path: 'elements/rail', component: RailDoc },
      { path: 'elements/reveal', component: Reveal },
      { path: 'elements/segment', component: Segment },
      { path: 'elements/step', component: StepDoc },

      { path: 'collections/breadcrumb', component: Breadcrumb },
      { path: 'collections/form', component: Form },
      { path: 'collections/grid', component: GridDoc },
      { path: 'collections/menu', component: MenuDoc },
      { path: 'collections/message', component: MessageDoc },
      { path: 'collections/table', component: TableDoc },

      { path: 'views/advertisement', component: () => import('./pages/views/Advertisement.vue') },
      { path: 'views/card', component: CardDoc },
      { path: 'views/comment', component: () => import('./pages/views/Comment.vue') },
      { path: 'views/feed', component: FeedDoc },
      { path: 'views/item', component: ItemDoc },
      { path: 'views/statistic', component: () => import('./pages/views/Statistic.vue') },

      { path: 'modules/accordion', component: AccordionDoc },
      { path: 'modules/calendar', component: CalendarDoc },
      { path: 'modules/checkbox', component: CheckboxDoc },
      { path: 'modules/dimmer', component: DimmerDoc },
      { path: 'modules/dropdown', component: DropdownDoc },
      { path: 'modules/embed', component: EmbedDoc },
      { path: 'modules/modal', component: Modal },
      { path: 'modules/popup', component: PopupDoc },
      { path: 'modules/progress', component: ProgressDoc },
      { path: 'modules/rating', component: RatingDoc },
      { path: 'modules/sidebar', component: SidebarDoc },
      { path: 'modules/slider', component: SliderDoc },
      { path: 'modules/tab', component: TabDoc },
      { path: 'modules/toast', component: Toast },
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
