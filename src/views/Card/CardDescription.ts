import { defineComponent, h } from "vue"

export default defineComponent({
    name: 'SuiCardDescription',
    render() {
      return h('div', { class: 'description' }, this.$slots.default?.())
    }
  })