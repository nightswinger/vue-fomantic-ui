import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";
import BreadcrumbDivider from "./BreadcrumbDivider";
import BreadcrumbSection from "./BreadcrumbSection";

export default defineComponent({
  name: "SuiBreadcrumb",
  props: {
    icon: String,
    inverted: Boolean,
    sections: { type: Array, default: () => [] },
    size: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.size,
        computeKeyOnly(props.inverted, 'inverted'),
        'breadcrumb'
      )
    })

    return { computedClass }
  },
  render() {
    const renderSections = () => {
      return this.sections?.map((sec: any, i: number) => {
        const sectionProps = {
          active: sec.active,
          href: sec.href,
          link: sec.link,
          to: sec.to
        }

        return (
          <>
            <BreadcrumbSection {...sectionProps}>
              {sec.content}
            </BreadcrumbSection>
            {this.sections.length !== (i+1) && 
              <BreadcrumbDivider icon={this.icon}> / </BreadcrumbDivider>}
          </>
        )
      })
    }

    return (
      <div class={this.computedClass}>
        {this.$slots.default?.() || renderSections()}
      </div>
    )
  }
});
