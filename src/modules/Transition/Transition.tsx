import { computed, defineComponent, PropType, Transition as VTransition } from "vue";

import { AnimationType, useAnimate } from "./useAnimate";

export default defineComponent({
  name: 'SuiTransition',
  props: {
    animation: {
      type: String as PropType<AnimationType>,
      default: 'fade',
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  setup(props) {
    const [enter, leave] = useAnimate(props.animation);

    const seconds = computed(() => props.duration ? props.duration / 1000 : undefined);

    const onEnter = (el: Element, done: () => void) => {
      if (!enter) return done();

      const animation = enter(el, { duration: seconds.value });
      animation.play();
      animation.finished.then(done);
    };
    const onLeave = (el: Element, done: () => void) => {
      if (!leave) return done();

      const animation = leave(el, { duration: seconds.value });
      animation.play();
      animation.finished.then(done);
    };

    return {
      onEnter,
      onLeave,
    };
  },
  render() {
    return (
      <VTransition
        onEnter={this.onEnter}
        onLeave={this.onLeave}
        css={false}
      >
        {this.$slots.default?.()}
      </VTransition>
    )
  } 
});
