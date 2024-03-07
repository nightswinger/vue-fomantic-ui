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
    app.component(Feed.name, Feed)
    app.component(FeedContent.name, FeedContent)
    app.component(FeedDate.name, FeedDate)
    app.component(FeedEvent.name, FeedEvent)
    app.component(FeedExtra.name, FeedExtra)
    app.component(FeedLabel.name, FeedLabel)
    app.component(FeedLike.name, FeedLike)
    app.component(FeedMeta.name, FeedMeta)
    app.component(FeedSummary.name, FeedSummary)
    app.component(FeedUser.name, FeedUser)
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