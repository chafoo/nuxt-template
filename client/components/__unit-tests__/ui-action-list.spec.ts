import { mount } from '~~/tests/utils/jest-mounts'
import UiActionList from '~/components/ui-action-list/ui-action-list.vue'

describe('ui-action-list', () => {
  const getComponent = (options = {
    propsData: {
      actions: [] as []
    }
  }) => {
    return mount(UiActionList, { ...options })
  }

  test('is a Vue instance', () => {
    const wrapper: any = getComponent({
      propsData: {
        actions: [] as []
      }
    })
    expect(wrapper.findComponent(UiActionList).exists()).toBe(true)
  })

  test('on click', () => {
    const wrapper: any = getComponent({
      propsData: {
        actions: [] as []
      }
    })
    wrapper.vm.onClick('test')
    expect(wrapper.vm.$emit).toBeCalledWith('test')
  })
})
