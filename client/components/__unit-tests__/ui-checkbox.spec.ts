import { shallowMount } from '~~/tests/utils/jest-mounts'
import UiCheckbox from '~/components/ui-checkbox/ui-checkbox.vue'

const wrapper = shallowMount(UiCheckbox)

describe('ui-checkbox', () => {
  const checkboxInput = wrapper.find('[data-testid="input"]')
  const checkboxCheckmark = wrapper.find('[data-testid="checkmark"]')

  test('is a Vue instance', () => {
    expect(wrapper.findComponent(UiCheckbox).exists()).toBe(true)
  })

  test('is custom checkmark', () => {
    expect(checkboxInput.exists()).toBe(true)
    expect(checkboxCheckmark.element).toBeVisible()
  })

  test('is triggered checked', async () => {
    await wrapper.setProps({ value: true })
    // @ts-ignore
    expect(wrapper.vm.value_).toBe(true)
  })
})
