import { shallowMount } from '~~/tests/utils/jest-mounts'
import UiInput from '~/components/ui-input/ui-input.vue'
import { UiInputTypes } from '~/components/ui-input/ui-input.interface'

describe('ui-input', () => {
  const getComponent = (options = {}) => {
    return shallowMount(UiInput, {
      ...options
    })
  }

  test('is a Vue instance', () => {
    const wrapper: any = getComponent({})
    expect(wrapper.findComponent(UiInput).exists()).toBe(true)
  })

  test('is active input', () => {
    const wrapper: any = getComponent({})
    const input = wrapper.find('[data-testid="input"]')

    expect(input.element).toBeVisible()
    // @ts-ignore
    expect(wrapper.vm.type).toBe(UiInputTypes.text)
  })

  test('is active textarea', async () => {
    const wrapper: any = getComponent({})
    await wrapper.setProps({ isTextArea: true })
    // @ts-ignore
    expect(wrapper.vm.isTextArea).toBe(true)
  })

  // test('inputListeners', () => {
  //   const wrapper: any = getComponent({})
  //   const localThis = { $emit: jest.fn(), $listeners: {} }
  //   expect(wrapper.computed.inputListeners.call(localThis)).toBeCalled()
  // })
})
