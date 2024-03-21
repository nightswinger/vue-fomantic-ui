import { defineComponent } from "vue"

export default defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class="item">
        {slots.image && <div class="image">{slots.image()}</div>}
        {
          (slots.header || slots.metadata || slots.description || slots.extra) &&
          <div class="content">
            {slots.header && <div class="header">{slots.header()}</div>}
            {slots.metadata && <div class="meta">{slots.metadata()}</div>}
            {slots.description && <div class="description">{slots.description()}</div>}
            {slots.extra && <div class="extra">{slots.extra()}</div>}
          </div>
        }
        {slots.default?.()}
      </div>
    )
  }
})
