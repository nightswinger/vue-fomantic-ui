import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import Icon from "./Icon";

describe('SuiIcon', () => {
  describe('primary', () => {
    it('renders the primary class', async () => {
      const wrapper = mount(Icon, {
        props: {
          primary: true,
        }
      });

      expect(wrapper.classes()).toContain('primary');
    });
  })

  describe('secondary', () => {
    it('renders the secondary class', async () => {
      const wrapper = mount(Icon, {
        props: {
          secondary: true,
        }
      });

      expect(wrapper.classes()).toContain('secondary');
    });
  })

  describe('circular', () => {
    describe('circular with colored', () => {
      it('renders the circular colored class', async () => {
        const wrapper = mount(Icon, {
          props: {
            circular: true,
            colored: true,
          }
        });

        expect(wrapper.classes()).toContain('circular');
        expect(wrapper.classes()).toContain('colored');
      });
    })
  })
});
