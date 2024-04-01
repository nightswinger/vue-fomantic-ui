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
    app.component('SuiComment', Comment)
    app.component('SuiCommentAction', CommentAction)
    app.component('SuiCommentActions', CommentActions)
    app.component('SuiCommentAuthor', CommentAuthor)
    app.component('SuiCommentAvatar', CommentAvatar)
    app.component('SuiCommentContent', CommentContent)
    app.component('SuiCommentGroup', CommentGroup)
    app.component('SuiCommentMetadata', CommentMetadata)
    app.component('SuiCommentText', CommentText)
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