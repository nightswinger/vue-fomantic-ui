<template>
  <DocComponent
    title="Menu"
    description="A menu displays grouped navigation actions"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import MenuDoc from '@/components/collections/Menu/MenuDoc.vue'
import SecondaryMenuDoc from '@/components/collections/Menu/SecondaryMenuDoc.vue'
import PointingDoc from '@/components/collections/Menu/PointingDoc.vue'
import TabularDoc from '@/components/collections/Menu/TabularDoc.vue'
import TextDoc from '@/components/collections/Menu/TextDoc.vue'
import VerticalMenuDoc from '@/components/collections/Menu/VerticalMenuDoc.vue'
import PaginationDoc from '@/components/collections/Menu/PaginationDoc.vue'

// Content
import HeaderDoc from '@/components/collections/Menu/HeaderDoc.vue'
import InputDoc from '@/components/collections/Menu/InputDoc.vue'
import ButtonDoc from '@/components/collections/Menu/ButtonDoc.vue'
import LinkItemDoc from '@/components/collections/Menu/LinkItemDoc.vue'
import DropdownItemDoc from '@/components/collections/Menu/DropdownItemDoc.vue'
import RightMenuDoc from '@/components/collections/Menu/RightMenuDoc.vue'
import SubMenuDoc from '@/components/collections/Menu/SubMenuDoc.vue'

// States
import HoverDoc from '@/components/collections/Menu/HoverDoc.vue'
import ActiveDoc from '@/components/collections/Menu/ActiveDoc.vue'

// Variations
import StackableDoc from '@/components/collections/Menu/StackableDoc.vue'
import InvertedDoc from '@/components/collections/Menu/InvertedDoc.vue'
import ColoredDoc from '@/components/collections/Menu/ColoredDoc.vue'
import IconsDoc from '@/components/collections/Menu/IconsDoc.vue'
import LabeledIconDoc from '@/components/collections/Menu/LabeledIconDoc.vue'
import FluidDoc from '@/components/collections/Menu/FluidDoc.vue'
import CompactDoc from '@/components/collections/Menu/CompactDoc.vue'
import EvenlyDividedDoc from '@/components/collections/Menu/EvenlyDividedDoc.vue'
import AttachedDoc from '@/components/collections/Menu/AttachedDoc.vue'
import SizeDoc from '@/components/collections/Menu/SizeDoc.vue'
import FittedDoc from '@/components/collections/Menu/FittedDoc.vue'
import BorderlessDoc from '@/components/collections/Menu/BorderlessDoc.vue'

const docs = [
  {
    id: 'menu',
    label: 'Menu',
    category: 'Types',
    component: MenuDoc,
  },
  {
    id: 'secondary-menu',
    label: 'Secondary Menu',
    category: 'Types',
    component: SecondaryMenuDoc,
  },
  {
    id: 'pointing',
    label: 'Pointing',
    category: 'Types',
    component: PointingDoc,
  },
  {
    id: 'tabular',
    label: 'Tabular',
    category: 'Types',
    component: TabularDoc,
  },
  {
    id: 'text',
    label: 'Text',
    category: 'Types',
    component: TextDoc,
  },
  {
    id: 'vertical-menu',
    label: 'Vertical Menu',
    category: 'Types',
    component: VerticalMenuDoc,
  },
  {
    id: 'pagination',
    label: 'Pagination',
    category: 'Types',
    component: PaginationDoc,
  },
  {
    id: 'header',
    label: 'Header',
    category: 'Content',
    component: HeaderDoc,
  },
  {
    id: 'input',
    label: 'Input',
    category: 'Content',
    component: InputDoc,
  },
  {
    id: 'button',
    label: 'Button',
    category: 'Content',
    component: ButtonDoc,
  },
  {
    id: 'link-item',
    label: 'Link Item',
    category: 'Content',
    component: LinkItemDoc,
  },
  {
    id: 'dropdown-item',
    label: 'Dropdown Item',
    category: 'Content',
    component: DropdownItemDoc,
  },
  {
    id: 'right-menu',
    label: 'Right Menu',
    category: 'Content',
    component: RightMenuDoc,
  },
  {
    id: 'sub-menu',
    label: 'Sub Menu',
    category: 'Content',
    component: SubMenuDoc,
  },
  {
    id: 'hover',
    label: 'Hover',
    category: 'States',
    component: HoverDoc,
  },
  {
    id: 'active',
    label: 'Active',
    category: 'States',
    component: ActiveDoc,
  },
  {
    id: 'stackable',
    label: 'Stackable',
    category: 'Variations',
    component: StackableDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDoc,
  },
  {
    id: 'icons',
    label: 'Icons',
    category: 'Variations',
    component: IconsDoc,
  },
  {
    id: 'labeled-icon',
    label: 'Labeled Icon',
    category: 'Variations',
    component: LabeledIconDoc,
  },
  {
    id: 'fluid',
    label: 'Fluid',
    category: 'Variations',
    component: FluidDoc,
  },
  {
    id: 'compact',
    label: 'Compact',
    category: 'Variations',
    component: CompactDoc,
  },
  {
    id: 'evenly-divided',
    label: 'Evenly Divided',
    category: 'Variations',
    component: EvenlyDividedDoc,
  },
  {
    id: 'attached',
    label: 'Attached',
    category: 'Variations',
    component: AttachedDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
  {
    id: 'fitted',
    label: 'Fitted',
    category: 'Variations',
    component: FittedDoc,
  },
  {
    id: 'borderless',
    label: 'Borderless',
    category: 'Variations',
    component: BorderlessDoc,
  },
]
</script>
