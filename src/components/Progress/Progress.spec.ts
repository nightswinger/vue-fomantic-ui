import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import Progress from "./Progress";

describe('SuiProgress', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Progress);

    expect(wrapper.classes()).toContain('ui');
    expect(wrapper.classes()).toContain('progress');
  });

  it('handles percent prop correctly', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50 },
    });

    expect(wrapper.attributes('data-percent')).toBe('50');
    expect(wrapper.find('.bar').attributes('style')).toContain('width: 50%;');
  });

  it('applies color classes correctly', () => {
    const wrapper = mount(Progress, {
      props: { color: 'red' },
    });

    expect(wrapper.classes()).toContain('red');
  });

  it('applies size class correctly', () => {
    const wrapper = mount(Progress, {
      props: { size: 'tiny' },
    });

    expect(wrapper.classes()).toContain('tiny');
  });

  it('displays progress text when progress prop is true', () => {
    const wrapper = mount(Progress, {
      props: { progress: true, percent: 75 },
    });

    const progressText = wrapper.find('.progress');
    expect(progressText.exists()).toBe(true);
    expect(progressText.text()).toBe('75%');
  });

  describe('indeterminate', () => {
    it('applies indeterminate class correctly', () => {
      const wrapper = mount(Progress, {
        props: { indeterminate: true },
      });

      expect(wrapper.classes()).toContain('indeterminate');
    });

    it('applies indeterminate class correctly with string value', () => {
      const wrapper = mount(Progress, {
        props: { indeterminate: 'filling' },
      });

      expect(wrapper.classes()).toContain('indeterminate');
      expect(wrapper.classes()).toContain('filling');
    });
  });
});
