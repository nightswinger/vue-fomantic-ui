import { DirectiveBinding } from "vue"
import Prism from "prismjs"

export const vCodeHighlight = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const modifiers = binding.modifiers
    const value = binding.value

    if (modifiers.script || value === 'script') el.className = 'language-javascript'
    else el.className = 'language-markup'

    Prism.highlightElement(el.children[0])
    el.children[0].parentElement?.setAttribute('tabindex', '-1')
  }
}
