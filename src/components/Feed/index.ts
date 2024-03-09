import { App, Plugin } from "vue"
import Feed from "./Feed"
import FeedContent from "./FeedContent"
import FeedDate from "./FeedDate"
import FeedEvent from "./FeedEvent"
import FeedExtra from "./FeedExtra"
import FeedLabel from "./FeedLabel"
import FeedLike from "./FeedLike"
import FeedMeta from "./FeedMeta"
import FeedSummary from "./FeedSummary"
import FeedUser from "./FeedUser"

export default {
  install(app: App) {
    app.component('SuiFeed', Feed)
    app.component('SuiFeedContent', FeedContent)
    app.component('SuiFeedDate', FeedDate)
    app.component('SuiFeedEvent', FeedEvent)
    app.component('SuiFeedExtra', FeedExtra)
    app.component('SuiFeedLabel', FeedLabel)
    app.component('SuiFeedLike', FeedLike)
    app.component('SuiFeedMeta', FeedMeta)
    app.component('SuiFeedSummary', FeedSummary)
    app.component('SuiFeedUser', FeedUser)
  }
} as Plugin

export {
  Feed,
  FeedContent,
  FeedDate,
  FeedEvent,
  FeedExtra,
  FeedLabel,
  FeedLike,
  FeedMeta,
  FeedSummary,
  FeedUser
}