export default class DomHandler {
  static getWindowScrollTop() {
    let { documentElement } = document
    return (window.pageYOffset || documentElement.scrollTop) - (documentElement.clientTop || 0)
  }

  static getWindowScrollLeft() {
    let { documentElement } = document
    return (window.pageXOffset || documentElement.scrollLeft) - (documentElement.clientLeft || 0)
  }

  static hasClass(element: HTMLElement, selector: string) {
     return element.classList.contains(selector)
  }
}
