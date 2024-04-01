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

  describe('description', () => {
    it('renders description when the description prop is provided', async () => {
      const wrapper = mount(Step, {
        props: {
          description: 'Test Description'
        }
      })

      const description = wrapper.find('.description')
      expect(description.exists()).toBe(true)
      expect(description.text()).toBe('Test Description')
    })
  })

  describe('icon', () => {
    it('renders icon when the icon prop is provided', async () => {
      const wrapper = mount(Step, {
        props: {
          icon: 'icon'
        }
      })

      const icon = wrapper.find('i')
      expect(icon.exists()).toBe(true)
      expect(icon.classes()).toContain('icon')
    })
  })
})
