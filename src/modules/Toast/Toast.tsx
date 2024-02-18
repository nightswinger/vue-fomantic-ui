import clsx from "clsx";
import { PropType, computed, defineComponent } from "vue";

import { ToastType } from "./toasts";

export default defineComponent({
  name: 'SuiToast',
  emits: ['click', 'close'],
  props: {
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
  },
  setup(props, { emit }) {
    const classes = computed(() => {
      return clsx(
        props.type || 'neutral',
        'ui toast compact'
      );
    });

    setTimeout(() => emit('close'), props.displayTime);

    return {
      classes,
    };
  },
  render() {
    return (
      <div
        class="floating toast-box compact"
        style="display: block !important;"
      >
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
          <span class="wait progressing pausable"></span>
        </div>
      </div>
    )
  },
});
