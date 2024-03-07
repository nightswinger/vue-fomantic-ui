import { App, Plugin } from 'vue'
import Message from "./Message"
import MessageContent from "./MessageContent"
import MessageHeader from "./MessageHeader"
import MessageItem from "./MessageItem"
import MessageList from "./MessageList"

export default {
  install(app: App) {
    app.component(Message.name, Message)
    app.component(MessageContent.name, MessageContent)
    app.component(MessageHeader.name, MessageHeader)
    app.component(MessageItem.name, MessageItem)
    app.component(MessageList.name, MessageList)
  }
} as Plugin

export {
  Message,
  MessageContent,
  MessageHeader,
  MessageItem,
  MessageList
}