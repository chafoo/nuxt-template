import { shallowMount } from '~~/tests/utils/jest-mounts'
import UiLabel from '~/components/ui-label/ui-label.vue'

const wrapper = shallowMount(UiLabel)

describe('ui-button', () => {
  test('is a Vue instance', () => {
    expect(wrapper.findComponent(UiLabel).exists()).toBe(true)
  })
})
