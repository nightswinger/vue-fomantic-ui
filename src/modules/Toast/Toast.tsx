import clsx from "clsx";
import { PropType, computed, defineComponent, onMounted, ref } from "vue";

import { Progress } from "../Progress";

import type { ToastType } from "./toasts";
import type { Color } from "../../composables/color";

export const Toast = defineComponent({
  name: 'SuiToast',
  emits: ['click', 'close'],
  props: {
    id: Number,
    displayTime: {
      type: Number,
      default: 3000,
    },
    type: String as PropType<ToastType>,
    title: String,
    message: {
      type: String,
      required: true,
    },
    showProgress: {
      type: String as PropType<'top'|'bottom'>,
    },
    showProgressColor: String as PropType<Color>,
  },
  setup(props, { emit }) {
    const classes = computed(() => {
      return clsx(
        props.type || 'neutral',
        'ui toast compact'
      );
    });

    const progress = ref(100);

    const animateProgressBar = () => {
      const interval = props.displayTime / 100;

      setTimeout(() => {
        const timer = setInterval(() => {
          if (progress.value <= 0) {
            clearInterval(timer);
          }
          progress.value -= 1;
        }, interval)
      }, 500);
    };

    onMounted(() => props.showProgress && animateProgressBar());

    setTimeout(() => emit('close'), props.displayTime + 750);

    return {
      classes,
      progress,
    };
  },
  render() {
    return (
      <div
        class="floating toast-box compact"
        style="display: block !important;"
        onAnimationend={() => console.log('animation end')}
      >
        {this.showProgress === 'top' && (
          <Progress
            inverted
            color={this.showProgressColor}
            attached={this.showProgress}
            percent={this.progress}
          />
        )}
        <div
          role="alert"
          class={this.classes}
          onClick={() => this.$emit('click')}
        >
          <div class="content">
            {this.title && <div class="ui header">{this.title}</div>}
            <div class="message">
              {this.message}
            </div>
          </div>
          {/* <span class="wait progressing pausable"></span> */}
        </div>
        {this.showProgress === 'bottom' && (
          <Progress
            inverted
            color={this.showProgressColor}
            attached={this.showProgress}
            percent={this.progress}
          />
        )}
      </div>
    )
  },
});

export type Toast = InstanceType<typeof Toast>;
