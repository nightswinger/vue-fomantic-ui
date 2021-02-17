import { App, Plugin } from 'vue'
import Comment from "./Comment"
import CommentAction from './CommentAction'
import CommentActions from "./CommentActions"
import CommentAuthor from "./CommentAuthor"
import CommentAvatar from "./CommentAvatar"
import CommentContent from "./CommentContent"
import CommentGroup from "./CommentGroup"
import CommentMetadata from "./CommentMetadata"
import CommentText from "./CommentText"

export default {
  install(app: App) {
    app.component(Comment.name, Comment)
    app.component(CommentAction.name, CommentAction)
    app.component(CommentActions.name, CommentActions)
    app.component(CommentAuthor.name, CommentAuthor)
    app.component(CommentAvatar.name, CommentAvatar)
    app.component(CommentContent.name, CommentContent)
    app.component(CommentGroup.name, CommentGroup)
    app.component(CommentMetadata.name, CommentMetadata)
    app.component(CommentText.name, CommentText)
  }
} as Plugin

export {
  Comment,
  CommentAction,
  CommentActions,
  CommentAuthor,
  CommentAvatar,
  CommentContent,
  CommentGroup,
  CommentMetadata,
  CommentText
}