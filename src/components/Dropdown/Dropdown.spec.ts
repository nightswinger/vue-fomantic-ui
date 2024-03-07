import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

describe('SuiDropdown', () => {
  describe('selection with multiple', () => {
    it('allows multiple selections when multiple prop is true', async () => {
      const wrapper = mount(Dropdown, {
        props: {
          selection: true,
          multiple: true,
          options: [{ text: 'Option 1', value: 1 }, { text: 'Option 2', value: 2 }],
          modelValue: [],
          'onUpdate:modelValue': (v) => wrapper.setProps({ modelValue: v })
        }
      });

      const item = wrapper.findComponent(DropdownItem);
      await item?.trigger('click');

      expect(wrapper.props('modelValue')).toEqual([{ text: 'Option 1', value: 1 }]);

      const otherItem = wrapper.findComponent(DropdownItem);
      await otherItem?.trigger('click');

      expect(wrapper.props('modelValue')).toEqual([{ text: 'Option 1', value: 1 }, { text: 'Option 2', value: 2 }]);
    });
  });

  describe('selection with search', () => {
    it('renders search input when search prop is true', async () => {
      const wrapper = mount(Dropdown, {
        props: {
          selection: true,
          search: true,
          options: [{ text: 'Option 1', value: 1 }, { text: 'Option 2', value: 2 }],
        }
      });
      expect(wrapper.find('input[type="text"].search').exists()).toBeTruthy();
    });

    it('does not render search input when search prop is false', async () => {
      const wrapper = mount(Dropdown, {
        props: {
          selection: true,
          search: false,
          options: [{ text: 'Option 1', value: 1 }, { text: 'Option 2', value: 2 }],
        }
      });
      expect(wrapper.find('input[type="text"].search').exists()).toBeFalsy();
    });
  });

  describe('selection with multiple and search', () => {
    it('filters options based on text input when multiple and search properties are true', async () => {
      const options = [
        { text: 'Option 1', value: '1' },
        { text: 'Option 2', value: '2' },
        { text: 'Test Option 3', value: '3' }
      ];

      const wrapper = mount(Dropdown, {
        props: {
          selection: true,
          multiple: true,
          search: true,
          options,
        }
      });

      await wrapper.find('input[type="text"].search').setValue('Test');

      const filteredOptions = wrapper.findAllComponents(DropdownItem);
      expect(filteredOptions).toHaveLength(1);
      expect(filteredOptions[0].text()).toBe('Test Option 3');
    });
  });
});
