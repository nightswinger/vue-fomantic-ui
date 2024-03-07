import clsx from "clsx";
import { computed, defineComponent, h, ref } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiEmbed',
  props: {
    active: Boolean,
    aspectRatio: Boolean,
    autoplay: Boolean,
    id: String,
    placeholder: String,
    source: String,
    url: String
  },
  setup(props) {
    const active = ref(props.active)
    const clickHandler = () => {
      active.value = !active.value
    }

    const getSrc = () => {
      if (props.source === 'youtube') {
        return [
          `//www.youtube.com/embed/${props.id}`,
          '?autohide=true',
          `&amp;autoplay=${props.autoplay}`,
          '&amp;jsapi=false'
        ].join('')
      }

      return props.url
    }

    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.aspectRatio,
        computeKeyOnly(active.value, 'active'),
        'embed'
      )
    })

    return {
      active,
      getSrc,
      clickHandler,
      computedClass
    }
  },
  render() {
    let children = [
      h('i', { class: 'video play icon' }),
      h('img', {
        class: 'placeholder',
        src: this.placeholder
      }),
    ]

    if (this.active) {
      children.push(
        h(
          'div',
          { class: 'embed' },
          h('iframe', { src: this.getSrc() })
        )
      )
    }

    return h(
      'div',
      {
        class: this.computedClass,
        onClick: this.clickHandler
      },
      children
    )
  }
})