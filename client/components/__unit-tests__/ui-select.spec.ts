import { shallowMount } from '~~/tests/utils/jest-mounts'
import UiSelect from '~/components/ui-select/ui-select.vue'

const wrapper = shallowMount(UiSelect, {
  propsData: {
    options: [
      { label: 'test', value: 'test' }
    ]
  }
})

describe('ui-input', () => {
  test('is a Vue instance', () => {
    expect(wrapper.findComponent(UiSelect).exists()).toBe(true)
  })
})
