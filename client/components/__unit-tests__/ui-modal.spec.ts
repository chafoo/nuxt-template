import { mount } from '~~/tests/utils/jest-mounts'
import UiModal from '~/components/ui-modal/ui-modal.vue'

describe('ui-action-list', () => {
  const getComponent = (options = {}) => {
    return mount(UiModal, { ...options })
  }

  test('is a Vue instance', () => {
    const wrapper: any = getComponent({})
    expect(wrapper.findComponent(UiModal).exists()).toBe(true)
  })

  test('on close', () => {
    const wrapper: any = getComponent({})
    wrapper.vm.onClose()
    expect(wrapper.vm.isOpen).toBe(false)
  })

  test('on open', () => {
    const wrapper: any = getComponent({})
    wrapper.vm.onOpen()
    expect(wrapper.vm.isOpen).toBe(true)
  })
})
