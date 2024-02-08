import { computed, defineComponent } from "vue";
import clsx from "clsx";

import { useModalAnimation } from "./hooks/useModalAnimation";

export default defineComponent({
  name: 'SuiModalDemmer',
  props: {
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
        animationClasses.value,
      );
    });

    const style = computed(() => {
      return {
        display: isClosed.value ? 'none !important' : 'flex !important',
        animationDuration: '500ms'
      }
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
