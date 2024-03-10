import { App, Plugin } from 'vue'
import Message from "./Message"
import MessageContent from "./MessageContent"
import MessageHeader from "./MessageHeader"
import MessageItem from "./MessageItem"
import MessageList from "./MessageList"

export default {
  install(app: App) {
    app.component('SuiMessage', Message)
    app.component('SuiMessageContent', MessageContent)
    app.component('SuiMessageHeader', MessageHeader)
    app.component('SuiMessageItem', MessageItem)
    app.component('SuiMessageList', MessageList)
  }
} as Plugin

export {
  Message,
  MessageContent,
  MessageHeader,
  MessageItem,
  MessageList
}