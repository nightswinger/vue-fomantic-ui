import clsx from "clsx";
import { computed, defineComponent, inject, PropType, withModifiers } from "vue";
import { Image } from "../../elements/Image";
import { Label } from "../../elements/Label";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiDropdownItem',
  emits: ['select'],
  props: {
    active: Boolean,
    flag: String,
    description: String,
    icon: String,
    image: Object,
    item: [Object, String],
    label: Object,
    text: String,
    onSelect: Function as PropType<(event: InputEvent) => void>
  },
  setup(props, { emit }) {
    const { state, hide } = inject('useDropdown') as any

    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.active, 'active'),
        'item'
      )
    })

    const onClick = () => {
      if (!state.multiple) hide()
      emit('select', props.item ? props.item : props.text)
    }

    return {
      computedClass,
      onClick
    }
  },
  render() {
    return (
      <div
        class={this.computedClass}
        onClick={withModifiers(this.onClick, ['stop'])}
      >
        {this.flag && <i class={`${this.flag} flag`}></i>}
        {this.icon && <i class={`${this.icon} icon`}></i>}
        {this.image && <Image {...this.image}></Image>}
        {this.label && <Label {...this.label}></Label>}
        {this.description && <span class="description">{this.description}</span>}
        {this.text}
      </div>
    )
  }
})