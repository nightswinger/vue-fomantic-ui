import clsx from "clsx";
import { computed, defineComponent, reactive, watch } from "vue";
import clickOutside from "../../directives/click-outside";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiSidebar',
  directives: { clickoutside: clickOutside },
  emits: ['update:visible', 'show', 'hide'],
  props: {
    animation: { type: String, default: 'overlay' },
    dimmed: Boolean,
    direction: { type: String, default: 'left' },
    icon: [Boolean, String],
    inverted: Boolean,
    visible: Boolean
  },
  setup(props, { emit }) {
    const state = reactive({
      animating: false
    })

    const computedClass = computed(() => {
      const isVertical = props.direction === 'right' || props.direction === 'left'

      return clsx(
        'ui',
        'sidebar',
        props.direction,
        props.animation,
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.visible, 'visible'),
        computeKeyOnly(state.animating, 'animating'),
        computeKeyOnly(isVertical, 'vertical'),
        computeKeyOrKeyValue(props.icon, 'icon'),
        'menu'
      )
    })

    watch(() => props.visible, () => {
      state.animating = true
      setTimeout(() => state.animating = false, 500)

      if (props.dimmed) {
        let pusher = document.querySelector('.pusher')
        pusher && pusher.classList.toggle('dimmed')
      }
    })

    const onClickPusher = (event: any) => {
      let pusher = event.path.find((el: HTMLElement) => {
        return el.classList && el.classList.contains('pusher')
      })
      if (pusher) {
        props.visible && emit('update:visible', false)
      }
    }

    return {
      computedClass,
      onClickPusher
    }
  },
  render() {
    return (
      <div
        class={this.computedClass}
        v-clickoutside={this.onClickPusher}
      >
        {this.$slots.default?.()}
      </div>
    )
  }
})