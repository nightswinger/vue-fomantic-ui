import { describe, it, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Card from "./Card"

describe('Card', () => {
  describe('href', () => {
    it('renders an anchor tag when the href prop is present', async () => {
      const wrapper = mount(Card, {
        props: {
          href: 'https://example.com',
        },
        slots: {
          default: 'Hello',
        }
      })

      const anchor = wrapper.find('a')
      expect(anchor.exists()).toBe(true)
      expect(anchor.attributes('href')).toBe('https://example.com')
      expect(anchor.text()).toBe('Hello')
    })
  })
})
