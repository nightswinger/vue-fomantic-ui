import { defineComponent, h } from "vue"

export default defineComponent({
    name: 'SuiCardMeta',
    render() {
      return h('div', { class: 'meta' }, this.$slots.default?.())
    }
  })