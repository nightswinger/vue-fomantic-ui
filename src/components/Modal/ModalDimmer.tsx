import { computed, defineComponent, watch } from "vue";
import clsx from "clsx";

import { computeKeyOnly } from "../../utils/classNameHelper";

import { useModalAnimation } from "./hooks/useModalAnimation";

export default defineComponent({
  props: {
    blurring: Boolean,
    inverted: Boolean,
    modelValue: Boolean,
  },
  setup (props) {
    const {
      animationClasses,
      isClosed,
      onAnimationEnd,
    } = useModalAnimation(props, 'fade');

    const className = computed(() => {
      return clsx(
        'ui',
        'page modals dimmer transition',
        computeKeyOnly(props.inverted, 'inverted'),
        animationClasses.value,
      );
    });

    const style = computed(() => {
      return {
        display: isClosed.value ? 'none !important' : 'flex !important',
        animationDuration: '500ms'
      }
    });

    const bodyClass = computed(() => {
      return clsx(
        'dimmable',
        'dimmed',
        computeKeyOnly(props.blurring, 'blurring'),
      );
    });

    watch(() => props.modelValue, (value) => {
      if (value) {
        document.body.classList.add(...bodyClass.value.split(' '));
        return;
      }
      document.body.classList.remove(...bodyClass.value.split(' '));
    });

    return {
      className,
      style,
      onAnimationEnd,
    }
  },
  render () {
    return (
      <div
        class={this.className}
        style={this.style}
        onAnimationend={this.onAnimationEnd}
      >
        {this.$slots.default?.()}
      </div>
    )
  }
});
