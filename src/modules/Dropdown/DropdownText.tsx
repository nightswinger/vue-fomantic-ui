import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { Image } from "../../elements/Image";
import { Label } from "../../elements/Label";
import { computeKeyOnly } from "../../utils/classNameHelper";

type TextItem = {
  flag: string,
  text: string,
  label: any,
  image: any
}

export default defineComponent({
  name: 'SuiDropdownText',
  props: {
    filtered: Boolean,
    item: [Object, String],
    placeholder: String,
    text: String,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.filtered, 'filtered'),
        computeKeyOnly(!props.text && !props.item || Array.isArray(props.item) && props.item.length === 0, 'default'),
        'text'
      )
    })

    return {
      computedClass
    }
  },
  render() {
    let content
    if (this.item && !Array.isArray(this.item)) {
      if (typeof this.item === 'object') {
        const { flag, text } = this.item as TextItem

        content = (
          <>
            {flag && <i class={`${flag} flag`}></i>}
            {text}
          </>
        )
      } else {
        content = this.item
      }
    } else {
      content = this.text || this.placeholder
    }

    const image = typeof this.item === 'object' ? (this.item as TextItem)?.image : null
    const label = typeof this.item === 'object' ? (this.item as TextItem)?.label : null

    return (
      <div class={this.computedClass}>
        {image && <Image {...image}></Image>}
        {label && <Label {...label}></Label>}
        {content}
      </div>
    )
  }
})