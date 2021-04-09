import { computed, defineComponent, inject, ref, Ref } from "vue";
import AccordionContent from "./AccordionContent"
import Icon from "../../elements/Icon/Icon";
import clsx from "clsx";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiAccordionTab',
  props: {
    index: Number,
    title: String,
  },
  setup(props) {
    const activeIndex: Ref<number> = inject('activeIndex', ref(-1))
    const updateActiveIndex: any = inject('updateActiveIndex')

    const isActive = computed(() => props.index === activeIndex.value)

    const titleClass = computed(() => {
      return clsx(
        computeKeyOnly(isActive.value, 'active'),
        'title'
      )
    })

    return {
      isActive,
      updateActiveIndex,
      titleClass
    }
  },
  render() {
    return (
      <>
        <div class={this.titleClass}
          onClick={() => this.isActive ? this.updateActiveIndex(-1) : this.updateActiveIndex(this.index)}
        >
          <Icon name="dropdown" />
            {this.title}
          </div>
        <AccordionContent active={this.isActive}>
          {this.$slots.default?.()}
        </AccordionContent>
      </>
    )
  }
})