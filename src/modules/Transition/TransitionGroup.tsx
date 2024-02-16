import { computed, defineComponent, PropType, TransitionGroup as VTransitionGroup } from "vue";

import { AnimationType, useAnimate } from "./useAnimate";

export default defineComponent({
  name: 'SuiTransitionGroup',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    animation: {
      type: String as PropType<AnimationType>,
      default: 'fade',
    },
  },
  setup(props) {
    const [enter, leave] = useAnimate(props.animation);

    const onEnter = computed(() => {
      return (el: Element, done: () => void) => {
        if (!enter) return done();

        const duration = 0.5;
        const height = [0, `${el.clientHeight}px`];
  
        const animation = enter(el, {duration, keyframesOverride: { height }});
        animation.play();
        animation.finished.then(done);
      };
    });
  
    const onLeave = computed(() => {
      return (el: Element, done: () => void) => {
        if (!leave) return done();

        const duration = 0.5;
        const height = [`${el.clientHeight}px`, 0];
  
        const animation = leave(el, {duration, keyframesOverride: { height }});
        animation.play();
        animation.finished.then(done);
      };
    });

    return {
      onEnter,
      onLeave,
    };
  },
  render() {
    return (
      <VTransitionGroup
        tag={this.tag}
        onEnter={this.onEnter}
        onLeave={this.onLeave}
        css={false}
      >
        {this.$slots.default?.()}
      </VTransitionGroup>
    )
  }
});
