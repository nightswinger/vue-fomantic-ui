import { ObjectDirective } from "vue"

const mounted = (el: any, binding: any, vnode: any) => {
  el.clickOutside = (event: any) => {
    if (!(el === event.target || el.contains(event.target))) {
      binding.value(event, el)
    }
  }
  document.body.addEventListener('click', el.clickOutside)
}

const unmounted = (el: any, binding: any, vnode: any) => {
  document.body.removeEventListener('click', el.clickOutside)
}

export default {
  mounted,
  unmounted
} as ObjectDirective