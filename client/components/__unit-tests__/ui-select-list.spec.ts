import { mount } from '~~/tests/utils/jest-mounts'
import UiSelectList from '~/components/ui-select-list/ui-select-list.vue'

describe('ui-select-list component', () => {
  const getComponent = ({
    options = {
      propsData: { items: [{ options: [{ value: 'test', label: 'test' }] }] }
    }
  }: any) => {
    return mount(UiSelectList, {
      ...options
    })
  }

  test('is a Vue instance', () => {
    const wrapper: any = getComponent({})
    expect(wrapper.findComponent(UiSelectList).exists()).toBe(true)
  })

  test.each([
    [{ test: null, fest: null }, [{ id: 'test' }], { test: null, fest: null }],
    [{ test: null }, [{ id: 'test' }], { test: null }]
  ])('completeInputs', (inputs: any, items: any[], expected: any) => {
    items.map((item) => {
      item.options = [{ value: 'test', label: 'test' }]
      return item
    })
    const wrapper: any = getComponent({ options: { propsData: { items } } })
    expect(wrapper.vm.completeInputs(inputs)).toStrictEqual(expected)
  })
})
