<template>
  <DocComponent
    title="Button"
    description="A button indicates a possible user action"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import ButtonDoc from '@/components/elements/Button/ButtonDoc.vue'
import EmphasisDoc from '@/components/elements/Button/EmphasisDoc.vue'
import AnimatedDoc from '@/components/elements/Button/AnimatedDoc.vue'
import LabeledDoc from '@/components/elements/Button/LabeledDoc.vue'
import IconDoc from '@/components/elements/Button/IconDoc.vue'
import LabeledIconDoc from '@/components/elements/Button/LabeledIconDoc.vue'
import BasicDoc from '@/components/elements/Button/BasicDoc.vue'
import TertiaryDoc from '@/components/elements/Button/TertiaryDoc.vue'
import InvertedDoc from '@/components/elements/Button/InvertedDoc.vue'

// Groups
import ButtonsDoc from '@/components/elements/Button/ButtonsDoc.vue'
import IconButtonsDoc from '@/components/elements/Button/IconButtonsDoc.vue'

// Content
import ConditionalsDoc from '@/components/elements/Button/ConditionalsDoc.vue'

// States
import ActiveDoc from '@/components/elements/Button/ActiveDoc.vue'
import DisabledDoc from '@/components/elements/Button/DisabledDoc.vue'
import LoadingDoc from '@/components/elements/Button/LoadingDoc.vue'

// Variations
import SocialDoc from '@/components/elements/Button/SocialDoc.vue'
import SizeDoc from '@/components/elements/Button/SizeDoc.vue'
import FloatedDoc from '@/components/elements/Button/FloatedDoc.vue'
import ColoredDoc from '@/components/elements/Button/ColoredDoc.vue'
import CompactDoc from '@/components/elements/Button/CompactDoc.vue'
import ToggleDoc from '@/components/elements/Button/ToggleDoc.vue'
import PositiveDoc from '@/components/elements/Button/PositiveDoc.vue'
import NegativeDoc from '@/components/elements/Button/NegativeDoc.vue'
import FluidDoc from '@/components/elements/Button/FluidDoc.vue'
import CircularDoc from '@/components/elements/Button/CircularDoc.vue'
import VerticallyAttachedDoc from '@/components/elements/Button/VerticallyAttachedDoc.vue'
import HorizontallyAttachedDoc from '@/components/elements/Button/HorizontallyAttachedDoc.vue'

// Group Variations
import VerticalButtonsDoc from '@/components/elements/Button/VerticalButtonsDoc.vue'
import StackableButtonsDoc from '@/components/elements/Button/StackableButtonsDoc.vue'
import LabeledIconButtonsDoc from '@/components/elements/Button/LabeledIconButtonsDoc.vue'
import MixedGroupDoc from '@/components/elements/Button/MixedGroupDoc.vue'
import EqualWidthDoc from '@/components/elements/Button/EqualWidthDoc.vue'
import ColoredButtonsDoc from '@/components/elements/Button/ColoredButtonsDoc.vue'
import BasicButtonsDoc from '@/components/elements/Button/BasicButtonsDoc.vue'
import GroupSizesDoc from '@/components/elements/Button/GroupSizesDoc.vue'

const docs = [
  {
    id: 'button',
    label: 'Button',
    category: 'Types',
    component: ButtonDoc,
  },
  {
    id: 'emphasis',
    label: 'Emphasis',
    category: 'Types',
    component: EmphasisDoc,
  },
  {
    id: 'animated',
    label: 'Animated',
    category: 'Types',
    component: AnimatedDoc,
  },
  {
    id: 'labeled',
    label: 'Labeled',
    category: 'Types',
    component: LabeledDoc,
  },
  {
    id: 'icon',
    label: 'Icon',
    category: 'Types',
    component: IconDoc,
  },
  {
    id: 'labeled-icon',
    label: 'Labeled Icon',
    category: 'Types',
    component: LabeledIconDoc,
  },
  {
    id: 'basic',
    label: 'Basic',
    category: 'Types',
    component: BasicDoc,
  },
  {
    id: 'tertiary',
    label: 'Tertiary',
    category: 'Types',
    component: TertiaryDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Types',
    component: InvertedDoc,
  },
  {
    id: 'buttons',
    label: 'Buttons',
    category: 'Groups',
    component: ButtonsDoc,
  },
  {
    id: 'icon-buttons',
    label: 'Icon Buttons',
    category: 'Groups',
    component: IconButtonsDoc,
  },
  {
    id: 'content',
    label: 'Content',
    category: 'Content',
    component: ConditionalsDoc,
  },
  {
    id: 'active',
    label: 'Active',
    category: 'States',
    component: ActiveDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'loading',
    label: 'Loading',
    category: 'States',
    component: LoadingDoc,
  },
  {
    id: 'social',
    label: 'Social',
    category: 'Variations',
    component: SocialDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
  {
    id: 'floated',
    label: 'Floated',
    category: 'Variations',
    component: FloatedDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDoc,
  },
  {
    id: 'compact',
    label: 'Compact',
    category: 'Variations',
    component: CompactDoc,
  },
  {
    id: 'toggle',
    label: 'Toggle',
    category: 'Variations',
    component: ToggleDoc,
  },
  {
    id: 'positive',
    label: 'Positive',
    category: 'Variations',
    component: PositiveDoc,
  },
  {
    id: 'negative',
    label: 'Negative',
    category: 'Variations',
    component: NegativeDoc,
  },
  {
    id: 'fluid',
    label: 'Fluid',
    category: 'Variations',
    component: FluidDoc,
  },
  {
    id: 'circular',
    label: 'Circular',
    category: 'Variations',
    component: CircularDoc,
  },
  {
    id: 'vertically-attached',
    label: 'Vertically Attached',
    category: 'Variations',
    component: VerticallyAttachedDoc,
  },
  {
    id: 'horizontally-attached',
    label: 'Horizontally Attached',
    category: 'Variations',
    component: HorizontallyAttachedDoc,
  },
  {
    id: 'vertical-buttons',
    label: 'Vertical Buttons',
    category: 'Group Variations',
    component: VerticalButtonsDoc,
  },
  {
    id: 'stackable-buttons',
    label: 'Stackable Buttons',
    category: 'Group Variations',
    component: StackableButtonsDoc,
  },
  {
    id: 'labeled-icon-buttons',
    label: 'Labeled Icon Buttons',
    category: 'Group Variations',
    component: LabeledIconButtonsDoc,
  },
  {
    id: 'mixed-group',
    label: 'Mixed Group',
    category: 'Group Variations',
    component: MixedGroupDoc,
  },
  {
    id: 'equal-width',
    label: 'Equal Width',
    category: 'Group Variations',
    component: EqualWidthDoc,
  },
  {
    id: 'colored-buttons',
    label: 'Colored Buttons',
    category: 'Group Variations',
    component: ColoredButtonsDoc,
  },
  {
    id: 'basic-buttons',
    label: 'Basic Buttons',
    category: 'Group Variations',
    component: BasicButtonsDoc,
  },
  {
    id: 'group-sizes',
    label: 'Group Sizes',
    category: 'Group Variations',
    component: GroupSizesDoc,
  },
]
</script>
