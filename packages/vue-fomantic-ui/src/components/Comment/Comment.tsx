import { computed, defineComponent } from "vue"
import clsx from "clsx"

import CommentAvatar from "./CommentAvatar"

export default defineComponent({
  props: {
    disabled: Boolean,
  },
  setup(props, { slots }) {
    const classes = computed(() => clsx(
      props.disabled && 'disabled',
      'comment',
    ))

    return () => (
      <div class={classes.value}>
        {slots.avatar && (
           <CommentAvatar as="a">
              {slots.avatar()}
           </CommentAvatar>
        )}
        <div class="content">
          {slots.author && (
            <a class="author">
              {slots.author()}
            </a>
          )}
          {slots.metadata && (
            <div class="metadata">
              {slots.metadata()}
            </div>
          )}
          {slots.text && (
            <div class="text">
              {slots.text()}
            </div>
          )}
          {slots.actions && (
            <div class="actions">
              {slots.actions()}
            </div>
          )}
        </div>
        {slots.default && slots.default()}
      </div>
    )
  },
})
