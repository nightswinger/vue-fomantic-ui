import clsx from "clsx";
import { computed, defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiDropdownItem',
  props: {
    text: String,
    description: String,
    icon: String
  },
  setup() {
    const computedClass = computed(() => {
      return clsx('item')
    })

    return {
      computedClass
    }
  },
  render() {
    let children = []

    if (this.icon) {
      children.push(
        h('i', { class: `${this.icon} icon`})
      )
    }

    if (this.description) {
      children.push(
        h('span', { class: 'description' }, this.description)
      )
    }

    children.push(this.text)

    return h(
      'div',
      { class: this.computedClass },
      children
    )
  }
})