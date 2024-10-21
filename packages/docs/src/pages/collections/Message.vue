<template>
  <DocComponent
    title="Message"
    description="A message displays information that explains nearby content"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import MessageDoc from '@/components/collections/Message/MessageDoc.vue'
import ListMessageDoc from '@/components/collections/Message/ListMessageDoc.vue'
import IconMessageDoc from '@/components/collections/Message/IconMessageDoc.vue'
import DismissableBlockDoc from '@/components/collections/Message/DismissableBlockDoc.vue'

// States
import HiddenDoc from '@/components/collections/Message/HiddenDoc.vue'
import VisibleDoc from '@/components/collections/Message/VisibleDoc.vue'

// Variations
import AlignedDoc from '@/components/collections/Message/AlignedDoc.vue'
import FloatingDoc from '@/components/collections/Message/FloatingDoc.vue'
import CompactDoc from '@/components/collections/Message/CompactDoc.vue'
import AttachedDoc from '@/components/collections/Message/AttachedDoc.vue'
import WarningDoc from '@/components/collections/Message/WarningDoc.vue'
import InfoDoc from '@/components/collections/Message/InfoDoc.vue'
import PositiveSuccessDoc from '@/components/collections/Message/PositiveSuccessDoc.vue'
import NegativeErrorDoc from '@/components/collections/Message/NegativeErrorDoc.vue'
import ColoredDoc from '@/components/collections/Message/ColoredDoc.vue'
import SizeDoc from '@/components/collections/Message/SizeDoc.vue'

const docs = [
  {
    id: 'message',
    label: 'Message',
    category: 'Types',
    component: MessageDoc,
  },
  {
    id: 'list-message',
    label: 'List Message',
    category: 'Types',
    component: ListMessageDoc,
  },
  {
    id: 'icon-message',
    label: 'Icon Message',
    category: 'Types',
    component: IconMessageDoc,
  },
  {
    id: 'dismissable-block',
    label: 'Dismissable Block',
    category: 'Types',
    component: DismissableBlockDoc,
  },
  {
    id: 'hidden',
    label: 'Hidden',
    category: 'States',
    component: HiddenDoc,
  },
  {
    id: 'visible',
    label: 'Visible',
    category: 'States',
    component: VisibleDoc,
  },
  {
    id: 'aligned',
    label: 'Aligned',
    category: 'Variations',
    component: AlignedDoc,
  },
  {
    id: 'floating',
    label: 'Floating',
    category: 'Variations',
    component: FloatingDoc,
  },
  {
    id: 'compact',
    label: 'Compact',
    category: 'Variations',
    component: CompactDoc,
  },
  {
    id: 'attached',
    label: 'Attached',
    category: 'Variations',
    component: AttachedDoc,
  },
  {
    id: 'warning',
    label: 'Warning',
    category: 'Variations',
    component: WarningDoc,
  },
  {
    id: 'info',
    label: 'Info',
    category: 'Variations',
    component: InfoDoc,
  },
  {
    id: 'positive-success',
    label: 'Positive / Success',
    category: 'Variations',
    component: PositiveSuccessDoc,
  },
  {
    id: 'negative-error',
    label: 'Negative / Error',
    category: 'Variations',
    component: NegativeErrorDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
]
</script>
