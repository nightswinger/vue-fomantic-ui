import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import GettingStarted from './pages/GettingStarted.vue'
import Button from './pages/elements/Button.vue'
import Container from './pages/elements/Container.vue'
import Divider from './pages/elements/Divider.vue'
import Emoji from './pages/elements/Emoji.vue'
import Flag from './pages/elements/Flag.vue'
import Header from './pages/elements/Header.vue'
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
import MessageDoc from './pages/collections/MessageDoc.vue'
import TableDoc from './pages/collections/TableDoc.vue'

import AdvertisementDoc from './pages/views/AdvertisementDoc.vue'
import CardDoc from './pages/views/CardDoc.vue'
import CommentDoc from './pages/views/CommentDoc.vue'
import FeedDoc from './pages/views/FeedDoc.vue'
import ItemDoc from './pages/views/ItemDoc.vue'
import StatisticDoc from './pages/views/StatisticDoc.vue'

import AccordionDoc from './pages/modules/AccordionDoc.vue'
import CalendarDoc from './pages/modules/CalendarDoc.vue'
import CheckboxDoc from './pages/modules/CheckboxDoc.vue'
import DimmerDoc from './pages/modules/DimmerDoc.vue'
import DropdownDoc from './pages/modules/DropdownDoc.vue'
import EmbedDoc from './pages/modules/EmbedDoc.vue'
import ModalDoc from './pages/modules/ModalDoc.vue'
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
      { path: 'collections/menu', component: MenuDoc },
      { path: 'collections/message', component: MessageDoc },
      { path: 'collections/table', component: TableDoc },

      { path: 'views/advertisement', component: AdvertisementDoc },
      { path: 'views/card', component: CardDoc },
      { path: 'views/comment', component: CommentDoc },
      { path: 'views/feed', component: FeedDoc },
      { path: 'views/item', component: ItemDoc },
      { path: 'views/statistic', component: StatisticDoc },

      { path: 'modules/accordion', component: AccordionDoc },
      { path: 'modules/calendar', component: CalendarDoc },
      { path: 'modules/checkbox', component: CheckboxDoc },
      { path: 'modules/dimmer', component: DimmerDoc },
      { path: 'modules/dropdown', component: DropdownDoc },
      { path: 'modules/embed', component: EmbedDoc },
      { path: 'modules/modal', component: ModalDoc },
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
})

export default router