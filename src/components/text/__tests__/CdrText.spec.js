import { shallowMount } from '@vue/test-utils';
import CdrText from 'componentdir/text/CdrText';

describe('CdrText', () => {
  it('renders as p by default', () => {
    const wrapper = shallowMount(CdrText);
    expect(wrapper.is('p')).toBe(true);
  });

  it('renders as h1 correctly', () => {
    const wrapper = shallowMount(CdrText, {
      propsData: {
        tag: 'h1',
      },
    });
    expect(wrapper.is('h1')).toBe(true);
  });
});