import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Menu from './Menu'
import MenuItem from './MenuItem'

describe('Menu', () =>{
  describe('activeIndex', () => {
    it('should initialize with the correct activeIndex', async () => {
      const wrapper = mount(Menu, {
        props: { activeIndex: 1, items: ['Item 1', 'Item 2', 'Item 3'] }
      })

      expect(wrapper.vm.activeIndex).toBe(1)
    })

    it('updates activeIndex when a menu item is selected', async () => {
      const wrapper = mount(Menu, {
        props: { items: ['Item 1', 'Item 2', 'Item 3'] }
      })

      await wrapper.findAllComponents(MenuItem)[1].trigger('click')

      expect(wrapper.emitted()['update:activeIndex'][0]).toEqual([1])
      expect(wrapper.emitted().selected[0]).toEqual(['Item 2'])
    })
  })
})
