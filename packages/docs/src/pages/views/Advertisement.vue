<template>
  <DocComponent
    title="Advertisement"
    description="An ad displays third-party promotional content"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import AdDoc from '@/components/views/Advertisement/AdDoc.vue'
import CommonUnitsDoc from '@/components/views/Advertisement/CommonUnitsDoc.vue'
import MobileDoc from '@/components/views/Advertisement/MobileDoc.vue'
import RectangleDoc from '@/components/views/Advertisement/RectangleDoc.vue'
import ButtonDoc from '@/components/views/Advertisement/ButtonDoc.vue'
import SkyscraperDoc from '@/components/views/Advertisement/SkyscraperDoc.vue'
import BannerDoc from '@/components/views/Advertisement/BannerDoc.vue'
import LeaderboardsDoc from '@/components/views/Advertisement/LeaderboardsDoc.vue'
import PanoramaDoc from '@/components/views/Advertisement/PanoramaDoc.vue'
import NetboardDoc from '@/components/views/Advertisement/NetboardDoc.vue'

// Variations
import CenteredDoc from '@/components/views/Advertisement/CenteredDoc.vue'
import TestDoc from '@/components/views/Advertisement/TestDoc.vue'

const docs = [
  {
    id: 'ad',
    label: 'Ad',
    category: 'Types',
    component: AdDoc,
  },
  {
    id: 'common-units',
    label: 'Common Units',
    category: 'Types',
    component: CommonUnitsDoc,
  },
  {
    id: 'mobile',
    label: 'Mobile',
    category: 'Types',
    component: MobileDoc,
  },
  {
    id: 'rectangle',
    label: 'Rectangle',
    category: 'Types',
    component: RectangleDoc,
  },
  {
    id: 'button',
    label: 'Button',
    category: 'Types',
    component: ButtonDoc,
  },
  {
    id: 'skyscraper',
    label: 'Skyscraper',
    category: 'Types',
    component: SkyscraperDoc,
  },
  {
    id: 'banner',
    label: 'Banner',
    category: 'Types',
    component: BannerDoc,
  },
  {
    id: 'leaderboards',
    label: 'Leaderboards',
    category: 'Types',
    component: LeaderboardsDoc,
  },
  {
    id: 'panorama',
    label: 'Panorama',
    category: 'Types',
    component: PanoramaDoc,
  },
  {
    id: 'netboard',
    label: 'Netboard',
    category: 'Types',
    component: NetboardDoc,
  },
  {
    id: 'centered',
    label: 'Centered',
    category: 'Variations',
    component: CenteredDoc,
  },
  {
    id: 'test',
    label: 'Test',
    category: 'Variations',
    component: TestDoc,
  },
]
</script>
