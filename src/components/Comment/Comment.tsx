import { defineComponent } from "vue";

import CommentAvatar from "./CommentAvatar";

export default defineComponent({
  name: 'SuiComment',
  render() {
    return (
      <div class="comment">
        {this.$slots.avatar && (
           <CommentAvatar as="a">
              {this.$slots.avatar()}
           </CommentAvatar>
        )}
        <div class="content">
          {this.$slots.author && (
            <a class="author">
              {this.$slots.author()}
            </a>
          )}
          {this.$slots.metadata && (
            <div class="metadata">
              {this.$slots.metadata()}
            </div>
          )}
          {this.$slots.text && (
            <div class="text">
              {this.$slots.text()}
            </div>
          )}
          {this.$slots.actions && (
            <div class="actions">
              {this.$slots.actions()}
            </div>
          )}
        </div>
        {this.$slots.default && this.$slots.default()}
      </div>
    )
  }
})
