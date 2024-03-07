import { computed, defineComponent, inject, ref, Ref } from "vue";
import AccordionContent from "./AccordionContent"
import Icon from "../Icon/Icon";
import clsx from "clsx";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiAccordionTab',
  props: {
    index: Number,
    title: String,
  },
  setup(props) {
    const isTabActive: any = inject('isTabActive')
    const updateActiveIndex: any = inject('updateActiveIndex')

    const titleClass = computed(() => {
      return clsx(
        computeKeyOnly(isTabActive(props.index), 'active'),
        'title'
      )
    })

    return {
      isTabActive,
      updateActiveIndex,
      titleClass
    }
  },
  render() {
    return (
      <>
        <div class={this.titleClass}
          onClick={() => this.updateActiveIndex(this.index)}
        >
          <Icon name="dropdown" />
            {this.title}
          </div>
        <AccordionContent active={this.isTabActive(this.index)}>
          {this.$slots.default?.()}
        </AccordionContent>
      </>
    )
  }
})