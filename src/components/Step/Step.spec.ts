import { describe, it, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Step from "./Step"

describe('Step', () => {
  describe('title', () => {
    it('renders title when the title prop is provided', async () => {
      const wrapper = mount(Step, {
        props: {
          title: 'Test Title'
        }
      })

      const title = wrapper.find('.title')
      expect(title.exists()).toBe(true)
      expect(title.text()).toBe('Test Title')
    })
  })
})
